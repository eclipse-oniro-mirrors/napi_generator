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

suite('Stability_H2DTSCPP_COMPAT_MAP_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0001_MAP_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0001_MAP_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<string,numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0001_map_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<string,numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0001_map_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0001_map_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0001_map_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,numbr>",
          "h2dtscpp_compat_map_0001_map_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0001_map_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0002_MAP_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0002_MAP_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<strng,number>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0002_map_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<strng,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0002_map_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0002_map_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0002_map_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<strng,number>",
          "h2dtscpp_compat_map_0002_map_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0002_map_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0003_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0003_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0003_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<string,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0003_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0003_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0003_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
          "h2dtscpp_compat_map_0003_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0003_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0004_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0004_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0004_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<string,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0004_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0004_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0004_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
          "h2dtscpp_compat_map_0004_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0004_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0005_MAPSTRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0005_MAPSTRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapstring,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0005_mapstring_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Mapstring,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0005_mapstring_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0005_mapstring_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0005_mapstring_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring,number>",
          "h2dtscpp_compat_map_0005_mapstring_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0005_mapstring_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0006_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0006_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0006_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<string,number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0006_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0006_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0006_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,number",
          "h2dtscpp_compat_map_0006_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0006_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0007_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0007_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0007_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<string,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0007_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0007_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0007_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
          "h2dtscpp_compat_map_0007_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0007_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0008_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0008_MAP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<string,number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0008_map_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Map<string,number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0008_map_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0008_map_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0008_map_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,number>,",
          "h2dtscpp_compat_map_0008_map_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0008_map_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0009_MAPP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0009_MAPP_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<string,number>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0009_mapp_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'Mapp<string,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0009_mapp_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0009_mapp_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0009_mapp_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string,number>",
          "h2dtscpp_compat_map_0009_mapp_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0009_mapp_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0010_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0010_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0010_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C11', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0010_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0010_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0010_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0010_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0010_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0011_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0011_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0011_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<string,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0011_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0011_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0011_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0011_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0011_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0012_MAP_STRNG_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0012_MAP_STRNG_STRNG
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<strng,strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0012_map_strng_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<strng,strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0012_map_strng_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0012_map_strng_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0012_map_strng_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<strng,strng>",
          "h2dtscpp_compat_map_0012_map_strng_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0012_map_strng_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0013_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0013_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0013_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<string,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0013_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0013_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0013_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0013_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0013_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0014_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0014_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0014_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<string,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0014_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0014_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0014_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0014_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0014_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0015_MAPSTRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0015_MAPSTRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapstring,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0015_mapstring_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Mapstring,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0015_mapstring_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0015_mapstring_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0015_mapstring_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring,string>",
          "h2dtscpp_compat_map_0015_mapstring_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0015_mapstring_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0016_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0016_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0016_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<string,string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0016_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0016_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0016_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,string",
          "h2dtscpp_compat_map_0016_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0016_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0017_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0017_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<string,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0017_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<string,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0017_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0017_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0017_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
          "h2dtscpp_compat_map_0017_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0017_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0018_MAP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0018_MAP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<string,string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0018_map_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Map<string,string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0018_map_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0018_map_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0018_map_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,string>,",
          "h2dtscpp_compat_map_0018_map_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0018_map_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0019_MAPP_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0019_MAPP_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<string,string>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0019_mapp_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'Mapp<string,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0019_mapp_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0019_mapp_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0019_mapp_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string,string>",
          "h2dtscpp_compat_map_0019_mapp_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0019_mapp_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0020_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0020_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0020_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C12', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0020_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0020_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0020_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0020_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0020_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0021_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0021_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0021_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<string,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0021_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0021_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0021_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
          "h2dtscpp_compat_map_0021_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0021_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0022_MAP_STRNG_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0022_MAP_STRNG_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<strng,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0022_map_strng_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<strng,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0022_map_strng_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0022_map_strng_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0022_map_strng_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<strng,boolean>",
          "h2dtscpp_compat_map_0022_map_strng_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0022_map_strng_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0023_MAP_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0023_MAP_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string,boolea>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0023_map_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<string,boolea>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0023_map_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0023_map_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0023_map_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,boolea>",
          "h2dtscpp_compat_map_0023_map_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0023_map_string_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0024_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0024_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0024_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<string,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0024_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0024_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0024_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
          "h2dtscpp_compat_map_0024_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0024_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0025_MAPSTRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0025_MAPSTRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapstring,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0025_mapstring_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Mapstring,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0025_mapstring_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0025_mapstring_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0025_mapstring_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapstring,boolean>",
          "h2dtscpp_compat_map_0025_mapstring_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0025_mapstring_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0026_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0026_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string,boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0026_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<string,boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0026_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0026_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0026_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,boolean",
          "h2dtscpp_compat_map_0026_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0026_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0027_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0027_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0027_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<string,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0027_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0027_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0027_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
          "h2dtscpp_compat_map_0027_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0027_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0028_MAP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0028_MAP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<string,boolean>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0028_map_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Map<string,boolean>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0028_map_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0028_map_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0028_map_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,boolean>,",
          "h2dtscpp_compat_map_0028_map_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0028_map_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0029_MAPP_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0029_MAPP_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Mapp<string,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0029_mapp_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'Mapp<string,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0029_mapp_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0029_mapp_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0029_mapp_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<string,boolean>",
          "h2dtscpp_compat_map_0029_mapp_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0029_mapp_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0030_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0030_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0030_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C13', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0030_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0030_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0030_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0030_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0030_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0031_MAP_NUMBR_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0031_MAP_NUMBR_NUMBR
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<numbr,numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0031_map_numbr_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<numbr,numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0031_map_numbr_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0031_map_numbr_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0031_map_numbr_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<numbr,numbr>",
          "h2dtscpp_compat_map_0031_map_numbr_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0031_map_numbr_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0032_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0032_MAP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0032_map_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<number,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0032_map_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0032_map_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0032_map_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
          "h2dtscpp_compat_map_0032_map_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0032_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0033_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0033_MAP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0033_map_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<number,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0033_map_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0033_map_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0033_map_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
          "h2dtscpp_compat_map_0033_map_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0033_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0034_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0034_MAP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0034_map_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<number,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0034_map_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0034_map_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0034_map_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
          "h2dtscpp_compat_map_0034_map_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0034_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0035_MAPNUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0035_MAPNUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapnumber,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0035_mapnumber_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Mapnumber,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0035_mapnumber_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0035_mapnumber_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0035_mapnumber_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapnumber,number>",
          "h2dtscpp_compat_map_0035_mapnumber_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0035_mapnumber_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0036_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0036_MAP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0036_map_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<number,number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0036_map_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0036_map_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0036_map_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,number",
          "h2dtscpp_compat_map_0036_map_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0036_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0037_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0037_MAP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0037_map_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<number,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0037_map_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0037_map_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0037_map_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
          "h2dtscpp_compat_map_0037_map_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0037_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0038_MAP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0038_MAP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<number,number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0038_map_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Map<number,number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0038_map_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0038_map_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0038_map_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,number>,",
          "h2dtscpp_compat_map_0038_map_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0038_map_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0039_MAPP_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0039_MAPP_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<number,number>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0039_mapp_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'Mapp<number,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0039_mapp_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0039_mapp_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0039_mapp_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<number,number>",
          "h2dtscpp_compat_map_0039_mapp_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0039_mapp_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0040_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0040_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0040_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C14', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0040_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0040_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0040_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0040_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0040_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0041_MAP_NUMBR_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0041_MAP_NUMBR_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<numbr,string>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0041_map_numbr_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<numbr,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0041_map_numbr_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0041_map_numbr_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0041_map_numbr_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<numbr,string>",
          "h2dtscpp_compat_map_0041_map_numbr_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0041_map_numbr_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0042_MAP_NUMBER_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0042_MAP_NUMBER_STRNG
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Map<number,strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0042_map_number_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<number,strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0042_map_number_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0042_map_number_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0042_map_number_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,strng>",
          "h2dtscpp_compat_map_0042_map_number_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0042_map_number_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0043_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0043_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0043_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<number,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0043_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0043_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0043_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
          "h2dtscpp_compat_map_0043_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0043_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0044_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0044_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0044_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<number,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0044_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0044_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0044_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
          "h2dtscpp_compat_map_0044_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0044_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0045_MAPNUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0045_MAPNUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Mapnumber,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0045_mapnumber_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Mapnumber,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0045_mapnumber_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0045_mapnumber_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0045_mapnumber_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapnumber,string>",
          "h2dtscpp_compat_map_0045_mapnumber_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0045_mapnumber_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0046_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0046_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0046_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<number,string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0046_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0046_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0046_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,string",
          "h2dtscpp_compat_map_0046_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0046_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0047_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0047_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            Map<number,string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0047_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<number,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0047_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0047_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0047_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
          "h2dtscpp_compat_map_0047_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0047_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0048_MAP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0048_MAP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Map<number,string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0048_map_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Map<number,string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0048_map_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0048_map_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0048_map_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,string>,",
          "h2dtscpp_compat_map_0048_map_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0048_map_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0049_MAPP_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0049_MAPP_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); container
   *            keyword typo (Mapp<number,string>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0049_mapp_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'Mapp<number,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0049_mapp_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0049_mapp_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0049_mapp_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Mapp<number,string>",
          "h2dtscpp_compat_map_0049_mapp_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0049_mapp_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0050_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0050_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0050_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C15', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0050_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0050_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0050_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_map_0050_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0050_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0051_MAP_NUMBR_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0051_MAP_NUMBR_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Map<numbr,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0051_map_numbr_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C16', alias: '',
            variableList: [{ type: 'Map<numbr,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0051_map_numbr_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0051_map_numbr_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0051_map_numbr_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<numbr,boolean>",
          "h2dtscpp_compat_map_0051_map_numbr_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0051_map_numbr_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0052_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0052_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0052_map_number_boolean', function() {
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
          "h2dtscpp_compat_map_0052_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0052_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0052_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
          "h2dtscpp_compat_map_0052_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0052_map_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0053_MAP_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0053_MAP_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number,boolea>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0053_map_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C16', alias: '',
            variableList: [{ type: 'Map<number,boolea>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_map_0053_map_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0053_map_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0053_map_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Map<number,boolea>",
          "h2dtscpp_compat_map_0053_map_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0053_map_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_MAP_0054_MAP_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_MAP_0054_MAP_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/map: runCompatSafe(transParseObj literal); boolean keyword
   *            misspelled (Map<number,boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_map_0054_map_number_boolean', function() {
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
          "h2dtscpp_compat_map_0054_map_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_map_0054_map_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_map_0054_map_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
          "h2dtscpp_compat_map_0054_map_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_map_0054_map_number_boolean execution error: ${String(err)}`);
    }
  });
});
