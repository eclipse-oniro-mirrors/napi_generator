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

suite('Stability_DTS2CPP_COMPAT_TUPLE_Part12', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0017_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0017_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat265(a: [boolean, string, boolean, boolean[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0017_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `function compat265(a: [boolean, string, boolean, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0017_boolean_string_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0017_boolean_string_boolean_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0017_boolean_string_boolean_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0017_boolean_string_boolean_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean[",
            "dts2cpp_compat_tuple_0017_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0017_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0018_BADTYPE265_BOOLEAN_STRING_180556
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0018_BADTYPE265_BOOLEAN_STRING_180556
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType265__boolean__string__boolean__boolean_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0018_badtype265_boolean_string_180556', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `
          function compat265(a: BadType265__boolean__string__boolean__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0018_badtype265_boolean_string_180556 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0018_badtype265_boolean_string_180556 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0018_badtype265_boolean_string_180556 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0018_badtype265_boolean_string_180556 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType265__boolean__string__boolean__boolean_",
            "dts2cpp_compat_tuple_0018_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0018_badtype265_boolean_string_180556 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0019_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0019_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0019_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `function compat265(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0019_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0019_anny_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0019_anny_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0019_anny_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0019_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0019_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0020_COMPAT265_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0020_COMPAT265_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [boolean, string, boolean, boolean]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0020_compat265_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `class Compat265 { field: [boolean, string, boolean, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0020_compat265_boolean_string_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0020_compat265_boolean_string_boolean_boolean convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0020_compat265_boolean_string_boolean_boolean must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0020_compat265_boolean_string_boolean_boolean must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean]",
            "dts2cpp_compat_tuple_0020_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0020_compat265_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0021_COMPAT265_X_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0021_COMPAT265_X_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, string, boolean, boolean]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0021_compat265_x_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `type Compat265 = { x: [boolean, string, boolean, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0021_compat265_x_boolean_string_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0021_compat265_x_boolean_string_boolean_boolean convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0021_compat265_x_boolean_string_boolean_boolean must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, string, boolean, boolean]; }",
            "dts2cpp_compat_tuple_0021_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0021_compat265_x_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0022_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0022_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0022_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `function compat265(a: [boolean, string, boolean, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0022_boolean_string_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0022_boolean_string_boolean_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0022_boolean_string_boolean_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0022_boolean_string_boolean_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean]",
            "dts2cpp_compat_tuple_0022_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0022_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0023_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0023_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0023_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat265.ts', `function compat265(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0023_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0023_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0023_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0023_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0023_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0023_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0024_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0024_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0024_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0024_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0024_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0024_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0024_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0024_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0024_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0025_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0025_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0025_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0025_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0025_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0025_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0025_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0025_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0025_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0026_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0026_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0026_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0026_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0026_boolea_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0026_boolea_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0026_boolea_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0026_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0026_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat266(a: [boolean, boolean, number, number[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0027_boolean_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: [boolean, boolean, number, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0027_boolean_boolean_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0027_boolean_boolean_number_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0027_boolean_boolean_number_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0027_boolean_boolean_number_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number[",
            "dts2cpp_compat_tuple_0027_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0027_boolean_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0028_BADTYPE266_BOOLEAN_BOOLEA_B9F0F2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0028_BADTYPE266_BOOLEAN_BOOLEA_B9F0F2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType266__boolean__boolean__number__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0028_badtype266_boolean_boolea_b9f0f2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `
          function compat266(a: BadType266__boolean__boolean__number__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0028_badtype266_boolean_boolea_b9f0f2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0028_badtype266_boolean_boolea_b9f0f2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0028_badtype266_boolean_boolea_b9f0f2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0028_badtype266_boolean_boolea_b9f0f2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType266__boolean__boolean__number__number_",
            "dts2cpp_compat_tuple_0028_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0028_badtype266_boolean_boolea_b9f0f2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0029_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0029_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0029_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0029_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0029_anny_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0029_anny_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0029_anny_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0029_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0029_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0030_COMPAT266_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0030_COMPAT266_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [boolean, boolean, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0030_compat266_boolean_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `class Compat266 { field: [boolean, boolean, number, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0030_compat266_boolean_boolean_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0030_compat266_boolean_boolean_number_number convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0030_compat266_boolean_boolean_number_number must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0030_compat266_boolean_boolean_number_number must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, number]",
            "dts2cpp_compat_tuple_0030_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0030_compat266_boolean_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0031_COMPAT266_X_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0031_COMPAT266_X_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, boolean, number, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0031_compat266_x_boolean_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `type Compat266 = { x: [boolean, boolean, number, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0031_compat266_x_boolean_boolean_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0031_compat266_x_boolean_boolean_number_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0031_compat266_x_boolean_boolean_number_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, boolean, number, number]; }",
            "dts2cpp_compat_tuple_0031_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0031_compat266_x_boolean_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0032_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0032_BOOLEAN_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0032_boolean_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: [boolean, boolean, number, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0032_boolean_boolean_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0032_boolean_boolean_number_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0032_boolean_boolean_number_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0032_boolean_boolean_number_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number]",
            "dts2cpp_compat_tuple_0032_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0032_boolean_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0033_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0033_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0033_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat266.ts', `function compat266(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0033_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0033_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0033_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0033_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0033_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0033_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0034_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0034_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0034_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0034_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0034_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0034_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0034_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0034_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0034_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0035_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0035_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0035_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0035_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0035_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0035_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0035_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0035_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0035_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0036_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0036_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0036_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0036_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0036_boolea_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0036_boolea_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0036_boolea_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0036_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0036_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0037_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0037_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat267(a: [boolean, boolean, number, string[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0037_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: [boolean, boolean, number, string[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0037_boolean_boolean_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0037_boolean_boolean_number_string convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0037_boolean_boolean_number_string must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0037_boolean_boolean_number_string must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string[",
            "dts2cpp_compat_tuple_0037_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0037_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0038_BADTYPE267_BOOLEAN_BOOLEA_0AD99E
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0038_BADTYPE267_BOOLEAN_BOOLEA_0AD99E
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType267__boolean__boolean__number__string_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0038_badtype267_boolean_boolea_0ad99e', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `
          function compat267(a: BadType267__boolean__boolean__number__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0038_badtype267_boolean_boolea_0ad99e parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0038_badtype267_boolean_boolea_0ad99e convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0038_badtype267_boolean_boolea_0ad99e must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0038_badtype267_boolean_boolea_0ad99e must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType267__boolean__boolean__number__string_",
            "dts2cpp_compat_tuple_0038_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0038_badtype267_boolean_boolea_0ad99e execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0039_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0039_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0039_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0039_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0039_anny_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0039_anny_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0039_anny_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0039_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0039_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0040_COMPAT267_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0040_COMPAT267_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [boolean, boolean, number, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0040_compat267_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `class Compat267 { field: [boolean, boolean, number, string]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0040_compat267_boolean_boolean_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0040_compat267_boolean_boolean_number_string convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0040_compat267_boolean_boolean_number_string must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0040_compat267_boolean_boolean_number_string must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string]",
            "dts2cpp_compat_tuple_0040_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0040_compat267_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0041_COMPAT267_X_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0041_COMPAT267_X_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, boolean, number, string]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0041_compat267_x_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `type Compat267 = { x: [boolean, boolean, number, string]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0041_compat267_x_boolean_boolean_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0041_compat267_x_boolean_boolean_number_string convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0041_compat267_x_boolean_boolean_number_string must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, boolean, number, string]; }",
            "dts2cpp_compat_tuple_0041_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0041_compat267_x_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0042_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0042_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0042_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: [boolean, boolean, number, string],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0042_boolean_boolean_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0042_boolean_boolean_number_string convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0042_boolean_boolean_number_string must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0042_boolean_boolean_number_string must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string]",
            "dts2cpp_compat_tuple_0042_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0042_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0043_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0043_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0043_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat267.ts', `function compat267(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0043_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0043_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0043_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0043_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0043_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0043_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0044_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0044_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0044_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0044_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0044_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0044_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0044_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0044_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0044_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0045_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0045_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0045_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0045_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0045_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0045_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0045_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0045_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0045_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0046_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0046_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0046_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0046_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0046_boolea_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0046_boolea_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0046_boolea_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0046_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0046_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0047_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0047_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat268(a: [boolean, boolean, number, boolean[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0047_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: [boolean, boolean, number, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0047_boolean_boolean_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0047_boolean_boolean_number_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0047_boolean_boolean_number_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0047_boolean_boolean_number_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean[",
            "dts2cpp_compat_tuple_0047_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0047_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0048_BADTYPE268_BOOLEAN_BOOLEA_88F1A5
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0048_BADTYPE268_BOOLEAN_BOOLEA_88F1A5
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType268__boolean__boolean__number__boolean_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0048_badtype268_boolean_boolea_88f1a5', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `
          function compat268(a: BadType268__boolean__boolean__number__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0048_badtype268_boolean_boolea_88f1a5 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0048_badtype268_boolean_boolea_88f1a5 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0048_badtype268_boolean_boolea_88f1a5 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0048_badtype268_boolean_boolea_88f1a5 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType268__boolean__boolean__number__boolean_",
            "dts2cpp_compat_tuple_0048_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0048_badtype268_boolean_boolea_88f1a5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0049_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0049_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0049_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0049_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0049_anny_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0049_anny_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0049_anny_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0049_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0049_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0050_COMPAT268_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0050_COMPAT268_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [boolean, boolean, number, boolean]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0050_compat268_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `class Compat268 { field: [boolean, boolean, number, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0050_compat268_boolean_boolean_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0050_compat268_boolean_boolean_number_boolean convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0050_compat268_boolean_boolean_number_boolean must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0050_compat268_boolean_boolean_number_boolean must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
            "dts2cpp_compat_tuple_0050_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0050_compat268_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0051_COMPAT268_X_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0051_COMPAT268_X_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, boolean, number, boolean]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0051_compat268_x_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `type Compat268 = { x: [boolean, boolean, number, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0051_compat268_x_boolean_boolean_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0051_compat268_x_boolean_boolean_number_boolean convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0051_compat268_x_boolean_boolean_number_boolean must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, boolean, number, boolean]; }",
            "dts2cpp_compat_tuple_0051_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0051_compat268_x_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0052_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0052_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0052_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: [boolean, boolean, number, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0052_boolean_boolean_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0052_boolean_boolean_number_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0052_boolean_boolean_number_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0052_boolean_boolean_number_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean]",
            "dts2cpp_compat_tuple_0052_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0052_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0053_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0053_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0053_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat268.ts', `function compat268(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0053_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0053_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0053_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0053_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0053_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0053_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0054_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0054_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0054_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0054_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0054_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0054_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0054_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0054_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0054_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0055_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0055_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0055_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0055_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0055_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0055_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0055_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0055_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0055_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0056_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0056_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0056_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0056_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0056_boolea_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0056_boolea_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0056_boolea_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0056_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0056_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0057_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0057_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat269(a: [boolean, boolean, string, number[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0057_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: [boolean, boolean, string, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0057_boolean_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0057_boolean_boolean_string_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0057_boolean_boolean_string_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0057_boolean_boolean_string_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number[",
            "dts2cpp_compat_tuple_0057_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0057_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0058_BADTYPE269_BOOLEAN_BOOLEA_31DE00
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0058_BADTYPE269_BOOLEAN_BOOLEA_31DE00
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType269__boolean__boolean__string__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0058_badtype269_boolean_boolea_31de00', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `
          function compat269(a: BadType269__boolean__boolean__string__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0058_badtype269_boolean_boolea_31de00 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0058_badtype269_boolean_boolea_31de00 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0058_badtype269_boolean_boolea_31de00 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0058_badtype269_boolean_boolea_31de00 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType269__boolean__boolean__string__number_",
            "dts2cpp_compat_tuple_0058_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0058_badtype269_boolean_boolea_31de00 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0059_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0059_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0059_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0059_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0059_anny_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0059_anny_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0059_anny_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0059_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0059_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0060_COMPAT269_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0060_COMPAT269_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [boolean, boolean, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0060_compat269_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `class Compat269 { field: [boolean, boolean, string, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0060_compat269_boolean_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0060_compat269_boolean_boolean_string_number convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0060_compat269_boolean_boolean_string_number must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0060_compat269_boolean_boolean_string_number must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number]",
            "dts2cpp_compat_tuple_0060_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0060_compat269_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0061_COMPAT269_X_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0061_COMPAT269_X_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, boolean, string, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0061_compat269_x_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `type Compat269 = { x: [boolean, boolean, string, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0061_compat269_x_boolean_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0061_compat269_x_boolean_boolean_string_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0061_compat269_x_boolean_boolean_string_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, boolean, string, number]; }",
            "dts2cpp_compat_tuple_0061_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0061_compat269_x_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0062_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0062_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0062_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: [boolean, boolean, string, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0062_boolean_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0062_boolean_boolean_string_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0062_boolean_boolean_string_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0062_boolean_boolean_string_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number]",
            "dts2cpp_compat_tuple_0062_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0062_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0063_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0063_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0063_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat269.ts', `function compat269(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0063_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0063_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0063_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0063_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0063_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0063_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0064_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0064_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0064_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat270.ts', `function compat270(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0064_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0064_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0064_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0064_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0064_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0064_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0065_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0065_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0065_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat270.ts', `function compat270(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0065_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0065_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0065_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0065_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0065_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0065_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0066_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0066_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0066_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat270.ts', `function compat270(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0066_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0066_boolea_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0066_boolea_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0066_boolea_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0066_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0066_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0001_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0001_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0001_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat272.ts', `function compat272(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0001_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0001_anny_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0001_anny_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0001_anny_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0001_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0001_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0002_COMPAT272_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0002_COMPAT272_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [boolean, boolean, boolean, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0002_compat272_boolean_boolean_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat272.ts', `class Compat272 { field: [boolean, boolean, boolean, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0002_compat272_boolean_boolean_boolean_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0002_compat272_boolean_boolean_boolean_number convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0002_compat272_boolean_boolean_boolean_number must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0002_compat272_boolean_boolean_boolean_number must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean, number]",
            "dts2cpp_compat_tuple_0002_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0002_compat272_boolean_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0003_COMPAT272_X_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0003_COMPAT272_X_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, boolean, boolean, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0003_compat272_x_boolean_boolean_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat272.ts', `type Compat272 = { x: [boolean, boolean, boolean, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0003_compat272_x_boolean_boolean_boolean_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0003_compat272_x_boolean_boolean_boolean_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0003_compat272_x_boolean_boolean_boolean_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, boolean, boolean, number]; }",
            "dts2cpp_compat_tuple_0003_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0003_compat272_x_boolean_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0004_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0004_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0004_boolean_boolean_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat272.ts', `function compat272(a: [boolean, boolean, boolean, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0004_boolean_boolean_boolean_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0004_boolean_boolean_boolean_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0004_boolean_boolean_boolean_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0004_boolean_boolean_boolean_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, number]",
            "dts2cpp_compat_tuple_0004_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0004_boolean_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0005_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0005_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0005_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat272.ts', `function compat272(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0005_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0005_numbr_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0005_numbr_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0005_numbr_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0005_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0005_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0006_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0006_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0006_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat273.ts', `function compat273(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0006_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0006_numbr_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0006_numbr_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0006_numbr_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0006_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0006_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0007_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0007_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0007_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat273.ts', `function compat273(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0007_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0007_strng_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0007_strng_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0007_strng_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0007_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0007_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0008_BOOLEA_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0008_BOOLEA_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0008_boolea_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat273.ts', `function compat273(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0008_boolea_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0008_boolea_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0008_boolea_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0008_boolea_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0008_boolea_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0008_boolea_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0009_BOOLEAN_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0009_BOOLEAN_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat273(a: [boolean, boolean, boolean, string[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0009_boolean_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat273.ts', `function compat273(a: [boolean, boolean, boolean, string[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0009_boolean_boolean_boolean_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0009_boolean_boolean_boolean_string convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0009_boolean_boolean_boolean_string must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0009_boolean_boolean_boolean_string must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, string[",
            "dts2cpp_compat_tuple_0009_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0009_boolean_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0010_BADTYPE273_BOOLEAN_BOOLEA_6BE37B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0010_BADTYPE273_BOOLEAN_BOOLEA_6BE37B
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType273__boolean__boolean__boolean__string_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0010_badtype273_boolean_boolea_6be37b', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat273.ts', `
          function compat273(a: BadType273__boolean__boolean__boolean__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0010_badtype273_boolean_boolea_6be37b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0010_badtype273_boolean_boolea_6be37b convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0010_badtype273_boolean_boolea_6be37b must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0010_badtype273_boolean_boolea_6be37b must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType273__boolean__boolean__boolean__string_",
            "dts2cpp_compat_tuple_0010_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0010_badtype273_boolean_boolea_6be37b execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0011_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0011_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0011_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat273.ts', `function compat273(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0011_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0011_anny_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0011_anny_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0011_anny_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0011_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0011_anny_v3 execution error: ${String(err)}`);
    }
  });
});
