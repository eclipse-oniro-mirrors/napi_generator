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

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_T_EXTENDS_NUMBER_IDLABEL_85D20E
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_T_EXTENDS_NUMBER_IDLABEL_85D20E
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (T extends number ? IdLabel : NameLabel | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_t_extends_number_idlabel_85d20e', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabel | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_t_extends_number_idlabel_85d20e convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_t_extends_number_idlabel_85d20e must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_t_extends_number_idlabel_85d20e must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel | std",
          "h2dtscpp_compat_combo_0017_t_extends_number_idlabel_85d20e field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_t_extends_number_idlabel_85d20e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_T_EXTENDS_NUMBER_IDLABEL_C7F9E1
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_T_EXTENDS_NUMBER_IDLABEL_C7F9E1
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (T extends number ? IdLabel : NameLabel | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_t_extends_number_idlabel_c7f9e1', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabel | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_t_extends_number_idlabel_c7f9e1 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_t_extends_number_idlabel_c7f9e1 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_t_extends_number_idlabel_c7f9e1 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel | M",
          "h2dtscpp_compat_combo_0018_t_extends_number_idlabel_c7f9e1 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_t_extends_number_idlabel_c7f9e1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_T_EXTENDS_NUMBER_IDLABEL_109B24
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_T_EXTENDS_NUMBER_IDLABEL_109B24
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (T extends number ? IdLabel : NameLabel | XYZ167); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_t_extends_number_idlabel_109b24', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'T extends number ? IdLabel : NameLabel | XYZ167', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_t_extends_number_idlabel_109b24 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_t_extends_number_idlabel_109b24 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_t_extends_number_idlabel_109b24 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel | XYZ167",
          "h2dtscpp_compat_combo_0019_t_extends_number_idlabel_109b24 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_t_extends_number_idlabel_109b24 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_WORLD_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_WORLD_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_n"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_world_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_n"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_world_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_world_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_world_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_n\"",
          "h2dtscpp_compat_combo_0020_world_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_world_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_WORLD_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_WORLD_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_s"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_world_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_s"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_world_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_world_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_world_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_s\"",
          "h2dtscpp_compat_combo_0021_world_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_world_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_WORLD_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_WORLD_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_b"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_world_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_b"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_world_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_world_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_world_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_b\"",
          "h2dtscpp_compat_combo_0022_world_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_world_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_WORLD_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_WORLD_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_r"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_world_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_r"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_world_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_world_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_world_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_r\"",
          "h2dtscpp_compat_combo_0023_world_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_world_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_WORLD_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_WORLD_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world"x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_world_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world"x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_world_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_world_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_world_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world\"x",
          "h2dtscpp_compat_combo_0024_world_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_world_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_WORLD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type world"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_world', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: 'world"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_world convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0025_world must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_world must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "world\"",
          "h2dtscpp_compat_combo_0025_world field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_WORLD_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_WORLD_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_std"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_world_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_std"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_world_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0026_world_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_world_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_std\"",
          "h2dtscpp_compat_combo_0026_world_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_world_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_WORLD_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_WORLD_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_M"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_world_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_M"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_world_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0027_world_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_world_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_M\"",
          "h2dtscpp_compat_combo_0027_world_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_world_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_WORLD_XYZ169
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_WORLD_XYZ169
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type "world_XYZ169"; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_world_xyz169', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '"world_XYZ169"', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_world_xyz169 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0028_world_xyz169 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_world_xyz169 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "\"world_XYZ169\"",
          "h2dtscpp_compat_combo_0028_world_xyz169 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_world_xyz169 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_UPPERCASE_GREETINGN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_UPPERCASE_GREETINGN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<Greetingn>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_uppercase_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<Greetingn>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_uppercase_greetingn convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_uppercase_greetingn must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_uppercase_greetingn must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greetingn>",
          "h2dtscpp_compat_combo_0029_uppercase_greetingn field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_uppercase_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_UPPERCASE_GREETINGS
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_UPPERCASE_GREETINGS
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<Greetings>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_uppercase_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<Greetings>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_uppercase_greetings convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0030_uppercase_greetings must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_uppercase_greetings must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greetings>",
          "h2dtscpp_compat_combo_0030_uppercase_greetings field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_uppercase_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_UPPERCASE_GREETINGB
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_UPPERCASE_GREETINGB
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<Greetingb>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_uppercase_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<Greetingb>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_uppercase_greetingb convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0031_uppercase_greetingb must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_uppercase_greetingb must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greetingb>",
          "h2dtscpp_compat_combo_0031_uppercase_greetingb field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_uppercase_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_UPPERCASE_GREETINGR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_UPPERCASE_GREETINGR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<Greetingr>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_uppercase_greetingr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<Greetingr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_uppercase_greetingr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_uppercase_greetingr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_uppercase_greetingr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greetingr>",
          "h2dtscpp_compat_combo_0032_uppercase_greetingr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_uppercase_greetingr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_UPPERCASEGREETING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_UPPERCASEGREETING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type UppercaseGreeting>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_uppercasegreeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'UppercaseGreeting>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_uppercasegreeting convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_uppercasegreeting must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_uppercasegreeting must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "UppercaseGreeting>",
          "h2dtscpp_compat_combo_0033_uppercasegreeting field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_uppercasegreeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_PPERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_PPERCASE_GREETING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ppercase<Greeting>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_ppercase_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'ppercase<Greeting>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_ppercase_greeting convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_ppercase_greeting must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_ppercase_greeting must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ppercase<Greeting>",
          "h2dtscpp_compat_combo_0034_ppercase_greeting field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_ppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_UPPERCASE_GREETINGSTD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_UPPERCASE_GREETINGSTD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<Greetingstd>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_uppercase_greetingstd', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<Greetingstd>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_uppercase_greetingstd convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_uppercase_greetingstd must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_uppercase_greetingstd must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greetingstd>",
          "h2dtscpp_compat_combo_0035_uppercase_greetingstd field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_uppercase_greetingstd execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_UPPERCASE_GREETINGM
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_UPPERCASE_GREETINGM
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<GreetingM>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_uppercase_greetingm', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<GreetingM>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_uppercase_greetingm convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_uppercase_greetingm must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_uppercase_greetingm must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<GreetingM>",
          "h2dtscpp_compat_combo_0036_uppercase_greetingm field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_uppercase_greetingm execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_UPPERCASE_GREETINGXYZ173
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_UPPERCASE_GREETINGXYZ173
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uppercase<GreetingXYZ173>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_uppercase_greetingxyz173', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C173', alias: '',
            variableList: [{ type: 'Uppercase<GreetingXYZ173>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_uppercase_greetingxyz173 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_uppercase_greetingxyz173 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_uppercase_greetingxyz173 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<GreetingXYZ173>",
          "h2dtscpp_compat_combo_0037_uppercase_greetingxyz173 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_uppercase_greetingxyz173 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_LOWERCASE_GREETINGN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_LOWERCASE_GREETINGN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<Greetingn>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_lowercase_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<Greetingn>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_lowercase_greetingn convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_lowercase_greetingn must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_lowercase_greetingn must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greetingn>",
          "h2dtscpp_compat_combo_0038_lowercase_greetingn field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_lowercase_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_LOWERCASE_GREETINGS
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_LOWERCASE_GREETINGS
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<Greetings>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_lowercase_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<Greetings>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_lowercase_greetings convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_lowercase_greetings must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_lowercase_greetings must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greetings>",
          "h2dtscpp_compat_combo_0039_lowercase_greetings field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_lowercase_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_LOWERCASE_GREETINGB
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_LOWERCASE_GREETINGB
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<Greetingb>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_lowercase_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<Greetingb>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_lowercase_greetingb convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_lowercase_greetingb must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_lowercase_greetingb must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greetingb>",
          "h2dtscpp_compat_combo_0040_lowercase_greetingb field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_lowercase_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_LOWERCASE_GREETINGR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_LOWERCASE_GREETINGR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<Greetingr>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_lowercase_greetingr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<Greetingr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_lowercase_greetingr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_lowercase_greetingr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_lowercase_greetingr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greetingr>",
          "h2dtscpp_compat_combo_0041_lowercase_greetingr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_lowercase_greetingr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_LOWERCASEGREETING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_LOWERCASEGREETING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type LowercaseGreeting>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_lowercasegreeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'LowercaseGreeting>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_lowercasegreeting convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_lowercasegreeting must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_lowercasegreeting must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "LowercaseGreeting>",
          "h2dtscpp_compat_combo_0042_lowercasegreeting field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_lowercasegreeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_OWERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_OWERCASE_GREETING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type owercase<Greeting>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_owercase_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'owercase<Greeting>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_owercase_greeting convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_owercase_greeting must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_owercase_greeting must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "owercase<Greeting>",
          "h2dtscpp_compat_combo_0043_owercase_greeting field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_owercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_LOWERCASE_GREETINGSTD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_LOWERCASE_GREETINGSTD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<Greetingstd>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_lowercase_greetingstd', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<Greetingstd>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_lowercase_greetingstd convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_lowercase_greetingstd must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_lowercase_greetingstd must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greetingstd>",
          "h2dtscpp_compat_combo_0044_lowercase_greetingstd field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_lowercase_greetingstd execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_LOWERCASE_GREETINGM
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_LOWERCASE_GREETINGM
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<GreetingM>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_lowercase_greetingm', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<GreetingM>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_lowercase_greetingm convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_lowercase_greetingm must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_lowercase_greetingm must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<GreetingM>",
          "h2dtscpp_compat_combo_0045_lowercase_greetingm field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_lowercase_greetingm execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_LOWERCASE_GREETINGXYZ174
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_LOWERCASE_GREETINGXYZ174
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Lowercase<GreetingXYZ174>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_lowercase_greetingxyz174', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C174', alias: '',
            variableList: [{ type: 'Lowercase<GreetingXYZ174>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_lowercase_greetingxyz174 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_lowercase_greetingxyz174 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_lowercase_greetingxyz174 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<GreetingXYZ174>",
          "h2dtscpp_compat_combo_0046_lowercase_greetingxyz174 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_lowercase_greetingxyz174 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_CAPITALIZE_GREETINGN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_CAPITALIZE_GREETINGN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<Greetingn>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_capitalize_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<Greetingn>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_capitalize_greetingn convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_capitalize_greetingn must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_capitalize_greetingn must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greetingn>",
          "h2dtscpp_compat_combo_0047_capitalize_greetingn field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_capitalize_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_CAPITALIZE_GREETINGS
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_CAPITALIZE_GREETINGS
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<Greetings>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_capitalize_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<Greetings>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_capitalize_greetings convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_capitalize_greetings must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_capitalize_greetings must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greetings>",
          "h2dtscpp_compat_combo_0048_capitalize_greetings field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_capitalize_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_CAPITALIZE_GREETINGB
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_CAPITALIZE_GREETINGB
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<Greetingb>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_capitalize_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<Greetingb>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_capitalize_greetingb convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_capitalize_greetingb must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_capitalize_greetingb must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greetingb>",
          "h2dtscpp_compat_combo_0049_capitalize_greetingb field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_capitalize_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_CAPITALIZE_GREETINGR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_CAPITALIZE_GREETINGR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<Greetingr>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_capitalize_greetingr', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<Greetingr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_capitalize_greetingr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_capitalize_greetingr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_capitalize_greetingr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greetingr>",
          "h2dtscpp_compat_combo_0050_capitalize_greetingr field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_capitalize_greetingr execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_CAPITALIZEGREETING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0051_CAPITALIZEGREETING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type CapitalizeGreeting>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0051_capitalizegreeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'CapitalizeGreeting>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0051_capitalizegreeting convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0051_capitalizegreeting must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0051_capitalizegreeting must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "CapitalizeGreeting>",
          "h2dtscpp_compat_combo_0051_capitalizegreeting field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0051_capitalizegreeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_APITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0052_APITALIZE_GREETING
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type apitalize<Greeting>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0052_apitalize_greeting', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'apitalize<Greeting>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0052_apitalize_greeting convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0052_apitalize_greeting must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0052_apitalize_greeting must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "apitalize<Greeting>",
          "h2dtscpp_compat_combo_0052_apitalize_greeting field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0052_apitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_CAPITALIZE_GREETINGSTD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0053_CAPITALIZE_GREETINGSTD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<Greetingstd>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0053_capitalize_greetingstd', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<Greetingstd>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0053_capitalize_greetingstd convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0053_capitalize_greetingstd must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0053_capitalize_greetingstd must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greetingstd>",
          "h2dtscpp_compat_combo_0053_capitalize_greetingstd field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0053_capitalize_greetingstd execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_CAPITALIZE_GREETINGM
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0054_CAPITALIZE_GREETINGM
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<GreetingM>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0054_capitalize_greetingm', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<GreetingM>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0054_capitalize_greetingm convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0054_capitalize_greetingm must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0054_capitalize_greetingm must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<GreetingM>",
          "h2dtscpp_compat_combo_0054_capitalize_greetingm field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0054_capitalize_greetingm execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_CAPITALIZE_GREETINGXYZ175
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0055_CAPITALIZE_GREETINGXYZ175
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Capitalize<GreetingXYZ175>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0055_capitalize_greetingxyz175', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C175', alias: '',
            variableList: [{ type: 'Capitalize<GreetingXYZ175>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0055_capitalize_greetingxyz175 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0055_capitalize_greetingxyz175 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0055_capitalize_greetingxyz175 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<GreetingXYZ175>",
          "h2dtscpp_compat_combo_0055_capitalize_greetingxyz175 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0055_capitalize_greetingxyz175 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_UNCAPITALIZE_GREETINGN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0056_UNCAPITALIZE_GREETINGN
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uncapitalize<Greetingn>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0056_uncapitalize_greetingn', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C176', alias: '',
            variableList: [{ type: 'Uncapitalize<Greetingn>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0056_uncapitalize_greetingn convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0056_uncapitalize_greetingn must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0056_uncapitalize_greetingn must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uncapitalize<Greetingn>",
          "h2dtscpp_compat_combo_0056_uncapitalize_greetingn field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0056_uncapitalize_greetingn execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_UNCAPITALIZE_GREETINGS
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0057_UNCAPITALIZE_GREETINGS
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uncapitalize<Greetings>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0057_uncapitalize_greetings', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C176', alias: '',
            variableList: [{ type: 'Uncapitalize<Greetings>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0057_uncapitalize_greetings convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0057_uncapitalize_greetings must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0057_uncapitalize_greetings must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uncapitalize<Greetings>",
          "h2dtscpp_compat_combo_0057_uncapitalize_greetings field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0057_uncapitalize_greetings execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_UNCAPITALIZE_GREETINGB
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0058_UNCAPITALIZE_GREETINGB
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Uncapitalize<Greetingb>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0058_uncapitalize_greetingb', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C176', alias: '',
            variableList: [{ type: 'Uncapitalize<Greetingb>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0058_uncapitalize_greetingb convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0058_uncapitalize_greetingb must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0058_uncapitalize_greetingb must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Uncapitalize<Greetingb>",
          "h2dtscpp_compat_combo_0058_uncapitalize_greetingb field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0058_uncapitalize_greetingb execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_DATEX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0011_DATEX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Datex; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0011_datex', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: 'Datex', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0011_datex convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0011_datex must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0011_datex must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Datex",
          "h2dtscpp_compat_combo_0011_datex field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0011_datex execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_ATE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0012_ATE
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ate; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0012_ate', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: 'ate', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0012_ate convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0012_ate must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0012_ate must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ate",
          "h2dtscpp_compat_combo_0012_ate field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0012_ate execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_DATE_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0013_DATE_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Date_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0013_date_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: 'Date_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0013_date_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0013_date_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0013_date_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Date_std",
          "h2dtscpp_compat_combo_0013_date_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0013_date_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_DATE_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0014_DATE_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Date_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0014_date_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: 'Date_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0014_date_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0014_date_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0014_date_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Date_M",
          "h2dtscpp_compat_combo_0014_date_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0014_date_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_DATE_XYZ189
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0015_DATE_XYZ189
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Date_XYZ189; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0015_date_xyz189', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: 'Date_XYZ189', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0015_date_xyz189 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0015_date_xyz189 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0015_date_xyz189 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Date_XYZ189",
          "h2dtscpp_compat_combo_0015_date_xyz189 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0015_date_xyz189 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_REGEXP_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0016_REGEXP_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0016_regexp_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0016_regexp_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0016_regexp_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0016_regexp_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_n",
          "h2dtscpp_compat_combo_0016_regexp_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0016_regexp_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_REGEXP_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0017_REGEXP_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0017_regexp_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0017_regexp_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0017_regexp_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0017_regexp_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_s",
          "h2dtscpp_compat_combo_0017_regexp_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0017_regexp_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_REGEXP_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0018_REGEXP_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0018_regexp_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0018_regexp_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0018_regexp_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0018_regexp_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_b",
          "h2dtscpp_compat_combo_0018_regexp_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0018_regexp_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_REGEXP_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0019_REGEXP_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0019_regexp_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0019_regexp_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0019_regexp_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0019_regexp_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_r",
          "h2dtscpp_compat_combo_0019_regexp_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0019_regexp_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_REGEXPX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0020_REGEXPX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExpx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0020_regexpx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExpx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0020_regexpx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0020_regexpx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0020_regexpx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExpx",
          "h2dtscpp_compat_combo_0020_regexpx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0020_regexpx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_EGEXP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0021_EGEXP
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type egExp; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0021_egexp', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'egExp', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0021_egexp convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0021_egexp must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0021_egexp must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "egExp",
          "h2dtscpp_compat_combo_0021_egexp field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0021_egexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_REGEXP_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0022_REGEXP_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0022_regexp_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0022_regexp_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0022_regexp_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0022_regexp_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_std",
          "h2dtscpp_compat_combo_0022_regexp_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0022_regexp_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_REGEXP_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0023_REGEXP_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0023_regexp_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0023_regexp_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0023_regexp_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0023_regexp_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_M",
          "h2dtscpp_compat_combo_0023_regexp_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0023_regexp_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_REGEXP_XYZ190
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0024_REGEXP_XYZ190
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type RegExp_XYZ190; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0024_regexp_xyz190', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'RegExp_XYZ190', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0024_regexp_xyz190 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0024_regexp_xyz190 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0024_regexp_xyz190 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp_XYZ190",
          "h2dtscpp_compat_combo_0024_regexp_xyz190 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0024_regexp_xyz190 execution error: ${err}`);
    }
  });
});
