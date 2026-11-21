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

suite('Stability_H2DTSCPP_COMPAT_MAP_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0055_MAPNUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0055_MAPNUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapnumber,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0055_mapnumber_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C16', alias: '',
            variableList: [{ type: 'Mapnumber,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0055_mapnumber_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0055_mapnumber_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0055_mapnumber_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapnumber,boolean>",
          "h2dtscpp_compat_map_0055_mapnumber_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0055_mapnumber_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0056_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0056_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number,boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0056_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C16', alias: '',
            variableList: [{ type: 'Map<number,boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0056_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0056_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0056_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,boolean",
          "h2dtscpp_compat_map_0056_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0056_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0057_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0057_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0057_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C16', alias: '',
            variableList: [{ type: 'Map<number,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0057_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0057_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0057_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
          "h2dtscpp_compat_map_0057_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0057_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0058_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0058_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number,boolean>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0058_map_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C16', alias: '',
            variableList: [{ type: 'Map<number,boolean>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0058_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0058_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0058_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,boolean>,",
          "h2dtscpp_compat_map_0058_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0058_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0001_MAP_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0001_MAP_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0001_map_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'Map<string,object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0001_map_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0001_map_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0001_map_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,object>",
          "h2dtscpp_compat_map_0001_map_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0001_map_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0002_MAPSTRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0002_MAPSTRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapstring,object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0002_mapstring_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'Mapstring,object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0002_mapstring_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0002_mapstring_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0002_mapstring_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring,object>",
          "h2dtscpp_compat_map_0002_mapstring_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0002_mapstring_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0003_MAP_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0003_MAP_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0003_map_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'Map<string,object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0003_map_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0003_map_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0003_map_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,object",
          "h2dtscpp_compat_map_0003_map_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0003_map_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0004_MAP_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0004_MAP_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0004_map_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'Map<string,object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0004_map_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0004_map_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0004_map_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,object>",
          "h2dtscpp_compat_map_0004_map_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0004_map_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0005_MAP_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0005_MAP_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<string,object>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0005_map_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'Map<string,object>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0005_map_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0005_map_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0005_map_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,object>,",
          "h2dtscpp_compat_map_0005_map_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0005_map_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0006_MAPP_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0006_MAPP_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<string,object>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0006_mapp_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'Mapp<string,object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0006_mapp_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0006_mapp_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0006_mapp_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string,object>",
          "h2dtscpp_compat_map_0006_mapp_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0006_mapp_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0007_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0007_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0007_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C64', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0007_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0007_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0007_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0007_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0007_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0008_MAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0008_MAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<object,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0008_map_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0008_map_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0008_map_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0008_map_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>",
          "h2dtscpp_compat_map_0008_map_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0008_map_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0009_MAP_OBJECT_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0009_MAP_OBJECT_STRNG
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<object,strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0009_map_object_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0009_map_object_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0009_map_object_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0009_map_object_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,strng>",
          "h2dtscpp_compat_map_0009_map_object_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0009_map_object_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0010_MAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0010_MAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<object,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0010_map_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0010_map_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0010_map_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0010_map_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>",
          "h2dtscpp_compat_map_0010_map_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0010_map_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0011_MAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0011_MAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<object,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0011_map_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0011_map_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0011_map_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0011_map_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>",
          "h2dtscpp_compat_map_0011_map_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0011_map_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0012_MAPOBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0012_MAPOBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapobject,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0012_mapobject_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Mapobject,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0012_mapobject_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0012_mapobject_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0012_mapobject_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapobject,string>",
          "h2dtscpp_compat_map_0012_mapobject_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0012_mapobject_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0013_MAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0013_MAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<object,string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0013_map_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0013_map_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0013_map_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0013_map_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string",
          "h2dtscpp_compat_map_0013_map_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0013_map_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0014_MAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0014_MAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<object,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0014_map_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0014_map_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0014_map_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0014_map_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>",
          "h2dtscpp_compat_map_0014_map_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0014_map_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0015_MAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0015_MAP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<object,string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0015_map_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Map<object,string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0015_map_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0015_map_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0015_map_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>,",
          "h2dtscpp_compat_map_0015_map_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0015_map_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0016_MAPP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0016_MAPP_OBJECT_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<object,string>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0016_mapp_object_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'Mapp<object,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0016_mapp_object_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0016_mapp_object_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0016_mapp_object_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<object,string>",
          "h2dtscpp_compat_map_0016_mapp_object_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0016_mapp_object_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0017_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0017_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0017_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C65', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0017_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0017_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0017_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0017_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0017_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0018_MAP_ANY_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0018_MAP_ANY_NUMBR
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<any,numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0018_map_any_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0018_map_any_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0018_map_any_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0018_map_any_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,numbr>",
          "h2dtscpp_compat_map_0018_map_any_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0018_map_any_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0019_MAP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0019_MAP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<any,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0019_map_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0019_map_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0019_map_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0019_map_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>",
          "h2dtscpp_compat_map_0019_map_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0019_map_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0020_MAP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0020_MAP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<any,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0020_map_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0020_map_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0020_map_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0020_map_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>",
          "h2dtscpp_compat_map_0020_map_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0020_map_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0021_MAP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0021_MAP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<any,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0021_map_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0021_map_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0021_map_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0021_map_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>",
          "h2dtscpp_compat_map_0021_map_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0021_map_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0022_MAPANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0022_MAPANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapany,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0022_mapany_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Mapany,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0022_mapany_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0022_mapany_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0022_mapany_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapany,number>",
          "h2dtscpp_compat_map_0022_mapany_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0022_mapany_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0023_MAP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0023_MAP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<any,number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0023_map_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0023_map_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0023_map_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0023_map_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number",
          "h2dtscpp_compat_map_0023_map_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0023_map_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0024_MAP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0024_MAP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<any,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0024_map_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0024_map_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0024_map_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0024_map_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>",
          "h2dtscpp_compat_map_0024_map_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0024_map_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0025_MAP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0025_MAP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<any,number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0025_map_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Map<any,number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0025_map_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0025_map_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0025_map_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>,",
          "h2dtscpp_compat_map_0025_map_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0025_map_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0026_MAPP_ANY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0026_MAPP_ANY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<any,number>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0026_mapp_any_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'Mapp<any,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0026_mapp_any_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0026_mapp_any_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0026_mapp_any_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<any,number>",
          "h2dtscpp_compat_map_0026_mapp_any_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0026_mapp_any_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0027_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0027_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0027_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C66', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0027_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0027_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0027_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0027_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0027_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0028_MAP_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0028_MAP_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<string, numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0028_map_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<string, numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0028_map_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0028_map_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0028_map_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, numbr>",
          "h2dtscpp_compat_map_0028_map_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0028_map_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0029_MAP_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0029_MAP_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<strng, number>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0029_map_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<strng, number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0029_map_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0029_map_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0029_map_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<strng, number>",
          "h2dtscpp_compat_map_0029_map_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0029_map_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0030_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0030_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0030_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<string, number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0030_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0030_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0030_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
          "h2dtscpp_compat_map_0030_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0030_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0031_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0031_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0031_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<string, number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0031_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0031_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0031_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
          "h2dtscpp_compat_map_0031_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0031_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0032_MAPSTRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0032_MAPSTRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapstring, number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0032_mapstring_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Mapstring, number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0032_mapstring_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0032_mapstring_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0032_mapstring_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring, number>",
          "h2dtscpp_compat_map_0032_mapstring_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0032_mapstring_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0033_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0033_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0033_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0033_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0033_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0033_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, number",
          "h2dtscpp_compat_map_0033_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0033_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0034_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0034_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0034_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<string, number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0034_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0034_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0034_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
          "h2dtscpp_compat_map_0034_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0034_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0035_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0035_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<string, number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0035_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Map<string, number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0035_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0035_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0035_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, number>,",
          "h2dtscpp_compat_map_0035_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0035_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0036_MAPP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0036_MAPP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<string, number>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0036_mapp_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'Mapp<string, number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0036_mapp_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0036_mapp_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0036_mapp_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string, number>",
          "h2dtscpp_compat_map_0036_mapp_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0036_mapp_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0037_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0037_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0037_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C281', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0037_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0037_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0037_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0037_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0037_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0038_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0038_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0038_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<string, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0038_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0038_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0038_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0038_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0038_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0039_MAP_STRNG_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0039_MAP_STRNG_STRNG
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<strng, strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0039_map_strng_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<strng, strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0039_map_strng_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0039_map_strng_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0039_map_strng_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<strng, strng>",
          "h2dtscpp_compat_map_0039_map_strng_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0039_map_strng_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0040_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0040_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0040_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<string, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0040_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0040_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0040_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0040_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0040_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0041_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0041_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0041_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<string, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0041_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0041_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0041_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0041_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0041_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0042_MAPSTRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0042_MAPSTRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapstring, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0042_mapstring_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Mapstring, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0042_mapstring_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0042_mapstring_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0042_mapstring_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring, string>",
          "h2dtscpp_compat_map_0042_mapstring_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0042_mapstring_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0043_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0043_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0043_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0043_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0043_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0043_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, string",
          "h2dtscpp_compat_map_0043_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0043_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0044_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0044_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string, string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0044_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<string, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0044_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0044_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0044_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0044_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0044_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0045_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0045_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<string, string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0045_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Map<string, string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0045_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0045_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0045_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, string>,",
          "h2dtscpp_compat_map_0045_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0045_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0046_MAPP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0046_MAPP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<string, string>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0046_mapp_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'Mapp<string, string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0046_mapp_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0046_mapp_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0046_mapp_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string, string>",
          "h2dtscpp_compat_map_0046_mapp_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0046_mapp_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0047_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0047_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0047_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C282', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0047_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0047_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0047_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0047_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0047_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0048_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0048_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0048_map_string_boolean', function() {
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
          "h2dtscpp_compat_map_0048_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0048_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0048_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
          "h2dtscpp_compat_map_0048_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0048_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0049_MAP_STRNG_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0049_MAP_STRNG_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<strng, boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0049_map_strng_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Map<strng, boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0049_map_strng_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0049_map_strng_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0049_map_strng_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<strng, boolean>",
          "h2dtscpp_compat_map_0049_map_strng_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0049_map_strng_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0050_MAP_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0050_MAP_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string, boolea>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0050_map_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C283', alias: '',
            variableList: [{ type: 'Map<string, boolea>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0050_map_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0050_map_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0050_map_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string, boolea>",
          "h2dtscpp_compat_map_0050_map_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0050_map_string_boolea execution error: ${String(err)}`);
    }
  });
});
