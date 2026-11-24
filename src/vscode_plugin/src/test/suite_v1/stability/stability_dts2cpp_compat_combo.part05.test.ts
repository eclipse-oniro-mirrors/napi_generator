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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_COMPAT207_X_WEAKSET_OBJECTX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_COMPAT207_X_WEAKSET_OBJECTX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member WeakSet<objectx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_compat207_x_weakset_objectx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `type Compat207 = { x: WeakSet<objectx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_compat207_x_weakset_objectx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_compat207_x_weakset_objectx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0032_compat207_x_weakset_objectx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: WeakSet<objectx>; }", "dts2cpp_compat_combo_0032_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_compat207_x_weakset_objectx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_WEAKSET_OBJECTZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_WEAKSET_OBJECTZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakSet<objectZ>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_weakset_objectz', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: WeakSet<objectZ>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_weakset_objectz parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_weakset_objectz convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_weakset_objectz must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_weakset_objectz must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<objectZ>",
          "dts2cpp_compat_combo_0033_weakset_objectz param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_weakset_objectz execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_M_VOID_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_M_VOID_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_m_void_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_m_void_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_m_void_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0034_m_void_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0034_m_void_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | n",
          "dts2cpp_compat_combo_0034_m_void_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_m_void_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_M_VOID_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_M_VOID_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_m_void_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_m_void_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_m_void_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0035_m_void_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0035_m_void_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | s",
          "dts2cpp_compat_combo_0035_m_void_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_m_void_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_M_VOID_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_M_VOID_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_m_void_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_m_void_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_m_void_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_m_void_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_m_void_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | b",
          "dts2cpp_compat_combo_0036_m_void_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_m_void_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_M_VOID_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_M_VOID_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_m_void_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_m_void_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_m_void_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_m_void_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_m_void_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | br",
          "dts2cpp_compat_combo_0037_m_void_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_m_void_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_M_VOID_G208
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_M_VOID_G208
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | g208); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_m_void_g208', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | g208): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_m_void_g208 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_m_void_g208 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0038_m_void_g208 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0038_m_void_g208 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | g208",
          "dts2cpp_compat_combo_0038_m_void_g208 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_m_void_g208 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_M_VOID_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_M_VOID_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_m_void_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_m_void_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_m_void_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0039_m_void_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_m_void_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | any",
          "dts2cpp_compat_combo_0039_m_void_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_m_void_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_COMPAT208_M_VOD
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_COMPAT208_M_VOD
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { m(): vod }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_compat208_m_vod', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `class Compat208 { field: { m(): vod }; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_compat208_m_vod parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_compat208_m_vod convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0040_compat208_m_vod must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0040_compat208_m_vod must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): vod }",
          "dts2cpp_compat_combo_0040_compat208_m_vod field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_compat208_m_vod execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_COMPAT208_X_M_VOID_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_COMPAT208_X_M_VOID_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { m(): void } | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_compat208_x_m_void_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `type Compat208 = { x: { m(): void } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_compat208_x_m_void_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_compat208_x_m_void_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0041_compat208_x_m_void_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { m(): void } | x; }", "dts2cpp_compat_combo_0041_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_compat208_x_m_void_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_M_VOID_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_M_VOID_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ m(): void } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_m_void_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat208.ts', `function compat208(a: { m(): void } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_m_void_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_m_void_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_m_void_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_m_void_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void } | Z",
          "dts2cpp_compat_combo_0042_m_void_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_m_void_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_A_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_A_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ a: numbr }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_a_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: numbr }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_a_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_a_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0043_a_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0043_a_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: numbr }",
          "dts2cpp_compat_combo_0043_a_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_a_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_A_NUMBER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_A_NUMBER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number } | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_a_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: number } | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_a_number_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_a_number_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0044_a_number_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0044_a_number_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number } | s",
          "dts2cpp_compat_combo_0044_a_number_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_a_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_A_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_A_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_a_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: number } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_a_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_a_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_a_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_a_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number } | b",
          "dts2cpp_compat_combo_0045_a_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_a_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_A_NUMBER_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_A_NUMBER_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_a_number_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: number } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_a_number_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_a_number_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_a_number_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_a_number_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number } | br",
          "dts2cpp_compat_combo_0046_a_number_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_a_number_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_A_NUMBER_G214
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_A_NUMBER_G214
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number } | g214); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_a_number_g214', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: number } | g214): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_a_number_g214 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_a_number_g214 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0047_a_number_g214 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0047_a_number_g214 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number } | g214",
          "dts2cpp_compat_combo_0047_a_number_g214 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_a_number_g214 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_A_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_A_NUMBER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_a_number_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: number } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_a_number_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_a_number_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0048_a_number_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_a_number_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number } | any",
          "dts2cpp_compat_combo_0048_a_number_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_a_number_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_COMPAT214_A_NUMBER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_COMPAT214_A_NUMBER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { a: number } | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_compat214_a_number_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `class Compat214 { field: { a: number } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_compat214_a_number_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_compat214_a_number_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0049_compat214_a_number_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0049_compat214_a_number_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | v",
          "dts2cpp_compat_combo_0049_compat214_a_number_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_compat214_a_number_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_COMPAT214_X_A_NUMBER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_COMPAT214_X_A_NUMBER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { a: number } | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_compat214_x_a_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `type Compat214 = { x: { a: number } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_compat214_x_a_number_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_compat214_x_a_number_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0050_compat214_x_a_number_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { a: number } | x; }", "dts2cpp_compat_combo_0050_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_compat214_x_a_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_A_NUMBER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_A_NUMBER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_a_number_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat214.ts', `function compat214(a: { a: number } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_a_number_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_a_number_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_a_number_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_a_number_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number } | Z",
          "dts2cpp_compat_combo_0051_a_number_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_a_number_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_A_NUMBR_B_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_A_NUMBR_B_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ a: numbr; b: numbr }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_a_numbr_b_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: numbr; b: numbr }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_a_numbr_b_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_a_numbr_b_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0052_a_numbr_b_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0052_a_numbr_b_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: numbr; b: numbr }",
          "dts2cpp_compat_combo_0052_a_numbr_b_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_a_numbr_b_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_A_NUMBER_B_NUMBER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_A_NUMBER_B_NUMBER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number; b: number } | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_a_number_b_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: number; b: number } | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_a_number_b_number_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_a_number_b_number_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0053_a_number_b_number_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0053_a_number_b_number_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number } | s",
          "dts2cpp_compat_combo_0053_a_number_b_number_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_a_number_b_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_A_NUMBER_B_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_A_NUMBER_B_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number; b: number } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_a_number_b_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: number; b: number } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_a_number_b_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_a_number_b_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_a_number_b_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_a_number_b_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number } | b",
          "dts2cpp_compat_combo_0054_a_number_b_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_a_number_b_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_A_NUMBER_B_NUMBER_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_A_NUMBER_B_NUMBER_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number; b: number } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_a_number_b_number_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: number; b: number } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_a_number_b_number_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_a_number_b_number_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_a_number_b_number_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_a_number_b_number_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number } | br",
          "dts2cpp_compat_combo_0055_a_number_b_number_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_a_number_b_number_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_A_NUMBER_B_NUMBER_G215
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_A_NUMBER_B_NUMBER_G215
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number; b: number } | g215); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_a_number_b_number_g215', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: number; b: number } | g215): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_a_number_b_number_g215 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_a_number_b_number_g215 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0056_a_number_b_number_g215 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0056_a_number_b_number_g215 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number } | g215",
          "dts2cpp_compat_combo_0056_a_number_b_number_g215 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_a_number_b_number_g215 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_A_NUMBER_B_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_A_NUMBER_B_NUMBER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number; b: number } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_a_number_b_number_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: number; b: number } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_a_number_b_number_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_a_number_b_number_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_a_number_b_number_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_a_number_b_number_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number } | any",
          "dts2cpp_compat_combo_0057_a_number_b_number_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_a_number_b_number_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_COMPAT215_A_NUMBER_B_NUMBER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_COMPAT215_A_NUMBER_B_NUMBER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { a: number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_compat215_a_number_b_number_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `class Compat215 { field: { a: number; b: number } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_compat215_a_number_b_number_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_compat215_a_number_b_number_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0058_compat215_a_number_b_number_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0058_compat215_a_number_b_number_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | v",
          "dts2cpp_compat_combo_0058_compat215_a_number_b_number_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_compat215_a_number_b_number_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_COMPAT215_X_A_NUMBER_B_NUMBER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_COMPAT215_X_A_NUMBER_B_NUMBER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { a: number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_compat215_x_a_number_b_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `type Compat215 = { x: { a: number; b: number } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_compat215_x_a_number_b_number_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_compat215_x_a_number_b_number_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0059_compat215_x_a_number_b_number_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { a: number; b: number } | x; }",
          "dts2cpp_compat_combo_0059_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_compat215_x_a_number_b_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_A_NUMBER_B_NUMBER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_A_NUMBER_B_NUMBER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: number; b: number } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_a_number_b_number_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: { a: number; b: number } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_a_number_b_number_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_a_number_b_number_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_a_number_b_number_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_a_number_b_number_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number } | Z",
          "dts2cpp_compat_combo_0060_a_number_b_number_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_a_number_b_number_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_A_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_A_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type A_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_a_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat220.ts', `function compat220(a: A_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_a_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_a_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0061_a_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0061_a_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "A_n", "dts2cpp_compat_combo_0061_a_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_a_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_A_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_A_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type A_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_a_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat220.ts', `function compat220(a: A_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_a_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_a_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0062_a_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0062_a_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "A_s", "dts2cpp_compat_combo_0062_a_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_a_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_A_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_A_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type A_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_a_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat220.ts', `function compat220(a: A_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_a_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_a_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0063_a_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_a_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "A_b", "dts2cpp_compat_combo_0063_a_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_a_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_AX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_AX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Ax; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_ax', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat220.ts', `function compat220(a: Ax): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_ax parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_ax convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0064_ax must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_ax must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Ax", "dts2cpp_compat_combo_0064_ax param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_ax execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_BADTYPE220_A
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_BADTYPE220_A
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType220_A); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_badtype220_a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat220.ts', `function compat220(a: BadType220_A): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_badtype220_a parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_badtype220_a convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0065_badtype220_a must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0065_badtype220_a must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType220_A",
          "dts2cpp_compat_combo_0065_badtype220_a param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_badtype220_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_A_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_A_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type A_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_a_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat220.ts', `function compat220(a: A_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_a_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_a_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0066_a_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_a_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "A_any",
          "dts2cpp_compat_combo_0066_a_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_a_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_COMPAT221_X_B_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_COMPAT221_X_B_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member B_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_compat221_x_b_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat221.ts', `type Compat221 = { x: B_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_compat221_x_b_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_compat221_x_b_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0011_compat221_x_b_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: B_x; }", "dts2cpp_compat_combo_0011_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_compat221_x_b_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_B_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_B_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type B_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_b_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat221.ts', `function compat221(a: B_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_b_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_b_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0012_b_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_b_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "B_Z", "dts2cpp_compat_combo_0012_b_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_b_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_STRING_BRAND_X_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_STRING_BRAND_X_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { brand: "x" } | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_string_brand_x_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: string & { brand: "x" } | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_string_brand_x_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_string_brand_x_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0013_string_brand_x_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_string_brand_x_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" } | n",
          "dts2cpp_compat_combo_0013_string_brand_x_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_string_brand_x_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_STRNG_BRAND_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_STRNG_BRAND_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng & { brand: "x" }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_strng_brand_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: strng & { brand: "x" }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_strng_brand_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_strng_brand_x convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_strng_brand_x must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_strng_brand_x must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng & { brand: \"x\" }",
          "dts2cpp_compat_combo_0014_strng_brand_x param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_strng_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_STRING_BRAND_X_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_STRING_BRAND_X_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { brand: "x" } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_string_brand_x_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: string & { brand: "x" } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_string_brand_x_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_string_brand_x_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_string_brand_x_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_string_brand_x_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" } | b",
          "dts2cpp_compat_combo_0015_string_brand_x_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_string_brand_x_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_STRING_BRAND_X_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_STRING_BRAND_X_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { brand: "x" } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_string_brand_x_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: string & { brand: "x" } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_string_brand_x_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_string_brand_x_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0016_string_brand_x_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0016_string_brand_x_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" } | br",
          "dts2cpp_compat_combo_0016_string_brand_x_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_string_brand_x_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_STRING_BRAND_X_G222
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_STRING_BRAND_X_G222
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { brand: "x" } | g222); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_string_brand_x_g222', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: string & { brand: "x" } | g222): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_string_brand_x_g222 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_string_brand_x_g222 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0017_string_brand_x_g222 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_string_brand_x_g222 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" } | g222",
          "dts2cpp_compat_combo_0017_string_brand_x_g222 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_string_brand_x_g222 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_STRING_BRAND_X_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_STRING_BRAND_X_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { brand: "x" } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_string_brand_x_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: string & { brand: "x" } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_string_brand_x_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_string_brand_x_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_string_brand_x_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_string_brand_x_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" } | any",
          "dts2cpp_compat_combo_0018_string_brand_x_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_string_brand_x_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_COMPAT222_STRING_BRAND_X_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_COMPAT222_STRING_BRAND_X_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type string & { brand: "x" } | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_compat222_string_brand_x_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `class Compat222 { field: string & { brand: "x" } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_compat222_string_brand_x_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_compat222_string_brand_x_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0019_compat222_string_brand_x_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0019_compat222_string_brand_x_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" } | v",
          "dts2cpp_compat_combo_0019_compat222_string_brand_x_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_compat222_string_brand_x_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_COMPAT222_X_STRING_BRAND_X_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_COMPAT222_X_STRING_BRAND_X_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member string & { brand: "x" } | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_compat222_x_string_brand_x_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `type Compat222 = { x: string & { brand: "x" } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_compat222_x_string_brand_x_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_compat222_x_string_brand_x_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0020_compat222_x_string_brand_x_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: string & { brand: \"x\" } | x; }",
          "dts2cpp_compat_combo_0020_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_compat222_x_string_brand_x_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_STRING_BRAND_X_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_STRING_BRAND_X_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { brand: "x" } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_string_brand_x_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat222.ts', `function compat222(a: string & { brand: "x" } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_string_brand_x_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_string_brand_x_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_string_brand_x_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_string_brand_x_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" } | Z",
          "dts2cpp_compat_combo_0021_string_brand_x_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_string_brand_x_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_LIT_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_LIT_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_n"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_lit_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_n"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_lit_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_lit_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0022_lit_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0022_lit_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_n\"",
          "dts2cpp_compat_combo_0022_lit_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_lit_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_LIT_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_LIT_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_s"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_lit_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_s"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_lit_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_lit_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_lit_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_lit_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_s\"",
          "dts2cpp_compat_combo_0023_lit_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_lit_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_LIT_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_LIT_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_b"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_lit_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_b"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_lit_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_lit_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_lit_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_lit_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_b\"",
          "dts2cpp_compat_combo_0024_lit_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_lit_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_LIT_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_LIT_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_br"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_lit_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_br"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_lit_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_lit_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0025_lit_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0025_lit_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_br\"",
          "dts2cpp_compat_combo_0025_lit_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_lit_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_LIT_G223
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_LIT_G223
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_g223"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_lit_g223', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_g223"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_lit_g223 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_lit_g223 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0026_lit_g223 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_lit_g223 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_g223\"",
          "dts2cpp_compat_combo_0026_lit_g223 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_lit_g223 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_LIT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_LIT_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_any"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_lit_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_any"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_lit_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_lit_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_lit_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_lit_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_any\"",
          "dts2cpp_compat_combo_0027_lit_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_lit_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_COMPAT223_LIT_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_COMPAT223_LIT_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type "lit_v"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_compat223_lit_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `class Compat223 { field: "lit_v"; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_compat223_lit_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_compat223_lit_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0028_compat223_lit_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0028_compat223_lit_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"lit_v\"",
          "dts2cpp_compat_combo_0028_compat223_lit_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_compat223_lit_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_COMPAT223_X_LIT_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_COMPAT223_X_LIT_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member "lit_x"; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_compat223_x_lit_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `type Compat223 = { x: "lit_x"; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_compat223_x_lit_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_compat223_x_lit_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0029_compat223_x_lit_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: \"lit_x\"; }", "dts2cpp_compat_combo_0029_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_compat223_x_lit_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_LIT_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_LIT_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "lit_Z"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_lit_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat223.ts', `function compat223(a: "lit_Z"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_lit_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_lit_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_lit_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_lit_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit_Z\"",
          "dts2cpp_compat_combo_0030_lit_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_lit_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_42_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_42_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (42 | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_42_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 42 | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_42_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_42_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0031_42_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_42_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "42 | n",
          "dts2cpp_compat_combo_0031_42_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_42_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_42_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_42_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (42 | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_42_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 42 | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_42_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_42_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0032_42_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_42_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "42 | s",
          "dts2cpp_compat_combo_0032_42_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_42_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_42_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_42_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (42 | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_42_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 42 | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_42_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_42_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0033_42_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_42_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "42 | b",
          "dts2cpp_compat_combo_0033_42_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_42_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_4
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type 4; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_4', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 4): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0034_4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0034_4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "4", "dts2cpp_compat_combo_0034_4 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_42_G224
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_42_G224
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (42 | g224); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_42_g224', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 42 | g224): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_42_g224 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_42_g224 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0035_42_g224 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0035_42_g224 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "42 | g224",
          "dts2cpp_compat_combo_0035_42_g224 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_42_g224 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_42_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_42_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (42 | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_42_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 42 | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_42_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_42_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_42_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_42_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "42 | any",
          "dts2cpp_compat_combo_0036_42_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_42_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_COMPAT224_42_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_COMPAT224_42_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type 42 | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_compat224_42_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `class Compat224 { field: 42 | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_compat224_42_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_compat224_42_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0037_compat224_42_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0037_compat224_42_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | v",
          "dts2cpp_compat_combo_0037_compat224_42_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_compat224_42_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_COMPAT224_X_42_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_COMPAT224_X_42_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member 42 | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_compat224_x_42_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `type Compat224 = { x: 42 | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_compat224_x_42_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_compat224_x_42_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0038_compat224_x_42_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: 42 | x; }", "dts2cpp_compat_combo_0038_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_compat224_x_42_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_42_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_42_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (42 | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_42_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat224.ts', `function compat224(a: 42 | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_42_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_42_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_combo_0039_42_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_42_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "42 | Z",
          "dts2cpp_compat_combo_0039_42_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_42_z execution error: ${err}`);
    }
  });
});
