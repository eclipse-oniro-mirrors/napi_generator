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

suite('Stability_H2DTS_COMPAT_MAP_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT560_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0001_COMPAT560_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0001_compat560_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0001_compat560_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0001_compat560_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0001_compat560_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0001_compat560_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0001_compat560_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT560_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0002_COMPAT560_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0002_compat560_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0002_compat560_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0002_compat560_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0002_compat560_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0002_compat560_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0002_compat560_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0003_COMPAT560_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0003_COMPAT560_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0003_compat560_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0003_compat560_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0003_compat560_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0003_compat560_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0003_compat560_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0003_compat560_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0004_COMPAT560_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0004_COMPAT560_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0004_compat560_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0004_compat560_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0004_compat560_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0004_compat560_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0004_compat560_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0004_compat560_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0005_COMPAT560_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0005_COMPAT560_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0005_compat560_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0005_compat560_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0005_compat560_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0005_compat560_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0005_compat560_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0005_compat560_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0006_NS_COMPAT560_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0006_NS_COMPAT560_STD_MAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0006_ns_compat560_std_map_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat560(std::map<int, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_ns_compat560_std_map_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0006_ns_compat560_std_map_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0006_ns_compat560_std_map_int_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0006_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0006_ns_compat560_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0007_COMPAT560_BAD_TYPE_560
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0007_COMPAT560_BAD_TYPE_560
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_560; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0007_compat560_bad_type_560', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(bad_type_560 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_compat560_bad_type_560 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0007_compat560_bad_type_560 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0007_compat560_bad_type_560 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_560",
          "h2dts_compat_map_0007_compat560_bad_type_560 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0007_compat560_bad_type_560 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0008_COMPAT560_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0008_COMPAT560_STD_MAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0008_compat560_std_map_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(std::map<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0008_compat560_std_map_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0008_compat560_std_map_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0008_compat560_std_map_int_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0008_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0008_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0008_compat560_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0009_E560
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0009_E560
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E560; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0009_e560', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E560 { A, B }; void f(E560 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0009_e560 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0009_e560 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0009_e560 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0009_e560 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT560_STD_MAP_INT_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0010_COMPAT560_STD_MAP_INT_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<int, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0010_compat560_std_map_int_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat560(std:map<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0010_compat560_std_map_int_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0010_compat560_std_map_int_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0010_compat560_std_map_int_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<int, int>",
          "h2dts_compat_map_0010_compat560_std_map_int_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0010_compat560_std_map_int_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT561_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0011_COMPAT561_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0011_compat561_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0011_compat561_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0011_compat561_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0011_compat561_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0011_compat561_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0011_compat561_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT561_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0012_COMPAT561_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0012_compat561_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0012_compat561_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0012_compat561_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0012_compat561_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0012_compat561_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0012_compat561_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0013_COMPAT561_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0013_COMPAT561_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0013_compat561_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0013_compat561_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0013_compat561_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0013_compat561_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0013_compat561_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0013_compat561_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0014_COMPAT561_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0014_COMPAT561_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0014_compat561_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0014_compat561_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0014_compat561_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0014_compat561_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0014_compat561_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0014_compat561_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0015_COMPAT561_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0015_COMPAT561_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0015_compat561_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0015_compat561_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0015_compat561_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0015_compat561_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0015_compat561_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0015_compat561_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0016_NS_COMPAT561_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0016_NS_COMPAT561_STD_MAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0016_ns_compat561_std_map_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat561(std::map<char, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_ns_compat561_std_map_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0016_ns_compat561_std_map_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0016_ns_compat561_std_map_char_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0016_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0016_ns_compat561_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0017_COMPAT561_BAD_TYPE_561
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0017_COMPAT561_BAD_TYPE_561
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_561; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0017_compat561_bad_type_561', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(bad_type_561 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_compat561_bad_type_561 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0017_compat561_bad_type_561 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0017_compat561_bad_type_561 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_561",
          "h2dts_compat_map_0017_compat561_bad_type_561 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0017_compat561_bad_type_561 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0018_COMPAT561_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0018_COMPAT561_STD_MAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0018_compat561_std_map_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(std::map<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0018_compat561_std_map_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0018_compat561_std_map_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0018_compat561_std_map_char_int must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0018_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0018_compat561_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0019_E561
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0019_E561
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E561; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0019_e561', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E561 { A, B }; void f(E561 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0019_e561 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0019_e561 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0019_e561 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0019_e561 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT561_STD_MAP_CHAR_INT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0020_COMPAT561_STD_MAP_CHAR_INT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char, int>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0020_compat561_std_map_char_int', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat561(std:map<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0020_compat561_std_map_char_int parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0020_compat561_std_map_char_int must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0020_compat561_std_map_char_int must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char, int>",
          "h2dts_compat_map_0020_compat561_std_map_char_int param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0020_compat561_std_map_char_int execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT562_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0021_COMPAT562_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0021_compat562_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0021_compat562_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0021_compat562_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0021_compat562_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0021_compat562_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0021_compat562_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT562_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0022_COMPAT562_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0022_compat562_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0022_compat562_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0022_compat562_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0022_compat562_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0022_compat562_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0022_compat562_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0023_COMPAT562_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0023_COMPAT562_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0023_compat562_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0023_compat562_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0023_compat562_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0023_compat562_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0023_compat562_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0023_compat562_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0024_COMPAT562_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0024_COMPAT562_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0024_compat562_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0024_compat562_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0024_compat562_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0024_compat562_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0024_compat562_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0024_compat562_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0025_COMPAT562_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0025_COMPAT562_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0025_compat562_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0025_compat562_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0025_compat562_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0025_compat562_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0025_compat562_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0025_compat562_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0026_NS_COMPAT562_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0026_NS_COMPAT562_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0026_ns_compat562_std_map_char_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat562(std::map<char, size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_ns_compat562_std_map_char_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0026_ns_compat562_std_map_char_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0026_ns_compat562_std_map_char_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0026_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0026_ns_compat562_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0027_COMPAT562_BAD_TYPE_562
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0027_COMPAT562_BAD_TYPE_562
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_562; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0027_compat562_bad_type_562', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(bad_type_562 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_compat562_bad_type_562 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0027_compat562_bad_type_562 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0027_compat562_bad_type_562 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_562",
          "h2dts_compat_map_0027_compat562_bad_type_562 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0027_compat562_bad_type_562 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0028_COMPAT562_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0028_COMPAT562_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0028_compat562_std_map_char_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(std::map<char, size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0028_compat562_std_map_char_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0028_compat562_std_map_char_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0028_compat562_std_map_char_size_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0028_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0028_compat562_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0029_E562
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0029_E562
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E562; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0029_e562', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E562 { A, B }; void f(E562 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0029_e562 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0029_e562 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0029_e562 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0029_e562 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT562_STD_MAP_CHAR_SIZE_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0030_COMPAT562_STD_MAP_CHAR_SIZE_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char, size_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0030_compat562_std_map_char_size_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat562(std:map<char, size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0030_compat562_std_map_char_size_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0030_compat562_std_map_char_size_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0030_compat562_std_map_char_size_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char, size_t>",
          "h2dts_compat_map_0030_compat562_std_map_char_size_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0030_compat562_std_map_char_size_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT563_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0031_COMPAT563_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0031_compat563_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0031_compat563_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0031_compat563_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0031_compat563_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0031_compat563_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0031_compat563_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT563_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0032_COMPAT563_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0032_compat563_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0032_compat563_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0032_compat563_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0032_compat563_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0032_compat563_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0032_compat563_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0033_COMPAT563_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0033_COMPAT563_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0033_compat563_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0033_compat563_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0033_compat563_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0033_compat563_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0033_compat563_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0033_compat563_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0034_COMPAT563_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0034_COMPAT563_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0034_compat563_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0034_compat563_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0034_compat563_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0034_compat563_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0034_compat563_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0034_compat563_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0035_COMPAT563_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0035_COMPAT563_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0035_compat563_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0035_compat563_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0035_compat563_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0035_compat563_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0035_compat563_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0035_compat563_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0036_NS_COMPAT563_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0036_NS_COMPAT563_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char, unsigned>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0036_ns_compat563_std_map_char_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat563(std::map<char, unsigned> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_ns_compat563_std_map_char_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0036_ns_compat563_std_map_char_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0036_ns_compat563_std_map_char_unsigned must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0036_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0036_ns_compat563_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0037_COMPAT563_BAD_TYPE_563
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0037_COMPAT563_BAD_TYPE_563
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_563; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0037_compat563_bad_type_563', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(bad_type_563 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_compat563_bad_type_563 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0037_compat563_bad_type_563 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0037_compat563_bad_type_563 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_563",
          "h2dts_compat_map_0037_compat563_bad_type_563 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0037_compat563_bad_type_563 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0038_COMPAT563_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0038_COMPAT563_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char, unsigned>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0038_compat563_std_map_char_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(std::map<char, unsigned> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0038_compat563_std_map_char_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0038_compat563_std_map_char_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0038_compat563_std_map_char_unsigned must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0038_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0038_compat563_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0039_E563
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0039_E563
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E563; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0039_e563', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E563 { A, B }; void f(E563 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0039_e563 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0039_e563 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0039_e563 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0039_e563 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0040_COMPAT563_STD_MAP_CHAR_UNSIGNED
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0040_COMPAT563_STD_MAP_CHAR_UNSIGNED
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char, unsigned>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0040_compat563_std_map_char_unsigned', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat563(std:map<char, unsigned> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0040_compat563_std_map_char_unsigned parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0040_compat563_std_map_char_unsigned must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0040_compat563_std_map_char_unsigned must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char, unsigned>",
          "h2dts_compat_map_0040_compat563_std_map_char_unsigned param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0040_compat563_std_map_char_unsigned execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0041_COMPAT564_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0041_COMPAT564_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0041_compat564_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0041_compat564_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0041_compat564_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0041_compat564_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0041_compat564_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0041_compat564_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0042_COMPAT564_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0042_COMPAT564_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0042_compat564_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0042_compat564_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0042_compat564_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0042_compat564_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0042_compat564_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0042_compat564_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0043_COMPAT564_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0043_COMPAT564_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0043_compat564_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0043_compat564_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0043_compat564_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0043_compat564_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0043_compat564_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0043_compat564_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0044_COMPAT564_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0044_COMPAT564_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0044_compat564_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0044_compat564_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0044_compat564_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0044_compat564_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0044_compat564_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0044_compat564_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0045_COMPAT564_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0045_COMPAT564_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0045_compat564_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0045_compat564_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0045_compat564_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0045_compat564_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0045_compat564_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0045_compat564_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0046_NS_COMPAT564_STD_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0046_NS_COMPAT564_STD_MAP_CHAR_DOUBLE
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0046_ns_compat564_std_map_char_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat564(std::map<char, double> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0046_ns_compat564_std_map_char_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0046_ns_compat564_std_map_char_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0046_ns_compat564_std_map_char_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0046_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0046_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0046_ns_compat564_std_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0047_COMPAT564_BAD_TYPE_564
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0047_COMPAT564_BAD_TYPE_564
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_564; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0047_compat564_bad_type_564', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(bad_type_564 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0047_compat564_bad_type_564 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0047_compat564_bad_type_564 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0047_compat564_bad_type_564 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_564",
          "h2dts_compat_map_0047_compat564_bad_type_564 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0047_compat564_bad_type_564 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0048_COMPAT564_STD_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0048_COMPAT564_STD_MAP_CHAR_DOUBLE
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0048_compat564_std_map_char_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(std::map<char, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0048_compat564_std_map_char_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0048_compat564_std_map_char_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0048_compat564_std_map_char_double must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0048_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0048_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0048_compat564_std_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0049_E564
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0049_E564
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E564; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0049_e564', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E564 { A, B }; void f(E564 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0049_e564 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0049_e564 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0049_e564 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0049_e564 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0050_COMPAT564_STD_MAP_CHAR_DOUBLE
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0050_COMPAT564_STD_MAP_CHAR_DOUBLE
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char, double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0050_compat564_std_map_char_double', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat564(std:map<char, double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0050_compat564_std_map_char_double parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0050_compat564_std_map_char_double must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0050_compat564_std_map_char_double must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char, double>",
          "h2dts_compat_map_0050_compat564_std_map_char_double param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0050_compat564_std_map_char_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0051_COMPAT565_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0051_COMPAT565_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0051_compat565_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0051_compat565_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0051_compat565_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0051_compat565_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0051_compat565_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0051_compat565_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0052_COMPAT565_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0052_COMPAT565_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0052_compat565_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0052_compat565_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0052_compat565_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0052_compat565_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0052_compat565_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0052_compat565_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0053_COMPAT565_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0053_COMPAT565_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0053_compat565_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0053_compat565_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0053_compat565_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0053_compat565_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0053_compat565_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0053_compat565_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0054_COMPAT565_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0054_COMPAT565_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0054_compat565_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0054_compat565_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0054_compat565_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0054_compat565_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0054_compat565_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0054_compat565_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0055_COMPAT565_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0055_COMPAT565_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0055_compat565_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0055_compat565_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0055_compat565_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0055_compat565_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0055_compat565_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0055_compat565_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0056_NS_COMPAT565_STD_MAP_CHAR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0056_NS_COMPAT565_STD_MAP_CHAR_FLOAT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0056_ns_compat565_std_map_char_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat565(std::map<char, float> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0056_ns_compat565_std_map_char_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0056_ns_compat565_std_map_char_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0056_ns_compat565_std_map_char_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0056_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0056_ns_compat565_std_map_char_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0057_COMPAT565_BAD_TYPE_565
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0057_COMPAT565_BAD_TYPE_565
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_565; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0057_compat565_bad_type_565', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(bad_type_565 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0057_compat565_bad_type_565 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0057_compat565_bad_type_565 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0057_compat565_bad_type_565 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_565",
          "h2dts_compat_map_0057_compat565_bad_type_565 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0057_compat565_bad_type_565 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0058_COMPAT565_STD_MAP_CHAR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0058_COMPAT565_STD_MAP_CHAR_FLOAT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0058_compat565_std_map_char_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(std::map<char, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0058_compat565_std_map_char_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0058_compat565_std_map_char_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0058_compat565_std_map_char_float must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0058_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0058_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0058_compat565_std_map_char_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0059_E565
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0059_E565
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E565; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0059_e565', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E565 { A, B }; void f(E565 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0059_e565 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0059_e565 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0059_e565 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0059_e565 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0060_COMPAT565_STD_MAP_CHAR_FLOAT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0060_COMPAT565_STD_MAP_CHAR_FLOAT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char, float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0060_compat565_std_map_char_float', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat565(std:map<char, float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0060_compat565_std_map_char_float parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0060_compat565_std_map_char_float must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0060_compat565_std_map_char_float must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char, float>",
          "h2dts_compat_map_0060_compat565_std_map_char_float param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0060_compat565_std_map_char_float execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0061_COMPAT566_ITN
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0061_COMPAT566_ITN
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0061_compat566_itn', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0061_compat566_itn parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0061_compat566_itn must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0061_compat566_itn must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0061_compat566_itn param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0061_compat566_itn execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0062_COMPAT566_DOUBL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0062_COMPAT566_DOUBL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0062_compat566_doubl', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0062_compat566_doubl parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0062_compat566_doubl must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0062_compat566_doubl must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0062_compat566_doubl param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0062_compat566_doubl execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0063_COMPAT566_BOOOL
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0063_COMPAT566_BOOOL
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0063_compat566_boool', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0063_compat566_boool parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0063_compat566_boool must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0063_compat566_boool must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0063_compat566_boool param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0063_compat566_boool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0064_COMPAT566_INTT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0064_COMPAT566_INTT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type intt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0064_compat566_intt', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0064_compat566_intt parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0064_compat566_intt must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0064_compat566_intt must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0064_compat566_intt param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0064_compat566_intt execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0065_COMPAT566_FLOT
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0065_COMPAT566_FLOT
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0065_compat566_flot', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0065_compat566_flot parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0065_compat566_flot must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0065_compat566_flot must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0065_compat566_flot param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0065_compat566_flot execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0066_NS_COMPAT566_STD_MAP_CHAR16_T_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0066_NS_COMPAT566_STD_MAP_CHAR16_T_INT32_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); namespaced
   *            C++ decl param std::map<char16_t, int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0066_ns_compat566_std_map_char16_t_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat566(std::map<char16_t, int32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0066_ns_compat566_std_map_char16_t_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0066_ns_compat566_std_map_char16_t_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0066_ns_compat566_std_map_char16_t_int32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0066_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0066_ns_compat566_std_map_char16_t_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0067_COMPAT566_BAD_TYPE_566
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0067_COMPAT566_BAD_TYPE_566
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type bad_type_566; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0067_compat566_bad_type_566', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(bad_type_566 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0067_compat566_bad_type_566 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0067_compat566_bad_type_566 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0067_compat566_bad_type_566 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_566",
          "h2dts_compat_map_0067_compat566_bad_type_566 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0067_compat566_bad_type_566 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0068_COMPAT566_STD_MAP_CHAR16_T_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0068_COMPAT566_STD_MAP_CHAR16_T_INT32_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std::map<char16_t, int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0068_compat566_std_map_char16_t_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(std::map<char16_t, int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0068_compat566_std_map_char16_t_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0068_compat566_std_map_char16_t_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0068_compat566_std_map_char16_t_int32_t must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0068_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0068_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0068_compat566_std_map_char16_t_int32_t execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0069_E566
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0069_E566
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type E566; strictEqual malformed field preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0069_e566', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E566 { A, B }; void f(E566 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0069_e566 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0069_e566 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0069_e566 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0069_e566 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_MAP_0070_COMPAT566_STD_MAP_CHAR16_T_INT32_T
   * @tc.number SUB_NAPI_H2DTS_COMPAT_MAP_0070_COMPAT566_STD_MAP_CHAR16_T_INT32_T
   * @tc.desc   Stability compat h2dts/map: runCompatSafe(parseFunction+transTskey2Ckey); malformed
   *            type std:map<char16_t, int32_t>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_map_0070_compat566_std_map_char16_t_int32_t', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat566(std:map<char16_t, int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0070_compat566_std_map_char16_t_int32_t parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_map_0070_compat566_std_map_char16_t_int32_t must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_map_0070_compat566_std_map_char16_t_int32_t must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:map<char16_t, int32_t>",
          "h2dts_compat_map_0070_compat566_std_map_char16_t_int32_t param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0070_compat566_std_map_char16_t_int32_t execution error: ${String(err)}`);
    }
  });
});
