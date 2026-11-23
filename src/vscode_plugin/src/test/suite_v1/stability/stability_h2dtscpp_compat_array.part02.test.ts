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

suite('Stability_H2DTSCPP_COMPAT_ARRAY_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0055_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0055_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0055_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C10', alias: '',
            variableList: [{ type: 'boolean[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0055_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0055_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0055_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0055_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0055_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0056_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0056_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0056_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C10', alias: '',
            variableList: [{ type: 'boolean[', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0056_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0056_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0056_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolean[",
          "h2dtscpp_compat_array_0056_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0056_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0057_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0057_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0057_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C10', alias: '',
            variableList: [{ type: 'boolean[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0057_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0057_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0057_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0057_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0057_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0058_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0058_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0058_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C10', alias: '',
            variableList: [{ type: 'boolean[],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0058_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0058_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0058_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolean[],",
          "h2dtscpp_compat_array_0058_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0058_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0001_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0001_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type object[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0001_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C60', alias: '',
            variableList: [{ type: 'object[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0001_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0001_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0001_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
          "h2dtscpp_compat_array_0001_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0001_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0002_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0002_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type object[; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0002_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C60', alias: '',
            variableList: [{ type: 'object[', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0002_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0002_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0002_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object[",
          "h2dtscpp_compat_array_0002_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0002_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0003_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0003_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type object[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0003_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C60', alias: '',
            variableList: [{ type: 'object[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0003_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0003_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0003_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
          "h2dtscpp_compat_array_0003_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0003_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0004_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0004_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (object[],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0004_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C60', alias: '',
            variableList: [{ type: 'object[],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0004_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0004_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0004_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object[],",
          "h2dtscpp_compat_array_0004_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0004_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0005_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0005_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type object[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0005_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C60', alias: '',
            variableList: [{ type: 'object[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0005_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0005_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0005_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
          "h2dtscpp_compat_array_0005_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0005_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0006_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0006_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0006_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C60', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0006_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0006_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0006_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0006_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0006_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0007_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0007_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0007_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0007_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0007_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0007_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "h2dtscpp_compat_array_0007_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0007_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0008_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0008_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0008_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0008_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0008_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0008_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "h2dtscpp_compat_array_0008_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0008_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0009_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0009_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0009_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0009_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0009_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0009_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "h2dtscpp_compat_array_0009_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0009_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0010_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0010_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0010_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0010_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0010_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0010_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "h2dtscpp_compat_array_0010_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0010_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0011_ARRAYANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0011_ARRAYANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Arrayany>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0011_arrayany', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Arrayany>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0011_arrayany convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0011_arrayany must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0011_arrayany must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Arrayany>",
          "h2dtscpp_compat_array_0011_arrayany field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0011_arrayany execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0012_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0012_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0012_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0012_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0012_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0012_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any",
          "h2dtscpp_compat_array_0012_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0012_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0013_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0013_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0013_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0013_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0013_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0013_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "h2dtscpp_compat_array_0013_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0013_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0014_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0014_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (Array<any>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0014_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0014_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0014_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0014_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>,",
          "h2dtscpp_compat_array_0014_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0014_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0015_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0015_ARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0015_array_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0015_array_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0015_array_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0015_array_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "h2dtscpp_compat_array_0015_array_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0015_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0016_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0016_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0016_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C61', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0016_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0016_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0016_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0016_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0016_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0017_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0017_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0017_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0017_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0017_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0017_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
          "h2dtscpp_compat_array_0017_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0017_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0018_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0018_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0018_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0018_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0018_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0018_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
          "h2dtscpp_compat_array_0018_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0018_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0019_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0019_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0019_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0019_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0019_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0019_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
          "h2dtscpp_compat_array_0019_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0019_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0020_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0020_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0020_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0020_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0020_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0020_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
          "h2dtscpp_compat_array_0020_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0020_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0021_ARRAYOBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0021_ARRAYOBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Arrayobject>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0021_arrayobject', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Arrayobject>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0021_arrayobject convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0021_arrayobject must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0021_arrayobject must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Arrayobject>",
          "h2dtscpp_compat_array_0021_arrayobject field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0021_arrayobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0022_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0022_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0022_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0022_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0022_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0022_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object",
          "h2dtscpp_compat_array_0022_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0022_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0023_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0023_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0023_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0023_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0023_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0023_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
          "h2dtscpp_compat_array_0023_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0023_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0024_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0024_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (Array<object>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0024_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0024_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0024_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0024_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>,",
          "h2dtscpp_compat_array_0024_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0024_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0025_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0025_ARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0025_array_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0025_array_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0025_array_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0025_array_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
          "h2dtscpp_compat_array_0025_array_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0025_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0026_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0026_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0026_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C62', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0026_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0026_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0026_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0026_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0026_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0027_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0027_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0027_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0027_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0027_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0027_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
          "h2dtscpp_compat_array_0027_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0027_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0028_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0028_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0028_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0028_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0028_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0028_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
          "h2dtscpp_compat_array_0028_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0028_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0029_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0029_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0029_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0029_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0029_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0029_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
          "h2dtscpp_compat_array_0029_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0029_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0030_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0030_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0030_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0030_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0030_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0030_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
          "h2dtscpp_compat_array_0030_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0030_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0031_READONLYARRAYANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0031_READONLYARRAYANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArrayany>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0031_readonlyarrayany', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArrayany>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0031_readonlyarrayany convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0031_readonlyarrayany must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0031_readonlyarrayany must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArrayany>",
          "h2dtscpp_compat_array_0031_readonlyarrayany field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0031_readonlyarrayany execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0032_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0032_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0032_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0032_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0032_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0032_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any",
          "h2dtscpp_compat_array_0032_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0032_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0033_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0033_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0033_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0033_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0033_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0033_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
          "h2dtscpp_compat_array_0033_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0033_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0034_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0034_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (ReadonlyArray<any>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0034_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0034_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0034_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0034_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>,",
          "h2dtscpp_compat_array_0034_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0034_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0035_READONLYARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0035_READONLYARRAY_ANY
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<any>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0035_readonlyarray_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'ReadonlyArray<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0035_readonlyarray_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0035_readonlyarray_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0035_readonlyarray_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
          "h2dtscpp_compat_array_0035_readonlyarray_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0035_readonlyarray_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0036_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0036_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0036_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C78', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0036_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0036_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0036_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0036_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0036_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0037_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0037_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0037_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0037_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0037_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0037_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
          "h2dtscpp_compat_array_0037_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0037_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0038_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0038_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0038_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0038_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0038_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0038_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
          "h2dtscpp_compat_array_0038_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0038_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0039_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0039_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0039_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0039_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0039_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0039_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
          "h2dtscpp_compat_array_0039_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0039_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0040_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0040_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0040_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0040_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0040_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0040_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
          "h2dtscpp_compat_array_0040_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0040_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0041_READONLYARRAYOBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0041_READONLYARRAYOBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArrayobject>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0041_readonlyarrayobject', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArrayobject>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0041_readonlyarrayobject convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0041_readonlyarrayobject must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0041_readonlyarrayobject must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArrayobject>",
          "h2dtscpp_compat_array_0041_readonlyarrayobject field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0041_readonlyarrayobject execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0042_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0042_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0042_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0042_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0042_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0042_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object",
          "h2dtscpp_compat_array_0042_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0042_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0043_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0043_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0043_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0043_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0043_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0043_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
          "h2dtscpp_compat_array_0043_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0043_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0044_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0044_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (ReadonlyArray<object>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0044_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0044_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0044_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0044_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>,",
          "h2dtscpp_compat_array_0044_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0044_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0045_READONLYARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0045_READONLYARRAY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<object>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0045_readonlyarray_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'ReadonlyArray<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0045_readonlyarray_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0045_readonlyarray_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0045_readonlyarray_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
          "h2dtscpp_compat_array_0045_readonlyarray_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0045_readonlyarray_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0046_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0046_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0046_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C79', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0046_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0046_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0046_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0046_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0046_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0047_READONLYARRAY_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0047_READONLYARRAY_NUMBR
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); number
   *            keyword misspelled (ReadonlyArray<numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0047_readonlyarray_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArray<numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0047_readonlyarray_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0047_readonlyarray_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0047_readonlyarray_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<numbr>",
          "h2dtscpp_compat_array_0047_readonlyarray_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0047_readonlyarray_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0048_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0048_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0048_readonlyarray_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArray<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0048_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0048_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0048_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>",
          "h2dtscpp_compat_array_0048_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0048_readonlyarray_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0049_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0049_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0049_readonlyarray_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArray<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0049_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0049_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0049_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>",
          "h2dtscpp_compat_array_0049_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0049_readonlyarray_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0050_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0050_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0050_readonlyarray_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArray<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0050_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0050_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0050_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>",
          "h2dtscpp_compat_array_0050_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0050_readonlyarray_number execution error: ${String(err)}`);
    }
  });
});
