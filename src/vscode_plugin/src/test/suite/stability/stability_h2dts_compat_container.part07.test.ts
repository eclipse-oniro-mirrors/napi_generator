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

suite('Stability_H2DTS_COMPAT_CONTAINER_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_CONTAINER._Part07');

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT236_STD_STACK_FLOT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0037_COMPAT236_STD_STACK_FLOT_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_flot<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0037_compat236_std_stack_flot_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack_flot<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat236_std_stack_flot_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0037_compat236_std_stack_flot_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0037_compat236_std_stack_flot_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_flot<int> m2",
          "h2dts_compat_container_0037_compat236_std_stack_flot_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0037_compat236_std_stack_flot_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT236_STD_STACK_LNG_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0038_COMPAT236_STD_STACK_LNG_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_lng<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0038_compat236_std_stack_lng_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack_lng<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat236_std_stack_lng_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0038_compat236_std_stack_lng_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0038_compat236_std_stack_lng_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_lng<int> m2",
          "h2dts_compat_container_0038_compat236_std_stack_lng_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0038_compat236_std_stack_lng_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT236_STD_STACK_BAD236_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0039_COMPAT236_STD_STACK_BAD236_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_bad236<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0039_compat236_std_stack_bad236_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack_bad236<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat236_std_stack_bad236_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0039_compat236_std_stack_bad236_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0039_compat236_std_stack_bad236_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_bad236<int> m2",
          "h2dts_compat_container_0039_compat236_std_stack_bad236_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0039_compat236_std_stack_bad236_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT236_STD_STACK_X_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0040_COMPAT236_STD_STACK_X_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack_x<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0040_compat236_std_stack_x_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack_x<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat236_std_stack_x_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0040_compat236_std_stack_x_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0040_compat236_std_stack_x_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack_x<int> m2",
          "h2dts_compat_container_0040_compat236_std_stack_x_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0040_compat236_std_stack_x_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT236_STD_STACK_INT_236_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0041_COMPAT236_STD_STACK_INT_236_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::stack<int_236> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0041_compat236_std_stack_int_236_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std::stack<int_236> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat236_std_stack_int_236_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0041_compat236_std_stack_int_236_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0041_compat236_std_stack_int_236_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::stack<int_236> m2",
          "h2dts_compat_container_0041_compat236_std_stack_int_236_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0041_compat236_std_stack_int_236_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT236_STD_STACK_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0042_COMPAT236_STD_STACK_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:stack<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0042_compat236_std_stack_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat236(std:stack<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat236_std_stack_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0042_compat236_std_stack_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0042_compat236_std_stack_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:stack<int> m2",
          "h2dts_compat_container_0042_compat236_std_stack_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0042_compat236_std_stack_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT237_STD_PRIORITY_QUEUE_ITN_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0043_COMPAT237_STD_PRIORITY_QUEUE_ITN_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue<itn> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0043_compat237_std_priority_queue_itn_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue<itn> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat237_std_priority_queue_itn_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0043_compat237_std_priority_queue_itn_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0043_compat237_std_priority_queue_itn_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue<itn> m3",
          "h2dts_compat_container_0043_compat237_std_priority_queue_itn_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0043_compat237_std_priority_queue_itn_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT237_STD_PRIORITY_QUEUE_DOUBL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0044_COMPAT237_STD_PRIORITY_QUEUE_DOUBL_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_doubl<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0044_compat237_std_priority_queue_doubl_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue_doubl<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat237_std_priority_queue_doubl_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0044_compat237_std_priority_queue_doubl_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0044_compat237_std_priority_queue_doubl_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_doubl<int> m3",
          "h2dts_compat_container_0044_compat237_std_priority_queue_doubl_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0044_compat237_std_priority_queue_doubl_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT237_STD_PRIORITY_QUEUE_BOOOL_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0045_COMPAT237_STD_PRIORITY_QUEUE_BOOOL_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_boool<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0045_compat237_std_priority_queue_boool_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue_boool<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat237_std_priority_queue_boool_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0045_compat237_std_priority_queue_boool_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0045_compat237_std_priority_queue_boool_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_boool<int> m3",
          "h2dts_compat_container_0045_compat237_std_priority_queue_boool_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0045_compat237_std_priority_queue_boool_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT237_STD_PRIORITY_QUEUE_FLOT_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0046_COMPAT237_STD_PRIORITY_QUEUE_FLOT_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_flot<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0046_compat237_std_priority_queue_flot_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue_flot<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat237_std_priority_queue_flot_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0046_compat237_std_priority_queue_flot_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0046_compat237_std_priority_queue_flot_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_flot<int> m3",
          "h2dts_compat_container_0046_compat237_std_priority_queue_flot_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0046_compat237_std_priority_queue_flot_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT237_STD_PRIORITY_QUEUE_LNG_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0047_COMPAT237_STD_PRIORITY_QUEUE_LNG_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_lng<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0047_compat237_std_priority_queue_lng_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue_lng<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat237_std_priority_queue_lng_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0047_compat237_std_priority_queue_lng_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0047_compat237_std_priority_queue_lng_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_lng<int> m3",
          "h2dts_compat_container_0047_compat237_std_priority_queue_lng_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0047_compat237_std_priority_queue_lng_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT237_STD_PRIORITY_QUEUE_BAD237_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0048_COMPAT237_STD_PRIORITY_QUEUE_BAD237_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_bad237<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0048_compat237_std_priority_queue_bad237_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue_bad237<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat237_std_priority_queue_bad237_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0048_compat237_std_priority_queue_bad237_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0048_compat237_std_priority_queue_bad237_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_bad237<int> m3",
          "h2dts_compat_container_0048_compat237_std_priority_queue_bad237_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0048_compat237_std_priority_queue_bad237_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT237_STD_PRIORITY_QUEUE_X_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0049_COMPAT237_STD_PRIORITY_QUEUE_X_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue_x<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0049_compat237_std_priority_queue_x_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue_x<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat237_std_priority_queue_x_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0049_compat237_std_priority_queue_x_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0049_compat237_std_priority_queue_x_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue_x<int> m3",
          "h2dts_compat_container_0049_compat237_std_priority_queue_x_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0049_compat237_std_priority_queue_x_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT237_STD_PRIORITY_QUEUE_INT_237_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0050_COMPAT237_STD_PRIORITY_QUEUE_INT_237_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::priority_queue<int_237> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0050_compat237_std_priority_queue_int_237_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std::priority_queue<int_237> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat237_std_priority_queue_int_237_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0050_compat237_std_priority_queue_int_237_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0050_compat237_std_priority_queue_int_237_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::priority_queue<int_237> m3",
          "h2dts_compat_container_0050_compat237_std_priority_queue_int_237_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0050_compat237_std_priority_queue_int_237_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT237_STD_PRIORITY_QUEUE_INT_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0051_COMPAT237_STD_PRIORITY_QUEUE_INT_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:priority_queue<int> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0051_compat237_std_priority_queue_int_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat237(std:priority_queue<int> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat237_std_priority_queue_int_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0051_compat237_std_priority_queue_int_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0051_compat237_std_priority_queue_int_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int> m3",
          "h2dts_compat_container_0051_compat237_std_priority_queue_int_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0051_compat237_std_priority_queue_int_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT247_STD_VALARRAY_ITN_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0052_COMPAT247_STD_VALARRAY_ITN_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_itn<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0052_compat247_std_valarray_itn_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray_itn<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat247_std_valarray_itn_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0052_compat247_std_valarray_itn_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0052_compat247_std_valarray_itn_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_itn<double> m1",
          "h2dts_compat_container_0052_compat247_std_valarray_itn_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0052_compat247_std_valarray_itn_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT247_STD_VALARRAY_DOUBL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0053_COMPAT247_STD_VALARRAY_DOUBL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<doubl> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0053_compat247_std_valarray_doubl_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray<doubl> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat247_std_valarray_doubl_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0053_compat247_std_valarray_doubl_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0053_compat247_std_valarray_doubl_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<doubl> m1",
          "h2dts_compat_container_0053_compat247_std_valarray_doubl_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0053_compat247_std_valarray_doubl_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT247_STD_VALARRAY_BOOOL_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0054_COMPAT247_STD_VALARRAY_BOOOL_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_boool<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0054_compat247_std_valarray_boool_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray_boool<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat247_std_valarray_boool_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0054_compat247_std_valarray_boool_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0054_compat247_std_valarray_boool_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_boool<double> m1",
          "h2dts_compat_container_0054_compat247_std_valarray_boool_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0054_compat247_std_valarray_boool_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT247_STD_VALARRAY_FLOT_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0055_COMPAT247_STD_VALARRAY_FLOT_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_flot<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0055_compat247_std_valarray_flot_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray_flot<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat247_std_valarray_flot_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0055_compat247_std_valarray_flot_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0055_compat247_std_valarray_flot_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_flot<double> m1",
          "h2dts_compat_container_0055_compat247_std_valarray_flot_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0055_compat247_std_valarray_flot_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT247_STD_VALARRAY_LNG_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0056_COMPAT247_STD_VALARRAY_LNG_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_lng<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0056_compat247_std_valarray_lng_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray_lng<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat247_std_valarray_lng_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0056_compat247_std_valarray_lng_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0056_compat247_std_valarray_lng_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_lng<double> m1",
          "h2dts_compat_container_0056_compat247_std_valarray_lng_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0056_compat247_std_valarray_lng_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT247_STD_VALARRAY_BAD247_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0057_COMPAT247_STD_VALARRAY_BAD247_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_bad247<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0057_compat247_std_valarray_bad247_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray_bad247<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat247_std_valarray_bad247_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0057_compat247_std_valarray_bad247_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0057_compat247_std_valarray_bad247_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_bad247<double> m1",
          "h2dts_compat_container_0057_compat247_std_valarray_bad247_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0057_compat247_std_valarray_bad247_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT247_STD_VALARRAY_X_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0058_COMPAT247_STD_VALARRAY_X_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray_x<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0058_compat247_std_valarray_x_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray_x<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat247_std_valarray_x_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0058_compat247_std_valarray_x_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0058_compat247_std_valarray_x_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray_x<double> m1",
          "h2dts_compat_container_0058_compat247_std_valarray_x_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0058_compat247_std_valarray_x_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT247_STD_VALARRAY_DOUBLE_247_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0059_COMPAT247_STD_VALARRAY_DOUBLE_247_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::valarray<double_247> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0059_compat247_std_valarray_double_247_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std::valarray<double_247> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat247_std_valarray_double_247_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0059_compat247_std_valarray_double_247_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0059_compat247_std_valarray_double_247_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::valarray<double_247> m1",
          "h2dts_compat_container_0059_compat247_std_valarray_double_247_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0059_compat247_std_valarray_double_247_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT247_STD_VALARRAY_DOUBLE_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0060_COMPAT247_STD_VALARRAY_DOUBLE_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:valarray<double> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0060_compat247_std_valarray_double_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat247(std:valarray<double> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat247_std_valarray_double_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0060_compat247_std_valarray_double_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0060_compat247_std_valarray_double_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:valarray<double> m1",
          "h2dts_compat_container_0060_compat247_std_valarray_double_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0060_compat247_std_valarray_double_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT249_STD_VECTOR_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0061_COMPAT249_STD_VECTOR_ITN_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0061_compat249_std_vector_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector<itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat249_std_vector_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0061_compat249_std_vector_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0061_compat249_std_vector_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<itn> m2",
          "h2dts_compat_container_0061_compat249_std_vector_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0061_compat249_std_vector_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT249_STD_VECTOR_DOUBL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0062_COMPAT249_STD_VECTOR_DOUBL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0062_compat249_std_vector_doubl_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector_doubl<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat249_std_vector_doubl_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0062_compat249_std_vector_doubl_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0062_compat249_std_vector_doubl_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<int> m2",
          "h2dts_compat_container_0062_compat249_std_vector_doubl_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0062_compat249_std_vector_doubl_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT249_STD_VECTOR_BOOOL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0063_COMPAT249_STD_VECTOR_BOOOL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0063_compat249_std_vector_boool_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector_boool<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat249_std_vector_boool_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0063_compat249_std_vector_boool_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0063_compat249_std_vector_boool_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<int> m2",
          "h2dts_compat_container_0063_compat249_std_vector_boool_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0063_compat249_std_vector_boool_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT249_STD_VECTOR_FLOT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0064_COMPAT249_STD_VECTOR_FLOT_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0064_compat249_std_vector_flot_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector_flot<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat249_std_vector_flot_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0064_compat249_std_vector_flot_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0064_compat249_std_vector_flot_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<int> m2",
          "h2dts_compat_container_0064_compat249_std_vector_flot_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0064_compat249_std_vector_flot_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT249_STD_VECTOR_LNG_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0065_COMPAT249_STD_VECTOR_LNG_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0065_compat249_std_vector_lng_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector_lng<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat249_std_vector_lng_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0065_compat249_std_vector_lng_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0065_compat249_std_vector_lng_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<int> m2",
          "h2dts_compat_container_0065_compat249_std_vector_lng_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0065_compat249_std_vector_lng_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT249_STD_VECTOR_BAD249_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0066_COMPAT249_STD_VECTOR_BAD249_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad249<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0066_compat249_std_vector_bad249_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector_bad249<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat249_std_vector_bad249_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0066_compat249_std_vector_bad249_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0066_compat249_std_vector_bad249_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad249<int> m2",
          "h2dts_compat_container_0066_compat249_std_vector_bad249_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0066_compat249_std_vector_bad249_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT249_STD_VECTOR_X_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0067_COMPAT249_STD_VECTOR_X_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0067_compat249_std_vector_x_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector_x<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat249_std_vector_x_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0067_compat249_std_vector_x_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0067_compat249_std_vector_x_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<int> m2",
          "h2dts_compat_container_0067_compat249_std_vector_x_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0067_compat249_std_vector_x_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT249_STD_VECTOR_INT_249_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0068_COMPAT249_STD_VECTOR_INT_249_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<int_249> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0068_compat249_std_vector_int_249_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std::vector<int_249> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat249_std_vector_int_249_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0068_compat249_std_vector_int_249_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0068_compat249_std_vector_int_249_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<int_249> m2",
          "h2dts_compat_container_0068_compat249_std_vector_int_249_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0068_compat249_std_vector_int_249_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT249_STD_VECTOR_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0069_COMPAT249_STD_VECTOR_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0069_compat249_std_vector_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat249(std:vector<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat249_std_vector_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0069_compat249_std_vector_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0069_compat249_std_vector_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<int> m2",
          "h2dts_compat_container_0069_compat249_std_vector_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0069_compat249_std_vector_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT250_STD_VECTOR_ITN_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0070_COMPAT250_STD_VECTOR_ITN_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0070_compat250_std_vector_itn_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_itn<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat250_std_vector_itn_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0070_compat250_std_vector_itn_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0070_compat250_std_vector_itn_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<std::string> m3",
          "h2dts_compat_container_0070_compat250_std_vector_itn_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0070_compat250_std_vector_itn_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT250_STD_VECTOR_DOUBL_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0071_COMPAT250_STD_VECTOR_DOUBL_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0071_compat250_std_vector_doubl_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_doubl<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat250_std_vector_doubl_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0071_compat250_std_vector_doubl_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0071_compat250_std_vector_doubl_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<std::string> m3",
          "h2dts_compat_container_0071_compat250_std_vector_doubl_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0071_compat250_std_vector_doubl_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT250_STD_VECTOR_BOOOL_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0072_COMPAT250_STD_VECTOR_BOOOL_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0072_compat250_std_vector_boool_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_boool<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat250_std_vector_boool_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0072_compat250_std_vector_boool_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0072_compat250_std_vector_boool_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<std::string> m3",
          "h2dts_compat_container_0072_compat250_std_vector_boool_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0072_compat250_std_vector_boool_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT250_STD_VECTOR_FLOT_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0073_COMPAT250_STD_VECTOR_FLOT_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0073_compat250_std_vector_flot_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_flot<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat250_std_vector_flot_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0073_compat250_std_vector_flot_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0073_compat250_std_vector_flot_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<std::string> m3",
          "h2dts_compat_container_0073_compat250_std_vector_flot_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0073_compat250_std_vector_flot_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT250_STD_VECTOR_LNG_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0074_COMPAT250_STD_VECTOR_LNG_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0074_compat250_std_vector_lng_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_lng<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat250_std_vector_lng_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0074_compat250_std_vector_lng_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0074_compat250_std_vector_lng_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<std::string> m3",
          "h2dts_compat_container_0074_compat250_std_vector_lng_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0074_compat250_std_vector_lng_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT250_STD_VECTOR_BAD250_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0075_COMPAT250_STD_VECTOR_BAD250_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad250<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0075_compat250_std_vector_bad250_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_bad250<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat250_std_vector_bad250_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0075_compat250_std_vector_bad250_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0075_compat250_std_vector_bad250_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad250<std::string> m3",
          "h2dts_compat_container_0075_compat250_std_vector_bad250_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0075_compat250_std_vector_bad250_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT250_STD_VECTOR_X_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0076_COMPAT250_STD_VECTOR_X_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0076_compat250_std_vector_x_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector_x<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat250_std_vector_x_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0076_compat250_std_vector_x_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0076_compat250_std_vector_x_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<std::string> m3",
          "h2dts_compat_container_0076_compat250_std_vector_x_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0076_compat250_std_vector_x_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT250_STD_VECTOR_STD_STRING_250_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0001_COMPAT250_STD_VECTOR_STD_STRING_250_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<std::string_250> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0001_compat250_std_vector_std_string_250_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std::vector<std::string_250> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat250_std_vector_std_string_250_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0001_compat250_std_vector_std_string_250_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0001_compat250_std_vector_std_string_250_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<std::string_250> m3",
          "h2dts_compat_container_0001_compat250_std_vector_std_string_250_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0001_compat250_std_vector_std_string_250_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT250_STD_VECTOR_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0002_COMPAT250_STD_VECTOR_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<std:string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0002_compat250_std_vector_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat250(std:vector<std:string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat250_std_vector_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0002_compat250_std_vector_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0002_compat250_std_vector_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<std:string> m3",
          "h2dts_compat_container_0002_compat250_std_vector_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0002_compat250_std_vector_std_string_m3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT251_STD_VECTOR_ITN_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0003_COMPAT251_STD_VECTOR_ITN_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0003_compat251_std_vector_itn_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector_itn<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat251_std_vector_itn_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0003_compat251_std_vector_itn_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0003_compat251_std_vector_itn_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<double> m0",
          "h2dts_compat_container_0003_compat251_std_vector_itn_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0003_compat251_std_vector_itn_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT251_STD_VECTOR_DOUBL_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0004_COMPAT251_STD_VECTOR_DOUBL_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<doubl> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0004_compat251_std_vector_doubl_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector<doubl> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat251_std_vector_doubl_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0004_compat251_std_vector_doubl_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0004_compat251_std_vector_doubl_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<doubl> m0",
          "h2dts_compat_container_0004_compat251_std_vector_doubl_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0004_compat251_std_vector_doubl_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT251_STD_VECTOR_BOOOL_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0005_COMPAT251_STD_VECTOR_BOOOL_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_boool<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0005_compat251_std_vector_boool_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector_boool<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat251_std_vector_boool_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0005_compat251_std_vector_boool_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0005_compat251_std_vector_boool_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_boool<double> m0",
          "h2dts_compat_container_0005_compat251_std_vector_boool_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0005_compat251_std_vector_boool_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT251_STD_VECTOR_FLOT_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0006_COMPAT251_STD_VECTOR_FLOT_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0006_compat251_std_vector_flot_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector_flot<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat251_std_vector_flot_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0006_compat251_std_vector_flot_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0006_compat251_std_vector_flot_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<double> m0",
          "h2dts_compat_container_0006_compat251_std_vector_flot_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0006_compat251_std_vector_flot_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT251_STD_VECTOR_LNG_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0007_COMPAT251_STD_VECTOR_LNG_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0007_compat251_std_vector_lng_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector_lng<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat251_std_vector_lng_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0007_compat251_std_vector_lng_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0007_compat251_std_vector_lng_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<double> m0",
          "h2dts_compat_container_0007_compat251_std_vector_lng_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0007_compat251_std_vector_lng_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT251_STD_VECTOR_BAD251_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0008_COMPAT251_STD_VECTOR_BAD251_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad251<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0008_compat251_std_vector_bad251_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector_bad251<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat251_std_vector_bad251_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0008_compat251_std_vector_bad251_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0008_compat251_std_vector_bad251_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad251<double> m0",
          "h2dts_compat_container_0008_compat251_std_vector_bad251_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0008_compat251_std_vector_bad251_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT251_STD_VECTOR_X_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0009_COMPAT251_STD_VECTOR_X_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0009_compat251_std_vector_x_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector_x<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat251_std_vector_x_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0009_compat251_std_vector_x_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0009_compat251_std_vector_x_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<double> m0",
          "h2dts_compat_container_0009_compat251_std_vector_x_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0009_compat251_std_vector_x_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT251_STD_VECTOR_DOUBLE_251_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0010_COMPAT251_STD_VECTOR_DOUBLE_251_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<double_251> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0010_compat251_std_vector_double_251_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std::vector<double_251> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat251_std_vector_double_251_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0010_compat251_std_vector_double_251_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0010_compat251_std_vector_double_251_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<double_251> m0",
          "h2dts_compat_container_0010_compat251_std_vector_double_251_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0010_compat251_std_vector_double_251_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT251_STD_VECTOR_DOUBLE_M0
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0011_COMPAT251_STD_VECTOR_DOUBLE_M0
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<double> m0; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0011_compat251_std_vector_double_m0', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat251(std:vector<double> m0 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat251_std_vector_double_m0 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0011_compat251_std_vector_double_m0 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0011_compat251_std_vector_double_m0 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<double> m0",
          "h2dts_compat_container_0011_compat251_std_vector_double_m0 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0011_compat251_std_vector_double_m0 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT252_STD_VECTOR_ITN_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0012_COMPAT252_STD_VECTOR_ITN_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_itn<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0012_compat252_std_vector_itn_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector_itn<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat252_std_vector_itn_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0012_compat252_std_vector_itn_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0012_compat252_std_vector_itn_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_itn<bool> m1",
          "h2dts_compat_container_0012_compat252_std_vector_itn_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0012_compat252_std_vector_itn_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT252_STD_VECTOR_DOUBL_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0013_COMPAT252_STD_VECTOR_DOUBL_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_doubl<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0013_compat252_std_vector_doubl_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector_doubl<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat252_std_vector_doubl_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0013_compat252_std_vector_doubl_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0013_compat252_std_vector_doubl_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_doubl<bool> m1",
          "h2dts_compat_container_0013_compat252_std_vector_doubl_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0013_compat252_std_vector_doubl_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT252_STD_VECTOR_BOOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0014_COMPAT252_STD_VECTOR_BOOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<boool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0014_compat252_std_vector_boool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector<boool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat252_std_vector_boool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0014_compat252_std_vector_boool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0014_compat252_std_vector_boool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<boool> m1",
          "h2dts_compat_container_0014_compat252_std_vector_boool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0014_compat252_std_vector_boool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT252_STD_VECTOR_FLOT_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0015_COMPAT252_STD_VECTOR_FLOT_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_flot<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0015_compat252_std_vector_flot_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector_flot<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat252_std_vector_flot_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0015_compat252_std_vector_flot_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0015_compat252_std_vector_flot_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_flot<bool> m1",
          "h2dts_compat_container_0015_compat252_std_vector_flot_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0015_compat252_std_vector_flot_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT252_STD_VECTOR_LNG_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0016_COMPAT252_STD_VECTOR_LNG_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_lng<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0016_compat252_std_vector_lng_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector_lng<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat252_std_vector_lng_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0016_compat252_std_vector_lng_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0016_compat252_std_vector_lng_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_lng<bool> m1",
          "h2dts_compat_container_0016_compat252_std_vector_lng_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0016_compat252_std_vector_lng_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT252_STD_VECTOR_BAD252_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0017_COMPAT252_STD_VECTOR_BAD252_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_bad252<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0017_compat252_std_vector_bad252_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector_bad252<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat252_std_vector_bad252_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0017_compat252_std_vector_bad252_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0017_compat252_std_vector_bad252_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_bad252<bool> m1",
          "h2dts_compat_container_0017_compat252_std_vector_bad252_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0017_compat252_std_vector_bad252_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT252_STD_VECTOR_X_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0018_COMPAT252_STD_VECTOR_X_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector_x<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0018_compat252_std_vector_x_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector_x<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat252_std_vector_x_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0018_compat252_std_vector_x_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0018_compat252_std_vector_x_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector_x<bool> m1",
          "h2dts_compat_container_0018_compat252_std_vector_x_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0018_compat252_std_vector_x_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT252_STD_VECTOR_BOOL_252_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0019_COMPAT252_STD_VECTOR_BOOL_252_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::vector<bool_252> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0019_compat252_std_vector_bool_252_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std::vector<bool_252> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat252_std_vector_bool_252_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0019_compat252_std_vector_bool_252_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0019_compat252_std_vector_bool_252_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::vector<bool_252> m1",
          "h2dts_compat_container_0019_compat252_std_vector_bool_252_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0019_compat252_std_vector_bool_252_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT252_STD_VECTOR_BOOL_M1
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0020_COMPAT252_STD_VECTOR_BOOL_M1
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:vector<bool> m1; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0020_compat252_std_vector_bool_m1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat252(std:vector<bool> m1 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat252_std_vector_bool_m1 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0020_compat252_std_vector_bool_m1 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0020_compat252_std_vector_bool_m1 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:vector<bool> m1",
          "h2dts_compat_container_0020_compat252_std_vector_bool_m1 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0020_compat252_std_vector_bool_m1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT257_STD_LIST_ITN_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0021_COMPAT257_STD_LIST_ITN_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<itn> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0021_compat257_std_list_itn_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list<itn> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat257_std_list_itn_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0021_compat257_std_list_itn_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0021_compat257_std_list_itn_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<itn> m2",
          "h2dts_compat_container_0021_compat257_std_list_itn_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0021_compat257_std_list_itn_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT257_STD_LIST_DOUBL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0022_COMPAT257_STD_LIST_DOUBL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_doubl<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0022_compat257_std_list_doubl_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list_doubl<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat257_std_list_doubl_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0022_compat257_std_list_doubl_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0022_compat257_std_list_doubl_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_doubl<int> m2",
          "h2dts_compat_container_0022_compat257_std_list_doubl_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0022_compat257_std_list_doubl_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT257_STD_LIST_BOOOL_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0023_COMPAT257_STD_LIST_BOOOL_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_boool<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0023_compat257_std_list_boool_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list_boool<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat257_std_list_boool_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0023_compat257_std_list_boool_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0023_compat257_std_list_boool_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_boool<int> m2",
          "h2dts_compat_container_0023_compat257_std_list_boool_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0023_compat257_std_list_boool_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT257_STD_LIST_FLOT_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0024_COMPAT257_STD_LIST_FLOT_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_flot<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0024_compat257_std_list_flot_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list_flot<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat257_std_list_flot_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0024_compat257_std_list_flot_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0024_compat257_std_list_flot_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_flot<int> m2",
          "h2dts_compat_container_0024_compat257_std_list_flot_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0024_compat257_std_list_flot_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT257_STD_LIST_LNG_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0025_COMPAT257_STD_LIST_LNG_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_lng<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0025_compat257_std_list_lng_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list_lng<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat257_std_list_lng_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0025_compat257_std_list_lng_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0025_compat257_std_list_lng_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_lng<int> m2",
          "h2dts_compat_container_0025_compat257_std_list_lng_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0025_compat257_std_list_lng_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT257_STD_LIST_BAD257_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0026_COMPAT257_STD_LIST_BAD257_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_bad257<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0026_compat257_std_list_bad257_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list_bad257<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat257_std_list_bad257_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0026_compat257_std_list_bad257_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0026_compat257_std_list_bad257_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_bad257<int> m2",
          "h2dts_compat_container_0026_compat257_std_list_bad257_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0026_compat257_std_list_bad257_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT257_STD_LIST_X_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0027_COMPAT257_STD_LIST_X_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_x<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0027_compat257_std_list_x_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list_x<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat257_std_list_x_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0027_compat257_std_list_x_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0027_compat257_std_list_x_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_x<int> m2",
          "h2dts_compat_container_0027_compat257_std_list_x_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0027_compat257_std_list_x_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT257_STD_LIST_INT_257_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0028_COMPAT257_STD_LIST_INT_257_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list<int_257> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0028_compat257_std_list_int_257_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std::list<int_257> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat257_std_list_int_257_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0028_compat257_std_list_int_257_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0028_compat257_std_list_int_257_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list<int_257> m2",
          "h2dts_compat_container_0028_compat257_std_list_int_257_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0028_compat257_std_list_int_257_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT257_STD_LIST_INT_M2
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0029_COMPAT257_STD_LIST_INT_M2
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std:list<int> m2; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0029_compat257_std_list_int_m2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat257(std:list<int> m2 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat257_std_list_int_m2 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0029_compat257_std_list_int_m2 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0029_compat257_std_list_int_m2 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<int> m2",
          "h2dts_compat_container_0029_compat257_std_list_int_m2 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0029_compat257_std_list_int_m2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT258_STD_LIST_ITN_STD_STRING_M3
   * @tc.number SUB_NAPI_H2DTS_COMPAT_CONTAINER_0030_COMPAT258_STD_LIST_ITN_STD_STRING_M3
   * @tc.desc   Stability compat h2dts/container: runCompatSafe(parseFunction+transTskey2Ckey);
   *            malformed type std::list_itn<std::string> m3; strictEqual parsed param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dts_compat_container_0030_compat258_std_list_itn_std_string_m3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat258(std::list_itn<std::string> m3 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat258_std_list_itn_std_string_m3 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_container_0030_compat258_std_list_itn_std_string_m3 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_container_0030_compat258_std_list_itn_std_string_m3 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std::list_itn<std::string> m3",
          "h2dts_compat_container_0030_compat258_std_list_itn_std_string_m3 param type");
      });
    } catch (err) {
      assert.fail(`h2dts_compat_container_0030_compat258_std_list_itn_std_string_m3 execution error: ${err}`);
    }
  });
});
