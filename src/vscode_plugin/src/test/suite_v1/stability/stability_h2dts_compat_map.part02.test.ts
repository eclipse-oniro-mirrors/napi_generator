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

suite('Stability_H2DTS_COMPAT_MAP_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0071_COMPAT567_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0071_COMPAT567_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0071_compat567_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0071_compat567_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0071_compat567_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0071_compat567_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0071_compat567_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0071_compat567_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0072_COMPAT567_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0072_COMPAT567_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0072_compat567_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0072_compat567_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0072_compat567_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0072_compat567_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0072_compat567_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0072_compat567_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0073_COMPAT567_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0073_COMPAT567_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0073_compat567_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0073_compat567_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0073_compat567_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0073_compat567_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0073_compat567_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0073_compat567_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0074_COMPAT567_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0074_COMPAT567_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0074_compat567_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0074_compat567_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0074_compat567_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0074_compat567_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0074_compat567_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0074_compat567_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0075_COMPAT567_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0075_COMPAT567_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0075_compat567_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0075_compat567_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0075_compat567_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0075_compat567_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0075_compat567_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0075_compat567_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0076_NS_COMPAT567_STD_MAP_CHAR32_T_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0076_NS_COMPAT567_STD_MAP_CHAR32_T_SIZE_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char32_t, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0076_ns_compat567_std_map_char32_t_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat567(std::map<char32_t, size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0076_ns_compat567_std_map_char32_t_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0076_ns_compat567_std_map_char32_t_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0076_ns_compat567_std_map_char32_t_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0076_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0076_ns_compat567_std_map_char32_t_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0077_COMPAT567_BAD_TYPE_567
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0077_COMPAT567_BAD_TYPE_567
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_567; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0077_compat567_bad_type_567', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(bad_type_567 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0077_compat567_bad_type_567 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0077_compat567_bad_type_567 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0077_compat567_bad_type_567 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_567",
          "h2dts_compat_map_0077_compat567_bad_type_567 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0077_compat567_bad_type_567 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0078_COMPAT567_STD_MAP_CHAR32_T_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0078_COMPAT567_STD_MAP_CHAR32_T_SIZE_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char32_t, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0078_compat567_std_map_char32_t_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(std::map<char32_t, size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0078_compat567_std_map_char32_t_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0078_compat567_std_map_char32_t_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0078_compat567_std_map_char32_t_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0078_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0078_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0078_compat567_std_map_char32_t_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0079_E567
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0079_E567
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E567; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0079_e567', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E567 { A, B }; void f(E567 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0079_e567 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0079_e567 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0079_e567 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0079_e567 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0080_COMPAT567_STD_MAP_CHAR32_T_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0080_COMPAT567_STD_MAP_CHAR32_T_SIZE_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char32_t, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0080_compat567_std_map_char32_t_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat567(std:map<char32_t, size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0080_compat567_std_map_char32_t_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0080_compat567_std_map_char32_t_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0080_compat567_std_map_char32_t_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char32_t, size_t>",
          "h2dts_compat_map_0080_compat567_std_map_char32_t_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0080_compat567_std_map_char32_t_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT570_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT570_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0001_compat570_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0001_compat570_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0001_compat570_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0001_compat570_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0001_compat570_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0001_compat570_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT570_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT570_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0002_compat570_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0002_compat570_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0002_compat570_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0002_compat570_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0002_compat570_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0002_compat570_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0003_COMPAT570_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0003_COMPAT570_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0003_compat570_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0003_compat570_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0003_compat570_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0003_compat570_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0003_compat570_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0003_compat570_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0004_COMPAT570_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0004_COMPAT570_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0004_compat570_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0004_compat570_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0004_compat570_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0004_compat570_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0004_compat570_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0004_compat570_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0005_NS_COMPAT570_STD_MAP_WCHAR_T_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0005_NS_COMPAT570_STD_MAP_WCHAR_T_UINT16_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<wchar_t, uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0005_ns_compat570_std_map_wchar_t_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat570(std::map<wchar_t, uint16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_ns_compat570_std_map_wchar_t_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_ns_compat570_std_map_wchar_t_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0005_ns_compat570_std_map_wchar_t_uint16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0005_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0005_ns_compat570_std_map_wchar_t_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0006_COMPAT570_BAD_TYPE_570
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0006_COMPAT570_BAD_TYPE_570
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_570; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0006_compat570_bad_type_570', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(bad_type_570 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_compat570_bad_type_570 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_compat570_bad_type_570 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0006_compat570_bad_type_570 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_570",
          "h2dts_compat_map_0006_compat570_bad_type_570 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0006_compat570_bad_type_570 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0007_COMPAT570_STD_MAP_WCHAR_T_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0007_COMPAT570_STD_MAP_WCHAR_T_UINT16_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<wchar_t, uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0007_compat570_std_map_wchar_t_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(std::map<wchar_t, uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_compat570_std_map_wchar_t_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_compat570_std_map_wchar_t_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0007_compat570_std_map_wchar_t_uint16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0007_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0007_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0007_compat570_std_map_wchar_t_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0008_E570
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0008_E570
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E570; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0008_e570', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E570 { A, B }; void f(E570 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0008_e570 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0008_e570 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0008_e570 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0008_e570 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0009_COMPAT570_STD_MAP_WCHAR_T_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0009_COMPAT570_STD_MAP_WCHAR_T_UINT16_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<wchar_t, uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0009_compat570_std_map_wchar_t_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat570(std:map<wchar_t, uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0009_compat570_std_map_wchar_t_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0009_compat570_std_map_wchar_t_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0009_compat570_std_map_wchar_t_uint16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<wchar_t, uint16_t>",
          "h2dts_compat_map_0009_compat570_std_map_wchar_t_uint16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0009_compat570_std_map_wchar_t_uint16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT571_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT571_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0010_compat571_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0010_compat571_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0010_compat571_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0010_compat571_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0010_compat571_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0010_compat571_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT571_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT571_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0011_compat571_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0011_compat571_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0011_compat571_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0011_compat571_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0011_compat571_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0011_compat571_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT571_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT571_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0012_compat571_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0012_compat571_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0012_compat571_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0012_compat571_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0012_compat571_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0012_compat571_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0013_COMPAT571_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0013_COMPAT571_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0013_compat571_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0013_compat571_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0013_compat571_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0013_compat571_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0013_compat571_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0013_compat571_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0014_COMPAT571_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0014_COMPAT571_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0014_compat571_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0014_compat571_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0014_compat571_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0014_compat571_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0014_compat571_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0014_compat571_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0015_NS_COMPAT571_STD_MAP_INT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0015_NS_COMPAT571_STD_MAP_INT_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<int, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0015_ns_compat571_std_map_int_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat571(std::map<int, bool> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_ns_compat571_std_map_int_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_ns_compat571_std_map_int_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0015_ns_compat571_std_map_int_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0015_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, boolean>", "h2dts_compat_map_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0015_ns_compat571_std_map_int_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0016_COMPAT571_BAD_TYPE_571
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0016_COMPAT571_BAD_TYPE_571
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_571; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0016_compat571_bad_type_571', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(bad_type_571 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_compat571_bad_type_571 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_compat571_bad_type_571 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0016_compat571_bad_type_571 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_571",
          "h2dts_compat_map_0016_compat571_bad_type_571 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0016_compat571_bad_type_571 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0017_COMPAT571_STD_MAP_INT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0017_COMPAT571_STD_MAP_INT_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<int, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0017_compat571_std_map_int_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(std::map<int, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_compat571_std_map_int_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_compat571_std_map_int_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0017_compat571_std_map_int_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0017_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, boolean>", "h2dts_compat_map_0017_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0017_compat571_std_map_int_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0018_E571
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0018_E571
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E571; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0018_e571', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E571 { A, B }; void f(E571 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0018_e571 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0018_e571 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0018_e571 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0018_e571 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0019_COMPAT571_STD_MAP_INT_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0019_COMPAT571_STD_MAP_INT_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<int, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0019_compat571_std_map_int_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat571(std:map<int, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0019_compat571_std_map_int_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0019_compat571_std_map_int_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0019_compat571_std_map_int_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<int, bool>",
          "h2dts_compat_map_0019_compat571_std_map_int_bool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0019_compat571_std_map_int_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT572_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT572_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0020_compat572_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0020_compat572_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0020_compat572_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0020_compat572_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0020_compat572_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0020_compat572_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT572_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT572_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0021_compat572_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0021_compat572_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0021_compat572_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0021_compat572_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0021_compat572_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0021_compat572_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT572_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT572_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0022_compat572_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0022_compat572_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0022_compat572_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0022_compat572_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0022_compat572_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0022_compat572_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0023_COMPAT572_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0023_COMPAT572_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0023_compat572_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0023_compat572_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0023_compat572_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0023_compat572_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0023_compat572_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0023_compat572_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0024_COMPAT572_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0024_COMPAT572_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0024_compat572_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0024_compat572_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0024_compat572_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0024_compat572_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0024_compat572_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0024_compat572_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0025_NS_COMPAT572_STD_MAP_CHAR_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0025_NS_COMPAT572_STD_MAP_CHAR_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0025_ns_compat572_std_map_char_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat572(std::map<char, bool> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_ns_compat572_std_map_char_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_ns_compat572_std_map_char_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0025_ns_compat572_std_map_char_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0025_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, boolean>", "h2dts_compat_map_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0025_ns_compat572_std_map_char_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0026_COMPAT572_BAD_TYPE_572
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0026_COMPAT572_BAD_TYPE_572
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_572; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0026_compat572_bad_type_572', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(bad_type_572 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_compat572_bad_type_572 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_compat572_bad_type_572 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0026_compat572_bad_type_572 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_572",
          "h2dts_compat_map_0026_compat572_bad_type_572 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0026_compat572_bad_type_572 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0027_COMPAT572_STD_MAP_CHAR_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0027_COMPAT572_STD_MAP_CHAR_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0027_compat572_std_map_char_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(std::map<char, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_compat572_std_map_char_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_compat572_std_map_char_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0027_compat572_std_map_char_bool must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0027_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, boolean>", "h2dts_compat_map_0027_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0027_compat572_std_map_char_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0028_E572
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0028_E572
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E572; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0028_e572', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E572 { A, B }; void f(E572 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0028_e572 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0028_e572 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0028_e572 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0028_e572 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0029_COMPAT572_STD_MAP_CHAR_BOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0029_COMPAT572_STD_MAP_CHAR_BOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char, bool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0029_compat572_std_map_char_bool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat572(std:map<char, bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0029_compat572_std_map_char_bool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0029_compat572_std_map_char_bool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0029_compat572_std_map_char_bool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char, bool>",
          "h2dts_compat_map_0029_compat572_std_map_char_bool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0029_compat572_std_map_char_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT573_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT573_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0030_compat573_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0030_compat573_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0030_compat573_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0030_compat573_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0030_compat573_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0030_compat573_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT573_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT573_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0031_compat573_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0031_compat573_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0031_compat573_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0031_compat573_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0031_compat573_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0031_compat573_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT573_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT573_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0032_compat573_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0032_compat573_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0032_compat573_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0032_compat573_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0032_compat573_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0032_compat573_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0033_COMPAT573_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0033_COMPAT573_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0033_compat573_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0033_compat573_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0033_compat573_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0033_compat573_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0033_compat573_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0033_compat573_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0034_COMPAT573_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0034_COMPAT573_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0034_compat573_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0034_compat573_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0034_compat573_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0034_compat573_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0034_compat573_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0034_compat573_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0035_NS_COMPAT573_STD_MAP_INT_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0035_NS_COMPAT573_STD_MAP_INT_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<int, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0035_ns_compat573_std_map_int_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat573(std::map<int, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_ns_compat573_std_map_int_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_ns_compat573_std_map_int_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0035_ns_compat573_std_map_int_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0035_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0035_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0035_ns_compat573_std_map_int_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0036_COMPAT573_BAD_TYPE_573
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0036_COMPAT573_BAD_TYPE_573
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_573; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0036_compat573_bad_type_573', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(bad_type_573 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_compat573_bad_type_573 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_compat573_bad_type_573 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0036_compat573_bad_type_573 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_573",
          "h2dts_compat_map_0036_compat573_bad_type_573 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0036_compat573_bad_type_573 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0037_COMPAT573_STD_MAP_INT_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0037_COMPAT573_STD_MAP_INT_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<int, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0037_compat573_std_map_int_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(std::map<int, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_compat573_std_map_int_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_compat573_std_map_int_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0037_compat573_std_map_int_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0037_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0037_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0037_compat573_std_map_int_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0038_E573
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0038_E573
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E573; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0038_e573', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E573 { A, B }; void f(E573 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0038_e573 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0038_e573 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0038_e573 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0038_e573 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0039_COMPAT573_STD_MAP_INT_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0039_COMPAT573_STD_MAP_INT_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<int, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0039_compat573_std_map_int_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat573(std:map<int, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0039_compat573_std_map_int_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0039_compat573_std_map_int_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0039_compat573_std_map_int_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<int, char>",
          "h2dts_compat_map_0039_compat573_std_map_int_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0039_compat573_std_map_int_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0040_COMPAT574_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0040_COMPAT574_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0040_compat574_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0040_compat574_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0040_compat574_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0040_compat574_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0040_compat574_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0040_compat574_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0041_COMPAT574_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0041_COMPAT574_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0041_compat574_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0041_compat574_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0041_compat574_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0041_compat574_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0041_compat574_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0041_compat574_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0042_COMPAT574_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0042_COMPAT574_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0042_compat574_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0042_compat574_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0042_compat574_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0042_compat574_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0042_compat574_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0042_compat574_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0043_COMPAT574_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0043_COMPAT574_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0043_compat574_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0043_compat574_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0043_compat574_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0043_compat574_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0043_compat574_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0043_compat574_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0044_COMPAT574_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0044_COMPAT574_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0044_compat574_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0044_compat574_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0044_compat574_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0044_compat574_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0044_compat574_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0044_compat574_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0045_NS_COMPAT574_STD_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0045_NS_COMPAT574_STD_MAP_SIZE_T_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<size_t, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0045_ns_compat574_std_map_size_t_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat574(std::map<size_t, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0045_ns_compat574_std_map_size_t_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0045_ns_compat574_std_map_size_t_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0045_ns_compat574_std_map_size_t_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0045_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0045_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0045_ns_compat574_std_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0046_COMPAT574_BAD_TYPE_574
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0046_COMPAT574_BAD_TYPE_574
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_574; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0046_compat574_bad_type_574', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(bad_type_574 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0046_compat574_bad_type_574 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0046_compat574_bad_type_574 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0046_compat574_bad_type_574 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_574",
          "h2dts_compat_map_0046_compat574_bad_type_574 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0046_compat574_bad_type_574 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0047_COMPAT574_STD_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0047_COMPAT574_STD_MAP_SIZE_T_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<size_t, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0047_compat574_std_map_size_t_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(std::map<size_t, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0047_compat574_std_map_size_t_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0047_compat574_std_map_size_t_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0047_compat574_std_map_size_t_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0047_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0047_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0047_compat574_std_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0048_E574
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0048_E574
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E574; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0048_e574', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E574 { A, B }; void f(E574 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0048_e574 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0048_e574 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0048_e574 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0048_e574 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0049_COMPAT574_STD_MAP_SIZE_T_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0049_COMPAT574_STD_MAP_SIZE_T_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<size_t, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0049_compat574_std_map_size_t_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat574(std:map<size_t, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0049_compat574_std_map_size_t_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0049_compat574_std_map_size_t_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0049_compat574_std_map_size_t_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<size_t, char>",
          "h2dts_compat_map_0049_compat574_std_map_size_t_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0049_compat574_std_map_size_t_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0050_COMPAT575_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0050_COMPAT575_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0050_compat575_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0050_compat575_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0050_compat575_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0050_compat575_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0050_compat575_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0050_compat575_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0051_COMPAT575_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0051_COMPAT575_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0051_compat575_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0051_compat575_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0051_compat575_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0051_compat575_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0051_compat575_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0051_compat575_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0052_COMPAT575_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0052_COMPAT575_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0052_compat575_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0052_compat575_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0052_compat575_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0052_compat575_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0052_compat575_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0052_compat575_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0053_COMPAT575_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0053_COMPAT575_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0053_compat575_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0053_compat575_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0053_compat575_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0053_compat575_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0053_compat575_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0053_compat575_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0054_COMPAT575_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0054_COMPAT575_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0054_compat575_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0054_compat575_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0054_compat575_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0054_compat575_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0054_compat575_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0054_compat575_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0055_NS_COMPAT575_STD_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0055_NS_COMPAT575_STD_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<unsigned, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0055_ns_compat575_std_map_unsigned_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat575(std::map<unsigned, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0055_ns_compat575_std_map_unsigned_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0055_ns_compat575_std_map_unsigned_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0055_ns_compat575_std_map_unsigned_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0055_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0055_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0055_ns_compat575_std_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0056_COMPAT575_BAD_TYPE_575
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0056_COMPAT575_BAD_TYPE_575
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_575; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0056_compat575_bad_type_575', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(bad_type_575 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0056_compat575_bad_type_575 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0056_compat575_bad_type_575 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0056_compat575_bad_type_575 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_575",
          "h2dts_compat_map_0056_compat575_bad_type_575 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0056_compat575_bad_type_575 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0057_COMPAT575_STD_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0057_COMPAT575_STD_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<unsigned, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0057_compat575_std_map_unsigned_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(std::map<unsigned, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0057_compat575_std_map_unsigned_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0057_compat575_std_map_unsigned_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0057_compat575_std_map_unsigned_char must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0057_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0057_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0057_compat575_std_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0058_E575
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0058_E575
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E575; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0058_e575', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E575 { A, B }; void f(E575 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0058_e575 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0058_e575 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0058_e575 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0058_e575 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0059_COMPAT575_STD_MAP_UNSIGNED_CHAR
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0059_COMPAT575_STD_MAP_UNSIGNED_CHAR
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<unsigned, char>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0059_compat575_std_map_unsigned_char', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat575(std:map<unsigned, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0059_compat575_std_map_unsigned_char parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0059_compat575_std_map_unsigned_char must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0059_compat575_std_map_unsigned_char must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<unsigned, char>",
          "h2dts_compat_map_0059_compat575_std_map_unsigned_char param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0059_compat575_std_map_unsigned_char execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0060_COMPAT592_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0060_COMPAT592_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0060_compat592_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat592(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0060_compat592_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0060_compat592_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0060_compat592_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0060_compat592_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0060_compat592_itn execution error: ${String(err)}`);
    }
  });
});
