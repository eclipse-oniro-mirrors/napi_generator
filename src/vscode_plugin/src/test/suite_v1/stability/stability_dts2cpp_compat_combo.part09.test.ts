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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_COMPAT364_X_A_NUMBER_B_STRING_C_BOOLEAN_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_COMPAT364_X_A_NUMBER_B_STRING_C_BOOLEAN_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { a: number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_compat364_x_a_number_b_string_c_boolean_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `type Compat364 = { x: { a: number; b: string; c: boolean } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_compat364_x_a_number_b_string_c_boolean_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_compat364_x_a_number_b_string_c_boolean_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0062_compat364_x_a_number_b_string_c_boolean_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { a: number; b: string; c: boolean } | x; }",
          "dts2cpp_compat_combo_0062_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_compat364_x_a_number_b_string_c_boolean_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_A_NUMBER_B_STRING_C_BOOLEAN_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_A_NUMBER_B_STRING_C_BOOLEAN_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat364.ts', `
          function compat364(a: { a: number; b: string; c: boolean } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean } | Z",
          "dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_a_number_b_string_c_boolean_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_A_B_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_A_B_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ a: { b: numbr } }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_a_b_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat365.ts', `function compat365(a: { a: { b: numbr } }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_a_b_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_a_b_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0064_a_b_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_a_b_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: numbr } }",
          "dts2cpp_compat_combo_0064_a_b_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_a_b_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_A_B_NUMBER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_A_B_NUMBER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: { b: number } } | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_a_b_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat365.ts', `function compat365(a: { a: { b: number } } | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_a_b_number_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_a_b_number_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0065_a_b_number_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0065_a_b_number_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } } | s",
          "dts2cpp_compat_combo_0065_a_b_number_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_a_b_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_A_B_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_A_B_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: { b: number } } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_a_b_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat365.ts', `function compat365(a: { a: { b: number } } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_a_b_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_a_b_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0066_a_b_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_a_b_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } } | b",
          "dts2cpp_compat_combo_0066_a_b_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_a_b_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_G367
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_G367
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (中文类型 | g367); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_g367', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat367.ts', `function compat367(a: 中文类型 | g367): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_g367 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_g367 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0011_g367 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_g367 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型 | g367",
          "dts2cpp_compat_combo_0011_g367 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_g367 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (中文类型 | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat367.ts', `function compat367(a: 中文类型 | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0012_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型 | any",
          "dts2cpp_compat_combo_0012_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_COMPAT367_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_COMPAT367_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type 中文类型 | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_compat367_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat367.ts', `class Compat367 { field: 中文类型 | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_compat367_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_compat367_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0013_compat367_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0013_compat367_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | v",
          "dts2cpp_compat_combo_0013_compat367_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_compat367_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_COMPAT367_X_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_COMPAT367_X_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member 中文类型 | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_compat367_x_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat367.ts', `type Compat367 = { x: 中文类型 | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_compat367_x_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_compat367_x_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0014_compat367_x_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: 中文类型 | x; }", "dts2cpp_compat_combo_0014_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_compat367_x_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (中文类型 | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat367.ts', `function compat367(a: 中文类型 | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0015_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型 | Z", "dts2cpp_compat_combo_0015_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_ELEMENT_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_ELEMENT_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Element_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_element_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: Element_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_element_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_element_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0016_element_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0016_element_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Element_n",
          "dts2cpp_compat_combo_0016_element_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_element_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_ELEMENT_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_ELEMENT_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Element_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_element_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: Element_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_element_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_element_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0017_element_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_element_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Element_s",
          "dts2cpp_compat_combo_0017_element_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_element_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_ELEMENT_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_ELEMENT_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Element_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_element_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: Element_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_element_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_element_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_element_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_element_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Element_b",
          "dts2cpp_compat_combo_0018_element_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_element_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_ELEMEN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_ELEMEN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Elemen; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_elemen', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: Elemen): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_elemen parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_elemen convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_elemen must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_elemen must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Elemen",
          "dts2cpp_compat_combo_0019_elemen param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_elemen execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_BADTYPE369_ELEMENT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_BADTYPE369_ELEMENT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType369_Element); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_badtype369_element', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: BadType369_Element): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_badtype369_element parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_badtype369_element convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0020_badtype369_element must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_badtype369_element must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType369_Element",
          "dts2cpp_compat_combo_0020_badtype369_element param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_badtype369_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_ELEMENT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_ELEMENT_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Element_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_element_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: Element_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_element_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_element_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_element_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_element_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Element_any",
          "dts2cpp_compat_combo_0021_element_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_element_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_COMPAT369_ELEMENT_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_COMPAT369_ELEMENT_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Element_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_compat369_element_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `class Compat369 { field: Element_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_compat369_element_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_compat369_element_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0022_compat369_element_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0022_compat369_element_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_v",
          "dts2cpp_compat_combo_0022_compat369_element_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_compat369_element_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_COMPAT369_X_ELEMENT_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_COMPAT369_X_ELEMENT_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Element_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_compat369_x_element_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `type Compat369 = { x: Element_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_compat369_x_element_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_compat369_x_element_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0023_compat369_x_element_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Element_x; }", "dts2cpp_compat_combo_0023_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_compat369_x_element_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_ELEMENT_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_ELEMENT_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Element_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_element_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat369.ts', `function compat369(a: Element_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_element_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_element_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_element_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_element_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Element_Z",
          "dts2cpp_compat_combo_0024_element_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_element_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_NS_BAR_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_NS_BAR_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (ns.Bar | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_ns_bar_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Bar | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_ns_bar_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_ns_bar_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0025_ns_bar_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0025_ns_bar_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar | n",
          "dts2cpp_compat_combo_0025_ns_bar_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_ns_bar_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_NS_BAR_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_NS_BAR_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (ns.Bar | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_ns_bar_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Bar | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_ns_bar_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_ns_bar_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0026_ns_bar_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_ns_bar_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar | s",
          "dts2cpp_compat_combo_0026_ns_bar_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_ns_bar_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_NS_BAR_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_NS_BAR_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (ns.Bar | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_ns_bar_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Bar | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_ns_bar_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_ns_bar_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_ns_bar_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_ns_bar_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar | b",
          "dts2cpp_compat_combo_0027_ns_bar_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_ns_bar_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_NS_BA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_NS_BA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ns.Ba; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_ns_ba', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Ba): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_ns_ba parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_ns_ba convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_ns_ba must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_ns_ba must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Ba",
          "dts2cpp_compat_combo_0028_ns_ba param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_ns_ba execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_NS_BAR_G379
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_NS_BAR_G379
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (ns.Bar | g379); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_ns_bar_g379', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Bar | g379): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_ns_bar_g379 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_ns_bar_g379 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_ns_bar_g379 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_ns_bar_g379 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar | g379",
          "dts2cpp_compat_combo_0029_ns_bar_g379 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_ns_bar_g379 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_NS_BAR_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_NS_BAR_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (ns.Bar | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_ns_bar_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Bar | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_ns_bar_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_ns_bar_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_ns_bar_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_ns_bar_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar | any",
          "dts2cpp_compat_combo_0030_ns_bar_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_ns_bar_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_COMPAT379_NS_BAR_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_COMPAT379_NS_BAR_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type ns.Bar | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_compat379_ns_bar_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `class Compat379 { field: ns.Bar | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_compat379_ns_bar_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_compat379_ns_bar_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0031_compat379_ns_bar_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0031_compat379_ns_bar_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | v",
          "dts2cpp_compat_combo_0031_compat379_ns_bar_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_compat379_ns_bar_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_COMPAT379_X_NS_BAR_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_COMPAT379_X_NS_BAR_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member ns.Bar | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_compat379_x_ns_bar_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `type Compat379 = { x: ns.Bar | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_compat379_x_ns_bar_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_compat379_x_ns_bar_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0032_compat379_x_ns_bar_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: ns.Bar | x; }", "dts2cpp_compat_combo_0032_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_compat379_x_ns_bar_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_NS_BAR_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_NS_BAR_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (ns.Bar | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_ns_bar_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat379.ts', `function compat379(a: ns.Bar | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_ns_bar_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_ns_bar_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_ns_bar_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_ns_bar_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar | Z",
          "dts2cpp_compat_combo_0033_ns_bar_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_ns_bar_z execution error: ${err}`);
    }
  });
});
