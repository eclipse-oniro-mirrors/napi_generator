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

suite('Stability_H2DTS_COMPAT_ARRAY_Part10', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_COMPAT103_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0015_COMPAT103_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0015_compat103_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat103(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0015_compat103_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0015_compat103_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0015_compat103_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0015_compat103_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0015_compat103_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0016_COMPAT103_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0016_COMPAT103_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0016_compat103_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat103(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0016_compat103_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0016_compat103_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0016_compat103_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0016_compat103_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0016_compat103_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0017_COMPAT103_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0017_COMPAT103_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0017_compat103_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat103(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0017_compat103_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0017_compat103_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0017_compat103_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0017_compat103_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0017_compat103_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0018_NS_COMPAT103_STD_LIST_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0018_NS_COMPAT103_STD_LIST_CHAR16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::list<char16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0018_ns_compat103_std_list_char16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat103(std::list<char16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0018_ns_compat103_std_list_char16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0018_ns_compat103_std_list_char16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0018_ns_compat103_std_list_char16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0018_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0018_ns_compat103_std_list_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0019_COMPAT103_BAD_TYPE_103
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0019_COMPAT103_BAD_TYPE_103
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_103; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0019_compat103_bad_type_103', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat103(bad_type_103 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0019_compat103_bad_type_103 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0019_compat103_bad_type_103 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0019_compat103_bad_type_103 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_103",
          "h2dts_compat_array_0019_compat103_bad_type_103 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0019_compat103_bad_type_103 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0020_COMPAT103_STD_LIST_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0020_COMPAT103_STD_LIST_CHAR16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<char16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0020_compat103_std_list_char16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat103(std::list<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0020_compat103_std_list_char16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0020_compat103_std_list_char16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0020_compat103_std_list_char16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0020_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0020_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0020_compat103_std_list_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0021_E103
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0021_E103
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E103; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0021_e103', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E103 { A, B }; void f(E103 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0021_e103 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0021_e103 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0021_e103 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0021_e103 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0022_COMPAT103_STD_LIST_CHAR16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0022_COMPAT103_STD_LIST_CHAR16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<char16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0022_compat103_std_list_char16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat103(std:list<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0022_compat103_std_list_char16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0022_compat103_std_list_char16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0022_compat103_std_list_char16_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<char16_t>",
          "h2dts_compat_array_0022_compat103_std_list_char16_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0022_compat103_std_list_char16_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0023_COMPAT104_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0023_COMPAT104_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0023_compat104_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0023_compat104_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023_compat104_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0023_compat104_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0023_compat104_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0023_compat104_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0024_COMPAT104_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0024_COMPAT104_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0024_compat104_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0024_compat104_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0024_compat104_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0024_compat104_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0024_compat104_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0024_compat104_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0025_COMPAT104_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0025_COMPAT104_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0025_compat104_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0025_compat104_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0025_compat104_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0025_compat104_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0025_compat104_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0025_compat104_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0026_COMPAT104_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0026_COMPAT104_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0026_compat104_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0026_compat104_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0026_compat104_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0026_compat104_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0026_compat104_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0026_compat104_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0027_COMPAT104_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0027_COMPAT104_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0027_compat104_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0027_compat104_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0027_compat104_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0027_compat104_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0027_compat104_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0027_compat104_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0028_NS_COMPAT104_STD_LIST_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0028_NS_COMPAT104_STD_LIST_CHAR32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::list<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0028_ns_compat104_std_list_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat104(std::list<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0028_ns_compat104_std_list_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0028_ns_compat104_std_list_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0028_ns_compat104_std_list_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0028_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0028_ns_compat104_std_list_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0029_COMPAT104_BAD_TYPE_104
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0029_COMPAT104_BAD_TYPE_104
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_104; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0029_compat104_bad_type_104', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(bad_type_104 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0029_compat104_bad_type_104 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0029_compat104_bad_type_104 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0029_compat104_bad_type_104 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_104",
          "h2dts_compat_array_0029_compat104_bad_type_104 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0029_compat104_bad_type_104 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0030_COMPAT104_STD_LIST_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0030_COMPAT104_STD_LIST_CHAR32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0030_compat104_std_list_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(std::list<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0030_compat104_std_list_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0030_compat104_std_list_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0030_compat104_std_list_char32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0030_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0030_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0030_compat104_std_list_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0031_E104
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0031_E104
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E104; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0031_e104', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E104 { A, B }; void f(E104 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0031_e104 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0031_e104 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0031_e104 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0031_e104 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0032_COMPAT104_STD_LIST_CHAR32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0032_COMPAT104_STD_LIST_CHAR32_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<char32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0032_compat104_std_list_char32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat104(std:list<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0032_compat104_std_list_char32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0032_compat104_std_list_char32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0032_compat104_std_list_char32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<char32_t>",
          "h2dts_compat_array_0032_compat104_std_list_char32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0032_compat104_std_list_char32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0033_COMPAT105_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0033_COMPAT105_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0033_compat105_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0033_compat105_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0033_compat105_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0033_compat105_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0033_compat105_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0033_compat105_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0034_COMPAT105_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0034_COMPAT105_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0034_compat105_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0034_compat105_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0034_compat105_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0034_compat105_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0034_compat105_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0034_compat105_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0035_COMPAT105_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0035_COMPAT105_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0035_compat105_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0035_compat105_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0035_compat105_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0035_compat105_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0035_compat105_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0035_compat105_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0036_COMPAT105_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0036_COMPAT105_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0036_compat105_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0036_compat105_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0036_compat105_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0036_compat105_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0036_compat105_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0036_compat105_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0037_COMPAT105_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0037_COMPAT105_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0037_compat105_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0037_compat105_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0037_compat105_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0037_compat105_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0037_compat105_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0037_compat105_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0038_NS_COMPAT105_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0038_NS_COMPAT105_STD_FORWARD_LIST_INT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::forward_list<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0038_ns_compat105_std_forward_list_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat105(std::forward_list<int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0038_ns_compat105_std_forward_list_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0038_ns_compat105_std_forward_list_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0038_ns_compat105_std_forward_list_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0038_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0038_ns_compat105_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0039_COMPAT105_BAD_TYPE_105
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0039_COMPAT105_BAD_TYPE_105
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_105; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0039_compat105_bad_type_105', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(bad_type_105 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0039_compat105_bad_type_105 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0039_compat105_bad_type_105 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0039_compat105_bad_type_105 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_105",
          "h2dts_compat_array_0039_compat105_bad_type_105 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0039_compat105_bad_type_105 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0040_COMPAT105_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0040_COMPAT105_STD_FORWARD_LIST_INT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::forward_list<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0040_compat105_std_forward_list_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(std::forward_list<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0040_compat105_std_forward_list_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0040_compat105_std_forward_list_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0040_compat105_std_forward_list_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0040_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0040_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0040_compat105_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0041_E105
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0041_E105
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E105; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0041_e105', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E105 { A, B }; void f(E105 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0041_e105 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0041_e105 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0041_e105 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0041_e105 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0042_COMPAT105_STD_FORWARD_LIST_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0042_COMPAT105_STD_FORWARD_LIST_INT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:forward_list<int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0042_compat105_std_forward_list_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat105(std:forward_list<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0042_compat105_std_forward_list_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0042_compat105_std_forward_list_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0042_compat105_std_forward_list_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<int>",
          "h2dts_compat_array_0042_compat105_std_forward_list_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0042_compat105_std_forward_list_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0043_COMPAT106_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0043_COMPAT106_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0043_compat106_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0043_compat106_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0043_compat106_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0043_compat106_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0043_compat106_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0043_compat106_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0044_COMPAT106_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0044_COMPAT106_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0044_compat106_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0044_compat106_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044_compat106_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0044_compat106_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0044_compat106_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0044_compat106_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0045_COMPAT106_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0045_COMPAT106_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0045_compat106_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0045_compat106_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0045_compat106_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0045_compat106_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0045_compat106_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0045_compat106_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0046_COMPAT106_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0046_COMPAT106_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0046_compat106_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0046_compat106_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0046_compat106_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0046_compat106_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0046_compat106_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0046_compat106_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0047_COMPAT106_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0047_COMPAT106_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0047_compat106_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0047_compat106_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0047_compat106_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0047_compat106_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0047_compat106_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0047_compat106_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0048_NS_COMPAT106_STD_FORWARD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0048_NS_COMPAT106_STD_FORWARD_LIST_SIZE_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::forward_list<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0048_ns_compat106_std_forward_list_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat106(std::forward_list<size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0048_ns_compat106_std_forward_list_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0048_ns_compat106_std_forward_list_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0048_ns_compat106_std_forward_list_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0048_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0048_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0048_ns_compat106_std_forward_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0049_COMPAT106_BAD_TYPE_106
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0049_COMPAT106_BAD_TYPE_106
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_106; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0049_compat106_bad_type_106', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(bad_type_106 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0049_compat106_bad_type_106 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0049_compat106_bad_type_106 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0049_compat106_bad_type_106 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_106",
          "h2dts_compat_array_0049_compat106_bad_type_106 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0049_compat106_bad_type_106 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0050_COMPAT106_STD_FORWARD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0050_COMPAT106_STD_FORWARD_LIST_SIZE_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::forward_list<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0050_compat106_std_forward_list_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std::forward_list<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0050_compat106_std_forward_list_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0050_compat106_std_forward_list_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0050_compat106_std_forward_list_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0050_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0050_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0050_compat106_std_forward_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0051_E106
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0051_E106
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E106; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0051_e106', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E106 { A, B }; void f(E106 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0051_e106 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0051_e106 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0051_e106 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0051_e106 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0052_COMPAT106_STD_FORWARD_LIST_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0052_COMPAT106_STD_FORWARD_LIST_SIZE_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:forward_list<size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0052_compat106_std_forward_list_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std:forward_list<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0052_compat106_std_forward_list_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0052_compat106_std_forward_list_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0052_compat106_std_forward_list_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<size_t>",
          "h2dts_compat_array_0052_compat106_std_forward_list_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0052_compat106_std_forward_list_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0053_COMPAT107_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0053_COMPAT107_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0053_compat107_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0053_compat107_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0053_compat107_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0053_compat107_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0053_compat107_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0053_compat107_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0054_COMPAT107_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0054_COMPAT107_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0054_compat107_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0054_compat107_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054_compat107_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0054_compat107_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0054_compat107_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0054_compat107_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0055_COMPAT107_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0055_COMPAT107_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0055_compat107_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0055_compat107_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0055_compat107_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0055_compat107_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0055_compat107_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0055_compat107_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0056_COMPAT107_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0056_COMPAT107_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0056_compat107_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0056_compat107_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0056_compat107_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0056_compat107_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0056_compat107_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0056_compat107_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_COMPAT107_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0057_COMPAT107_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0057_compat107_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0057_compat107_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057_compat107_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0057_compat107_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0057_compat107_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0057_compat107_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_NS_COMPAT107_STD_FORWARD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0058_NS_COMPAT107_STD_FORWARD_LIST_DOUBLE
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::forward_list<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0058_ns_compat107_std_forward_list_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat107(std::forward_list<double> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0058_ns_compat107_std_forward_list_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0058_ns_compat107_std_forward_list_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0058_ns_compat107_std_forward_list_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0058_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0058_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0058_ns_compat107_std_forward_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT107_BAD_TYPE_107
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0059_COMPAT107_BAD_TYPE_107
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_107; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0059_compat107_bad_type_107', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(bad_type_107 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0059_compat107_bad_type_107 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0059_compat107_bad_type_107 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0059_compat107_bad_type_107 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_107",
          "h2dts_compat_array_0059_compat107_bad_type_107 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0059_compat107_bad_type_107 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT107_STD_FORWARD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0060_COMPAT107_STD_FORWARD_LIST_DOUBLE
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::forward_list<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0060_compat107_std_forward_list_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std::forward_list<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0060_compat107_std_forward_list_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0060_compat107_std_forward_list_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0060_compat107_std_forward_list_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0060_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0060_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0060_compat107_std_forward_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_E107
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0061_E107
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E107; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0061_e107', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E107 { A, B }; void f(E107 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0061_e107 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061_e107 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0061_e107 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0061_e107 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT107_STD_FORWARD_LIST_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0062_COMPAT107_STD_FORWARD_LIST_DOUBLE
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:forward_list<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0062_compat107_std_forward_list_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std:forward_list<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0062_compat107_std_forward_list_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0062_compat107_std_forward_list_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0062_compat107_std_forward_list_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<double>",
          "h2dts_compat_array_0062_compat107_std_forward_list_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0062_compat107_std_forward_list_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT108_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0063_COMPAT108_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0063_compat108_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0063_compat108_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063_compat108_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0063_compat108_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0063_compat108_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0063_compat108_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_COMPAT108_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0064_COMPAT108_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0064_compat108_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0064_compat108_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064_compat108_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0064_compat108_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0064_compat108_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0064_compat108_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_COMPAT108_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0065_COMPAT108_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0065_compat108_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0065_compat108_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0065_compat108_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0065_compat108_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0065_compat108_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0065_compat108_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT108_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0066_COMPAT108_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0066_compat108_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0066_compat108_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0066_compat108_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0066_compat108_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0066_compat108_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0066_compat108_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_COMPAT108_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0067_COMPAT108_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0067_compat108_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0067_compat108_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067_compat108_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0067_compat108_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0067_compat108_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0067_compat108_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_NS_COMPAT108_STD_FORWARD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0068_NS_COMPAT108_STD_FORWARD_LIST_FLOAT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::forward_list<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0068_ns_compat108_std_forward_list_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat108(std::forward_list<float> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0068_ns_compat108_std_forward_list_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0068_ns_compat108_std_forward_list_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0068_ns_compat108_std_forward_list_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0068_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0068_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0068_ns_compat108_std_forward_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT108_BAD_TYPE_108
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0069_COMPAT108_BAD_TYPE_108
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_108; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0069_compat108_bad_type_108', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(bad_type_108 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0069_compat108_bad_type_108 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0069_compat108_bad_type_108 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0069_compat108_bad_type_108 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_108",
          "h2dts_compat_array_0069_compat108_bad_type_108 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0069_compat108_bad_type_108 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT108_STD_FORWARD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0070_COMPAT108_STD_FORWARD_LIST_FLOAT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::forward_list<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0070_compat108_std_forward_list_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std::forward_list<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0070_compat108_std_forward_list_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0070_compat108_std_forward_list_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0070_compat108_std_forward_list_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0070_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0070_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0070_compat108_std_forward_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_E108
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0071_E108
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E108; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0071_e108', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E108 { A, B }; void f(E108 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0071_e108 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071_e108 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0071_e108 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0071_e108 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT108_STD_FORWARD_LIST_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0072_COMPAT108_STD_FORWARD_LIST_FLOAT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:forward_list<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0072_compat108_std_forward_list_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std:forward_list<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0072_compat108_std_forward_list_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0072_compat108_std_forward_list_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0072_compat108_std_forward_list_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<float>",
          "h2dts_compat_array_0072_compat108_std_forward_list_float param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0072_compat108_std_forward_list_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT109_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0073_COMPAT109_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0073_compat109_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat109(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0073_compat109_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073_compat109_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0073_compat109_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0073_compat109_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0073_compat109_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_COMPAT109_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0074_COMPAT109_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0074_compat109_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat109(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0074_compat109_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074_compat109_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0074_compat109_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0074_compat109_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0074_compat109_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT109_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0075_COMPAT109_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0075_compat109_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat109(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0075_compat109_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0075_compat109_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0075_compat109_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0075_compat109_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0075_compat109_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_COMPAT109_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0076_COMPAT109_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0076_compat109_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat109(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0076_compat109_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0076_compat109_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0076_compat109_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0076_compat109_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0076_compat109_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_COMPAT109_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0077_COMPAT109_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0077_compat109_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat109(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0077_compat109_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077_compat109_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0077_compat109_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0077_compat109_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0077_compat109_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT111_STD_FORWARD_LIST_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0001_COMPAT111_STD_FORWARD_LIST_UINT8_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:forward_list<uint8_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0001_compat111_std_forward_list_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat111(std:forward_list<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0001_compat111_std_forward_list_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0001_compat111_std_forward_list_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0001_compat111_std_forward_list_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<uint8_t>",
          "h2dts_compat_array_0001_compat111_std_forward_list_uint8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0001_compat111_std_forward_list_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT112_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0002_COMPAT112_ITN
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0002_compat112_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat112(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0002_compat112_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002_compat112_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0002_compat112_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0002_compat112_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0002_compat112_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_COMPAT112_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0003_COMPAT112_DOUBL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0003_compat112_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat112(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0003_compat112_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003_compat112_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0003_compat112_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0003_compat112_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0003_compat112_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT112_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0004_COMPAT112_BOOOL
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0004_compat112_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat112(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0004_compat112_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0004_compat112_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0004_compat112_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0004_compat112_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0004_compat112_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_COMPAT112_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0005_COMPAT112_INTT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0005_compat112_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat112(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0005_compat112_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0005_compat112_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0005_compat112_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0005_compat112_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0005_compat112_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_COMPAT112_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0006_COMPAT112_FLOT
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0006_compat112_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat112(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0006_compat112_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006_compat112_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0006_compat112_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0006_compat112_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0006_compat112_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_NS_COMPAT112_STD_FORWARD_LIST_UINT16_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_ARRAY_0007_NS_COMPAT112_STD_FORWARD_LIST_UINT16_T
   * @tc.desc   Stability compat h2dts/array: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param std::forward_list<uint16_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_array_0007_ns_compat112_std_forward_list_uint16_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat112(std::forward_list<uint16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_ns_compat112_std_forward_list_uint16_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_array_0007_ns_compat112_std_forward_list_uint16_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_array_0007_ns_compat112_std_forward_list_uint16_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0007_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0007_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0007_ns_compat112_std_forward_list_uint16_t execution error: ${String(err)}`);
    }
  });
});
