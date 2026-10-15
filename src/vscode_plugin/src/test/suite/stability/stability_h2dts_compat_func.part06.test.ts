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

suite('Stability_H2DTS_COMPAT_FUNC_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0063_NS_COMPAT193_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0063_NS_COMPAT193_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0063_ns_compat193_std_shared_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat193(std::shared_ptr<char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0063_ns_compat193_std_shared_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0063_ns_compat193_std_shared_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0063_ns_compat193_std_shared_ptr_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0063_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0063_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0063_ns_compat193_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0064_COMPAT193_BAD_TYPE_193
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0064_COMPAT193_BAD_TYPE_193
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_193; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0064_compat193_bad_type_193', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat193(bad_type_193 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0064_compat193_bad_type_193 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0064_compat193_bad_type_193 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0064_compat193_bad_type_193 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_193",
          "h2dts_compat_func_0064_compat193_bad_type_193 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0064_compat193_bad_type_193 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0065_COMPAT193_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0065_COMPAT193_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0065_compat193_std_shared_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat193(std::shared_ptr<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0065_compat193_std_shared_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0065_compat193_std_shared_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0065_compat193_std_shared_ptr_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0065_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0065_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0065_compat193_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0066_E193
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0066_E193
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E193; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0066_e193', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E193 { A, B }; void f(E193 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0066_e193 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0066_e193 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0066_e193 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0066_e193 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0067_COMPAT193_STD_SHARED_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0067_COMPAT193_STD_SHARED_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0067_compat193_std_shared_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat193(std:shared_ptr<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0067_compat193_std_shared_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0067_compat193_std_shared_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0067_compat193_std_shared_ptr_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<char>",
          "h2dts_compat_func_0067_compat193_std_shared_ptr_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0067_compat193_std_shared_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0068_COMPAT194_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0068_COMPAT194_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0068_compat194_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat194(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0068_compat194_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0068_compat194_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0068_compat194_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0068_compat194_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0068_compat194_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0069_COMPAT194_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0069_COMPAT194_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0069_compat194_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat194(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0069_compat194_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069_compat194_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0069_compat194_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0069_compat194_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0069_compat194_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT194_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT194_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0070_compat194_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat194(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0070_compat194_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070_compat194_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0070_compat194_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0070_compat194_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0070_compat194_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT194_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT194_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0071_compat194_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat194(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0071_compat194_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071_compat194_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0071_compat194_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0071_compat194_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0071_compat194_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT194_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT194_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0072_compat194_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat194(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0072_compat194_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072_compat194_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0072_compat194_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0072_compat194_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0072_compat194_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT197_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT197_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0001_compat197_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0001_compat197_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001_compat197_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0001_compat197_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0001_compat197_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0001_compat197_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0002_NS_COMPAT197_STD_SHARED_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0002_NS_COMPAT197_STD_SHARED_PTR_CHAR32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0002_ns_compat197_std_shared_ptr_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat197(std::shared_ptr<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0002_ns_compat197_std_shared_ptr_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0002_ns_compat197_std_shared_ptr_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0002_ns_compat197_std_shared_ptr_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0002_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0002_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0002_ns_compat197_std_shared_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT197_BAD_TYPE_197
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT197_BAD_TYPE_197
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_197; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0003_compat197_bad_type_197', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(bad_type_197 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_compat197_bad_type_197 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_compat197_bad_type_197 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0003_compat197_bad_type_197 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_197",
          "h2dts_compat_func_0003_compat197_bad_type_197 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0003_compat197_bad_type_197 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT197_STD_SHARED_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT197_STD_SHARED_PTR_CHAR32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0004_compat197_std_shared_ptr_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std::shared_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_compat197_std_shared_ptr_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_compat197_std_shared_ptr_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0004_compat197_std_shared_ptr_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0004_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0004_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0004_compat197_std_shared_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0005_E197
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0005_E197
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E197; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0005_e197', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E197 { A, B }; void f(E197 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_e197 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0005_e197 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0005_e197 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0005_e197 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0006_COMPAT197_STD_SHARED_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0006_COMPAT197_STD_SHARED_PTR_CHAR32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0006_compat197_std_shared_ptr_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(std:shared_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_compat197_std_shared_ptr_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_compat197_std_shared_ptr_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0006_compat197_std_shared_ptr_char32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<char32_t>",
          "h2dts_compat_func_0006_compat197_std_shared_ptr_char32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0006_compat197_std_shared_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT266_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT266_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0007_compat266_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat266_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0007_compat266_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0007_compat266_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0007_compat266_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0007_compat266_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT266_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT266_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0008_compat266_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_compat266_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008_compat266_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0008_compat266_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0008_compat266_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0008_compat266_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT266_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT266_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0009_compat266_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0009_compat266_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009_compat266_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0009_compat266_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0009_compat266_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0009_compat266_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT266_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT266_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0010_compat266_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0010_compat266_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010_compat266_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0010_compat266_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0010_compat266_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0010_compat266_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT266_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT266_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0011_compat266_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0011_compat266_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011_compat266_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0011_compat266_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0011_compat266_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0011_compat266_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0012_NS_COMPAT266_STD_FUNCTION_STD_STRING_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0012_NS_COMPAT266_STD_FUNCTION_STD_STRING_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::function<std::string(char *)>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0012_ns_compat266_std_function_std_string_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat266(std::function<std::string(char *)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0012_ns_compat266_std_function_std_string_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0012_ns_compat266_std_function_std_string_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0012_ns_compat266_std_function_std_string_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0012_param convert output non-empty");
        assert.strictEqual(converted, "(param0: string)=>string", "h2dts_compat_func_0012_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0012_ns_compat266_std_function_std_string_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT266_BAD_TYPE_266
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT266_BAD_TYPE_266
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_266; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0013_compat266_bad_type_266', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(bad_type_266 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_compat266_bad_type_266 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_compat266_bad_type_266 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0013_compat266_bad_type_266 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_266",
          "h2dts_compat_func_0013_compat266_bad_type_266 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0013_compat266_bad_type_266 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT266_STD_FUNCTION_STD_STRING_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT266_STD_FUNCTION_STD_STRING_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::function<std::string(char *)>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0014_compat266_std_function_std_string_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std::function<std::string(char *)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_compat266_std_function_std_string_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_compat266_std_function_std_string_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0014_compat266_std_function_std_string_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0014_param convert output non-empty");
        assert.strictEqual(converted, "(param0: string)=>string", "h2dts_compat_func_0014_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0014_compat266_std_function_std_string_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0015_E266
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0015_E266
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E266; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0015_e266', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E266 { A, B }; void f(E266 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_e266 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0015_e266 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0015_e266 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0015_e266 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0016_COMPAT266_STD_FUNCTION_STD_STRING_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0016_COMPAT266_STD_FUNCTION_STD_STRING_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:function<std:string(char *)>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0016_compat266_std_function_std_string_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat266(std:function<std:string(char *)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_compat266_std_function_std_string_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_compat266_std_function_std_string_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0016_compat266_std_function_std_string_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<std:string(char *)>",
          "h2dts_compat_func_0016_compat266_std_function_std_string_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0016_compat266_std_function_std_string_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT267_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT267_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0017_compat267_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat267_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0017_compat267_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0017_compat267_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0017_compat267_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0017_compat267_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT267_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT267_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0018_compat267_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_compat267_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018_compat267_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0018_compat267_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0018_compat267_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0018_compat267_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT267_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT267_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0019_compat267_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0019_compat267_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019_compat267_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0019_compat267_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0019_compat267_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0019_compat267_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT267_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT267_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0020_compat267_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0020_compat267_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020_compat267_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0020_compat267_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0020_compat267_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0020_compat267_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT267_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT267_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0021_compat267_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0021_compat267_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021_compat267_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0021_compat267_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0021_compat267_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0021_compat267_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0022_NS_COMPAT267_STD_FUNCTION_UNSIGNED_SHO_CD1B64
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0022_NS_COMPAT267_STD_FUNCTION_UNSIGNED_SHO_CD1B64
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::function<unsigned short(long long , unsigned; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0022_ns_compat267_std_function_unsigned_sho_cd1b64', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat267(std::function<unsigned short(long long
        , unsigned long)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0022_ns_compat267_std_function_unsigned_sho_cd1b64 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0022_ns_compat267_std_function_unsigned_sho_cd1b64 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0022_ns_compat267_std_function_unsigned_sho_cd1b64 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0022_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>number",
          "h2dts_compat_func_0022_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0022_ns_compat267_std_function_unsigned_sho_cd1b64 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT267_BAD_TYPE_267
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT267_BAD_TYPE_267
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_267; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0023_compat267_bad_type_267', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(bad_type_267 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_compat267_bad_type_267 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_compat267_bad_type_267 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0023_compat267_bad_type_267 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_267",
          "h2dts_compat_func_0023_compat267_bad_type_267 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0023_compat267_bad_type_267 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT267_STD_FUNCTION_UNSIGNED_SHO_B1A1CD
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT267_STD_FUNCTION_UNSIGNED_SHO_B1A1CD
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::function<unsigned short(long long, unsigned; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0024_compat267_std_function_unsigned_sho_b1a1cd', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std::function<unsigned short(long long, unsigned long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_compat267_std_function_unsigned_sho_b1a1cd parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_compat267_std_function_unsigned_sho_b1a1cd must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0024_compat267_std_function_unsigned_sho_b1a1cd must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0024_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>number",
          "h2dts_compat_func_0024_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0024_compat267_std_function_unsigned_sho_b1a1cd execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0025_E267
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0025_E267
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E267; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0025_e267', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E267 { A, B }; void f(E267 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_e267 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0025_e267 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0025_e267 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0025_e267 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0026_COMPAT267_STD_FUNCTION_UNSIGNED_SHO_DC1671
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0026_COMPAT267_STD_FUNCTION_UNSIGNED_SHO_DC1671
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:function<unsigned short(long long, unsigned; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0026_compat267_std_function_unsigned_sho_dc1671', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat267(std:function<unsigned short(long long, unsigned long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_compat267_std_function_unsigned_sho_dc1671 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_compat267_std_function_unsigned_sho_dc1671 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0026_compat267_std_function_unsigned_sho_dc1671 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<unsigned short(long long, unsigned long)>",
          "h2dts_compat_func_0026_compat267_std_function_unsigned_sho_dc1671 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0026_compat267_std_function_unsigned_sho_dc1671 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT268_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT268_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0027_compat268_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat268_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0027_compat268_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0027_compat268_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0027_compat268_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0027_compat268_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT268_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT268_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0028_compat268_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0028_compat268_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0028_compat268_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0028_compat268_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0028_compat268_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0028_compat268_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0029_COMPAT268_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0029_COMPAT268_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0029_compat268_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0029_compat268_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029_compat268_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0029_compat268_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0029_compat268_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0029_compat268_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT268_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT268_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0030_compat268_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0030_compat268_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0030_compat268_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0030_compat268_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0030_compat268_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0030_compat268_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0031_COMPAT268_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0031_COMPAT268_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0031_compat268_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0031_compat268_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031_compat268_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0031_compat268_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0031_compat268_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0031_compat268_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0032_NS_COMPAT268_STD_FUNCTION_VOID_INT_UNS_A92506
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0032_NS_COMPAT268_STD_FUNCTION_VOID_INT_UNS_A92506
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::function<void(int * , unsigned long; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0032_ns_compat268_std_function_void_int_uns_a92506', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat268(std::function<void(int *
        , unsigned long long)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0032_ns_compat268_std_function_void_int_uns_a92506 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0032_ns_compat268_std_function_void_int_uns_a92506 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0032_ns_compat268_std_function_void_int_uns_a92506 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0032_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>void",
          "h2dts_compat_func_0032_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0032_ns_compat268_std_function_void_int_uns_a92506 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0033_COMPAT268_BAD_TYPE_268
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0033_COMPAT268_BAD_TYPE_268
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_268; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0033_compat268_bad_type_268', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(bad_type_268 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0033_compat268_bad_type_268 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0033_compat268_bad_type_268 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0033_compat268_bad_type_268 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_268",
          "h2dts_compat_func_0033_compat268_bad_type_268 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0033_compat268_bad_type_268 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0034_COMPAT268_STD_FUNCTION_VOID_INT_UNS_65FD7A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0034_COMPAT268_STD_FUNCTION_VOID_INT_UNS_65FD7A
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::function<void(int *, unsigned long; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0034_compat268_std_function_void_int_uns_65fd7a', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(std::function<void(int *, unsigned long long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0034_compat268_std_function_void_int_uns_65fd7a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0034_compat268_std_function_void_int_uns_65fd7a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0034_compat268_std_function_void_int_uns_65fd7a must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0034_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>void",
          "h2dts_compat_func_0034_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0034_compat268_std_function_void_int_uns_65fd7a execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0035_E268
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0035_E268
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E268; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0035_e268', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E268 { A, B }; void f(E268 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0035_e268 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0035_e268 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0035_e268 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0035_e268 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0036_COMPAT268_STD_FUNCTION_VOID_INT_UNS_F7AD3C
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0036_COMPAT268_STD_FUNCTION_VOID_INT_UNS_F7AD3C
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:function<void(int *, unsigned long; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0036_compat268_std_function_void_int_uns_f7ad3c', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat268(std:function<void(int *, unsigned long long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0036_compat268_std_function_void_int_uns_f7ad3c parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0036_compat268_std_function_void_int_uns_f7ad3c must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0036_compat268_std_function_void_int_uns_f7ad3c must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<void(int *, unsigned long long)>",
          "h2dts_compat_func_0036_compat268_std_function_void_int_uns_f7ad3c param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0036_compat268_std_function_void_int_uns_f7ad3c execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0037_COMPAT269_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0037_COMPAT269_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0037_compat269_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0037_compat269_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0037_compat269_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0037_compat269_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0037_compat269_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0037_compat269_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0038_COMPAT269_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0038_COMPAT269_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0038_compat269_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0038_compat269_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0038_compat269_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0038_compat269_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0038_compat269_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0038_compat269_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0039_COMPAT269_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0039_COMPAT269_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0039_compat269_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0039_compat269_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0039_compat269_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0039_compat269_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0039_compat269_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0039_compat269_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0040_COMPAT269_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0040_COMPAT269_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0040_compat269_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0040_compat269_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0040_compat269_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0040_compat269_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0040_compat269_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0040_compat269_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0041_COMPAT269_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0041_COMPAT269_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0041_compat269_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0041_compat269_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0041_compat269_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0041_compat269_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0041_compat269_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0041_compat269_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0042_NS_COMPAT269_STD_UNIQUE_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0042_NS_COMPAT269_STD_UNIQUE_PTR_STD_STRING
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0042_ns_compat269_std_unique_ptr_std_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat269(std::unique_ptr<std::string> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0042_ns_compat269_std_unique_ptr_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0042_ns_compat269_std_unique_ptr_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0042_ns_compat269_std_unique_ptr_std_string must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0042_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0042_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0042_ns_compat269_std_unique_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0043_COMPAT269_BAD_TYPE_269
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0043_COMPAT269_BAD_TYPE_269
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_269; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0043_compat269_bad_type_269', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(bad_type_269 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0043_compat269_bad_type_269 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0043_compat269_bad_type_269 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0043_compat269_bad_type_269 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_269",
          "h2dts_compat_func_0043_compat269_bad_type_269 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0043_compat269_bad_type_269 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0044_COMPAT269_STD_UNIQUE_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0044_COMPAT269_STD_UNIQUE_PTR_STD_STRING
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<std::string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0044_compat269_std_unique_ptr_std_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std::unique_ptr<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0044_compat269_std_unique_ptr_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0044_compat269_std_unique_ptr_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0044_compat269_std_unique_ptr_std_string must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0044_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0044_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0044_compat269_std_unique_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0045_E269
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0045_E269
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E269; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0045_e269', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E269 { A, B }; void f(E269 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0045_e269 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0045_e269 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0045_e269 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0045_e269 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0046_COMPAT269_STD_UNIQUE_PTR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0046_COMPAT269_STD_UNIQUE_PTR_STD_STRING
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0046_compat269_std_unique_ptr_std_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat269(std:unique_ptr<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0046_compat269_std_unique_ptr_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0046_compat269_std_unique_ptr_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0046_compat269_std_unique_ptr_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<std:string>",
          "h2dts_compat_func_0046_compat269_std_unique_ptr_std_string param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0046_compat269_std_unique_ptr_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0047_COMPAT270_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0047_COMPAT270_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0047_compat270_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0047_compat270_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0047_compat270_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0047_compat270_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0047_compat270_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0047_compat270_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0048_COMPAT270_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0048_COMPAT270_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0048_compat270_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0048_compat270_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0048_compat270_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0048_compat270_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0048_compat270_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0048_compat270_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0049_COMPAT270_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0049_COMPAT270_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0049_compat270_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0049_compat270_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0049_compat270_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0049_compat270_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0049_compat270_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0049_compat270_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0050_COMPAT270_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0050_COMPAT270_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0050_compat270_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0050_compat270_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0050_compat270_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0050_compat270_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0050_compat270_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0050_compat270_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0051_COMPAT270_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0051_COMPAT270_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0051_compat270_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0051_compat270_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0051_compat270_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0051_compat270_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0051_compat270_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0051_compat270_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0052_NS_COMPAT270_STD_UNIQUE_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0052_NS_COMPAT270_STD_UNIQUE_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<char *>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0052_ns_compat270_std_unique_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat270(std::unique_ptr<char *> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0052_ns_compat270_std_unique_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0052_ns_compat270_std_unique_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0052_ns_compat270_std_unique_ptr_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0052_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0052_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0052_ns_compat270_std_unique_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0053_COMPAT270_BAD_TYPE_270
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0053_COMPAT270_BAD_TYPE_270
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_270; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0053_compat270_bad_type_270', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(bad_type_270 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0053_compat270_bad_type_270 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0053_compat270_bad_type_270 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0053_compat270_bad_type_270 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_270",
          "h2dts_compat_func_0053_compat270_bad_type_270 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0053_compat270_bad_type_270 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0054_COMPAT270_STD_UNIQUE_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0054_COMPAT270_STD_UNIQUE_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<char *>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0054_compat270_std_unique_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(std::unique_ptr<char *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0054_compat270_std_unique_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0054_compat270_std_unique_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0054_compat270_std_unique_ptr_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0054_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0054_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0054_compat270_std_unique_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0055_E270
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0055_E270
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E270; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0055_e270', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E270 { A, B }; void f(E270 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0055_e270 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0055_e270 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0055_e270 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0055_e270 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0056_COMPAT270_STD_UNIQUE_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0056_COMPAT270_STD_UNIQUE_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<char *>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0056_compat270_std_unique_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat270(std:unique_ptr<char *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0056_compat270_std_unique_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0056_compat270_std_unique_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0056_compat270_std_unique_ptr_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char *>",
          "h2dts_compat_func_0056_compat270_std_unique_ptr_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0056_compat270_std_unique_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0057_COMPAT271_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0057_COMPAT271_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0057_compat271_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat271(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0057_compat271_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0057_compat271_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0057_compat271_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0057_compat271_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0057_compat271_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0058_COMPAT271_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0058_COMPAT271_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0058_compat271_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat271(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0058_compat271_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0058_compat271_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0058_compat271_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0058_compat271_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0058_compat271_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0059_COMPAT271_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0059_COMPAT271_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0059_compat271_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat271(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0059_compat271_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0059_compat271_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0059_compat271_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0059_compat271_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0059_compat271_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0060_COMPAT271_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0060_COMPAT271_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0060_compat271_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat271(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0060_compat271_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0060_compat271_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0060_compat271_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0060_compat271_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0060_compat271_intt execution error: ${String(err)}`);
    }
  });
});
