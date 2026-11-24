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

suite('Stability_H2DTSCPP_COMPAT_MAP_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0051_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0051_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0051_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Map<string, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0051_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0051_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0051_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
          "h2dtscpp_compat_map_0051_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0051_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0052_MAPSTRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0052_MAPSTRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapstring, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0052_mapstring_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Mapstring, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0052_mapstring_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0052_mapstring_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0052_mapstring_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring, boolean>",
          "h2dtscpp_compat_map_0052_mapstring_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0052_mapstring_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0053_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0053_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0053_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Map<string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0053_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0053_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0053_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, boolean",
          "h2dtscpp_compat_map_0053_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0053_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0054_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0054_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0054_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Map<string, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0054_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0054_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0054_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
          "h2dtscpp_compat_map_0054_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0054_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0055_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0055_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string, boolean>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0055_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Map<string, boolean>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0055_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0055_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0055_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, boolean>,",
          "h2dtscpp_compat_map_0055_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0055_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0056_MAPP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0056_MAPP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapp<string, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0056_mapp_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Mapp<string, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0056_mapp_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0056_mapp_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0056_mapp_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string, boolean>",
          "h2dtscpp_compat_map_0056_mapp_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0056_mapp_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0057_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0057_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0057_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0057_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0057_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0057_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0057_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0057_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0058_MAP_NUMBR_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0058_MAP_NUMBR_NUMBR
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<numbr, numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0058_map_numbr_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C284', alias: '',
            variableList: [{ type: 'Map<numbr, numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0058_map_numbr_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0058_map_numbr_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0058_map_numbr_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<numbr, numbr>",
          "h2dtscpp_compat_map_0058_map_numbr_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0058_map_numbr_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0001_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0001_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0001_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C285', alias: '',
            variableList: [{ type: 'Map<number, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0001_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0001_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0001_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
          "h2dtscpp_compat_map_0001_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0001_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0002_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0002_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<number, string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0002_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C285', alias: '',
            variableList: [{ type: 'Map<number, string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0002_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0002_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0002_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number, string>,",
          "h2dtscpp_compat_map_0002_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0002_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0003_MAPP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0003_MAPP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<number, string>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0003_mapp_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C285', alias: '',
            variableList: [{ type: 'Mapp<number, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0003_mapp_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0003_mapp_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0003_mapp_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<number, string>",
          "h2dtscpp_compat_map_0003_mapp_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0003_mapp_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0004_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0004_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0004_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C285', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0004_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0004_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0004_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0004_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0004_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0005_MAP_NUMBR_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0005_MAP_NUMBR_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<numbr, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0005_map_numbr_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<numbr, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0005_map_numbr_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0005_map_numbr_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0005_map_numbr_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<numbr, boolean>",
          "h2dtscpp_compat_map_0005_map_numbr_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0005_map_numbr_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0006_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0006_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0006_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<number, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0006_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0006_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0006_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
          "h2dtscpp_compat_map_0006_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0006_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0007_MAP_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0007_MAP_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number, boolea>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0007_map_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<number, boolea>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0007_map_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0007_map_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0007_map_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number, boolea>",
          "h2dtscpp_compat_map_0007_map_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0007_map_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0008_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0008_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0008_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<number, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0008_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0008_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0008_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
          "h2dtscpp_compat_map_0008_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0008_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0009_MAPNUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0009_MAPNUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapnumber, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0009_mapnumber_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Mapnumber, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0009_mapnumber_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0009_mapnumber_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0009_mapnumber_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapnumber, boolean>",
          "h2dtscpp_compat_map_0009_mapnumber_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0009_mapnumber_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0010_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0010_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0010_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0010_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0010_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0010_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number, boolean",
          "h2dtscpp_compat_map_0010_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0010_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0011_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0011_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0011_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<number, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0011_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0011_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0011_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
          "h2dtscpp_compat_map_0011_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0011_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0012_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0012_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number, boolean>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0012_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Map<number, boolean>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0012_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0012_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0012_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number, boolean>,",
          "h2dtscpp_compat_map_0012_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0012_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0013_MAPP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0013_MAPP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapp<number, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0013_mapp_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'Mapp<number, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0013_mapp_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0013_mapp_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0013_mapp_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<number, boolean>",
          "h2dtscpp_compat_map_0013_mapp_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0013_mapp_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0014_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0014_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0014_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C286', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0014_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0014_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0014_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0014_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0014_invalidtypexyz execution error: ${String(err)}`);
    }
  });
});
