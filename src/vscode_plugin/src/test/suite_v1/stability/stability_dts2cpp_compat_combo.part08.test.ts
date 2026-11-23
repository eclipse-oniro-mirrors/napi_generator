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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_INPUT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_INPUT_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Input_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_input_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: Input_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_input_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_input_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_input_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_input_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Input_any",
          "dts2cpp_compat_combo_0055_input_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_input_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_COMPAT319_INPUT_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_COMPAT319_INPUT_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Input_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_compat319_input_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `class Compat319 { field: Input_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_compat319_input_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_compat319_input_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0056_compat319_input_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0056_compat319_input_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_v",
          "dts2cpp_compat_combo_0056_compat319_input_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_compat319_input_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_COMPAT319_X_INPUT_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_COMPAT319_X_INPUT_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Input_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_compat319_x_input_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `type Compat319 = { x: Input_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_compat319_x_input_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_compat319_x_input_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0057_compat319_x_input_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Input_x; }", "dts2cpp_compat_combo_0057_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_compat319_x_input_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_INPUT_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_INPUT_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Input_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_input_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat319.ts', `function compat319(a: Input_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_input_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_input_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_input_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_input_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Input_Z",
          "dts2cpp_compat_combo_0058_input_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_input_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_OUTPUT_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_OUTPUT_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Output_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_output_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: Output_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_output_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_output_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_output_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_output_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Output_n",
          "dts2cpp_compat_combo_0059_output_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_output_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_OUTPUT_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_OUTPUT_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Output_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_output_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: Output_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_output_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_output_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_output_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_output_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Output_s",
          "dts2cpp_compat_combo_0060_output_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_output_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_OUTPUT_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_OUTPUT_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Output_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_output_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: Output_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_output_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_output_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0061_output_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0061_output_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Output_b",
          "dts2cpp_compat_combo_0061_output_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_output_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_OUTPU
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_OUTPU
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Outpu; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_outpu', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: Outpu): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_outpu parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_outpu convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0062_outpu must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0062_outpu must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Outpu",
          "dts2cpp_compat_combo_0062_outpu param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_outpu execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_BADTYPE320_OUTPUT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_BADTYPE320_OUTPUT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType320_Output); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_badtype320_output', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: BadType320_Output): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_badtype320_output parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_badtype320_output convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_badtype320_output must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_badtype320_output must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType320_Output",
          "dts2cpp_compat_combo_0063_badtype320_output param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_badtype320_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_OUTPUT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_OUTPUT_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Output_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_output_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: Output_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_output_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_output_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0064_output_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_output_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Output_any",
          "dts2cpp_compat_combo_0064_output_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_output_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_COMPAT320_OUTPUT_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_COMPAT320_OUTPUT_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Output_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_compat320_output_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `class Compat320 { field: Output_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_compat320_output_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_compat320_output_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0065_compat320_output_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0065_compat320_output_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Output_v",
          "dts2cpp_compat_combo_0065_compat320_output_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_compat320_output_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_COMPAT320_X_OUTPUT_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_COMPAT320_X_OUTPUT_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Output_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_compat320_x_output_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `type Compat320 = { x: Output_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_compat320_x_output_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_compat320_x_output_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0066_compat320_x_output_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Output_x; }", "dts2cpp_compat_combo_0066_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_compat320_x_output_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_OUTPUT_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_OUTPUT_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Output_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0067_output_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat320.ts', `function compat320(a: Output_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0067_output_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0067_output_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0067_output_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0067_output_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Output_Z",
          "dts2cpp_compat_combo_0067_output_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0067_output_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_E_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_E_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type E_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_e_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `function compat322(a: E_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_e_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_e_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0011_e_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_e_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "E_s", "dts2cpp_compat_combo_0011_e_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_e_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_E_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_E_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type E_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_e_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `function compat322(a: E_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_e_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_e_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0012_e_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_e_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "E_b", "dts2cpp_compat_combo_0012_e_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_e_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_EX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_EX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Ex; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_ex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `function compat322(a: Ex): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_ex parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_ex convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0013_ex must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_ex must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Ex", "dts2cpp_compat_combo_0013_ex param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_ex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_BADTYPE322_E
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_BADTYPE322_E
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType322_E); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_badtype322_e', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `function compat322(a: BadType322_E): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_badtype322_e parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_badtype322_e convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_badtype322_e must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_badtype322_e must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType322_E",
          "dts2cpp_compat_combo_0014_badtype322_e param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_badtype322_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_E_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_E_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type E_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_e_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `function compat322(a: E_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_e_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_e_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_e_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_e_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "E_any",
          "dts2cpp_compat_combo_0015_e_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_e_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT322_E_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_COMPAT322_E_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type E_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_compat322_e_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `class Compat322 { field: E_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_compat322_e_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_compat322_e_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0016_compat322_e_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0016_compat322_e_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_v",
          "dts2cpp_compat_combo_0016_compat322_e_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_compat322_e_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_COMPAT322_X_E_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_COMPAT322_X_E_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member E_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_compat322_x_e_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `type Compat322 = { x: E_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_compat322_x_e_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_compat322_x_e_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0017_compat322_x_e_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: E_x; }", "dts2cpp_compat_combo_0017_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_compat322_x_e_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_E_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_E_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type E_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_e_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat322.ts', `function compat322(a: E_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_e_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_e_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0018_e_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_e_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "E_Z", "dts2cpp_compat_combo_0018_e_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_e_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_TYPEOF_GLOBALTHIS_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_TYPEOF_GLOBALTHIS_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof globalThis | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_typeof_globalthis_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThis | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_typeof_globalthis_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_typeof_globalthis_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_typeof_globalthis_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_typeof_globalthis_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis | n",
          "dts2cpp_compat_combo_0019_typeof_globalthis_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_typeof_globalthis_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_TYPEOF_GLOBALTHIS_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_TYPEOF_GLOBALTHIS_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof globalThis | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_typeof_globalthis_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThis | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_typeof_globalthis_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_typeof_globalthis_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0020_typeof_globalthis_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_typeof_globalthis_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis | s",
          "dts2cpp_compat_combo_0020_typeof_globalthis_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_typeof_globalthis_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_TYPEOF_GLOBALTHIS_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_TYPEOF_GLOBALTHIS_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof globalThis | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_typeof_globalthis_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThis | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_typeof_globalthis_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_typeof_globalthis_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_typeof_globalthis_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_typeof_globalthis_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis | b",
          "dts2cpp_compat_combo_0021_typeof_globalthis_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_typeof_globalthis_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_TYPEOF_GLOBALTHI
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_TYPEOF_GLOBALTHI
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type typeof globalThi; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_typeof_globalthi', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThi): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_typeof_globalthi parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_typeof_globalthi convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_typeof_globalthi must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_typeof_globalthi must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThi",
          "dts2cpp_compat_combo_0022_typeof_globalthi param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_typeof_globalthi execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_TYPEOF_GLOBALTHIS_G324
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_TYPEOF_GLOBALTHIS_G324
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof globalThis | g324); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_typeof_globalthis_g324', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThis | g324): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_typeof_globalthis_g324 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_typeof_globalthis_g324 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_typeof_globalthis_g324 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_typeof_globalthis_g324 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis | g324",
          "dts2cpp_compat_combo_0023_typeof_globalthis_g324 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_typeof_globalthis_g324 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_TYPEOF_GLOBALTHIS_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_TYPEOF_GLOBALTHIS_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof globalThis | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_typeof_globalthis_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThis | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_typeof_globalthis_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_typeof_globalthis_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_typeof_globalthis_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_typeof_globalthis_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis | any",
          "dts2cpp_compat_combo_0024_typeof_globalthis_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_typeof_globalthis_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT324_TYPEOF_GLOBALTHIS_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT324_TYPEOF_GLOBALTHIS_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type typeof globalThis | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `class Compat324 { field: typeof globalThis | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | v",
          "dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_compat324_typeof_globalthis_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_COMPAT324_X_TYPEOF_GLOBALTHIS_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_COMPAT324_X_TYPEOF_GLOBALTHIS_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member typeof globalThis | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_compat324_x_typeof_globalthis_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `type Compat324 = { x: typeof globalThis | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_compat324_x_typeof_globalthis_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_compat324_x_typeof_globalthis_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0026_compat324_x_typeof_globalthis_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: typeof globalThis | x; }",
          "dts2cpp_compat_combo_0026_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_compat324_x_typeof_globalthis_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_TYPEOF_GLOBALTHIS_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_TYPEOF_GLOBALTHIS_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof globalThis | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_typeof_globalthis_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat324.ts', `function compat324(a: typeof globalThis | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_typeof_globalthis_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_typeof_globalthis_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_typeof_globalthis_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_typeof_globalthis_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis | Z",
          "dts2cpp_compat_combo_0027_typeof_globalthis_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_typeof_globalthis_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_UNKNOWN_NULL_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_UNKNOWN_NULL_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_unknown_null_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_unknown_null_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_unknown_null_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_unknown_null_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_unknown_null_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | n",
          "dts2cpp_compat_combo_0028_unknown_null_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_unknown_null_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_UNKNOWN_NULL_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_UNKNOWN_NULL_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_unknown_null_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_unknown_null_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_unknown_null_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_unknown_null_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_unknown_null_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | s",
          "dts2cpp_compat_combo_0029_unknown_null_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_unknown_null_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_UNKNOWN_NULL_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_UNKNOWN_NULL_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_unknown_null_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_unknown_null_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_unknown_null_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_unknown_null_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_unknown_null_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | b",
          "dts2cpp_compat_combo_0030_unknown_null_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_unknown_null_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_UNKNOWN_NULL_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_UNKNOWN_NULL_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_unknown_null_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_unknown_null_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_unknown_null_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0031_unknown_null_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_unknown_null_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | br",
          "dts2cpp_compat_combo_0031_unknown_null_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_unknown_null_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_UNKNOWN_NULL_G325
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_UNKNOWN_NULL_G325
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | g325); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_unknown_null_g325', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | g325): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_unknown_null_g325 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_unknown_null_g325 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_unknown_null_g325 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_unknown_null_g325 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | g325",
          "dts2cpp_compat_combo_0032_unknown_null_g325 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_unknown_null_g325 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_UNKNOWN_NULL_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_UNKNOWN_NULL_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_unknown_null_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_unknown_null_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_unknown_null_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_unknown_null_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_unknown_null_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | any",
          "dts2cpp_compat_combo_0033_unknown_null_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_unknown_null_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT325_UNKNOWN_NULL_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT325_UNKNOWN_NULL_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type unknown & null | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_compat325_unknown_null_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `class Compat325 { field: unknown & null | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_compat325_unknown_null_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_compat325_unknown_null_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0034_compat325_unknown_null_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0034_compat325_unknown_null_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | v",
          "dts2cpp_compat_combo_0034_compat325_unknown_null_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_compat325_unknown_null_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_COMPAT325_X_UNKNOWN_NULL_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_COMPAT325_X_UNKNOWN_NULL_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member unknown & null | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_compat325_x_unknown_null_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `type Compat325 = { x: unknown & null | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_compat325_x_unknown_null_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_compat325_x_unknown_null_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0035_compat325_x_unknown_null_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: unknown & null | x; }", "dts2cpp_compat_combo_0035_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_compat325_x_unknown_null_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_UNKNOWN_NULL_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_UNKNOWN_NULL_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (unknown & null | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_unknown_null_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat325.ts', `function compat325(a: unknown & null | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_unknown_null_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_unknown_null_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_unknown_null_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_unknown_null_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null | Z",
          "dts2cpp_compat_combo_0036_unknown_null_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_unknown_null_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_STRING_TAG_X_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_STRING_TAG_X_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { tag: "x" } | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_string_tag_x_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: string & { tag: "x" } | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_string_tag_x_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_string_tag_x_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_string_tag_x_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_string_tag_x_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" } | n",
          "dts2cpp_compat_combo_0037_string_tag_x_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_string_tag_x_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_STRNG_TAG_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_STRNG_TAG_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng & { tag: "x" }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_strng_tag_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: strng & { tag: "x" }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_strng_tag_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_strng_tag_x convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0038_strng_tag_x must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0038_strng_tag_x must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng & { tag: \"x\" }",
          "dts2cpp_compat_combo_0038_strng_tag_x param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_strng_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_STRING_TAG_X_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_STRING_TAG_X_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { tag: "x" } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_string_tag_x_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: string & { tag: "x" } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_string_tag_x_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_string_tag_x_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0039_string_tag_x_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_string_tag_x_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" } | b",
          "dts2cpp_compat_combo_0039_string_tag_x_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_string_tag_x_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_STRING_TAG_X_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_STRING_TAG_X_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { tag: "x" } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_string_tag_x_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: string & { tag: "x" } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_string_tag_x_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_string_tag_x_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0040_string_tag_x_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_string_tag_x_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" } | br",
          "dts2cpp_compat_combo_0040_string_tag_x_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_string_tag_x_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_STRING_TAG_X_G328
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_STRING_TAG_X_G328
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { tag: "x" } | g328); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_string_tag_x_g328', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: string & { tag: "x" } | g328): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_string_tag_x_g328 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_string_tag_x_g328 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_string_tag_x_g328 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_string_tag_x_g328 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" } | g328",
          "dts2cpp_compat_combo_0041_string_tag_x_g328 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_string_tag_x_g328 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_STRING_TAG_X_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_STRING_TAG_X_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { tag: "x" } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_string_tag_x_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: string & { tag: "x" } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_string_tag_x_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_string_tag_x_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_string_tag_x_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_string_tag_x_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" } | any",
          "dts2cpp_compat_combo_0042_string_tag_x_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_string_tag_x_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT328_STRING_TAG_X_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT328_STRING_TAG_X_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type string & { tag: "x" } | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_compat328_string_tag_x_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `class Compat328 { field: string & { tag: "x" } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_compat328_string_tag_x_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_compat328_string_tag_x_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0043_compat328_string_tag_x_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0043_compat328_string_tag_x_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | v",
          "dts2cpp_compat_combo_0043_compat328_string_tag_x_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_compat328_string_tag_x_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_COMPAT328_X_STRING_TAG_X_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_COMPAT328_X_STRING_TAG_X_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member string & { tag: "x" } | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_compat328_x_string_tag_x_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `type Compat328 = { x: string & { tag: "x" } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_compat328_x_string_tag_x_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_compat328_x_string_tag_x_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0044_compat328_x_string_tag_x_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: string & { tag: \"x\" } | x; }",
          "dts2cpp_compat_combo_0044_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_compat328_x_string_tag_x_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_STRING_TAG_X_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_STRING_TAG_X_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { tag: "x" } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_string_tag_x_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat328.ts', `function compat328(a: string & { tag: "x" } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_string_tag_x_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_string_tag_x_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_string_tag_x_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_string_tag_x_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" } | Z",
          "dts2cpp_compat_combo_0045_string_tag_x_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_string_tag_x_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_ID_NUMBR_NAME_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_ID_NUMBR_NAME_STRING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ id: numbr; name: string }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_id_numbr_name_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: numbr; name: string }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_id_numbr_name_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_id_numbr_name_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_id_numbr_name_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_id_numbr_name_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: numbr; name: string }",
          "dts2cpp_compat_combo_0046_id_numbr_name_string param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_id_numbr_name_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_ID_NUMBER_NAME_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_ID_NUMBER_NAME_STRNG
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ({ id: number; name: strng }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_id_number_name_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: number; name: strng }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_id_number_name_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_id_number_name_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0047_id_number_name_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0047_id_number_name_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: strng }",
          "dts2cpp_compat_combo_0047_id_number_name_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_id_number_name_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_ID_NUMBER_NAME_STRING_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_ID_NUMBER_NAME_STRING_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ id: number; name: string } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_id_number_name_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: number; name: string } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_id_number_name_string_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_id_number_name_string_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0048_id_number_name_string_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_id_number_name_string_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string } | b",
          "dts2cpp_compat_combo_0048_id_number_name_string_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_id_number_name_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_ID_NUMBER_NAME_STRING_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_ID_NUMBER_NAME_STRING_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ id: number; name: string } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_id_number_name_string_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: number; name: string } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_id_number_name_string_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_id_number_name_string_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_id_number_name_string_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_id_number_name_string_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string } | br",
          "dts2cpp_compat_combo_0049_id_number_name_string_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_id_number_name_string_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_ID_NUMBER_NAME_STRING_G329
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_ID_NUMBER_NAME_STRING_G329
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ id: number; name: string } | g329); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_id_number_name_string_g329', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: number; name: string } | g329): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_id_number_name_string_g329 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_id_number_name_string_g329 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_id_number_name_string_g329 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_id_number_name_string_g329 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string } | g329",
          "dts2cpp_compat_combo_0050_id_number_name_string_g329 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_id_number_name_string_g329 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_ID_NUMBER_NAME_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_ID_NUMBER_NAME_STRING_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ id: number; name: string } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_id_number_name_string_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: number; name: string } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_id_number_name_string_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_id_number_name_string_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_id_number_name_string_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_id_number_name_string_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string } | any",
          "dts2cpp_compat_combo_0051_id_number_name_string_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_id_number_name_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT329_ID_NUMBER_NAME_STRING_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT329_ID_NUMBER_NAME_STRING_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { id: number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_compat329_id_number_name_string_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `class Compat329 { field: { id: number; name: string } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_compat329_id_number_name_string_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_compat329_id_number_name_string_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0052_compat329_id_number_name_string_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0052_compat329_id_number_name_string_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number; name: string } | v",
          "dts2cpp_compat_combo_0052_compat329_id_number_name_string_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_compat329_id_number_name_string_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_COMPAT329_X_ID_NUMBER_NAME_STRING_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_COMPAT329_X_ID_NUMBER_NAME_STRING_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { id: number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_compat329_x_id_number_name_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `type Compat329 = { x: { id: number; name: string } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_compat329_x_id_number_name_string_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_compat329_x_id_number_name_string_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0053_compat329_x_id_number_name_string_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { id: number; name: string } | x; }",
          "dts2cpp_compat_combo_0053_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_compat329_x_id_number_name_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_ID_NUMBER_NAME_STRING_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_ID_NUMBER_NAME_STRING_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ id: number; name: string } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_id_number_name_string_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat329.ts', `function compat329(a: { id: number; name: string } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_id_number_name_string_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_id_number_name_string_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_id_number_name_string_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_id_number_name_string_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string } | Z",
          "dts2cpp_compat_combo_0054_id_number_name_string_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_id_number_name_string_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_A_NUMBR_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_A_NUMBR_B_STRING_C_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ a: numbr; b: string; c: boolean }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `function compat364(a: { a: numbr; b: string; c: boolean }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: numbr; b: string; c: boolean }",
          "dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_a_numbr_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_A_NUMBER_B_STRNG_C_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_A_NUMBER_B_STRNG_C_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ({ a: number; b: strng; c: boolean }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `function compat364(a: { a: number; b: strng; c: boolean }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: strng; c: boolean }",
          "dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_a_number_b_strng_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_A_NUMBER_B_STRING_C_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_A_NUMBER_B_STRING_C_BOOLEA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolea }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_a_number_b_string_c_boolea', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `function compat364(a: { a: number; b: string; c: boolea }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_a_number_b_string_c_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_a_number_b_string_c_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_a_number_b_string_c_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_a_number_b_string_c_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolea }",
          "dts2cpp_compat_combo_0057_a_number_b_string_c_boolea param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_a_number_b_string_c_boolea execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_A_NUMBER_B_STRING_C_BOOLEAN_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_A_NUMBER_B_STRING_C_BOOLEAN_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `
          function compat364(a: { a: number; b: string; c: boolean } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean } | br",
          "dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_a_number_b_string_c_boolean_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_A_NUMBER_B_STRING_C_BOOLEAN_G364
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_A_NUMBER_B_STRING_C_BOOLEAN_G364
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | g364); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `
          function compat364(a: { a: number; b: string; c: boolean } | g364): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean } | g364",
          "dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_a_number_b_string_c_boolean_g364 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_A_NUMBER_B_STRING_C_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_A_NUMBER_B_STRING_C_BOOLEAN_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `
          function compat364(a: { a: number; b: string; c: boolean } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean } | any",
          "dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_a_number_b_string_c_boolean_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT364_A_NUMBER_B_STRING_C_BOOLEAN_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT364_A_NUMBER_B_STRING_C_BOOLEAN_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { a: number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `
          class Compat364 { field: { a: number; b: string; c: boolean } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: string; c: boolean } | v",
          "dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_compat364_a_number_b_string_c_boolean_v execution error: ${err}`);
    }
  });
});
