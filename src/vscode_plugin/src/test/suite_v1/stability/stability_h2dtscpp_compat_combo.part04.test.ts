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

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_ERROR_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_ERROR_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_error_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_error_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_error_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_error_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_n",
          "h2dtscpp_compat_combo_0025_error_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_error_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_ERROR_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_ERROR_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_error_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_error_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_error_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_error_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_s",
          "h2dtscpp_compat_combo_0026_error_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_error_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_ERROR_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_ERROR_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_error_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_error_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_error_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_error_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_b",
          "h2dtscpp_compat_combo_0027_error_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_error_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_ERROR_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_ERROR_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_error_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_error_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_error_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_error_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_r",
          "h2dtscpp_compat_combo_0028_error_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_error_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_ERRORX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_ERRORX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Errorx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_errorx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Errorx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_errorx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_errorx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_errorx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Errorx",
          "h2dtscpp_compat_combo_0029_errorx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_errorx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_RROR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_RROR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type rror; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_rror', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'rror', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_rror convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_rror must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_rror must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "rror",
          "h2dtscpp_compat_combo_0030_rror field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_rror execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_ERROR_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_ERROR_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_error_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_error_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_error_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_error_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_std",
          "h2dtscpp_compat_combo_0031_error_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_error_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_ERROR_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_ERROR_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_error_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_error_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_error_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_error_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_M",
          "h2dtscpp_compat_combo_0032_error_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_error_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_ERROR_XYZ191
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_ERROR_XYZ191
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Error_XYZ191; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_error_xyz191', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C191', alias: '',
            variableList: [{ type: 'Error_XYZ191', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_error_xyz191 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_error_xyz191 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_error_xyz191 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Error_XYZ191",
          "h2dtscpp_compat_combo_0033_error_xyz191 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_error_xyz191 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_UINT8ARRAY_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_UINT8ARRAY_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_uint8array_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_uint8array_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_uint8array_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_uint8array_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_n",
          "h2dtscpp_compat_combo_0034_uint8array_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_uint8array_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_UINT8ARRAY_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_UINT8ARRAY_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_uint8array_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_uint8array_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_uint8array_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_uint8array_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_s",
          "h2dtscpp_compat_combo_0035_uint8array_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_uint8array_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_UINT8ARRAY_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_UINT8ARRAY_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_uint8array_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_uint8array_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_uint8array_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_uint8array_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_b",
          "h2dtscpp_compat_combo_0036_uint8array_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_uint8array_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_UINT8ARRAY_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_UINT8ARRAY_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_uint8array_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_uint8array_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_uint8array_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_uint8array_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_r",
          "h2dtscpp_compat_combo_0037_uint8array_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_uint8array_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_UINT8ARRAYX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_UINT8ARRAYX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Arrayx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_uint8arrayx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Arrayx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_uint8arrayx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_uint8arrayx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_uint8arrayx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Arrayx",
          "h2dtscpp_compat_combo_0038_uint8arrayx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_uint8arrayx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_INT8ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_INT8ARRAY
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type int8Array; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_int8array', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'int8Array', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_int8array convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_int8array must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_int8array must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "int8Array",
          "h2dtscpp_compat_combo_0039_int8array field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_int8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_UINT8ARRAY_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_UINT8ARRAY_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_uint8array_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_uint8array_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_uint8array_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_uint8array_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_std",
          "h2dtscpp_compat_combo_0040_uint8array_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_uint8array_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_UINT8ARRAY_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_UINT8ARRAY_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_uint8array_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_uint8array_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_uint8array_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_uint8array_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_M",
          "h2dtscpp_compat_combo_0041_uint8array_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_uint8array_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_UINT8ARRAY_XYZ192
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_UINT8ARRAY_XYZ192
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uint8Array_XYZ192; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_uint8array_xyz192', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C192', alias: '',
            variableList: [{ type: 'Uint8Array_XYZ192', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_uint8array_xyz192 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_uint8array_xyz192 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_uint8array_xyz192 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array_XYZ192",
          "h2dtscpp_compat_combo_0042_uint8array_xyz192 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_uint8array_xyz192 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_ARRAYBUFFER_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_ARRAYBUFFER_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_arraybuffer_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_arraybuffer_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_arraybuffer_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_arraybuffer_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_n",
          "h2dtscpp_compat_combo_0043_arraybuffer_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_arraybuffer_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_ARRAYBUFFER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_ARRAYBUFFER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_arraybuffer_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_arraybuffer_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_arraybuffer_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_arraybuffer_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_s",
          "h2dtscpp_compat_combo_0044_arraybuffer_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_arraybuffer_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_ARRAYBUFFER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_ARRAYBUFFER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_arraybuffer_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_arraybuffer_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_arraybuffer_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_arraybuffer_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_b",
          "h2dtscpp_compat_combo_0045_arraybuffer_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_arraybuffer_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_ARRAYBUFFER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_ARRAYBUFFER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_arraybuffer_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_arraybuffer_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_arraybuffer_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_arraybuffer_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_r",
          "h2dtscpp_compat_combo_0046_arraybuffer_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_arraybuffer_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_ARRAYBUFFERX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_ARRAYBUFFERX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBufferx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_arraybufferx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBufferx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_arraybufferx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_arraybufferx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_arraybufferx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBufferx",
          "h2dtscpp_compat_combo_0047_arraybufferx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_arraybufferx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_RRAYBUFFER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_RRAYBUFFER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type rrayBuffer; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_rraybuffer', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'rrayBuffer', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_rraybuffer convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_rraybuffer must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_rraybuffer must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "rrayBuffer",
          "h2dtscpp_compat_combo_0048_rraybuffer field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_rraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_ARRAYBUFFER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_ARRAYBUFFER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_arraybuffer_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_arraybuffer_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_arraybuffer_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_arraybuffer_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_std",
          "h2dtscpp_compat_combo_0049_arraybuffer_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_arraybuffer_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_ARRAYBUFFER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_ARRAYBUFFER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_arraybuffer_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_arraybuffer_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_arraybuffer_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_arraybuffer_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_M",
          "h2dtscpp_compat_combo_0050_arraybuffer_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_arraybuffer_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_ARRAYBUFFER_XYZ193
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_ARRAYBUFFER_XYZ193
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ArrayBuffer_XYZ193; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_arraybuffer_xyz193', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C193', alias: '',
            variableList: [{ type: 'ArrayBuffer_XYZ193', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_arraybuffer_xyz193 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0051_arraybuffer_xyz193 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_arraybuffer_xyz193 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer_XYZ193",
          "h2dtscpp_compat_combo_0051_arraybuffer_xyz193 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_arraybuffer_xyz193 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_WEAKMAP_OBJECT_STRINGN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_WEAKMAP_OBJECT_STRINGN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakMap<object, stringn>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_weakmap_object_stringn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'WeakMap<object, stringn>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_weakmap_object_stringn convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_weakmap_object_stringn must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_weakmap_object_stringn must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, stringn>",
          "h2dtscpp_compat_combo_0052_weakmap_object_stringn field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_weakmap_object_stringn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_WEAKMAP_OBJECT_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_WEAKMAP_OBJECT_STRNG
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (WeakMap<object, strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_weakmap_object_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'WeakMap<object, strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_weakmap_object_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_weakmap_object_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_weakmap_object_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, strng>",
          "h2dtscpp_compat_combo_0053_weakmap_object_strng field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_weakmap_object_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_WEAKMAP_OBJECT_STRINGB
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_WEAKMAP_OBJECT_STRINGB
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakMap<object, stringb>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_weakmap_object_stringb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'WeakMap<object, stringb>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_weakmap_object_stringb convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_weakmap_object_stringb must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_weakmap_object_stringb must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, stringb>",
          "h2dtscpp_compat_combo_0054_weakmap_object_stringb field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_weakmap_object_stringb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_WEAKMAP_OBJECT_STRINGR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_WEAKMAP_OBJECT_STRINGR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakMap<object, stringr>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_weakmap_object_stringr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'WeakMap<object, stringr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_weakmap_object_stringr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_weakmap_object_stringr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_weakmap_object_stringr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, stringr>",
          "h2dtscpp_compat_combo_0055_weakmap_object_stringr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_weakmap_object_stringr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_WEAKMAPOBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_WEAKMAPOBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakMapobject, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_weakmapobject_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'WeakMapobject, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_weakmapobject_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_weakmapobject_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_weakmapobject_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMapobject, string>",
          "h2dtscpp_compat_combo_0056_weakmapobject_string field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_weakmapobject_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_EAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_EAKMAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type eakMap<object, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_eakmap_object_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'eakMap<object, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_eakmap_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_eakmap_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_eakmap_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "eakMap<object, string>",
          "h2dtscpp_compat_combo_0057_eakmap_object_string field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_eakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_WEAKMAP_OBJECT_STRINGSTD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_WEAKMAP_OBJECT_STRINGSTD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type WeakMap<object, stringstd>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_weakmap_object_stringstd', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C194', alias: '',
            variableList: [{ type: 'WeakMap<object, stringstd>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_weakmap_object_stringstd convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_weakmap_object_stringstd must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_weakmap_object_stringstd must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, stringstd>",
          "h2dtscpp_compat_combo_0058_weakmap_object_stringstd field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_weakmap_object_stringstd execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_KEYOF_MAP_STRING_NUMBERXYZ197
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_KEYOF_MAP_STRING_NUMBERXYZ197
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type keyof Map<string, numberXYZ197>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_keyof_map_string_numberxyz197', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C197', alias: '',
            variableList: [{ type: 'keyof Map<string, numberXYZ197>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_keyof_map_string_numberxyz197 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_keyof_map_string_numberxyz197 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_keyof_map_string_numberxyz197 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Map<string, numberXYZ197>",
          "h2dtscpp_compat_combo_0011_keyof_map_string_numberxyz197 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_keyof_map_string_numberxyz197 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_TYPEOF_DATE_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_TYPEOF_DATE_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_typeof_date_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_typeof_date_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_typeof_date_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_typeof_date_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | n",
          "h2dtscpp_compat_combo_0012_typeof_date_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_typeof_date_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_TYPEOF_DATE_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_TYPEOF_DATE_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_typeof_date_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_typeof_date_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_typeof_date_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_typeof_date_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | s",
          "h2dtscpp_compat_combo_0013_typeof_date_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_typeof_date_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_TYPEOF_DATE_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_TYPEOF_DATE_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_typeof_date_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_typeof_date_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_typeof_date_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_typeof_date_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | b",
          "h2dtscpp_compat_combo_0014_typeof_date_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_typeof_date_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_TYPEOF_DATE_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_TYPEOF_DATE_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_typeof_date_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_typeof_date_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_typeof_date_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_typeof_date_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | r",
          "h2dtscpp_compat_combo_0015_typeof_date_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_typeof_date_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_TYPEOF_DATEX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_TYPEOF_DATEX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type typeof Datex; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_typeof_datex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Datex', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_typeof_datex convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_typeof_datex must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_typeof_datex must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Datex",
          "h2dtscpp_compat_combo_0016_typeof_datex field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_typeof_datex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_YPEOF_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_YPEOF_DATE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ypeof Date; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_ypeof_date', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'ypeof Date', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_ypeof_date convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_ypeof_date must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_ypeof_date must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ypeof Date",
          "h2dtscpp_compat_combo_0017_ypeof_date field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_ypeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_TYPEOF_DATE_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_TYPEOF_DATE_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_typeof_date_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_typeof_date_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_typeof_date_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_typeof_date_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | std",
          "h2dtscpp_compat_combo_0018_typeof_date_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_typeof_date_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_TYPEOF_DATE_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_TYPEOF_DATE_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_typeof_date_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_typeof_date_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_typeof_date_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_typeof_date_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | M",
          "h2dtscpp_compat_combo_0019_typeof_date_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_typeof_date_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_TYPEOF_DATE_XYZ198
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_TYPEOF_DATE_XYZ198
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (typeof Date | XYZ198); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_typeof_date_xyz198', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C198', alias: '',
            variableList: [{ type: 'typeof Date | XYZ198', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_typeof_date_xyz198 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_typeof_date_xyz198 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_typeof_date_xyz198 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date | XYZ198",
          "h2dtscpp_compat_combo_0020_typeof_date_xyz198 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_typeof_date_xyz198 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_A_STRING_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_A_STRING_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: string } | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_a_string_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string } | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_a_string_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_a_string_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_a_string_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | n",
          "h2dtscpp_compat_combo_0021_a_string_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_a_string_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_A_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_A_STRNG
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ({ a: strng }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_a_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: strng }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_a_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_a_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_a_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: strng }",
          "h2dtscpp_compat_combo_0022_a_strng field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_a_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_A_STRING_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_A_STRING_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: string } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_a_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_a_string_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_a_string_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_a_string_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | b",
          "h2dtscpp_compat_combo_0023_a_string_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_a_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_A_STRING_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_A_STRING_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: string } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_a_string_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_a_string_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_a_string_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_a_string_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | r",
          "h2dtscpp_compat_combo_0024_a_string_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_a_string_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_A_STRING_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_A_STRING_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { a: string }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_a_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_a_string_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_a_string_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_a_string_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string }x",
          "h2dtscpp_compat_combo_0025_a_string_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_a_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_A_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_A_STRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type a: string }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_a_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: ' a: string }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_a_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_a_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_a_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " a: string }",
          "h2dtscpp_compat_combo_0026_a_string field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_A_STRING_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_A_STRING_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: string } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_a_string_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_a_string_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_a_string_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_a_string_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | std",
          "h2dtscpp_compat_combo_0027_a_string_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_a_string_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_A_STRING_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_A_STRING_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: string } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_a_string_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_a_string_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_a_string_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_a_string_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | M",
          "h2dtscpp_compat_combo_0028_a_string_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_a_string_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_A_STRING_XYZ199
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_A_STRING_XYZ199
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: string } | XYZ199); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_a_string_xyz199', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C199', alias: '',
            variableList: [{ type: '{ a: string } | XYZ199', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_a_string_xyz199 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_a_string_xyz199 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_a_string_xyz199 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string } | XYZ199",
          "h2dtscpp_compat_combo_0029_a_string_xyz199 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_a_string_xyz199 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_READONLY_B_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_READONLY_B_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ readonly b: numbr }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_readonly_b_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: numbr }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_readonly_b_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_readonly_b_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_readonly_b_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: numbr }",
          "h2dtscpp_compat_combo_0030_readonly_b_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_readonly_b_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_READONLY_B_NUMBER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_READONLY_B_NUMBER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ readonly b: number } | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_readonly_b_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number } | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_readonly_b_number_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_readonly_b_number_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_readonly_b_number_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number } | s",
          "h2dtscpp_compat_combo_0031_readonly_b_number_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_readonly_b_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_READONLY_B_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_READONLY_B_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ readonly b: number } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_readonly_b_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C200', alias: '',
            variableList: [{ type: '{ readonly b: number } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_readonly_b_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_readonly_b_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_readonly_b_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number } | b",
          "h2dtscpp_compat_combo_0032_readonly_b_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_readonly_b_number_b execution error: ${err}`);
    }
  });
});
