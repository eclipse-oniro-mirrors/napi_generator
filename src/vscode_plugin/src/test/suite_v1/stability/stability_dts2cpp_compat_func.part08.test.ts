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

suite('Stability_DTS2CPP_COMPAT_FUNC_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0045_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat88.ts', `function compat88(a: (p0:any)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0045_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0045_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0045_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0045_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
          "dts2cpp_compat_func_0045_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0045_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0046_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat88.ts', `function compat88(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0046_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0046_anny_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0046_anny_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0046_anny_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0046_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0046_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_COMPAT88_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_COMPAT88_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0047_compat88_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat88.ts', `class Compat88 { field: (p0:any)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0047_compat88_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0047_compat88_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0047_compat88_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0047_compat88_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
          "dts2cpp_compat_func_0047_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0047_compat88_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_COMPAT88_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_COMPAT88_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0048_compat88_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat88.ts', `type Compat88 = { x: (p0:any)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0048_compat88_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0048_compat88_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0048_compat88_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any)=>object; }", "dts2cpp_compat_func_0048_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0048_compat88_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0049_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat88.ts', `function compat88(a: (p0:any)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0049_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0049_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0049_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0049_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
          "dts2cpp_compat_func_0049_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0049_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0050_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat88.ts', `function compat88(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0050_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0050_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0050_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0050_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0050_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0050_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0051_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0051_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0051_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0051_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0051_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0051_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0051_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0052_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0052_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0052_strng_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0052_strng_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0052_strng_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0052_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0052_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_BOOLEA_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_BOOLEA_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0053_boolea_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0053_boolea_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0053_boolea_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0053_boolea_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0053_boolea_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0053_boolea_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0053_boolea_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:number)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0054_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: (p0:number)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0054_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0054_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0054_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0054_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
          "dts2cpp_compat_func_0054_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0054_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:numbr)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0055_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: (p0:numbr)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0055_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0055_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0055_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0055_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(numbr)>",
          "dts2cpp_compat_func_0055_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0055_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0056_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0056_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0056_anny_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0056_anny_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0056_anny_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0056_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0056_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_COMPAT89_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_COMPAT89_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:number)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0057_compat89_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `class Compat89 { field: (p0:number)=>object; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0057_compat89_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0057_compat89_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0057_compat89_number must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0057_compat89_number must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double)>",
          "dts2cpp_compat_func_0057_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0057_compat89_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_COMPAT89_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_COMPAT89_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:number)=>object; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0058_compat89_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `type Compat89 = { x: (p0:number)=>object; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0058_compat89_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0058_compat89_number convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0058_compat89_number must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number)=>object; }", "dts2cpp_compat_func_0058_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0058_compat89_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_NUMBER
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0059_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: (p0:number)=>object,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0059_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0059_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0059_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0059_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
          "dts2cpp_compat_func_0059_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0059_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0060_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat89.ts', `function compat89(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0060_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0060_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0060_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0060_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0060_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0060_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0061_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat90.ts', `function compat90(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0061_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0061_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0061_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0061_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0061_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0061_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0062_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat90.ts', `function compat90(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0062_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0062_strng_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0062_strng_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0062_strng_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0062_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0062_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_BOOLEA_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_BOOLEA_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0063_boolea_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat90.ts', `function compat90(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0063_boolea_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0063_boolea_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0063_boolea_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0063_boolea_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0063_boolea_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0063_boolea_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_STRING
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:string)=>object; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0064_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat90.ts', `function compat90(a: (p0:string)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0064_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0064_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0064_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0064_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
          "dts2cpp_compat_func_0064_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0064_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:strng)=>object); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0065_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat90.ts', `function compat90(a: (p0:strng)=>object): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0065_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0065_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0065_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0065_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(strng)>",
          "dts2cpp_compat_func_0065_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0065_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_ANNY_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_ANNY_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0066_anny_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat90.ts', `function compat90(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0066_anny_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0066_anny_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0066_anny_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0066_anny_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0066_anny_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0066_anny_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_COMPAT92_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_COMPAT92_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any)=>void; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0001_compat92_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat92.ts', `type Compat92 = { x: (p0:any)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0001_compat92_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0001_compat92_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0001_compat92_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any)=>void; }", "dts2cpp_compat_func_0001_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0001_compat92_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_ANY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_ANY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0002_any_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat92.ts', `function compat92(a: (p0:any)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0002_any_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0002_any_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0002_any_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0002_any_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0002_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0002_any_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0003_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0003_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0003_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat92.ts', `function compat92(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0003_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0003_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0003_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0003_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0003_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0003_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0004_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0004_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0004_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0004_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0004_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0004_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0004_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0004_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0004_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0005_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0005_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0005_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0005_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0005_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0005_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0005_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0005_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0005_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0006_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0006_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0006_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0006_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0006_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0006_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0006_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0006_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0006_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0007_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0007_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:object)=>void; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0007_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: (p0:object)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0007_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0007_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0007_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0007_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0007_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0007_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0008_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0008_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); void keyword
   *            misspelled to vod ((p0:object)=>vod); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0008_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: (p0:object)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0008_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0008_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0008_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0008_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(std::any)>",
          "dts2cpp_compat_func_0008_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0008_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0009_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0009_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0009_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0009_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0009_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0009_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0009_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0009_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0009_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0010_COMPAT93_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0010_COMPAT93_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0010_compat93_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `class Compat93 { field: (p0:object)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0010_compat93_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0010_compat93_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0010_compat93_object must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0010_compat93_object must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0010_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0010_compat93_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0011_COMPAT93_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0011_COMPAT93_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:object)=>void; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0011_compat93_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `type Compat93 = { x: (p0:object)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0011_compat93_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0011_compat93_object convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0011_compat93_object must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:object)=>void; }", "dts2cpp_compat_func_0011_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0011_compat93_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0012_OBJECT_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0012_OBJECT_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0012_object_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: (p0:object)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0012_object_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0012_object_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0012_object_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0012_object_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0012_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0012_object_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0013_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0013_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0013_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat93.ts', `function compat93(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0013_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0013_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0013_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0013_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0013_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0013_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0014_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0014_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0014_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0014_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0014_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0014_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0014_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0014_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0014_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0015_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0015_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0015_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0015_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0015_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0015_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0015_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0015_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0015_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0016_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0016_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0016_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0016_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0016_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0016_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0016_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0016_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0016_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0017_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0017_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any)=>number; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0017_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: (p0:any)=>number): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0017_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0017_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0017_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0017_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
          "dts2cpp_compat_func_0017_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0017_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0018_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0018_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:any)=>numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0018_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: (p0:any)=>numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0018_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0018_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0018_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0018_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<numbr(std::any)>",
          "dts2cpp_compat_func_0018_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0018_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0019_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0019_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0019_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0019_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0019_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0019_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0019_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0019_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_COMPAT94_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0020_COMPAT94_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any)=>number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0020_compat94_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `class Compat94 { field: (p0:any)=>number; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0020_compat94_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0020_compat94_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0020_compat94_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0020_compat94_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::any)>",
          "dts2cpp_compat_func_0020_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0020_compat94_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_COMPAT94_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0021_COMPAT94_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any)=>number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0021_compat94_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `type Compat94 = { x: (p0:any)=>number; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0021_compat94_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0021_compat94_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0021_compat94_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any)=>number; }", "dts2cpp_compat_func_0021_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0021_compat94_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0022_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0022_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: (p0:any)=>number,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0022_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0022_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0022_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0022_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
          "dts2cpp_compat_func_0022_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0022_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0023_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0023_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0023_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat94.ts', `function compat94(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0023_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0023_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0023_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0023_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0023_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0023_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0024_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0024_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0024_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0024_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0024_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0024_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0024_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0024_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0024_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0025_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0025_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0025_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0025_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0025_strng_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0025_strng_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0025_strng_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0025_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0025_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0026_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0026_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0026_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0026_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0026_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0026_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0026_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0026_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0026_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0027_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:object)=>number; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0027_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: (p0:object)=>number): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0027_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0027_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0027_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0027_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
          "dts2cpp_compat_func_0027_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0027_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0028_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ((p0:object)=>numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0028_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: (p0:object)=>numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0028_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0028_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0028_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0028_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<numbr(std::any)>",
          "dts2cpp_compat_func_0028_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0028_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0029_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0029_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0029_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0029_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0029_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0029_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0029_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0029_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0030_COMPAT95_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0030_COMPAT95_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:object)=>number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0030_compat95_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `class Compat95 { field: (p0:object)=>number; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0030_compat95_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0030_compat95_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0030_compat95_object must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0030_compat95_object must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::any)>",
          "dts2cpp_compat_func_0030_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0030_compat95_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0031_COMPAT95_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0031_COMPAT95_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:object)=>number; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0031_compat95_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `type Compat95 = { x: (p0:object)=>number; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0031_compat95_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0031_compat95_object convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0031_compat95_object must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:object)=>number; }", "dts2cpp_compat_func_0031_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0031_compat95_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0032_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0032_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0032_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: (p0:object)=>number,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0032_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0032_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0032_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0032_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
          "dts2cpp_compat_func_0032_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0032_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0033_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0033_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat95.ts', `function compat95(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0033_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0033_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0033_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0033_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0033_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0033_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0034_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0034_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0034_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0034_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0034_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0034_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0034_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0034_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0035_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0035_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0035_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0035_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0035_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0035_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0035_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0035_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0036_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0036_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0036_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0036_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0036_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0036_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0036_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0036_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0037_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any)=>string; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0037_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: (p0:any)=>string): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0037_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0037_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0037_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0037_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
          "dts2cpp_compat_func_0037_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0037_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0038_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:any)=>strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0038_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: (p0:any)=>strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0038_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0038_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0038_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0038_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<strng(std::any)>",
          "dts2cpp_compat_func_0038_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0038_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0039_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0039_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0039_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0039_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0039_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0039_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0039_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0039_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_COMPAT96_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0040_COMPAT96_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0040_compat96_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `class Compat96 { field: (p0:any)=>string; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0040_compat96_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0040_compat96_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0040_compat96_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0040_compat96_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::any)>",
          "dts2cpp_compat_func_0040_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0040_compat96_any execution error: ${String(err)}`);
    }
  });
});
