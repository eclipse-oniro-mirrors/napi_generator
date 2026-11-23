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

suite('Stability_H2DTSCPP_COMPAT_TUPLE_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0055_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: '[string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0055_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0055_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0055_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean]",
          "h2dtscpp_compat_tuple_0055_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0055_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0056_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: '[string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0056_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0056_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0056_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean",
          "h2dtscpp_compat_tuple_0056_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0056_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0057_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: '[string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0057_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0057_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0057_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean]",
          "h2dtscpp_compat_tuple_0057_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0057_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0058_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C163', alias: '',
            variableList: [{ type: '[string, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0058_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0058_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0058_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean],",
          "h2dtscpp_compat_tuple_0058_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0058_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0001_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: '[boolean, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0001_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0001_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0001_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string",
          "h2dtscpp_compat_tuple_0001_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0001_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0002_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: '[boolean, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0002_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string]",
          "h2dtscpp_compat_tuple_0002_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0002_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0003_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: '[boolean, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0003_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0003_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0003_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string",
          "h2dtscpp_compat_tuple_0003_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0003_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0004_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: '[boolean, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0004_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0004_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0004_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string]",
          "h2dtscpp_compat_tuple_0004_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0004_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0005_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: '[boolean, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0005_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0005_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0005_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string],",
          "h2dtscpp_compat_tuple_0005_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0005_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0006_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: '[boolean, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0006_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0006_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0006_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string]",
          "h2dtscpp_compat_tuple_0006_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0006_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0007_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C165', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0007_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0007_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0007_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0007_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0007_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0008_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0008_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0008_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0008_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
          "h2dtscpp_compat_tuple_0008_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0008_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0009_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0009_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0009_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0009_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
          "h2dtscpp_compat_tuple_0009_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0009_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_BOOLEA_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_BOOLEA_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0010_boolea_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolea, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0010_boolea_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0010_boolea_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0010_boolea_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, boolea]",
          "h2dtscpp_compat_tuple_0010_boolea_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0010_boolea_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0011_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0011_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0011_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0011_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean",
          "h2dtscpp_compat_tuple_0011_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0011_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0012_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0012_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0012_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0012_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
          "h2dtscpp_compat_tuple_0012_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0012_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0013_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0013_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0013_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0013_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean",
          "h2dtscpp_compat_tuple_0013_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0013_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0014_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0014_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0014_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0014_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
          "h2dtscpp_compat_tuple_0014_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0014_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0015_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0015_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0015_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0015_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean],",
          "h2dtscpp_compat_tuple_0015_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0015_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0016_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: '[boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0016_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0016_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0016_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
          "h2dtscpp_compat_tuple_0016_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0016_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0017_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C166', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0017_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0017_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0017_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0017_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0017_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_NUMBR_NUMBR_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_NUMBR_NUMBR_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([numbr, numbr, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0018_numbr_numbr_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[numbr, numbr, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0018_numbr_numbr_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0018_numbr_numbr_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0018_numbr_numbr_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[numbr, numbr, numbr]",
          "h2dtscpp_compat_tuple_0018_numbr_numbr_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0018_numbr_numbr_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0019_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0019_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0019_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0019_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
          "h2dtscpp_compat_tuple_0019_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0019_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0020_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0020_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0020_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0020_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
          "h2dtscpp_compat_tuple_0020_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0020_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0021_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0021_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0021_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0021_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number",
          "h2dtscpp_compat_tuple_0021_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0021_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0022_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0022_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0022_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0022_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
          "h2dtscpp_compat_tuple_0022_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0022_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0023_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0023_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0023_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0023_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number",
          "h2dtscpp_compat_tuple_0023_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0023_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0024_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0024_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0024_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0024_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
          "h2dtscpp_compat_tuple_0024_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0024_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); trailing
   *            comma on type ([number, number, number],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0025_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0025_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0025_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0025_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number],",
          "h2dtscpp_compat_tuple_0025_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0025_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0026_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: '[number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0026_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0026_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0026_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
          "h2dtscpp_compat_tuple_0026_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0026_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0027_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C167', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0027_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0027_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0027_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0027_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0027_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_NUMBR_NUMBR_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_NUMBR_NUMBR_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([numbr, numbr, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0028_numbr_numbr_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[numbr, numbr, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0028_numbr_numbr_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0028_numbr_numbr_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0028_numbr_numbr_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[numbr, numbr, string]",
          "h2dtscpp_compat_tuple_0028_numbr_numbr_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0028_numbr_numbr_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_NUMBER_NUMBER_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_NUMBER_NUMBER_STRNG
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([number, number, strng]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0029_number_number_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, strng]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0029_number_number_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0029_number_number_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0029_number_number_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, strng]",
          "h2dtscpp_compat_tuple_0029_number_number_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0029_number_number_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0030_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0030_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0030_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0030_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
          "h2dtscpp_compat_tuple_0030_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0030_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0031_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0031_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0031_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0031_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string",
          "h2dtscpp_compat_tuple_0031_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0031_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0032_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0032_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0032_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0032_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
          "h2dtscpp_compat_tuple_0032_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0032_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0033_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0033_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0033_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0033_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string",
          "h2dtscpp_compat_tuple_0033_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0033_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0034_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0034_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0034_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0034_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
          "h2dtscpp_compat_tuple_0034_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0034_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); trailing
   *            comma on type ([number, number, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0035_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0035_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0035_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0035_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string],",
          "h2dtscpp_compat_tuple_0035_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0035_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, number, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0036_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: '[number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0036_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0036_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0036_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
          "h2dtscpp_compat_tuple_0036_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0036_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0037_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C168', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0037_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0037_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0037_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0037_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0037_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_NUMBR_NUMBR_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_NUMBR_NUMBR_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([numbr, numbr, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0038_numbr_numbr_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[numbr, numbr, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0038_numbr_numbr_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0038_numbr_numbr_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0038_numbr_numbr_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[numbr, numbr, boolean]",
          "h2dtscpp_compat_tuple_0038_numbr_numbr_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0038_numbr_numbr_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0039_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0039_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0039_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0039_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean]",
          "h2dtscpp_compat_tuple_0039_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0039_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_NUMBER_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_NUMBER_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0040_number_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0040_number_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0040_number_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0040_number_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolea]",
          "h2dtscpp_compat_tuple_0040_number_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0040_number_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0041_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0041_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0041_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0041_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean",
          "h2dtscpp_compat_tuple_0041_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0041_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0042_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0042_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0042_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0042_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean]",
          "h2dtscpp_compat_tuple_0042_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0042_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0043_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0043_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0043_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0043_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean",
          "h2dtscpp_compat_tuple_0043_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0043_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0044_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0044_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0044_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0044_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean]",
          "h2dtscpp_compat_tuple_0044_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0044_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0045_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0045_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0045_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0045_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean],",
          "h2dtscpp_compat_tuple_0045_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0045_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0046_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: '[number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0046_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0046_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0046_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean]",
          "h2dtscpp_compat_tuple_0046_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0046_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0047_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C169', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0047_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0047_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0047_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0047_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0047_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_NUMBR_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_NUMBR_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([numbr, string, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0048_numbr_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C170', alias: '',
            variableList: [{ type: '[numbr, string, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0048_numbr_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0048_numbr_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0048_numbr_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[numbr, string, numbr]",
          "h2dtscpp_compat_tuple_0048_numbr_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0048_numbr_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_NUMBER_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_NUMBER_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([number, strng, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0049_number_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C170', alias: '',
            variableList: [{ type: '[number, strng, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0049_number_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0049_number_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0049_number_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, strng, number]",
          "h2dtscpp_compat_tuple_0049_number_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0049_number_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_NUMBER_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [number, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0050_number_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C170', alias: '',
            variableList: [{ type: '[number, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0050_number_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0050_number_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0050_number_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number]",
          "h2dtscpp_compat_tuple_0050_number_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0050_number_string_number execution error: ${String(err)}`);
    }
  });
});
