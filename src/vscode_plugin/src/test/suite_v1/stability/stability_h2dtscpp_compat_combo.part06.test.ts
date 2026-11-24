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

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_A_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_A_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_a_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_a_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_a_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_a_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_std",
          "h2dtscpp_compat_combo_0041_a_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_a_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_A_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_A_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_a_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_a_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0042_a_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_a_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_M",
          "h2dtscpp_compat_combo_0042_a_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_a_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_A_XYZ220
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_A_XYZ220
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type A_XYZ220; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_a_xyz220', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C220', alias: '',
            variableList: [{ type: 'A_XYZ220', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_a_xyz220 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_a_xyz220 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_a_xyz220 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "A_XYZ220",
          "h2dtscpp_compat_combo_0043_a_xyz220 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_a_xyz220 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_B_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_B_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_b_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_b_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0044_b_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_b_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_n",
          "h2dtscpp_compat_combo_0044_b_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_b_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_B_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_B_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_b_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_b_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0045_b_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_b_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_s",
          "h2dtscpp_compat_combo_0045_b_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_b_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_B_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_B_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_b_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_b_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0046_b_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_b_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_b",
          "h2dtscpp_compat_combo_0046_b_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_b_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_B_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_B_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_b_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_b_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0047_b_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_b_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_r",
          "h2dtscpp_compat_combo_0047_b_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_b_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_BX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_BX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_bx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'Bx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_bx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0048_bx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_bx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bx", "h2dtscpp_compat_combo_0048_bx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_bx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_B_H
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_B_H
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_h; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_b_h', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_h', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_b_h convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0049_b_h must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_b_h must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_h",
          "h2dtscpp_compat_combo_0049_b_h field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_b_h execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_B_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_B_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_b_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_b_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_b_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_b_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_std",
          "h2dtscpp_compat_combo_0050_b_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_b_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_B_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_B_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_b_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_b_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0051_b_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_b_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_M",
          "h2dtscpp_compat_combo_0051_b_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_b_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_B_XYZ221
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_B_XYZ221
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type B_XYZ221; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_b_xyz221', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C221', alias: '',
            variableList: [{ type: 'B_XYZ221', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_b_xyz221 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_b_xyz221 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_b_xyz221 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "B_XYZ221",
          "h2dtscpp_compat_combo_0052_b_xyz221 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_b_xyz221 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_STRING_BRAND_X_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_STRING_BRAND_X_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { brand: "x" } | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_string_brand_x_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C222', alias: '',
            variableList: [{ type: 'string & { brand: "x" } | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_string_brand_x_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_string_brand_x_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_string_brand_x_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" } | n",
          "h2dtscpp_compat_combo_0053_string_brand_x_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_string_brand_x_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_STRNG_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_STRNG_BRAND_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (strng & { brand: "x" }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_strng_brand_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C222', alias: '',
            variableList: [{ type: 'strng & { brand: "x" }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_strng_brand_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_strng_brand_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_strng_brand_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strng & { brand: \"x\" }",
          "h2dtscpp_compat_combo_0054_strng_brand_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_strng_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_STRING_BRAND_X_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_STRING_BRAND_X_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { brand: "x" } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_string_brand_x_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C222', alias: '',
            variableList: [{ type: 'string & { brand: "x" } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_string_brand_x_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_string_brand_x_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_string_brand_x_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" } | b",
          "h2dtscpp_compat_combo_0055_string_brand_x_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_string_brand_x_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_STRING_BRAND_X_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_STRING_BRAND_X_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { brand: "x" } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_string_brand_x_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C222', alias: '',
            variableList: [{ type: 'string & { brand: "x" } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_string_brand_x_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_string_brand_x_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_string_brand_x_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" } | r",
          "h2dtscpp_compat_combo_0056_string_brand_x_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_string_brand_x_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_STRING_BRAND_X_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_STRING_BRAND_X_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type string & { brand: "x" }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_string_brand_x_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C222', alias: '',
            variableList: [{ type: 'string & { brand: "x" }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_string_brand_x_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_string_brand_x_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_string_brand_x_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" }x",
          "h2dtscpp_compat_combo_0057_string_brand_x_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_string_brand_x_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_TRING_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_TRING_BRAND_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type tring & { brand: "x" }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_tring_brand_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C222', alias: '',
            variableList: [{ type: 'tring & { brand: "x" }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_tring_brand_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_tring_brand_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_tring_brand_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "tring & { brand: \"x\" }",
          "h2dtscpp_compat_combo_0058_tring_brand_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_tring_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_LIT_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_LIT_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "lit_M"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_lit_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C223', alias: '',
            variableList: [{ type: '"lit_M"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_lit_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_lit_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_lit_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"lit_M\"",
          "h2dtscpp_compat_combo_0011_lit_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_lit_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_LIT_XYZ223
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_LIT_XYZ223
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "lit_XYZ223"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_lit_xyz223', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C223', alias: '',
            variableList: [{ type: '"lit_XYZ223"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_lit_xyz223 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_lit_xyz223 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_lit_xyz223 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"lit_XYZ223\"",
          "h2dtscpp_compat_combo_0012_lit_xyz223 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_lit_xyz223 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_42_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_42_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_42_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_42_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_42_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_42_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | n",
          "h2dtscpp_compat_combo_0013_42_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_42_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_42_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_42_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_42_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_42_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_42_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_42_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | s",
          "h2dtscpp_compat_combo_0014_42_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_42_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_42_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_42_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_42_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_42_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_42_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_42_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | b",
          "h2dtscpp_compat_combo_0015_42_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_42_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_42_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_42_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_42_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_42_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_42_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_42_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | r",
          "h2dtscpp_compat_combo_0016_42_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_42_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_42X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_42X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type 42x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_42x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_42x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0017_42x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_42x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42x",
          "h2dtscpp_compat_combo_0017_42x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_42x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_2
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type 2; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_2', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '2', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0018_2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "2", "h2dtscpp_compat_combo_0018_2 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_42_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_42_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_42_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_42_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_42_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_42_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | std",
          "h2dtscpp_compat_combo_0019_42_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_42_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_42_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_42_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_42_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_42_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_42_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_42_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | M",
          "h2dtscpp_compat_combo_0020_42_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_42_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_42_XYZ224
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_42_XYZ224
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (42 | XYZ224); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_42_xyz224', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C224', alias: '',
            variableList: [{ type: '42 | XYZ224', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_42_xyz224 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_42_xyz224 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_42_xyz224 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "42 | XYZ224",
          "h2dtscpp_compat_combo_0021_42_xyz224 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_42_xyz224 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_TRUE_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_TRUE_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_true_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_true_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_true_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_true_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_n",
          "h2dtscpp_compat_combo_0022_true_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_true_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_TRUE_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_TRUE_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_true_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_true_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_true_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_true_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_s",
          "h2dtscpp_compat_combo_0023_true_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_true_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_TRUE_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_TRUE_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_true_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_true_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_true_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_true_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_b",
          "h2dtscpp_compat_combo_0024_true_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_true_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_TRUE_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_TRUE_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_true_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_true_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_true_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_true_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_r",
          "h2dtscpp_compat_combo_0025_true_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_true_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_TRUEX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_TRUEX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type truex; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_truex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'truex', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_truex convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_truex must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_truex must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "truex",
          "h2dtscpp_compat_combo_0026_truex field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_truex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_RUE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_RUE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type rue; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_rue', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'rue', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_rue convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0027_rue must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_rue must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "rue",
          "h2dtscpp_compat_combo_0027_rue field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_rue execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_TRUE_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_TRUE_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_true_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_true_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_true_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_true_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_std",
          "h2dtscpp_compat_combo_0028_true_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_true_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_TRUE_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_TRUE_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_true_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_true_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_true_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_true_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_M",
          "h2dtscpp_compat_combo_0029_true_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_true_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_TRUE_XYZ225
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_TRUE_XYZ225
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type true_XYZ225; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_true_xyz225', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C225', alias: '',
            variableList: [{ type: 'true_XYZ225', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_true_xyz225 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_true_xyz225 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_true_xyz225 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "true_XYZ225",
          "h2dtscpp_compat_combo_0030_true_xyz225 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_true_xyz225 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_VOIDFUNC_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_VOIDFUNC_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_voidfunc_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_voidfunc_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_voidfunc_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_voidfunc_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_n",
          "h2dtscpp_compat_combo_0031_voidfunc_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_voidfunc_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_VOIDFUNC_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_VOIDFUNC_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_voidfunc_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_voidfunc_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_voidfunc_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_voidfunc_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_s",
          "h2dtscpp_compat_combo_0032_voidfunc_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_voidfunc_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_VOIDFUNC_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_VOIDFUNC_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_voidfunc_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_voidfunc_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_voidfunc_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_voidfunc_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_b",
          "h2dtscpp_compat_combo_0033_voidfunc_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_voidfunc_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_VOIDFUNC_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_VOIDFUNC_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_voidfunc_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_voidfunc_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_voidfunc_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_voidfunc_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_r",
          "h2dtscpp_compat_combo_0034_voidfunc_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_voidfunc_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_VOIDFUNCX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_VOIDFUNCX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFuncx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_voidfuncx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFuncx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_voidfuncx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_voidfuncx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_voidfuncx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFuncx",
          "h2dtscpp_compat_combo_0035_voidfuncx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_voidfuncx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_OIDFUNC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_OIDFUNC
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type oidFunc; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_oidfunc', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'oidFunc', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_oidfunc convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_oidfunc must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_oidfunc must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "oidFunc",
          "h2dtscpp_compat_combo_0036_oidfunc field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_oidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_VOIDFUNC_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_VOIDFUNC_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_voidfunc_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_voidfunc_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_voidfunc_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_voidfunc_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_std",
          "h2dtscpp_compat_combo_0037_voidfunc_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_voidfunc_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_VOIDFUNC_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_VOIDFUNC_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_voidfunc_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_voidfunc_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_voidfunc_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_voidfunc_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_M",
          "h2dtscpp_compat_combo_0038_voidfunc_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_voidfunc_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_VOIDFUNC_XYZ234
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_VOIDFUNC_XYZ234
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type voidFunc_XYZ234; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_voidfunc_xyz234', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'voidFunc_XYZ234', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_voidfunc_xyz234 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_voidfunc_xyz234 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_voidfunc_xyz234 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc_XYZ234",
          "h2dtscpp_compat_combo_0039_voidfunc_xyz234 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_voidfunc_xyz234 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_STRING_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_STRING_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & {} | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_string_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {} | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_string_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_string_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_string_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | n",
          "h2dtscpp_compat_combo_0040_string_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_string_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_STRNG
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (strng & {}); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'strng & {}', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strng & {}",
          "h2dtscpp_compat_combo_0041_strng field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_STRING_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_STRING_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & {} | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {} | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_string_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_string_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_string_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | b",
          "h2dtscpp_compat_combo_0042_string_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_STRING_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_STRING_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & {} | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_string_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {} | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_string_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_string_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_string_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | r",
          "h2dtscpp_compat_combo_0043_string_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_string_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_STRING_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_STRING_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type string & {}x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {}x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_string_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_string_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_string_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {}x",
          "h2dtscpp_compat_combo_0044_string_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_TRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_TRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type tring & {}; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_tring', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'tring & {}', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_tring convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_tring must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_tring must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "tring & {}",
          "h2dtscpp_compat_combo_0045_tring field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_tring execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_STRING_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_STRING_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & {} | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_string_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {} | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_string_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_string_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_string_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | std",
          "h2dtscpp_compat_combo_0046_string_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_string_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_STRING_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_STRING_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & {} | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_string_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {} | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_string_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_string_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_string_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | M",
          "h2dtscpp_compat_combo_0047_string_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_string_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_STRING_XYZ261
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_STRING_XYZ261
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & {} | XYZ261); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_string_xyz261', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C261', alias: '',
            variableList: [{ type: 'string & {} | XYZ261', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_string_xyz261 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_string_xyz261 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_string_xyz261 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & {} | XYZ261",
          "h2dtscpp_compat_combo_0048_string_xyz261 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_string_xyz261 execution error: ${err}`);
    }
  });
});
