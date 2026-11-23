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

suite('Stability_DTS2CPP_COMPAT_FUNC_Part13', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0027_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0027_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0027_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0027_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0027_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0027_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0027_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0028_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0028_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0028_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0028_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0028_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0028_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0028_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:object,p1:boolean)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0029_object_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: (p0:object,p1:boolean)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0029_object_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0029_object_p1_boolean convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0029_object_p1_boolean must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0029_object_p1_boolean must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
          "dts2cpp_compat_func_0029_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0029_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0030_OBJECT_P1_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0030_OBJECT_P1_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:object,p1:boolea)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0030_object_p1_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: (p0:object,p1:boolea)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0030_object_p1_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0030_object_p1_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0030_object_p1_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0030_object_p1_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, boolea)>",
          "dts2cpp_compat_func_0030_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0030_object_p1_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0031_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0031_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0031_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0031_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0031_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0031_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0031_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0031_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0031_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0032_COMPAT130_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0032_COMPAT130_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:object,p1:boolean)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0032_compat130_object_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `class Compat130 { field: (p0:object,p1:boolean)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0032_compat130_object_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0032_compat130_object_p1_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0032_compat130_object_p1_boolean must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0032_compat130_object_p1_boolean must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
          "dts2cpp_compat_func_0032_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0032_compat130_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_COMPAT130_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_COMPAT130_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:object,p1:boolean)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0033_compat130_object_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `type Compat130 = { x: (p0:object,p1:boolean)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0033_compat130_object_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0033_compat130_object_p1_boolean convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0033_compat130_object_p1_boolean must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:object,p1:boolean)=>object; }",
          "dts2cpp_compat_func_0033_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0033_compat130_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0034_object_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: (p0:object,p1:boolean)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0034_object_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0034_object_p1_boolean convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0034_object_p1_boolean must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0034_object_p1_boolean must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
          "dts2cpp_compat_func_0034_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0034_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0035_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat130.ts', `function compat130(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0035_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0035_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0035_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0035_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0035_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0035_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0036_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0036_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0036_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0036_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0036_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0036_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0036_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0037_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0037_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0037_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0037_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0037_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0037_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0037_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0038_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0038_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0038_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0038_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0038_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0038_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0038_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_NUMBER_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:number,p1:any)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0039_number_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: (p0:number,p1:any)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0039_number_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0039_number_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0039_number_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0039_number_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
          "dts2cpp_compat_func_0039_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0039_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_NUMBR_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_NUMBR_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:numbr,p1:any)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0040_numbr_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: (p0:numbr,p1:any)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0040_numbr_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0040_numbr_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0040_numbr_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0040_numbr_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(numbr, std::any)>",
          "dts2cpp_compat_func_0040_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0040_numbr_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0041_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0041_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0041_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0041_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0041_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0041_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0041_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_COMPAT131_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_COMPAT131_NUMBER_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:number,p1:any)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0042_compat131_number_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `class Compat131 { field: (p0:number,p1:any)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0042_compat131_number_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0042_compat131_number_p1_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0042_compat131_number_p1_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0042_compat131_number_p1_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
          "dts2cpp_compat_func_0042_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0042_compat131_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_COMPAT131_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_COMPAT131_NUMBER_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:number,p1:any)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0043_compat131_number_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `type Compat131 = { x: (p0:number,p1:any)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0043_compat131_number_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0043_compat131_number_p1_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0043_compat131_number_p1_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number,p1:any)=>object; }",
          "dts2cpp_compat_func_0043_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0043_compat131_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_NUMBER_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0044_number_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: (p0:number,p1:any)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0044_number_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0044_number_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0044_number_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0044_number_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
          "dts2cpp_compat_func_0044_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0044_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0045_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat131.ts', `function compat131(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0045_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0045_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0045_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0045_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0045_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0045_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0046_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0046_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0046_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0046_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0046_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0046_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0046_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0047_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0047_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0047_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0047_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0047_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0047_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0047_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0048_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0048_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0048_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0048_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0048_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0048_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0048_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_NUMBER_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:number,p1:object)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0049_number_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: (p0:number,p1:object)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0049_number_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0049_number_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0049_number_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0049_number_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
          "dts2cpp_compat_func_0049_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0049_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_NUMBR_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_NUMBR_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:numbr,p1:object)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0050_numbr_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: (p0:numbr,p1:object)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0050_numbr_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0050_numbr_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0050_numbr_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0050_numbr_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(numbr, std::any)>",
          "dts2cpp_compat_func_0050_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0050_numbr_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0051_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0051_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0051_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0051_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0051_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0051_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0051_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_COMPAT132_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_COMPAT132_NUMBER_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:number,p1:object)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0052_compat132_number_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `class Compat132 { field: (p0:number,p1:object)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0052_compat132_number_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0052_compat132_number_p1_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0052_compat132_number_p1_object must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0052_compat132_number_p1_object must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
          "dts2cpp_compat_func_0052_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0052_compat132_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_COMPAT132_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_COMPAT132_NUMBER_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:number,p1:object)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0053_compat132_number_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `type Compat132 = { x: (p0:number,p1:object)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0053_compat132_number_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0053_compat132_number_p1_object convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0053_compat132_number_p1_object must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number,p1:object)=>object; }",
          "dts2cpp_compat_func_0053_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0053_compat132_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_NUMBER_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0054_number_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: (p0:number,p1:object)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0054_number_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0054_number_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0054_number_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0054_number_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
          "dts2cpp_compat_func_0054_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0054_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0055_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat132.ts', `function compat132(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0055_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0055_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0055_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0055_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0055_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0055_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0056_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0056_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0056_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0056_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0056_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0056_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0056_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0057_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0057_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0057_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0057_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0057_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0057_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0057_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0058_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0058_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0058_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0058_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0058_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0058_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0058_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_NUMBER_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:number,p1:number)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0059_number_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: (p0:number,p1:number)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0059_number_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0059_number_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0059_number_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0059_number_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
          "dts2cpp_compat_func_0059_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0059_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_NUMBR_P1_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_NUMBR_P1_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:numbr,p1:numbr)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0060_numbr_p1_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: (p0:numbr,p1:numbr)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0060_numbr_p1_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0060_numbr_p1_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0060_numbr_p1_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0060_numbr_p1_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(numbr, numbr)>",
          "dts2cpp_compat_func_0060_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0060_numbr_p1_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0061_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0061_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0061_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0061_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0061_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0061_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0061_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_COMPAT133_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_COMPAT133_NUMBER_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:number,p1:number)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0062_compat133_number_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `class Compat133 { field: (p0:number,p1:number)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0062_compat133_number_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0062_compat133_number_p1_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0062_compat133_number_p1_number must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0062_compat133_number_p1_number must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, double)>",
          "dts2cpp_compat_func_0062_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0062_compat133_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_COMPAT133_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_COMPAT133_NUMBER_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:number,p1:number)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0063_compat133_number_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `type Compat133 = { x: (p0:number,p1:number)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0063_compat133_number_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0063_compat133_number_p1_number convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0063_compat133_number_p1_number must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number,p1:number)=>object; }",
          "dts2cpp_compat_func_0063_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0063_compat133_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_NUMBER_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0064_number_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: (p0:number,p1:number)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0064_number_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0064_number_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0064_number_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0064_number_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
          "dts2cpp_compat_func_0064_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0064_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0065_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat133.ts', `function compat133(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0065_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0065_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0065_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0065_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0065_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0065_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0066_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat134.ts', `function compat134(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0066_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0066_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0066_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0066_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0066_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0066_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0001_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0001_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0001_strng_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0001_strng_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0001_strng_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0001_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0001_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0002_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0002_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0002_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0002_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0002_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0002_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0002_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0003_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0003_STRING_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:string,p1:any)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0003_string_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: (p0:string,p1:any)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0003_string_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0003_string_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0003_string_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0003_string_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0003_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0003_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0004_STRNG_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0004_STRNG_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:strng,p1:any)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0004_strng_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: (p0:strng,p1:any)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0004_strng_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0004_strng_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0004_strng_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0004_strng_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng, std::any)>",
          "dts2cpp_compat_func_0004_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0004_strng_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0005_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0005_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0005_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0005_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0005_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0005_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0005_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0005_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0005_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0006_COMPAT136_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0006_COMPAT136_STRING_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:string,p1:any)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0006_compat136_string_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `class Compat136 { field: (p0:string,p1:any)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0006_compat136_string_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0006_compat136_string_p1_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0006_compat136_string_p1_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0006_compat136_string_p1_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0006_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0006_compat136_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0007_COMPAT136_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0007_COMPAT136_STRING_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:string,p1:any)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0007_compat136_string_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `type Compat136 = { x: (p0:string,p1:any)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0007_compat136_string_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0007_compat136_string_p1_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0007_compat136_string_p1_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string,p1:any)=>object; }",
          "dts2cpp_compat_func_0007_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0007_compat136_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0008_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0008_STRING_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0008_string_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: (p0:string,p1:any)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0008_string_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0008_string_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0008_string_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0008_string_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0008_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0008_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0009_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0009_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0009_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat136.ts', `function compat136(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0009_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0009_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0009_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0009_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0009_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0009_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0010_NUMBR_V5
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0010_NUMBR_V5
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0010_numbr_v5', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0010_numbr_v5 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0010_numbr_v5 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0010_numbr_v5 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0010_numbr_v5 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0010_numbr_v5 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0010_numbr_v5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0011_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0011_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0011_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0011_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0011_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0011_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0011_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0011_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0011_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0012_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0012_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0012_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0012_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0012_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0012_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0012_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0012_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0012_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0013_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0013_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:string,p1:object)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0013_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: (p0:string,p1:object)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0013_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0013_string_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0013_string_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0013_string_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0013_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0013_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0014_STRNG_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0014_STRNG_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:strng,p1:object)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0014_strng_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: (p0:strng,p1:object)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0014_strng_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0014_strng_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0014_strng_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0014_strng_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng, std::any)>",
          "dts2cpp_compat_func_0014_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0014_strng_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0015_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0015_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0015_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0015_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0015_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0015_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0015_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0015_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0015_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0016_COMPAT137_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0016_COMPAT137_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:string,p1:object)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0016_compat137_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `class Compat137 { field: (p0:string,p1:object)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0016_compat137_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0016_compat137_string_p1_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0016_compat137_string_p1_object must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0016_compat137_string_p1_object must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0016_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0016_compat137_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0017_COMPAT137_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0017_COMPAT137_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:string,p1:object)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0017_compat137_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `type Compat137 = { x: (p0:string,p1:object)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0017_compat137_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0017_compat137_string_p1_object convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0017_compat137_string_p1_object must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string,p1:object)=>object; }",
          "dts2cpp_compat_func_0017_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0017_compat137_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0018_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0018_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0018_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: (p0:string,p1:object)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0018_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0018_string_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0018_string_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0018_string_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0018_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0018_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0019_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat137.ts', `function compat137(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0019_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0019_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0019_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0019_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0019_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0019_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_NUMBR_V5
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_NUMBR_V5
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0020_numbr_v5', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat138.ts', `function compat138(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0020_numbr_v5 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0020_numbr_v5 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0020_numbr_v5 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0020_numbr_v5 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0020_numbr_v5 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0020_numbr_v5 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0021_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat138.ts', `function compat138(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0021_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0021_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0021_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0021_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0021_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0021_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0022_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat138.ts', `function compat138(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0022_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0022_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0022_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0022_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0022_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0022_boolea_v2 execution error: ${String(err)}`);
    }
  });
});
