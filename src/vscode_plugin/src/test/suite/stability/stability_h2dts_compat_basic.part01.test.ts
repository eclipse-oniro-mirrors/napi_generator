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

suite('Stability_H2DTS_COMPAT_BASIC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0001_COMPAT1_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0001_COMPAT1_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0001_compat1_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0001_compat1_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0001_compat1_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0001_compat1_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0001_compat1_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0001_compat1_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0002_COMPAT1_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0002_COMPAT1_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0002_compat1_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0002_compat1_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0002_compat1_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0002_compat1_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0002_compat1_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0002_compat1_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0003_COMPAT1_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0003_COMPAT1_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0003_compat1_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0003_compat1_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0003_compat1_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0003_compat1_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0003_compat1_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0003_compat1_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0004_COMPAT1_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0004_COMPAT1_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0004_compat1_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0004_compat1_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0004_compat1_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0004_compat1_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0004_compat1_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0004_compat1_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0005_COMPAT1_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0005_COMPAT1_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0005_compat1_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0005_compat1_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0005_compat1_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0005_compat1_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0005_compat1_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0005_compat1_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0006_NS_COMPAT1_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0006_NS_COMPAT1_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param int; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0006_ns_compat1_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat1(int p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0006_ns_compat1_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0006_ns_compat1_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0006_ns_compat1_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0006_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0006_ns_compat1_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0007_COMPAT1_BAD_TYPE_1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0007_COMPAT1_BAD_TYPE_1
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0007_compat1_bad_type_1', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(bad_type_1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0007_compat1_bad_type_1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0007_compat1_bad_type_1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0007_compat1_bad_type_1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_1",
          "h2dts_compat_basic_0007_compat1_bad_type_1 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0007_compat1_bad_type_1 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0008_COMPAT1_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0008_COMPAT1_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type int; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0008_compat1_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(int p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0008_compat1_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0008_compat1_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0008_compat1_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0008_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0008_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0008_compat1_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0009_E1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0009_E1
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E1; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0009_e1', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E1 { A, B }; void f(E1 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0009_e1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0009_e1 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0009_e1 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0009_e1 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0010_COMPAT1_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0010_COMPAT1_INT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type int; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0010_compat1_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat1(int p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0010_compat1_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0010_compat1_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0010_compat1_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "int", "h2dts_compat_basic_0010_compat1_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0010_compat1_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0011_COMPAT2_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0011_COMPAT2_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0011_compat2_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0011_compat2_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0011_compat2_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0011_compat2_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0011_compat2_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0011_compat2_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0012_COMPAT2_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0012_COMPAT2_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0012_compat2_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0012_compat2_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0012_compat2_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0012_compat2_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0012_compat2_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0012_compat2_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0013_COMPAT2_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0013_COMPAT2_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0013_compat2_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0013_compat2_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0013_compat2_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0013_compat2_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0013_compat2_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0013_compat2_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0014_COMPAT2_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0014_COMPAT2_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0014_compat2_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0014_compat2_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0014_compat2_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0014_compat2_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0014_compat2_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0014_compat2_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0015_COMPAT2_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0015_COMPAT2_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0015_compat2_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0015_compat2_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0015_compat2_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0015_compat2_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0015_compat2_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0015_compat2_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0016_NS_COMPAT2_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0016_NS_COMPAT2_SIZE_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param size_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0016_ns_compat2_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat2(size_t p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0016_ns_compat2_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0016_ns_compat2_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0016_ns_compat2_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0016_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0016_ns_compat2_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0017_COMPAT2_BAD_TYPE_2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0017_COMPAT2_BAD_TYPE_2
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0017_compat2_bad_type_2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(bad_type_2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0017_compat2_bad_type_2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0017_compat2_bad_type_2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0017_compat2_bad_type_2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_2",
          "h2dts_compat_basic_0017_compat2_bad_type_2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0017_compat2_bad_type_2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0018_COMPAT2_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0018_COMPAT2_SIZE_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type size_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0018_compat2_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(size_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0018_compat2_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0018_compat2_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0018_compat2_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0018_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0018_compat2_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0019_E2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0019_E2
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E2; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0019_e2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E2 { A, B }; void f(E2 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0019_e2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0019_e2 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0019_e2 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0019_e2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0020_COMPAT2_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0020_COMPAT2_SIZE_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type size_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0020_compat2_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat2(size_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0020_compat2_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0020_compat2_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0020_compat2_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "size_t", "h2dts_compat_basic_0020_compat2_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0020_compat2_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0021_COMPAT3_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0021_COMPAT3_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0021_compat3_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0021_compat3_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0021_compat3_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0021_compat3_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0021_compat3_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0021_compat3_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0022_COMPAT3_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0022_COMPAT3_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0022_compat3_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0022_compat3_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0022_compat3_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0022_compat3_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0022_compat3_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0022_compat3_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0023_COMPAT3_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0023_COMPAT3_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0023_compat3_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0023_compat3_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0023_compat3_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0023_compat3_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0023_compat3_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0023_compat3_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0024_COMPAT3_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0024_COMPAT3_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0024_compat3_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0024_compat3_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0024_compat3_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0024_compat3_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0024_compat3_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0024_compat3_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0025_COMPAT3_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0025_COMPAT3_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0025_compat3_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0025_compat3_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0025_compat3_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0025_compat3_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0025_compat3_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0025_compat3_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0026_NS_COMPAT3_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0026_NS_COMPAT3_DOUBLE
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param double; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0026_ns_compat3_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat3(double p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0026_ns_compat3_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0026_ns_compat3_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0026_ns_compat3_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0026_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0026_ns_compat3_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0027_COMPAT3_BAD_TYPE_3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0027_COMPAT3_BAD_TYPE_3
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0027_compat3_bad_type_3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(bad_type_3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0027_compat3_bad_type_3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0027_compat3_bad_type_3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0027_compat3_bad_type_3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_3",
          "h2dts_compat_basic_0027_compat3_bad_type_3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0027_compat3_bad_type_3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0028_COMPAT3_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0028_COMPAT3_DOUBLE
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type double; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0028_compat3_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(double p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0028_compat3_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0028_compat3_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0028_compat3_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0028_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0028_compat3_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0029_E3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0029_E3
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E3; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0029_e3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E3 { A, B }; void f(E3 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0029_e3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0029_e3 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0029_e3 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0029_e3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0030_COMPAT3_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0030_COMPAT3_DOUBLE
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type double; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0030_compat3_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat3(double p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0030_compat3_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0030_compat3_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0030_compat3_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "double", "h2dts_compat_basic_0030_compat3_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0030_compat3_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0031_COMPAT4_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0031_COMPAT4_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0031_compat4_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0031_compat4_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0031_compat4_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0031_compat4_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0031_compat4_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0031_compat4_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0032_COMPAT4_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0032_COMPAT4_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0032_compat4_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0032_compat4_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0032_compat4_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0032_compat4_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0032_compat4_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0032_compat4_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0033_COMPAT4_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0033_COMPAT4_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0033_compat4_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0033_compat4_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0033_compat4_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0033_compat4_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0033_compat4_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0033_compat4_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0034_COMPAT4_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0034_COMPAT4_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0034_compat4_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0034_compat4_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0034_compat4_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0034_compat4_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0034_compat4_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0034_compat4_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0035_COMPAT4_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0035_COMPAT4_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0035_compat4_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0035_compat4_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0035_compat4_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0035_compat4_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0035_compat4_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0035_compat4_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0036_NS_COMPAT4_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0036_NS_COMPAT4_FLOAT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param float; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0036_ns_compat4_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat4(float p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0036_ns_compat4_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0036_ns_compat4_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0036_ns_compat4_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0036_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0036_ns_compat4_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0037_COMPAT4_BAD_TYPE_4
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0037_COMPAT4_BAD_TYPE_4
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_4; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0037_compat4_bad_type_4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(bad_type_4 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0037_compat4_bad_type_4 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0037_compat4_bad_type_4 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0037_compat4_bad_type_4 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_4",
          "h2dts_compat_basic_0037_compat4_bad_type_4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0037_compat4_bad_type_4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0038_COMPAT4_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0038_COMPAT4_FLOAT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type float; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0038_compat4_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(float p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0038_compat4_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0038_compat4_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0038_compat4_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0038_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0038_compat4_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0039_E4
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0039_E4
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E4; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0039_e4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E4 { A, B }; void f(E4 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0039_e4 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0039_e4 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0039_e4 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0039_e4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0040_COMPAT4_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0040_COMPAT4_FLOAT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type float; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0040_compat4_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat4(float p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0040_compat4_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0040_compat4_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0040_compat4_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "float", "h2dts_compat_basic_0040_compat4_float param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0040_compat4_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0041_COMPAT5_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0041_COMPAT5_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0041_compat5_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0041_compat5_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0041_compat5_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0041_compat5_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0041_compat5_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0041_compat5_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0042_COMPAT5_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0042_COMPAT5_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0042_compat5_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0042_compat5_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0042_compat5_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0042_compat5_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0042_compat5_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0042_compat5_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0043_COMPAT5_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0043_COMPAT5_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0043_compat5_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0043_compat5_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0043_compat5_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0043_compat5_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0043_compat5_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0043_compat5_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0044_COMPAT5_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0044_COMPAT5_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0044_compat5_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0044_compat5_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0044_compat5_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0044_compat5_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0044_compat5_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0044_compat5_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0045_COMPAT5_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0045_COMPAT5_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0045_compat5_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0045_compat5_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0045_compat5_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0045_compat5_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0045_compat5_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0045_compat5_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0046_NS_COMPAT5_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0046_NS_COMPAT5_SHORT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param short; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0046_ns_compat5_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat5(short p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0046_ns_compat5_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0046_ns_compat5_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0046_ns_compat5_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0046_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0046_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0046_ns_compat5_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0047_COMPAT5_BAD_TYPE_5
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0047_COMPAT5_BAD_TYPE_5
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_5; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0047_compat5_bad_type_5', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(bad_type_5 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0047_compat5_bad_type_5 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0047_compat5_bad_type_5 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0047_compat5_bad_type_5 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_5",
          "h2dts_compat_basic_0047_compat5_bad_type_5 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0047_compat5_bad_type_5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0048_COMPAT5_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0048_COMPAT5_SHORT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type short; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0048_compat5_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(short p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0048_compat5_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0048_compat5_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0048_compat5_short must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0048_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0048_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0048_compat5_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0049_E5
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0049_E5
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E5; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0049_e5', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E5 { A, B }; void f(E5 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0049_e5 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0049_e5 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0049_e5 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0049_e5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0050_COMPAT5_SHORT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0050_COMPAT5_SHORT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type short; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0050_compat5_short', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat5(short p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0050_compat5_short parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0050_compat5_short must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0050_compat5_short must parse param");
        assert.strictEqual(r[0].parameters[0].type, "short", "h2dts_compat_basic_0050_compat5_short param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0050_compat5_short execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0051_COMPAT6_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0051_COMPAT6_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0051_compat6_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0051_compat6_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0051_compat6_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0051_compat6_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0051_compat6_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0051_compat6_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0052_COMPAT6_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0052_COMPAT6_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0052_compat6_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0052_compat6_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0052_compat6_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0052_compat6_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0052_compat6_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0052_compat6_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0053_COMPAT6_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0053_COMPAT6_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0053_compat6_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0053_compat6_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0053_compat6_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0053_compat6_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0053_compat6_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0053_compat6_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0054_COMPAT6_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0054_COMPAT6_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0054_compat6_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0054_compat6_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0054_compat6_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0054_compat6_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0054_compat6_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0054_compat6_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0055_COMPAT6_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0055_COMPAT6_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0055_compat6_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0055_compat6_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0055_compat6_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0055_compat6_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0055_compat6_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0055_compat6_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0056_NS_COMPAT6_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0056_NS_COMPAT6_LONG
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param long; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0056_ns_compat6_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat6(long p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0056_ns_compat6_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0056_ns_compat6_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0056_ns_compat6_long must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0056_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0056_ns_compat6_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0057_COMPAT6_BAD_TYPE_6
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0057_COMPAT6_BAD_TYPE_6
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_6; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0057_compat6_bad_type_6', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(bad_type_6 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0057_compat6_bad_type_6 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0057_compat6_bad_type_6 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0057_compat6_bad_type_6 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_6",
          "h2dts_compat_basic_0057_compat6_bad_type_6 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0057_compat6_bad_type_6 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0058_COMPAT6_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0058_COMPAT6_LONG
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type long; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0058_compat6_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(long p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0058_compat6_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0058_compat6_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0058_compat6_long must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0058_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0058_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0058_compat6_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0059_E6
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0059_E6
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E6; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0059_e6', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E6 { A, B }; void f(E6 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0059_e6 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0059_e6 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0059_e6 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0059_e6 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0060_COMPAT6_LONG
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0060_COMPAT6_LONG
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type long; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0060_compat6_long', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat6(long p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0060_compat6_long parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0060_compat6_long must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0060_compat6_long must parse param");
        assert.strictEqual(r[0].parameters[0].type, "long", "h2dts_compat_basic_0060_compat6_long param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0060_compat6_long execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0061_COMPAT7_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0061_COMPAT7_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0061_compat7_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0061_compat7_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0061_compat7_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0061_compat7_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0061_compat7_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0061_compat7_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0062_COMPAT7_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0062_COMPAT7_DOUBL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0062_compat7_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0062_compat7_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0062_compat7_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0062_compat7_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_basic_0062_compat7_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0062_compat7_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0063_COMPAT7_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0063_COMPAT7_BOOOL
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0063_compat7_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0063_compat7_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0063_compat7_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0063_compat7_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_basic_0063_compat7_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0063_compat7_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0064_COMPAT7_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0064_COMPAT7_INTT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0064_compat7_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0064_compat7_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0064_compat7_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0064_compat7_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_basic_0064_compat7_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0064_compat7_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0065_COMPAT7_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0065_COMPAT7_FLOT
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0065_compat7_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0065_compat7_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0065_compat7_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0065_compat7_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_basic_0065_compat7_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0065_compat7_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0066_NS_COMPAT7_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0066_NS_COMPAT7_UINT8_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            namespaced C++ decl param uint8_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0066_ns_compat7_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat7(uint8_t p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0066_ns_compat7_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0066_ns_compat7_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0066_ns_compat7_uint8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0066_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0066_ns_compat7_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0067_COMPAT7_BAD_TYPE_7
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0067_COMPAT7_BAD_TYPE_7
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type bad_type_7; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0067_compat7_bad_type_7', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(bad_type_7 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0067_compat7_bad_type_7 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0067_compat7_bad_type_7 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0067_compat7_bad_type_7 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_7",
          "h2dts_compat_basic_0067_compat7_bad_type_7 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0067_compat7_bad_type_7 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0068_COMPAT7_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0068_COMPAT7_UINT8_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type uint8_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0068_compat7_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(uint8_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0068_compat7_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0068_compat7_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0068_compat7_uint8_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_basic_0068_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_basic_0068_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0068_compat7_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0069_E7
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0069_E7
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type E7; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0069_e7', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E7 { A, B }; void f(E7 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0069_e7 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0069_e7 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_basic_0069_e7 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0069_e7 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0070_COMPAT7_UINT8_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0070_COMPAT7_UINT8_T
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type uint8_t; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0070_compat7_uint8_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat7(uint8_t p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0070_compat7_uint8_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0070_compat7_uint8_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0070_compat7_uint8_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "uint8_t", "h2dts_compat_basic_0070_compat7_uint8_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0070_compat7_uint8_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_BASIC_0071_COMPAT8_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_BASIC_0071_COMPAT8_ITN
   * @tc.desc   Stability compat h2dts/basic: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_basic_0071_compat8_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat8(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_basic_0071_compat8_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_basic_0071_compat8_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_basic_0071_compat8_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_basic_0071_compat8_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_basic_0071_compat8_itn execution error: ${String(err)}`);
    }
  });
});
