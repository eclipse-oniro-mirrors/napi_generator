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

suite('Stability_H2DTS_COMPAT_FUNC_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0067_COMPAT173_STD_UNIQUE_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0067_COMPAT173_STD_UNIQUE_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0067_compat173_std_unique_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::unique_ptr<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0067_compat173_std_unique_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0067_compat173_std_unique_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0067_compat173_std_unique_ptr_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0067_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0067_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0067_compat173_std_unique_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0068_E173
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0068_E173
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E173; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0068_e173', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E173 { A, B }; void f(E173 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0068_e173 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0068_e173 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0068_e173 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0068_e173 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0069_COMPAT173_STD_UNIQUE_PTR_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0069_COMPAT173_STD_UNIQUE_PTR_CHAR
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0069_compat173_std_unique_ptr_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std:unique_ptr<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0069_compat173_std_unique_ptr_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0069_compat173_std_unique_ptr_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0069_compat173_std_unique_ptr_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char>",
          "h2dts_compat_func_0069_compat173_std_unique_ptr_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0069_compat173_std_unique_ptr_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT174_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT174_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0070_compat174_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0070_compat174_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070_compat174_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0070_compat174_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0070_compat174_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0070_compat174_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT174_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT174_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0071_compat174_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0071_compat174_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071_compat174_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0071_compat174_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0071_compat174_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0071_compat174_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT174_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT174_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0072_compat174_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0072_compat174_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072_compat174_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0072_compat174_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0072_compat174_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0072_compat174_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT177_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT177_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0001_compat177_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0001_compat177_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001_compat177_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0001_compat177_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0001_compat177_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0001_compat177_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT177_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT177_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0002_compat177_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0002_compat177_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002_compat177_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0002_compat177_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0002_compat177_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0002_compat177_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT177_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT177_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0003_compat177_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_compat177_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003_compat177_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0003_compat177_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0003_compat177_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0003_compat177_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0004_NS_COMPAT177_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0004_NS_COMPAT177_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0004_ns_compat177_std_unique_ptr_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat177(std::unique_ptr<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_ns_compat177_std_unique_ptr_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_ns_compat177_std_unique_ptr_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0004_ns_compat177_std_unique_ptr_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0004_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0004_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0004_ns_compat177_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0005_COMPAT177_BAD_TYPE_177
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0005_COMPAT177_BAD_TYPE_177
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_177; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0005_compat177_bad_type_177', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(bad_type_177 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_compat177_bad_type_177 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_compat177_bad_type_177 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0005_compat177_bad_type_177 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_177",
          "h2dts_compat_func_0005_compat177_bad_type_177 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0005_compat177_bad_type_177 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0006_COMPAT177_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0006_COMPAT177_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0006_compat177_std_unique_ptr_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(std::unique_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_compat177_std_unique_ptr_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_compat177_std_unique_ptr_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0006_compat177_std_unique_ptr_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0006_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0006_compat177_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0007_E177
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0007_E177
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E177; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0007_e177', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E177 { A, B }; void f(E177 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_e177 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0007_e177 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0007_e177 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0007_e177 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT177_STD_UNIQUE_PTR_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT177_STD_UNIQUE_PTR_CHAR32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0008_compat177_std_unique_ptr_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(std:unique_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_compat177_std_unique_ptr_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_compat177_std_unique_ptr_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0008_compat177_std_unique_ptr_char32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char32_t>",
          "h2dts_compat_func_0008_compat177_std_unique_ptr_char32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0008_compat177_std_unique_ptr_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT178_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT178_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0009_compat178_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0009_compat178_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009_compat178_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0009_compat178_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0009_compat178_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0009_compat178_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT178_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT178_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0010_compat178_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0010_compat178_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010_compat178_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0010_compat178_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0010_compat178_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0010_compat178_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT178_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT178_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0011_compat178_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0011_compat178_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011_compat178_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0011_compat178_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0011_compat178_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0011_compat178_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT178_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT178_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0012_compat178_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0012_compat178_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012_compat178_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0012_compat178_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0012_compat178_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0012_compat178_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT178_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT178_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0013_compat178_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_compat178_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013_compat178_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0013_compat178_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0013_compat178_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0013_compat178_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0014_NS_COMPAT178_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0014_NS_COMPAT178_STD_SHARED_PTR_INT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0014_ns_compat178_std_shared_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat178(std::shared_ptr<int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_ns_compat178_std_shared_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_ns_compat178_std_shared_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0014_ns_compat178_std_shared_ptr_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0014_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0014_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0014_ns_compat178_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0015_COMPAT178_BAD_TYPE_178
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0015_COMPAT178_BAD_TYPE_178
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_178; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0015_compat178_bad_type_178', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(bad_type_178 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_compat178_bad_type_178 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_compat178_bad_type_178 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0015_compat178_bad_type_178 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_178",
          "h2dts_compat_func_0015_compat178_bad_type_178 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0015_compat178_bad_type_178 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0016_COMPAT178_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0016_COMPAT178_STD_SHARED_PTR_INT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0016_compat178_std_shared_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(std::shared_ptr<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_compat178_std_shared_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_compat178_std_shared_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0016_compat178_std_shared_ptr_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0016_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0016_compat178_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0017_E178
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0017_E178
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E178; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0017_e178', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E178 { A, B }; void f(E178 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_e178 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0017_e178 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0017_e178 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0017_e178 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT178_STD_SHARED_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT178_STD_SHARED_PTR_INT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0018_compat178_std_shared_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat178(std:shared_ptr<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_compat178_std_shared_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_compat178_std_shared_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0018_compat178_std_shared_ptr_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<int>",
          "h2dts_compat_func_0018_compat178_std_shared_ptr_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0018_compat178_std_shared_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT179_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT179_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0019_compat179_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0019_compat179_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019_compat179_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0019_compat179_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0019_compat179_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0019_compat179_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT179_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT179_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0020_compat179_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0020_compat179_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020_compat179_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0020_compat179_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0020_compat179_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0020_compat179_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT179_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT179_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0021_compat179_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0021_compat179_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021_compat179_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0021_compat179_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0021_compat179_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0021_compat179_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT179_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT179_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0022_compat179_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0022_compat179_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022_compat179_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0022_compat179_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0022_compat179_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0022_compat179_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT179_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT179_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0023_compat179_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_compat179_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023_compat179_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0023_compat179_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0023_compat179_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0023_compat179_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0024_NS_COMPAT179_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0024_NS_COMPAT179_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0024_ns_compat179_std_shared_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat179(std::shared_ptr<size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_ns_compat179_std_shared_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_ns_compat179_std_shared_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0024_ns_compat179_std_shared_ptr_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0024_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0024_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0024_ns_compat179_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0025_COMPAT179_BAD_TYPE_179
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0025_COMPAT179_BAD_TYPE_179
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_179; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0025_compat179_bad_type_179', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(bad_type_179 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_compat179_bad_type_179 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_compat179_bad_type_179 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0025_compat179_bad_type_179 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_179",
          "h2dts_compat_func_0025_compat179_bad_type_179 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0025_compat179_bad_type_179 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0026_COMPAT179_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0026_COMPAT179_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0026_compat179_std_shared_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(std::shared_ptr<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_compat179_std_shared_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_compat179_std_shared_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0026_compat179_std_shared_ptr_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0026_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0026_compat179_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0027_E179
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0027_E179
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E179; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0027_e179', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E179 { A, B }; void f(E179 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_e179 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0027_e179 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0027_e179 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0027_e179 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT179_STD_SHARED_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT179_STD_SHARED_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0028_compat179_std_shared_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat179(std:shared_ptr<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0028_compat179_std_shared_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0028_compat179_std_shared_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0028_compat179_std_shared_ptr_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<size_t>",
          "h2dts_compat_func_0028_compat179_std_shared_ptr_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0028_compat179_std_shared_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0029_COMPAT180_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0029_COMPAT180_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0029_compat180_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat180(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0029_compat180_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029_compat180_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0029_compat180_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0029_compat180_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0029_compat180_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT180_DOUBL
