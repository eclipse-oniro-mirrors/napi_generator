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

suite('Stability_H2DTSCPP_COMPAT_TUPLE_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_STRNG_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0043_STRNG_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([strng, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0043_strng_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[strng, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0043_strng_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0043_strng_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0043_strng_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[strng, boolean, boolean]",
          "h2dtscpp_compat_tuple_0043_strng_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0043_strng_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_STRING_BOOLEA_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0044_STRING_BOOLEA_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolea, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0044_string_boolea_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolea, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0044_string_boolea_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0044_string_boolea_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0044_string_boolea_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolea, boolea]",
          "h2dtscpp_compat_tuple_0044_string_boolea_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0044_string_boolea_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0045_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0045_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0045_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0045_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0045_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean",
          "h2dtscpp_compat_tuple_0045_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0045_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0046_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0046_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0046_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0046_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0046_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0046_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0046_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0047_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0047_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolean, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0047_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0047_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0047_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean",
          "h2dtscpp_compat_tuple_0047_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0047_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0048_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0048_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0048_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0048_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0048_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0048_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0048_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0049_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0049_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolean, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0049_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0049_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0049_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean],",
          "h2dtscpp_compat_tuple_0049_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0049_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0050_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([string, boolean, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0050_string_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: '[string, boolean, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0050_string_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0050_string_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0050_string_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean]",
          "h2dtscpp_compat_tuple_0050_string_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0050_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0051_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0051_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0051_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C184', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0051_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0051_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0051_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0051_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0051_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0052_BOOLEAN_NUMBR_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0052_BOOLEAN_NUMBR_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, numbr, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0052_boolean_numbr_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolean, numbr, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0052_boolean_numbr_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0052_boolean_numbr_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0052_boolean_numbr_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, numbr, numbr]",
          "h2dtscpp_compat_tuple_0052_boolean_numbr_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0052_boolean_numbr_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0053_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0053_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolean, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0053_boolean_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0053_boolean_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0053_boolean_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number]",
          "h2dtscpp_compat_tuple_0053_boolean_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0053_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_BOOLEA_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0054_BOOLEA_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0054_boolea_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolea, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0054_boolea_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0054_boolea_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0054_boolea_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, number, number]",
          "h2dtscpp_compat_tuple_0054_boolea_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0054_boolea_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0055_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0055_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolean, number, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0055_boolean_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0055_boolean_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0055_boolean_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number",
          "h2dtscpp_compat_tuple_0055_boolean_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0055_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0056_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0056_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolean, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0056_boolean_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0056_boolean_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0056_boolean_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number]",
          "h2dtscpp_compat_tuple_0056_boolean_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0056_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0057_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0057_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolean, number, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0057_boolean_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0057_boolean_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0057_boolean_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number",
          "h2dtscpp_compat_tuple_0057_boolean_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0057_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0058_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0058_boolean_number_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C185', alias: '',
            variableList: [{ type: '[boolean, number, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0058_boolean_number_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0058_boolean_number_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0058_boolean_number_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number]",
          "h2dtscpp_compat_tuple_0058_boolean_number_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0058_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_BOOLEA_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0001_BOOLEA_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, number, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0001_boolea_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolea, number, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0001_boolea_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0001_boolea_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0001_boolea_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, number, boolea]",
          "h2dtscpp_compat_tuple_0001_boolea_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0001_boolea_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0002_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0002_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolean, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0002_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0002_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean",
          "h2dtscpp_compat_tuple_0002_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0002_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0003_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0003_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0003_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0003_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0003_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0003_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0003_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0004_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0004_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolean, number, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0004_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0004_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0004_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean",
          "h2dtscpp_compat_tuple_0004_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0004_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0005_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0005_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0005_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0005_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0005_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0005_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0005_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0006_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0006_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolean, number, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0006_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0006_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0006_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean],",
          "h2dtscpp_compat_tuple_0006_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0006_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0007_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, number, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0007_boolean_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: '[boolean, number, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0007_boolean_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0007_boolean_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0007_boolean_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean]",
          "h2dtscpp_compat_tuple_0007_boolean_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0007_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0008_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0008_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C187', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0008_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0008_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0008_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0008_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0008_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_BOOLEAN_STRING_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0009_BOOLEAN_STRING_NUMBR
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); number
   *            keyword misspelled ([boolean, string, numbr]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0009_boolean_string_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, numbr]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0009_boolean_string_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0009_boolean_string_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0009_boolean_string_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, numbr]",
          "h2dtscpp_compat_tuple_0009_boolean_string_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0009_boolean_string_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_BOOLEAN_STRNG_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0010_BOOLEAN_STRNG_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, strng, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0010_boolean_strng_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, strng, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0010_boolean_strng_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0010_boolean_strng_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0010_boolean_strng_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, strng, number]",
          "h2dtscpp_compat_tuple_0010_boolean_strng_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0010_boolean_strng_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_BOOLEA_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0011_BOOLEA_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0011_boolea_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolea, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0011_boolea_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0011_boolea_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0011_boolea_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, string, number]",
          "h2dtscpp_compat_tuple_0011_boolea_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0011_boolea_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0012_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0012_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0012_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0012_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0012_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number",
          "h2dtscpp_compat_tuple_0012_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0012_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0013_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0013_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0013_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0013_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0013_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number]",
          "h2dtscpp_compat_tuple_0013_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0013_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0014_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, number); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0014_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0014_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0014_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0014_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number",
          "h2dtscpp_compat_tuple_0014_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0014_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0015_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0015_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0015_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0015_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0015_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number]",
          "h2dtscpp_compat_tuple_0015_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0015_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0016_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, number],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0016_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, number],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0016_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0016_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0016_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number],",
          "h2dtscpp_compat_tuple_0016_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0016_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0017_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, number]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0017_boolean_string_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: '[boolean, string, number]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0017_boolean_string_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0017_boolean_string_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0017_boolean_string_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number]",
          "h2dtscpp_compat_tuple_0017_boolean_string_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0017_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0018_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0018_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C188', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0018_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0018_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0018_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0018_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0018_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0019_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0019_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0019_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0019_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0019_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string]",
          "h2dtscpp_compat_tuple_0019_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0019_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_BOOLEAN_STRNG_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0020_BOOLEAN_STRNG_STRNG
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, strng, strng]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0020_boolean_strng_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, strng, strng]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0020_boolean_strng_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0020_boolean_strng_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0020_boolean_strng_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, strng, strng]",
          "h2dtscpp_compat_tuple_0020_boolean_strng_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0020_boolean_strng_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_BOOLEA_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0021_BOOLEA_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0021_boolea_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolea, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0021_boolea_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0021_boolea_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0021_boolea_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, string, string]",
          "h2dtscpp_compat_tuple_0021_boolea_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0021_boolea_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0022_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0022_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0022_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0022_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0022_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string",
          "h2dtscpp_compat_tuple_0022_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0022_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0023_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0023_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0023_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0023_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0023_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string]",
          "h2dtscpp_compat_tuple_0023_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0023_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0024_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0024_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0024_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0024_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0024_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string",
          "h2dtscpp_compat_tuple_0024_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0024_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0025_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0025_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0025_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0025_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0025_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string]",
          "h2dtscpp_compat_tuple_0025_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0025_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0026_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0026_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0026_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0026_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0026_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string],",
          "h2dtscpp_compat_tuple_0026_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0026_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0027_BOOLEAN_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, string]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0027_boolean_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: '[boolean, string, string]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0027_boolean_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0027_boolean_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0027_boolean_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string]",
          "h2dtscpp_compat_tuple_0027_boolean_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0027_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0028_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0028_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C189', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0028_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0028_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0028_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0028_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0028_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0029_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0029_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0029_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0029_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0029_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0029_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0029_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_BOOLEAN_STRNG_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0030_BOOLEAN_STRNG_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); string
   *            keyword misspelled ([boolean, strng, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0030_boolean_strng_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, strng, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0030_boolean_strng_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0030_boolean_strng_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0030_boolean_strng_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, strng, boolean]",
          "h2dtscpp_compat_tuple_0030_boolean_strng_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0030_boolean_strng_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_BOOLEA_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0031_BOOLEA_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolea, string, boolea]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0031_boolea_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolea, string, boolea]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0031_boolea_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0031_boolea_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0031_boolea_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolea, string, boolea]",
          "h2dtscpp_compat_tuple_0031_boolea_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0031_boolea_string_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0032_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0032_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0032_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0032_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0032_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean",
          "h2dtscpp_compat_tuple_0032_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0032_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0033_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0033_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0033_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0033_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0033_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0033_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0033_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0034_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0034_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0034_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0034_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0034_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean",
          "h2dtscpp_compat_tuple_0034_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0034_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0035_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0035_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0035_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0035_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0035_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0035_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0035_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0036_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0036_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0036_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0036_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0036_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean],",
          "h2dtscpp_compat_tuple_0036_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0036_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0037_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ([boolean, string, boolean]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0037_boolean_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: '[boolean, string, boolean]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0037_boolean_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0037_boolean_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0037_boolean_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean]",
          "h2dtscpp_compat_tuple_0037_boolean_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0037_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_TUPLE_0038_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/tuple: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_tuple_0038_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C190', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_tuple_0038_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_tuple_0038_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_tuple_0038_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_tuple_0038_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_tuple_0038_invalidtypexyz execution error: ${String(err)}`);
    }
  });
});
