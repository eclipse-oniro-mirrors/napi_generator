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

suite('Stability_DTS2CPP_COMPAT_COMBO_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_ARRAYBUFFER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_ARRAYBUFFER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ArrayBuffer_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_arraybuffer_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: ArrayBuffer_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_arraybuffer_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_arraybuffer_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_arraybuffer_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_arraybuffer_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer_any",
          "dts2cpp_compat_combo_0024_arraybuffer_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_arraybuffer_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT193_ARRAYBUFFER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_COMPAT193_ARRAYBUFFER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type ArrayBuffer_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_compat193_arraybuffer_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `class Compat193 { field: ArrayBuffer_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_compat193_arraybuffer_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_compat193_arraybuffer_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0025_compat193_arraybuffer_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0025_compat193_arraybuffer_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_v",
          "dts2cpp_compat_combo_0025_compat193_arraybuffer_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_compat193_arraybuffer_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_COMPAT193_X_ARRAYBUFFER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_COMPAT193_X_ARRAYBUFFER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member ArrayBuffer_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_compat193_x_arraybuffer_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `type Compat193 = { x: ArrayBuffer_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_compat193_x_arraybuffer_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_compat193_x_arraybuffer_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0026_compat193_x_arraybuffer_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: ArrayBuffer_x; }", "dts2cpp_compat_combo_0026_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_compat193_x_arraybuffer_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_ARRAYBUFFER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_ARRAYBUFFER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type ArrayBuffer_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_arraybuffer_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: ArrayBuffer_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_arraybuffer_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_arraybuffer_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_arraybuffer_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_arraybuffer_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer_Z",
          "dts2cpp_compat_combo_0027_arraybuffer_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_arraybuffer_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_WEAKMAP_OBJECT_STRINGN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_WEAKMAP_OBJECT_STRINGN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakMap<object, stringn>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_weakmap_object_stringn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: WeakMap<object, stringn>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_weakmap_object_stringn parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_weakmap_object_stringn convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_weakmap_object_stringn must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_weakmap_object_stringn must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, stringn>",
          "dts2cpp_compat_combo_0028_weakmap_object_stringn param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_weakmap_object_stringn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_WEAKMAP_OBJECT_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_WEAKMAP_OBJECT_STRNG
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (WeakMap<object, strng>); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_weakmap_object_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: WeakMap<object, strng>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_weakmap_object_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_weakmap_object_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_weakmap_object_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_weakmap_object_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, strng>",
          "dts2cpp_compat_combo_0029_weakmap_object_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_weakmap_object_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_WEAKMAP_OBJECT_STRINGB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_WEAKMAP_OBJECT_STRINGB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakMap<object, stringb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_weakmap_object_stringb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: WeakMap<object, stringb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_weakmap_object_stringb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_weakmap_object_stringb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_weakmap_object_stringb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_weakmap_object_stringb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, stringb>",
          "dts2cpp_compat_combo_0030_weakmap_object_stringb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_weakmap_object_stringb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_WEAKMAP_OBJECT_STRINGBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_WEAKMAP_OBJECT_STRINGBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakMap<object, stringbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_weakmap_object_stringbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: WeakMap<object, stringbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_weakmap_object_stringbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_weakmap_object_stringbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0031_weakmap_object_stringbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0031_weakmap_object_stringbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, stringbr>",
          "dts2cpp_compat_combo_0031_weakmap_object_stringbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_weakmap_object_stringbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_BADTYPE194_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0032_BADTYPE194_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType194_WeakMap_object__string_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0032_badtype194_weakmap_object_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: BadType194_WeakMap_object__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0032_badtype194_weakmap_object_string parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0032_badtype194_weakmap_object_string convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0032_badtype194_weakmap_object_string must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0032_badtype194_weakmap_object_string must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType194_WeakMap_object__string_",
          "dts2cpp_compat_combo_0032_badtype194_weakmap_object_string param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0032_badtype194_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_WEAKMAP_OBJECT_STRINGANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0033_WEAKMAP_OBJECT_STRINGANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakMap<object, stringany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0033_weakmap_object_stringany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: WeakMap<object, stringany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0033_weakmap_object_stringany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0033_weakmap_object_stringany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0033_weakmap_object_stringany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0033_weakmap_object_stringany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, stringany>",
          "dts2cpp_compat_combo_0033_weakmap_object_stringany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0033_weakmap_object_stringany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT194_WEAKMAP_OBJECT_STRINGV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0034_COMPAT194_WEAKMAP_OBJECT_STRINGV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type WeakMap<object, stringv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `class Compat194 { field: WeakMap<object, stringv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, stringv>",
          "dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0034_compat194_weakmap_object_stringv execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_COMPAT194_X_WEAKMAP_OBJECT_STRINGX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0035_COMPAT194_X_WEAKMAP_OBJECT_STRINGX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member WeakMap<object, stringx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0035_compat194_x_weakmap_object_stringx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `type Compat194 = { x: WeakMap<object, stringx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0035_compat194_x_weakmap_object_stringx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0035_compat194_x_weakmap_object_stringx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0035_compat194_x_weakmap_object_stringx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: WeakMap<object, stringx>; }",
          "dts2cpp_compat_combo_0035_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0035_compat194_x_weakmap_object_stringx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_WEAKMAP_OBJECT_STRINGZ
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0036_WEAKMAP_OBJECT_STRINGZ
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakMap<object, stringZ>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0036_weakmap_object_stringz', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: WeakMap<object, stringZ>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0036_weakmap_object_stringz parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0036_weakmap_object_stringz convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0036_weakmap_object_stringz must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0036_weakmap_object_stringz must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, stringZ>",
          "dts2cpp_compat_combo_0036_weakmap_object_stringz param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0036_weakmap_object_stringz execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_KEYOF_MAP_STRING_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0037_KEYOF_MAP_STRING_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled (keyof Map<string, numbr>); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0037_keyof_map_string_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: keyof Map<string, numbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0037_keyof_map_string_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0037_keyof_map_string_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0037_keyof_map_string_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0037_keyof_map_string_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, numbr>",
          "dts2cpp_compat_combo_0037_keyof_map_string_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0037_keyof_map_string_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_KEYOF_MAP_STRNG_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0038_KEYOF_MAP_STRNG_NUMBER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled (keyof Map<strng, number>); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0038_keyof_map_strng_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: keyof Map<strng, number>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0038_keyof_map_strng_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0038_keyof_map_strng_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0038_keyof_map_strng_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0038_keyof_map_strng_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<strng, number>",
          "dts2cpp_compat_combo_0038_keyof_map_strng_number param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0038_keyof_map_strng_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_KEYOF_MAP_STRING_NUMBERB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0039_KEYOF_MAP_STRING_NUMBERB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type keyof Map<string, numberb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0039_keyof_map_string_numberb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: keyof Map<string, numberb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0039_keyof_map_string_numberb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0039_keyof_map_string_numberb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0039_keyof_map_string_numberb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0039_keyof_map_string_numberb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, numberb>",
          "dts2cpp_compat_combo_0039_keyof_map_string_numberb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0039_keyof_map_string_numberb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_KEYOF_MAP_STRING_NUMBERBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0040_KEYOF_MAP_STRING_NUMBERBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type keyof Map<string, numberbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0040_keyof_map_string_numberbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: keyof Map<string, numberbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0040_keyof_map_string_numberbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0040_keyof_map_string_numberbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0040_keyof_map_string_numberbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0040_keyof_map_string_numberbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, numberbr>",
          "dts2cpp_compat_combo_0040_keyof_map_string_numberbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0040_keyof_map_string_numberbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_BADTYPE197_KEYOF_MAP_STRI_C71039
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0041_BADTYPE197_KEYOF_MAP_STRI_C71039
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType197_keyof_Map_string__number_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `
          function compat197(a: BadType197_keyof_Map_string__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType197_keyof_Map_string__number_",
          "dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0041_badtype197_keyof_map_stri_c71039 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_KEYOF_MAP_STRING_NUMBERANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0042_KEYOF_MAP_STRING_NUMBERANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type keyof Map<string, numberany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0042_keyof_map_string_numberany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: keyof Map<string, numberany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0042_keyof_map_string_numberany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0042_keyof_map_string_numberany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0042_keyof_map_string_numberany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0042_keyof_map_string_numberany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, numberany>",
          "dts2cpp_compat_combo_0042_keyof_map_string_numberany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0042_keyof_map_string_numberany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT197_KEYOF_MAP_STRING_NUMBERV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0043_COMPAT197_KEYOF_MAP_STRING_NUMBERV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type keyof Map<string, numberv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `class Compat197 { field: keyof Map<string, numberv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Map<string, numberv>",
          "dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0043_compat197_keyof_map_string_numberv execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_COMPAT197_X_KEYOF_MAP_STRING_NUMBERX
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0044_COMPAT197_X_KEYOF_MAP_STRING_NUMBERX
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member keyof Map<string, numberx>; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0044_compat197_x_keyof_map_string_numberx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `type Compat197 = { x: keyof Map<string, numberx>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0044_compat197_x_keyof_map_string_numberx parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0044_compat197_x_keyof_map_string_numberx convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0044_compat197_x_keyof_map_string_numberx must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: keyof Map<string, numberx>; }",
          "dts2cpp_compat_combo_0044_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0044_compat197_x_keyof_map_string_numberx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_KEYOF_MAPP_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0045_KEYOF_MAPP_STRING_NUMBER
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); container
   *            keyword typo (keyof Mapp<string, number>); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0045_keyof_mapp_string_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: keyof Mapp<string, number>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0045_keyof_mapp_string_number parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0045_keyof_mapp_string_number convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0045_keyof_mapp_string_number must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0045_keyof_mapp_string_number must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Mapp<string, number>",
          "dts2cpp_compat_combo_0045_keyof_mapp_string_number param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0045_keyof_mapp_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_TYPEOF_DATE_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0046_TYPEOF_DATE_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof Date | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0046_typeof_date_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Date | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0046_typeof_date_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0046_typeof_date_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0046_typeof_date_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0046_typeof_date_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date | n",
          "dts2cpp_compat_combo_0046_typeof_date_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0046_typeof_date_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_TYPEOF_DATE_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0047_TYPEOF_DATE_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof Date | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0047_typeof_date_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Date | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0047_typeof_date_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0047_typeof_date_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0047_typeof_date_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0047_typeof_date_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date | s",
          "dts2cpp_compat_combo_0047_typeof_date_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0047_typeof_date_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_TYPEOF_DATE_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0048_TYPEOF_DATE_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof Date | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0048_typeof_date_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Date | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0048_typeof_date_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0048_typeof_date_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0048_typeof_date_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0048_typeof_date_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date | b",
          "dts2cpp_compat_combo_0048_typeof_date_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0048_typeof_date_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_TYPEOF_DAT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0049_TYPEOF_DAT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type typeof Dat; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0049_typeof_dat', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Dat): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0049_typeof_dat parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0049_typeof_dat convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0049_typeof_dat must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0049_typeof_dat must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Dat",
          "dts2cpp_compat_combo_0049_typeof_dat param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0049_typeof_dat execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_TYPEOF_DATE_G198
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0050_TYPEOF_DATE_G198
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof Date | g198); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0050_typeof_date_g198', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Date | g198): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0050_typeof_date_g198 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0050_typeof_date_g198 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0050_typeof_date_g198 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0050_typeof_date_g198 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date | g198",
          "dts2cpp_compat_combo_0050_typeof_date_g198 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0050_typeof_date_g198 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_TYPEOF_DATE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0051_TYPEOF_DATE_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof Date | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0051_typeof_date_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Date | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0051_typeof_date_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0051_typeof_date_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0051_typeof_date_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0051_typeof_date_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date | any",
          "dts2cpp_compat_combo_0051_typeof_date_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0051_typeof_date_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT198_TYPEOF_DATE_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0052_COMPAT198_TYPEOF_DATE_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type typeof Date | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0052_compat198_typeof_date_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `class Compat198 { field: typeof Date | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0052_compat198_typeof_date_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0052_compat198_typeof_date_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0052_compat198_typeof_date_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0052_compat198_typeof_date_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | v",
          "dts2cpp_compat_combo_0052_compat198_typeof_date_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0052_compat198_typeof_date_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_COMPAT198_X_TYPEOF_DATE_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0053_COMPAT198_X_TYPEOF_DATE_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member typeof Date | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0053_compat198_x_typeof_date_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `type Compat198 = { x: typeof Date | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0053_compat198_x_typeof_date_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0053_compat198_x_typeof_date_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0053_compat198_x_typeof_date_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: typeof Date | x; }", "dts2cpp_compat_combo_0053_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0053_compat198_x_typeof_date_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_TYPEOF_DATE_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0054_TYPEOF_DATE_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (typeof Date | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0054_typeof_date_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: typeof Date | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0054_typeof_date_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0054_typeof_date_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0054_typeof_date_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0054_typeof_date_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date | Z",
          "dts2cpp_compat_combo_0054_typeof_date_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0054_typeof_date_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_A_STRING_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0055_A_STRING_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: string } | n); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0055_a_string_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: string } | n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0055_a_string_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0055_a_string_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0055_a_string_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0055_a_string_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string } | n",
          "dts2cpp_compat_combo_0055_a_string_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0055_a_string_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_A_STRNG
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0056_A_STRNG
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); string
   *            keyword misspelled ({ a: strng }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0056_a_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: strng }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0056_a_strng parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0056_a_strng convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0056_a_strng must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0056_a_strng must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: strng }",
          "dts2cpp_compat_combo_0056_a_strng param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0056_a_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_A_STRING_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0057_A_STRING_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: string } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0057_a_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: string } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0057_a_string_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0057_a_string_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0057_a_string_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0057_a_string_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string } | b",
          "dts2cpp_compat_combo_0057_a_string_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0057_a_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_A_STRING_BR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0058_A_STRING_BR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: string } | br); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0058_a_string_br', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: string } | br): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0058_a_string_br parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0058_a_string_br convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0058_a_string_br must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0058_a_string_br must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string } | br",
          "dts2cpp_compat_combo_0058_a_string_br param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0058_a_string_br execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_A_STRING_G199
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0059_A_STRING_G199
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: string } | g199); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0059_a_string_g199', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: string } | g199): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0059_a_string_g199 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0059_a_string_g199 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0059_a_string_g199 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0059_a_string_g199 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string } | g199",
          "dts2cpp_compat_combo_0059_a_string_g199 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0059_a_string_g199 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_A_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0060_A_STRING_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: string } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0060_a_string_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: string } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0060_a_string_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0060_a_string_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0060_a_string_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0060_a_string_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string } | any",
          "dts2cpp_compat_combo_0060_a_string_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0060_a_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT199_A_STRING_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0061_COMPAT199_A_STRING_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type { a: string } | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0061_compat199_a_string_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `class Compat199 { field: { a: string } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0061_compat199_a_string_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0061_compat199_a_string_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0061_compat199_a_string_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0061_compat199_a_string_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | v",
          "dts2cpp_compat_combo_0061_compat199_a_string_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0061_compat199_a_string_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_COMPAT199_X_A_STRING_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0062_COMPAT199_X_A_STRING_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member { a: string } | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0062_compat199_x_a_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `type Compat199 = { x: { a: string } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0062_compat199_x_a_string_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0062_compat199_x_a_string_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0062_compat199_x_a_string_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: { a: string } | x; }", "dts2cpp_compat_combo_0062_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0062_compat199_x_a_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_A_STRING_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0063_A_STRING_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ a: string } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0063_a_string_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: { a: string } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0063_a_string_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0063_a_string_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0063_a_string_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0063_a_string_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string } | Z",
          "dts2cpp_compat_combo_0063_a_string_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0063_a_string_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_READONLY_B_NUMBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0064_READONLY_B_NUMBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); number
   *            keyword misspelled ({ readonly b: numbr }); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0064_readonly_b_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: { readonly b: numbr }): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0064_readonly_b_numbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0064_readonly_b_numbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0064_readonly_b_numbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0064_readonly_b_numbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: numbr }",
          "dts2cpp_compat_combo_0064_readonly_b_numbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0064_readonly_b_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_READONLY_B_NUMBER_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0065_READONLY_B_NUMBER_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ readonly b: number } | s); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0065_readonly_b_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: { readonly b: number } | s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0065_readonly_b_number_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0065_readonly_b_number_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0065_readonly_b_number_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0065_readonly_b_number_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number } | s",
          "dts2cpp_compat_combo_0065_readonly_b_number_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0065_readonly_b_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_READONLY_B_NUMBER_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0066_READONLY_B_NUMBER_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended ({ readonly b: number } | b); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0066_readonly_b_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: { readonly b: number } | b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0066_readonly_b_number_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0066_readonly_b_number_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0066_readonly_b_number_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0066_readonly_b_number_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number } | b",
          "dts2cpp_compat_combo_0066_readonly_b_number_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0066_readonly_b_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_STRING_X_NUMBER_G201
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0011_STRING_X_NUMBER_G201
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { x: number } | g201); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0011_string_x_number_g201', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: string & { x: number } | g201): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0011_string_x_number_g201 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0011_string_x_number_g201 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0011_string_x_number_g201 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0011_string_x_number_g201 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number } | g201",
          "dts2cpp_compat_combo_0011_string_x_number_g201 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0011_string_x_number_g201 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_STRING_X_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0012_STRING_X_NUMBER_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { x: number } | any); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0012_string_x_number_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: string & { x: number } | any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0012_string_x_number_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0012_string_x_number_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0012_string_x_number_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0012_string_x_number_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number } | any",
          "dts2cpp_compat_combo_0012_string_x_number_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0012_string_x_number_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_COMPAT201_STRING_X_NUMBER_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0013_COMPAT201_STRING_X_NUMBER_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type string & { x: number } | v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0013_compat201_string_x_number_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `class Compat201 { field: string & { x: number } | v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0013_compat201_string_x_number_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0013_compat201_string_x_number_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0013_compat201_string_x_number_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0013_compat201_string_x_number_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number } | v",
          "dts2cpp_compat_combo_0013_compat201_string_x_number_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0013_compat201_string_x_number_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_COMPAT201_X_STRING_X_NUMBER_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0014_COMPAT201_X_STRING_X_NUMBER_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member string & { x: number } | x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0014_compat201_x_string_x_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `type Compat201 = { x: string & { x: number } | x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0014_compat201_x_string_x_number_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0014_compat201_x_string_x_number_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0014_compat201_x_string_x_number_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: string & { x: number } | x; }",
          "dts2cpp_compat_combo_0014_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0014_compat201_x_string_x_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_STRING_X_NUMBER_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0015_STRING_X_NUMBER_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); union
   *            extended (string & { x: number } | Z); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0015_string_x_number_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: string & { x: number } | Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0015_string_x_number_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0015_string_x_number_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0015_string_x_number_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0015_string_x_number_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number } | Z",
          "dts2cpp_compat_combo_0015_string_x_number_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0015_string_x_number_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_UINT16ARRAY_N
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0016_UINT16ARRAY_N
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint16Array_n; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0016_uint16array_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Uint16Array_n): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0016_uint16array_n parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0016_uint16array_n convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0016_uint16array_n must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0016_uint16array_n must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array_n",
          "dts2cpp_compat_combo_0016_uint16array_n param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0016_uint16array_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_UINT16ARRAY_S
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0017_UINT16ARRAY_S
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint16Array_s; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0017_uint16array_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Uint16Array_s): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0017_uint16array_s parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0017_uint16array_s convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0017_uint16array_s must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0017_uint16array_s must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array_s",
          "dts2cpp_compat_combo_0017_uint16array_s param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0017_uint16array_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_UINT16ARRAY_B
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0018_UINT16ARRAY_B
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint16Array_b; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0018_uint16array_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Uint16Array_b): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0018_uint16array_b parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0018_uint16array_b convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0018_uint16array_b must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0018_uint16array_b must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array_b",
          "dts2cpp_compat_combo_0018_uint16array_b param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0018_uint16array_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_UINT16ARRA
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0019_UINT16ARRA
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint16Arra; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0019_uint16arra', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Uint16Arra): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0019_uint16arra parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0019_uint16arra convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0019_uint16arra must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0019_uint16arra must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Arra",
          "dts2cpp_compat_combo_0019_uint16arra param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0019_uint16arra execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_BADTYPE206_UINT16ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0020_BADTYPE206_UINT16ARRAY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType206_Uint16Array); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0020_badtype206_uint16array', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: BadType206_Uint16Array): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0020_badtype206_uint16array parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0020_badtype206_uint16array convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0020_badtype206_uint16array must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0020_badtype206_uint16array must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType206_Uint16Array",
          "dts2cpp_compat_combo_0020_badtype206_uint16array param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0020_badtype206_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_UINT16ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0021_UINT16ARRAY_ANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint16Array_any; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0021_uint16array_any', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Uint16Array_any): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0021_uint16array_any parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0021_uint16array_any convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0021_uint16array_any must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0021_uint16array_any must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array_any",
          "dts2cpp_compat_combo_0021_uint16array_any param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0021_uint16array_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_COMPAT206_UINT16ARRAY_V
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0022_COMPAT206_UINT16ARRAY_V
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type Uint16Array_v; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0022_compat206_uint16array_v', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `class Compat206 { field: Uint16Array_v; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0022_compat206_uint16array_v parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0022_compat206_uint16array_v convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0022_compat206_uint16array_v must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0022_compat206_uint16array_v must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_v",
          "dts2cpp_compat_combo_0022_compat206_uint16array_v field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0022_compat206_uint16array_v execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_COMPAT206_X_UINT16ARRAY_X
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0023_COMPAT206_X_UINT16ARRAY_X
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member Uint16Array_x; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0023_compat206_x_uint16array_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `type Compat206 = { x: Uint16Array_x; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0023_compat206_x_uint16array_x parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0023_compat206_x_uint16array_x convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1,
          "dts2cpp_compat_combo_0023_compat206_x_uint16array_x must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Uint16Array_x; }", "dts2cpp_compat_combo_0023_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0023_compat206_x_uint16array_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_UINT16ARRAY_Z
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0024_UINT16ARRAY_Z
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type Uint16Array_Z; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0024_uint16array_z', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat206.ts', `function compat206(a: Uint16Array_Z): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0024_uint16array_z parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0024_uint16array_z convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0024_uint16array_z must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0024_uint16array_z must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array_Z",
          "dts2cpp_compat_combo_0024_uint16array_z param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0024_uint16array_z execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_WEAKSET_OBJECTN
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0025_WEAKSET_OBJECTN
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakSet<objectn>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0025_weakset_objectn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: WeakSet<objectn>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0025_weakset_objectn parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0025_weakset_objectn convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0025_weakset_objectn must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0025_weakset_objectn must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<objectn>",
          "dts2cpp_compat_combo_0025_weakset_objectn param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0025_weakset_objectn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_WEAKSET_OBJECTS
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0026_WEAKSET_OBJECTS
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakSet<objects>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0026_weakset_objects', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: WeakSet<objects>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0026_weakset_objects parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0026_weakset_objects convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0026_weakset_objects must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0026_weakset_objects must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<objects>",
          "dts2cpp_compat_combo_0026_weakset_objects param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0026_weakset_objects execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_WEAKSET_OBJECTB
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0027_WEAKSET_OBJECTB
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakSet<objectb>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0027_weakset_objectb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: WeakSet<objectb>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0027_weakset_objectb parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0027_weakset_objectb convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0027_weakset_objectb must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0027_weakset_objectb must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<objectb>",
          "dts2cpp_compat_combo_0027_weakset_objectb param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0027_weakset_objectb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_WEAKSET_OBJECTBR
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0028_WEAKSET_OBJECTBR
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakSet<objectbr>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0028_weakset_objectbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: WeakSet<objectbr>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0028_weakset_objectbr parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0028_weakset_objectbr convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0028_weakset_objectbr must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0028_weakset_objectbr must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<objectbr>",
          "dts2cpp_compat_combo_0028_weakset_objectbr param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0028_weakset_objectbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_BADTYPE207_WEAKSET_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0029_BADTYPE207_WEAKSET_OBJECT
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); replaced
   *            with BadType token (BadType207_WeakSet_object_); strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0029_badtype207_weakset_object', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: BadType207_WeakSet_object_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0029_badtype207_weakset_object parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0029_badtype207_weakset_object convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0029_badtype207_weakset_object must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0029_badtype207_weakset_object must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType207_WeakSet_object_",
          "dts2cpp_compat_combo_0029_badtype207_weakset_object param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0029_badtype207_weakset_object execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_WEAKSET_OBJECTANY
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0030_WEAKSET_OBJECTANY
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            type WeakSet<objectany>; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0030_weakset_objectany', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `function compat207(a: WeakSet<objectany>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0030_weakset_objectany parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0030_weakset_objectany convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1,
          "dts2cpp_compat_combo_0030_weakset_objectany must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_combo_0030_weakset_objectany must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<objectany>",
          "dts2cpp_compat_combo_0030_weakset_objectany param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0030_weakset_objectany execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_COMPAT207_WEAKSET_OBJECTV
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_COMBO_0031_COMPAT207_WEAKSET_OBJECTV
   * @tc.desc   Stability compat dts2cpp/combo: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type WeakSet<objectv>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_combo_0031_compat207_weakset_objectv', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat207.ts', `class Compat207 { field: WeakSet<objectv>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_combo_0031_compat207_weakset_objectv parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_combo_0031_compat207_weakset_objectv convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "dts2cpp_compat_combo_0031_compat207_weakset_objectv must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_combo_0031_compat207_weakset_objectv must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakSet<objectv>",
          "dts2cpp_compat_combo_0031_compat207_weakset_objectv field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_combo_0031_compat207_weakset_objectv execution error: ${err}`);
    }
  });
});
