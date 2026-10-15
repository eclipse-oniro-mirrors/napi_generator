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

suite('Stability_DTS2CPP_COMPAT_FUNC_Part15', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0019_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat146.ts', `function compat146(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0019_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0019_anny_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0019_anny_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0019_anny_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0019_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0019_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_COMPAT146_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_COMPAT146_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0020_compat146_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat146.ts', `class Compat146 { field: (p0:any,p1:any)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0020_compat146_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0020_compat146_any_p1_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0020_compat146_any_p1_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0020_compat146_any_p1_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "dts2cpp_compat_func_0020_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0020_compat146_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_COMPAT146_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_COMPAT146_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any,p1:any)=>void; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0021_compat146_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat146.ts', `type Compat146 = { x: (p0:any,p1:any)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0021_compat146_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0021_compat146_any_p1_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0021_compat146_any_p1_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any,p1:any)=>void; }", "dts2cpp_compat_func_0021_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0021_compat146_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0022_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat146.ts', `function compat146(a: (p0:any,p1:any)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0022_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0022_any_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0022_any_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0022_any_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
          "dts2cpp_compat_func_0022_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0022_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0023_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0023_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0023_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat146.ts', `function compat146(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0023_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0023_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0023_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0023_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0023_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0023_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0024_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0024_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0024_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0024_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0024_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0024_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0024_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0024_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0024_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0025_STRNG_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0025_STRNG_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0025_strng_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0025_strng_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0025_strng_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0025_strng_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0025_strng_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0025_strng_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0025_strng_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0026_BOOLEA_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0026_BOOLEA_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0026_boolea_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0026_boolea_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0026_boolea_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0026_boolea_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0026_boolea_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0026_boolea_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0026_boolea_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_ANY_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any,p1:number)=>void; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0027_any_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: (p0:any,p1:number)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0027_any_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0027_any_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0027_any_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0027_any_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
          "dts2cpp_compat_func_0027_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0027_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_ANY_P1_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_ANY_P1_NUMBR
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:any,p1:numbr)=>vod); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0028_any_p1_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: (p0:any,p1:numbr)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0028_any_p1_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0028_any_p1_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0028_any_p1_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0028_any_p1_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(std::any, numbr)>",
          "dts2cpp_compat_func_0028_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0028_any_p1_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0029_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0029_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0029_anny_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0029_anny_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0029_anny_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0029_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0029_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0030_COMPAT147_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0030_COMPAT147_ANY_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0030_compat147_any_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `class Compat147 { field: (p0:any,p1:number)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0030_compat147_any_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0030_compat147_any_p1_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0030_compat147_any_p1_number must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0030_compat147_any_p1_number must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "dts2cpp_compat_func_0030_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0030_compat147_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0031_COMPAT147_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0031_COMPAT147_ANY_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any,p1:number)=>void; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0031_compat147_any_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `type Compat147 = { x: (p0:any,p1:number)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0031_compat147_any_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0031_compat147_any_p1_number convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0031_compat147_any_p1_number must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any,p1:number)=>void; }",
          "dts2cpp_compat_func_0031_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0031_compat147_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0032_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0032_ANY_P1_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0032_any_p1_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: (p0:any,p1:number)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0032_any_p1_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0032_any_p1_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0032_any_p1_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0032_any_p1_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
          "dts2cpp_compat_func_0032_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0032_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0033_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat147.ts', `function compat147(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0033_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0033_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0033_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0033_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0033_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0033_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0034_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0034_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0034_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0034_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0034_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0034_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0034_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0035_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0035_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0035_strng_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0035_strng_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0035_strng_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0035_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0035_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_BOOLEA_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_BOOLEA_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0036_boolea_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0036_boolea_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0036_boolea_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0036_boolea_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0036_boolea_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0036_boolea_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0036_boolea_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_ANY_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any,p1:string)=>void; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0037_any_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: (p0:any,p1:string)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0037_any_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0037_any_p1_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0037_any_p1_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0037_any_p1_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
          "dts2cpp_compat_func_0037_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0037_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_ANY_P1_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_ANY_P1_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:any,p1:strng)=>vod); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0038_any_p1_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: (p0:any,p1:strng)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0038_any_p1_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0038_any_p1_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0038_any_p1_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0038_any_p1_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(std::any, strng)>",
          "dts2cpp_compat_func_0038_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0038_any_p1_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0039_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0039_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0039_anny_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0039_anny_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0039_anny_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0039_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0039_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_COMPAT148_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_COMPAT148_ANY_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0040_compat148_any_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `class Compat148 { field: (p0:any,p1:string)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0040_compat148_any_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0040_compat148_any_p1_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0040_compat148_any_p1_string must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0040_compat148_any_p1_string must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "dts2cpp_compat_func_0040_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0040_compat148_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_COMPAT148_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_COMPAT148_ANY_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any,p1:string)=>void; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0041_compat148_any_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `type Compat148 = { x: (p0:any,p1:string)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0041_compat148_any_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0041_compat148_any_p1_string convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0041_compat148_any_p1_string must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any,p1:string)=>void; }",
          "dts2cpp_compat_func_0041_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0041_compat148_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_ANY_P1_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0042_any_p1_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: (p0:any,p1:string)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0042_any_p1_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0042_any_p1_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0042_any_p1_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0042_any_p1_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
          "dts2cpp_compat_func_0042_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0042_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0043_numbr_v4', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat148.ts', `function compat148(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0043_numbr_v4 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0043_numbr_v4 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0043_numbr_v4 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0043_numbr_v4 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0043_numbr_v4 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0043_numbr_v4 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_NUMBR_V4
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_NUMBR_V4
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
