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

suite('Stability_H2DTSCPP_COMPAT_FUNC_Part13', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:object)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0011_p0_string_p1_object_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: '(p0:string,p1:object)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0011_p0_string_p1_object_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0011_p0_string_p1_object_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0011_p0_string_p1_object_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "h2dtscpp_compat_func_0011_p0_string_p1_object_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0011_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:object)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0012_p0_string_p1_object_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: '(p0:string,p1:object)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0012_p0_string_p1_object_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0012_p0_string_p1_object_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0012_p0_string_p1_object_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "h2dtscpp_compat_func_0012_p0_string_p1_object_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0012_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_STRING_P1_OBJECT_AN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_STRING_P1_OBJECT_AN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:object)=>an; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0013_p0_string_p1_object_an', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: '(p0:string,p1:object)=>an', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0013_p0_string_p1_object_an convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0013_p0_string_p1_object_an must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0013_p0_string_p1_object_an must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<an(std::string, std::any)>",
          "h2dtscpp_compat_func_0013_p0_string_p1_object_an field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0013_p0_string_p1_object_an execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:object)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0014_p0_string_p1_object_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: '(p0:string,p1:object)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0014_p0_string_p1_object_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0014_p0_string_p1_object_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0014_p0_string_p1_object_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "h2dtscpp_compat_func_0014_p0_string_p1_object_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0014_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:string,p1:object)=>any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0015_p0_string_p1_object_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: '(p0:string,p1:object)=>any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0015_p0_string_p1_object_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0015_p0_string_p1_object_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0015_p0_string_p1_object_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<any,(std::string, std::any)>",
          "h2dtscpp_compat_func_0015_p0_string_p1_object_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0015_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:object)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0016_p0_string_p1_object_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: '(p0:string,p1:object)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0016_p0_string_p1_object_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0016_p0_string_p1_object_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0016_p0_string_p1_object_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
          "h2dtscpp_compat_func_0016_p0_string_p1_object_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0016_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0017_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C113', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0017_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0017_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0017_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0017_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0017_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_STRING_P1_NUMBR_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_STRING_P1_NUMBR_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:string,p1:numbr)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0018_p0_string_p1_numbr_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:numbr)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0018_p0_string_p1_numbr_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0018_p0_string_p1_numbr_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0018_p0_string_p1_numbr_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, numbr)>",
          "h2dtscpp_compat_func_0018_p0_string_p1_numbr_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0018_p0_string_p1_numbr_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_STRNG_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_STRNG_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:strng,p1:number)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0019_p0_strng_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:strng,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0019_p0_strng_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0019_p0_strng_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0019_p0_strng_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(strng, double)>",
          "h2dtscpp_compat_func_0019_p0_strng_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0019_p0_strng_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0020_p0_string_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0020_p0_string_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0020_p0_string_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0020_p0_string_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
          "h2dtscpp_compat_func_0020_p0_string_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0020_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0021_p0_string_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0021_p0_string_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0021_p0_string_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0021_p0_string_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
          "h2dtscpp_compat_func_0021_p0_string_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0021_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0022_p0_string_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0022_p0_string_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0022_p0_string_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0022_p0_string_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
          "h2dtscpp_compat_func_0022_p0_string_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0022_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_STRING_P1_NUMBER_AN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_STRING_P1_NUMBER_AN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:number)=>an; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0023_p0_string_p1_number_an', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>an', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0023_p0_string_p1_number_an convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0023_p0_string_p1_number_an must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0023_p0_string_p1_number_an must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<an(std::string, double)>",
          "h2dtscpp_compat_func_0023_p0_string_p1_number_an field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0023_p0_string_p1_number_an execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0024_p0_string_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0024_p0_string_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0024_p0_string_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0024_p0_string_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
          "h2dtscpp_compat_func_0024_p0_string_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0024_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:string,p1:number)=>any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0025_p0_string_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0025_p0_string_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0025_p0_string_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0025_p0_string_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<any,(std::string, double)>",
          "h2dtscpp_compat_func_0025_p0_string_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0025_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:number)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0026_p0_string_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: '(p0:string,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0026_p0_string_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0026_p0_string_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0026_p0_string_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
          "h2dtscpp_compat_func_0026_p0_string_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0026_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0027_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C114', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0027_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0027_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0027_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0027_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0027_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0028_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0028_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0028_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0028_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0028_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0028_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_STRNG_P1_STRNG_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_STRNG_P1_STRNG_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:strng,p1:strng)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0029_p0_strng_p1_strng_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:strng,p1:strng)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0029_p0_strng_p1_strng_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0029_p0_strng_p1_strng_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0029_p0_strng_p1_strng_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(strng, strng)>",
          "h2dtscpp_compat_func_0029_p0_strng_p1_strng_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0029_p0_strng_p1_strng_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0030_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0030_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0030_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0030_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0030_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0030_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0031_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0031_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0031_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0031_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0031_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0031_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0032_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0032_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0032_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0032_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0032_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0032_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_STRING_P1_STRING_AN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_STRING_P1_STRING_AN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>an; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0033_p0_string_p1_string_an', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>an', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0033_p0_string_p1_string_an convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0033_p0_string_p1_string_an must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0033_p0_string_p1_string_an must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<an(std::string, std::string)>",
          "h2dtscpp_compat_func_0033_p0_string_p1_string_an field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0033_p0_string_p1_string_an execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0034_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0034_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0034_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0034_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0034_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0034_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:string,p1:string)=>any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0035_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0035_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0035_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0035_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<any,(std::string, std::string)>",
          "h2dtscpp_compat_func_0035_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0035_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>any; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0036_p0_string_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0036_p0_string_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0036_p0_string_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0036_p0_string_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0036_p0_string_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0036_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0037_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C115', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0037_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0037_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0037_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0037_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0037_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0038_p0_string_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0038_p0_string_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0038_p0_string_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0038_p0_string_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
          "h2dtscpp_compat_func_0038_p0_string_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0038_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_P0_STRNG_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_P0_STRNG_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:strng,p1:boolean)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0039_p0_strng_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:strng,p1:boolean)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0039_p0_strng_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0039_p0_strng_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0039_p0_strng_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(strng, bool)>",
          "h2dtscpp_compat_func_0039_p0_strng_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0039_p0_strng_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_P0_STRING_P1_BOOLEA_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_P0_STRING_P1_BOOLEA_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolea)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0040_p0_string_p1_boolea_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolea)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0040_p0_string_p1_boolea_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0040_p0_string_p1_boolea_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0040_p0_string_p1_boolea_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, boolea)>",
          "h2dtscpp_compat_func_0040_p0_string_p1_boolea_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0040_p0_string_p1_boolea_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0041_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0041_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0041_p0_string_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0041_p0_string_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0041_p0_string_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0041_p0_string_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
          "h2dtscpp_compat_func_0041_p0_string_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0041_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0042_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0042_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0042_p0_string_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0042_p0_string_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0042_p0_string_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0042_p0_string_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
          "h2dtscpp_compat_func_0042_p0_string_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0042_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_STRING_P1_BOOLEAN_AN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_STRING_P1_BOOLEAN_AN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>an); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0043_p0_string_p1_boolean_an', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>an', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0043_p0_string_p1_boolean_an convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0043_p0_string_p1_boolean_an must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0043_p0_string_p1_boolean_an must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<an(std::string, bool)>",
          "h2dtscpp_compat_func_0043_p0_string_p1_boolean_an field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0043_p0_string_p1_boolean_an execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0044_p0_string_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0044_p0_string_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0044_p0_string_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0044_p0_string_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
          "h2dtscpp_compat_func_0044_p0_string_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0044_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0045_p0_string_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0045_p0_string_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0045_p0_string_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0045_p0_string_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<any,(std::string, bool)>",
          "h2dtscpp_compat_func_0045_p0_string_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0045_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:boolean)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0046_p0_string_p1_boolean_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: '(p0:string,p1:boolean)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0046_p0_string_p1_boolean_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0046_p0_string_p1_boolean_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0046_p0_string_p1_boolean_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
          "h2dtscpp_compat_func_0046_p0_string_p1_boolean_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0046_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0047_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C116', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0047_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0047_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0047_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0047_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0047_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0048_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0048_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0048_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0048_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0048_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0048_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0049_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0049_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0049_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0049_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0049_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0049_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_BOOLEA_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_BOOLEA_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0050_p0_boolea_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolea,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0050_p0_boolea_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0050_p0_boolea_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0050_p0_boolea_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(boolea, std::any)>",
          "h2dtscpp_compat_func_0050_p0_boolea_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0050_p0_boolea_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0051_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0051_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0051_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0051_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0051_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0051_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0052_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0052_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0052_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0052_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0052_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0052_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_BOOLEAN_P1_ANY_AN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_BOOLEAN_P1_ANY_AN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>an); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0053_p0_boolean_p1_any_an', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>an', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0053_p0_boolean_p1_any_an convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0053_p0_boolean_p1_any_an must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0053_p0_boolean_p1_any_an must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<an(bool, std::any)>",
          "h2dtscpp_compat_func_0053_p0_boolean_p1_any_an field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0053_p0_boolean_p1_any_an execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0054_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0054_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0054_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0054_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0054_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0054_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0055_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0055_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0055_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0055_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<any,(bool, std::any)>",
          "h2dtscpp_compat_func_0055_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0055_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_BOOLEAN_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_BOOLEAN_P1_ANY_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0056_p0_boolean_p1_any_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0056_p0_boolean_p1_any_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0056_p0_boolean_p1_any_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0056_p0_boolean_p1_any_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0056_p0_boolean_p1_any_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0056_p0_boolean_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0057_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C117', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0057_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0057_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0057_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0057_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0057_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_BOOLEAN_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_BOOLEAN_P1_OBJECT_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0058_p0_boolean_p1_object_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C118', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0058_p0_boolean_p1_object_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0058_p0_boolean_p1_object_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0058_p0_boolean_p1_object_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0058_p0_boolean_p1_object_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0058_p0_boolean_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_BOOLEAN_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_BOOLEAN_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0001_p0_boolean_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C119', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0001_p0_boolean_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0001_p0_boolean_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0001_p0_boolean_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0001_p0_boolean_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0001_p0_boolean_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_BOOLEAN_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_BOOLEAN_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>any,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0002_p0_boolean_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C119', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>any,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0002_p0_boolean_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0002_p0_boolean_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0002_p0_boolean_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<any,(bool, double)>",
          "h2dtscpp_compat_func_0002_p0_boolean_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0002_p0_boolean_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_BOOLEAN_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_BOOLEAN_P1_NUMBER_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0003_p0_boolean_p1_number_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C119', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0003_p0_boolean_p1_number_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0003_p0_boolean_p1_number_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0003_p0_boolean_p1_number_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0003_p0_boolean_p1_number_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0003_p0_boolean_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0004_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C119', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0004_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0004_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0004_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0004_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0004_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_BOOLEAN_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_BOOLEAN_P1_STRING_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0005_p0_boolean_p1_string_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C120', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0005_p0_boolean_p1_string_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0005_p0_boolean_p1_string_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0005_p0_boolean_p1_string_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "h2dtscpp_compat_func_0005_p0_boolean_p1_string_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0005_p0_boolean_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_BOOLEAN_P1_STRNG_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_BOOLEAN_P1_STRNG_ANY
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:boolean,p1:strng)=>any); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0006_p0_boolean_p1_strng_any', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C120', alias: '',
            variableList: [{ type: '(p0:boolean,p1:strng)=>any', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0006_p0_boolean_p1_strng_any convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0006_p0_boolean_p1_strng_any must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0006_p0_boolean_p1_strng_any must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, strng)>",
          "h2dtscpp_compat_func_0006_p0_boolean_p1_strng_any field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0006_p0_boolean_p1_strng_any execution error: ${String(err)}`);
    }
  });
});
