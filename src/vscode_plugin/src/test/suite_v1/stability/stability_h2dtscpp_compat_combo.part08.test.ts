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

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_USER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_USER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type User_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_user_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C304', alias: '',
            variableList: [{ type: 'User_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_user_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_user_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_user_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "User_r",
          "h2dtscpp_compat_combo_0057_user_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_user_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_USERX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_USERX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Userx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_userx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C304', alias: '',
            variableList: [{ type: 'Userx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_userx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_userx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_userx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Userx",
          "h2dtscpp_compat_combo_0058_userx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_userx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_MAP_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_MAP_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Map_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_map_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C305', alias: '',
            variableList: [{ type: 'Map_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_map_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_map_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_map_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map_std",
          "h2dtscpp_compat_combo_0011_map_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_map_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_MAPP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_MAPP
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_mapp', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C305', alias: '',
            variableList: [{ type: 'Mapp', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_mapp convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_mapp must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_mapp must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp",
          "h2dtscpp_compat_combo_0012_mapp field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_mapp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_MAP_XYZ305
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_MAP_XYZ305
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Map_XYZ305; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_map_xyz305', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C305', alias: '',
            variableList: [{ type: 'Map_XYZ305', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_map_xyz305 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_map_xyz305 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_map_xyz305 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map_XYZ305",
          "h2dtscpp_compat_combo_0013_map_xyz305 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_map_xyz305 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_ARRAY_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_ARRAY_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_array_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_array_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_array_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_array_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_n",
          "h2dtscpp_compat_combo_0014_array_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_array_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_ARRAY_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_ARRAY_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_array_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_array_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_array_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_array_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_s",
          "h2dtscpp_compat_combo_0015_array_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_array_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_ARRAY_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_ARRAY_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_array_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_array_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_array_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_array_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_b",
          "h2dtscpp_compat_combo_0016_array_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_array_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_ARRAY_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_ARRAY_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_array_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_array_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_array_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_array_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_r",
          "h2dtscpp_compat_combo_0017_array_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_array_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_ARRAYX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_ARRAYX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Arrayx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_arrayx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Arrayx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_arrayx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_arrayx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_arrayx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Arrayx",
          "h2dtscpp_compat_combo_0018_arrayx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_arrayx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_RRAY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_RRAY
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type rray; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_rray', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'rray', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_rray convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_rray must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_rray must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "rray",
          "h2dtscpp_compat_combo_0019_rray field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_rray execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_ARRAY_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_ARRAY_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_array_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_array_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_array_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_array_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_std",
          "h2dtscpp_compat_combo_0020_array_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_array_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_ARRAY_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_ARRAY_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_array_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_array_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_array_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_array_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_M",
          "h2dtscpp_compat_combo_0021_array_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_array_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_ARRAY_XYZ306
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_ARRAY_XYZ306
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Array_XYZ306; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_array_xyz306', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'Array_XYZ306', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_array_xyz306 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_array_xyz306 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_array_xyz306 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array_XYZ306",
          "h2dtscpp_compat_combo_0022_array_xyz306 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_array_xyz306 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_BAR_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_BAR_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_bar_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_bar_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_bar_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_bar_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_n",
          "h2dtscpp_compat_combo_0023_bar_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_bar_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_BAR_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_BAR_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_bar_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_bar_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_bar_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_bar_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_s",
          "h2dtscpp_compat_combo_0024_bar_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_bar_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_BAR_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_BAR_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_bar_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_bar_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_bar_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_bar_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_b",
          "h2dtscpp_compat_combo_0025_bar_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_bar_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_BAR_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_BAR_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_bar_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_bar_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_bar_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_bar_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_r",
          "h2dtscpp_compat_combo_0026_bar_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_bar_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_BARX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_BARX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Barx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_barx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Barx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_barx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_barx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_barx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Barx",
          "h2dtscpp_compat_combo_0027_barx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_barx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_AR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_AR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ar; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_ar', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'ar', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_ar convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0028_ar must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_ar must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ar", "h2dtscpp_compat_combo_0028_ar field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_ar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_BAR_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_BAR_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_bar_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_bar_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_bar_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_bar_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_std",
          "h2dtscpp_compat_combo_0029_bar_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_bar_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_BAR_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_BAR_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_bar_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_bar_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_bar_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_bar_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_M",
          "h2dtscpp_compat_combo_0030_bar_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_bar_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_BAR_XYZ309
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_BAR_XYZ309
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Bar_XYZ309; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_bar_xyz309', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C309', alias: '',
            variableList: [{ type: 'Bar_XYZ309', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_bar_xyz309 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_bar_xyz309 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_bar_xyz309 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Bar_XYZ309",
          "h2dtscpp_compat_combo_0031_bar_xyz309 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_bar_xyz309 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_X_NUMBR_Y_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_X_NUMBR_Y_NUMBR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ x: numbr; y: numbr }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_x_numbr_y_numbr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: numbr; y: numbr }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_x_numbr_y_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_x_numbr_y_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_x_numbr_y_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: numbr; y: numbr }",
          "h2dtscpp_compat_combo_0032_x_numbr_y_numbr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_x_numbr_y_numbr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_X_NUMBER_Y_NUMBER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_X_NUMBER_Y_NUMBER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y: number } | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_x_number_y_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number } | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_x_number_y_number_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_x_number_y_number_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_x_number_y_number_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | s",
          "h2dtscpp_compat_combo_0033_x_number_y_number_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_x_number_y_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_X_NUMBER_Y_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_X_NUMBER_Y_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y: number } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_x_number_y_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_x_number_y_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_x_number_y_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_x_number_y_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | b",
          "h2dtscpp_compat_combo_0034_x_number_y_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_x_number_y_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_X_NUMBER_Y_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_X_NUMBER_Y_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y: number } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_x_number_y_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_x_number_y_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_x_number_y_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_x_number_y_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | r",
          "h2dtscpp_compat_combo_0035_x_number_y_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_x_number_y_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_X_NUMBER_Y_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_X_NUMBER_Y_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { x: number; y: number }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_x_number_y_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_x_number_y_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_x_number_y_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_x_number_y_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number }x",
          "h2dtscpp_compat_combo_0036_x_number_y_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_x_number_y_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type x: number; y: number }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_x_number_y_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: ' x: number; y: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_x_number_y_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_x_number_y_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_x_number_y_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " x: number; y: number }",
          "h2dtscpp_compat_combo_0037_x_number_y_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_X_NUMBER_Y_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_X_NUMBER_Y_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y: number } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_x_number_y_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_x_number_y_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_x_number_y_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_x_number_y_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | std",
          "h2dtscpp_compat_combo_0038_x_number_y_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_x_number_y_number_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_X_NUMBER_Y_NUMBER_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_X_NUMBER_Y_NUMBER_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y: number } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_x_number_y_number_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_x_number_y_number_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_x_number_y_number_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_x_number_y_number_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | M",
          "h2dtscpp_compat_combo_0039_x_number_y_number_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_x_number_y_number_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_X_NUMBER_Y_NUMBER_XYZ315
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_X_NUMBER_Y_NUMBER_XYZ315
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y: number } | XYZ315); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_x_number_y_number_xyz315', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C315', alias: '',
            variableList: [{ type: '{ x: number; y: number } | XYZ315', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_x_number_y_number_xyz315 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_x_number_y_number_xyz315 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_x_number_y_number_xyz315 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number } | XYZ315",
          "h2dtscpp_compat_combo_0040_x_number_y_number_xyz315 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_x_number_y_number_xyz315 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_X_NUMBR_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_X_NUMBR_Y_STRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ({ x: numbr; y?: string }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_x_numbr_y_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: numbr; y?: string }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_x_numbr_y_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_x_numbr_y_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_x_numbr_y_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: numbr; y?: string }",
          "h2dtscpp_compat_combo_0041_x_numbr_y_string field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_x_numbr_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_X_NUMBER_Y_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_X_NUMBER_Y_STRNG
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ({ x: number; y?: strng }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_x_number_y_strng', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: strng }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_x_number_y_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_x_number_y_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_x_number_y_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: strng }",
          "h2dtscpp_compat_combo_0042_x_number_y_strng field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_x_number_y_strng execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_X_NUMBER_Y_STRING_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_X_NUMBER_Y_STRING_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y?: string } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_x_number_y_string_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: string } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_x_number_y_string_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_x_number_y_string_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_x_number_y_string_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string } | b",
          "h2dtscpp_compat_combo_0043_x_number_y_string_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_x_number_y_string_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_X_NUMBER_Y_STRING_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_X_NUMBER_Y_STRING_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y?: string } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_x_number_y_string_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: string } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_x_number_y_string_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_x_number_y_string_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_x_number_y_string_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string } | r",
          "h2dtscpp_compat_combo_0044_x_number_y_string_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_x_number_y_string_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_X_NUMBER_Y_STRING_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_X_NUMBER_Y_STRING_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal);
   *            conditional/infer typo ({ x: number; y?: string }x); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_x_number_y_string_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: string }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_x_number_y_string_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_x_number_y_string_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_x_number_y_string_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string }x",
          "h2dtscpp_compat_combo_0045_x_number_y_string_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_x_number_y_string_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_X_NUMBER_Y_STRING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal);
   *            conditional/infer typo (x: number; y?: string }); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_x_number_y_string', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: ' x: number; y?: string }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_x_number_y_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_x_number_y_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_x_number_y_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " x: number; y?: string }",
          "h2dtscpp_compat_combo_0046_x_number_y_string field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_X_NUMBER_Y_STRING_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_X_NUMBER_Y_STRING_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y?: string } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_x_number_y_string_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: string } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_x_number_y_string_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_x_number_y_string_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_x_number_y_string_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string } | std",
          "h2dtscpp_compat_combo_0047_x_number_y_string_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_x_number_y_string_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_X_NUMBER_Y_STRING_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_X_NUMBER_Y_STRING_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y?: string } | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_x_number_y_string_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: string } | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_x_number_y_string_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_x_number_y_string_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_x_number_y_string_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string } | M",
          "h2dtscpp_compat_combo_0048_x_number_y_string_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_x_number_y_string_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_X_NUMBER_Y_STRING_XYZ316
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_X_NUMBER_Y_STRING_XYZ316
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ x: number; y?: string } | XYZ316); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_x_number_y_string_xyz316', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C316', alias: '',
            variableList: [{ type: '{ x: number; y?: string } | XYZ316', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_x_number_y_string_xyz316 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_x_number_y_string_xyz316 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_x_number_y_string_xyz316 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string } | XYZ316",
          "h2dtscpp_compat_combo_0049_x_number_y_string_xyz316 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_x_number_y_string_xyz316 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_INPUT_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_INPUT_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_input_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_input_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_input_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_input_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_n",
          "h2dtscpp_compat_combo_0050_input_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_input_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_INPUT_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_INPUT_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_input_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_input_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0051_input_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_input_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_s",
          "h2dtscpp_compat_combo_0051_input_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_input_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_INPUT_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_INPUT_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_input_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_input_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_input_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_input_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_b",
          "h2dtscpp_compat_combo_0052_input_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_input_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_INPUT_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_INPUT_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_input_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_input_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_input_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_input_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_r",
          "h2dtscpp_compat_combo_0053_input_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_input_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_INPUTX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_INPUTX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Inputx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_inputx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Inputx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_inputx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_inputx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_inputx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Inputx",
          "h2dtscpp_compat_combo_0054_inputx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_inputx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_NPUT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_NPUT
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type nput; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_nput', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'nput', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_nput convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_nput must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_nput must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "nput",
          "h2dtscpp_compat_combo_0055_nput field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_nput execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_INPUT_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_INPUT_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_input_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_input_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_input_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_input_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_std",
          "h2dtscpp_compat_combo_0056_input_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_input_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_INPUT_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_INPUT_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_input_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_input_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_input_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_input_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_M",
          "h2dtscpp_compat_combo_0057_input_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_input_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_INPUT_XYZ319
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_INPUT_XYZ319
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Input_XYZ319; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_input_xyz319', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C319', alias: '',
            variableList: [{ type: 'Input_XYZ319', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_input_xyz319 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_input_xyz319 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_input_xyz319 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Input_XYZ319",
          "h2dtscpp_compat_combo_0058_input_xyz319 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_input_xyz319 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_A_NUMBER_B_NUMBER_C_NUMBER_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_A_NUMBER_B_NUMBER_C_NUMBER_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number; c: number } | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_a_number_b_number_c_number_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number } | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_a_number_b_number_c_number_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_a_number_b_number_c_number_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_a_number_b_number_c_number_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number } | s",
          "h2dtscpp_compat_combo_0011_a_number_b_number_c_number_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_a_number_b_number_c_number_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_A_NUMBER_B_NUMBER_C_NUMBER_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_A_NUMBER_B_NUMBER_C_NUMBER_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number; c: number } | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_a_number_b_number_c_number_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number } | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_a_number_b_number_c_number_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0012_a_number_b_number_c_number_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_a_number_b_number_c_number_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number } | b",
          "h2dtscpp_compat_combo_0012_a_number_b_number_c_number_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_a_number_b_number_c_number_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_A_NUMBER_B_NUMBER_C_NUMBER_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_A_NUMBER_B_NUMBER_C_NUMBER_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number; c: number } | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_a_number_b_number_c_number_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number } | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_a_number_b_number_c_number_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_a_number_b_number_c_number_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_a_number_b_number_c_number_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number } | r",
          "h2dtscpp_compat_combo_0013_a_number_b_number_c_number_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_a_number_b_number_c_number_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_A_NUMBER_B_NUMBER_C_NUMBER_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_A_NUMBER_B_NUMBER_C_NUMBER_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type { a: number; b: number; c: number }x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_a_number_b_number_c_number_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number }x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_a_number_b_number_c_number_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_a_number_b_number_c_number_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_a_number_b_number_c_number_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number }x",
          "h2dtscpp_compat_combo_0014_a_number_b_number_c_number_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_a_number_b_number_c_number_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type a: number; b: number; c: number }; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_a_number_b_number_c_number', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: ' a: number; b: number; c: number }', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_a_number_b_number_c_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_a_number_b_number_c_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_a_number_b_number_c_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, " a: number; b: number; c: number }",
          "h2dtscpp_compat_combo_0015_a_number_b_number_c_number field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_A_NUMBER_B_NUMBER_C_NUMBER_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_A_NUMBER_B_NUMBER_C_NUMBER_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended ({ a: number; b: number; c: number } | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_a_number_b_number_c_number_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C321', alias: '',
            variableList: [{ type: '{ a: number; b: number; c: number } | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_a_number_b_number_c_number_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_a_number_b_number_c_number_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_a_number_b_number_c_number_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number } | std",
          "h2dtscpp_compat_combo_0016_a_number_b_number_c_number_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_a_number_b_number_c_number_std execution error: ${err}`);
    }
  });
});
