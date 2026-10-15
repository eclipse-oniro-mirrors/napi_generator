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

suite('Stability_DTS2CPP_COMPAT_TUPLE_Part10', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_COMPAT248_X_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0027_COMPAT248_X_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [boolean, number, number, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0027_compat248_x_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat248.ts', `type Compat248 = { x: [boolean, number, number, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0027_compat248_x_boolean_number_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0027_compat248_x_boolean_number_number_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0027_compat248_x_boolean_number_number_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, number, number, number]; }",
            "dts2cpp_compat_tuple_0027_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0027_compat248_x_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0028_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0028_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0028_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat248.ts', `function compat248(a: [boolean, number, number, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0028_boolean_number_number_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0028_boolean_number_number_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0028_boolean_number_number_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0028_boolean_number_number_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
            "dts2cpp_compat_tuple_0028_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0028_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0029_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0029_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0029_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat248.ts', `function compat248(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0029_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0029_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0029_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0029_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0029_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0029_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0030_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0030_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0030_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat249.ts', `function compat249(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0030_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0030_numbr_v3 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0030_numbr_v3 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0030_numbr_v3 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
            "dts2cpp_compat_tuple_0030_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0030_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0031_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0031_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0031_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat249.ts', `function compat249(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0031_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0031_strng_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0031_strng_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0031_strng_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
            "dts2cpp_compat_tuple_0031_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0031_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0032_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0032_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
