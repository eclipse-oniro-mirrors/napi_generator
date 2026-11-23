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

suite('Stability_H2DTSCPP_COMPAT_FUNC_Part17', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0053_p0_string_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C139', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0053_p0_string_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0053_p0_string_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0053_p0_string_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0053_p0_string_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0053_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_STRING_P1_STRING_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_STRING_P1_STRING_OBJEC
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>objec; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0054_p0_string_p1_string_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C139', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0054_p0_string_p1_string_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0054_p0_string_p1_string_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0054_p0_string_p1_string_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<objec(std::string, std::string)>",
          "h2dtscpp_compat_func_0054_p0_string_p1_string_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0054_p0_string_p1_string_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0055_p0_string_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C139', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0055_p0_string_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0055_p0_string_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0055_p0_string_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0055_p0_string_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0055_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:string,p1:string)=>object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0056_p0_string_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C139', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0056_p0_string_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0056_p0_string_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0056_p0_string_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<object,(std::string, std::string)>",
          "h2dtscpp_compat_func_0056_p0_string_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0056_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>object; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0057_p0_string_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C139', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0057_p0_string_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0057_p0_string_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0057_p0_string_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::any(std::string, std::string)>", "h2dtscpp_compat_func_0057_p0_string_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0057_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0058_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C139', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0058_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0058_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0058_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0058_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0058_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_BOOLEAN_P1_ANY_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_BOOLEAN_P1_ANY_OBJEC
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>objec); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0001_p0_boolean_p1_any_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C141', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0001_p0_boolean_p1_any_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0001_p0_boolean_p1_any_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0001_p0_boolean_p1_any_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<objec(bool, std::any)>",
          "h2dtscpp_compat_func_0001_p0_boolean_p1_any_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0001_p0_boolean_p1_any_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0002_p0_boolean_p1_any_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C141', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0002_p0_boolean_p1_any_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0002_p0_boolean_p1_any_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0002_p0_boolean_p1_any_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0002_p0_boolean_p1_any_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0002_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0003_p0_boolean_p1_any_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C141', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0003_p0_boolean_p1_any_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0003_p0_boolean_p1_any_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0003_p0_boolean_p1_any_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<object,(bool, std::any)>",
          "h2dtscpp_compat_func_0003_p0_boolean_p1_any_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0003_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:any)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0004_p0_boolean_p1_any_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C141', alias: '',
            variableList: [{ type: '(p0:boolean,p1:any)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0004_p0_boolean_p1_any_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0004_p0_boolean_p1_any_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0004_p0_boolean_p1_any_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0004_p0_boolean_p1_any_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0004_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0005_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C141', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0005_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0005_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0005_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0005_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0005_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0006_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0006_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0006_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0006_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0006_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0006_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0007_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0007_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0007_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0007_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0007_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0007_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_P0_BOOLEA_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_P0_BOOLEA_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0008_p0_boolea_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolea,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0008_p0_boolea_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0008_p0_boolea_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0008_p0_boolea_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(boolea, std::any)>",
          "h2dtscpp_compat_func_0008_p0_boolea_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0008_p0_boolea_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0009_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0009_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0009_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0009_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0009_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0009_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0010_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0010_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0010_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0010_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0010_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0010_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_BOOLEAN_P1_OBJECT_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_BOOLEAN_P1_OBJECT_OBJEC
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>objec); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0011_p0_boolean_p1_object_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0011_p0_boolean_p1_object_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0011_p0_boolean_p1_object_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0011_p0_boolean_p1_object_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<objec(bool, std::any)>",
          "h2dtscpp_compat_func_0011_p0_boolean_p1_object_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0011_p0_boolean_p1_object_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0012_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0012_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0012_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0012_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0012_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0012_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0013_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0013_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0013_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0013_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<object,(bool, std::any)>",
          "h2dtscpp_compat_func_0013_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0013_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:object)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0014_p0_boolean_p1_object_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0014_p0_boolean_p1_object_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0014_p0_boolean_p1_object_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0014_p0_boolean_p1_object_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
          "h2dtscpp_compat_func_0014_p0_boolean_p1_object_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0014_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0015_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C142', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0015_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0015_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0015_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0015_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0015_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_BOOLEAN_P1_NUMBR_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_BOOLEAN_P1_NUMBR_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:boolean,p1:numbr)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0016_p0_boolean_p1_numbr_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:numbr)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0016_p0_boolean_p1_numbr_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0016_p0_boolean_p1_numbr_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0016_p0_boolean_p1_numbr_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, numbr)>",
          "h2dtscpp_compat_func_0016_p0_boolean_p1_numbr_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0016_p0_boolean_p1_numbr_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0017_p0_boolean_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0017_p0_boolean_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0017_p0_boolean_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0017_p0_boolean_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0017_p0_boolean_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0017_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_BOOLEA_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_BOOLEA_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:number)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0018_p0_boolea_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolea,p1:number)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0018_p0_boolea_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0018_p0_boolea_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0018_p0_boolea_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(boolea, double)>",
          "h2dtscpp_compat_func_0018_p0_boolea_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0018_p0_boolea_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0019_p0_boolean_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0019_p0_boolean_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0019_p0_boolean_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0019_p0_boolean_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0019_p0_boolean_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0019_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0020_p0_boolean_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0020_p0_boolean_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0020_p0_boolean_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0020_p0_boolean_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0020_p0_boolean_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0020_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_BOOLEAN_P1_NUMBER_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_BOOLEAN_P1_NUMBER_OBJEC
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>objec); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0021_p0_boolean_p1_number_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0021_p0_boolean_p1_number_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0021_p0_boolean_p1_number_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0021_p0_boolean_p1_number_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<objec(bool, double)>",
          "h2dtscpp_compat_func_0021_p0_boolean_p1_number_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0021_p0_boolean_p1_number_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0022_p0_boolean_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0022_p0_boolean_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0022_p0_boolean_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0022_p0_boolean_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0022_p0_boolean_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0022_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0023_p0_boolean_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0023_p0_boolean_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0023_p0_boolean_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0023_p0_boolean_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<object,(bool, double)>",
          "h2dtscpp_compat_func_0023_p0_boolean_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0023_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0024_p0_boolean_p1_number_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0024_p0_boolean_p1_number_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0024_p0_boolean_p1_number_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0024_p0_boolean_p1_number_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
          "h2dtscpp_compat_func_0024_p0_boolean_p1_number_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0024_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0025_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C143', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0025_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0025_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0025_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0025_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0025_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0026_p0_boolean_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0026_p0_boolean_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0026_p0_boolean_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0026_p0_boolean_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "h2dtscpp_compat_func_0026_p0_boolean_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0026_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_P0_BOOLEAN_P1_STRNG_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_P0_BOOLEAN_P1_STRNG_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:boolean,p1:strng)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0027_p0_boolean_p1_strng_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:strng)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0027_p0_boolean_p1_strng_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0027_p0_boolean_p1_strng_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0027_p0_boolean_p1_strng_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, strng)>",
          "h2dtscpp_compat_func_0027_p0_boolean_p1_strng_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0027_p0_boolean_p1_strng_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_P0_BOOLEA_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_P0_BOOLEA_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:string)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0028_p0_boolea_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolea,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0028_p0_boolea_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0028_p0_boolea_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0028_p0_boolea_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(boolea, std::string)>",
          "h2dtscpp_compat_func_0028_p0_boolea_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0028_p0_boolea_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0029_p0_boolean_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0029_p0_boolean_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0029_p0_boolean_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0029_p0_boolean_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "h2dtscpp_compat_func_0029_p0_boolean_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0029_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0030_p0_boolean_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0030_p0_boolean_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0030_p0_boolean_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0030_p0_boolean_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "h2dtscpp_compat_func_0030_p0_boolean_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0030_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_BOOLEAN_P1_STRING_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_BOOLEAN_P1_STRING_OBJEC
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>objec); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0031_p0_boolean_p1_string_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0031_p0_boolean_p1_string_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0031_p0_boolean_p1_string_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0031_p0_boolean_p1_string_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<objec(bool, std::string)>",
          "h2dtscpp_compat_func_0031_p0_boolean_p1_string_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0031_p0_boolean_p1_string_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0032_p0_boolean_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0032_p0_boolean_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0032_p0_boolean_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0032_p0_boolean_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "h2dtscpp_compat_func_0032_p0_boolean_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0032_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0033_p0_boolean_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0033_p0_boolean_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0033_p0_boolean_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0033_p0_boolean_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<object,(bool, std::string)>",
          "h2dtscpp_compat_func_0033_p0_boolean_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0033_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:string)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0034_p0_boolean_p1_string_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0034_p0_boolean_p1_string_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0034_p0_boolean_p1_string_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0034_p0_boolean_p1_string_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
          "h2dtscpp_compat_func_0034_p0_boolean_p1_string_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0034_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0035_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C144', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0035_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0035_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0035_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0035_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0035_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0036_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0036_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0036_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0036_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "h2dtscpp_compat_func_0036_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0036_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0037_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0037_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0037_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0037_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "h2dtscpp_compat_func_0037_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0037_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_P0_BOOLEA_P1_BOOLEA_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_P0_BOOLEA_P1_BOOLEA_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:boolea)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0038_p0_boolea_p1_boolea_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolea,p1:boolea)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0038_p0_boolea_p1_boolea_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0038_p0_boolea_p1_boolea_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0038_p0_boolea_p1_boolea_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(boolea, boolea)>",
          "h2dtscpp_compat_func_0038_p0_boolea_p1_boolea_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0038_p0_boolea_p1_boolea_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0039_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0039_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0039_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0039_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "h2dtscpp_compat_func_0039_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0039_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0040_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0040_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0040_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0040_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "h2dtscpp_compat_func_0040_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0040_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0041_P0_BOOLEAN_P1_BOOLEAN_OBJEC
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0041_P0_BOOLEAN_P1_BOOLEAN_OBJEC
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>objec); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0041_p0_boolean_p1_boolean_objec', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>objec', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0041_p0_boolean_p1_boolean_objec convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0041_p0_boolean_p1_boolean_objec must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0041_p0_boolean_p1_boolean_objec must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<objec(bool, bool)>",
          "h2dtscpp_compat_func_0041_p0_boolean_p1_boolean_objec field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0041_p0_boolean_p1_boolean_objec execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0042_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0042_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0042_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0042_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0042_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0042_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "h2dtscpp_compat_func_0042_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0042_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0043_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0043_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0043_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0043_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<object,(bool, bool)>",
          "h2dtscpp_compat_func_0043_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0043_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:boolean)=>object); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0044_p0_boolean_p1_boolean_object', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0044_p0_boolean_p1_boolean_object convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0044_p0_boolean_p1_boolean_object must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0044_p0_boolean_p1_boolean_object must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
          "h2dtscpp_compat_func_0044_p0_boolean_p1_boolean_object field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0044_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0045_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C145', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0045_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0045_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0045_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0045_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0045_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0046_p0_any_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C146', alias: '',
            variableList: [{ type: '(p0:any,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0046_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0046_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0046_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0046_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0046_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0047_p0_any_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C146', alias: '',
            variableList: [{ type: '(p0:any,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0047_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0047_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0047_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0047_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0047_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0048_p0_any_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C146', alias: '',
            variableList: [{ type: '(p0:any,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0048_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0048_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0048_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0048_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0048_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });
});
