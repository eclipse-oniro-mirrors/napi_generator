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

suite('Stability_DTS2CPP_COMPAT_TUPLE_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0046_BADTYPE215_NUMBER_BOOLEAN_86C05F
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0046_BADTYPE215_NUMBER_BOOLEAN_86C05F
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (BadType215__number__boolean__string__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0046_badtype215_number_boolean_86c05f', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `
          function compat215(a: BadType215__number__boolean__string__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0046_badtype215_number_boolean_86c05f parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0046_badtype215_number_boolean_86c05f convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0046_badtype215_number_boolean_86c05f must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0046_badtype215_number_boolean_86c05f must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType215__number__boolean__string__number_",
            "dts2cpp_compat_tuple_0046_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0046_badtype215_number_boolean_86c05f execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0047_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0047_ANNY
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0047_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0047_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0047_anny convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0047_anny must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0047_anny must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
            "dts2cpp_compat_tuple_0047_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0047_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0048_COMPAT215_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0048_COMPAT215_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type [number, boolean, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0048_compat215_number_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `class Compat215 { field: [number, boolean, string, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0048_compat215_number_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0048_compat215_number_boolean_string_number convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0048_compat215_number_boolean_string_number must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0048_compat215_number_boolean_string_number must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, number]",
            "dts2cpp_compat_tuple_0048_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0048_compat215_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0049_COMPAT215_X_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0049_COMPAT215_X_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member [number, boolean, string, number]; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0049_compat215_x_number_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `type Compat215 = { x: [number, boolean, string, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0049_compat215_x_number_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0049_compat215_x_number_boolean_string_number convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0049_compat215_x_number_boolean_string_number must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, boolean, string, number]; }",
            "dts2cpp_compat_tuple_0049_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0049_compat215_x_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0050_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0050_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0050_number_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: [number, boolean, string, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0050_number_boolean_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0050_number_boolean_string_number convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0050_number_boolean_string_number must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0050_number_boolean_string_number must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
            "dts2cpp_compat_tuple_0050_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0050_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0051_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0051_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_tuple_0051_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat215.ts', `function compat215(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0051_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0051_numbr_v2 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0051_numbr_v2 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0051_numbr_v2 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
            "dts2cpp_compat_tuple_0051_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0051_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0052_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_TUPLE_0052_NUMBR
   * @tc.desc   Stability compat dts2cpp/tuple: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
