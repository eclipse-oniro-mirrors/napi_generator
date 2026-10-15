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

suite('Stability_H2DTS_COMPAT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT154_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT154_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0071_compat154_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat154(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0071_compat154_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071_compat154_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0071_compat154_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0071_compat154_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0071_compat154_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT154_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT154_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0072_compat154_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat154(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0072_compat154_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072_compat154_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0072_compat154_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0072_compat154_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0072_compat154_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT157_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT157_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0001_compat157_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0001_compat157_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001_compat157_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0001_compat157_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0001_compat157_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0001_compat157_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT157_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT157_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0002_compat157_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0002_compat157_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002_compat157_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0002_compat157_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0002_compat157_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0002_compat157_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT157_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT157_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0003_compat157_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_compat157_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003_compat157_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0003_compat157_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0003_compat157_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0003_compat157_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT157_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT157_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0004_compat157_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_compat157_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0004_compat157_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0004_compat157_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0004_compat157_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0004_compat157_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0005_COMPAT157_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0005_COMPAT157_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0005_compat157_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_compat157_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0005_compat157_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0005_compat157_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0005_compat157_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0005_compat157_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0006_NS_COMPAT157_STD_FUNCTION_BOOL_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0006_NS_COMPAT157_STD_FUNCTION_BOOL_INT32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::function<bool(int32_t)>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0006_ns_compat157_std_function_bool_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat157(std::function<bool(int32_t)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_ns_compat157_std_function_bool_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_ns_compat157_std_function_bool_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0006_ns_compat157_std_function_bool_int32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0006_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number)=>boolean", "h2dts_compat_func_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0006_ns_compat157_std_function_bool_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT157_BAD_TYPE_157
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT157_BAD_TYPE_157
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_157; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0007_compat157_bad_type_157', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(bad_type_157 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat157_bad_type_157 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat157_bad_type_157 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0007_compat157_bad_type_157 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_157",
          "h2dts_compat_func_0007_compat157_bad_type_157 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0007_compat157_bad_type_157 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT157_STD_FUNCTION_BOOL_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT157_STD_FUNCTION_BOOL_INT32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::function<bool(int32_t)>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0008_compat157_std_function_bool_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std::function<bool(int32_t)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_compat157_std_function_bool_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_compat157_std_function_bool_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0008_compat157_std_function_bool_int32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0008_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number)=>boolean", "h2dts_compat_func_0008_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0008_compat157_std_function_bool_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0009_E157
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0009_E157
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E157; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0009_e157', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E157 { A, B }; void f(E157 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0009_e157 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009_e157 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0009_e157 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0009_e157 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT157_STD_FUNCTION_BOOL_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT157_STD_FUNCTION_BOOL_INT32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:function<bool(int32_t)>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0010_compat157_std_function_bool_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat157(std:function<bool(int32_t)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0010_compat157_std_function_bool_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0010_compat157_std_function_bool_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0010_compat157_std_function_bool_int32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<bool(int32_t)>",
          "h2dts_compat_func_0010_compat157_std_function_bool_int32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0010_compat157_std_function_bool_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT158_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT158_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0011_compat158_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0011_compat158_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011_compat158_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0011_compat158_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0011_compat158_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0011_compat158_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT158_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT158_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0012_compat158_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0012_compat158_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012_compat158_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0012_compat158_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0012_compat158_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0012_compat158_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT158_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT158_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0013_compat158_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_compat158_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013_compat158_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0013_compat158_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0013_compat158_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0013_compat158_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT158_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT158_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0014_compat158_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_compat158_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0014_compat158_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0014_compat158_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0014_compat158_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0014_compat158_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0015_COMPAT158_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0015_COMPAT158_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0015_compat158_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_compat158_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0015_compat158_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0015_compat158_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0015_compat158_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0015_compat158_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0016_NS_COMPAT158_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0016_NS_COMPAT158_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0016_ns_compat158_std_unique_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat158(std::unique_ptr<int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_ns_compat158_std_unique_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_ns_compat158_std_unique_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0016_ns_compat158_std_unique_ptr_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0016_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0016_ns_compat158_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT158_BAD_TYPE_158
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT158_BAD_TYPE_158
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_158; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0017_compat158_bad_type_158', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(bad_type_158 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat158_bad_type_158 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat158_bad_type_158 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0017_compat158_bad_type_158 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_158",
          "h2dts_compat_func_0017_compat158_bad_type_158 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0017_compat158_bad_type_158 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT158_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT158_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0018_compat158_std_unique_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std::unique_ptr<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_compat158_std_unique_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_compat158_std_unique_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0018_compat158_std_unique_ptr_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0018_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0018_compat158_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0019_E158
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0019_E158
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E158; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0019_e158', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E158 { A, B }; void f(E158 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0019_e158 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019_e158 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0019_e158 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0019_e158 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT158_STD_UNIQUE_PTR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT158_STD_UNIQUE_PTR_INT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0020_compat158_std_unique_ptr_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat158(std:unique_ptr<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0020_compat158_std_unique_ptr_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0020_compat158_std_unique_ptr_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0020_compat158_std_unique_ptr_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int>",
          "h2dts_compat_func_0020_compat158_std_unique_ptr_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0020_compat158_std_unique_ptr_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT159_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT159_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0021_compat159_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0021_compat159_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021_compat159_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0021_compat159_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0021_compat159_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0021_compat159_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT159_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT159_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0022_compat159_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0022_compat159_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022_compat159_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0022_compat159_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0022_compat159_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0022_compat159_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT159_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT159_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0023_compat159_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_compat159_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023_compat159_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0023_compat159_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0023_compat159_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0023_compat159_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT159_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT159_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0024_compat159_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_compat159_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0024_compat159_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0024_compat159_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0024_compat159_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0024_compat159_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0025_COMPAT159_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0025_COMPAT159_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0025_compat159_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_compat159_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0025_compat159_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0025_compat159_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0025_compat159_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0025_compat159_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0026_NS_COMPAT159_STD_UNIQUE_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0026_NS_COMPAT159_STD_UNIQUE_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0026_ns_compat159_std_unique_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat159(std::unique_ptr<size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_ns_compat159_std_unique_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_ns_compat159_std_unique_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0026_ns_compat159_std_unique_ptr_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0026_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0026_ns_compat159_std_unique_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT159_BAD_TYPE_159
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT159_BAD_TYPE_159
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_159; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0027_compat159_bad_type_159', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(bad_type_159 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat159_bad_type_159 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat159_bad_type_159 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0027_compat159_bad_type_159 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_159",
          "h2dts_compat_func_0027_compat159_bad_type_159 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0027_compat159_bad_type_159 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT159_STD_UNIQUE_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT159_STD_UNIQUE_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0028_compat159_std_unique_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(std::unique_ptr<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0028_compat159_std_unique_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0028_compat159_std_unique_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0028_compat159_std_unique_ptr_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0028_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0028_compat159_std_unique_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0029_E159
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0029_E159
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E159; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0029_e159', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E159 { A, B }; void f(E159 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0029_e159 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029_e159 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0029_e159 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0029_e159 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT159_STD_UNIQUE_PTR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT159_STD_UNIQUE_PTR_SIZE_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0030_compat159_std_unique_ptr_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat159(std:unique_ptr<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0030_compat159_std_unique_ptr_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0030_compat159_std_unique_ptr_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0030_compat159_std_unique_ptr_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<size_t>",
          "h2dts_compat_func_0030_compat159_std_unique_ptr_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0030_compat159_std_unique_ptr_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0031_COMPAT160_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0031_COMPAT160_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0031_compat160_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0031_compat160_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031_compat160_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0031_compat160_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0031_compat160_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0031_compat160_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0032_COMPAT160_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0032_COMPAT160_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0032_compat160_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0032_compat160_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0032_compat160_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0032_compat160_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0032_compat160_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0032_compat160_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0033_COMPAT160_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0033_COMPAT160_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0033_compat160_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0033_compat160_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0033_compat160_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0033_compat160_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0033_compat160_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0033_compat160_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0034_COMPAT160_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0034_COMPAT160_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0034_compat160_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0034_compat160_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0034_compat160_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0034_compat160_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0034_compat160_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0034_compat160_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0035_COMPAT160_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0035_COMPAT160_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0035_compat160_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0035_compat160_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0035_compat160_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0035_compat160_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0035_compat160_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0035_compat160_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0036_NS_COMPAT160_STD_UNIQUE_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0036_NS_COMPAT160_STD_UNIQUE_PTR_DOUBLE
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0036_ns_compat160_std_unique_ptr_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat160(std::unique_ptr<double> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0036_ns_compat160_std_unique_ptr_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0036_ns_compat160_std_unique_ptr_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0036_ns_compat160_std_unique_ptr_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0036_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0036_ns_compat160_std_unique_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0037_COMPAT160_BAD_TYPE_160
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0037_COMPAT160_BAD_TYPE_160
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_160; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0037_compat160_bad_type_160', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(bad_type_160 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0037_compat160_bad_type_160 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0037_compat160_bad_type_160 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0037_compat160_bad_type_160 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_160",
          "h2dts_compat_func_0037_compat160_bad_type_160 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0037_compat160_bad_type_160 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0038_COMPAT160_STD_UNIQUE_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0038_COMPAT160_STD_UNIQUE_PTR_DOUBLE
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0038_compat160_std_unique_ptr_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(std::unique_ptr<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0038_compat160_std_unique_ptr_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0038_compat160_std_unique_ptr_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0038_compat160_std_unique_ptr_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0038_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0038_compat160_std_unique_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0039_E160
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0039_E160
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E160; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0039_e160', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E160 { A, B }; void f(E160 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0039_e160 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0039_e160 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0039_e160 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0039_e160 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0040_COMPAT160_STD_UNIQUE_PTR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0040_COMPAT160_STD_UNIQUE_PTR_DOUBLE
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0040_compat160_std_unique_ptr_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat160(std:unique_ptr<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0040_compat160_std_unique_ptr_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0040_compat160_std_unique_ptr_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0040_compat160_std_unique_ptr_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<double>",
          "h2dts_compat_func_0040_compat160_std_unique_ptr_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0040_compat160_std_unique_ptr_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0041_COMPAT161_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0041_COMPAT161_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0041_compat161_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat161(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0041_compat161_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0041_compat161_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0041_compat161_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0041_compat161_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0041_compat161_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0042_COMPAT161_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0042_COMPAT161_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0042_compat161_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat161(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0042_compat161_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0042_compat161_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0042_compat161_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0042_compat161_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0042_compat161_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0043_COMPAT161_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0043_COMPAT161_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0043_compat161_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat161(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0043_compat161_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0043_compat161_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0043_compat161_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0043_compat161_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0043_compat161_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0044_COMPAT161_INTT
