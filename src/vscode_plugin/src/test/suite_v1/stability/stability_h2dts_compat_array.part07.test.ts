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

suite('Stability_H2DTS_COMPAT_ARRAY_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0036_COMPAT75_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0036_COMPAT75_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0036_compat75_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0036_compat75_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0036_compat75_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0036_compat75_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0036_compat75_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0036_compat75_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0037_COMPAT75_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0037_COMPAT75_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0037_compat75_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0037_compat75_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0037_compat75_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0037_compat75_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0037_compat75_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0037_compat75_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0038_COMPAT75_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0038_COMPAT75_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0038_compat75_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0038_compat75_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0038_compat75_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0038_compat75_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0038_compat75_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0038_compat75_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0039_COMPAT75_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0039_COMPAT75_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0039_compat75_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0039_compat75_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0039_compat75_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0039_compat75_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0039_compat75_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0039_compat75_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0040_COMPAT75_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0040_COMPAT75_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0040_compat75_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0040_compat75_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0040_compat75_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0040_compat75_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0040_compat75_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0040_compat75_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0041_NS_COMPAT75_STD_DEQUE_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0041_NS_COMPAT75_STD_DEQUE_INT32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::deque<int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0041_ns_compat75_std_deque_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat75(std::deque<int32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0041_ns_compat75_std_deque_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0041_ns_compat75_std_deque_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0041_ns_compat75_std_deque_int32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0041_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0041_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0041_ns_compat75_std_deque_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0042_COMPAT75_BAD_TYPE_75
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0042_COMPAT75_BAD_TYPE_75
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_75; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0042_compat75_bad_type_75', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(bad_type_75 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0042_compat75_bad_type_75 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0042_compat75_bad_type_75 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0042_compat75_bad_type_75 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_75",
          "h2dts_compat_array_0042_compat75_bad_type_75 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0042_compat75_bad_type_75 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0043_COMPAT75_STD_DEQUE_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0043_COMPAT75_STD_DEQUE_INT32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0043_compat75_std_deque_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::deque<int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0043_compat75_std_deque_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0043_compat75_std_deque_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0043_compat75_std_deque_int32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0043_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0043_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0043_compat75_std_deque_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0044_E75
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0044_E75
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E75; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0044_e75', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E75 { A, B }; void f(E75 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0044_e75 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044_e75 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0044_e75 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0044_e75 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0045_COMPAT75_STD_DEQUE_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0045_COMPAT75_STD_DEQUE_INT32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0045_compat75_std_deque_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std:deque<int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0045_compat75_std_deque_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0045_compat75_std_deque_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0045_compat75_std_deque_int32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<int32_t>",
          "h2dts_compat_array_0045_compat75_std_deque_int32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0045_compat75_std_deque_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0046_COMPAT76_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0046_COMPAT76_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0046_compat76_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0046_compat76_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0046_compat76_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0046_compat76_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0046_compat76_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0046_compat76_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0047_COMPAT76_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0047_COMPAT76_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0047_compat76_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0047_compat76_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0047_compat76_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0047_compat76_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0047_compat76_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0047_compat76_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0048_COMPAT76_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0048_COMPAT76_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0048_compat76_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0048_compat76_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0048_compat76_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0048_compat76_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0048_compat76_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0048_compat76_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0049_COMPAT76_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0049_COMPAT76_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0049_compat76_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0049_compat76_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0049_compat76_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0049_compat76_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0049_compat76_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0049_compat76_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0050_COMPAT76_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0050_COMPAT76_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0050_compat76_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0050_compat76_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0050_compat76_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0050_compat76_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0050_compat76_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0050_compat76_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0051_NS_COMPAT76_STD_DEQUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0051_NS_COMPAT76_STD_DEQUE_INT64_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::deque<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0051_ns_compat76_std_deque_int64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat76(std::deque<int64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0051_ns_compat76_std_deque_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0051_ns_compat76_std_deque_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0051_ns_compat76_std_deque_int64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0051_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0051_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0051_ns_compat76_std_deque_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0052_COMPAT76_BAD_TYPE_76
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0052_COMPAT76_BAD_TYPE_76
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_76; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0052_compat76_bad_type_76', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(bad_type_76 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0052_compat76_bad_type_76 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0052_compat76_bad_type_76 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0052_compat76_bad_type_76 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_76",
          "h2dts_compat_array_0052_compat76_bad_type_76 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0052_compat76_bad_type_76 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0053_COMPAT76_STD_DEQUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0053_COMPAT76_STD_DEQUE_INT64_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0053_compat76_std_deque_int64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(std::deque<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0053_compat76_std_deque_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0053_compat76_std_deque_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0053_compat76_std_deque_int64_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0053_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0053_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0053_compat76_std_deque_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0054_E76
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0054_E76
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E76; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0054_e76', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E76 { A, B }; void f(E76 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0054_e76 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054_e76 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0054_e76 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0054_e76 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0055_COMPAT76_STD_DEQUE_INT64_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0055_COMPAT76_STD_DEQUE_INT64_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<int64_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0055_compat76_std_deque_int64_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat76(std:deque<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0055_compat76_std_deque_int64_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0055_compat76_std_deque_int64_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0055_compat76_std_deque_int64_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<int64_t>",
          "h2dts_compat_array_0055_compat76_std_deque_int64_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0055_compat76_std_deque_int64_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0056_COMPAT77_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0056_COMPAT77_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0056_compat77_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0056_compat77_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0056_compat77_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0056_compat77_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0056_compat77_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0056_compat77_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_COMPAT77_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_COMPAT77_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0057_compat77_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0057_compat77_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057_compat77_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0057_compat77_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0057_compat77_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0057_compat77_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_COMPAT77_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_COMPAT77_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0058_compat77_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0058_compat77_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0058_compat77_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0058_compat77_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0058_compat77_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0058_compat77_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT77_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT77_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0059_compat77_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0059_compat77_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0059_compat77_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0059_compat77_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0059_compat77_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0059_compat77_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT77_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT77_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0060_compat77_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0060_compat77_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060_compat77_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0060_compat77_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0060_compat77_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0060_compat77_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_NS_COMPAT77_STD_DEQUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_NS_COMPAT77_STD_DEQUE_UNSIGNED
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::deque<unsigned>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0061_ns_compat77_std_deque_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat77(std::deque<unsigned> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0061_ns_compat77_std_deque_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0061_ns_compat77_std_deque_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0061_ns_compat77_std_deque_unsigned must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0061_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0061_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0061_ns_compat77_std_deque_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT77_BAD_TYPE_77
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT77_BAD_TYPE_77
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_77; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0062_compat77_bad_type_77', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(bad_type_77 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0062_compat77_bad_type_77 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0062_compat77_bad_type_77 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0062_compat77_bad_type_77 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_77",
          "h2dts_compat_array_0062_compat77_bad_type_77 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0062_compat77_bad_type_77 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT77_STD_DEQUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT77_STD_DEQUE_UNSIGNED
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<unsigned>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0063_compat77_std_deque_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(std::deque<unsigned> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0063_compat77_std_deque_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0063_compat77_std_deque_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0063_compat77_std_deque_unsigned must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0063_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0063_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0063_compat77_std_deque_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_E77
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_E77
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E77; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0064_e77', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E77 { A, B }; void f(E77 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0064_e77 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064_e77 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0064_e77 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0064_e77 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_COMPAT77_STD_DEQUE_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_COMPAT77_STD_DEQUE_UNSIGNED
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<unsigned>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0065_compat77_std_deque_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat77(std:deque<unsigned> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_compat77_std_deque_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_compat77_std_deque_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0065_compat77_std_deque_unsigned must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<unsigned>",
          "h2dts_compat_array_0065_compat77_std_deque_unsigned param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0065_compat77_std_deque_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT78_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT78_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0066_compat78_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0066_compat78_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0066_compat78_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0066_compat78_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0066_compat78_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0066_compat78_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_COMPAT78_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_COMPAT78_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0067_compat78_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0067_compat78_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067_compat78_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0067_compat78_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0067_compat78_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0067_compat78_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_COMPAT78_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_COMPAT78_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0068_compat78_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0068_compat78_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0068_compat78_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0068_compat78_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0068_compat78_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0068_compat78_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT78_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT78_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0069_compat78_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0069_compat78_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0069_compat78_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0069_compat78_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0069_compat78_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0069_compat78_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT78_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT78_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0070_compat78_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0070_compat78_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070_compat78_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0070_compat78_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0070_compat78_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0070_compat78_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_NS_COMPAT78_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_NS_COMPAT78_STD_DEQUE_BOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::deque<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0071_ns_compat78_std_deque_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat78(std::deque<bool> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0071_ns_compat78_std_deque_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0071_ns_compat78_std_deque_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0071_ns_compat78_std_deque_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0071_param convert output non-empty");
        assert.strictEqual(converted, "Array<boolean>", "h2dts_compat_array_0071_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0071_ns_compat78_std_deque_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT78_BAD_TYPE_78
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT78_BAD_TYPE_78
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_78; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0072_compat78_bad_type_78', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(bad_type_78 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0072_compat78_bad_type_78 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0072_compat78_bad_type_78 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0072_compat78_bad_type_78 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_78",
          "h2dts_compat_array_0072_compat78_bad_type_78 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0072_compat78_bad_type_78 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT78_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT78_STD_DEQUE_BOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0073_compat78_std_deque_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(std::deque<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0073_compat78_std_deque_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0073_compat78_std_deque_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0073_compat78_std_deque_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0073_param convert output non-empty");
        assert.strictEqual(converted, "Array<boolean>", "h2dts_compat_array_0073_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0073_compat78_std_deque_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_E78
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_E78
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E78; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0074_e78', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E78 { A, B }; void f(E78 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0074_e78 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074_e78 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0074_e78 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0074_e78 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT78_STD_DEQUE_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT78_STD_DEQUE_BOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0075_compat78_std_deque_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat78(std:deque<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0075_compat78_std_deque_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0075_compat78_std_deque_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0075_compat78_std_deque_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<bool>",
          "h2dts_compat_array_0075_compat78_std_deque_bool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0075_compat78_std_deque_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_COMPAT79_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_COMPAT79_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0076_compat79_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat79(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0076_compat79_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0076_compat79_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0076_compat79_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0076_compat79_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0076_compat79_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_COMPAT79_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_COMPAT79_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0077_compat79_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat79(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0077_compat79_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077_compat79_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0077_compat79_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0077_compat79_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0077_compat79_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT81_BAD_TYPE_81
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT81_BAD_TYPE_81
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_81; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0001_compat81_bad_type_81', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat81(bad_type_81 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0001_compat81_bad_type_81 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0001_compat81_bad_type_81 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0001_compat81_bad_type_81 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_81",
          "h2dts_compat_array_0001_compat81_bad_type_81 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0001_compat81_bad_type_81 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT81_STD_DEQUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT81_STD_DEQUE_CHAR8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<char8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0002_compat81_std_deque_char8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat81(std::deque<char8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0002_compat81_std_deque_char8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0002_compat81_std_deque_char8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0002_compat81_std_deque_char8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0002_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0002_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0002_compat81_std_deque_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_E81
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_E81
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E81; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0003_e81', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E81 { A, B }; void f(E81 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0003_e81 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003_e81 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0003_e81 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0003_e81 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT81_STD_DEQUE_CHAR8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT81_STD_DEQUE_CHAR8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<char8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0004_compat81_std_deque_char8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat81(std:deque<char8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0004_compat81_std_deque_char8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0004_compat81_std_deque_char8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0004_compat81_std_deque_char8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<char8_t>",
          "h2dts_compat_array_0004_compat81_std_deque_char8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0004_compat81_std_deque_char8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_COMPAT82_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_COMPAT82_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0005_compat82_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0005_compat82_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0005_compat82_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0005_compat82_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0005_compat82_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0005_compat82_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_COMPAT82_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_COMPAT82_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0006_compat82_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0006_compat82_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006_compat82_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0006_compat82_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0006_compat82_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0006_compat82_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_COMPAT82_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_COMPAT82_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0007_compat82_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_compat82_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0007_compat82_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0007_compat82_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0007_compat82_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0007_compat82_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0008_COMPAT82_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0008_COMPAT82_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0008_compat82_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0008_compat82_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008_compat82_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0008_compat82_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0008_compat82_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0008_compat82_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0009_COMPAT82_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0009_COMPAT82_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0009_compat82_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0009_compat82_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0009_compat82_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0009_compat82_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0009_compat82_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0009_compat82_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0010_NS_COMPAT82_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0010_NS_COMPAT82_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::deque<char16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0010_ns_compat82_std_deque_char16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat82(std::deque<char16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0010_ns_compat82_std_deque_char16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0010_ns_compat82_std_deque_char16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0010_ns_compat82_std_deque_char16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0010_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0010_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0010_ns_compat82_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0011_COMPAT82_BAD_TYPE_82
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0011_COMPAT82_BAD_TYPE_82
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_82; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0011_compat82_bad_type_82', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(bad_type_82 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0011_compat82_bad_type_82 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0011_compat82_bad_type_82 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0011_compat82_bad_type_82 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_82",
          "h2dts_compat_array_0011_compat82_bad_type_82 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0011_compat82_bad_type_82 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0012_COMPAT82_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0012_COMPAT82_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<char16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0012_compat82_std_deque_char16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(std::deque<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0012_compat82_std_deque_char16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0012_compat82_std_deque_char16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0012_compat82_std_deque_char16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0012_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0012_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0012_compat82_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0013_E82
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0013_E82
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E82; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0013_e82', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E82 { A, B }; void f(E82 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0013_e82 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0013_e82 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0013_e82 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0013_e82 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0014_COMPAT82_STD_DEQUE_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0014_COMPAT82_STD_DEQUE_CHAR16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<char16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0014_compat82_std_deque_char16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat82(std:deque<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0014_compat82_std_deque_char16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0014_compat82_std_deque_char16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0014_compat82_std_deque_char16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<char16_t>",
          "h2dts_compat_array_0014_compat82_std_deque_char16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0014_compat82_std_deque_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_COMPAT83_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_COMPAT83_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0015_compat83_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0015_compat83_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0015_compat83_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0015_compat83_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0015_compat83_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0015_compat83_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0016_COMPAT83_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0016_COMPAT83_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0016_compat83_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0016_compat83_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0016_compat83_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0016_compat83_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0016_compat83_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0016_compat83_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0017_COMPAT83_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0017_COMPAT83_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0017_compat83_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0017_compat83_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0017_compat83_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0017_compat83_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0017_compat83_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0017_compat83_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0018_COMPAT83_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0018_COMPAT83_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0018_compat83_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0018_compat83_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0018_compat83_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0018_compat83_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0018_compat83_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0018_compat83_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0019_COMPAT83_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0019_COMPAT83_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0019_compat83_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0019_compat83_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0019_compat83_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0019_compat83_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0019_compat83_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0019_compat83_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0020_NS_COMPAT83_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0020_NS_COMPAT83_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::deque<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0020_ns_compat83_std_deque_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat83(std::deque<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0020_ns_compat83_std_deque_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0020_ns_compat83_std_deque_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0020_ns_compat83_std_deque_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0020_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0020_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0020_ns_compat83_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0021_COMPAT83_BAD_TYPE_83
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0021_COMPAT83_BAD_TYPE_83
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_83; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0021_compat83_bad_type_83', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(bad_type_83 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0021_compat83_bad_type_83 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0021_compat83_bad_type_83 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0021_compat83_bad_type_83 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_83",
          "h2dts_compat_array_0021_compat83_bad_type_83 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0021_compat83_bad_type_83 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0022_COMPAT83_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0022_COMPAT83_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::deque<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0022_compat83_std_deque_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(std::deque<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0022_compat83_std_deque_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0022_compat83_std_deque_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0022_compat83_std_deque_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0022_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0022_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0022_compat83_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0023_E83
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0023_E83
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E83; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0023_e83', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E83 { A, B }; void f(E83 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0023_e83 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023_e83 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0023_e83 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0023_e83 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0024_COMPAT83_STD_DEQUE_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0024_COMPAT83_STD_DEQUE_CHAR32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:deque<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0024_compat83_std_deque_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat83(std:deque<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0024_compat83_std_deque_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0024_compat83_std_deque_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0024_compat83_std_deque_char32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:deque<char32_t>",
          "h2dts_compat_array_0024_compat83_std_deque_char32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0024_compat83_std_deque_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0025_COMPAT84_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0025_COMPAT84_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0025_compat84_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat84(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0025_compat84_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0025_compat84_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0025_compat84_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0025_compat84_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0025_compat84_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0026_COMPAT84_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0026_COMPAT84_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0026_compat84_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat84(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0026_compat84_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0026_compat84_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0026_compat84_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0026_compat84_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0026_compat84_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0027_COMPAT84_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0027_COMPAT84_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0027_compat84_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat84(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0027_compat84_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0027_compat84_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0027_compat84_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0027_compat84_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0027_compat84_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0028_COMPAT84_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0028_COMPAT84_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0028_compat84_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat84(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0028_compat84_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0028_compat84_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0028_compat84_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0028_compat84_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0028_compat84_intt execution error: ${String(err)}`);
    }
  });
});
