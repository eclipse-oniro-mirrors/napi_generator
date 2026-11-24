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

suite('Stability_H2DTSCPP_COMPAT_TUPLE_Part12', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0015_string_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C232', alias: '',
            variableList: [{ type: '[string, string, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0015_string_string_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0015_string_string_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0015_string_string_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean]",
          "h2dtscpp_compat_tuple_0015_string_string_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0015_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0016_string_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C232', alias: '',
            variableList: [{ type: '[string, string, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0016_string_string_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0016_string_string_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0016_string_string_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean",
          "h2dtscpp_compat_tuple_0016_string_string_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0016_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0017_string_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C232', alias: '',
            variableList: [{ type: '[string, string, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0017_string_string_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0017_string_string_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0017_string_string_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean]",
          "h2dtscpp_compat_tuple_0017_string_string_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0017_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, number, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0018_string_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C232', alias: '',
            variableList: [{ type: '[string, string, number, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0018_string_string_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0018_string_string_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0018_string_string_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean],",
          "h2dtscpp_compat_tuple_0018_string_string_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0018_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0019_string_string_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C232', alias: '',
            variableList: [{ type: '[string, string, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0019_string_string_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0019_string_string_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0019_string_string_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean]",
          "h2dtscpp_compat_tuple_0019_string_string_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0019_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0020_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C232', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0020_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0020_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0020_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0020_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0020_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_STRING_STRING_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_STRING_STRING_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([string, string, string, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0021_string_string_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0021_string_string_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0021_string_string_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0021_string_string_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, numbr]",
          "h2dtscpp_compat_tuple_0021_string_string_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0021_string_string_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_STRNG_STRNG_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_STRNG_STRNG_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, strng, strng, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0022_strng_strng_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[strng, strng, strng, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0022_strng_strng_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0022_strng_strng_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0022_strng_strng_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, strng, strng, number]",
          "h2dtscpp_compat_tuple_0022_strng_strng_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0022_strng_strng_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0023_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0023_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0023_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0023_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number]",
          "h2dtscpp_compat_tuple_0023_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0023_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0024_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0024_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0024_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0024_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number",
          "h2dtscpp_compat_tuple_0024_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0024_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0025_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0025_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0025_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0025_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number]",
          "h2dtscpp_compat_tuple_0025_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0025_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0026_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0026_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0026_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0026_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number",
          "h2dtscpp_compat_tuple_0026_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0026_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0027_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0027_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0027_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0027_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number]",
          "h2dtscpp_compat_tuple_0027_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0027_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); trailing
   *            comma on type ([string, string, string, number],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0028_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0028_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0028_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0028_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number],",
          "h2dtscpp_compat_tuple_0028_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0028_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, number]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0029_string_string_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: '[string, string, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0029_string_string_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0029_string_string_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0029_string_string_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number]",
          "h2dtscpp_compat_tuple_0029_string_string_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0029_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0030_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C233', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0030_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0030_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0030_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0030_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0030_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0031_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0031_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0031_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0031_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
          "h2dtscpp_compat_tuple_0031_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0031_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_STRNG_STRNG_STRNG_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_STRNG_STRNG_STRNG_STRNG
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, strng, strng, strng]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0032_strng_strng_strng_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[strng, strng, strng, strng]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0032_strng_strng_strng_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0032_strng_strng_strng_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0032_strng_strng_strng_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, strng, strng, strng]",
          "h2dtscpp_compat_tuple_0032_strng_strng_strng_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0032_strng_strng_strng_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0033_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0033_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0033_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0033_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
          "h2dtscpp_compat_tuple_0033_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0033_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0034_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0034_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0034_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0034_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string",
          "h2dtscpp_compat_tuple_0034_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0034_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0035_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0035_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0035_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0035_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
          "h2dtscpp_compat_tuple_0035_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0035_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0036_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0036_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0036_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0036_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string",
          "h2dtscpp_compat_tuple_0036_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0036_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0037_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0037_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0037_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0037_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
          "h2dtscpp_compat_tuple_0037_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0037_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); trailing
   *            comma on type ([string, string, string, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0038_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0038_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0038_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0038_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string],",
          "h2dtscpp_compat_tuple_0038_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0038_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_STRING_STRING_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type [string, string, string, string]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0039_string_string_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: '[string, string, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0039_string_string_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0039_string_string_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0039_string_string_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
          "h2dtscpp_compat_tuple_0039_string_string_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0039_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0040_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C234', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0040_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0040_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0040_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0040_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0040_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0041_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0041_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0041_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0041_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
          "h2dtscpp_compat_tuple_0041_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0041_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_STRNG_STRNG_STRNG_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_STRNG_STRNG_STRNG_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, strng, strng, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0042_strng_strng_strng_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[strng, strng, strng, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0042_strng_strng_strng_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0042_strng_strng_strng_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0042_strng_strng_strng_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, strng, strng, boolean]",
          "h2dtscpp_compat_tuple_0042_strng_strng_strng_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0042_strng_strng_strng_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_STRING_STRING_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_STRING_STRING_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0043_string_string_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0043_string_string_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0043_string_string_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0043_string_string_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolea]",
          "h2dtscpp_compat_tuple_0043_string_string_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0043_string_string_string_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0044_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0044_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0044_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0044_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean",
          "h2dtscpp_compat_tuple_0044_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0044_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0045_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0045_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0045_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0045_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
          "h2dtscpp_compat_tuple_0045_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0045_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0046_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0046_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0046_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0046_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean",
          "h2dtscpp_compat_tuple_0046_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0046_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0047_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0047_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0047_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0047_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
          "h2dtscpp_compat_tuple_0047_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0047_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0048_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0048_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0048_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0048_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean],",
          "h2dtscpp_compat_tuple_0048_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0048_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0049_string_string_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: '[string, string, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0049_string_string_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0049_string_string_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0049_string_string_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
          "h2dtscpp_compat_tuple_0049_string_string_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0049_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0050_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C235', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0050_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0050_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0050_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0050_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0050_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0051_STRING_STRING_BOOLEAN_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0051_STRING_STRING_BOOLEAN_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([string, string, boolean, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0051_string_string_boolean_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolean, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0051_string_string_boolean_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0051_string_string_boolean_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0051_string_string_boolean_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, numbr]",
          "h2dtscpp_compat_tuple_0051_string_string_boolean_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0051_string_string_boolean_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0052_STRNG_STRNG_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0052_STRNG_STRNG_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, strng, boolean, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0052_strng_strng_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[strng, strng, boolean, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0052_strng_strng_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0052_strng_strng_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0052_strng_strng_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, strng, boolean, number]",
          "h2dtscpp_compat_tuple_0052_strng_strng_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0052_strng_strng_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_STRING_STRING_BOOLEA_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_STRING_STRING_BOOLEA_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolea, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0053_string_string_boolea_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolea, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0053_string_string_boolea_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0053_string_string_boolea_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0053_string_string_boolea_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolea, number]",
          "h2dtscpp_compat_tuple_0053_string_string_boolea_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0053_string_string_boolea_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0054_string_string_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolean, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0054_string_string_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0054_string_string_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0054_string_string_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number",
          "h2dtscpp_compat_tuple_0054_string_string_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0054_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0055_string_string_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolean, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0055_string_string_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0055_string_string_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0055_string_string_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number]",
          "h2dtscpp_compat_tuple_0055_string_string_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0055_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0056_string_string_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolean, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0056_string_string_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0056_string_string_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0056_string_string_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number",
          "h2dtscpp_compat_tuple_0056_string_string_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0056_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0057_string_string_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolean, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0057_string_string_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0057_string_string_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0057_string_string_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number]",
          "h2dtscpp_compat_tuple_0057_string_string_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0057_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, number],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0058_string_string_boolean_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C236', alias: '',
            variableList: [{ type: '[string, string, boolean, number],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0058_string_string_boolean_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0058_string_string_boolean_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0058_string_string_boolean_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number],",
          "h2dtscpp_compat_tuple_0058_string_string_boolean_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0058_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0001_string_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: '[string, string, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0001_string_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0001_string_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0001_string_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean",
          "h2dtscpp_compat_tuple_0001_string_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0001_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0002_string_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: '[string, string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0002_string_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0002_string_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0002_string_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0002_string_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0002_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0003_string_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: '[string, string, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0003_string_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0003_string_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0003_string_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean",
          "h2dtscpp_compat_tuple_0003_string_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0003_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0004_string_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: '[string, string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0004_string_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0004_string_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0004_string_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0004_string_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0004_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0005_string_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: '[string, string, boolean, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0005_string_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0005_string_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0005_string_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean],",
          "h2dtscpp_compat_tuple_0005_string_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0005_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0006_string_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: '[string, string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0006_string_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0006_string_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0006_string_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0006_string_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0006_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0007_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C238', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0007_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0007_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0007_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0007_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0007_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_STRING_BOOLEAN_NUMBR_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_STRING_BOOLEAN_NUMBR_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([string, boolean, numbr, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0008_string_boolean_numbr_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C239', alias: '',
            variableList: [{ type: '[string, boolean, numbr, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0008_string_boolean_numbr_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0008_string_boolean_numbr_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0008_string_boolean_numbr_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, numbr, numbr]",
          "h2dtscpp_compat_tuple_0008_string_boolean_numbr_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0008_string_boolean_numbr_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_STRNG_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_STRNG_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, boolean, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0009_strng_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C239', alias: '',
            variableList: [{ type: '[strng, boolean, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0009_strng_boolean_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0009_strng_boolean_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0009_strng_boolean_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, boolean, number, number]",
          "h2dtscpp_compat_tuple_0009_strng_boolean_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0009_strng_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_STRING_BOOLEA_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_STRING_BOOLEA_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolea, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0010_string_boolea_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C239', alias: '',
            variableList: [{ type: '[string, boolea, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0010_string_boolea_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0010_string_boolea_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0010_string_boolea_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolea, number, number]",
          "h2dtscpp_compat_tuple_0010_string_boolea_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0010_string_boolea_number_number execution error: ${String(err)}`);
    }
  });
});
