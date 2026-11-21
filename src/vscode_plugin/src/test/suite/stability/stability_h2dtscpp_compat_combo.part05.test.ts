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
import { transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_READONLY_B_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_READONLY_B_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ readonly b: number } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_readonly_b_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_readonly_b_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_readonly_b_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_readonly_b_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number } | r",
          "h2dtscpp_compat_combo_0033_readonly_b_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_readonly_b_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_READONLY_B_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_READONLY_B_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { readonly b: number }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_readonly_b_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_readonly_b_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_readonly_b_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_readonly_b_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number }x",
          "h2dtscpp_compat_combo_0034_readonly_b_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_readonly_b_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_READONLY_B_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type readonly b: number }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_readonly_b_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: ' readonly b: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_readonly_b_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_readonly_b_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_readonly_b_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " readonly b: number }",
          "h2dtscpp_compat_combo_0035_readonly_b_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_READONLY_B_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_READONLY_B_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ readonly b: number } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_readonly_b_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_readonly_b_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_readonly_b_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_readonly_b_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number } | std",
          "h2dtscpp_compat_combo_0036_readonly_b_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_readonly_b_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_READONLY_B_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_READONLY_B_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ readonly b: number } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_readonly_b_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_readonly_b_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_readonly_b_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_readonly_b_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number } | M",
          "h2dtscpp_compat_combo_0037_readonly_b_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_readonly_b_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_READONLY_B_NUMBER_XYZ200
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_READONLY_B_NUMBER_XYZ200
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ readonly b: number } | XYZ200); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_readonly_b_number_xyz200', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number } | XYZ200', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_readonly_b_number_xyz200 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_readonly_b_number_xyz200 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_readonly_b_number_xyz200 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number } | XYZ200",
          "h2dtscpp_compat_combo_0038_readonly_b_number_xyz200 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_readonly_b_number_xyz200 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_STRING_X_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_STRING_X_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled (string & { x: numbr }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_string_x_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: numbr }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_string_x_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_string_x_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_string_x_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: numbr }",
          "h2dtscpp_compat_combo_0039_string_x_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_string_x_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_STRNG_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_STRNG_X_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (strng & { x: number }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_strng_x_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'strng & { x: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_strng_x_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_strng_x_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_strng_x_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strng & { x: number }",
          "h2dtscpp_compat_combo_0040_strng_x_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_strng_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_STRING_X_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_STRING_X_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { x: number } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_string_x_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: number } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_string_x_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_string_x_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_string_x_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number } | b",
          "h2dtscpp_compat_combo_0041_string_x_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_string_x_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_STRING_X_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_STRING_X_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { x: number } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_string_x_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: number } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_string_x_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_string_x_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_string_x_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number } | r",
          "h2dtscpp_compat_combo_0042_string_x_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_string_x_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_STRING_X_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_STRING_X_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type string & { x: number }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_string_x_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: number }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_string_x_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_string_x_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_string_x_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number }x",
          "h2dtscpp_compat_combo_0043_string_x_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_string_x_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_TRING_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_TRING_X_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type tring & { x: number }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_tring_x_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'tring & { x: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_tring_x_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_tring_x_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_tring_x_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "tring & { x: number }",
          "h2dtscpp_compat_combo_0044_tring_x_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_tring_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_STRING_X_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_STRING_X_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { x: number } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_string_x_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: number } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_string_x_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_string_x_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_string_x_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number } | std",
          "h2dtscpp_compat_combo_0045_string_x_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_string_x_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_STRING_X_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_STRING_X_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { x: number } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_string_x_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: number } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_string_x_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_string_x_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_string_x_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number } | M",
          "h2dtscpp_compat_combo_0046_string_x_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_string_x_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_STRING_X_NUMBER_XYZ201
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_STRING_X_NUMBER_XYZ201
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { x: number } | XYZ201); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_string_x_number_xyz201', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C201', alias: '',
            variableList: [{ type: 'string & { x: number } | XYZ201', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_string_x_number_xyz201 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_string_x_number_xyz201 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_string_x_number_xyz201 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number } | XYZ201",
          "h2dtscpp_compat_combo_0047_string_x_number_xyz201 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_string_x_number_xyz201 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_UINT16ARRAY_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_UINT16ARRAY_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_uint16array_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_uint16array_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_uint16array_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_uint16array_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_n",
          "h2dtscpp_compat_combo_0048_uint16array_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_uint16array_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_UINT16ARRAY_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_UINT16ARRAY_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_uint16array_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_uint16array_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_uint16array_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_uint16array_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_s",
          "h2dtscpp_compat_combo_0049_uint16array_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_uint16array_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_UINT16ARRAY_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_UINT16ARRAY_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_uint16array_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_uint16array_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_uint16array_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_uint16array_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_b",
          "h2dtscpp_compat_combo_0050_uint16array_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_uint16array_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_UINT16ARRAY_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_UINT16ARRAY_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_uint16array_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_uint16array_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0051_uint16array_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_uint16array_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_r",
          "h2dtscpp_compat_combo_0051_uint16array_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_uint16array_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_UINT16ARRAYX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_UINT16ARRAYX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Arrayx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_uint16arrayx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Arrayx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_uint16arrayx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_uint16arrayx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_uint16arrayx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Arrayx",
          "h2dtscpp_compat_combo_0052_uint16arrayx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_uint16arrayx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_INT16ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_INT16ARRAY
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type int16Array; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_int16array', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'int16Array', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_int16array convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_int16array must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_int16array must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "int16Array",
          "h2dtscpp_compat_combo_0053_int16array field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_int16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_UINT16ARRAY_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_UINT16ARRAY_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_uint16array_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_uint16array_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_uint16array_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_uint16array_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_std",
          "h2dtscpp_compat_combo_0054_uint16array_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_uint16array_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_UINT16ARRAY_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_UINT16ARRAY_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_uint16array_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_uint16array_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_uint16array_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_uint16array_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_M",
          "h2dtscpp_compat_combo_0055_uint16array_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_uint16array_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_UINT16ARRAY_XYZ206
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_UINT16ARRAY_XYZ206
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint16Array_XYZ206; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_uint16array_xyz206', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C206', alias: '',
            variableList: [{ type: 'Uint16Array_XYZ206', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_uint16array_xyz206 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_uint16array_xyz206 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_uint16array_xyz206 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array_XYZ206",
          "h2dtscpp_compat_combo_0056_uint16array_xyz206 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_uint16array_xyz206 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_WEAKSET_OBJECTN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_WEAKSET_OBJECTN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakSet<objectn>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_weakset_objectn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C207', alias: '',
            variableList: [{ type: 'WeakSet<objectn>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_weakset_objectn convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_weakset_objectn must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_weakset_objectn must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakSet<objectn>",
          "h2dtscpp_compat_combo_0057_weakset_objectn field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_weakset_objectn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_WEAKSET_OBJECTS
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_WEAKSET_OBJECTS
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakSet<objects>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_weakset_objects', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C207', alias: '',
            variableList: [{ type: 'WeakSet<objects>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_weakset_objects convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_weakset_objects must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_weakset_objects must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakSet<objects>",
          "h2dtscpp_compat_combo_0058_weakset_objects field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_weakset_objects execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_M_VOID_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_M_VOID_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ m(): void } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_m_void_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C208', alias: '',
            variableList: [{ type: '{ m(): void } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_m_void_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_m_void_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_m_void_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void } | r",
          "h2dtscpp_compat_combo_0011_m_void_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_m_void_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_M_VOID_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_M_VOID_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { m(): void }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_m_void_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C208', alias: '',
            variableList: [{ type: '{ m(): void }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_m_void_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_m_void_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_m_void_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void }x",
          "h2dtscpp_compat_combo_0012_m_void_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_m_void_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_M_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_M_VOID
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type m(): void }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_m_void', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C208', alias: '',
            variableList: [{ type: ' m(): void }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_m_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_m_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_m_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " m(): void }",
          "h2dtscpp_compat_combo_0013_m_void field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_M_VOID_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_M_VOID_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ m(): void } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_m_void_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C208', alias: '',
            variableList: [{ type: '{ m(): void } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_m_void_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_m_void_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_m_void_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void } | std",
          "h2dtscpp_compat_combo_0014_m_void_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_m_void_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_M_VOID_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_M_VOID_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ m(): void } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_m_void_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C208', alias: '',
            variableList: [{ type: '{ m(): void } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_m_void_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_m_void_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_m_void_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void } | M",
          "h2dtscpp_compat_combo_0015_m_void_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_m_void_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_M_VOID_XYZ208
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_M_VOID_XYZ208
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ m(): void } | XYZ208); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_m_void_xyz208', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C208', alias: '',
            variableList: [{ type: '{ m(): void } | XYZ208', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_m_void_xyz208 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_m_void_xyz208 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_m_void_xyz208 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void } | XYZ208",
          "h2dtscpp_compat_combo_0016_m_void_xyz208 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_m_void_xyz208 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_A_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_A_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ a: numbr }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_a_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: numbr }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_a_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_a_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_a_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: numbr }",
          "h2dtscpp_compat_combo_0017_a_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_a_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_A_NUMBER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_A_NUMBER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number } | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_a_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number } | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_a_number_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_a_number_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_a_number_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | s",
          "h2dtscpp_compat_combo_0018_a_number_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_a_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_A_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_A_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_a_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_a_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_a_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_a_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | b",
          "h2dtscpp_compat_combo_0019_a_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_a_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_A_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_A_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_a_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_a_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_a_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_a_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | r",
          "h2dtscpp_compat_combo_0020_a_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_a_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_A_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_A_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { a: number }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_a_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_a_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_a_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_a_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number }x",
          "h2dtscpp_compat_combo_0021_a_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_a_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_A_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_A_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type a: number }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_a_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: ' a: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_a_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_a_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_a_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " a: number }",
          "h2dtscpp_compat_combo_0022_a_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_A_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_A_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_a_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_a_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_a_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_a_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | std",
          "h2dtscpp_compat_combo_0023_a_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_a_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_A_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_A_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_a_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_a_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_a_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_a_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | M",
          "h2dtscpp_compat_combo_0024_a_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_a_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_A_NUMBER_XYZ214
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_A_NUMBER_XYZ214
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number } | XYZ214); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_a_number_xyz214', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C214', alias: '',
            variableList: [{ type: '{ a: number } | XYZ214', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_a_number_xyz214 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_a_number_xyz214 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_a_number_xyz214 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number } | XYZ214",
          "h2dtscpp_compat_combo_0025_a_number_xyz214 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_a_number_xyz214 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_A_NUMBR_B_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_A_NUMBR_B_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ a: numbr; b: numbr }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_a_numbr_b_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: numbr; b: numbr }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_a_numbr_b_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_a_numbr_b_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_a_numbr_b_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: numbr; b: numbr }",
          "h2dtscpp_compat_combo_0026_a_numbr_b_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_a_numbr_b_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_A_NUMBER_B_NUMBER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_A_NUMBER_B_NUMBER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number } | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_a_number_b_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number } | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_a_number_b_number_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_a_number_b_number_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_a_number_b_number_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | s",
          "h2dtscpp_compat_combo_0027_a_number_b_number_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_a_number_b_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_A_NUMBER_B_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_A_NUMBER_B_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_a_number_b_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_a_number_b_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_a_number_b_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_a_number_b_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | b",
          "h2dtscpp_compat_combo_0028_a_number_b_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_a_number_b_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_A_NUMBER_B_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_A_NUMBER_B_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_a_number_b_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_a_number_b_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_a_number_b_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_a_number_b_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | r",
          "h2dtscpp_compat_combo_0029_a_number_b_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_a_number_b_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_A_NUMBER_B_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_A_NUMBER_B_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { a: number; b: number }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_a_number_b_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_a_number_b_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_a_number_b_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_a_number_b_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number }x",
          "h2dtscpp_compat_combo_0030_a_number_b_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_a_number_b_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_A_NUMBER_B_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type a: number; b: number }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_a_number_b_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: ' a: number; b: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_a_number_b_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_a_number_b_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_a_number_b_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " a: number; b: number }",
          "h2dtscpp_compat_combo_0031_a_number_b_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_A_NUMBER_B_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_A_NUMBER_B_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_a_number_b_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_a_number_b_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_a_number_b_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_a_number_b_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | std",
          "h2dtscpp_compat_combo_0032_a_number_b_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_a_number_b_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_A_NUMBER_B_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_A_NUMBER_B_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_a_number_b_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_a_number_b_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_a_number_b_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_a_number_b_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | M",
          "h2dtscpp_compat_combo_0033_a_number_b_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_a_number_b_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_A_NUMBER_B_NUMBER_XYZ215
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_A_NUMBER_B_NUMBER_XYZ215
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number } | XYZ215); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_a_number_b_number_xyz215', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C215', alias: '',
            variableList: [{ type: '{ a: number; b: number } | XYZ215', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_a_number_b_number_xyz215 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_a_number_b_number_xyz215 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_a_number_b_number_xyz215 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number } | XYZ215",
          "h2dtscpp_compat_combo_0034_a_number_b_number_xyz215 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_a_number_b_number_xyz215 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_A_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_A_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_a_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_a_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0035_a_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_a_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_n",
          "h2dtscpp_compat_combo_0035_a_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_a_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_A_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_A_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_a_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_a_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0036_a_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_a_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_s",
          "h2dtscpp_compat_combo_0036_a_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_a_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_A_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_A_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_a_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_a_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0037_a_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_a_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_b",
          "h2dtscpp_compat_combo_0037_a_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_a_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_A_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_A_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_a_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_a_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0038_a_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_a_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_r",
          "h2dtscpp_compat_combo_0038_a_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_a_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_AX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_AX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Ax; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_ax', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'Ax', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_ax convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0039_ax must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_ax must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Ax", "h2dtscpp_compat_combo_0039_ax field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_ax execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_A_H
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_A_H
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_h; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_a_h', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_h', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_a_h convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0040_a_h must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_a_h must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_h",
          "h2dtscpp_compat_combo_0040_a_h field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_a_h execution error: ${err}`);
    }
  });
});
