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

suite('Stability_DTS2CPP_COMPAT_TUPLE_Part11', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0022_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0022_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0022_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat257.ts', `function compat257(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0022_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0022_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0022_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0022_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0022_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0022_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0023_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0023_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0023_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat257.ts', `function compat257(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0023_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0023_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0023_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0023_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0023_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0023_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0024_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0024_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0024_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat257.ts', `function compat257(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0024_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0024_boolea_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0024_boolea_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0024_boolea_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
            "dts2cpp_compat_tuple_0024_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0024_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0025_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0025_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            source function compat257(a: [boolean, string, number, number[): void {}; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0025_boolean_string_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat257.ts', `function compat257(a: [boolean, string, number, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0025_boolean_string_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0025_boolean_string_number_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0025_boolean_string_number_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0025_boolean_string_number_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number[",
            "dts2cpp_compat_tuple_0025_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0025_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0026_BADTYPE257_BOOLEAN_STRING_050A3F
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0026_BADTYPE257_BOOLEAN_STRING_050A3F
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType257__boolean__string__number__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0026_badtype257_boolean_string_050a3f', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat257.ts', `
          function compat257(a: BadType257__boolean__string__number__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0026_badtype257_boolean_string_050a3f parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0026_badtype257_boolean_string_050a3f convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0026_badtype257_boolean_string_050a3f must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0026_badtype257_boolean_string_050a3f must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType257__boolean__string__number__number_",
            "dts2cpp_compat_tuple_0026_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0026_badtype257_boolean_string_050a3f execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
