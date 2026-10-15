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

suite('Stability_H2DTS_COMPAT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0069_E163
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0069_E163
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E163; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0069_e163', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E163 { A, B }; void f(E163 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0069_e163 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069_e163 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0069_e163 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0069_e163 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT163_STD_UNIQUE_PTR_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0070_COMPAT163_STD_UNIQUE_PTR_SHORT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0070_compat163_std_unique_ptr_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat163(std:unique_ptr<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0070_compat163_std_unique_ptr_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0070_compat163_std_unique_ptr_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0070_compat163_std_unique_ptr_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<short>",
          "h2dts_compat_func_0070_compat163_std_unique_ptr_short param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0070_compat163_std_unique_ptr_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT164_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0071_COMPAT164_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0071_compat164_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat164(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0071_compat164_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071_compat164_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0071_compat164_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0071_compat164_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0071_compat164_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT164_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0072_COMPAT164_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0072_compat164_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat164(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0072_compat164_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072_compat164_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0072_compat164_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0072_compat164_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0072_compat164_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT167_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0001_COMPAT167_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0001_compat167_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0001_compat167_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001_compat167_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0001_compat167_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0001_compat167_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0001_compat167_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT167_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0002_COMPAT167_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0002_compat167_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0002_compat167_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002_compat167_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0002_compat167_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0002_compat167_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0002_compat167_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT167_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0003_COMPAT167_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0003_compat167_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0003_compat167_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003_compat167_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0003_compat167_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0003_compat167_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0003_compat167_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT167_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0004_COMPAT167_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0004_compat167_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0004_compat167_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0004_compat167_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0004_compat167_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0004_compat167_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0004_compat167_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0005_NS_COMPAT167_STD_UNIQUE_PTR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0005_NS_COMPAT167_STD_UNIQUE_PTR_UINT64_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0005_ns_compat167_std_unique_ptr_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat167(std::unique_ptr<uint64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_ns_compat167_std_unique_ptr_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0005_ns_compat167_std_unique_ptr_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0005_ns_compat167_std_unique_ptr_uint64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0005_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0005_ns_compat167_std_unique_ptr_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0006_COMPAT167_BAD_TYPE_167
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0006_COMPAT167_BAD_TYPE_167
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_167; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0006_compat167_bad_type_167', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(bad_type_167 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_compat167_bad_type_167 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0006_compat167_bad_type_167 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0006_compat167_bad_type_167 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_167",
          "h2dts_compat_func_0006_compat167_bad_type_167 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0006_compat167_bad_type_167 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT167_STD_UNIQUE_PTR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0007_COMPAT167_STD_UNIQUE_PTR_UINT64_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0007_compat167_std_unique_ptr_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(std::unique_ptr<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat167_std_unique_ptr_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0007_compat167_std_unique_ptr_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0007_compat167_std_unique_ptr_uint64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0007_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0007_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0007_compat167_std_unique_ptr_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0008_E167
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0008_E167
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E167; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0008_e167', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E167 { A, B }; void f(E167 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0008_e167 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008_e167 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0008_e167 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0008_e167 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT167_STD_UNIQUE_PTR_UINT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0009_COMPAT167_STD_UNIQUE_PTR_UINT64_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<uint64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0009_compat167_std_unique_ptr_uint64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(std:unique_ptr<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0009_compat167_std_unique_ptr_uint64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0009_compat167_std_unique_ptr_uint64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0009_compat167_std_unique_ptr_uint64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<uint64_t>",
          "h2dts_compat_func_0009_compat167_std_unique_ptr_uint64_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0009_compat167_std_unique_ptr_uint64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT168_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0010_COMPAT168_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0010_compat168_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0010_compat168_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010_compat168_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0010_compat168_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0010_compat168_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0010_compat168_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT168_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0011_COMPAT168_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0011_compat168_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0011_compat168_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011_compat168_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0011_compat168_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0011_compat168_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0011_compat168_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT168_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0012_COMPAT168_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0012_compat168_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0012_compat168_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012_compat168_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0012_compat168_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0012_compat168_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0012_compat168_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT168_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0013_COMPAT168_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0013_compat168_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0013_compat168_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013_compat168_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0013_compat168_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0013_compat168_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0013_compat168_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT168_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0014_COMPAT168_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0014_compat168_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0014_compat168_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0014_compat168_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0014_compat168_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0014_compat168_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0014_compat168_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0015_NS_COMPAT168_STD_UNIQUE_PTR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0015_NS_COMPAT168_STD_UNIQUE_PTR_INT8_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0015_ns_compat168_std_unique_ptr_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat168(std::unique_ptr<int8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_ns_compat168_std_unique_ptr_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0015_ns_compat168_std_unique_ptr_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0015_ns_compat168_std_unique_ptr_int8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0015_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0015_ns_compat168_std_unique_ptr_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0016_COMPAT168_BAD_TYPE_168
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0016_COMPAT168_BAD_TYPE_168
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_168; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0016_compat168_bad_type_168', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(bad_type_168 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_compat168_bad_type_168 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0016_compat168_bad_type_168 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0016_compat168_bad_type_168 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_168",
          "h2dts_compat_func_0016_compat168_bad_type_168 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0016_compat168_bad_type_168 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT168_STD_UNIQUE_PTR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0017_COMPAT168_STD_UNIQUE_PTR_INT8_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0017_compat168_std_unique_ptr_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(std::unique_ptr<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat168_std_unique_ptr_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0017_compat168_std_unique_ptr_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0017_compat168_std_unique_ptr_int8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0017_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0017_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0017_compat168_std_unique_ptr_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0018_E168
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0018_E168
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E168; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0018_e168', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E168 { A, B }; void f(E168 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0018_e168 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018_e168 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0018_e168 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0018_e168 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT168_STD_UNIQUE_PTR_INT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0019_COMPAT168_STD_UNIQUE_PTR_INT8_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0019_compat168_std_unique_ptr_int8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(std:unique_ptr<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0019_compat168_std_unique_ptr_int8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0019_compat168_std_unique_ptr_int8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0019_compat168_std_unique_ptr_int8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int8_t>",
          "h2dts_compat_func_0019_compat168_std_unique_ptr_int8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0019_compat168_std_unique_ptr_int8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT169_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0020_COMPAT169_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0020_compat169_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0020_compat169_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020_compat169_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0020_compat169_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0020_compat169_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0020_compat169_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT169_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0021_COMPAT169_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0021_compat169_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0021_compat169_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021_compat169_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0021_compat169_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0021_compat169_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0021_compat169_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT169_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0022_COMPAT169_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0022_compat169_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0022_compat169_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022_compat169_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0022_compat169_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0022_compat169_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0022_compat169_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT169_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0023_COMPAT169_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0023_compat169_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0023_compat169_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023_compat169_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0023_compat169_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0023_compat169_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0023_compat169_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT169_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0024_COMPAT169_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0024_compat169_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0024_compat169_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0024_compat169_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0024_compat169_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0024_compat169_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0024_compat169_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0025_NS_COMPAT169_STD_UNIQUE_PTR_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0025_NS_COMPAT169_STD_UNIQUE_PTR_INT16_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0025_ns_compat169_std_unique_ptr_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat169(std::unique_ptr<int16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_ns_compat169_std_unique_ptr_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0025_ns_compat169_std_unique_ptr_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0025_ns_compat169_std_unique_ptr_int16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0025_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0025_ns_compat169_std_unique_ptr_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0026_COMPAT169_BAD_TYPE_169
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0026_COMPAT169_BAD_TYPE_169
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_169; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0026_compat169_bad_type_169', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(bad_type_169 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_compat169_bad_type_169 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0026_compat169_bad_type_169 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0026_compat169_bad_type_169 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_169",
          "h2dts_compat_func_0026_compat169_bad_type_169 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0026_compat169_bad_type_169 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT169_STD_UNIQUE_PTR_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0027_COMPAT169_STD_UNIQUE_PTR_INT16_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unique_ptr<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0027_compat169_std_unique_ptr_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(std::unique_ptr<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat169_std_unique_ptr_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0027_compat169_std_unique_ptr_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0027_compat169_std_unique_ptr_int16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0027_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0027_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0027_compat169_std_unique_ptr_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0028_E169
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0028_E169
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E169; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0028_e169', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E169 { A, B }; void f(E169 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0028_e169 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0028_e169 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0028_e169 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0028_e169 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0029_COMPAT169_STD_UNIQUE_PTR_INT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0029_COMPAT169_STD_UNIQUE_PTR_INT16_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unique_ptr<int16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0029_compat169_std_unique_ptr_int16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(std:unique_ptr<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0029_compat169_std_unique_ptr_int16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0029_compat169_std_unique_ptr_int16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0029_compat169_std_unique_ptr_int16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int16_t>",
          "h2dts_compat_func_0029_compat169_std_unique_ptr_int16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0029_compat169_std_unique_ptr_int16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT170_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0030_COMPAT170_ITN
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0030_compat170_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0030_compat170_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0030_compat170_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0030_compat170_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0030_compat170_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0030_compat170_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0031_COMPAT170_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0031_COMPAT170_DOUBL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0031_compat170_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0031_compat170_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031_compat170_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0031_compat170_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0031_compat170_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0031_compat170_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0032_COMPAT170_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0032_COMPAT170_BOOOL
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0032_compat170_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0032_compat170_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0032_compat170_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0032_compat170_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0032_compat170_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0032_compat170_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0033_COMPAT170_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0033_COMPAT170_INTT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0033_compat170_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0033_compat170_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0033_compat170_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0033_compat170_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0033_compat170_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0033_compat170_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0034_COMPAT170_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0034_COMPAT170_FLOT
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_func_0034_compat170_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_func_0034_compat170_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0034_compat170_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_func_0034_compat170_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0034_compat170_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0034_compat170_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_FUNC_0035_NS_COMPAT170_STD_UNIQUE_PTR_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_FUNC_0035_NS_COMPAT170_STD_UNIQUE_PTR_INT32_T
   * @tc.desc   Stability compat h2dts/func: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::unique_ptr<int32_t>; strictEqual parsed param type preserved.
