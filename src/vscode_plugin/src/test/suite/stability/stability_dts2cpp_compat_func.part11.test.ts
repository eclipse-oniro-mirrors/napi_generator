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

suite('Stability_DTS2CPP_COMPAT_FUNC_Part11', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:string,p1:object)=>any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0033_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `function compat113(a: (p0:string,p1:object)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0033_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0033_string_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0033_string_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0033_string_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0033_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0033_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_STRNG_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_STRNG_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:strng,p1:object)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0034_strng_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `function compat113(a: (p0:strng,p1:object)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0034_strng_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0034_strng_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0034_strng_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0034_strng_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng, std::any)>",
          "dts2cpp_compat_func_0034_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0034_strng_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0035_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `function compat113(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0035_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0035_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0035_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0035_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0035_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0035_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_COMPAT113_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_COMPAT113_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:string,p1:object)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0036_compat113_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `class Compat113 { field: (p0:string,p1:object)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0036_compat113_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0036_compat113_string_p1_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0036_compat113_string_p1_object must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0036_compat113_string_p1_object must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0036_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0036_compat113_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_COMPAT113_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_COMPAT113_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:string,p1:object)=>any; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0037_compat113_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `type Compat113 = { x: (p0:string,p1:object)=>any; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0037_compat113_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0037_compat113_string_p1_object convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0037_compat113_string_p1_object must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string,p1:object)=>any; }",
          "dts2cpp_compat_func_0037_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0037_compat113_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_STRING_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0038_string_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `function compat113(a: (p0:string,p1:object)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0038_string_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0038_string_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0038_string_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0038_string_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
          "dts2cpp_compat_func_0038_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0038_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0039_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat113.ts', `function compat113(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0039_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0039_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0039_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0039_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0039_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0039_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0040_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0040_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0040_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0040_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0040_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0040_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0040_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0041_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0041_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0041_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0041_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0041_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0041_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0041_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0042_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0042_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0042_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0042_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0042_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0042_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0042_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_STRING_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:string,p1:number)=>any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0043_string_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: (p0:string,p1:number)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0043_string_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0043_string_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0043_string_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0043_string_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
          "dts2cpp_compat_func_0043_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0043_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_STRNG_P1_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_STRNG_P1_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:strng,p1:numbr)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0044_strng_p1_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: (p0:strng,p1:numbr)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0044_strng_p1_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0044_strng_p1_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0044_strng_p1_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0044_strng_p1_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng, numbr)>",
          "dts2cpp_compat_func_0044_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0044_strng_p1_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0045_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0045_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0045_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0045_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0045_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0045_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0045_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_COMPAT114_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_COMPAT114_STRING_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:string,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0046_compat114_string_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `class Compat114 { field: (p0:string,p1:number)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0046_compat114_string_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0046_compat114_string_p1_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0046_compat114_string_p1_number must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0046_compat114_string_p1_number must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
          "dts2cpp_compat_func_0046_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0046_compat114_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_COMPAT114_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_COMPAT114_STRING_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:string,p1:number)=>any; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0047_compat114_string_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `type Compat114 = { x: (p0:string,p1:number)=>any; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0047_compat114_string_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0047_compat114_string_p1_number convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0047_compat114_string_p1_number must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string,p1:number)=>any; }",
          "dts2cpp_compat_func_0047_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0047_compat114_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_STRING_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0048_string_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: (p0:string,p1:number)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0048_string_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0048_string_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0048_string_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0048_string_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
          "dts2cpp_compat_func_0048_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0048_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0049_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat114.ts', `function compat114(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0049_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0049_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0049_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0049_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0049_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0049_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0050_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0050_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0050_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0050_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0050_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0050_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0050_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0051_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0051_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0051_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0051_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0051_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0051_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0051_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0052_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0052_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0052_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0052_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0052_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0052_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0052_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_STRING_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:string,p1:string)=>any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0053_string_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: (p0:string,p1:string)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0053_string_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0053_string_p1_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0053_string_p1_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0053_string_p1_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
          "dts2cpp_compat_func_0053_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0053_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_STRNG_P1_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_STRNG_P1_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:strng,p1:strng)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0054_strng_p1_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: (p0:strng,p1:strng)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0054_strng_p1_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0054_strng_p1_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0054_strng_p1_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0054_strng_p1_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng, strng)>",
          "dts2cpp_compat_func_0054_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0054_strng_p1_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0055_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0055_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0055_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0055_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0055_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0055_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0055_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_COMPAT115_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_COMPAT115_STRING_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0056_compat115_string_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `class Compat115 { field: (p0:string,p1:string)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0056_compat115_string_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0056_compat115_string_p1_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0056_compat115_string_p1_string must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0056_compat115_string_p1_string must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "dts2cpp_compat_func_0056_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0056_compat115_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_COMPAT115_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_COMPAT115_STRING_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:string,p1:string)=>any; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0057_compat115_string_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `type Compat115 = { x: (p0:string,p1:string)=>any; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0057_compat115_string_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0057_compat115_string_p1_string convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0057_compat115_string_p1_string must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string,p1:string)=>any; }",
          "dts2cpp_compat_func_0057_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0057_compat115_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_STRING_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0058_string_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: (p0:string,p1:string)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0058_string_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0058_string_p1_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0058_string_p1_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0058_string_p1_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
          "dts2cpp_compat_func_0058_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0058_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0059_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat115.ts', `function compat115(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0059_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0059_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0059_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0059_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0059_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0059_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0060_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `function compat116(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0060_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0060_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0060_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0060_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0060_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0060_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0061_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `function compat116(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0061_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0061_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0061_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0061_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0061_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0061_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0062_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `function compat116(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0062_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0062_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0062_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0062_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0062_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0062_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_STRING_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_STRING_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0063_string_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `function compat116(a: (p0:string,p1:boolean)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0063_string_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0063_string_p1_boolean convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0063_string_p1_boolean must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0063_string_p1_boolean must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
          "dts2cpp_compat_func_0063_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0063_string_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_STRNG_P1_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_STRNG_P1_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:strng,p1:boolea)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0064_strng_p1_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `function compat116(a: (p0:strng,p1:boolea)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0064_strng_p1_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0064_strng_p1_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0064_strng_p1_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0064_strng_p1_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng, boolea)>",
          "dts2cpp_compat_func_0064_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0064_strng_p1_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0065_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `function compat116(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0065_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0065_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0065_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0065_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0065_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0065_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_COMPAT116_STRING_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_COMPAT116_STRING_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:string,p1:boolean)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0066_compat116_string_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat116.ts', `class Compat116 { field: (p0:string,p1:boolean)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0066_compat116_string_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0066_compat116_string_p1_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0066_compat116_string_p1_boolean must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0066_compat116_string_p1_boolean must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
          "dts2cpp_compat_func_0066_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0066_compat116_string_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_BOOLEAN_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_BOOLEAN_P1_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0001_boolean_p1_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat118.ts', `function compat118(a: (p0:boolean,p1:object)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0001_boolean_p1_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0001_boolean_p1_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0001_boolean_p1_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0001_boolean_p1_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
          "dts2cpp_compat_func_0001_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0001_boolean_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0002_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat118.ts', `function compat118(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0002_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0002_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0002_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0002_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0002_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0002_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0003_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0003_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0003_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0003_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0003_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0003_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0003_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0003_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0003_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0004_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0004_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0004_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0004_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0004_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0004_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0004_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0004_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0004_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0005_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0005_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0005_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0005_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0005_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0005_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0005_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0005_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0005_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0006_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0006_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0006_boolean_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: (p0:boolean,p1:number)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0006_boolean_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0006_boolean_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0006_boolean_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0006_boolean_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
          "dts2cpp_compat_func_0006_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0006_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0007_BOOLEA_P1_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0007_BOOLEA_P1_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:boolea,p1:numbr)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0007_boolea_p1_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: (p0:boolea,p1:numbr)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0007_boolea_p1_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0007_boolea_p1_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0007_boolea_p1_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0007_boolea_p1_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(boolea, numbr)>",
          "dts2cpp_compat_func_0007_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0007_boolea_p1_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0008_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0008_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0008_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0008_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0008_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0008_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0008_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0008_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0008_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0009_COMPAT119_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0009_COMPAT119_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:boolean,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0009_compat119_boolean_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `class Compat119 { field: (p0:boolean,p1:number)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0009_compat119_boolean_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0009_compat119_boolean_p1_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0009_compat119_boolean_p1_number must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0009_compat119_boolean_p1_number must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "dts2cpp_compat_func_0009_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0009_compat119_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0010_COMPAT119_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0010_COMPAT119_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:boolean,p1:number)=>any; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0010_compat119_boolean_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `type Compat119 = { x: (p0:boolean,p1:number)=>any; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0010_compat119_boolean_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0010_compat119_boolean_p1_number convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0010_compat119_boolean_p1_number must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean,p1:number)=>any; }",
          "dts2cpp_compat_func_0010_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0010_compat119_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0011_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0011_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0011_boolean_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: (p0:boolean,p1:number)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0011_boolean_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0011_boolean_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0011_boolean_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0011_boolean_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
          "dts2cpp_compat_func_0011_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0011_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0012_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0012_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0012_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat119.ts', `function compat119(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0012_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0012_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0012_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0012_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0012_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0012_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0013_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0013_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0013_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0013_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0013_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0013_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0013_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0013_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0013_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0014_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0014_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0014_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0014_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0014_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0014_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0014_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0014_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0014_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0015_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0015_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0015_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0015_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0015_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0015_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0015_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0015_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0015_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0016_BOOLEAN_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0016_BOOLEAN_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0016_boolean_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: (p0:boolean,p1:string)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0016_boolean_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0016_boolean_p1_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0016_boolean_p1_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0016_boolean_p1_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
          "dts2cpp_compat_func_0016_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0016_boolean_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0017_BOOLEA_P1_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0017_BOOLEA_P1_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:boolea,p1:strng)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0017_boolea_p1_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: (p0:boolea,p1:strng)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0017_boolea_p1_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0017_boolea_p1_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0017_boolea_p1_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0017_boolea_p1_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(boolea, strng)>",
          "dts2cpp_compat_func_0017_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0017_boolea_p1_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0018_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0018_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0018_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0018_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0018_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0018_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0018_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0018_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0018_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_COMPAT120_BOOLEAN_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_COMPAT120_BOOLEAN_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:boolean,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0019_compat120_boolean_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `class Compat120 { field: (p0:boolean,p1:string)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0019_compat120_boolean_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0019_compat120_boolean_p1_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0019_compat120_boolean_p1_string must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0019_compat120_boolean_p1_string must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "dts2cpp_compat_func_0019_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0019_compat120_boolean_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_COMPAT120_BOOLEAN_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_COMPAT120_BOOLEAN_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:boolean,p1:string)=>any; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0020_compat120_boolean_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `type Compat120 = { x: (p0:boolean,p1:string)=>any; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0020_compat120_boolean_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0020_compat120_boolean_p1_string convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0020_compat120_boolean_p1_string must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean,p1:string)=>any; }",
          "dts2cpp_compat_func_0020_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0020_compat120_boolean_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_BOOLEAN_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_BOOLEAN_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0021_boolean_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: (p0:boolean,p1:string)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0021_boolean_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0021_boolean_p1_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0021_boolean_p1_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0021_boolean_p1_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
          "dts2cpp_compat_func_0021_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0021_boolean_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0022_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat120.ts', `function compat120(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0022_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0022_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0022_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0022_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0022_numbr param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0022_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0023_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0023_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0023_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `function compat121(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0023_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0023_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0023_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0023_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0023_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0023_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0024_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0024_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0024_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `function compat121(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0024_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0024_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0024_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0024_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0024_strng param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0024_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0025_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0025_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0025_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `function compat121(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0025_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0025_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0025_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0025_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0025_boolea param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0025_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0026_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0026_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0026_boolean_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `function compat121(a: (p0:boolean,p1:boolean)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0026_boolean_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0026_boolean_p1_boolean convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0026_boolean_p1_boolean must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0026_boolean_p1_boolean must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
          "dts2cpp_compat_func_0026_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0026_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_BOOLEA_P1_BOOLEA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_BOOLEA_P1_BOOLEA
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled ((p0:boolea,p1:boolea)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0027_boolea_p1_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `function compat121(a: (p0:boolea,p1:boolea)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0027_boolea_p1_boolea parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0027_boolea_p1_boolea convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0027_boolea_p1_boolea must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0027_boolea_p1_boolea must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(boolea, boolea)>",
          "dts2cpp_compat_func_0027_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0027_boolea_p1_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_ANNY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_ANNY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0028_anny', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `function compat121(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0028_anny parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0028_anny convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0028_anny must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0028_anny must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0028_anny param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0028_anny execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_COMPAT121_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_COMPAT121_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:boolean,p1:boolean)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0029_compat121_boolean_p1_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat121.ts', `class Compat121 { field: (p0:boolean,p1:boolean)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0029_compat121_boolean_p1_boolean parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0029_compat121_boolean_p1_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0029_compat121_boolean_p1_boolean must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0029_compat121_boolean_p1_boolean must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "dts2cpp_compat_func_0029_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0029_compat121_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });
});
