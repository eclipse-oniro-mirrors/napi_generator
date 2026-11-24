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

suite('Stability_H2DTSCPP_COMPAT_ARRAY_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0051_READONLYARRAYNUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0051_READONLYARRAYNUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArraynumber>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0051_readonlyarraynumber', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArraynumber>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0051_readonlyarraynumber convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0051_readonlyarraynumber must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0051_readonlyarraynumber must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArraynumber>",
          "h2dtscpp_compat_array_0051_readonlyarraynumber field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0051_readonlyarraynumber execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0052_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0052_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0052_readonlyarray_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArray<number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0052_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0052_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0052_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number",
          "h2dtscpp_compat_array_0052_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0052_readonlyarray_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0053_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0053_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0053_readonlyarray_number', function() {
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
          "h2dtscpp_compat_array_0053_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0053_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0053_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>",
          "h2dtscpp_compat_array_0053_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0053_readonlyarray_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0054_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0054_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (ReadonlyArray<number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0054_readonlyarray_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'ReadonlyArray<number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0054_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0054_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0054_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>,",
          "h2dtscpp_compat_array_0054_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0054_readonlyarray_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0055_READONLYARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0055_READONLYARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0055_readonlyarray_number', function() {
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
          "h2dtscpp_compat_array_0055_readonlyarray_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0055_readonlyarray_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0055_readonlyarray_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>",
          "h2dtscpp_compat_array_0055_readonlyarray_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0055_readonlyarray_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0056_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0056_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0056_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C301', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0056_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0056_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0056_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0056_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0056_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0057_READONLYARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0057_READONLYARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type ReadonlyArray<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0057_readonlyarray_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C302', alias: '',
            variableList: [{ type: 'ReadonlyArray<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0057_readonlyarray_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0057_readonlyarray_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0057_readonlyarray_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<string>",
          "h2dtscpp_compat_array_0057_readonlyarray_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0057_readonlyarray_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0058_READONLYARRAY_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0058_READONLYARRAY_STRNG
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (ReadonlyArray<strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0058_readonlyarray_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C302', alias: '',
            variableList: [{ type: 'ReadonlyArray<strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0058_readonlyarray_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0058_readonlyarray_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0058_readonlyarray_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<strng>",
          "h2dtscpp_compat_array_0058_readonlyarray_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0058_readonlyarray_strng execution error: ${String(err)}`);
    }
  });
});
