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
