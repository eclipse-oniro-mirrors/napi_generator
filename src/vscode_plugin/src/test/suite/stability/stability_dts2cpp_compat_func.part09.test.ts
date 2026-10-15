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

suite('Stability_DTS2CPP_COMPAT_FUNC_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_COMPAT96_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0041_COMPAT96_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any)=>string; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0041_compat96_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `type Compat96 = { x: (p0:any)=>string; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0041_compat96_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0041_compat96_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0041_compat96_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any)=>string; }", "dts2cpp_compat_func_0041_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0041_compat96_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0042_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0042_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: (p0:any)=>string,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0042_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0042_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0042_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0042_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
          "dts2cpp_compat_func_0042_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0042_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0043_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0043_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat96.ts', `function compat96(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0043_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0043_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0043_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0043_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0043_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0043_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0044_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0044_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0044_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0044_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0044_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0044_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0044_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0044_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0045_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0045_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0045_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0045_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0045_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0045_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0045_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0045_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0046_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0046_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0046_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0046_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0046_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0046_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0046_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0046_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0047_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:object)=>string; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0047_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: (p0:object)=>string): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0047_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0047_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0047_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0047_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
          "dts2cpp_compat_func_0047_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0047_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0048_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:object)=>strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0048_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: (p0:object)=>strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0048_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0048_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0048_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0048_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<strng(std::any)>",
          "dts2cpp_compat_func_0048_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0048_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0049_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0049_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0049_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0049_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0049_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0049_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0049_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0049_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_COMPAT97_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0050_COMPAT97_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:object)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0050_compat97_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `class Compat97 { field: (p0:object)=>string; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0050_compat97_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0050_compat97_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0050_compat97_object must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0050_compat97_object must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::any)>",
          "dts2cpp_compat_func_0050_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0050_compat97_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_COMPAT97_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0051_COMPAT97_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:object)=>string; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0051_compat97_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `type Compat97 = { x: (p0:object)=>string; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0051_compat97_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0051_compat97_object convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0051_compat97_object must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:object)=>string; }", "dts2cpp_compat_func_0051_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0051_compat97_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0052_OBJECT
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0052_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: (p0:object)=>string,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0052_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0052_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0052_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0052_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
          "dts2cpp_compat_func_0052_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0052_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0053_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0053_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat97.ts', `function compat97(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0053_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0053_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0053_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0053_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0053_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0053_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0054_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0054_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0054_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0054_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0054_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0054_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0054_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0054_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_STRNG_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0055_STRNG_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0055_strng_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0055_strng_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0055_strng_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0055_strng_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0055_strng_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0055_strng_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0055_strng_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0056_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0056_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0056_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0056_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0056_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0056_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0056_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0056_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0057_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any,p1:any)=>any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0057_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: (p0:any,p1:any)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0057_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0057_any_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0057_any_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0057_any_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
          "dts2cpp_compat_func_0057_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0057_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0058_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type (p0:any,p1:any)=>any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0058_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: (p0:any,p1:any)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0058_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0058_any_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0058_any_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0058_any_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
          "dts2cpp_compat_func_0058_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0058_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0059_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0059_anny_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0059_anny_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0059_anny_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0059_anny_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0059_anny_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny",
          "dts2cpp_compat_func_0059_anny_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0059_anny_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_COMPAT98_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0060_COMPAT98_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type (p0:any,p1:any)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0060_compat98_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `class Compat98 { field: (p0:any,p1:any)=>any; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0060_compat98_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0060_compat98_any_p1_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_func_0060_compat98_any_p1_any must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0060_compat98_any_p1_any must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
          "dts2cpp_compat_func_0060_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0060_compat98_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_COMPAT98_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0061_COMPAT98_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member (p0:any,p1:any)=>any; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0061_compat98_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `type Compat98 = { x: (p0:any,p1:any)=>any; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0061_compat98_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0061_compat98_any_p1_any convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_func_0061_compat98_any_p1_any must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:any,p1:any)=>any; }", "dts2cpp_compat_func_0061_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0061_compat98_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0062_ANY_P1_ANY
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); trailing
   *            comma in param list, base type unchanged; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0062_any_p1_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: (p0:any,p1:any)=>any,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0062_any_p1_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0062_any_p1_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0062_any_p1_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0062_any_p1_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
          "dts2cpp_compat_func_0062_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0062_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_NUMBR_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0063_NUMBR_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Numbr; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0063_numbr_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat98.ts', `function compat98(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0063_numbr_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0063_numbr_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0063_numbr_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0063_numbr_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr",
          "dts2cpp_compat_func_0063_numbr_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0063_numbr_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_NUMBR_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0064_NUMBR_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (numbr); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0064_numbr_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat99.ts', `function compat99(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0064_numbr_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0064_numbr_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0064_numbr_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0064_numbr_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr",
          "dts2cpp_compat_func_0064_numbr_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0064_numbr_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_STRNG_V3
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0065_STRNG_V3
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (strng); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0065_strng_v3', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat99.ts', `function compat99(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0065_strng_v3 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0065_strng_v3 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0065_strng_v3 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0065_strng_v3 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng",
          "dts2cpp_compat_func_0065_strng_v3 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0065_strng_v3 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_BOOLEA_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0066_BOOLEA_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); boolean
   *            keyword misspelled (boolea); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0066_boolea_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat99.ts', `function compat99(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0066_boolea_v2 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0066_boolea_v2 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0066_boolea_v2 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0066_boolea_v2 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea",
          "dts2cpp_compat_func_0066_boolea_v2 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0066_boolea_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_ANY_P1_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0001_ANY_P1_STRNG
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ((p0:any,p1:strng)=>any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_func_0001_any_p1_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat101.ts', `function compat101(a: (p0:any,p1:strng)=>any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0001_any_p1_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0001_any_p1_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_func_0001_any_p1_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0001_any_p1_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, strng)>",
          "dts2cpp_compat_func_0001_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0001_any_p1_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_ANNY_V2
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_FUNC_0002_ANNY_V2
   * @tc.desc   Stability compat dts2cpp/func: runCompatSafe(doParseTs+transParseObj); any keyword
   *            misspelled to anny (anny); strictEqual function param type preserved.
