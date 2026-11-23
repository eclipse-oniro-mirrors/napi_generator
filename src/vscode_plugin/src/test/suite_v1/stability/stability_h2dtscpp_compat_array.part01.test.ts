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

suite('Stability_H2DTSCPP_COMPAT_ARRAY_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0001_ARRAY_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0001_ARRAY_NUMBR
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); number
   *            keyword misspelled (Array<numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0001_array_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0001_array_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0001_array_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0001_array_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<numbr>",
          "h2dtscpp_compat_array_0001_array_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0001_array_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0002_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0002_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0002_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0002_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0002_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0002_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0002_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0002_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0003_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0003_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0003_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0003_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0003_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0003_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0003_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0003_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0004_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0004_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0004_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0004_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0004_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0004_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0004_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0004_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0005_ARRAYNUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0005_ARRAYNUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Arraynumber>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0005_arraynumber', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Arraynumber>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0005_arraynumber convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0005_arraynumber must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0005_arraynumber must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Arraynumber>",
          "h2dtscpp_compat_array_0005_arraynumber field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0005_arraynumber execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0006_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0006_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0006_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0006_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0006_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0006_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<number",
          "h2dtscpp_compat_array_0006_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0006_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0007_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0007_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0007_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0007_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0007_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0007_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0007_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0007_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0008_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0008_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (Array<number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0008_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0008_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0008_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0008_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<number>,",
          "h2dtscpp_compat_array_0008_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0008_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0009_ARRAY_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0009_ARRAY_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0009_array_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'Array<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0009_array_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0009_array_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0009_array_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0009_array_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0009_array_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0010_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0010_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0010_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C5', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0010_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0010_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0010_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0010_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0010_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0011_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0011_NUMBR
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); number[]
   *            misspelled to numbr[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0011_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'numbr[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0011_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0011_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0011_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "numbr[]",
          "h2dtscpp_compat_array_0011_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0011_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0012_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0012_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0012_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0012_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0012_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0012_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0012_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0012_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0013_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0013_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0013_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0013_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0013_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0013_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0013_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0013_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0014_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0014_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0014_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0014_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0014_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0014_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "number[",
          "h2dtscpp_compat_array_0014_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0014_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0015_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0015_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0015_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0015_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0015_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0015_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0015_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0015_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0016_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0016_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0016_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0016_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0016_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0016_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "number[",
          "h2dtscpp_compat_array_0016_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0016_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0017_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0017_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0017_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0017_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0017_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0017_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0017_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0017_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0018_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0018_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (number[],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0018_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0018_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0018_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0018_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "number[],",
          "h2dtscpp_compat_array_0018_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0018_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0019_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0019_NUMBER
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type number[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0019_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'number[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0019_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0019_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0019_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "h2dtscpp_compat_array_0019_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0019_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0020_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0020_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0020_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C6', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0020_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0020_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0020_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0020_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0020_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0021_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0021_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0021_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0021_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0021_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0021_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0021_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0021_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0022_ARRAY_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0022_ARRAY_STRNG
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); string
   *            keyword misspelled (Array<strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0022_array_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0022_array_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0022_array_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0022_array_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<strng>",
          "h2dtscpp_compat_array_0022_array_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0022_array_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0023_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0023_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0023_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0023_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0023_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0023_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0023_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0023_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0024_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0024_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0024_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0024_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0024_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0024_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0024_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0024_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0025_ARRAYSTRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0025_ARRAYSTRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Arraystring>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0025_arraystring', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Arraystring>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0025_arraystring convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0025_arraystring must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0025_arraystring must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Arraystring>",
          "h2dtscpp_compat_array_0025_arraystring field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0025_arraystring execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0026_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0026_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0026_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0026_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0026_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0026_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<string",
          "h2dtscpp_compat_array_0026_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0026_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0027_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0027_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0027_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0027_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0027_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0027_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0027_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0027_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0028_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0028_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (Array<string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0028_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0028_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0028_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0028_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<string>,",
          "h2dtscpp_compat_array_0028_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0028_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0029_ARRAY_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0029_ARRAY_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type Array<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0029_array_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'Array<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0029_array_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0029_array_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0029_array_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0029_array_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0029_array_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0030_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0030_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0030_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C7', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0030_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0030_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0030_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0030_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0030_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0031_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0031_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0031_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0031_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0031_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0031_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0031_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0031_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0032_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0032_STRNG
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); string[]
   *            misspelled to strng[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0032_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'strng[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0032_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0032_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0032_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "strng[]",
          "h2dtscpp_compat_array_0032_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0032_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0033_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0033_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0033_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0033_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0033_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0033_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0033_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0033_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0034_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0034_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0034_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0034_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0034_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0034_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string[",
          "h2dtscpp_compat_array_0034_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0034_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0035_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0035_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0035_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0035_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0035_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0035_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0035_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0035_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0036_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0036_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0036_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0036_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0036_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0036_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string[",
          "h2dtscpp_compat_array_0036_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0036_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0037_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0037_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0037_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0037_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0037_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0037_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0037_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0037_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0038_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0038_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); trailing
   *            comma on type (string[],); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0038_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[],', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0038_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0038_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0038_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "string[],",
          "h2dtscpp_compat_array_0038_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0038_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0039_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0039_STRING
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type string[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0039_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'string[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0039_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0039_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0039_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "h2dtscpp_compat_array_0039_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0039_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0040_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0040_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0040_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C8', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0040_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0040_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0040_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0040_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0040_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0041_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0041_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0041_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0041_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0041_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0041_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0041_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0041_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0042_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0042_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0042_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0042_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0042_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0042_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0042_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0042_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0043_ARRAY_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0043_ARRAY_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolea>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0043_array_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolea>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0043_array_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0043_array_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0043_array_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<boolea>",
          "h2dtscpp_compat_array_0043_array_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0043_array_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0044_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0044_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0044_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0044_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0044_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0044_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0044_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0044_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0045_ARRAYBOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0045_ARRAYBOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Arrayboolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0045_arrayboolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Arrayboolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0045_arrayboolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0045_arrayboolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0045_arrayboolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Arrayboolean>",
          "h2dtscpp_compat_array_0045_arrayboolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0045_arrayboolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0046_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0046_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0046_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0046_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0046_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0046_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<boolean",
          "h2dtscpp_compat_array_0046_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0046_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0047_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0047_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0047_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0047_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0047_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0047_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0047_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0047_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0048_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0048_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0048_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0048_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0048_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0048_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<boolean>,",
          "h2dtscpp_compat_array_0048_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0048_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0049_ARRAY_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0049_ARRAY_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Array<boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0049_array_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'Array<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0049_array_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0049_array_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0049_array_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0049_array_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0049_array_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0050_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0050_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0050_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C9', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0050_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0050_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0050_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_array_0050_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0050_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0051_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0051_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0051_boolean', function() {
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
          "h2dtscpp_compat_array_0051_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0051_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0051_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0051_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0051_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0052_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0052_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[]); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0052_boolean', function() {
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
          "h2dtscpp_compat_array_0052_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0052_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0052_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "h2dtscpp_compat_array_0052_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0052_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0053_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0053_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean[]
   *            misspelled to boolea[]; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0053_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C10', alias: '',
            variableList: [{ type: 'boolea[]', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_array_0053_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0053_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0053_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolea[]",
          "h2dtscpp_compat_array_0053_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0053_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0054_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_ARRAY_0054_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/array: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (boolean[); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_array_0054_boolean', function() {
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
          "h2dtscpp_compat_array_0054_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_array_0054_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_array_0054_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "boolean[",
          "h2dtscpp_compat_array_0054_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_array_0054_boolean execution error: ${String(err)}`);
    }
  });
});
