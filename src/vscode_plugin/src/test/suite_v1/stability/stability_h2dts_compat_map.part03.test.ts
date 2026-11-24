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

suite('Stability_H2DTS_COMPAT_MAP_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0061_COMPAT592_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0061_COMPAT592_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0061_compat592_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0061_compat592_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0061_compat592_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0061_compat592_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0061_compat592_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0061_compat592_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0062_COMPAT592_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0062_COMPAT592_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0062_compat592_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0062_compat592_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0062_compat592_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0062_compat592_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0062_compat592_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0062_compat592_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0063_COMPAT592_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0063_COMPAT592_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0063_compat592_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0063_compat592_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0063_compat592_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0063_compat592_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0063_compat592_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0063_compat592_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0064_COMPAT592_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0064_COMPAT592_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0064_compat592_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0064_compat592_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0064_compat592_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0064_compat592_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0064_compat592_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0064_compat592_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0065_NS_COMPAT592_STD_UNORDERED_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0065_NS_COMPAT592_STD_UNORDERED_MAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0065_ns_compat592_std_unordered_map_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat592(std::unordered_map<int, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0065_ns_compat592_std_unordered_map_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0065_ns_compat592_std_unordered_map_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0065_ns_compat592_std_unordered_map_int_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0065_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0065_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0065_ns_compat592_std_unordered_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0066_COMPAT592_BAD_TYPE_592
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0066_COMPAT592_BAD_TYPE_592
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_592; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0066_compat592_bad_type_592', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(bad_type_592 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0066_compat592_bad_type_592 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0066_compat592_bad_type_592 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0066_compat592_bad_type_592 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_592",
          "h2dts_compat_map_0066_compat592_bad_type_592 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0066_compat592_bad_type_592 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0067_COMPAT592_STD_UNORDERED_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0067_COMPAT592_STD_UNORDERED_MAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0067_compat592_std_unordered_map_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(std::unordered_map<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0067_compat592_std_unordered_map_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0067_compat592_std_unordered_map_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0067_compat592_std_unordered_map_int_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0067_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0067_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0067_compat592_std_unordered_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0068_E592
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0068_E592
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E592; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0068_e592', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E592 { A, B }; void f(E592 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0068_e592 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0068_e592 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0068_e592 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0068_e592 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0069_COMPAT592_STD_UNORDERED_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0069_COMPAT592_STD_UNORDERED_MAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0069_compat592_std_unordered_map_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(std:unordered_map<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0069_compat592_std_unordered_map_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0069_compat592_std_unordered_map_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0069_compat592_std_unordered_map_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<int, int>",
          "h2dts_compat_map_0069_compat592_std_unordered_map_int_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0069_compat592_std_unordered_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0070_COMPAT593_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0070_COMPAT593_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0070_compat593_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0070_compat593_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0070_compat593_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0070_compat593_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0070_compat593_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0070_compat593_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0071_COMPAT593_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0071_COMPAT593_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0071_compat593_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0071_compat593_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0071_compat593_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0071_compat593_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0071_compat593_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0071_compat593_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0072_COMPAT593_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0072_COMPAT593_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0072_compat593_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0072_compat593_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0072_compat593_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0072_compat593_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0072_compat593_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0072_compat593_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0073_COMPAT593_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0073_COMPAT593_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0073_compat593_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0073_compat593_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0073_compat593_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0073_compat593_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0073_compat593_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0073_compat593_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0074_COMPAT593_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0074_COMPAT593_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0074_compat593_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0074_compat593_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0074_compat593_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0074_compat593_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0074_compat593_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0074_compat593_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0075_NS_COMPAT593_STD_UNORDERED_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0075_NS_COMPAT593_STD_UNORDERED_MAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0075_ns_compat593_std_unordered_map_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat593(std::unordered_map<char, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0075_ns_compat593_std_unordered_map_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0075_ns_compat593_std_unordered_map_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0075_ns_compat593_std_unordered_map_char_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0075_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0075_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0075_ns_compat593_std_unordered_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0076_COMPAT593_BAD_TYPE_593
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0076_COMPAT593_BAD_TYPE_593
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_593; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0076_compat593_bad_type_593', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(bad_type_593 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0076_compat593_bad_type_593 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0076_compat593_bad_type_593 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0076_compat593_bad_type_593 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_593",
          "h2dts_compat_map_0076_compat593_bad_type_593 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0076_compat593_bad_type_593 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0077_COMPAT593_STD_UNORDERED_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0077_COMPAT593_STD_UNORDERED_MAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0077_compat593_std_unordered_map_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(std::unordered_map<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0077_compat593_std_unordered_map_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0077_compat593_std_unordered_map_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0077_compat593_std_unordered_map_char_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0077_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0077_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0077_compat593_std_unordered_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0078_E593
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0078_E593
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E593; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0078_e593', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E593 { A, B }; void f(E593 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0078_e593 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0078_e593 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0078_e593 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0078_e593 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0079_COMPAT593_STD_UNORDERED_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0079_COMPAT593_STD_UNORDERED_MAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0079_compat593_std_unordered_map_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat593(std:unordered_map<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0079_compat593_std_unordered_map_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0079_compat593_std_unordered_map_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0079_compat593_std_unordered_map_char_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char, int>",
          "h2dts_compat_map_0079_compat593_std_unordered_map_char_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0079_compat593_std_unordered_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0080_COMPAT594_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0080_COMPAT594_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0080_compat594_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat594(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0080_compat594_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0080_compat594_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0080_compat594_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0080_compat594_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0080_compat594_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT596_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT596_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0001_compat596_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat596(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0001_compat596_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0001_compat596_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0001_compat596_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0001_compat596_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0001_compat596_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT596_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT596_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0002_compat596_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat596(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0002_compat596_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0002_compat596_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0002_compat596_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0002_compat596_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0002_compat596_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0003_COMPAT596_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0003_COMPAT596_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0003_compat596_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat596(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0003_compat596_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0003_compat596_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0003_compat596_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0003_compat596_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0003_compat596_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0004_NS_COMPAT596_STD_UNORDERED_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0004_NS_COMPAT596_STD_UNORDERED_MAP_CHAR_DOUBLE
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0004_ns_compat596_std_unordered_map_char_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat596(std::unordered_map<char, double> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0004_ns_compat596_std_unordered_map_char_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0004_ns_compat596_std_unordered_map_char_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0004_ns_compat596_std_unordered_map_char_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0004_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0004_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0004_ns_compat596_std_unordered_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0005_COMPAT596_BAD_TYPE_596
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0005_COMPAT596_BAD_TYPE_596
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_596; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0005_compat596_bad_type_596', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat596(bad_type_596 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_compat596_bad_type_596 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_compat596_bad_type_596 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0005_compat596_bad_type_596 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_596",
          "h2dts_compat_map_0005_compat596_bad_type_596 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0005_compat596_bad_type_596 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0006_COMPAT596_STD_UNORDERED_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0006_COMPAT596_STD_UNORDERED_MAP_CHAR_DOUBLE
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0006_compat596_std_unordered_map_char_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat596(std::unordered_map<char, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_compat596_std_unordered_map_char_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_compat596_std_unordered_map_char_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0006_compat596_std_unordered_map_char_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0006_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0006_compat596_std_unordered_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0007_E596
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0007_E596
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E596; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0007_e596', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E596 { A, B }; void f(E596 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_e596 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0007_e596 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0007_e596 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0007_e596 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0008_COMPAT596_STD_UNORDERED_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0008_COMPAT596_STD_UNORDERED_MAP_CHAR_DOUBLE
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0008_compat596_std_unordered_map_char_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat596(std:unordered_map<char, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0008_compat596_std_unordered_map_char_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0008_compat596_std_unordered_map_char_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0008_compat596_std_unordered_map_char_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char, double>",
          "h2dts_compat_map_0008_compat596_std_unordered_map_char_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0008_compat596_std_unordered_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0009_COMPAT597_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0009_COMPAT597_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0009_compat597_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0009_compat597_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0009_compat597_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0009_compat597_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0009_compat597_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0009_compat597_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT597_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT597_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0010_compat597_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0010_compat597_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0010_compat597_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0010_compat597_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0010_compat597_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0010_compat597_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT597_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT597_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0011_compat597_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0011_compat597_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0011_compat597_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0011_compat597_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0011_compat597_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0011_compat597_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT597_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT597_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0012_compat597_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0012_compat597_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0012_compat597_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0012_compat597_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0012_compat597_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0012_compat597_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0013_COMPAT597_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0013_COMPAT597_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0013_compat597_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0013_compat597_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0013_compat597_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0013_compat597_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0013_compat597_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0013_compat597_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0014_NS_COMPAT597_STD_UNORDERED_MAP_CHAR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0014_NS_COMPAT597_STD_UNORDERED_MAP_CHAR_FLOAT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0014_ns_compat597_std_unordered_map_char_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat597(std::unordered_map<char, float> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0014_ns_compat597_std_unordered_map_char_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0014_ns_compat597_std_unordered_map_char_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0014_ns_compat597_std_unordered_map_char_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0014_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0014_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0014_ns_compat597_std_unordered_map_char_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0015_COMPAT597_BAD_TYPE_597
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0015_COMPAT597_BAD_TYPE_597
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_597; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0015_compat597_bad_type_597', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(bad_type_597 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_compat597_bad_type_597 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_compat597_bad_type_597 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0015_compat597_bad_type_597 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_597",
          "h2dts_compat_map_0015_compat597_bad_type_597 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0015_compat597_bad_type_597 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0016_COMPAT597_STD_UNORDERED_MAP_CHAR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0016_COMPAT597_STD_UNORDERED_MAP_CHAR_FLOAT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0016_compat597_std_unordered_map_char_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(std::unordered_map<char, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_compat597_std_unordered_map_char_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_compat597_std_unordered_map_char_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0016_compat597_std_unordered_map_char_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0016_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0016_compat597_std_unordered_map_char_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0017_E597
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0017_E597
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E597; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0017_e597', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E597 { A, B }; void f(E597 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_e597 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0017_e597 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0017_e597 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0017_e597 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0018_COMPAT597_STD_UNORDERED_MAP_CHAR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0018_COMPAT597_STD_UNORDERED_MAP_CHAR_FLOAT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0018_compat597_std_unordered_map_char_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat597(std:unordered_map<char, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0018_compat597_std_unordered_map_char_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0018_compat597_std_unordered_map_char_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0018_compat597_std_unordered_map_char_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char, float>",
          "h2dts_compat_map_0018_compat597_std_unordered_map_char_float param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0018_compat597_std_unordered_map_char_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0019_COMPAT598_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0019_COMPAT598_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0019_compat598_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0019_compat598_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0019_compat598_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0019_compat598_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0019_compat598_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0019_compat598_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT598_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT598_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0020_compat598_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0020_compat598_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0020_compat598_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0020_compat598_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0020_compat598_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0020_compat598_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT598_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT598_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0021_compat598_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0021_compat598_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0021_compat598_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0021_compat598_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0021_compat598_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0021_compat598_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT598_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT598_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0022_compat598_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0022_compat598_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0022_compat598_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0022_compat598_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0022_compat598_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0022_compat598_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0023_COMPAT598_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0023_COMPAT598_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0023_compat598_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0023_compat598_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0023_compat598_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0023_compat598_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0023_compat598_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0023_compat598_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0024_NS_COMPAT598_STD_UNORDERED_MAP_CHAR16_25C2E0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0024_NS_COMPAT598_STD_UNORDERED_MAP_CHAR16_25C2E0
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char16_t, int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0024_ns_compat598_std_unordered_map_char16_25c2e0', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat598(std::unordered_map<char16_t, int32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0024_ns_compat598_std_unordered_map_char16_25c2e0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0024_ns_compat598_std_unordered_map_char16_25c2e0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0024_ns_compat598_std_unordered_map_char16_25c2e0 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0024_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0024_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0024_ns_compat598_std_unordered_map_char16_25c2e0 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0025_COMPAT598_BAD_TYPE_598
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0025_COMPAT598_BAD_TYPE_598
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_598; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0025_compat598_bad_type_598', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(bad_type_598 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_compat598_bad_type_598 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_compat598_bad_type_598 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0025_compat598_bad_type_598 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_598",
          "h2dts_compat_map_0025_compat598_bad_type_598 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0025_compat598_bad_type_598 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0026_COMPAT598_STD_UNORDERED_MAP_CHAR16_25C2E0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0026_COMPAT598_STD_UNORDERED_MAP_CHAR16_25C2E0
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char16_t, int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0026_compat598_std_unordered_map_char16_25c2e0', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(std::unordered_map<char16_t, int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_compat598_std_unordered_map_char16_25c2e0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_compat598_std_unordered_map_char16_25c2e0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0026_compat598_std_unordered_map_char16_25c2e0 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0026_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0026_compat598_std_unordered_map_char16_25c2e0 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0027_E598
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0027_E598
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E598; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0027_e598', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E598 { A, B }; void f(E598 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_e598 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0027_e598 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0027_e598 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0027_e598 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0028_COMPAT598_STD_UNORDERED_MAP_CHAR16_287A9A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0028_COMPAT598_STD_UNORDERED_MAP_CHAR16_287A9A
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char16_t, int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0028_compat598_std_unordered_map_char16_287a9a', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat598(std:unordered_map<char16_t, int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0028_compat598_std_unordered_map_char16_287a9a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0028_compat598_std_unordered_map_char16_287a9a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0028_compat598_std_unordered_map_char16_287a9a must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char16_t, int32_t>",
          "h2dts_compat_map_0028_compat598_std_unordered_map_char16_287a9a param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0028_compat598_std_unordered_map_char16_287a9a execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0029_COMPAT599_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0029_COMPAT599_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0029_compat599_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0029_compat599_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0029_compat599_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0029_compat599_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0029_compat599_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0029_compat599_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT599_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT599_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0030_compat599_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0030_compat599_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0030_compat599_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0030_compat599_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0030_compat599_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0030_compat599_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT599_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT599_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0031_compat599_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0031_compat599_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0031_compat599_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0031_compat599_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0031_compat599_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0031_compat599_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT599_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT599_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0032_compat599_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0032_compat599_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0032_compat599_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0032_compat599_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0032_compat599_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0032_compat599_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0033_COMPAT599_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0033_COMPAT599_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0033_compat599_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0033_compat599_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0033_compat599_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0033_compat599_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0033_compat599_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0033_compat599_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0034_NS_COMPAT599_STD_UNORDERED_MAP_CHAR32_91146F
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0034_NS_COMPAT599_STD_UNORDERED_MAP_CHAR32_91146F
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char32_t, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0034_ns_compat599_std_unordered_map_char32_91146f', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat599(std::unordered_map<char32_t, size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0034_ns_compat599_std_unordered_map_char32_91146f parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0034_ns_compat599_std_unordered_map_char32_91146f must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0034_ns_compat599_std_unordered_map_char32_91146f must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0034_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0034_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0034_ns_compat599_std_unordered_map_char32_91146f execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0035_COMPAT599_BAD_TYPE_599
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0035_COMPAT599_BAD_TYPE_599
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_599; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0035_compat599_bad_type_599', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(bad_type_599 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_compat599_bad_type_599 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_compat599_bad_type_599 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0035_compat599_bad_type_599 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_599",
          "h2dts_compat_map_0035_compat599_bad_type_599 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0035_compat599_bad_type_599 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0036_COMPAT599_STD_UNORDERED_MAP_CHAR32_91146F
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0036_COMPAT599_STD_UNORDERED_MAP_CHAR32_91146F
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char32_t, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0036_compat599_std_unordered_map_char32_91146f', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(std::unordered_map<char32_t, size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_compat599_std_unordered_map_char32_91146f parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_compat599_std_unordered_map_char32_91146f must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0036_compat599_std_unordered_map_char32_91146f must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0036_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0036_compat599_std_unordered_map_char32_91146f execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0037_E599
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0037_E599
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E599; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0037_e599', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E599 { A, B }; void f(E599 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_e599 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0037_e599 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0037_e599 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0037_e599 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0038_COMPAT599_STD_UNORDERED_MAP_CHAR32_0DE4C3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0038_COMPAT599_STD_UNORDERED_MAP_CHAR32_0DE4C3
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char32_t, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0038_compat599_std_unordered_map_char32_0de4c3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat599(std:unordered_map<char32_t, size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0038_compat599_std_unordered_map_char32_0de4c3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0038_compat599_std_unordered_map_char32_0de4c3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0038_compat599_std_unordered_map_char32_0de4c3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char32_t, size_t>",
          "h2dts_compat_map_0038_compat599_std_unordered_map_char32_0de4c3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0038_compat599_std_unordered_map_char32_0de4c3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0039_COMPAT600_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0039_COMPAT600_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0039_compat600_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0039_compat600_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0039_compat600_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0039_compat600_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0039_compat600_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0039_compat600_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0040_COMPAT600_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0040_COMPAT600_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0040_compat600_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0040_compat600_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0040_compat600_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0040_compat600_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0040_compat600_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0040_compat600_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0041_COMPAT600_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0041_COMPAT600_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0041_compat600_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0041_compat600_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0041_compat600_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0041_compat600_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0041_compat600_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0041_compat600_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0042_COMPAT600_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0042_COMPAT600_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0042_compat600_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0042_compat600_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0042_compat600_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0042_compat600_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0042_compat600_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0042_compat600_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0043_COMPAT600_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0043_COMPAT600_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0043_compat600_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0043_compat600_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0043_compat600_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0043_compat600_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0043_compat600_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0043_compat600_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0044_NS_COMPAT600_STD_UNORDERED_MAP_CHAR8_T_135E66
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0044_NS_COMPAT600_STD_UNORDERED_MAP_CHAR8_T_135E66
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char8_t, uint32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0044_ns_compat600_std_unordered_map_char8_t_135e66', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat600(std::unordered_map<char8_t, uint32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0044_ns_compat600_std_unordered_map_char8_t_135e66 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0044_ns_compat600_std_unordered_map_char8_t_135e66 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0044_ns_compat600_std_unordered_map_char8_t_135e66 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0044_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0044_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0044_ns_compat600_std_unordered_map_char8_t_135e66 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0045_COMPAT600_BAD_TYPE_600
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0045_COMPAT600_BAD_TYPE_600
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_600; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0045_compat600_bad_type_600', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(bad_type_600 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0045_compat600_bad_type_600 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0045_compat600_bad_type_600 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0045_compat600_bad_type_600 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_600",
          "h2dts_compat_map_0045_compat600_bad_type_600 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0045_compat600_bad_type_600 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0046_COMPAT600_STD_UNORDERED_MAP_CHAR8_T_135E66
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0046_COMPAT600_STD_UNORDERED_MAP_CHAR8_T_135E66
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char8_t, uint32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0046_compat600_std_unordered_map_char8_t_135e66', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(std::unordered_map<char8_t, uint32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0046_compat600_std_unordered_map_char8_t_135e66 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0046_compat600_std_unordered_map_char8_t_135e66 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0046_compat600_std_unordered_map_char8_t_135e66 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0046_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0046_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0046_compat600_std_unordered_map_char8_t_135e66 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0047_E600
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0047_E600
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E600; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0047_e600', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E600 { A, B }; void f(E600 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0047_e600 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0047_e600 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0047_e600 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0047_e600 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0048_COMPAT600_STD_UNORDERED_MAP_CHAR8_T_3B8C3B
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0048_COMPAT600_STD_UNORDERED_MAP_CHAR8_T_3B8C3B
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char8_t, uint32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0048_compat600_std_unordered_map_char8_t_3b8c3b', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat600(std:unordered_map<char8_t, uint32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0048_compat600_std_unordered_map_char8_t_3b8c3b parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0048_compat600_std_unordered_map_char8_t_3b8c3b must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0048_compat600_std_unordered_map_char8_t_3b8c3b must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char8_t, uint32_t>",
          "h2dts_compat_map_0048_compat600_std_unordered_map_char8_t_3b8c3b param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0048_compat600_std_unordered_map_char8_t_3b8c3b execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0049_COMPAT601_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0049_COMPAT601_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0049_compat601_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0049_compat601_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0049_compat601_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0049_compat601_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0049_compat601_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0049_compat601_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0050_COMPAT601_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0050_COMPAT601_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0050_compat601_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0050_compat601_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0050_compat601_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0050_compat601_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0050_compat601_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0050_compat601_doubl execution error: ${String(err)}`);
    }
  });
});
