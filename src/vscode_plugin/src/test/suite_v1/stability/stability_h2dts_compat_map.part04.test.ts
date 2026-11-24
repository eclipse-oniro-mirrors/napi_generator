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

suite('Stability_H2DTS_COMPAT_MAP_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0051_COMPAT601_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0051_COMPAT601_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0051_compat601_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0051_compat601_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0051_compat601_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0051_compat601_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0051_compat601_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0051_compat601_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0052_COMPAT601_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0052_COMPAT601_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0052_compat601_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0052_compat601_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0052_compat601_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0052_compat601_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0052_compat601_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0052_compat601_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0053_COMPAT601_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0053_COMPAT601_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0053_compat601_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0053_compat601_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0053_compat601_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0053_compat601_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0053_compat601_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0053_compat601_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0054_NS_COMPAT601_STD_UNORDERED_MAP_CHAR32_E58A5C
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0054_NS_COMPAT601_STD_UNORDERED_MAP_CHAR32_E58A5C
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<char32_t, int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0054_ns_compat601_std_unordered_map_char32_e58a5c', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat601(std::unordered_map<char32_t, int8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0054_ns_compat601_std_unordered_map_char32_e58a5c parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0054_ns_compat601_std_unordered_map_char32_e58a5c must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0054_ns_compat601_std_unordered_map_char32_e58a5c must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0054_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0054_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0054_ns_compat601_std_unordered_map_char32_e58a5c execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0055_COMPAT601_BAD_TYPE_601
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0055_COMPAT601_BAD_TYPE_601
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_601; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0055_compat601_bad_type_601', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(bad_type_601 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0055_compat601_bad_type_601 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0055_compat601_bad_type_601 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0055_compat601_bad_type_601 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_601",
          "h2dts_compat_map_0055_compat601_bad_type_601 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0055_compat601_bad_type_601 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0056_COMPAT601_STD_UNORDERED_MAP_CHAR32_E58A5C
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0056_COMPAT601_STD_UNORDERED_MAP_CHAR32_E58A5C
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<char32_t, int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0056_compat601_std_unordered_map_char32_e58a5c', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(std::unordered_map<char32_t, int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0056_compat601_std_unordered_map_char32_e58a5c parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0056_compat601_std_unordered_map_char32_e58a5c must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0056_compat601_std_unordered_map_char32_e58a5c must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0056_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0056_compat601_std_unordered_map_char32_e58a5c execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0057_E601
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0057_E601
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E601; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0057_e601', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E601 { A, B }; void f(E601 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0057_e601 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0057_e601 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0057_e601 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0057_e601 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0058_COMPAT601_STD_UNORDERED_MAP_CHAR32_7BFE20
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0058_COMPAT601_STD_UNORDERED_MAP_CHAR32_7BFE20
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<char32_t, int8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0058_compat601_std_unordered_map_char32_7bfe20', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat601(std:unordered_map<char32_t, int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0058_compat601_std_unordered_map_char32_7bfe20 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0058_compat601_std_unordered_map_char32_7bfe20 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0058_compat601_std_unordered_map_char32_7bfe20 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<char32_t, int8_t>",
          "h2dts_compat_map_0058_compat601_std_unordered_map_char32_7bfe20 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0058_compat601_std_unordered_map_char32_7bfe20 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0059_COMPAT602_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0059_COMPAT602_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0059_compat602_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0059_compat602_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0059_compat602_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0059_compat602_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0059_compat602_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0059_compat602_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0060_COMPAT602_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0060_COMPAT602_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0060_compat602_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0060_compat602_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0060_compat602_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0060_compat602_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0060_compat602_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0060_compat602_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0061_COMPAT602_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0061_COMPAT602_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0061_compat602_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0061_compat602_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0061_compat602_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0061_compat602_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0061_compat602_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0061_compat602_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0062_COMPAT602_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0062_COMPAT602_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0062_compat602_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0062_compat602_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0062_compat602_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0062_compat602_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0062_compat602_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0062_compat602_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0063_COMPAT602_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0063_COMPAT602_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0063_compat602_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0063_compat602_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0063_compat602_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0063_compat602_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0063_compat602_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0063_compat602_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0064_NS_COMPAT602_STD_UNORDERED_MAP_WCHAR_T_BB4E6A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0064_NS_COMPAT602_STD_UNORDERED_MAP_WCHAR_T_BB4E6A
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<wchar_t, uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0064_ns_compat602_std_unordered_map_wchar_t_bb4e6a', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat602(std::unordered_map<wchar_t, uint16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0064_ns_compat602_std_unordered_map_wchar_t_bb4e6a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0064_ns_compat602_std_unordered_map_wchar_t_bb4e6a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0064_ns_compat602_std_unordered_map_wchar_t_bb4e6a must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0064_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0064_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0064_ns_compat602_std_unordered_map_wchar_t_bb4e6a execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0065_COMPAT602_BAD_TYPE_602
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0065_COMPAT602_BAD_TYPE_602
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_602; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0065_compat602_bad_type_602', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(bad_type_602 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0065_compat602_bad_type_602 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0065_compat602_bad_type_602 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0065_compat602_bad_type_602 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_602",
          "h2dts_compat_map_0065_compat602_bad_type_602 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0065_compat602_bad_type_602 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0066_COMPAT602_STD_UNORDERED_MAP_WCHAR_T_BB4E6A
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0066_COMPAT602_STD_UNORDERED_MAP_WCHAR_T_BB4E6A
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<wchar_t, uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0066_compat602_std_unordered_map_wchar_t_bb4e6a', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(std::unordered_map<wchar_t, uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0066_compat602_std_unordered_map_wchar_t_bb4e6a parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0066_compat602_std_unordered_map_wchar_t_bb4e6a must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0066_compat602_std_unordered_map_wchar_t_bb4e6a must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0066_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0066_compat602_std_unordered_map_wchar_t_bb4e6a execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0067_E602
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0067_E602
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E602; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0067_e602', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E602 { A, B }; void f(E602 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0067_e602 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0067_e602 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0067_e602 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0067_e602 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0068_COMPAT602_STD_UNORDERED_MAP_WCHAR_T_4B2DA1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0068_COMPAT602_STD_UNORDERED_MAP_WCHAR_T_4B2DA1
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<wchar_t, uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0068_compat602_std_unordered_map_wchar_t_4b2da1', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat602(std:unordered_map<wchar_t, uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0068_compat602_std_unordered_map_wchar_t_4b2da1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0068_compat602_std_unordered_map_wchar_t_4b2da1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0068_compat602_std_unordered_map_wchar_t_4b2da1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<wchar_t, uint16_t>",
          "h2dts_compat_map_0068_compat602_std_unordered_map_wchar_t_4b2da1 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0068_compat602_std_unordered_map_wchar_t_4b2da1 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0069_COMPAT603_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0069_COMPAT603_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0069_compat603_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0069_compat603_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0069_compat603_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0069_compat603_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0069_compat603_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0069_compat603_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0070_COMPAT603_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0070_COMPAT603_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0070_compat603_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0070_compat603_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0070_compat603_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0070_compat603_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0070_compat603_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0070_compat603_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0071_COMPAT603_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0071_COMPAT603_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0071_compat603_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0071_compat603_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0071_compat603_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0071_compat603_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0071_compat603_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0071_compat603_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0072_COMPAT603_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0072_COMPAT603_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0072_compat603_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0072_compat603_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0072_compat603_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0072_compat603_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0072_compat603_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0072_compat603_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0073_COMPAT603_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0073_COMPAT603_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0073_compat603_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0073_compat603_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0073_compat603_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0073_compat603_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0073_compat603_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0073_compat603_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0074_NS_COMPAT603_STD_UNORDERED_MAP_INT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0074_NS_COMPAT603_STD_UNORDERED_MAP_INT_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<int, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0074_ns_compat603_std_unordered_map_int_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat603(std::unordered_map<int, bool> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0074_ns_compat603_std_unordered_map_int_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0074_ns_compat603_std_unordered_map_int_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0074_ns_compat603_std_unordered_map_int_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0074_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, boolean>", "h2dts_compat_map_0074_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0074_ns_compat603_std_unordered_map_int_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0075_COMPAT603_BAD_TYPE_603
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0075_COMPAT603_BAD_TYPE_603
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_603; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0075_compat603_bad_type_603', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(bad_type_603 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0075_compat603_bad_type_603 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0075_compat603_bad_type_603 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0075_compat603_bad_type_603 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_603",
          "h2dts_compat_map_0075_compat603_bad_type_603 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0075_compat603_bad_type_603 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0076_COMPAT603_STD_UNORDERED_MAP_INT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0076_COMPAT603_STD_UNORDERED_MAP_INT_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<int, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0076_compat603_std_unordered_map_int_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(std::unordered_map<int, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0076_compat603_std_unordered_map_int_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0076_compat603_std_unordered_map_int_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0076_compat603_std_unordered_map_int_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0076_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, boolean>", "h2dts_compat_map_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0076_compat603_std_unordered_map_int_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0077_E603
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0077_E603
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E603; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0077_e603', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E603 { A, B }; void f(E603 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0077_e603 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0077_e603 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0077_e603 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0077_e603 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0078_COMPAT603_STD_UNORDERED_MAP_INT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0078_COMPAT603_STD_UNORDERED_MAP_INT_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<int, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0078_compat603_std_unordered_map_int_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat603(std:unordered_map<int, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0078_compat603_std_unordered_map_int_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0078_compat603_std_unordered_map_int_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0078_compat603_std_unordered_map_int_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<int, bool>",
          "h2dts_compat_map_0078_compat603_std_unordered_map_int_bool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0078_compat603_std_unordered_map_int_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0079_COMPAT604_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0079_COMPAT604_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0079_compat604_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat604(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0079_compat604_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0079_compat604_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0079_compat604_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0079_compat604_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0079_compat604_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0080_COMPAT604_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0080_COMPAT604_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0080_compat604_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat604(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0080_compat604_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0080_compat604_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0080_compat604_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0080_compat604_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0080_compat604_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT606_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT606_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0001_compat606_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0001_compat606_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0001_compat606_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0001_compat606_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0001_compat606_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0001_compat606_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT606_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT606_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0002_compat606_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0002_compat606_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0002_compat606_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0002_compat606_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0002_compat606_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0002_compat606_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0003_NS_COMPAT606_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0003_NS_COMPAT606_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<size_t, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0003_ns_compat606_std_unordered_map_size_t_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat606(std::unordered_map<size_t, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0003_ns_compat606_std_unordered_map_size_t_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0003_ns_compat606_std_unordered_map_size_t_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0003_ns_compat606_std_unordered_map_size_t_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0003_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0003_ns_compat606_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0004_COMPAT606_BAD_TYPE_606
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0004_COMPAT606_BAD_TYPE_606
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_606; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0004_compat606_bad_type_606', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(bad_type_606 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0004_compat606_bad_type_606 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0004_compat606_bad_type_606 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0004_compat606_bad_type_606 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_606",
          "h2dts_compat_map_0004_compat606_bad_type_606 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0004_compat606_bad_type_606 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0005_COMPAT606_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0005_COMPAT606_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<size_t, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0005_compat606_std_unordered_map_size_t_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(std::unordered_map<size_t, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_compat606_std_unordered_map_size_t_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_compat606_std_unordered_map_size_t_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0005_compat606_std_unordered_map_size_t_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0005_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0005_compat606_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0006_E606
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0006_E606
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E606; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0006_e606', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E606 { A, B }; void f(E606 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_e606 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0006_e606 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0006_e606 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0006_e606 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0007_COMPAT606_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0007_COMPAT606_STD_UNORDERED_MAP_SIZE_T_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<size_t, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0007_compat606_std_unordered_map_size_t_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(std:unordered_map<size_t, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_compat606_std_unordered_map_size_t_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_compat606_std_unordered_map_size_t_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0007_compat606_std_unordered_map_size_t_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<size_t, char>",
          "h2dts_compat_map_0007_compat606_std_unordered_map_size_t_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0007_compat606_std_unordered_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0008_COMPAT607_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0008_COMPAT607_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0008_compat607_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0008_compat607_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0008_compat607_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0008_compat607_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0008_compat607_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0008_compat607_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0009_COMPAT607_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0009_COMPAT607_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0009_compat607_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0009_compat607_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0009_compat607_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0009_compat607_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0009_compat607_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0009_compat607_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT607_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT607_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0010_compat607_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0010_compat607_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0010_compat607_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0010_compat607_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0010_compat607_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0010_compat607_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT607_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT607_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0011_compat607_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0011_compat607_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0011_compat607_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0011_compat607_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0011_compat607_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0011_compat607_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT607_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT607_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0012_compat607_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0012_compat607_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0012_compat607_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0012_compat607_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0012_compat607_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0012_compat607_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0013_NS_COMPAT607_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0013_NS_COMPAT607_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::unordered_map<unsigned, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0013_ns_compat607_std_unordered_map_unsigned_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat607(std::unordered_map<unsigned, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0013_ns_compat607_std_unordered_map_unsigned_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0013_ns_compat607_std_unordered_map_unsigned_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0013_ns_compat607_std_unordered_map_unsigned_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0013_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0013_ns_compat607_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0014_COMPAT607_BAD_TYPE_607
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0014_COMPAT607_BAD_TYPE_607
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_607; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0014_compat607_bad_type_607', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(bad_type_607 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0014_compat607_bad_type_607 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0014_compat607_bad_type_607 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0014_compat607_bad_type_607 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_607",
          "h2dts_compat_map_0014_compat607_bad_type_607 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0014_compat607_bad_type_607 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0015_COMPAT607_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0015_COMPAT607_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::unordered_map<unsigned, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0015_compat607_std_unordered_map_unsigned_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(std::unordered_map<unsigned, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_compat607_std_unordered_map_unsigned_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_compat607_std_unordered_map_unsigned_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0015_compat607_std_unordered_map_unsigned_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0015_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0015_compat607_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0016_E607
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0016_E607
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E607; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0016_e607', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E607 { A, B }; void f(E607 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_e607 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0016_e607 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0016_e607 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0016_e607 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0017_COMPAT607_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0017_COMPAT607_STD_UNORDERED_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:unordered_map<unsigned, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0017_compat607_std_unordered_map_unsigned_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(std:unordered_map<unsigned, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_compat607_std_unordered_map_unsigned_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_compat607_std_unordered_map_unsigned_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0017_compat607_std_unordered_map_unsigned_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<unsigned, char>",
          "h2dts_compat_map_0017_compat607_std_unordered_map_unsigned_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0017_compat607_std_unordered_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0018_COMPAT624_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0018_COMPAT624_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0018_compat624_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0018_compat624_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0018_compat624_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0018_compat624_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0018_compat624_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0018_compat624_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0019_COMPAT624_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0019_COMPAT624_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0019_compat624_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0019_compat624_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0019_compat624_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0019_compat624_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0019_compat624_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0019_compat624_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT624_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT624_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0020_compat624_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0020_compat624_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0020_compat624_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0020_compat624_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0020_compat624_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0020_compat624_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT624_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT624_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0021_compat624_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0021_compat624_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0021_compat624_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0021_compat624_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0021_compat624_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0021_compat624_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT624_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT624_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0022_compat624_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0022_compat624_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0022_compat624_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0022_compat624_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0022_compat624_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0022_compat624_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0023_NS_COMPAT624_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0023_NS_COMPAT624_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::multimap<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0023_ns_compat624_std_multimap_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat624(std::multimap<int, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0023_ns_compat624_std_multimap_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0023_ns_compat624_std_multimap_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0023_ns_compat624_std_multimap_int_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0023_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0023_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0023_ns_compat624_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0024_COMPAT624_BAD_TYPE_624
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0024_COMPAT624_BAD_TYPE_624
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_624; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0024_compat624_bad_type_624', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(bad_type_624 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0024_compat624_bad_type_624 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0024_compat624_bad_type_624 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0024_compat624_bad_type_624 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_624",
          "h2dts_compat_map_0024_compat624_bad_type_624 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0024_compat624_bad_type_624 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0025_COMPAT624_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0025_COMPAT624_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multimap<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0025_compat624_std_multimap_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(std::multimap<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_compat624_std_multimap_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_compat624_std_multimap_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0025_compat624_std_multimap_int_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0025_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0025_compat624_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0026_E624
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0026_E624
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E624; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0026_e624', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E624 { A, B }; void f(E624 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_e624 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0026_e624 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0026_e624 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0026_e624 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0027_COMPAT624_STD_MULTIMAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0027_COMPAT624_STD_MULTIMAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:multimap<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0027_compat624_std_multimap_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(std:multimap<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_compat624_std_multimap_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_compat624_std_multimap_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0027_compat624_std_multimap_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multimap<int, int>",
          "h2dts_compat_map_0027_compat624_std_multimap_int_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0027_compat624_std_multimap_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0028_COMPAT625_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0028_COMPAT625_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0028_compat625_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0028_compat625_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0028_compat625_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0028_compat625_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0028_compat625_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0028_compat625_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0029_COMPAT625_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0029_COMPAT625_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0029_compat625_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0029_compat625_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0029_compat625_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0029_compat625_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0029_compat625_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0029_compat625_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT625_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT625_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0030_compat625_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0030_compat625_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0030_compat625_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0030_compat625_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0030_compat625_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0030_compat625_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT625_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT625_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0031_compat625_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0031_compat625_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0031_compat625_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0031_compat625_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0031_compat625_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0031_compat625_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT625_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT625_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0032_compat625_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0032_compat625_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0032_compat625_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0032_compat625_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0032_compat625_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0032_compat625_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0033_NS_COMPAT625_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0033_NS_COMPAT625_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::multimap<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0033_ns_compat625_std_multimap_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat625(std::multimap<char, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0033_ns_compat625_std_multimap_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0033_ns_compat625_std_multimap_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0033_ns_compat625_std_multimap_char_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0033_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0033_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0033_ns_compat625_std_multimap_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0034_COMPAT625_BAD_TYPE_625
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0034_COMPAT625_BAD_TYPE_625
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_625; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0034_compat625_bad_type_625', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(bad_type_625 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0034_compat625_bad_type_625 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0034_compat625_bad_type_625 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0034_compat625_bad_type_625 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_625",
          "h2dts_compat_map_0034_compat625_bad_type_625 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0034_compat625_bad_type_625 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0035_COMPAT625_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0035_COMPAT625_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::multimap<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0035_compat625_std_multimap_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(std::multimap<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_compat625_std_multimap_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_compat625_std_multimap_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0035_compat625_std_multimap_char_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0035_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0035_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0035_compat625_std_multimap_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0036_E625
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0036_E625
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E625; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0036_e625', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E625 { A, B }; void f(E625 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_e625 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0036_e625 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0036_e625 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0036_e625 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0037_COMPAT625_STD_MULTIMAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0037_COMPAT625_STD_MULTIMAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:multimap<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0037_compat625_std_multimap_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(std:multimap<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_compat625_std_multimap_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_compat625_std_multimap_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0037_compat625_std_multimap_char_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multimap<char, int>",
          "h2dts_compat_map_0037_compat625_std_multimap_char_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0037_compat625_std_multimap_char_int execution error: ${String(err)}`);
    }
  });
});
