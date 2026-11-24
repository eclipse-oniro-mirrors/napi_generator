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

suite('Stability_H2DTSCPP_COMPAT_BASIC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0055_UNDEFINED
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0055_UNDEFINED
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefined; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0055_undefined', function() {
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
          "h2dtscpp_compat_basic_0055_undefined convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0055_undefined must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0055_undefined must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
          "h2dtscpp_compat_basic_0055_undefined field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0055_undefined execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0056
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0056
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefine; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C288', alias: '',
            variableList: [{ type: 'undefine', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0056 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0056 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0056 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefine",
          "h2dtscpp_compat_basic_0056 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0056 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0057
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0057
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type undefined; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0057', function() {
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
          "h2dtscpp_compat_basic_0057 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0057 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0057 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
          "h2dtscpp_compat_basic_0057 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0057 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0058
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0058
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (undefined,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C288', alias: '',
            variableList: [{ type: 'undefined,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0058 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0058 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0058 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "undefined,",
          "h2dtscpp_compat_basic_0058 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0058 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0001_BIGIN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0001_BIGIN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type bigin; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0001_bigin', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C290', alias: '',
            variableList: [{ type: 'bigin', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0001_bigin convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0001_bigin must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0001_bigin must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bigin",
          "h2dtscpp_compat_basic_0001_bigin field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0001_bigin execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0002_BIGINT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0002_BIGINT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type bigint; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0002_bigint', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C290', alias: '',
            variableList: [{ type: 'bigint', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0002_bigint convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0002_bigint must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0002_bigint must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bigint",
          "h2dtscpp_compat_basic_0002_bigint field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0002_bigint execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0003_BIGINT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0003_BIGINT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (bigint,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0003_bigint', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C290', alias: '',
            variableList: [{ type: 'bigint,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0003_bigint convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0003_bigint must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0003_bigint must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bigint,",
          "h2dtscpp_compat_basic_0003_bigint field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0003_bigint execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0004_BIGINT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0004_BIGINT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type bigint; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0004_bigint', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C290', alias: '',
            variableList: [{ type: 'bigint', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0004_bigint convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0004_bigint must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0004_bigint must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "bigint",
          "h2dtscpp_compat_basic_0004_bigint field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0004_bigint execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0005_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0005_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0005_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C290', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0005_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0005_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0005_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0005_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0005_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0006_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0006_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0006_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0006_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0006_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0006_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0006_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0006_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0007_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0007_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0007_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0007_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0007_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0007_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0007_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0007_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0008_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0008_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0008_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0008_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0008_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0008_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0008_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0008_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0009_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0009_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0009_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0009_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0009_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0009_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0009_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0009_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0010_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0010_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0010_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0010_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0010_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0010_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0010_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0010_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0011_UNKNOW
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0011_UNKNOW
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknow; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0011_unknow', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknow', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0011_unknow convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0011_unknow must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0011_unknow must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknow",
          "h2dtscpp_compat_basic_0011_unknow field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0011_unknow execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0012_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0012_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0012_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0012_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0012_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0012_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0012_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0012_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0013_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0013_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (unknown,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0013_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0013_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0013_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0013_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown,",
          "h2dtscpp_compat_basic_0013_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0013_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0014_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0014_UNKNOWN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type unknown; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0014_unknown', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'unknown', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0014_unknown convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0014_unknown must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0014_unknown must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
          "h2dtscpp_compat_basic_0014_unknown field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0014_unknown execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0015_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0015_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0015_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C291', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0015_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0015_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0015_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0015_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0015_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0016_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0016_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0016_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0016_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0016_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0016_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0016_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0016_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0017_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0017_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0017_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0017_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0017_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0017_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0017_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0017_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0018_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0018_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0018_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0018_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0018_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0018_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0018_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0018_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0019_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0019_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0019_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0019_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0019_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0019_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0019_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0019_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0020_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0020_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0020_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0020_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0020_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0020_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0020_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0020_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0021_NEVE
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0021_NEVE
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type neve; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0021_neve', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'neve', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0021_neve convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0021_neve must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0021_neve must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "neve",
          "h2dtscpp_compat_basic_0021_neve field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0021_neve execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0022_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0022_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0022_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0022_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0022_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0022_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0022_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0022_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0023_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0023_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (never,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0023_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0023_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0023_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0023_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never,",
          "h2dtscpp_compat_basic_0023_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0023_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0024_NEVER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0024_NEVER
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type never; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0024_never', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'never', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0024_never convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0024_never must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0024_never must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "never",
          "h2dtscpp_compat_basic_0024_never field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0024_never execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0025_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0025_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0025_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C292', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0025_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0025_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0025_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0025_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0025_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0026_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0026_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0026_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0026_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0026_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0026_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0026_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0026_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0027_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0027_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0027_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0027_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0027_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0027_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0027_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0027_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0028_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0028_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0028_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0028_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0028_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0028_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0028_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0028_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0029_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0029_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0029_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0029_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0029_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0029_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0029_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0029_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0030_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0030_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0030_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0030_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0030_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0030_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0030_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0030_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0031_AN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0031_AN
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type an; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0031_an', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'an', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0031_an convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0031_an must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0031_an must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "an", "h2dtscpp_compat_basic_0031_an field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0031_an execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0032_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0032_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0032_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0032_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0032_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0032_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0032_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0032_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0033_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0033_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0033_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0033_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0033_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0033_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "any,",
          "h2dtscpp_compat_basic_0033_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0033_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0034_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0034_ANY
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0034_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0034_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0034_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0034_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0034_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0034_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0035_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0035_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0035_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C293', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0035_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0035_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0035_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0035_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0035_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0036_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0036_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0036_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0036_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0036_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0036_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0036_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0036_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0037_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0037_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0037_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0037_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0037_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0037_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0037_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0037_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0038_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0038_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0038_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0038_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0038_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0038_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0038_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0038_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0039_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0039_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0039_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0039_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0039_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0039_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0039_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0039_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0040_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0040_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0040_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0040_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0040_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0040_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0040_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0040_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0041_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0041_OBJEC
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type objec; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0041_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0041_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0041_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0041_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "objec",
          "h2dtscpp_compat_basic_0041_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0041_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0042_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0042_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0042_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0042_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0042_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0042_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0042_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0042_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0043_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0043_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); trailing
   *            comma on type (object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0043_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0043_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0043_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0043_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object,",
          "h2dtscpp_compat_basic_0043_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0043_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0044_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0044_OBJECT
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0044_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0044_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0044_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0044_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
          "h2dtscpp_compat_basic_0044_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0044_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0045_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0045_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0045_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C294', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0045_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_basic_0045_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0045_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_basic_0045_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0045_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0046_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0046_MAP
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type map; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0046_map', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C296', alias: '',
            variableList: [{ type: 'map', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0046_map convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0046_map must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0046_map must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "map",
          "h2dtscpp_compat_basic_0046_map field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0046_map execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0047_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0047_MAP
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type map; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0047_map', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C296', alias: '',
            variableList: [{ type: 'map', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0047_map convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0047_map must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0047_map must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "map",
          "h2dtscpp_compat_basic_0047_map field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0047_map execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0048_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0048_MAP
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type map; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0048_map', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C296', alias: '',
            variableList: [{ type: 'map', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0048_map convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0048_map must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0048_map must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "map",
          "h2dtscpp_compat_basic_0048_map field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0048_map execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0049_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0049_MAP
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type map; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0049_map', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C296', alias: '',
            variableList: [{ type: 'map', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0049_map convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0049_map must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0049_map must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "map",
          "h2dtscpp_compat_basic_0049_map field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0049_map execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0050_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0050_MAP
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type map; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0050_map', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C296', alias: '',
            variableList: [{ type: 'map', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0050_map convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0050_map must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0050_map must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "map",
          "h2dtscpp_compat_basic_0050_map field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0050_map execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0051_MA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_BASIC_0051_MA
   * @tc.desc   Stability compat h2dtscpp/basic: runCompatSafe(transParseObj literal); malformed
   *            type ma; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_basic_0051_ma', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C296', alias: '',
            variableList: [{ type: 'ma', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_basic_0051_ma convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_basic_0051_ma must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_basic_0051_ma must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "ma", "h2dtscpp_compat_basic_0051_ma field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_basic_0051_ma execution error: ${String(err)}`);
    }
  });
});
