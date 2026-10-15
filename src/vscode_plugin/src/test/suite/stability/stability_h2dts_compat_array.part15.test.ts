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

suite('Stability_H2DTS_COMPAT_ARRAY_Part15', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_E219
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_E219
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E219; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0057_e219', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E219 { A, B }; void f(E219 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0057_e219 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057_e219 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0057_e219 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0057_e219 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_COMPAT219_STD_VECTOR_STD_STRING
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_COMPAT219_STD_VECTOR_STD_STRING
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<std:string>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0058_compat219_std_vector_std_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat219(std:vector<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0058_compat219_std_vector_std_string parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0058_compat219_std_vector_std_string must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0058_compat219_std_vector_std_string must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<std:string>",
          "h2dts_compat_array_0058_compat219_std_vector_std_string param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0058_compat219_std_vector_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT225_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT225_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0059_compat225_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0059_compat225_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0059_compat225_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0059_compat225_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0059_compat225_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0059_compat225_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT225_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT225_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0060_compat225_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0060_compat225_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060_compat225_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0060_compat225_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0060_compat225_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0060_compat225_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_COMPAT225_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_COMPAT225_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0061_compat225_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0061_compat225_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061_compat225_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0061_compat225_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0061_compat225_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0061_compat225_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT225_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT225_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0062_compat225_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0062_compat225_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0062_compat225_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0062_compat225_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0062_compat225_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0062_compat225_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT225_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT225_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0063_compat225_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0063_compat225_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063_compat225_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0063_compat225_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0063_compat225_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0063_compat225_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_NS_COMPAT225_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_NS_COMPAT225_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::vector<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0064_ns_compat225_std_vector_long_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat225(std::vector<long long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0064_ns_compat225_std_vector_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0064_ns_compat225_std_vector_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0064_ns_compat225_std_vector_long_long must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0064_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0064_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0064_ns_compat225_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_COMPAT225_BAD_TYPE_225
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_COMPAT225_BAD_TYPE_225
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_225; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0065_compat225_bad_type_225', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(bad_type_225 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_compat225_bad_type_225 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_compat225_bad_type_225 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0065_compat225_bad_type_225 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_225",
          "h2dts_compat_array_0065_compat225_bad_type_225 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0065_compat225_bad_type_225 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT225_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT225_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0066_compat225_std_vector_long_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std::vector<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0066_compat225_std_vector_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0066_compat225_std_vector_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0066_compat225_std_vector_long_long must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0066_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0066_compat225_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_E225
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_E225
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E225; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0067_e225', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E225 { A, B }; void f(E225 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0067_e225 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067_e225 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0067_e225 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0067_e225 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_COMPAT225_STD_VECTOR_LONG_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_COMPAT225_STD_VECTOR_LONG_LONG
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<long long>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0068_compat225_std_vector_long_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat225(std:vector<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0068_compat225_std_vector_long_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0068_compat225_std_vector_long_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0068_compat225_std_vector_long_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<long long>",
          "h2dts_compat_array_0068_compat225_std_vector_long_long param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0068_compat225_std_vector_long_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT226_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT226_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0069_compat226_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0069_compat226_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0069_compat226_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0069_compat226_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0069_compat226_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0069_compat226_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT226_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT226_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0070_compat226_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0070_compat226_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070_compat226_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0070_compat226_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0070_compat226_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0070_compat226_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_COMPAT226_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_COMPAT226_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0071_compat226_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0071_compat226_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071_compat226_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0071_compat226_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0071_compat226_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0071_compat226_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT226_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT226_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0072_compat226_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0072_compat226_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0072_compat226_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0072_compat226_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0072_compat226_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0072_compat226_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT226_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT226_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0073_compat226_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0073_compat226_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073_compat226_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0073_compat226_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0073_compat226_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0073_compat226_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_NS_COMPAT226_STD_VECTOR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_NS_COMPAT226_STD_VECTOR_UNSIGNED_SHORT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::vector<unsigned short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0074_ns_compat226_std_vector_unsigned_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat226(std::vector<unsigned short> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0074_ns_compat226_std_vector_unsigned_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0074_ns_compat226_std_vector_unsigned_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0074_ns_compat226_std_vector_unsigned_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0074_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0074_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0074_ns_compat226_std_vector_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT226_BAD_TYPE_226
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT226_BAD_TYPE_226
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_226; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0075_compat226_bad_type_226', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(bad_type_226 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0075_compat226_bad_type_226 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0075_compat226_bad_type_226 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0075_compat226_bad_type_226 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_226",
          "h2dts_compat_array_0075_compat226_bad_type_226 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0075_compat226_bad_type_226 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_COMPAT226_STD_VECTOR_UNSIGNED_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_COMPAT226_STD_VECTOR_UNSIGNED_SHORT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<unsigned short>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0076_compat226_std_vector_unsigned_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat226(std::vector<unsigned short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0076_compat226_std_vector_unsigned_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0076_compat226_std_vector_unsigned_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0076_compat226_std_vector_unsigned_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0076_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0076_compat226_std_vector_unsigned_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_E226
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_E226
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E226; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0077_e226', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E226 { A, B }; void f(E226 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0077_e226 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077_e226 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0077_e226 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0077_e226 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT230_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT230_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0001_compat230_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0001_compat230_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0001_compat230_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0001_compat230_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0001_compat230_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0001_compat230_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT230_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT230_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0002_compat230_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0002_compat230_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002_compat230_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0002_compat230_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0002_compat230_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0002_compat230_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_NS_COMPAT230_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_NS_COMPAT230_STD_VECTOR_INT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::vector<int *>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0003_ns_compat230_std_vector_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat230(std::vector<int *> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0003_ns_compat230_std_vector_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0003_ns_compat230_std_vector_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0003_ns_compat230_std_vector_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0003_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0003_ns_compat230_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT230_BAD_TYPE_230
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT230_BAD_TYPE_230
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_230; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0004_compat230_bad_type_230', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(bad_type_230 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0004_compat230_bad_type_230 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0004_compat230_bad_type_230 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0004_compat230_bad_type_230 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_230",
          "h2dts_compat_array_0004_compat230_bad_type_230 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0004_compat230_bad_type_230 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_COMPAT230_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_COMPAT230_STD_VECTOR_INT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int *>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0005_compat230_std_vector_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std::vector<int *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0005_compat230_std_vector_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0005_compat230_std_vector_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0005_compat230_std_vector_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0005_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0005_compat230_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_E230
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_E230
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E230; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0006_e230', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E230 { A, B }; void f(E230 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0006_e230 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006_e230 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0006_e230 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0006_e230 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_COMPAT230_STD_VECTOR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_COMPAT230_STD_VECTOR_INT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int *>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0007_compat230_std_vector_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat230(std:vector<int *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_compat230_std_vector_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_compat230_std_vector_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0007_compat230_std_vector_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int *>",
          "h2dts_compat_array_0007_compat230_std_vector_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0007_compat230_std_vector_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0008_COMPAT231_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0008_COMPAT231_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0008_compat231_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0008_compat231_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008_compat231_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0008_compat231_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0008_compat231_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0008_compat231_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0009_COMPAT231_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0009_COMPAT231_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0009_compat231_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0009_compat231_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0009_compat231_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0009_compat231_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0009_compat231_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0009_compat231_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0010_COMPAT231_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0010_COMPAT231_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0010_compat231_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0010_compat231_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0010_compat231_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0010_compat231_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0010_compat231_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0010_compat231_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0011_COMPAT231_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0011_COMPAT231_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0011_compat231_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0011_compat231_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0011_compat231_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0011_compat231_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0011_compat231_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0011_compat231_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0012_COMPAT231_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0012_COMPAT231_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0012_compat231_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0012_compat231_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0012_compat231_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0012_compat231_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0012_compat231_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0012_compat231_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0013_NS_COMPAT231_STD_ARRAY_STD_STRING_10
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0013_NS_COMPAT231_STD_ARRAY_STD_STRING_10
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::array<std::string, 10>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0013_ns_compat231_std_array_std_string_10', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat231(std::array<std::string, 10> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0013_ns_compat231_std_array_std_string_10 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0013_ns_compat231_std_array_std_string_10 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0013_ns_compat231_std_array_std_string_10 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0013_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0013_ns_compat231_std_array_std_string_10 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0014_COMPAT231_BAD_TYPE_231
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0014_COMPAT231_BAD_TYPE_231
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_231; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0014_compat231_bad_type_231', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(bad_type_231 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0014_compat231_bad_type_231 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0014_compat231_bad_type_231 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0014_compat231_bad_type_231 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_231",
          "h2dts_compat_array_0014_compat231_bad_type_231 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0014_compat231_bad_type_231 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_COMPAT231_STD_ARRAY_STD_STRING_10
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_COMPAT231_STD_ARRAY_STD_STRING_10
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::array<std::string, 10>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0015_compat231_std_array_std_string_10', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat231(std::array<std::string, 10> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0015_compat231_std_array_std_string_10 parseFunction must return non-empty array");
