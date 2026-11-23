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

suite('Stability_DTS2CPP_COMPAT_TUPLE_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0055_COMPAT198_X_NUMBER_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0055_COMPAT198_X_NUMBER_NUMBER_STRING_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, number, string, string]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0055_compat198_x_number_number_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `type Compat198 = { x: [number, number, string, string]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0055_compat198_x_number_number_string_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0055_compat198_x_number_number_string_string convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0055_compat198_x_number_number_string_string must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, string, string]; }",
            "dts2cpp_compat_tuple_0055_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0055_compat198_x_number_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0056_NUMBER_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0056_NUMBER_NUMBER_STRING_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0056_number_number_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: [number, number, string, string],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0056_number_number_string_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0056_number_number_string_string convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0056_number_number_string_string must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0056_number_number_string_string must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, string]",
            "dts2cpp_compat_tuple_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0056_number_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0057_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0057_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0057_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0057_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0057_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0057_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0057_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0057_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0057_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0058_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0058_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0058_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0058_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0058_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0058_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0058_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0058_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0058_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0059_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0059_STRNG
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0059_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0059_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0059_strng convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0059_strng must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0059_strng must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0059_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0059_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0060_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0060_BOOLEA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0060_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0060_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0060_boolea convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0060_boolea must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0060_boolea must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0060_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0060_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0061_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0061_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat199(a: [number, number, string, boolean[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0061_number_number_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: [number, number, string, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0061_number_number_string_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0061_number_number_string_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0061_number_number_string_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0061_number_number_string_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, boolean[",
            "dts2cpp_compat_tuple_0061_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0061_number_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0062_BADTYPE199_NUMBER_NUMBER_69788E
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0062_BADTYPE199_NUMBER_NUMBER_69788E
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType199__number__number__string__boolean_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0062_badtype199_number_number_69788e', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `
          function compat199(a: BadType199__number__number__string__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0062_badtype199_number_number_69788e parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0062_badtype199_number_number_69788e convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0062_badtype199_number_number_69788e must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0062_badtype199_number_number_69788e must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType199__number__number__string__boolean_",
            "dts2cpp_compat_tuple_0062_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0062_badtype199_number_number_69788e execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0063_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0063_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0063_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0063_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0063_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0063_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0063_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0063_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0063_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0064_COMPAT199_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0064_COMPAT199_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, number, string, boolean]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0064_compat199_number_number_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `class Compat199 { field: [number, number, string, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0064_compat199_number_number_string_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0064_compat199_number_number_string_boolean convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0064_compat199_number_number_string_boolean must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0064_compat199_number_number_string_boolean must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string, boolean]",
            "dts2cpp_compat_tuple_0064_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0064_compat199_number_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0065_COMPAT199_X_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0065_COMPAT199_X_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, number, string, boolean]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0065_compat199_x_number_number_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `type Compat199 = { x: [number, number, string, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0065_compat199_x_number_number_string_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0065_compat199_x_number_number_string_boolean convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0065_compat199_x_number_number_string_boolean must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, string, boolean]; }",
            "dts2cpp_compat_tuple_0065_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0065_compat199_x_number_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0066_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0066_NUMBER_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0066_number_number_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: [number, number, string, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0066_number_number_string_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0066_number_number_string_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0066_number_number_string_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0066_number_number_string_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, boolean]",
            "dts2cpp_compat_tuple_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0066_number_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0001_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0001_STRNG
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0001_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0001_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0001_strng convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0001_strng must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0001_strng must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0001_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0001_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0002_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0002_BOOLEA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0002_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0002_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0002_boolea convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0002_boolea must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0002_boolea must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0002_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0002_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0003_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0003_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat202(a: [number, number, boolean, boolean[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0003_number_number_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: [number, number, boolean, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0003_number_number_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0003_number_number_boolean_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0003_number_number_boolean_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0003_number_number_boolean_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, boolean[",
            "dts2cpp_compat_tuple_0003_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0003_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0004_BADTYPE202_NUMBER_NUMBER_1C4B87
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0004_BADTYPE202_NUMBER_NUMBER_1C4B87
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType202__number__number__boolean__boolean_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0004_badtype202_number_number_1c4b87', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `
          function compat202(a: BadType202__number__number__boolean__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0004_badtype202_number_number_1c4b87 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0004_badtype202_number_number_1c4b87 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0004_badtype202_number_number_1c4b87 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0004_badtype202_number_number_1c4b87 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType202__number__number__boolean__boolean_",
            "dts2cpp_compat_tuple_0004_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0004_badtype202_number_number_1c4b87 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0005_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0005_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0005_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0005_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0005_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0005_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0005_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0005_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0005_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0006_COMPAT202_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0006_COMPAT202_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, number, boolean, boolean]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0006_compat202_number_number_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `class Compat202 { field: [number, number, boolean, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0006_compat202_number_number_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0006_compat202_number_number_boolean_boolean convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0006_compat202_number_number_boolean_boolean must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0006_compat202_number_number_boolean_boolean must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean, boolean]",
            "dts2cpp_compat_tuple_0006_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0006_compat202_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0007_COMPAT202_X_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0007_COMPAT202_X_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, number, boolean, boolean]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0007_compat202_x_number_number_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `type Compat202 = { x: [number, number, boolean, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0007_compat202_x_number_number_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0007_compat202_x_number_number_boolean_boolean convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0007_compat202_x_number_number_boolean_boolean must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, boolean, boolean]; }",
            "dts2cpp_compat_tuple_0007_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0007_compat202_x_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0008_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0008_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0008_number_number_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: [number, number, boolean, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0008_number_number_boolean_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0008_number_number_boolean_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0008_number_number_boolean_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0008_number_number_boolean_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, boolean]",
            "dts2cpp_compat_tuple_0008_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0008_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0009_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0009_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0009_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0009_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0009_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0009_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0009_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0009_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0009_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0010_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0010_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0010_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0010_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0010_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0010_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0010_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0010_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0010_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0011_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0011_STRNG
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0011_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0011_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0011_strng convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0011_strng must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0011_strng must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0011_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0011_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0012_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0012_BOOLEA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0012_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0012_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0012_boolea convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0012_boolea must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0012_boolea must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0012_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0012_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0013_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0013_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat203(a: [number, string, number, number[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0013_number_string_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: [number, string, number, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0013_number_string_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0013_number_string_number_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0013_number_string_number_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0013_number_string_number_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number[",
            "dts2cpp_compat_tuple_0013_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0013_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0014_BADTYPE203_NUMBER_STRING_6DB26A
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0014_BADTYPE203_NUMBER_STRING_6DB26A
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType203__number__string__number__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0014_badtype203_number_string_6db26a', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: BadType203__number__string__number__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0014_badtype203_number_string_6db26a parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0014_badtype203_number_string_6db26a convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0014_badtype203_number_string_6db26a must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0014_badtype203_number_string_6db26a must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType203__number__string__number__number_",
            "dts2cpp_compat_tuple_0014_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0014_badtype203_number_string_6db26a execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0015_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0015_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0015_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0015_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0015_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0015_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0015_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0015_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0015_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0016_COMPAT203_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0016_COMPAT203_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, string, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0016_compat203_number_string_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `class Compat203 { field: [number, string, number, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0016_compat203_number_string_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0016_compat203_number_string_number_number convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0016_compat203_number_string_number_number must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0016_compat203_number_string_number_number must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, number]",
            "dts2cpp_compat_tuple_0016_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0016_compat203_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0017_COMPAT203_X_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0017_COMPAT203_X_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, string, number, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0017_compat203_x_number_string_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `type Compat203 = { x: [number, string, number, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0017_compat203_x_number_string_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0017_compat203_x_number_string_number_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0017_compat203_x_number_string_number_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, string, number, number]; }",
            "dts2cpp_compat_tuple_0017_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0017_compat203_x_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0018_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0018_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0018_number_string_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: [number, string, number, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0018_number_string_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0018_number_string_number_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0018_number_string_number_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0018_number_string_number_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
            "dts2cpp_compat_tuple_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0018_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0019_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0019_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0019_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat203.ts', `function compat203(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0019_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0019_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0019_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0019_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0019_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0019_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0020_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0020_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0020_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0020_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0020_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0020_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0020_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0020_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0020_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0021_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0021_STRNG
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0021_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0021_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0021_strng convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0021_strng must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0021_strng must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0021_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0021_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0022_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0022_BOOLEA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0022_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0022_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0022_boolea convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0022_boolea must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0022_boolea must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0022_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0022_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0023_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0023_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat204(a: [number, string, number, string[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0023_number_string_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: [number, string, number, string[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0023_number_string_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0023_number_string_number_string convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0023_number_string_number_string must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0023_number_string_number_string must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string[",
            "dts2cpp_compat_tuple_0023_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0023_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0024_BADTYPE204_NUMBER_STRING_F3C84F
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0024_BADTYPE204_NUMBER_STRING_F3C84F
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType204__number__string__number__string_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0024_badtype204_number_string_f3c84f', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: BadType204__number__string__number__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0024_badtype204_number_string_f3c84f parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0024_badtype204_number_string_f3c84f convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0024_badtype204_number_string_f3c84f must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0024_badtype204_number_string_f3c84f must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType204__number__string__number__string_",
            "dts2cpp_compat_tuple_0024_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0024_badtype204_number_string_f3c84f execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0025_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0025_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0025_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0025_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0025_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0025_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0025_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0025_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0025_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0026_COMPAT204_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0026_COMPAT204_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, string, number, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0026_compat204_number_string_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `class Compat204 { field: [number, string, number, string]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0026_compat204_number_string_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0026_compat204_number_string_number_string convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0026_compat204_number_string_number_string must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0026_compat204_number_string_number_string must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, string]",
            "dts2cpp_compat_tuple_0026_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0026_compat204_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_COMPAT204_X_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_COMPAT204_X_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, string, number, string]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0027_compat204_x_number_string_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `type Compat204 = { x: [number, string, number, string]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0027_compat204_x_number_string_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0027_compat204_x_number_string_number_string convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0027_compat204_x_number_string_number_string must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, string, number, string]; }",
            "dts2cpp_compat_tuple_0027_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0027_compat204_x_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0028_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0028_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0028_number_string_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: [number, string, number, string],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0028_number_string_number_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0028_number_string_number_string convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0028_number_string_number_string must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0028_number_string_number_string must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
            "dts2cpp_compat_tuple_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0028_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0029_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0029_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0029_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat204.ts', `function compat204(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0029_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0029_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0029_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0029_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0029_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0029_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0030_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0030_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0030_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0030_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0030_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0030_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0030_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0030_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0030_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0031_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0031_STRNG
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0031_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0031_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0031_strng convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0031_strng must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0031_strng must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0031_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0031_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0032_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0032_BOOLEA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0032_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0032_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0032_boolea convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0032_boolea must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0032_boolea must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0032_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0032_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0033_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0033_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat205(a: [number, string, number, boolean[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0033_number_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: [number, string, number, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0033_number_string_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0033_number_string_number_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0033_number_string_number_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0033_number_string_number_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean[",
            "dts2cpp_compat_tuple_0033_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0033_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0034_BADTYPE205_NUMBER_STRING_F33D08
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0034_BADTYPE205_NUMBER_STRING_F33D08
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType205__number__string__number__boolean_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0034_badtype205_number_string_f33d08', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `
          function compat205(a: BadType205__number__string__number__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0034_badtype205_number_string_f33d08 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0034_badtype205_number_string_f33d08 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0034_badtype205_number_string_f33d08 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0034_badtype205_number_string_f33d08 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType205__number__string__number__boolean_",
            "dts2cpp_compat_tuple_0034_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0034_badtype205_number_string_f33d08 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0035_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0035_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0035_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0035_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0035_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0035_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0035_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0035_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0035_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0036_COMPAT205_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0036_COMPAT205_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, string, number, boolean]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0036_compat205_number_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `class Compat205 { field: [number, string, number, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0036_compat205_number_string_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0036_compat205_number_string_number_boolean convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0036_compat205_number_string_number_boolean must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0036_compat205_number_string_number_boolean must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, boolean]",
            "dts2cpp_compat_tuple_0036_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0036_compat205_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0037_COMPAT205_X_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0037_COMPAT205_X_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, string, number, boolean]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0037_compat205_x_number_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `type Compat205 = { x: [number, string, number, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0037_compat205_x_number_string_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0037_compat205_x_number_string_number_boolean convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0037_compat205_x_number_string_number_boolean must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, string, number, boolean]; }",
            "dts2cpp_compat_tuple_0037_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0037_compat205_x_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0038_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0038_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0038_number_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: [number, string, number, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0038_number_string_number_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0038_number_string_number_boolean convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0038_number_string_number_boolean must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0038_number_string_number_boolean must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
            "dts2cpp_compat_tuple_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0038_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0039_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0039_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0039_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat205.ts', `function compat205(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0039_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0039_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0039_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0039_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0039_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0039_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0040_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0040_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0040_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0040_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0040_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0040_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0040_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0040_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0040_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0041_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0041_STRNG
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0041_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0041_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0041_strng convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0041_strng must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0041_strng must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0041_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0041_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0042_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0042_BOOLEA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0042_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0042_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0042_boolea convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0042_boolea must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0042_boolea must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0042_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0042_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0043_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0043_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat206(a: [number, string, string, number[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0043_number_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: [number, string, string, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0043_number_string_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0043_number_string_string_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0043_number_string_string_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0043_number_string_string_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number[",
            "dts2cpp_compat_tuple_0043_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0043_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0044_BADTYPE206_NUMBER_STRING_7D33AA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0044_BADTYPE206_NUMBER_STRING_7D33AA
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType206__number__string__string__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0044_badtype206_number_string_7d33aa', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: BadType206__number__string__string__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0044_badtype206_number_string_7d33aa parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0044_badtype206_number_string_7d33aa convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0044_badtype206_number_string_7d33aa must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0044_badtype206_number_string_7d33aa must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType206__number__string__string__number_",
            "dts2cpp_compat_tuple_0044_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0044_badtype206_number_string_7d33aa execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0045_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0045_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0045_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0045_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0045_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0045_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0045_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0045_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0045_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0046_COMPAT206_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0046_COMPAT206_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, string, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0046_compat206_number_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `class Compat206 { field: [number, string, string, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0046_compat206_number_string_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0046_compat206_number_string_string_number convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0046_compat206_number_string_string_number must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0046_compat206_number_string_string_number must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, number]",
            "dts2cpp_compat_tuple_0046_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0046_compat206_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0047_COMPAT206_X_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0047_COMPAT206_X_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, string, string, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0047_compat206_x_number_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `type Compat206 = { x: [number, string, string, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0047_compat206_x_number_string_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0047_compat206_x_number_string_string_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0047_compat206_x_number_string_string_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, string, string, number]; }",
            "dts2cpp_compat_tuple_0047_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0047_compat206_x_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0048_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0048_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0048_number_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: [number, string, string, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0048_number_string_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0048_number_string_string_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0048_number_string_string_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0048_number_string_string_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
            "dts2cpp_compat_tuple_0048_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0048_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0049_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0049_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0049_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0049_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0049_numbr convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0049_numbr must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0049_numbr must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0049_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0049_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0050_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0050_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0050_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0050_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0050_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0050_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0050_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0050_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0050_numbr_v2 execution error: ${String(err)}`);
    }
  });
});
