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

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_A_NUMBER_B_NUMBER_C_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_A_NUMBER_B_NUMBER_C_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number; c: number } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_a_number_b_number_c_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_a_number_b_number_c_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_a_number_b_number_c_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_a_number_b_number_c_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number } | M",
          "h2dtscpp_compat_combo_0017_a_number_b_number_c_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_a_number_b_number_c_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_A_NUMBER_B_NUMBER_C_NUMBE_C170A1
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_A_NUMBER_B_NUMBER_C_NUMBE_C170A1
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number; c: number } | XYZ321); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_a_number_b_number_c_numbe_c170a1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number } | XYZ321', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_a_number_b_number_c_numbe_c170a1 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_a_number_b_number_c_numbe_c170a1 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_a_number_b_number_c_numbe_c170a1 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number } | XYZ321",
          "h2dtscpp_compat_combo_0018_a_number_b_number_c_numbe_c170a1 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_a_number_b_number_c_numbe_c170a1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_E_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_E_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_e_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_e_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0019_e_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_e_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_n",
          "h2dtscpp_compat_combo_0019_e_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_e_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_E_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_E_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_e_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_e_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0020_e_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_e_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_s",
          "h2dtscpp_compat_combo_0020_e_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_e_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_E_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_E_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_e_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_e_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0021_e_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_e_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_b",
          "h2dtscpp_compat_combo_0021_e_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_e_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_E_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_E_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_e_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_e_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0022_e_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_e_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_r",
          "h2dtscpp_compat_combo_0022_e_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_e_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_EX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_EX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Ex; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_ex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'Ex', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_ex convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0023_ex must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_ex must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Ex", "h2dtscpp_compat_combo_0023_ex field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_ex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_E_H
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_E_H
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_h; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_e_h', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_h', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_e_h convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0024_e_h must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_e_h must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_h",
          "h2dtscpp_compat_combo_0024_e_h field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_e_h execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_E_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_E_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_e_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_e_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_e_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_e_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_std",
          "h2dtscpp_compat_combo_0025_e_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_e_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_E_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_E_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_e_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_e_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0026_e_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_e_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_M",
          "h2dtscpp_compat_combo_0026_e_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_e_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_E_XYZ322
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_E_XYZ322
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type E_XYZ322; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_e_xyz322', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C322', alias: '',
            variableList: [{ type: 'E_XYZ322', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_e_xyz322 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_e_xyz322 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_e_xyz322 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "E_XYZ322",
          "h2dtscpp_compat_combo_0027_e_xyz322 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_e_xyz322 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_TYPEOF_GLOBALTHIS_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_TYPEOF_GLOBALTHIS_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_typeof_globalthis_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_typeof_globalthis_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_typeof_globalthis_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_typeof_globalthis_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | n",
          "h2dtscpp_compat_combo_0028_typeof_globalthis_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_typeof_globalthis_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_TYPEOF_GLOBALTHIS_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_TYPEOF_GLOBALTHIS_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_typeof_globalthis_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_typeof_globalthis_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_typeof_globalthis_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_typeof_globalthis_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | s",
          "h2dtscpp_compat_combo_0029_typeof_globalthis_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_typeof_globalthis_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_TYPEOF_GLOBALTHIS_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_TYPEOF_GLOBALTHIS_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_typeof_globalthis_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_typeof_globalthis_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_typeof_globalthis_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_typeof_globalthis_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | b",
          "h2dtscpp_compat_combo_0030_typeof_globalthis_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_typeof_globalthis_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_TYPEOF_GLOBALTHIS_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_TYPEOF_GLOBALTHIS_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_typeof_globalthis_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_typeof_globalthis_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_typeof_globalthis_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_typeof_globalthis_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | r",
          "h2dtscpp_compat_combo_0031_typeof_globalthis_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_typeof_globalthis_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_TYPEOF_GLOBALTHISX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_TYPEOF_GLOBALTHISX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type typeof globalThisx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_typeof_globalthisx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThisx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_typeof_globalthisx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_typeof_globalthisx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_typeof_globalthisx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThisx",
          "h2dtscpp_compat_combo_0032_typeof_globalthisx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_typeof_globalthisx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_YPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_YPEOF_GLOBALTHIS
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ypeof globalThis; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_ypeof_globalthis', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'ypeof globalThis', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_ypeof_globalthis convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_ypeof_globalthis must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_ypeof_globalthis must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ypeof globalThis",
          "h2dtscpp_compat_combo_0033_ypeof_globalthis field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_ypeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_TYPEOF_GLOBALTHIS_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_TYPEOF_GLOBALTHIS_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_typeof_globalthis_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_typeof_globalthis_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_typeof_globalthis_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_typeof_globalthis_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | std",
          "h2dtscpp_compat_combo_0034_typeof_globalthis_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_typeof_globalthis_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_TYPEOF_GLOBALTHIS_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_TYPEOF_GLOBALTHIS_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_typeof_globalthis_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_typeof_globalthis_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_typeof_globalthis_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_typeof_globalthis_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | M",
          "h2dtscpp_compat_combo_0035_typeof_globalthis_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_typeof_globalthis_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_TYPEOF_GLOBALTHIS_XYZ324
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_TYPEOF_GLOBALTHIS_XYZ324
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof globalThis | XYZ324); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_typeof_globalthis_xyz324', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C324', alias: '',
            variableList: [{ type: 'typeof globalThis | XYZ324', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_typeof_globalthis_xyz324 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_typeof_globalthis_xyz324 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_typeof_globalthis_xyz324 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis | XYZ324",
          "h2dtscpp_compat_combo_0036_typeof_globalthis_xyz324 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_typeof_globalthis_xyz324 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_UNKNOWN_NULL_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_UNKNOWN_NULL_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_unknown_null_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_unknown_null_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_unknown_null_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_unknown_null_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | n",
          "h2dtscpp_compat_combo_0037_unknown_null_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_unknown_null_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_UNKNOWN_NULL_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_UNKNOWN_NULL_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_unknown_null_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_unknown_null_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_unknown_null_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_unknown_null_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | s",
          "h2dtscpp_compat_combo_0038_unknown_null_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_unknown_null_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_UNKNOWN_NULL_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_UNKNOWN_NULL_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_unknown_null_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_unknown_null_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_unknown_null_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_unknown_null_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | b",
          "h2dtscpp_compat_combo_0039_unknown_null_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_unknown_null_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_UNKNOWN_NULL_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_UNKNOWN_NULL_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_unknown_null_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_unknown_null_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_unknown_null_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_unknown_null_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | r",
          "h2dtscpp_compat_combo_0040_unknown_null_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_unknown_null_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_UNKNOWN_NULLX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_UNKNOWN_NULLX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type unknown & nullx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_unknown_nullx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & nullx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_unknown_nullx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_unknown_nullx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_unknown_nullx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & nullx",
          "h2dtscpp_compat_combo_0041_unknown_nullx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_unknown_nullx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_NKNOWN_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_NKNOWN_NULL
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type nknown & null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_nknown_null', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'nknown & null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_nknown_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_nknown_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_nknown_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "nknown & null",
          "h2dtscpp_compat_combo_0042_nknown_null field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_nknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_UNKNOWN_NULL_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_UNKNOWN_NULL_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_unknown_null_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_unknown_null_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_unknown_null_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_unknown_null_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | std",
          "h2dtscpp_compat_combo_0043_unknown_null_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_unknown_null_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_UNKNOWN_NULL_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_UNKNOWN_NULL_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_unknown_null_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_unknown_null_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_unknown_null_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_unknown_null_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | M",
          "h2dtscpp_compat_combo_0044_unknown_null_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_unknown_null_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_UNKNOWN_NULL_XYZ325
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_UNKNOWN_NULL_XYZ325
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (unknown & null | XYZ325); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_unknown_null_xyz325', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C325', alias: '',
            variableList: [{ type: 'unknown & null | XYZ325', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_unknown_null_xyz325 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_unknown_null_xyz325 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_unknown_null_xyz325 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null | XYZ325",
          "h2dtscpp_compat_combo_0045_unknown_null_xyz325 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_unknown_null_xyz325 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_STRING_TAG_X_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_STRING_TAG_X_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { tag: "x" } | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_string_tag_x_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" } | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_string_tag_x_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_string_tag_x_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_string_tag_x_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | n",
          "h2dtscpp_compat_combo_0046_string_tag_x_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_string_tag_x_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_STRNG_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_STRNG_TAG_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (strng & { tag: "x" }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_strng_tag_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'strng & { tag: "x" }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_strng_tag_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_strng_tag_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_strng_tag_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strng & { tag: \"x\" }",
          "h2dtscpp_compat_combo_0047_strng_tag_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_strng_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_STRING_TAG_X_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_STRING_TAG_X_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { tag: "x" } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_string_tag_x_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_string_tag_x_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_string_tag_x_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_string_tag_x_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | b",
          "h2dtscpp_compat_combo_0048_string_tag_x_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_string_tag_x_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_STRING_TAG_X_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_STRING_TAG_X_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { tag: "x" } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_string_tag_x_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_string_tag_x_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_string_tag_x_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_string_tag_x_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | r",
          "h2dtscpp_compat_combo_0049_string_tag_x_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_string_tag_x_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_STRING_TAG_X_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_STRING_TAG_X_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type string & { tag: "x" }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_string_tag_x_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_string_tag_x_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_string_tag_x_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_string_tag_x_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" }x",
          "h2dtscpp_compat_combo_0050_string_tag_x_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_string_tag_x_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_TRING_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_TRING_TAG_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type tring & { tag: "x" }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_tring_tag_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'tring & { tag: "x" }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_tring_tag_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0051_tring_tag_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_tring_tag_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "tring & { tag: \"x\" }",
          "h2dtscpp_compat_combo_0051_tring_tag_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_tring_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_STRING_TAG_X_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_STRING_TAG_X_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { tag: "x" } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_string_tag_x_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_string_tag_x_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_string_tag_x_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_string_tag_x_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | std",
          "h2dtscpp_compat_combo_0052_string_tag_x_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_string_tag_x_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_STRING_TAG_X_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_STRING_TAG_X_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { tag: "x" } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_string_tag_x_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_string_tag_x_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_string_tag_x_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_string_tag_x_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | M",
          "h2dtscpp_compat_combo_0053_string_tag_x_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_string_tag_x_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_STRING_TAG_X_XYZ328
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_STRING_TAG_X_XYZ328
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (string & { tag: "x" } | XYZ328); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_string_tag_x_xyz328', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C328', alias: '',
            variableList: [{ type: 'string & { tag: "x" } | XYZ328', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_string_tag_x_xyz328 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_string_tag_x_xyz328 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_string_tag_x_xyz328 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" } | XYZ328",
          "h2dtscpp_compat_combo_0054_string_tag_x_xyz328 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_string_tag_x_xyz328 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_ID_NUMBR_NAME_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_ID_NUMBR_NAME_STRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ id: numbr; name: string }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_id_numbr_name_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C329', alias: '',
            variableList: [{ type: '{ id: numbr; name: string }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_id_numbr_name_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_id_numbr_name_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_id_numbr_name_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: numbr; name: string }",
          "h2dtscpp_compat_combo_0055_id_numbr_name_string field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_id_numbr_name_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_ID_NUMBER_NAME_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_ID_NUMBER_NAME_STRNG
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ({ id: number; name: strng }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_id_number_name_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C329', alias: '',
            variableList: [{ type: '{ id: number; name: strng }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_id_number_name_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_id_number_name_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_id_number_name_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number; name: strng }",
          "h2dtscpp_compat_combo_0056_id_number_name_strng field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_id_number_name_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_ID_NUMBER_NAME_STRING_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_ID_NUMBER_NAME_STRING_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ id: number; name: string } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_id_number_name_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C329', alias: '',
            variableList: [{ type: '{ id: number; name: string } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_id_number_name_string_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_id_number_name_string_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_id_number_name_string_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number; name: string } | b",
          "h2dtscpp_compat_combo_0057_id_number_name_string_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_id_number_name_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_ID_NUMBER_NAME_STRING_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_ID_NUMBER_NAME_STRING_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ id: number; name: string } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_id_number_name_string_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C329', alias: '',
            variableList: [{ type: '{ id: number; name: string } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_id_number_name_string_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_id_number_name_string_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_id_number_name_string_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number; name: string } | r",
          "h2dtscpp_compat_combo_0058_id_number_name_string_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_id_number_name_string_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (a: number; b: string; c: boolean }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_a_number_b_string_c_boolean', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C364', alias: '',
            variableList: [{ type: ' a: number; b: string; c: boolean }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_a_number_b_string_c_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_a_number_b_string_c_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_a_number_b_string_c_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " a: number; b: string; c: boolean }",
          "h2dtscpp_compat_combo_0011_a_number_b_string_c_boolean field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_A_NUMBER_B_STRING_C_BOOLEAN_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_A_NUMBER_B_STRING_C_BOOLEAN_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_a_number_b_string_c_boolean_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C364', alias: '',
            variableList: [{ type: '{ a: number; b: string; c: boolean } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_a_number_b_string_c_boolean_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_a_number_b_string_c_boolean_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_a_number_b_string_c_boolean_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: string; c: boolean } | std",
          "h2dtscpp_compat_combo_0012_a_number_b_string_c_boolean_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_a_number_b_string_c_boolean_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_A_NUMBER_B_STRING_C_BOOLEAN_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_A_NUMBER_B_STRING_C_BOOLEAN_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_a_number_b_string_c_boolean_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C364', alias: '',
            variableList: [{ type: '{ a: number; b: string; c: boolean } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_a_number_b_string_c_boolean_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_a_number_b_string_c_boolean_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_a_number_b_string_c_boolean_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: string; c: boolean } | M",
          "h2dtscpp_compat_combo_0013_a_number_b_string_c_boolean_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_a_number_b_string_c_boolean_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_A_NUMBER_B_STRING_C_BOOLE_FF8B91
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_A_NUMBER_B_STRING_C_BOOLE_FF8B91
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ({ a: number; b: string; c: boolean } | XYZ364); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_a_number_b_string_c_boole_ff8b91', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C364', alias: '',
            variableList: [{ type: '{ a: number; b: string; c: boolean } | XYZ364', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_a_number_b_string_c_boole_ff8b91 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_a_number_b_string_c_boole_ff8b91 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_a_number_b_string_c_boole_ff8b91 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: string; c: boolean } | XYZ364",
          "h2dtscpp_compat_combo_0014_a_number_b_string_c_boole_ff8b91 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_a_number_b_string_c_boole_ff8b91 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_A_B_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_A_B_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ a: { b: numbr } }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_a_b_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: numbr } }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_a_b_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_a_b_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_a_b_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: numbr } }",
          "h2dtscpp_compat_combo_0015_a_b_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_a_b_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_A_B_NUMBER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_A_B_NUMBER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: { b: number } } | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_a_b_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } } | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_a_b_number_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_a_b_number_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_a_b_number_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } } | s",
          "h2dtscpp_compat_combo_0016_a_b_number_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_a_b_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_A_B_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_A_B_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: { b: number } } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_a_b_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_a_b_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_a_b_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_a_b_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } } | b",
          "h2dtscpp_compat_combo_0017_a_b_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_a_b_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_A_B_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_A_B_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: { b: number } } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_a_b_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_a_b_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_a_b_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_a_b_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } } | r",
          "h2dtscpp_compat_combo_0018_a_b_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_a_b_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_A_B_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_A_B_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { a: { b: number } }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_a_b_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_a_b_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_a_b_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_a_b_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } }x",
          "h2dtscpp_compat_combo_0019_a_b_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_a_b_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_A_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_A_B_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type a: { b: number } }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_a_b_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: ' a: { b: number } }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_a_b_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_a_b_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_a_b_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " a: { b: number } }",
          "h2dtscpp_compat_combo_0020_a_b_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_A_B_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_A_B_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: { b: number } } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_a_b_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_a_b_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_a_b_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_a_b_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } } | std",
          "h2dtscpp_compat_combo_0021_a_b_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_a_b_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_A_B_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_A_B_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: { b: number } } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_a_b_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_a_b_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_a_b_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_a_b_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } } | M",
          "h2dtscpp_compat_combo_0022_a_b_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_a_b_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_A_B_NUMBER_XYZ365
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_A_B_NUMBER_XYZ365
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: { b: number } } | XYZ365); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_a_b_number_xyz365', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C365', alias: '',
            variableList: [{ type: '{ a: { b: number } } | XYZ365', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_a_b_number_xyz365 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_a_b_number_xyz365 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_a_b_number_xyz365 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } } | XYZ365",
          "h2dtscpp_compat_combo_0023_a_b_number_xyz365 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_a_b_number_xyz365 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0024_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | n",
          "h2dtscpp_compat_combo_0024_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_n execution error: ${err}`);
    }
  });
});
