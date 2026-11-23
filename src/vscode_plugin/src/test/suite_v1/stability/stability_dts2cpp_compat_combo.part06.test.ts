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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_TRUE_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_TRUE_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type true_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_true_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: true_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_true_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_true_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0040_true_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_true_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "true_n",
          "dts2cpp_compat_combo_0040_true_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_true_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_TRUE_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_TRUE_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type true_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_true_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: true_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_true_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_true_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_true_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_true_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "true_s",
          "dts2cpp_compat_combo_0041_true_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_true_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_TRUE_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_TRUE_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type true_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_true_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: true_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_true_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_true_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_true_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_true_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "true_b",
          "dts2cpp_compat_combo_0042_true_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_true_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_TRU
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_TRU
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type tru; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_tru', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: tru): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_tru parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_tru convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0043_tru must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0043_tru must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "tru", "dts2cpp_compat_combo_0043_tru param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_tru execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_BADTYPE225_TRUE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_BADTYPE225_TRUE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType225_true); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_badtype225_true', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: BadType225_true): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_badtype225_true parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_badtype225_true convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0044_badtype225_true must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0044_badtype225_true must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType225_true",
          "dts2cpp_compat_combo_0044_badtype225_true param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_badtype225_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_TRUE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_TRUE_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type true_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_true_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: true_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_true_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_true_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_true_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_true_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "true_any",
          "dts2cpp_compat_combo_0045_true_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_true_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_COMPAT225_TRUE_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_COMPAT225_TRUE_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type true_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_compat225_true_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `class Compat225 { field: true_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_compat225_true_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_compat225_true_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0046_compat225_true_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0046_compat225_true_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_v",
          "dts2cpp_compat_combo_0046_compat225_true_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_compat225_true_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_COMPAT225_X_TRUE_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_COMPAT225_X_TRUE_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member true_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_compat225_x_true_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `type Compat225 = { x: true_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_compat225_x_true_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_compat225_x_true_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0047_compat225_x_true_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: true_x; }", "dts2cpp_compat_combo_0047_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_compat225_x_true_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_TRUE_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_TRUE_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type true_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_true_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat225.ts', `function compat225(a: true_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_true_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_true_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0048_true_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_true_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "true_Z",
          "dts2cpp_compat_combo_0048_true_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_true_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_VOIDFUNC_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_VOIDFUNC_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type voidFunc_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_voidfunc_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: voidFunc_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_voidfunc_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_voidfunc_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_voidfunc_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_voidfunc_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc_n",
          "dts2cpp_compat_combo_0049_voidfunc_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_voidfunc_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_VOIDFUNC_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_VOIDFUNC_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type voidFunc_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_voidfunc_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: voidFunc_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_voidfunc_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_voidfunc_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_voidfunc_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_voidfunc_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc_s",
          "dts2cpp_compat_combo_0050_voidfunc_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_voidfunc_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_VOIDFUNC_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_VOIDFUNC_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type voidFunc_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_voidfunc_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: voidFunc_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_voidfunc_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_voidfunc_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_voidfunc_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_voidfunc_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc_b",
          "dts2cpp_compat_combo_0051_voidfunc_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_voidfunc_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_VOIDFUN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_VOIDFUN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type voidFun; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_voidfun', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: voidFun): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_voidfun parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_voidfun convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0052_voidfun must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0052_voidfun must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFun",
          "dts2cpp_compat_combo_0052_voidfun param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_voidfun execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_BADTYPE234_VOIDFUNC
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_BADTYPE234_VOIDFUNC
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType234_voidFunc); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_badtype234_voidfunc', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: BadType234_voidFunc): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_badtype234_voidfunc parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_badtype234_voidfunc convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0053_badtype234_voidfunc must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0053_badtype234_voidfunc must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType234_voidFunc",
          "dts2cpp_compat_combo_0053_badtype234_voidfunc param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_badtype234_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_VOIDFUNC_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_VOIDFUNC_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type voidFunc_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_voidfunc_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: voidFunc_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_voidfunc_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_voidfunc_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_voidfunc_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_voidfunc_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc_any",
          "dts2cpp_compat_combo_0054_voidfunc_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_voidfunc_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_COMPAT234_VOIDFUNC_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_COMPAT234_VOIDFUNC_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type voidFunc_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_compat234_voidfunc_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `class Compat234 { field: voidFunc_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_compat234_voidfunc_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_compat234_voidfunc_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0055_compat234_voidfunc_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0055_compat234_voidfunc_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_v",
          "dts2cpp_compat_combo_0055_compat234_voidfunc_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_compat234_voidfunc_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_COMPAT234_X_VOIDFUNC_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_COMPAT234_X_VOIDFUNC_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member voidFunc_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_compat234_x_voidfunc_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `type Compat234 = { x: voidFunc_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_compat234_x_voidfunc_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_compat234_x_voidfunc_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0056_compat234_x_voidfunc_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: voidFunc_x; }", "dts2cpp_compat_combo_0056_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_compat234_x_voidfunc_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_VOIDFUNC_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_VOIDFUNC_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type voidFunc_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_voidfunc_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat234.ts', `function compat234(a: voidFunc_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_voidfunc_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_voidfunc_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_voidfunc_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_voidfunc_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc_Z",
          "dts2cpp_compat_combo_0057_voidfunc_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_voidfunc_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_STRING_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_STRING_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & {} | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_string_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: string & {} | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_string_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_string_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_string_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_string_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {} | n",
          "dts2cpp_compat_combo_0058_string_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_string_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_STRNG
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng & {}); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: strng & {}): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng & {}",
          "dts2cpp_compat_combo_0059_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_STRING_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_STRING_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & {} | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: string & {} | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_string_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_string_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_string_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_string_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {} | b",
          "dts2cpp_compat_combo_0060_string_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_STRING_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_STRING_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & {} | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_string_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: string & {} | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_string_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_string_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0061_string_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0061_string_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {} | br",
          "dts2cpp_compat_combo_0061_string_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_string_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_STRING_G261
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_STRING_G261
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & {} | g261); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_string_g261', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: string & {} | g261): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_string_g261 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_string_g261 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0062_string_g261 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0062_string_g261 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {} | g261",
          "dts2cpp_compat_combo_0062_string_g261 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_string_g261 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_STRING_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & {} | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_string_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: string & {} | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_string_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_string_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_string_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_string_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {} | any",
          "dts2cpp_compat_combo_0063_string_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_COMPAT261_STRING_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_COMPAT261_STRING_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type string & {} | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_compat261_string_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `class Compat261 { field: string & {} | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_compat261_string_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_compat261_string_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0064_compat261_string_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0064_compat261_string_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | v",
          "dts2cpp_compat_combo_0064_compat261_string_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_compat261_string_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_COMPAT261_X_STRING_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_COMPAT261_X_STRING_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member string & {} | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_compat261_x_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `type Compat261 = { x: string & {} | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_compat261_x_string_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_compat261_x_string_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0065_compat261_x_string_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: string & {} | x; }", "dts2cpp_compat_combo_0065_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_compat261_x_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_STRING_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_STRING_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & {} | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_string_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat261.ts', `function compat261(a: string & {} | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_string_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_string_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0066_string_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_string_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {} | Z",
          "dts2cpp_compat_combo_0066_string_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_string_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_ID_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_ID_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ id: numbr }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0067_id_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat263.ts', `function compat263(a: { id: numbr }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0067_id_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0067_id_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0067_id_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0067_id_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: numbr }",
          "dts2cpp_compat_combo_0067_id_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0067_id_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_T_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_T_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type T_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_t_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `function compat276(a: T_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_t_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_t_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0011_t_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_t_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T_b", "dts2cpp_compat_combo_0011_t_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_t_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_TX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_TX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Tx; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_tx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `function compat276(a: Tx): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_tx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_tx convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0012_tx must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_tx must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Tx", "dts2cpp_compat_combo_0012_tx param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_tx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_BADTYPE276_T
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_BADTYPE276_T
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType276_T); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_badtype276_t', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `function compat276(a: BadType276_T): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_badtype276_t parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_badtype276_t convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0013_badtype276_t must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_badtype276_t must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType276_T",
          "dts2cpp_compat_combo_0013_badtype276_t param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_badtype276_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_T_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_T_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type T_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_t_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `function compat276(a: T_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_t_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_t_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_t_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_t_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T_any",
          "dts2cpp_compat_combo_0014_t_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_t_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_COMPAT276_T_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_COMPAT276_T_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type T_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_compat276_t_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `class Compat276 { field: T_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_compat276_t_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_compat276_t_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0015_compat276_t_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0015_compat276_t_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T_v",
          "dts2cpp_compat_combo_0015_compat276_t_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_compat276_t_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT276_X_T_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT276_X_T_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member T_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_compat276_x_t_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `type Compat276 = { x: T_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_compat276_x_t_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_compat276_x_t_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0016_compat276_x_t_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: T_x; }", "dts2cpp_compat_combo_0016_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_compat276_x_t_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_T_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_T_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type T_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_t_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat276.ts', `function compat276(a: T_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_t_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_t_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0017_t_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_t_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T_Z", "dts2cpp_compat_combo_0017_t_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_t_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_C_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_C_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type C_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_c_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: C_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_c_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_c_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0018_c_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_c_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "C_n", "dts2cpp_compat_combo_0018_c_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_c_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_C_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_C_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type C_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_c_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: C_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_c_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_c_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0019_c_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_c_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "C_s", "dts2cpp_compat_combo_0019_c_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_c_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_C_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_C_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type C_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_c_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: C_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_c_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_c_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0020_c_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_c_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "C_b", "dts2cpp_compat_combo_0020_c_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_c_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_CX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_CX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Cx; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_cx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: Cx): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_cx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_cx convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0021_cx must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_cx must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Cx", "dts2cpp_compat_combo_0021_cx param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_cx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_BADTYPE277_C
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_BADTYPE277_C
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType277_C); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_badtype277_c', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: BadType277_C): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_badtype277_c parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_badtype277_c convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_badtype277_c must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_badtype277_c must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType277_C",
          "dts2cpp_compat_combo_0022_badtype277_c param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_badtype277_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_C_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_C_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type C_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_c_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: C_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_c_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_c_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_c_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_c_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "C_any",
          "dts2cpp_compat_combo_0023_c_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_c_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_COMPAT277_C_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_COMPAT277_C_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type C_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_compat277_c_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `class Compat277 { field: C_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_compat277_c_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_compat277_c_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0024_compat277_c_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0024_compat277_c_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "C_v",
          "dts2cpp_compat_combo_0024_compat277_c_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_compat277_c_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT277_X_C_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT277_X_C_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member C_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_compat277_x_c_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `type Compat277 = { x: C_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_compat277_x_c_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_compat277_x_c_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0025_compat277_x_c_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: C_x; }", "dts2cpp_compat_combo_0025_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_compat277_x_c_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_C_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_C_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type C_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_c_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat277.ts', `function compat277(a: C_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_c_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_c_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0026_c_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_c_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "C_Z", "dts2cpp_compat_combo_0026_c_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_c_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_FOO_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_FOO_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Foo_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_foo_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Foo_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_foo_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_foo_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_foo_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_foo_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo_n",
          "dts2cpp_compat_combo_0027_foo_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_foo_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_FOO_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_FOO_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Foo_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_foo_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Foo_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_foo_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_foo_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_foo_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_foo_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo_s",
          "dts2cpp_compat_combo_0028_foo_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_foo_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_FOO_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_FOO_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Foo_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_foo_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Foo_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_foo_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_foo_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_foo_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_foo_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo_b",
          "dts2cpp_compat_combo_0029_foo_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_foo_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_FO
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_FO
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Fo; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_fo', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Fo): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_fo parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_fo convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0030_fo must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_fo must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Fo", "dts2cpp_compat_combo_0030_fo param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_fo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_BADTYPE283_FOO
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_BADTYPE283_FOO
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType283_Foo); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_badtype283_foo', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: BadType283_Foo): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_badtype283_foo parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_badtype283_foo convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0031_badtype283_foo must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_badtype283_foo must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType283_Foo",
          "dts2cpp_compat_combo_0031_badtype283_foo param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_badtype283_foo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_FOO_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_FOO_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Foo_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_foo_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Foo_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_foo_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_foo_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_foo_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_foo_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo_any",
          "dts2cpp_compat_combo_0032_foo_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_foo_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_COMPAT283_FOO_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_COMPAT283_FOO_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Foo_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_compat283_foo_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `class Compat283 { field: Foo_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_compat283_foo_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_compat283_foo_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0033_compat283_foo_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0033_compat283_foo_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Foo_v",
          "dts2cpp_compat_combo_0033_compat283_foo_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_compat283_foo_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT283_X_FOO_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT283_X_FOO_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Foo_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_compat283_x_foo_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `type Compat283 = { x: Foo_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_compat283_x_foo_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_compat283_x_foo_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0034_compat283_x_foo_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Foo_x; }", "dts2cpp_compat_combo_0034_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_compat283_x_foo_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_FOO_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_FOO_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Foo_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_foo_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Foo_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_foo_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_foo_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0035_foo_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0035_foo_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo_Z",
          "dts2cpp_compat_combo_0035_foo_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_foo_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_HANDLER_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_HANDLER_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Handler_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_handler_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Handler_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_handler_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_handler_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_handler_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_handler_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler_n",
          "dts2cpp_compat_combo_0036_handler_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_handler_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_HANDLER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_HANDLER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Handler_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_handler_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Handler_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_handler_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_handler_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_handler_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_handler_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler_s",
          "dts2cpp_compat_combo_0037_handler_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_handler_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_HANDLER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_HANDLER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Handler_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_handler_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Handler_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_handler_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_handler_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0038_handler_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0038_handler_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler_b",
          "dts2cpp_compat_combo_0038_handler_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_handler_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_HANDLE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_HANDLE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Handle; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_handle', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Handle): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_handle parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_handle convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0039_handle must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_handle must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Handle",
          "dts2cpp_compat_combo_0039_handle param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_handle execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_BADTYPE284_HANDLER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_BADTYPE284_HANDLER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType284_Handler); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_badtype284_handler', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: BadType284_Handler): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_badtype284_handler parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_badtype284_handler convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0040_badtype284_handler must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_badtype284_handler must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType284_Handler",
          "dts2cpp_compat_combo_0040_badtype284_handler param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_badtype284_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_HANDLER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_HANDLER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Handler_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_handler_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Handler_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_handler_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_handler_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_handler_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_handler_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler_any",
          "dts2cpp_compat_combo_0041_handler_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_handler_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_COMPAT284_HANDLER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_COMPAT284_HANDLER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Handler_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_compat284_handler_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `class Compat284 { field: Handler_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_compat284_handler_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_compat284_handler_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0042_compat284_handler_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0042_compat284_handler_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Handler_v",
          "dts2cpp_compat_combo_0042_compat284_handler_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_compat284_handler_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT284_X_HANDLER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT284_X_HANDLER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Handler_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_compat284_x_handler_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `type Compat284 = { x: Handler_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_compat284_x_handler_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_compat284_x_handler_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0043_compat284_x_handler_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Handler_x; }", "dts2cpp_compat_combo_0043_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_compat284_x_handler_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_HANDLER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_HANDLER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Handler_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_handler_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Handler_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_handler_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_handler_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0044_handler_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0044_handler_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler_Z",
          "dts2cpp_compat_combo_0044_handler_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_handler_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_DATA_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_DATA_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Data_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_data_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Data_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_data_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_data_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_data_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_data_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Data_n",
          "dts2cpp_compat_combo_0045_data_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_data_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_DATA_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_DATA_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Data_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_data_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Data_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_data_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_data_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_data_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_data_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Data_s",
          "dts2cpp_compat_combo_0046_data_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_data_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_DATA_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_DATA_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Data_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_data_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Data_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_data_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_data_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0047_data_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0047_data_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Data_b",
          "dts2cpp_compat_combo_0047_data_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_data_b execution error: ${err}`);
    }
  });
});
