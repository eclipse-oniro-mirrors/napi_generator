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

suite('Stability_H2DTS_COMPAT_FUNC_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0065_COMPAT183_BAD_TYPE_183
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0065_COMPAT183_BAD_TYPE_183
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_183; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0065_compat183_bad_type_183', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat183(bad_type_183 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0065_compat183_bad_type_183 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0065_compat183_bad_type_183 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0065_compat183_bad_type_183 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_183",
          "h2dts_compat_func_0065_compat183_bad_type_183 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0065_compat183_bad_type_183 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0066_COMPAT183_STD_SHARED_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0066_COMPAT183_STD_SHARED_PTR_SHORT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0066_compat183_std_shared_ptr_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat183(std::shared_ptr<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0066_compat183_std_shared_ptr_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0066_compat183_std_shared_ptr_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0066_compat183_std_shared_ptr_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0066_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0066_compat183_std_shared_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0067_E183
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0067_E183
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E183; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0067_e183', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E183 { A, B }; void f(E183 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0067_e183 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0067_e183 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0067_e183 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0067_e183 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0068_COMPAT183_STD_SHARED_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0068_COMPAT183_STD_SHARED_PTR_SHORT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0068_compat183_std_shared_ptr_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat183(std:shared_ptr<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0068_compat183_std_shared_ptr_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0068_compat183_std_shared_ptr_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0068_compat183_std_shared_ptr_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<short>",
          "h2dts_compat_func_0068_compat183_std_shared_ptr_short param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0068_compat183_std_shared_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0069_COMPAT184_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0069_COMPAT184_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0069_compat184_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat184(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0069_compat184_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069_compat184_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0069_compat184_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0069_compat184_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0069_compat184_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT184_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT184_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0070_compat184_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat184(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0070_compat184_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070_compat184_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0070_compat184_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0070_compat184_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0070_compat184_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT184_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT184_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0071_compat184_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat184(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0071_compat184_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071_compat184_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0071_compat184_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0071_compat184_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0071_compat184_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT184_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT184_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0072_compat184_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat184(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0072_compat184_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072_compat184_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0072_compat184_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0072_compat184_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0072_compat184_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT187_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT187_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0001_compat187_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat187(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0001_compat187_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001_compat187_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0001_compat187_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0001_compat187_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0001_compat187_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT187_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT187_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0002_compat187_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat187(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0002_compat187_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002_compat187_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0002_compat187_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0002_compat187_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0002_compat187_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0003_NS_COMPAT187_STD_SHARED_PTR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0003_NS_COMPAT187_STD_SHARED_PTR_UINT64_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0003_ns_compat187_std_shared_ptr_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat187(std::shared_ptr<uint64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_ns_compat187_std_shared_ptr_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_ns_compat187_std_shared_ptr_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0003_ns_compat187_std_shared_ptr_uint64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0003_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0003_ns_compat187_std_shared_ptr_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT187_BAD_TYPE_187
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT187_BAD_TYPE_187
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_187; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0004_compat187_bad_type_187', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat187(bad_type_187 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_compat187_bad_type_187 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_compat187_bad_type_187 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0004_compat187_bad_type_187 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_187",
          "h2dts_compat_func_0004_compat187_bad_type_187 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0004_compat187_bad_type_187 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0005_COMPAT187_STD_SHARED_PTR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0005_COMPAT187_STD_SHARED_PTR_UINT64_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0005_compat187_std_shared_ptr_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat187(std::shared_ptr<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_compat187_std_shared_ptr_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_compat187_std_shared_ptr_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0005_compat187_std_shared_ptr_uint64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0005_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0005_compat187_std_shared_ptr_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0006_E187
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0006_E187
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E187; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0006_e187', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E187 { A, B }; void f(E187 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_e187 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0006_e187 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0006_e187 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0006_e187 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT187_STD_SHARED_PTR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT187_STD_SHARED_PTR_UINT64_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0007_compat187_std_shared_ptr_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat187(std:shared_ptr<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat187_std_shared_ptr_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat187_std_shared_ptr_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0007_compat187_std_shared_ptr_uint64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<uint64_t>",
          "h2dts_compat_func_0007_compat187_std_shared_ptr_uint64_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0007_compat187_std_shared_ptr_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT188_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0008_COMPAT188_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0008_compat188_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_compat188_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008_compat188_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0008_compat188_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0008_compat188_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0008_compat188_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT188_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT188_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0009_compat188_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0009_compat188_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009_compat188_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0009_compat188_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0009_compat188_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0009_compat188_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT188_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT188_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0010_compat188_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0010_compat188_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010_compat188_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0010_compat188_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0010_compat188_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0010_compat188_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT188_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT188_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0011_compat188_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0011_compat188_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011_compat188_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0011_compat188_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0011_compat188_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0011_compat188_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT188_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT188_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0012_compat188_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0012_compat188_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012_compat188_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0012_compat188_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0012_compat188_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0012_compat188_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0013_NS_COMPAT188_STD_SHARED_PTR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0013_NS_COMPAT188_STD_SHARED_PTR_INT8_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0013_ns_compat188_std_shared_ptr_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat188(std::shared_ptr<int8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_ns_compat188_std_shared_ptr_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_ns_compat188_std_shared_ptr_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0013_ns_compat188_std_shared_ptr_int8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0013_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0013_ns_compat188_std_shared_ptr_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT188_BAD_TYPE_188
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT188_BAD_TYPE_188
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_188; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0014_compat188_bad_type_188', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(bad_type_188 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_compat188_bad_type_188 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_compat188_bad_type_188 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0014_compat188_bad_type_188 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_188",
          "h2dts_compat_func_0014_compat188_bad_type_188 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0014_compat188_bad_type_188 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0015_COMPAT188_STD_SHARED_PTR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0015_COMPAT188_STD_SHARED_PTR_INT8_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0015_compat188_std_shared_ptr_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(std::shared_ptr<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_compat188_std_shared_ptr_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_compat188_std_shared_ptr_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0015_compat188_std_shared_ptr_int8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0015_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0015_compat188_std_shared_ptr_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0016_E188
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0016_E188
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E188; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0016_e188', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E188 { A, B }; void f(E188 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_e188 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0016_e188 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0016_e188 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0016_e188 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT188_STD_SHARED_PTR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT188_STD_SHARED_PTR_INT8_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0017_compat188_std_shared_ptr_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat188(std:shared_ptr<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat188_std_shared_ptr_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat188_std_shared_ptr_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0017_compat188_std_shared_ptr_int8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<int8_t>",
          "h2dts_compat_func_0017_compat188_std_shared_ptr_int8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0017_compat188_std_shared_ptr_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT189_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0018_COMPAT189_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0018_compat189_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_compat189_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018_compat189_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0018_compat189_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0018_compat189_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0018_compat189_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT189_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT189_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0019_compat189_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0019_compat189_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019_compat189_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0019_compat189_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0019_compat189_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0019_compat189_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT189_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT189_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0020_compat189_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0020_compat189_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020_compat189_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0020_compat189_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0020_compat189_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0020_compat189_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT189_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT189_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0021_compat189_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0021_compat189_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021_compat189_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0021_compat189_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0021_compat189_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0021_compat189_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT189_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT189_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0022_compat189_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0022_compat189_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022_compat189_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0022_compat189_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0022_compat189_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0022_compat189_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0023_NS_COMPAT189_STD_SHARED_PTR_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0023_NS_COMPAT189_STD_SHARED_PTR_INT16_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::shared_ptr<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0023_ns_compat189_std_shared_ptr_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat189(std::shared_ptr<int16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_ns_compat189_std_shared_ptr_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_ns_compat189_std_shared_ptr_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0023_ns_compat189_std_shared_ptr_int16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0023_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0023_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0023_ns_compat189_std_shared_ptr_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT189_BAD_TYPE_189
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT189_BAD_TYPE_189
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_189; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0024_compat189_bad_type_189', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(bad_type_189 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_compat189_bad_type_189 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_compat189_bad_type_189 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0024_compat189_bad_type_189 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_189",
          "h2dts_compat_func_0024_compat189_bad_type_189 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0024_compat189_bad_type_189 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0025_COMPAT189_STD_SHARED_PTR_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0025_COMPAT189_STD_SHARED_PTR_INT16_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::shared_ptr<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0025_compat189_std_shared_ptr_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(std::shared_ptr<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_compat189_std_shared_ptr_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_compat189_std_shared_ptr_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0025_compat189_std_shared_ptr_int16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0025_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0025_compat189_std_shared_ptr_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0026_E189
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0026_E189
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E189; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0026_e189', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E189 { A, B }; void f(E189 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_e189 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0026_e189 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0026_e189 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0026_e189 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT189_STD_SHARED_PTR_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT189_STD_SHARED_PTR_INT16_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:shared_ptr<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0027_compat189_std_shared_ptr_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat189(std:shared_ptr<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat189_std_shared_ptr_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat189_std_shared_ptr_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0027_compat189_std_shared_ptr_int16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<int16_t>",
          "h2dts_compat_func_0027_compat189_std_shared_ptr_int16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0027_compat189_std_shared_ptr_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT190_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0028_COMPAT190_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
