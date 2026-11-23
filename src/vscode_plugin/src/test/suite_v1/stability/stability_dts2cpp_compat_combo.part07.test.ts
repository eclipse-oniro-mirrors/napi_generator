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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_DAT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_DAT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Dat; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_dat', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Dat): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_dat parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_dat convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0048_dat must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_dat must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dat", "dts2cpp_compat_combo_0048_dat param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_dat execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_BADTYPE285_DATA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_BADTYPE285_DATA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType285_Data); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_badtype285_data', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: BadType285_Data): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_badtype285_data parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_badtype285_data convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_badtype285_data must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_badtype285_data must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType285_Data",
          "dts2cpp_compat_combo_0049_badtype285_data param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_badtype285_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_DATA_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_DATA_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Data_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_data_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Data_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_data_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_data_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_data_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_data_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Data_any",
          "dts2cpp_compat_combo_0050_data_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_data_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_COMPAT285_DATA_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_COMPAT285_DATA_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Data_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_compat285_data_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `class Compat285 { field: Data_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_compat285_data_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_compat285_data_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0051_compat285_data_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0051_compat285_data_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Data_v",
          "dts2cpp_compat_combo_0051_compat285_data_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_compat285_data_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT285_X_DATA_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT285_X_DATA_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Data_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_compat285_x_data_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `type Compat285 = { x: Data_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_compat285_x_data_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_compat285_x_data_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0052_compat285_x_data_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Data_x; }", "dts2cpp_compat_combo_0052_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_compat285_x_data_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_DATA_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_DATA_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Data_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_data_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Data_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_data_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_data_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0053_data_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0053_data_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Data_Z",
          "dts2cpp_compat_combo_0053_data_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_data_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_NUMBR_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_NUMBR_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr[10][20][30]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_numbr_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: numbr[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_numbr_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_numbr_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_numbr_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_numbr_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr[10][20][30]",
          "dts2cpp_compat_combo_0054_numbr_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_numbr_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_NUMBER_S_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_NUMBER_S_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); tag suffix
   *            on array element (number_s[10][20][30]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_number_s_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: number_s[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_number_s_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_number_s_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_number_s_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_number_s_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_s[10][20][30]",
          "dts2cpp_compat_combo_0055_number_s_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_number_s_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_NUMBER_B_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_NUMBER_B_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); tag suffix
   *            on array element (number_b[10][20][30]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_number_b_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: number_b[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_number_b_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_number_b_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0056_number_b_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0056_number_b_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_b[10][20][30]",
          "dts2cpp_compat_combo_0056_number_b_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_number_b_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_NUMBER_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_NUMBER_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat303(a: number[10[[20[[30[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_number_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: number[10[[20[[30[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_number_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_number_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_number_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_number_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10[[20[[30[",
          "dts2cpp_compat_combo_0057_number_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_NUMBER_G303_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_NUMBER_G303_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); uid tag on
   *            array element (number_g303[10][20][30]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_number_g303_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: number_g303[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_number_g303_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_number_g303_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_number_g303_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_number_g303_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_g303[10][20][30]",
          "dts2cpp_compat_combo_0058_number_g303_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_number_g303_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_NUMBER_ANY_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_NUMBER_ANY_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); tag suffix
   *            on array element (number_any[10][20][30]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_number_any_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: number_any[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_number_any_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_number_any_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_number_any_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_number_any_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_any[10][20][30]",
          "dts2cpp_compat_combo_0059_number_any_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_number_any_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_COMPAT303_NUMBER_V_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_COMPAT303_NUMBER_V_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type number_v[10][20][30]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_compat303_number_v_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `class Compat303 { field: number_v[10][20][30]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_compat303_number_v_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_compat303_number_v_10_20_30 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0060_compat303_number_v_10_20_30 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0060_compat303_number_v_10_20_30 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "number_v[10][20][30]",
          "dts2cpp_compat_combo_0060_compat303_number_v_10_20_30 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_compat303_number_v_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT303_X_NUMBER_X_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT303_X_NUMBER_X_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member number_x[10][20][30]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_compat303_x_number_x_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `type Compat303 = { x: number_x[10][20][30]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_compat303_x_number_x_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_compat303_x_number_x_10_20_30 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0061_compat303_x_number_x_10_20_30 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: number_x[10][20][30]; }", "dts2cpp_compat_combo_0061_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_compat303_x_number_x_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_NUMBER_Z_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_NUMBER_Z_10_20_30
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type number_Z[10][20][30]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_number_z_10_20_30', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat303.ts', `function compat303(a: number_Z[10][20][30]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_number_z_10_20_30 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_number_z_10_20_30 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0062_number_z_10_20_30 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0062_number_z_10_20_30 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number_Z[10][20][30]",
          "dts2cpp_compat_combo_0062_number_z_10_20_30 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_number_z_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_USER_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_USER_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type User_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_user_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat304.ts', `function compat304(a: User_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_user_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_user_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_user_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_user_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "User_n",
          "dts2cpp_compat_combo_0063_user_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_user_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_USER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_USER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type User_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_user_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat304.ts', `function compat304(a: User_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_user_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_user_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0064_user_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_user_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "User_s",
          "dts2cpp_compat_combo_0064_user_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_user_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_USER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_USER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type User_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_user_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat304.ts', `function compat304(a: User_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_user_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_user_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0065_user_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0065_user_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "User_b",
          "dts2cpp_compat_combo_0065_user_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_user_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_USE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_USE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Use; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_use', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat304.ts', `function compat304(a: Use): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_use parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_use convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0066_use must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_use must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Use", "dts2cpp_compat_combo_0066_use param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_use execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_BADTYPE304_USER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_BADTYPE304_USER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType304_User); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0067_badtype304_user', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat304.ts', `function compat304(a: BadType304_User): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0067_badtype304_user parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0067_badtype304_user convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0067_badtype304_user must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0067_badtype304_user must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType304_User",
          "dts2cpp_compat_combo_0067_badtype304_user param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0067_badtype304_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_COMPAT305_MAP_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_COMPAT305_MAP_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Map_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_compat305_map_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `class Compat305 { field: Map_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_compat305_map_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_compat305_map_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0011_compat305_map_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0011_compat305_map_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map_v",
          "dts2cpp_compat_combo_0011_compat305_map_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_compat305_map_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_COMPAT305_X_MAP_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_COMPAT305_X_MAP_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Map_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_compat305_x_map_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `type Compat305 = { x: Map_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_compat305_x_map_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_compat305_x_map_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0012_compat305_x_map_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Map_x; }", "dts2cpp_compat_combo_0012_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_compat305_x_map_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_MAPP
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_MAPP
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); container
   *            keyword typo (Mapp); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_mapp', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat305.ts', `function compat305(a: Mapp): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_mapp parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_mapp convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0013_mapp must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_mapp must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapp", "dts2cpp_compat_combo_0013_mapp param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_mapp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_ARRAY_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_ARRAY_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Array_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_array_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: Array_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_array_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_array_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_array_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_array_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Array_n",
          "dts2cpp_compat_combo_0014_array_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_array_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_ARRAY_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_ARRAY_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Array_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_array_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: Array_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_array_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_array_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_array_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_array_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Array_s",
          "dts2cpp_compat_combo_0015_array_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_array_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_ARRAY_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_ARRAY_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Array_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_array_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: Array_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_array_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_array_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0016_array_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0016_array_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Array_b",
          "dts2cpp_compat_combo_0016_array_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_array_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_ARRA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_ARRA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Arra; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_arra', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: Arra): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_arra parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_arra convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0017_arra must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_arra must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Arra", "dts2cpp_compat_combo_0017_arra param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_arra execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_BADTYPE306_ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_BADTYPE306_ARRAY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType306_Array); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_badtype306_array', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: BadType306_Array): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_badtype306_array parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_badtype306_array convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_badtype306_array must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_badtype306_array must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType306_Array",
          "dts2cpp_compat_combo_0018_badtype306_array param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_badtype306_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_ARRAY_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Array_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_array_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: Array_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_array_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_array_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_array_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_array_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Array_any",
          "dts2cpp_compat_combo_0019_array_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_array_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_COMPAT306_ARRAY_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_COMPAT306_ARRAY_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Array_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_compat306_array_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `class Compat306 { field: Array_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_compat306_array_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_compat306_array_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0020_compat306_array_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0020_compat306_array_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_v",
          "dts2cpp_compat_combo_0020_compat306_array_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_compat306_array_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_COMPAT306_X_ARRAY_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_COMPAT306_X_ARRAY_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Array_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_compat306_x_array_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `type Compat306 = { x: Array_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_compat306_x_array_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_compat306_x_array_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0021_compat306_x_array_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Array_x; }", "dts2cpp_compat_combo_0021_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_compat306_x_array_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_ARRAY_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_ARRAY_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Array_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_array_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat306.ts', `function compat306(a: Array_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_array_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_array_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_array_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_array_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Array_Z",
          "dts2cpp_compat_combo_0022_array_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_array_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_BAR_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_BAR_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Bar_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_bar_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: Bar_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_bar_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_bar_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_bar_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_bar_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar_n",
          "dts2cpp_compat_combo_0023_bar_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_bar_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_BAR_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_BAR_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Bar_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_bar_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: Bar_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_bar_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_bar_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_bar_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_bar_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar_s",
          "dts2cpp_compat_combo_0024_bar_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_bar_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_BAR_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_BAR_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Bar_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_bar_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: Bar_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_bar_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_bar_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0025_bar_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0025_bar_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar_b",
          "dts2cpp_compat_combo_0025_bar_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_bar_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_BA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_BA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Ba; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_ba', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: Ba): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_ba parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_ba convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0026_ba must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_ba must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Ba", "dts2cpp_compat_combo_0026_ba param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_ba execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_BADTYPE309_BAR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_BADTYPE309_BAR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType309_Bar); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_badtype309_bar', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: BadType309_Bar): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_badtype309_bar parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_badtype309_bar convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_badtype309_bar must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_badtype309_bar must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType309_Bar",
          "dts2cpp_compat_combo_0027_badtype309_bar param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_badtype309_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_BAR_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_BAR_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Bar_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_bar_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: Bar_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_bar_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_bar_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_bar_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_bar_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar_any",
          "dts2cpp_compat_combo_0028_bar_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_bar_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_COMPAT309_BAR_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_COMPAT309_BAR_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Bar_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_compat309_bar_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `class Compat309 { field: Bar_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_compat309_bar_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_compat309_bar_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0029_compat309_bar_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0029_compat309_bar_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_v",
          "dts2cpp_compat_combo_0029_compat309_bar_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_compat309_bar_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_COMPAT309_X_BAR_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_COMPAT309_X_BAR_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Bar_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_compat309_x_bar_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `type Compat309 = { x: Bar_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_compat309_x_bar_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_compat309_x_bar_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0030_compat309_x_bar_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Bar_x; }", "dts2cpp_compat_combo_0030_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_compat309_x_bar_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_BAR_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_BAR_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Bar_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_bar_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat309.ts', `function compat309(a: Bar_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_bar_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_bar_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0031_bar_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_bar_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar_Z",
          "dts2cpp_compat_combo_0031_bar_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_bar_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_X_NUMBR_Y_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_X_NUMBR_Y_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ x: numbr; y: numbr }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_x_numbr_y_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: numbr; y: numbr }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_x_numbr_y_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_x_numbr_y_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_x_numbr_y_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_x_numbr_y_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: numbr; y: numbr }",
          "dts2cpp_compat_combo_0032_x_numbr_y_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_x_numbr_y_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_X_NUMBER_Y_NUMBER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_X_NUMBER_Y_NUMBER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y: number } | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_x_number_y_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: number; y: number } | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_x_number_y_number_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_x_number_y_number_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_x_number_y_number_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_x_number_y_number_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number } | s",
          "dts2cpp_compat_combo_0033_x_number_y_number_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_x_number_y_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_X_NUMBER_Y_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_X_NUMBER_Y_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y: number } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_x_number_y_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: number; y: number } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_x_number_y_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_x_number_y_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0034_x_number_y_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0034_x_number_y_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number } | b",
          "dts2cpp_compat_combo_0034_x_number_y_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_x_number_y_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_X_NUMBER_Y_NUMBER_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_X_NUMBER_Y_NUMBER_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y: number } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_x_number_y_number_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: number; y: number } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_x_number_y_number_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_x_number_y_number_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0035_x_number_y_number_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0035_x_number_y_number_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number } | br",
          "dts2cpp_compat_combo_0035_x_number_y_number_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_x_number_y_number_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_X_NUMBER_Y_NUMBER_G315
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_X_NUMBER_Y_NUMBER_G315
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y: number } | g315); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_x_number_y_number_g315', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: number; y: number } | g315): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_x_number_y_number_g315 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_x_number_y_number_g315 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_x_number_y_number_g315 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_x_number_y_number_g315 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number } | g315",
          "dts2cpp_compat_combo_0036_x_number_y_number_g315 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_x_number_y_number_g315 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_X_NUMBER_Y_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_X_NUMBER_Y_NUMBER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y: number } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_x_number_y_number_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: number; y: number } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_x_number_y_number_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_x_number_y_number_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_x_number_y_number_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_x_number_y_number_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number } | any",
          "dts2cpp_compat_combo_0037_x_number_y_number_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_x_number_y_number_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_COMPAT315_X_NUMBER_Y_NUMBER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_COMPAT315_X_NUMBER_Y_NUMBER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { x: number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_compat315_x_number_y_number_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `class Compat315 { field: { x: number; y: number } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_compat315_x_number_y_number_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_compat315_x_number_y_number_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0038_compat315_x_number_y_number_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0038_compat315_x_number_y_number_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | v",
          "dts2cpp_compat_combo_0038_compat315_x_number_y_number_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_compat315_x_number_y_number_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_COMPAT315_X_X_NUMBER_Y_NUMBER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_COMPAT315_X_X_NUMBER_Y_NUMBER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { x: number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_compat315_x_x_number_y_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `type Compat315 = { x: { x: number; y: number } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_compat315_x_x_number_y_number_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_compat315_x_x_number_y_number_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0039_compat315_x_x_number_y_number_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { x: number; y: number } | x; }",
          "dts2cpp_compat_combo_0039_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_compat315_x_x_number_y_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_X_NUMBER_Y_NUMBER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_X_NUMBER_Y_NUMBER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y: number } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_x_number_y_number_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat315.ts', `function compat315(a: { x: number; y: number } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_x_number_y_number_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_x_number_y_number_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0040_x_number_y_number_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_x_number_y_number_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number } | Z",
          "dts2cpp_compat_combo_0040_x_number_y_number_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_x_number_y_number_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_X_NUMBR_Y_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_X_NUMBR_Y_STRING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ x: numbr; y?: string }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_x_numbr_y_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: numbr; y?: string }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_x_numbr_y_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_x_numbr_y_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_x_numbr_y_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_x_numbr_y_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: numbr; y?: string }",
          "dts2cpp_compat_combo_0041_x_numbr_y_string param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_x_numbr_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_X_NUMBER_Y_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_X_NUMBER_Y_STRNG
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ({ x: number; y?: strng }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_x_number_y_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: number; y?: strng }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_x_number_y_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_x_number_y_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_x_number_y_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_x_number_y_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: strng }",
          "dts2cpp_compat_combo_0042_x_number_y_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_x_number_y_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_X_NUMBER_Y_STRING_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_X_NUMBER_Y_STRING_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y?: string } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_x_number_y_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: number; y?: string } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_x_number_y_string_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_x_number_y_string_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0043_x_number_y_string_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0043_x_number_y_string_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string } | b",
          "dts2cpp_compat_combo_0043_x_number_y_string_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_x_number_y_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_X_NUMBER_Y_STRING_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_X_NUMBER_Y_STRING_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y?: string } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_x_number_y_string_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: number; y?: string } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_x_number_y_string_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_x_number_y_string_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0044_x_number_y_string_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0044_x_number_y_string_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string } | br",
          "dts2cpp_compat_combo_0044_x_number_y_string_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_x_number_y_string_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_X_NUMBER_Y_STRING_G316
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_X_NUMBER_Y_STRING_G316
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y?: string } | g316); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_x_number_y_string_g316', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: number; y?: string } | g316): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_x_number_y_string_g316 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_x_number_y_string_g316 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_x_number_y_string_g316 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_x_number_y_string_g316 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string } | g316",
          "dts2cpp_compat_combo_0045_x_number_y_string_g316 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_x_number_y_string_g316 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_X_NUMBER_Y_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_X_NUMBER_Y_STRING_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y?: string } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_x_number_y_string_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: number; y?: string } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_x_number_y_string_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_x_number_y_string_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_x_number_y_string_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_x_number_y_string_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string } | any",
          "dts2cpp_compat_combo_0046_x_number_y_string_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_x_number_y_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_COMPAT316_X_NUMBER_Y_STRING_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_COMPAT316_X_NUMBER_Y_STRING_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { x: number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_compat316_x_number_y_string_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `class Compat316 { field: { x: number; y?: string } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_compat316_x_number_y_string_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_compat316_x_number_y_string_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0047_compat316_x_number_y_string_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0047_compat316_x_number_y_string_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string } | v",
          "dts2cpp_compat_combo_0047_compat316_x_number_y_string_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_compat316_x_number_y_string_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_COMPAT316_X_X_NUMBER_Y_STRING_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_COMPAT316_X_X_NUMBER_Y_STRING_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { x: number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_compat316_x_x_number_y_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `type Compat316 = { x: { x: number; y?: string } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_compat316_x_x_number_y_string_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_compat316_x_x_number_y_string_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0048_compat316_x_x_number_y_string_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { x: number; y?: string } | x; }",
          "dts2cpp_compat_combo_0048_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_compat316_x_x_number_y_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_X_NUMBER_Y_STRING_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_X_NUMBER_Y_STRING_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ x: number; y?: string } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_x_number_y_string_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat316.ts', `function compat316(a: { x: number; y?: string } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_x_number_y_string_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_x_number_y_string_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_x_number_y_string_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_x_number_y_string_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string } | Z",
          "dts2cpp_compat_combo_0049_x_number_y_string_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_x_number_y_string_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_INPUT_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_INPUT_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Input_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_input_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: Input_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_input_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_input_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_input_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_input_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Input_n",
          "dts2cpp_compat_combo_0050_input_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_input_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_INPUT_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_INPUT_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Input_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_input_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: Input_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_input_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_input_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_input_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_input_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Input_s",
          "dts2cpp_compat_combo_0051_input_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_input_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_INPUT_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_INPUT_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Input_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_input_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: Input_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_input_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_input_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0052_input_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0052_input_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Input_b",
          "dts2cpp_compat_combo_0052_input_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_input_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_INPU
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_INPU
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Inpu; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_inpu', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: Inpu): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_inpu parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_inpu convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0053_inpu must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0053_inpu must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Inpu", "dts2cpp_compat_combo_0053_inpu param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_inpu execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_BADTYPE319_INPUT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_BADTYPE319_INPUT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType319_Input); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_badtype319_input', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: BadType319_Input): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_badtype319_input parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_badtype319_input convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_badtype319_input must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_badtype319_input must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType319_Input",
          "dts2cpp_compat_combo_0054_badtype319_input param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_badtype319_input execution error: ${err}`);
    }
  });
});
