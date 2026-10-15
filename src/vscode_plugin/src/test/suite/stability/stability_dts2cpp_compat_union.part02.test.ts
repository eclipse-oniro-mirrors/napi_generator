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

suite('Stability_DTS2CPP_COMPAT_UNION_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_UNION_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_PERSON_B_AGE_NAME
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_PERSON_B_AGE_NAME
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (Person_b["age" | "name"]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0066_person_b_age_name', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat164.ts', `function compat164(a: Person_b["age" | "name"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0066_person_b_age_name parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0066_person_b_age_name convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0066_person_b_age_name must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0066_person_b_age_name must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_b[\"age\" | \"name\"]",
          "dts2cpp_compat_union_0066_person_b_age_name param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0066_person_b_age_name execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_STRING_NULL_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_STRING_NULL_N
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | null | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0061_string_null_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat216.ts', `function compat216(a: string | null | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0061_string_null_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0061_string_null_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0061_string_null_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0061_string_null_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null | n",
          "dts2cpp_compat_union_0061_string_null_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0061_string_null_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_STRNG_NULL
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_STRNG_NULL
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng | null); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0062_strng_null', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat216.ts', `function compat216(a: strng | null): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0062_strng_null parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0062_strng_null convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0062_strng_null must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0062_strng_null must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng | null",
          "dts2cpp_compat_union_0062_strng_null param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0062_strng_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_STRING_NULL_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_STRING_NULL_B
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | null | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0063_string_null_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat216.ts', `function compat216(a: string | null | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0063_string_null_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0063_string_null_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0063_string_null_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0063_string_null_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null | b",
          "dts2cpp_compat_union_0063_string_null_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0063_string_null_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_STRING_NULL_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_STRING_NULL_BR
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | null | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0064_string_null_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat216.ts', `function compat216(a: string | null | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0064_string_null_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0064_string_null_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0064_string_null_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0064_string_null_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null | br",
          "dts2cpp_compat_union_0064_string_null_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0064_string_null_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_STRING_NULL_G216
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_STRING_NULL_G216
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | null | g216); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0065_string_null_g216', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat216.ts', `function compat216(a: string | null | g216): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0065_string_null_g216 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0065_string_null_g216 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0065_string_null_g216 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0065_string_null_g216 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null | g216",
          "dts2cpp_compat_union_0065_string_null_g216 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0065_string_null_g216 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_STRING_NULL_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_STRING_NULL_ANY
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | null | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0066_string_null_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat216.ts', `function compat216(a: string | null | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0066_string_null_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0066_string_null_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0066_string_null_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0066_string_null_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null | any",
          "dts2cpp_compat_union_0066_string_null_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0066_string_null_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_CIRCLE_SQUARE_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_CIRCLE_SQUARE_BR
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended ("circle" | "square_br"); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0061_circle_square_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat233.ts', `function compat233(a: "circle" | "square_br"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0061_circle_square_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0061_circle_square_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0061_circle_square_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0061_circle_square_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"circle\" | \"square_br\"",
          "dts2cpp_compat_union_0061_circle_square_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0061_circle_square_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_CIRCLE_SQUARE_G233
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_CIRCLE_SQUARE_G233
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended ("circle" | "square_g233"); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0062_circle_square_g233', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat233.ts', `function compat233(a: "circle" | "square_g233"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0062_circle_square_g233 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0062_circle_square_g233 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0062_circle_square_g233 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0062_circle_square_g233 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"circle\" | \"square_g233\"",
          "dts2cpp_compat_union_0062_circle_square_g233 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0062_circle_square_g233 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_CIRCLE_SQUARE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_CIRCLE_SQUARE_ANY
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended ("circle" | "square_any"); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0063_circle_square_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat233.ts', `function compat233(a: "circle" | "square_any"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0063_circle_square_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0063_circle_square_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0063_circle_square_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0063_circle_square_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"circle\" | \"square_any\"",
          "dts2cpp_compat_union_0063_circle_square_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0063_circle_square_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_COMPAT233_CIRCLE_SQUARE_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_COMPAT233_CIRCLE_SQUARE_V
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type "circle" | "square_v"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0064_compat233_circle_square_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat233.ts', `class Compat233 { field: "circle" | "square_v"; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0064_compat233_circle_square_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0064_compat233_circle_square_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_union_0064_compat233_circle_square_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_union_0064_compat233_circle_square_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"circle\" | \"square_v\"",
          "dts2cpp_compat_union_0064_compat233_circle_square_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0064_compat233_circle_square_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_COMPAT233_X_CIRCLE_SQUARE_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_COMPAT233_X_CIRCLE_SQUARE_X
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member "circle" | "square" | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0065_compat233_x_circle_square_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat233.ts', `type Compat233 = { x: "circle" | "square" | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0065_compat233_x_circle_square_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0065_compat233_x_circle_square_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_union_0065_compat233_x_circle_square_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: \"circle\" | \"square\" | x; }",
          "dts2cpp_compat_union_0065_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0065_compat233_x_circle_square_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_CIRCLE_SQUARE_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_CIRCLE_SQUARE_Z
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended ("circle" | "square_Z"); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0066_circle_square_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat233.ts', `function compat233(a: "circle" | "square_Z"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0066_circle_square_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0066_circle_square_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0066_circle_square_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0066_circle_square_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"circle\" | \"square_Z\"",
          "dts2cpp_compat_union_0066_circle_square_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0066_circle_square_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_COMPAT332_OK_ERR_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_COMPAT332_OK_ERR_V
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type "ok" | "err_v"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0061_compat332_ok_err_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat332.ts', `class Compat332 { field: "ok" | "err_v"; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0061_compat332_ok_err_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0061_compat332_ok_err_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_union_0061_compat332_ok_err_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_union_0061_compat332_ok_err_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"ok\" | \"err_v\"",
          "dts2cpp_compat_union_0061_compat332_ok_err_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0061_compat332_ok_err_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_COMPAT332_X_OK_ERR_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_COMPAT332_X_OK_ERR_X
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member "ok" | "err" | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0062_compat332_x_ok_err_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat332.ts', `type Compat332 = { x: "ok" | "err" | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0062_compat332_x_ok_err_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0062_compat332_x_ok_err_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_union_0062_compat332_x_ok_err_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: \"ok\" | \"err\" | x; }", "dts2cpp_compat_union_0062_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0062_compat332_x_ok_err_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_OK_ERR_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_OK_ERR_Z
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended ("ok" | "err_Z"); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0063_ok_err_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat332.ts', `function compat332(a: "ok" | "err_Z"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0063_ok_err_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0063_ok_err_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0063_ok_err_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0063_ok_err_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"ok\" | \"err_Z\"",
          "dts2cpp_compat_union_0063_ok_err_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0063_ok_err_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_STRING_STRING_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_STRING_STRING_N
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | string | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0064_string_string_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat335.ts', `function compat335(a: string | string | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0064_string_string_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0064_string_string_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0064_string_string_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0064_string_string_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string | n",
          "dts2cpp_compat_union_0064_string_string_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0064_string_string_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_STRNG_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_STRNG_STRNG
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng | strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0065_strng_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat335.ts', `function compat335(a: strng | strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0065_strng_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0065_strng_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0065_strng_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0065_strng_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng | strng",
          "dts2cpp_compat_union_0065_strng_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0065_strng_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_STRING_STRING_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_STRING_STRING_B
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | string | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0066_string_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat335.ts', `function compat335(a: string | string | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0066_string_string_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0066_string_string_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0066_string_string_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0066_string_string_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string | b",
          "dts2cpp_compat_union_0066_string_string_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0066_string_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_STRING_MAP_STRING_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0061_STRING_MAP_STRING_NUMBR
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (string | Map<string, numbr>); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0061_string_map_string_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat353.ts', `function compat353(a: string | Map<string, numbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0061_string_map_string_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0061_string_map_string_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0061_string_map_string_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0061_string_map_string_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Map<string, numbr>",
          "dts2cpp_compat_union_0061_string_map_string_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0061_string_map_string_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_STRNG_MAP_STRNG_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0062_STRNG_MAP_STRNG_NUMBER
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng | Map<strng, number>); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0062_strng_map_strng_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat353.ts', `function compat353(a: strng | Map<strng, number>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0062_strng_map_strng_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0062_strng_map_strng_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0062_strng_map_strng_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0062_strng_map_strng_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng | Map<strng, number>",
          "dts2cpp_compat_union_0062_strng_map_strng_number param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0062_strng_map_strng_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_STRING_MAP_STRING_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0063_STRING_MAP_STRING_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | Map<string, number> | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0063_string_map_string_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat353.ts', `function compat353(a: string | Map<string, number> | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0063_string_map_string_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0063_string_map_string_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0063_string_map_string_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0063_string_map_string_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Map<string, number> | b",
          "dts2cpp_compat_union_0063_string_map_string_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0063_string_map_string_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_STRING_MAP_STRING_NUMBER_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0064_STRING_MAP_STRING_NUMBER_BR
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | Map<string, number> | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0064_string_map_string_number_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat353.ts', `function compat353(a: string | Map<string, number> | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0064_string_map_string_number_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0064_string_map_string_number_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0064_string_map_string_number_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0064_string_map_string_number_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Map<string, number> | br",
          "dts2cpp_compat_union_0064_string_map_string_number_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0064_string_map_string_number_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_BADTYPE353_STRING_MAP_STR_42DD86
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0065_BADTYPE353_STRING_MAP_STR_42DD86
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType353_string___Map_string__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat353.ts', `
          function compat353(a: BadType353_string___Map_string__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType353_string___Map_string__number_",
          "dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0065_badtype353_string_map_str_42dd86 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_STRING_MAP_STRING_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_UNION_0066_STRING_MAP_STRING_NUMBER_ANY
   * @tc.desc   Stability compat dts2cpp/union: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string | Map<string, number> | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_union_0066_string_map_string_number_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat353.ts', `function compat353(a: string | Map<string, number> | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_union_0066_string_map_string_number_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_union_0066_string_map_string_number_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_union_0066_string_map_string_number_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_union_0066_string_map_string_number_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Map<string, number> | any",
          "dts2cpp_compat_union_0066_string_map_string_number_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_union_0066_string_map_string_number_any execution error: ${err}`);
    }
  });
});
