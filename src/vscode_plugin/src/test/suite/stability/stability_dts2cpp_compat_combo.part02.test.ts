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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_HELLO_WORLD_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_HELLO_WORLD_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "hello world_s"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_hello_world_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat157.ts', `function compat157(a: "hello world_s"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_hello_world_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_hello_world_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0065_hello_world_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0065_hello_world_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world_s\"",
          "dts2cpp_compat_combo_0065_hello_world_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_hello_world_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_HELLO_WORLD_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_HELLO_WORLD_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "hello world_b"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_hello_world_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat157.ts', `function compat157(a: "hello world_b"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_hello_world_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_hello_world_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0066_hello_world_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_hello_world_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world_b\"",
          "dts2cpp_compat_combo_0066_hello_world_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_hello_world_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_HELLO_WORLD_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0067_HELLO_WORLD_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "hello world_br"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0067_hello_world_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat157.ts', `function compat157(a: "hello world_br"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0067_hello_world_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0067_hello_world_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0067_hello_world_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0067_hello_world_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world_br\"",
          "dts2cpp_compat_combo_0067_hello_world_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0067_hello_world_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_ORNULL_ONEORMANY_TYPEANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_ORNULL_ONEORMANY_TYPEANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type OrNull<OneOrMany<Typeany>>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_ornull_oneormany_typeany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat158.ts', `function compat158(a: OrNull<OneOrMany<Typeany>>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_ornull_oneormany_typeany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_ornull_oneormany_typeany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0011_ornull_oneormany_typeany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_ornull_oneormany_typeany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<Typeany>>",
          "dts2cpp_compat_combo_0011_ornull_oneormany_typeany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_ornull_oneormany_typeany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_COMPAT158_ORNULL_ONEORMANY_TYPEV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_COMPAT158_ORNULL_ONEORMANY_TYPEV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type OrNull<OneOrMany<Typev>>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat158.ts', `class Compat158 { field: OrNull<OneOrMany<Typev>>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Typev>>",
          "dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_compat158_ornull_oneormany_typev execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_COMPAT158_X_ORNULL_ONEORMANY_TYPEX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_COMPAT158_X_ORNULL_ONEORMANY_TYPEX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member OrNull<OneOrMany<Typex>>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_compat158_x_ornull_oneormany_typex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat158.ts', `type Compat158 = { x: OrNull<OneOrMany<Typex>>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_compat158_x_ornull_oneormany_typex parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_compat158_x_ornull_oneormany_typex convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0013_compat158_x_ornull_oneormany_typex must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: OrNull<OneOrMany<Typex>>; }",
          "dts2cpp_compat_combo_0013_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_compat158_x_ornull_oneormany_typex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_ORNULL_ONEORMANY_TYPEZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_ORNULL_ONEORMANY_TYPEZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type OrNull<OneOrMany<TypeZ>>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_ornull_oneormany_typez', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat158.ts', `function compat158(a: OrNull<OneOrMany<TypeZ>>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_ornull_oneormany_typez parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_ornull_oneormany_typez convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_ornull_oneormany_typez must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_ornull_oneormany_typez must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<TypeZ>>",
          "dts2cpp_compat_combo_0014_ornull_oneormany_typez param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_ornull_oneormany_typez execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_READONLY_STRING_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_READONLY_STRING_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (readonly [string, numbr]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_readonly_string_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [string, numbr]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_readonly_string_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_readonly_string_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_readonly_string_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_readonly_string_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, numbr]",
          "dts2cpp_compat_combo_0015_readonly_string_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_readonly_string_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_READONLY_STRNG_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_READONLY_STRNG_NUMBER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (readonly [strng, number]); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_readonly_strng_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [strng, number]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_readonly_strng_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_readonly_strng_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0016_readonly_strng_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0016_readonly_strng_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [strng, number]",
          "dts2cpp_compat_combo_0016_readonly_strng_number param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_readonly_strng_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_READONLY_STRING_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_READONLY_STRING_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (readonly [string, number] | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_readonly_string_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [string, number] | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_readonly_string_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_readonly_string_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0017_readonly_string_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_readonly_string_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number] | b",
          "dts2cpp_compat_combo_0017_readonly_string_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_readonly_string_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_READONLY_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat161(a: readonly [string, number[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_readonly_string_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [string, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_readonly_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_readonly_string_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_readonly_string_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_readonly_string_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number[",
          "dts2cpp_compat_combo_0018_readonly_string_number param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_READONLY_STRING_NUMBER_G161
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_READONLY_STRING_NUMBER_G161
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (readonly [string, number] | g161); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_readonly_string_number_g161', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [string, number] | g161): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_readonly_string_number_g161 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_readonly_string_number_g161 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_readonly_string_number_g161 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_readonly_string_number_g161 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number] | g161",
          "dts2cpp_compat_combo_0019_readonly_string_number_g161 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_readonly_string_number_g161 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_READONLY_STRING_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_READONLY_STRING_NUMBER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (readonly [string, number] | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_readonly_string_number_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [string, number] | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_readonly_string_number_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_readonly_string_number_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0020_readonly_string_number_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_readonly_string_number_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number] | any",
          "dts2cpp_compat_combo_0020_readonly_string_number_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_readonly_string_number_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_COMPAT161_READONLY_STRING_NUMBER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_COMPAT161_READONLY_STRING_NUMBER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type readonly [string, number] | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_compat161_readonly_string_number_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `class Compat161 { field: readonly [string, number] | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_compat161_readonly_string_number_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_compat161_readonly_string_number_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0021_compat161_readonly_string_number_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0021_compat161_readonly_string_number_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number] | v",
          "dts2cpp_compat_combo_0021_compat161_readonly_string_number_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_compat161_readonly_string_number_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_COMPAT161_X_READONLY_STRING_NUMBER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_COMPAT161_X_READONLY_STRING_NUMBER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member readonly [string, number] | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_compat161_x_readonly_string_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `type Compat161 = { x: readonly [string, number] | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_compat161_x_readonly_string_number_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_compat161_x_readonly_string_number_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0022_compat161_x_readonly_string_number_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: readonly [string, number] | x; }",
          "dts2cpp_compat_combo_0022_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_compat161_x_readonly_string_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_READONLY_STRING_NUMBER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_READONLY_STRING_NUMBER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (readonly [string, number] | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_readonly_string_number_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat161.ts', `function compat161(a: readonly [string, number] | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_readonly_string_number_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_readonly_string_number_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0023_readonly_string_number_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0023_readonly_string_number_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number] | Z",
          "dts2cpp_compat_combo_0023_readonly_string_number_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_readonly_string_number_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_KEYOF_ARRAYISH_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_KEYOF_ARRAYISH_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (keyof Arrayish | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_keyof_arrayish_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayish | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_keyof_arrayish_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_keyof_arrayish_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_keyof_arrayish_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_keyof_arrayish_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish | n",
          "dts2cpp_compat_combo_0024_keyof_arrayish_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_keyof_arrayish_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_KEYOF_ARRAYISH_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_KEYOF_ARRAYISH_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (keyof Arrayish | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_keyof_arrayish_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayish | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_keyof_arrayish_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_keyof_arrayish_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0025_keyof_arrayish_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0025_keyof_arrayish_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish | s",
          "dts2cpp_compat_combo_0025_keyof_arrayish_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_keyof_arrayish_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_KEYOF_ARRAYISH_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_KEYOF_ARRAYISH_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (keyof Arrayish | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_keyof_arrayish_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayish | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_keyof_arrayish_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_keyof_arrayish_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0026_keyof_arrayish_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_keyof_arrayish_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish | b",
          "dts2cpp_compat_combo_0026_keyof_arrayish_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_keyof_arrayish_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_KEYOF_ARRAYIS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_KEYOF_ARRAYIS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type keyof Arrayis; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_keyof_arrayis', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayis): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_keyof_arrayis parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_keyof_arrayis convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_keyof_arrayis must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_keyof_arrayis must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayis",
          "dts2cpp_compat_combo_0027_keyof_arrayis param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_keyof_arrayis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_KEYOF_ARRAYISH_G162
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_KEYOF_ARRAYISH_G162
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (keyof Arrayish | g162); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_keyof_arrayish_g162', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayish | g162): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_keyof_arrayish_g162 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_keyof_arrayish_g162 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_keyof_arrayish_g162 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_keyof_arrayish_g162 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish | g162",
          "dts2cpp_compat_combo_0028_keyof_arrayish_g162 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_keyof_arrayish_g162 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_KEYOF_ARRAYISH_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_KEYOF_ARRAYISH_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (keyof Arrayish | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_keyof_arrayish_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayish | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_keyof_arrayish_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_keyof_arrayish_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_keyof_arrayish_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_keyof_arrayish_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish | any",
          "dts2cpp_compat_combo_0029_keyof_arrayish_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_keyof_arrayish_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_COMPAT162_KEYOF_ARRAYISH_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_COMPAT162_KEYOF_ARRAYISH_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type keyof Arrayish | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `class Compat162 { field: keyof Arrayish | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish | v",
          "dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_compat162_keyof_arrayish_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_COMPAT162_X_KEYOF_ARRAYISH_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_COMPAT162_X_KEYOF_ARRAYISH_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member keyof Arrayish | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_compat162_x_keyof_arrayish_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `type Compat162 = { x: keyof Arrayish | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_compat162_x_keyof_arrayish_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_compat162_x_keyof_arrayish_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0031_compat162_x_keyof_arrayish_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: keyof Arrayish | x; }", "dts2cpp_compat_combo_0031_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_compat162_x_keyof_arrayish_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_KEYOF_ARRAYISH_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_KEYOF_ARRAYISH_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (keyof Arrayish | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_keyof_arrayish_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat162.ts', `function compat162(a: keyof Arrayish | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_keyof_arrayish_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_keyof_arrayish_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_keyof_arrayish_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_keyof_arrayish_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish | Z",
          "dts2cpp_compat_combo_0032_keyof_arrayish_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_keyof_arrayish_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_PERSON_N_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_PERSON_N_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_n["age"]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_person_n_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person_n["age"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_person_n_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_person_n_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_person_n_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_person_n_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_n[\"age\"]",
          "dts2cpp_compat_combo_0033_person_n_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_person_n_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_PERSON_S_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_PERSON_S_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_s["age"]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_person_s_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person_s["age"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_person_s_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_person_s_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0034_person_s_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0034_person_s_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_s[\"age\"]",
          "dts2cpp_compat_combo_0034_person_s_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_person_s_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_PERSON_B_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_PERSON_B_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_b["age"]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_person_b_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person_b["age"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_person_b_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_person_b_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0035_person_b_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0035_person_b_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_b[\"age\"]",
          "dts2cpp_compat_combo_0035_person_b_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_person_b_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_PERSON_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_PERSON_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat163(a: Person["age"[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_person_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person["age"[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_person_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_person_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_person_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_person_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[\"age\"[",
          "dts2cpp_compat_combo_0036_person_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_person_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_PERSON_G163_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_PERSON_G163_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_g163["age"]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_person_g163_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person_g163["age"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_person_g163_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_person_g163_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_person_g163_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_person_g163_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_g163[\"age\"]",
          "dts2cpp_compat_combo_0037_person_g163_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_person_g163_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_PERSON_ANY_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_PERSON_ANY_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_any["age"]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_person_any_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person_any["age"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_person_any_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_person_any_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0038_person_any_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0038_person_any_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_any[\"age\"]",
          "dts2cpp_compat_combo_0038_person_any_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_person_any_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_COMPAT163_PERSON_V_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_COMPAT163_PERSON_V_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Person_v["age"]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_compat163_person_v_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `class Compat163 { field: Person_v["age"]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_compat163_person_v_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_compat163_person_v_age convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0039_compat163_person_v_age must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0039_compat163_person_v_age must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_v[\"age\"]",
          "dts2cpp_compat_combo_0039_compat163_person_v_age field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_compat163_person_v_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_COMPAT163_X_PERSON_X_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_COMPAT163_X_PERSON_X_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Person_x["age"]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_compat163_x_person_x_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `type Compat163 = { x: Person_x["age"]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_compat163_x_person_x_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_compat163_x_person_x_age convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0040_compat163_x_person_x_age must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Person_x[\"age\"]; }", "dts2cpp_compat_combo_0040_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_compat163_x_person_x_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_PERSON_Z_AGE
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_PERSON_Z_AGE
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_Z["age"]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_person_z_age', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat163.ts', `function compat163(a: Person_Z["age"]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_person_z_age parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_person_z_age convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_person_z_age must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_person_z_age must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_Z[\"age\"]",
          "dts2cpp_compat_combo_0041_person_z_age param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_person_z_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_PERSON_N_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_PERSON_N_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_n[keyof Person]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_person_n_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person_n[keyof Person]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_person_n_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_person_n_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_person_n_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_person_n_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_n[keyof Person]",
          "dts2cpp_compat_combo_0042_person_n_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_person_n_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_PERSON_S_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_PERSON_S_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_s[keyof Person]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_person_s_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person_s[keyof Person]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_person_s_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_person_s_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0043_person_s_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0043_person_s_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_s[keyof Person]",
          "dts2cpp_compat_combo_0043_person_s_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_person_s_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_PERSON_B_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_PERSON_B_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_b[keyof Person]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_person_b_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person_b[keyof Person]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_person_b_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_person_b_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0044_person_b_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0044_person_b_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_b[keyof Person]",
          "dts2cpp_compat_combo_0044_person_b_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_person_b_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_PERSON_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat165(a: Person[keyof Person[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_person_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person[keyof Person[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_person_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_person_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_person_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_person_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[keyof Person[",
          "dts2cpp_compat_combo_0045_person_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_PERSON_G165_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_PERSON_G165_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_g165[keyof Person]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_person_g165_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person_g165[keyof Person]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_person_g165_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_person_g165_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_person_g165_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_person_g165_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_g165[keyof Person]",
          "dts2cpp_compat_combo_0046_person_g165_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_person_g165_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_PERSON_ANY_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_PERSON_ANY_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_any[keyof Person]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_person_any_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person_any[keyof Person]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_person_any_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_person_any_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0047_person_any_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0047_person_any_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_any[keyof Person]",
          "dts2cpp_compat_combo_0047_person_any_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_person_any_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_COMPAT165_PERSON_V_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_COMPAT165_PERSON_V_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Person_v[keyof Person]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_compat165_person_v_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `class Compat165 { field: Person_v[keyof Person]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_compat165_person_v_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_compat165_person_v_keyof_person convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0048_compat165_person_v_keyof_person must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0048_compat165_person_v_keyof_person must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Person_v[keyof Person]",
          "dts2cpp_compat_combo_0048_compat165_person_v_keyof_person field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_compat165_person_v_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_COMPAT165_X_PERSON_X_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_COMPAT165_X_PERSON_X_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Person_x[keyof Person]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_compat165_x_person_x_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `type Compat165 = { x: Person_x[keyof Person]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_compat165_x_person_x_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_compat165_x_person_x_keyof_person convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0049_compat165_x_person_x_keyof_person must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Person_x[keyof Person]; }",
          "dts2cpp_compat_combo_0049_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_compat165_x_person_x_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_PERSON_Z_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_PERSON_Z_KEYOF_PERSON
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Person_Z[keyof Person]; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_person_z_keyof_person', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat165.ts', `function compat165(a: Person_Z[keyof Person]): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_person_z_keyof_person parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_person_z_keyof_person convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_person_z_keyof_person must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_person_z_keyof_person must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Person_Z[keyof Person]",
          "dts2cpp_compat_combo_0050_person_z_keyof_person param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_person_z_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_DOG_EXTENDS_ANIMAL_NUMBR_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_DOG_EXTENDS_ANIMAL_NUMBR_STRING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (Dog extends Animal ? numbr : string); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `function compat166(a: Dog extends Animal ? numbr : string): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? numbr : string",
          "dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_dog_extends_animal_numbr_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_DOG_EXTENDS_ANIMAL_NUMBER_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_DOG_EXTENDS_ANIMAL_NUMBER_STRNG
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (Dog extends Animal ? number : strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_dog_extends_animal_number_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `function compat166(a: Dog extends Animal ? number : strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_dog_extends_animal_number_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_dog_extends_animal_number_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0052_dog_extends_animal_number_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0052_dog_extends_animal_number_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : strng",
          "dts2cpp_compat_combo_0052_dog_extends_animal_number_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_dog_extends_animal_number_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_DOG_EXTENDS_ANIMAL_NUMBER_CD086B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_DOG_EXTENDS_ANIMAL_NUMBER_CD086B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (Dog extends Animal ? number : string | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `
          function compat166(a: Dog extends Animal ? number : string | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string | b",
          "dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_dog_extends_animal_number_cd086b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_DOG_EXTENDS_ANIMAL_NUMBER_STRIN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_DOG_EXTENDS_ANIMAL_NUMBER_STRIN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj);
   *            conditional/infer typo (Dog extends Animal ? number : strin); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_dog_extends_animal_number_strin', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `function compat166(a: Dog extends Animal ? number : strin): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_dog_extends_animal_number_strin parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_dog_extends_animal_number_strin convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_dog_extends_animal_number_strin must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_dog_extends_animal_number_strin must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : strin",
          "dts2cpp_compat_combo_0054_dog_extends_animal_number_strin param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_dog_extends_animal_number_strin execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_DOG_EXTENDS_ANIMAL_TERNARY_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_DOG_EXTENDS_ANIMAL_TERNARY_NUMBER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); conditional
   *            type (Dog extends Animal ? number : string | TypeAlias166); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `
          function compat166(a: Dog extends Animal ? number : string | g166): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string | g166",
          "dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_dog_extends_animal_ternary_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_DOG_EXTENDS_ANIMAL_NUMBER_47362C
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_DOG_EXTENDS_ANIMAL_NUMBER_47362C
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (Dog extends Animal ? number : string | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `
          function compat166(a: Dog extends Animal ? number : string | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string | any",
          "dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_dog_extends_animal_number_47362c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_COMPAT166_DOG_EXTENDS_ANIMAL_NUMBER_8097E8
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_COMPAT166_DOG_EXTENDS_ANIMAL_NUMBER_8097E8
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Dog extends Animal ? number : string | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `
          class Compat166 { field: Dog extends Animal ? number : string | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Dog extends Animal ? number : string | v",
          "dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_compat166_dog_extends_animal_number_8097e8 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_COMPAT166_X_DOG_EXTENDS_ANIMAL_NUMB_36329E
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_COMPAT166_X_DOG_EXTENDS_ANIMAL_NUMB_36329E
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Dog extends Animal ? number : string | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_compat166_x_dog_extends_animal_numb_36329e', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `type Compat166 = { x: Dog extends Animal ? number : string | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_compat166_x_dog_extends_animal_numb_36329e parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_compat166_x_dog_extends_animal_numb_36329e convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0058_compat166_x_dog_extends_animal_numb_36329e must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Dog extends Animal ? number : string | x; }",
          "dts2cpp_compat_combo_0058_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_compat166_x_dog_extends_animal_numb_36329e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_DOG_EXTENDS_ANIMAL_NUMBER_1121AC
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_DOG_EXTENDS_ANIMAL_NUMBER_1121AC
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (Dog extends Animal ? number : string | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat166.ts', `
          function compat166(a: Dog extends Animal ? number : string | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string | Z",
          "dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_dog_extends_animal_number_1121ac execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_T_EXTENDS_NUMBR_IDLABEL_N_EF5E0A
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_T_EXTENDS_NUMBR_IDLABEL_N_EF5E0A
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (T extends numbr ? IdLabel : NameLabel); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat167.ts', `
          function compat167(a: T extends numbr ? IdLabel : NameLabel): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends numbr ? IdLabel : NameLabel",
          "dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_t_extends_numbr_idlabel_n_ef5e0a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_T_EXTENDS_NUMBER_IDLABEL_F2B8F3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_T_EXTENDS_NUMBER_IDLABEL_F2B8F3
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (T extends number ? IdLabel : NameLabel | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat167.ts', `
          function compat167(a: T extends number ? IdLabel : NameLabel | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel | s",
          "dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_t_extends_number_idlabel_f2b8f3 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_T_EXTENDS_NUMBER_IDLABEL_D98127
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_T_EXTENDS_NUMBER_IDLABEL_D98127
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (T extends number ? IdLabel : NameLabel | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat167.ts', `
          function compat167(a: T extends number ? IdLabel : NameLabel | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel | b",
          "dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_t_extends_number_idlabel_d98127 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_T_EXTENDS_NUMBER_IDLABEL_FBA10B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_T_EXTENDS_NUMBER_IDLABEL_FBA10B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj);
   *            conditional/infer typo (T extends number ? IdLabel : NameLabe); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat167.ts', `
          function compat167(a: T extends number ? IdLabel : NameLabe): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabe",
          "dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_t_extends_number_idlabel_fba10b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_T_EXTENDS_NUMBER_IDLABEL_535805
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_T_EXTENDS_NUMBER_IDLABEL_535805
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (T extends number ? IdLabel : NameLabel | g167); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat167.ts', `
          function compat167(a: T extends number ? IdLabel : NameLabel | g167): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel | g167",
          "dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_t_extends_number_idlabel_535805 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_T_EXTENDS_NUMBER_IDLABEL_C6CB4F
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_T_EXTENDS_NUMBER_IDLABEL_C6CB4F
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (T extends number ? IdLabel : NameLabel | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat167.ts', `
          function compat167(a: T extends number ? IdLabel : NameLabel | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel | any",
          "dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_t_extends_number_idlabel_c6cb4f execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_COMPAT169_X_WORLD_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_COMPAT169_X_WORLD_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member "world_x"; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_compat169_x_world_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat169.ts', `type Compat169 = { x: "world_x"; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_compat169_x_world_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_compat169_x_world_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0011_compat169_x_world_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: \"world_x\"; }", "dts2cpp_compat_combo_0011_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_compat169_x_world_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_WORLD_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_WORLD_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type "world_Z"; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_world_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat169.ts', `function compat169(a: "world_Z"): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_world_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_world_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0012_world_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_world_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "\"world_Z\"",
          "dts2cpp_compat_combo_0012_world_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_world_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_UPPERCASE_GREETINGN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_UPPERCASE_GREETINGN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uppercase<Greetingn>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_uppercase_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: Uppercase<Greetingn>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_uppercase_greetingn parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_uppercase_greetingn convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0013_uppercase_greetingn must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0013_uppercase_greetingn must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greetingn>",
          "dts2cpp_compat_combo_0013_uppercase_greetingn param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_uppercase_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_UPPERCASE_GREETINGS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_UPPERCASE_GREETINGS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uppercase<Greetings>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_uppercase_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: Uppercase<Greetings>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_uppercase_greetings parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_uppercase_greetings convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0014_uppercase_greetings must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0014_uppercase_greetings must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greetings>",
          "dts2cpp_compat_combo_0014_uppercase_greetings param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_uppercase_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_UPPERCASE_GREETINGB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_UPPERCASE_GREETINGB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uppercase<Greetingb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_uppercase_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat173.ts', `function compat173(a: Uppercase<Greetingb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_uppercase_greetingb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_uppercase_greetingb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_uppercase_greetingb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_uppercase_greetingb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greetingb>",
          "dts2cpp_compat_combo_0015_uppercase_greetingb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_uppercase_greetingb execution error: ${err}`);
    }
  });
});
