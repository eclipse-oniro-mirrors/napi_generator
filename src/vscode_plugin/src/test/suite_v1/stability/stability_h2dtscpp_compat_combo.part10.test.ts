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

suite('Stability_H2DTSCPP_COMPAT_COMBO_Part10', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0025_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0025_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0025_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0025_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0025_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | s",
          "h2dtscpp_compat_combo_0025_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0025_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0026_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0026_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0026_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0026_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0026_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | b",
          "h2dtscpp_compat_combo_0026_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0026_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0027_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0027_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0027_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0027_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0027_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | r",
          "h2dtscpp_compat_combo_0027_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0027_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_X
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0028_X
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type 中文类型x; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0028_x', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型x', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0028_x convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0028_x must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0028_x must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型x",
          "h2dtscpp_compat_combo_0028_x field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0028_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_VARIANT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0029_VARIANT
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type 文类型; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0029_variant', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '文类型', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0029_variant convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0029_variant must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0029_variant must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "文类型",
          "h2dtscpp_compat_combo_0029_variant field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0029_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0030_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0030_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0030_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0030_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0030_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | std",
          "h2dtscpp_compat_combo_0030_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0030_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0031_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0031_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0031_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_combo_0031_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0031_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | M",
          "h2dtscpp_compat_combo_0031_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0031_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_XYZ367
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0032_XYZ367
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (中文类型 | XYZ367); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0032_xyz367', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C367', alias: '',
            variableList: [{ type: '中文类型 | XYZ367', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0032_xyz367 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0032_xyz367 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0032_xyz367 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型 | XYZ367",
          "h2dtscpp_compat_combo_0032_xyz367 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0032_xyz367 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_ELEMENT_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0033_ELEMENT_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_n; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0033_element_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0033_element_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0033_element_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0033_element_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_n",
          "h2dtscpp_compat_combo_0033_element_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0033_element_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_ELEMENT_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0034_ELEMENT_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_s; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0034_element_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0034_element_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0034_element_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0034_element_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_s",
          "h2dtscpp_compat_combo_0034_element_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0034_element_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_ELEMENT_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0035_ELEMENT_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_b; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0035_element_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0035_element_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0035_element_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0035_element_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_b",
          "h2dtscpp_compat_combo_0035_element_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0035_element_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_ELEMENT_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0036_ELEMENT_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_r; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0036_element_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0036_element_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0036_element_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0036_element_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_r",
          "h2dtscpp_compat_combo_0036_element_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0036_element_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_ELEMENTX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0037_ELEMENTX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Elementx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0037_elementx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Elementx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0037_elementx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0037_elementx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0037_elementx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Elementx",
          "h2dtscpp_compat_combo_0037_elementx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0037_elementx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_LEMENT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0038_LEMENT
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type lement; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0038_lement', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'lement', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0038_lement convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0038_lement must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0038_lement must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "lement",
          "h2dtscpp_compat_combo_0038_lement field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0038_lement execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_ELEMENT_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0039_ELEMENT_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_std; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0039_element_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0039_element_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0039_element_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0039_element_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_std",
          "h2dtscpp_compat_combo_0039_element_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0039_element_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_ELEMENT_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0040_ELEMENT_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_M; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0040_element_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0040_element_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0040_element_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0040_element_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_M",
          "h2dtscpp_compat_combo_0040_element_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0040_element_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_ELEMENT_XYZ369
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0041_ELEMENT_XYZ369
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type Element_XYZ369; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0041_element_xyz369', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C369', alias: '',
            variableList: [{ type: 'Element_XYZ369', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0041_element_xyz369 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0041_element_xyz369 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0041_element_xyz369 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Element_XYZ369",
          "h2dtscpp_compat_combo_0041_element_xyz369 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0041_element_xyz369 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_NS_BAR_N
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0042_NS_BAR_N
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | n); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0042_ns_bar_n', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | n', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0042_ns_bar_n convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0042_ns_bar_n must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0042_ns_bar_n must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | n",
          "h2dtscpp_compat_combo_0042_ns_bar_n field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0042_ns_bar_n execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_NS_BAR_S
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0043_NS_BAR_S
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | s); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0043_ns_bar_s', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | s', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0043_ns_bar_s convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0043_ns_bar_s must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0043_ns_bar_s must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | s",
          "h2dtscpp_compat_combo_0043_ns_bar_s field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0043_ns_bar_s execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_NS_BAR_B
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0044_NS_BAR_B
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | b); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0044_ns_bar_b', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | b', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0044_ns_bar_b convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0044_ns_bar_b must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0044_ns_bar_b must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | b",
          "h2dtscpp_compat_combo_0044_ns_bar_b field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0044_ns_bar_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_NS_BAR_R
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0045_NS_BAR_R
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | r); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0045_ns_bar_r', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | r', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0045_ns_bar_r convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0045_ns_bar_r must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0045_ns_bar_r must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | r",
          "h2dtscpp_compat_combo_0045_ns_bar_r field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0045_ns_bar_r execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_NS_BARX
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0046_NS_BARX
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type ns.Barx; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0046_ns_barx', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Barx', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0046_ns_barx convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0046_ns_barx must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0046_ns_barx must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Barx",
          "h2dtscpp_compat_combo_0046_ns_barx field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0046_ns_barx execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_S_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0047_S_BAR
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); malformed
   *            type s.Bar; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0047_s_bar', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 's.Bar', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0047_s_bar convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0047_s_bar must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0047_s_bar must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "s.Bar",
          "h2dtscpp_compat_combo_0047_s_bar field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0047_s_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_NS_BAR_STD
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0048_NS_BAR_STD
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | std); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0048_ns_bar_std', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | std', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0048_ns_bar_std convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0048_ns_bar_std must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0048_ns_bar_std must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | std",
          "h2dtscpp_compat_combo_0048_ns_bar_std field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0048_ns_bar_std execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_NS_BAR_M
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0049_NS_BAR_M
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | M); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0049_ns_bar_m', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | M', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0049_ns_bar_m convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0049_ns_bar_m must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0049_ns_bar_m must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | M",
          "h2dtscpp_compat_combo_0049_ns_bar_m field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0049_ns_bar_m execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_NS_BAR_XYZ379
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_COMBO_0050_NS_BAR_XYZ379
   * @tc.desc   Stability compat h2dtscpp/combo: runCompatSafe(transParseObj literal); union
   *            extended (ns.Bar | XYZ379); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_combo_0050_ns_bar_xyz379', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C379', alias: '',
            variableList: [{ type: 'ns.Bar | XYZ379', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_combo_0050_ns_bar_xyz379 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_combo_0050_ns_bar_xyz379 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_combo_0050_ns_bar_xyz379 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar | XYZ379",
          "h2dtscpp_compat_combo_0050_ns_bar_xyz379 field type");
      });
    } catch (err) {
      assert.fail(`h2dtscpp_compat_combo_0050_ns_bar_xyz379 execution error: ${err}`);
    }
  });
});
