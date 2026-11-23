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

suite('Stability_H2DTSCPP_COMPAT_BASIC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0001_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0001_NUMBR
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); number
   *            keyword misspelled (numbr); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0001_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'numbr', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0001_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0001_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0001_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "numbr",
          "h2dtscpp_compat_basic_0001_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0001_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0002_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0002_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0002_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0002_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0002_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0002_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "double",
          "h2dtscpp_compat_basic_0002_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0002_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0003_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0003_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0003_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0003_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0003_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0003_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "double",
          "h2dtscpp_compat_basic_0003_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0003_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0004_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0004_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0004_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0004_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0004_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0004_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "double",
          "h2dtscpp_compat_basic_0004_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0004_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0005_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0005_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0005_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0005_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0005_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0005_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "double",
          "h2dtscpp_compat_basic_0005_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0005_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0006_NUMBE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0006_NUMBE
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type numbe; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0006_numbe', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'numbe', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0006_numbe convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0006_numbe must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0006_numbe must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "numbe",
          "h2dtscpp_compat_basic_0006_numbe field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0006_numbe execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0007_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0007_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0007_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0007_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0007_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0007_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "double",
          "h2dtscpp_compat_basic_0007_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0007_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0008_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0008_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (number,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0008_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0008_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0008_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0008_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "number,",
          "h2dtscpp_compat_basic_0008_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0008_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0009_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0009_NUMBER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0009_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0009_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0009_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0009_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "double",
          "h2dtscpp_compat_basic_0009_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0009_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0010_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0010_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0010_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C1', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0010_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0010_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0010_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0010_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0010_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0011_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0011_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0011_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0011_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0011_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0011_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
          "h2dtscpp_compat_basic_0011_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0011_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0012_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0012_STRNG
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (strng); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0012_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'strng', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0012_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0012_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0012_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strng",
          "h2dtscpp_compat_basic_0012_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0012_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0013_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0013_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0013_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0013_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0013_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0013_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
          "h2dtscpp_compat_basic_0013_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0013_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0014_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0014_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0014_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0014_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0014_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0014_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
          "h2dtscpp_compat_basic_0014_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0014_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0015_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0015_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0015_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0015_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0015_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0015_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
          "h2dtscpp_compat_basic_0015_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0015_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0016_STRIN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0016_STRIN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type strin; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0016_strin', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'strin', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0016_strin convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0016_strin must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0016_strin must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strin",
          "h2dtscpp_compat_basic_0016_strin field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0016_strin execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0017_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0017_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0017_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0017_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0017_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0017_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
          "h2dtscpp_compat_basic_0017_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0017_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0018_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0018_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (string,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0018_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0018_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0018_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0018_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string,",
          "h2dtscpp_compat_basic_0018_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0018_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0019_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0019_STRING
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0019_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0019_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0019_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0019_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
          "h2dtscpp_compat_basic_0019_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0019_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0020_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0020_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0020_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C2', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0020_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0020_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0020_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0020_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0020_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0021_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0021_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0021_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0021_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0021_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0021_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
          "h2dtscpp_compat_basic_0021_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0021_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0022_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0022_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0022_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0022_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0022_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0022_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
          "h2dtscpp_compat_basic_0022_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0022_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0023_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0023_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0023_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0023_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0023_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0023_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolea",
          "h2dtscpp_compat_basic_0023_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0023_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0024_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0024_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0024_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0024_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0024_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0024_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
          "h2dtscpp_compat_basic_0024_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0024_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0025_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0025_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0025_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0025_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0025_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0025_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
          "h2dtscpp_compat_basic_0025_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0025_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0026_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0026_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0026_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0026_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0026_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0026_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolea",
          "h2dtscpp_compat_basic_0026_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0026_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0027_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0027_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0027_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0027_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0027_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0027_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
          "h2dtscpp_compat_basic_0027_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0027_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0028_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0028_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0028_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0028_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0028_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0028_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolean,",
          "h2dtscpp_compat_basic_0028_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0028_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0029_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0029_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0029_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0029_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0029_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0029_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
          "h2dtscpp_compat_basic_0029_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0029_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0030_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0030_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0030_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C3', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0030_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0030_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0030_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0030_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0030_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0031_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0031_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0031_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0031_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0031_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0031_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0031_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0031_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0032_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0032_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0032_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0032_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0032_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0032_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0032_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0032_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0033_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0033_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0033_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0033_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0033_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0033_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0033_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0033_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0034_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0034_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0034_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0034_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0034_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0034_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0034_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0034_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0035_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0035_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0035_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0035_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0035_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0035_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0035_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0035_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0036_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0036_VOI
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0036_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0036_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0036_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0036_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "voi",
          "h2dtscpp_compat_basic_0036_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0036_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0037_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0037_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0037_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0037_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0037_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0037_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0037_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0037_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0038_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0038_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0038_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0038_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0038_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0038_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void,",
          "h2dtscpp_compat_basic_0038_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0038_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0039_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0039_VOID
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0039_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0039_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0039_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0039_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "void",
          "h2dtscpp_compat_basic_0039_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0039_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0040_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0040_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0040_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C4', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0040_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0040_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0040_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0040_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0040_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0041_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0041_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0041_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0041_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0041_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0041_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0041_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0041_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0042_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0042_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0042_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0042_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0042_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0042_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0042_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0042_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0043_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0043_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0043_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0043_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0043_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0043_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0043_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0043_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0044_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0044_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0044_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0044_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0044_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0044_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0044_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0044_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0045_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0045_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0045_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0045_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0045_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0045_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0045_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0045_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0046_NUL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0046_NUL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type nul; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0046_nul', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'nul', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0046_nul convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0046_nul must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0046_nul must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "nul",
          "h2dtscpp_compat_basic_0046_nul field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0046_nul execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0047_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0047_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0047_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0047_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0047_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0047_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0047_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0047_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0048_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0048_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (null,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0048_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0048_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0048_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0048_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null,",
          "h2dtscpp_compat_basic_0048_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0048_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0049_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0049_NULL
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type null; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0049_null', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'null', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0049_null convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0049_null must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0049_null must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "null",
          "h2dtscpp_compat_basic_0049_null field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0049_null execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0050_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0050_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0050_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C287', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0050_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0050_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0050_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0050_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0050_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0051_UNDEFINED
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0051_UNDEFINED
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefined; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0051_undefined', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C288', alias: '',
            variableList: [{ type: 'undefined', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0051_undefined convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0051_undefined must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0051_undefined must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
          "h2dtscpp_compat_basic_0051_undefined field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0051_undefined execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0052_UNDEFINED
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0052_UNDEFINED
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefined; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0052_undefined', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C288', alias: '',
            variableList: [{ type: 'undefined', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0052_undefined convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0052_undefined must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0052_undefined must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
          "h2dtscpp_compat_basic_0052_undefined field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0052_undefined execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0053_UNDEFINED
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0053_UNDEFINED
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefined; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0053_undefined', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C288', alias: '',
            variableList: [{ type: 'undefined', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0053_undefined convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0053_undefined must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0053_undefined must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
          "h2dtscpp_compat_basic_0053_undefined field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0053_undefined execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0054_UNDEFINED
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0054_UNDEFINED
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefined; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0054_undefined', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C288', alias: '',
            variableList: [{ type: 'undefined', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0054_undefined convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0054_undefined must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0054_undefined must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
          "h2dtscpp_compat_basic_0054_undefined field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0054_undefined execution error: ${String(err)}`);
    }
  });
});
