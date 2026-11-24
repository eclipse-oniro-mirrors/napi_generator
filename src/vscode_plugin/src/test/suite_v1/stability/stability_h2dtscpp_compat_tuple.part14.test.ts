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

suite('Stability_H2DTSCPP_COMPAT_TUPLE_Part14', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_STRING_BOOLEA_BOOLEA_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_STRING_BOOLEA_BOOLEA_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolea, boolea, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0007_string_boolea_boolea_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolea, boolea, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0007_string_boolea_boolea_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0007_string_boolea_boolea_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0007_string_boolea_boolea_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolea, boolea, string]",
          "h2dtscpp_compat_tuple_0007_string_boolea_boolea_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0007_string_boolea_boolea_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0008_string_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolean, boolean, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0008_string_boolean_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0008_string_boolean_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0008_string_boolean_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string",
          "h2dtscpp_compat_tuple_0008_string_boolean_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0008_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0009_string_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolean, boolean, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0009_string_boolean_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0009_string_boolean_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0009_string_boolean_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string]",
          "h2dtscpp_compat_tuple_0009_string_boolean_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0009_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0010_string_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolean, boolean, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0010_string_boolean_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0010_string_boolean_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0010_string_boolean_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string",
          "h2dtscpp_compat_tuple_0010_string_boolean_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0010_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0011_string_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolean, boolean, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0011_string_boolean_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0011_string_boolean_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0011_string_boolean_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string]",
          "h2dtscpp_compat_tuple_0011_string_boolean_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0011_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0012_string_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolean, boolean, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0012_string_boolean_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0012_string_boolean_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0012_string_boolean_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string],",
          "h2dtscpp_compat_tuple_0012_string_boolean_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0012_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0013_string_boolean_boolean_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: '[string, boolean, boolean, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0013_string_boolean_boolean_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0013_string_boolean_boolean_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0013_string_boolean_boolean_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string]",
          "h2dtscpp_compat_tuple_0013_string_boolean_boolean_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0013_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0014_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C246', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0014_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0014_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0014_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0014_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0014_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0015_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0015_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0015_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0015_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
          "h2dtscpp_compat_tuple_0015_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0015_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_STRNG_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_STRNG_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, boolean, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0016_strng_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[strng, boolean, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0016_strng_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0016_strng_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0016_strng_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, boolean, boolean, boolean]",
          "h2dtscpp_compat_tuple_0016_strng_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0016_strng_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_STRING_BOOLEA_BOOLEA_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_STRING_BOOLEA_BOOLEA_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolea, boolea, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0017_string_boolea_boolea_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolea, boolea, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0017_string_boolea_boolea_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0017_string_boolea_boolea_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0017_string_boolea_boolea_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolea, boolea, boolea]",
          "h2dtscpp_compat_tuple_0017_string_boolea_boolea_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0017_string_boolea_boolea_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0018_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0018_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0018_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0018_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean",
          "h2dtscpp_compat_tuple_0018_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0018_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0019_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0019_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0019_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0019_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
          "h2dtscpp_compat_tuple_0019_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0019_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0020_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0020_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0020_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0020_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean",
          "h2dtscpp_compat_tuple_0020_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0020_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0021_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0021_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0021_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0021_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
          "h2dtscpp_compat_tuple_0021_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0021_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0022_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0022_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0022_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0022_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean],",
          "h2dtscpp_compat_tuple_0022_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0022_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0023_string_boolean_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: '[string, boolean, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0023_string_boolean_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0023_string_boolean_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0023_string_boolean_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
          "h2dtscpp_compat_tuple_0023_string_boolean_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0023_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0024_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C247', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0024_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0024_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0024_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0024_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0024_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_BOOLEAN_NUMBR_NUMBR_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_BOOLEAN_NUMBR_NUMBR_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, numbr, numbr, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0025_boolean_numbr_numbr_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, numbr, numbr, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0025_boolean_numbr_numbr_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0025_boolean_numbr_numbr_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0025_boolean_numbr_numbr_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, numbr, numbr, numbr]",
          "h2dtscpp_compat_tuple_0025_boolean_numbr_numbr_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0025_boolean_numbr_numbr_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0026_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0026_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0026_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0026_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
          "h2dtscpp_compat_tuple_0026_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0026_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_BOOLEA_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_BOOLEA_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, number, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0027_boolea_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolea, number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0027_boolea_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0027_boolea_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0027_boolea_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, number, number, number]",
          "h2dtscpp_compat_tuple_0027_boolea_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0027_boolea_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0028_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0028_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0028_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0028_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number",
          "h2dtscpp_compat_tuple_0028_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0028_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0029_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0029_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0029_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0029_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
          "h2dtscpp_compat_tuple_0029_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0029_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0030_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0030_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0030_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0030_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number",
          "h2dtscpp_compat_tuple_0030_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0030_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0031_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0031_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0031_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0031_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
          "h2dtscpp_compat_tuple_0031_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0031_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0032_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0032_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0032_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0032_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number],",
          "h2dtscpp_compat_tuple_0032_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0032_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0033_boolean_number_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: '[boolean, number, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0033_boolean_number_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0033_boolean_number_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0033_boolean_number_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
          "h2dtscpp_compat_tuple_0033_boolean_number_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0033_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0034_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C248', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0034_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0034_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0034_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0034_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0034_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_BOOLEAN_NUMBR_NUMBR_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_BOOLEAN_NUMBR_NUMBR_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, numbr, numbr, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0035_boolean_numbr_numbr_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, numbr, numbr, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0035_boolean_numbr_numbr_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0035_boolean_numbr_numbr_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0035_boolean_numbr_numbr_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, numbr, numbr, string]",
          "h2dtscpp_compat_tuple_0035_boolean_numbr_numbr_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0035_boolean_numbr_numbr_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_BOOLEAN_NUMBER_NUMBER_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_BOOLEAN_NUMBER_NUMBER_STRNG
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, number, number, strng]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0036_boolean_number_number_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, strng]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0036_boolean_number_number_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0036_boolean_number_number_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0036_boolean_number_number_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, strng]",
          "h2dtscpp_compat_tuple_0036_boolean_number_number_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0036_boolean_number_number_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_BOOLEA_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_BOOLEA_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, number, number, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0037_boolea_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolea, number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0037_boolea_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0037_boolea_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0037_boolea_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, number, number, string]",
          "h2dtscpp_compat_tuple_0037_boolea_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0037_boolea_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0038_boolean_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0038_boolean_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0038_boolean_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0038_boolean_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string",
          "h2dtscpp_compat_tuple_0038_boolean_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0038_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0039_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0039_boolean_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0039_boolean_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0039_boolean_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0039_boolean_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
          "h2dtscpp_compat_tuple_0039_boolean_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0039_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0040_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0040_boolean_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0040_boolean_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0040_boolean_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0040_boolean_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string",
          "h2dtscpp_compat_tuple_0040_boolean_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0040_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0041_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0041_boolean_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0041_boolean_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0041_boolean_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0041_boolean_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
          "h2dtscpp_compat_tuple_0041_boolean_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0041_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0042_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0042_boolean_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0042_boolean_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0042_boolean_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0042_boolean_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string],",
          "h2dtscpp_compat_tuple_0042_boolean_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0042_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0043_boolean_number_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: '[boolean, number, number, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0043_boolean_number_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0043_boolean_number_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0043_boolean_number_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
          "h2dtscpp_compat_tuple_0043_boolean_number_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0043_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0044_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C249', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0044_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0044_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0044_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0044_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0044_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_BOOLEAN_NUMBR_NUMBR_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_BOOLEAN_NUMBR_NUMBR_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, numbr, numbr, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0045_boolean_numbr_numbr_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, numbr, numbr, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0045_boolean_numbr_numbr_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0045_boolean_numbr_numbr_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0045_boolean_numbr_numbr_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, numbr, numbr, boolean]",
          "h2dtscpp_compat_tuple_0045_boolean_numbr_numbr_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0045_boolean_numbr_numbr_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0046_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0046_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0046_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0046_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
          "h2dtscpp_compat_tuple_0046_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0046_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_BOOLEA_NUMBER_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_BOOLEA_NUMBER_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, number, number, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0047_boolea_number_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolea, number, number, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0047_boolea_number_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0047_boolea_number_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0047_boolea_number_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, number, number, boolea]",
          "h2dtscpp_compat_tuple_0047_boolea_number_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0047_boolea_number_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0048_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0048_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0048_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0048_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean",
          "h2dtscpp_compat_tuple_0048_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0048_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0049_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0049_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0049_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0049_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
          "h2dtscpp_compat_tuple_0049_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0049_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0050_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0050_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0050_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0050_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean",
          "h2dtscpp_compat_tuple_0050_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0050_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0051_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0051_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0051_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0051_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0051_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0051_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
          "h2dtscpp_compat_tuple_0051_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0051_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0052_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0052_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0052_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0052_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0052_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0052_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean],",
          "h2dtscpp_compat_tuple_0052_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0052_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0053_boolean_number_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: '[boolean, number, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0053_boolean_number_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0053_boolean_number_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0053_boolean_number_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
          "h2dtscpp_compat_tuple_0053_boolean_number_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0053_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0054_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C250', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0054_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0054_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0054_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0054_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0054_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_BOOLEAN_NUMBR_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_BOOLEAN_NUMBR_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, numbr, string, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0055_boolean_numbr_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C251', alias: '',
            variableList: [{ type: '[boolean, numbr, string, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0055_boolean_numbr_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0055_boolean_numbr_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0055_boolean_numbr_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, numbr, string, numbr]",
          "h2dtscpp_compat_tuple_0055_boolean_numbr_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0055_boolean_numbr_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_BOOLEAN_NUMBER_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_BOOLEAN_NUMBER_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, number, strng, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0056_boolean_number_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C251', alias: '',
            variableList: [{ type: '[boolean, number, strng, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0056_boolean_number_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0056_boolean_number_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0056_boolean_number_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, strng, number]",
          "h2dtscpp_compat_tuple_0056_boolean_number_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0056_boolean_number_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_BOOLEA_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_BOOLEA_NUMBER_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, number, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0057_boolea_number_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C251', alias: '',
            variableList: [{ type: '[boolea, number, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0057_boolea_number_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0057_boolea_number_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0057_boolea_number_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, number, string, number]",
          "h2dtscpp_compat_tuple_0057_boolea_number_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0057_boolea_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, string, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0058_boolean_number_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C251', alias: '',
            variableList: [{ type: '[boolean, number, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0058_boolean_number_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0058_boolean_number_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0058_boolean_number_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, number",
          "h2dtscpp_compat_tuple_0058_boolean_number_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0058_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0001_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C252', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0001_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0001_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0001_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0001_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0001_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_NUMBR_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_NUMBR_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, numbr, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0002_boolean_numbr_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C253', alias: '',
            variableList: [{ type: '[boolean, numbr, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0002_boolean_numbr_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_numbr_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_numbr_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, numbr, string, boolean]",
          "h2dtscpp_compat_tuple_0002_boolean_numbr_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0002_boolean_numbr_string_boolean execution error: ${String(err)}`);
    }
  });
});
