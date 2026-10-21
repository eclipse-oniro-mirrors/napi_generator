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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';

suite('Stability_H2DTS_COMPAT_SPECIAL', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_SPECIAL.');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0001
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0001
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0001', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_itn>", "h2dts_compat_special_0001 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0002
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0002
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0002', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<doubl>", "h2dts_compat_special_0002 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0003
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0003
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_boool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0003', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_boool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0003 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_boool>",
          "h2dts_compat_special_0003 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0004
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0004
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0004', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0004 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_flot>",
          "h2dts_compat_special_0004 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0005
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0005
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_lng>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0005', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_lng> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0005 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_lng>", "h2dts_compat_special_0005 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0006
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0006
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_bad75>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0006', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_bad75> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0006 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0006 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_bad75>",
          "h2dts_compat_special_0006 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0007
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0007
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_x>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0007', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_x> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0007 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0007 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_x>", "h2dts_compat_special_0007 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0008
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0008
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_75>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0008', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std::complex<double_75> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0008 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_75>", "h2dts_compat_special_0008 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0009
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0009
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:complex<double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0009', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat75(std:complex<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:complex<double>", "h2dts_compat_special_0009 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0010
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0010
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_milliseconds_itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0010', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std_chrono_milliseconds_itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_milliseconds_itn",
          "h2dts_compat_special_0010 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0010 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0011
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0011
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_milliseconds_doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0011', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std_chrono_milliseconds_doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_milliseconds_doubl",
          "h2dts_compat_special_0011 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0011 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0012
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0012
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_milliseconds_boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0012', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std_chrono_milliseconds_boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_milliseconds_boool",
          "h2dts_compat_special_0012 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0012 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0013
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0013
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_milliseconds_flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0013', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std_chrono_milliseconds_flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0013 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_milliseconds_flot",
          "h2dts_compat_special_0013 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0013 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0014
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0014
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_milliseconds_lng; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0014', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std_chrono_milliseconds_lng p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0014 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_milliseconds_lng",
          "h2dts_compat_special_0014 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0014 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0015
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0015
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_milliseconds_bad106; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0015', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std_chrono_milliseconds_bad106 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0015 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_milliseconds_bad106",
          "h2dts_compat_special_0015 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0015 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0016
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0016
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::chrono::millisecondxs; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0016', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std::chrono::millisecondxs p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0016 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0016 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::chrono::millisecondxs",
          "h2dts_compat_special_0016 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0016 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0017
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0017
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::chrono::millisecond; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0017', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std::chrono::millisecond p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0017 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0017 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::chrono::millisecond", "h2dts_compat_special_0017 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0017 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0018
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0018
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:chrono:milliseconds; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0018', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat106(std:chrono:milliseconds p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0018 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:chrono:milliseconds", "h2dts_compat_special_0018 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0018 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0019
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0019
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_seconds_itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0019', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std_chrono_seconds_itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_seconds_itn", "h2dts_compat_special_0019 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0019 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0020
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0020
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_seconds_doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0020', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std_chrono_seconds_doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_seconds_doubl", "h2dts_compat_special_0020 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0020 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0021
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0021
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_seconds_boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0021', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std_chrono_seconds_boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_seconds_boool", "h2dts_compat_special_0021 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0021 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0022
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0022
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_seconds_flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0022', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std_chrono_seconds_flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_seconds_flot", "h2dts_compat_special_0022 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0022 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0023
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0023
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_seconds_lng; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0023', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std_chrono_seconds_lng p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0023 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_seconds_lng", "h2dts_compat_special_0023 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0023 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0024
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0024
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_seconds_bad107; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0024', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std_chrono_seconds_bad107 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0024 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_seconds_bad107",
          "h2dts_compat_special_0024 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0024 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0025
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0025
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::chrono::secondxs; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0025', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std::chrono::secondxs p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0025 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::chrono::secondxs", "h2dts_compat_special_0025 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0025 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0026
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0026
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::chrono::second; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0026', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std::chrono::second p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0026 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0026 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::chrono::second", "h2dts_compat_special_0026 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0026 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0027
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0027
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:chrono:seconds; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0027', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat107(std:chrono:seconds p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0027 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0027 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:chrono:seconds", "h2dts_compat_special_0027 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0027 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0028
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0028
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_system_clock_time_point_itn; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0028', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std_chrono_system_clock_time_point_itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0028 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_system_clock_time_point_itn",
          "h2dts_compat_special_0028 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0028 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0029
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0029
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_system_clock_time_point_doubl; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0029', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std_chrono_system_clock_time_point_doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_system_clock_time_point_doubl",
          "h2dts_compat_special_0029 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0029 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0030
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0030
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_system_clock_time_point_boool; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0030', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std_chrono_system_clock_time_point_boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_system_clock_time_point_boool",
          "h2dts_compat_special_0030 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0030 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0031
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0031
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_system_clock_time_point_flot; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0031', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std_chrono_system_clock_time_point_flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_system_clock_time_point_flot",
          "h2dts_compat_special_0031 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0031 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0032
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0032
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_system_clock_time_point_lng; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0032', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std_chrono_system_clock_time_point_lng p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_system_clock_time_point_lng",
          "h2dts_compat_special_0032 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0032 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0033
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0033
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std_chrono_system_clock_time_point_bad108; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0033', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std_chrono_system_clock_time_point_bad108 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0033 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std_chrono_system_clock_time_point_bad108",
          "h2dts_compat_special_0033 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0033 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0034
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0034
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::chrono::system_clock::time_poinxt; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0034', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std::chrono::system_clock::time_poinxt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0034 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::chrono::system_clock::time_poinxt",
          "h2dts_compat_special_0034 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0034 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0035
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0035
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::chrono::system_clock::time_poin; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0035', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std::chrono::system_clock::time_poin p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0035 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::chrono::system_clock::time_poin",
          "h2dts_compat_special_0035 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0035 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0036
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0036
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:chrono:system_clock:time_point; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0036', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat108(std:chrono:system_clock:time_point p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0036 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0036 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:chrono:system_clock:time_point",
          "h2dts_compat_special_0036 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0036 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0037
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0037
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0037', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0037 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0037 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_itn>", "h2dts_compat_special_0037 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0037 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0038
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0038
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0038', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0038 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0038 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_doubl>",
          "h2dts_compat_special_0038 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0038 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0039
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0039
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_boool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0039', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_boool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_boool>",
          "h2dts_compat_special_0039 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0039 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0040
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0040
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0040', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0040 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<flot>", "h2dts_compat_special_0040 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0040 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0041
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0041
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_lng>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0041', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_lng> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0041 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0041 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_lng>", "h2dts_compat_special_0041 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0041 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0042
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0042
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_bad151>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0042', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_bad151> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0042 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_bad151>",
          "h2dts_compat_special_0042 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0042 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0043
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0043
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_x>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0043', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_x> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0043 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_x>", "h2dts_compat_special_0043 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0043 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0044
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0044
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<float_151>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0044', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std::complex<float_151> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0044 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<float_151>", "h2dts_compat_special_0044 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0044 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0045
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0045
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:complex<float>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0045', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat151(std:complex<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0045 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0045 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:complex<float>", "h2dts_compat_special_0045 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0045 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0046
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0046
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long double_itn>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0046', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long double_itn> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0046 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0046 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long double_itn>",
          "h2dts_compat_special_0046 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0046 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0047
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0047
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long doubl>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0047', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long doubl> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0047 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0047 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long doubl>", "h2dts_compat_special_0047 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0047 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0048
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0048
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long double_boool>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0048', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long double_boool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0048 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0048 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long double_boool>",
          "h2dts_compat_special_0048 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0048 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0049
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0049
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long double_flot>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0049', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long double_flot> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long double_flot>",
          "h2dts_compat_special_0049 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0049 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0050
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0050
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<lng double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0050', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<lng double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<lng double>", "h2dts_compat_special_0050 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0050 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0051
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0051
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long double_bad198>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0051', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long double_bad198> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long double_bad198>",
          "h2dts_compat_special_0051 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0051 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0052
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0052
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long double_x>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0052', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long double_x> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long double_x>",
          "h2dts_compat_special_0052 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0052 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0053
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0053
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<long double_198>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0053', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std::complex<long double_198> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0053 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<long double_198>",
          "h2dts_compat_special_0053 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0053 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0054
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0054
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:complex<long double>; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0054', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat198(std:complex<long double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0054 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:complex<long double>", "h2dts_compat_special_0054 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0054 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0055
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0055
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0055', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0055 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_itn> m2",
          "h2dts_compat_special_0055 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0055 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0056
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0056
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<doubl> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0056', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<doubl> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0056 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0056 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<doubl> m2", "h2dts_compat_special_0056 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0056 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0057
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0057
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_boool> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0057', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_boool> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0057 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0057 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_boool> m2",
          "h2dts_compat_special_0057 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0057 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0058
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0058
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_flot> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0058', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_flot> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0058 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0058 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0058 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_flot> m2",
          "h2dts_compat_special_0058 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0058 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0059
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0059
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_lng> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0059', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_lng> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0059 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0059 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0059 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_lng> m2",
          "h2dts_compat_special_0059 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0059 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0060
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0060
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_bad248> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0060', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_bad248> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0060 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0060 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0060 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_bad248> m2",
          "h2dts_compat_special_0060 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0060 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0061
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0061
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_x> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0061', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_x> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0061 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0061 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0061 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_x> m2",
          "h2dts_compat_special_0061 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0061 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0062
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0062
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::complex<double_248> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0062', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std::complex<double_248> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0062 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0062 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0062 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::complex<double_248> m2",
          "h2dts_compat_special_0062 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0062 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_SPECIAL_0063
   * @tc.number SUB_NAPI_H2DTS_COMPAT_SPECIAL_0063
   * @tc.desc   Stability compat h2dts/special: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:complex<double> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_special_0063', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat248(std:complex<double> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_special_0063 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_special_0063 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_special_0063 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:complex<double> m2", "h2dts_compat_special_0063 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_special_0063 execution error: ${err}`);
    }
  });
});
