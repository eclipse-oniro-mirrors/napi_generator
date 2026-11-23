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

suite('Stability_H2DTSCPP_COMPAT_TUPLE_Part17', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0053_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C265', alias: '',
            variableList: [{ type: '[boolean, string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0053_boolean_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0053_boolean_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0053_boolean_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0053_boolean_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0053_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0054_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C265', alias: '',
            variableList: [{ type: '[boolean, string, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0054_boolean_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0054_boolean_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0054_boolean_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean",
          "h2dtscpp_compat_tuple_0054_boolean_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0054_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0055_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C265', alias: '',
            variableList: [{ type: '[boolean, string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0055_boolean_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0055_boolean_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0055_boolean_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0055_boolean_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0055_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0056_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C265', alias: '',
            variableList: [{ type: '[boolean, string, boolean, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0056_boolean_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0056_boolean_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0056_boolean_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean],",
          "h2dtscpp_compat_tuple_0056_boolean_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0056_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_BOOLEAN_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0057_boolean_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C265', alias: '',
            variableList: [{ type: '[boolean, string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0057_boolean_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0057_boolean_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0057_boolean_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0057_boolean_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0057_boolean_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0058_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C265', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0058_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0058_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0058_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0058_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0058_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0001_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C267', alias: '',
            variableList: [{ type: '[boolean, boolean, number, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0001_boolean_boolean_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0001_boolean_boolean_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0001_boolean_boolean_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string",
          "h2dtscpp_compat_tuple_0001_boolean_boolean_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0001_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0002_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C267', alias: '',
            variableList: [{ type: '[boolean, boolean, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0002_boolean_boolean_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_boolean_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_boolean_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string]",
          "h2dtscpp_compat_tuple_0002_boolean_boolean_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0002_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0003_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C267', alias: '',
            variableList: [{ type: '[boolean, boolean, number, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0003_boolean_boolean_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0003_boolean_boolean_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0003_boolean_boolean_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string],",
          "h2dtscpp_compat_tuple_0003_boolean_boolean_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0003_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_BOOLEAN_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0004_boolean_boolean_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C267', alias: '',
            variableList: [{ type: '[boolean, boolean, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0004_boolean_boolean_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0004_boolean_boolean_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0004_boolean_boolean_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string]",
          "h2dtscpp_compat_tuple_0004_boolean_boolean_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0004_boolean_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0005_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C267', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0005_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0005_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0005_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0005_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0005_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_BOOLEAN_BOOLEAN_NUMBR_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_BOOLEAN_BOOLEAN_NUMBR_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, boolean, numbr, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0006_boolean_boolean_numbr_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, numbr, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0006_boolean_boolean_numbr_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0006_boolean_boolean_numbr_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0006_boolean_boolean_numbr_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, numbr, boolean]",
          "h2dtscpp_compat_tuple_0006_boolean_boolean_numbr_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0006_boolean_boolean_numbr_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0007_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0007_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0007_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0007_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0007_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0007_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_BOOLEA_BOOLEA_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_BOOLEA_BOOLEA_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, boolea, number, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0008_boolea_boolea_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolea, boolea, number, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0008_boolea_boolea_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0008_boolea_boolea_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0008_boolea_boolea_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, boolea, number, boolea]",
          "h2dtscpp_compat_tuple_0008_boolea_boolea_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0008_boolea_boolea_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0009_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0009_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0009_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0009_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean",
          "h2dtscpp_compat_tuple_0009_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0009_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0010_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0010_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0010_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0010_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0010_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0010_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0011_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0011_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0011_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0011_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean",
          "h2dtscpp_compat_tuple_0011_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0011_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0012_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0012_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0012_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0012_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0012_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0012_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0013_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0013_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0013_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0013_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean],",
          "h2dtscpp_compat_tuple_0013_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0013_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_BOOLEAN_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0014_boolean_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: '[boolean, boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0014_boolean_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0014_boolean_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0014_boolean_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0014_boolean_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0014_boolean_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0015_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C268', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0015_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0015_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0015_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0015_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0015_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_BOOLEAN_BOOLEAN_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_BOOLEAN_BOOLEAN_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, boolean, string, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0016_boolean_boolean_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0016_boolean_boolean_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0016_boolean_boolean_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0016_boolean_boolean_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, numbr]",
          "h2dtscpp_compat_tuple_0016_boolean_boolean_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0016_boolean_boolean_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_BOOLEAN_BOOLEAN_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_BOOLEAN_BOOLEAN_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, boolean, strng, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0017_boolean_boolean_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, strng, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0017_boolean_boolean_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0017_boolean_boolean_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0017_boolean_boolean_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, strng, number]",
          "h2dtscpp_compat_tuple_0017_boolean_boolean_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0017_boolean_boolean_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_BOOLEA_BOOLEA_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_BOOLEA_BOOLEA_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, boolea, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0018_boolea_boolea_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolea, boolea, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0018_boolea_boolea_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0018_boolea_boolea_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0018_boolea_boolea_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, boolea, string, number]",
          "h2dtscpp_compat_tuple_0018_boolea_boolea_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0018_boolea_boolea_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0019_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0019_boolean_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0019_boolean_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0019_boolean_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number",
          "h2dtscpp_compat_tuple_0019_boolean_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0019_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0020_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0020_boolean_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0020_boolean_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0020_boolean_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number]",
          "h2dtscpp_compat_tuple_0020_boolean_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0020_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0021_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0021_boolean_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0021_boolean_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0021_boolean_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number",
          "h2dtscpp_compat_tuple_0021_boolean_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0021_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0022_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0022_boolean_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0022_boolean_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0022_boolean_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number]",
          "h2dtscpp_compat_tuple_0022_boolean_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0022_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, number],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0023_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, number],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0023_boolean_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0023_boolean_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0023_boolean_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number],",
          "h2dtscpp_compat_tuple_0023_boolean_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0023_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_BOOLEAN_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0024_boolean_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: '[boolean, boolean, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0024_boolean_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0024_boolean_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0024_boolean_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number]",
          "h2dtscpp_compat_tuple_0024_boolean_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0024_boolean_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0025_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C269', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0025_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0025_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0025_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0025_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0025_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0026_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0026_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0026_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0026_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string]",
          "h2dtscpp_compat_tuple_0026_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0026_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_BOOLEAN_BOOLEAN_STRNG_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_BOOLEAN_BOOLEAN_STRNG_STRNG
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, boolean, strng, strng]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0027_boolean_boolean_strng_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, strng, strng]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0027_boolean_boolean_strng_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0027_boolean_boolean_strng_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0027_boolean_boolean_strng_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, strng, strng]",
          "h2dtscpp_compat_tuple_0027_boolean_boolean_strng_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0027_boolean_boolean_strng_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_BOOLEA_BOOLEA_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_BOOLEA_BOOLEA_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, boolea, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0028_boolea_boolea_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolea, boolea, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0028_boolea_boolea_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0028_boolea_boolea_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0028_boolea_boolea_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, boolea, string, string]",
          "h2dtscpp_compat_tuple_0028_boolea_boolea_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0028_boolea_boolea_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0029_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0029_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0029_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0029_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string",
          "h2dtscpp_compat_tuple_0029_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0029_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0030_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0030_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0030_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0030_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string]",
          "h2dtscpp_compat_tuple_0030_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0030_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0031_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0031_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0031_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0031_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string",
          "h2dtscpp_compat_tuple_0031_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0031_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0032_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0032_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0032_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0032_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string]",
          "h2dtscpp_compat_tuple_0032_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0032_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0033_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0033_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0033_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0033_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string],",
          "h2dtscpp_compat_tuple_0033_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0033_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_BOOLEAN_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0034_boolean_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: '[boolean, boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0034_boolean_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0034_boolean_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0034_boolean_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string]",
          "h2dtscpp_compat_tuple_0034_boolean_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0034_boolean_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0035_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C270', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0035_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0035_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0035_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0035_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0035_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0036_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0036_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0036_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0036_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0036_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0036_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_BOOLEAN_BOOLEAN_STRNG_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_BOOLEAN_BOOLEAN_STRNG_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, boolean, strng, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0037_boolean_boolean_strng_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, strng, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0037_boolean_boolean_strng_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0037_boolean_boolean_strng_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0037_boolean_boolean_strng_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, strng, boolean]",
          "h2dtscpp_compat_tuple_0037_boolean_boolean_strng_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0037_boolean_boolean_strng_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_BOOLEA_BOOLEA_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_BOOLEA_BOOLEA_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, boolea, string, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0038_boolea_boolea_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolea, boolea, string, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0038_boolea_boolea_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0038_boolea_boolea_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0038_boolea_boolea_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, boolea, string, boolea]",
          "h2dtscpp_compat_tuple_0038_boolea_boolea_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0038_boolea_boolea_string_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0039_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0039_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0039_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0039_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean",
          "h2dtscpp_compat_tuple_0039_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0039_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0040_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0040_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0040_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0040_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0040_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0040_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0041_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0041_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0041_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0041_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean",
          "h2dtscpp_compat_tuple_0041_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0041_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0042_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0042_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0042_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0042_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0042_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0042_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0043_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0043_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0043_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0043_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean],",
          "h2dtscpp_compat_tuple_0043_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0043_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0044_boolean_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: '[boolean, boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0044_boolean_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0044_boolean_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0044_boolean_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0044_boolean_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0044_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0045_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C271', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0045_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0045_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0045_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0045_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0045_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_BOOLEAN_BOOLEAN_BOOLEAN_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_BOOLEAN_BOOLEAN_BOOLEAN_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, boolean, boolean, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0046_boolean_boolean_boolean_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C272', alias: '',
            variableList: [{ type: '[boolean, boolean, boolean, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0046_boolean_boolean_boolean_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0046_boolean_boolean_boolean_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0046_boolean_boolean_boolean_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean, numbr]",
          "h2dtscpp_compat_tuple_0046_boolean_boolean_boolean_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0046_boolean_boolean_boolean_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean, boolean, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0047_boolean_boolean_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C272', alias: '',
            variableList: [{ type: '[boolean, boolean, boolean, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0047_boolean_boolean_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0047_boolean_boolean_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0047_boolean_boolean_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean, number]",
          "h2dtscpp_compat_tuple_0047_boolean_boolean_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0047_boolean_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_BOOLEA_BOOLEA_BOOLEA_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_BOOLEA_BOOLEA_BOOLEA_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, boolea, boolea, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0048_boolea_boolea_boolea_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C272', alias: '',
            variableList: [{ type: '[boolea, boolea, boolea, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0048_boolea_boolea_boolea_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0048_boolea_boolea_boolea_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0048_boolea_boolea_boolea_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, boolea, boolea, number]",
          "h2dtscpp_compat_tuple_0048_boolea_boolea_boolea_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0048_boolea_boolea_boolea_number execution error: ${String(err)}`);
    }
  });
});
