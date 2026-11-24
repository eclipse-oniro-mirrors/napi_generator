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

suite('Stability_H2DTSCPP_COMPAT_FUNC_Part19', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0045_p0_object_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0045_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0045_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0045_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0045_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0045_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0046_p0_object_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0046_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0046_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0046_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0046_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0046_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0047_p0_object_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0047_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0047_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0047_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0047_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0047_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_OBJECT_P1_STRING_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_OBJECT_P1_STRING_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0048_p0_object_p1_string_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0048_p0_object_p1_string_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0048_p0_object_p1_string_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0048_p0_object_p1_string_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, std::string)>",
          "h2dtscpp_compat_func_0048_p0_object_p1_string_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0048_p0_object_p1_string_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0049_p0_object_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0049_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0049_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0049_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0049_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0049_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:object,p1:string)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0050_p0_object_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0050_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0050_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0050_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(std::any, std::string)>",
          "h2dtscpp_compat_func_0050_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0050_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0051_p0_object_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0051_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0051_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0051_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0051_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0051_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0052_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0052_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0052_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0052_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0052_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0052_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:object,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0053_p0_object_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C154', alias: '',
            variableList: [{ type: '(p0:object,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0053_p0_object_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0053_p0_object_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0053_p0_object_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0053_p0_object_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0053_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:object,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0054_p0_object_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C154', alias: '',
            variableList: [{ type: '(p0:object,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0054_p0_object_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0054_p0_object_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0054_p0_object_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0054_p0_object_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0054_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_OBJECT_P1_BOOLEA_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_OBJECT_P1_BOOLEA_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:object,p1:boolea)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0055_p0_object_p1_boolea_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C154', alias: '',
            variableList: [{ type: '(p0:object,p1:boolea)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0055_p0_object_p1_boolea_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0055_p0_object_p1_boolea_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0055_p0_object_p1_boolea_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, boolea)>",
          "h2dtscpp_compat_func_0055_p0_object_p1_boolea_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0055_p0_object_p1_boolea_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:object,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0056_p0_object_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C154', alias: '',
            variableList: [{ type: '(p0:object,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0056_p0_object_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0056_p0_object_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0056_p0_object_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0056_p0_object_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0056_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:object,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0057_p0_object_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C154', alias: '',
            variableList: [{ type: '(p0:object,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0057_p0_object_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0057_p0_object_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0057_p0_object_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0057_p0_object_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0057_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_OBJECT_P1_BOOLEAN_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_OBJECT_P1_BOOLEAN_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:object,p1:boolean)=>voi); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0058_p0_object_p1_boolean_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C154', alias: '',
            variableList: [{ type: '(p0:object,p1:boolean)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0058_p0_object_p1_boolean_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0058_p0_object_p1_boolean_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0058_p0_object_p1_boolean_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, bool)>",
          "h2dtscpp_compat_func_0058_p0_object_p1_boolean_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0058_p0_object_p1_boolean_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0001_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0001_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0001_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0001_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0001_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0001_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0002_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0002_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0002_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0002_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0002_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0002_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0003_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0003_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0003_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0003_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0003_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0003_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0004_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0004_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0004_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0004_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0004_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0004_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_NUMBER_P1_OBJECT_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_NUMBER_P1_OBJECT_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0005_p0_number_p1_object_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0005_p0_number_p1_object_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0005_p0_number_p1_object_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0005_p0_number_p1_object_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(double, std::any)>",
          "h2dtscpp_compat_func_0005_p0_number_p1_object_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0005_p0_number_p1_object_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0006_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0006_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0006_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0006_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0006_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0006_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:number,p1:object)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0007_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0007_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0007_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0007_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(double, std::any)>",
          "h2dtscpp_compat_func_0007_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0007_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0008_p0_number_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0008_p0_number_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0008_p0_number_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0008_p0_number_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0008_p0_number_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0008_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0009_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0009_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0009_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0009_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0009_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0009_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_NUMBR_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_NUMBR_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:numbr,p1:string)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0010_p0_numbr_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:numbr,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0010_p0_numbr_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0010_p0_numbr_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0010_p0_numbr_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(numbr, std::string)>",
          "h2dtscpp_compat_func_0010_p0_numbr_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0010_p0_numbr_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_NUMBER_P1_STRNG_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_NUMBER_P1_STRNG_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:number,p1:strng)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0011_p0_number_p1_strng_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:strng)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0011_p0_number_p1_strng_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0011_p0_number_p1_strng_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0011_p0_number_p1_strng_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, strng)>",
          "h2dtscpp_compat_func_0011_p0_number_p1_strng_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0011_p0_number_p1_strng_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0012_p0_number_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0012_p0_number_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0012_p0_number_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0012_p0_number_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0012_p0_number_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0012_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0013_p0_number_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0013_p0_number_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0013_p0_number_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0013_p0_number_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0013_p0_number_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0013_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0014_p0_number_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0014_p0_number_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0014_p0_number_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0014_p0_number_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0014_p0_number_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0014_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_NUMBER_P1_STRING_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_NUMBER_P1_STRING_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:string)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0015_p0_number_p1_string_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0015_p0_number_p1_string_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0015_p0_number_p1_string_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0015_p0_number_p1_string_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(double, std::string)>",
          "h2dtscpp_compat_func_0015_p0_number_p1_string_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0015_p0_number_p1_string_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0016_p0_number_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0016_p0_number_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0016_p0_number_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0016_p0_number_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0016_p0_number_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0016_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:number,p1:string)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0017_p0_number_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0017_p0_number_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0017_p0_number_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0017_p0_number_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(double, std::string)>",
          "h2dtscpp_compat_func_0017_p0_number_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0017_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:number,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0018_p0_number_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0018_p0_number_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0018_p0_number_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0018_p0_number_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0018_p0_number_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0018_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0019_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0019_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0019_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0019_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0019_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0019_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_PROMISE_NUMBR
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_PROMISE_NUMBR
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled (Promise<numbr>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0020_promise_numbr', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0020_promise_numbr convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0020_promise_numbr must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0020_promise_numbr must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<numbr>",
          "h2dtscpp_compat_func_0020_promise_numbr field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0020_promise_numbr execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0021_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0021_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0021_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0021_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0021_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0021_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0022_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0022_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0022_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0022_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0022_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0022_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0023_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0023_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0023_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0023_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0023_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0023_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_PROMISENUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_PROMISENUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promisenumber>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0024_promisenumber', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promisenumber>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0024_promisenumber convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0024_promisenumber must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0024_promisenumber must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promisenumber>",
          "h2dtscpp_compat_func_0024_promisenumber field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0024_promisenumber execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<number; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0025_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0025_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0025_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0025_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number",
          "h2dtscpp_compat_func_0025_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0025_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0026_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0026_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0026_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0026_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0026_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0026_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Promise<number>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0027_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0027_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0027_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0027_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>,",
          "h2dtscpp_compat_func_0027_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0027_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_PROMISE_NUMBER
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<number>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0028_promise_number', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0028_promise_number convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0028_promise_number must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0028_promise_number must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0028_promise_number field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0028_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0029_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0029_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0029_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0029_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0029_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0029_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0030_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0030_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0030_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0030_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0030_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0030_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_PROMISE_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_PROMISE_STRNG
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled (Promise<strng>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0031_promise_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0031_promise_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0031_promise_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0031_promise_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<strng>",
          "h2dtscpp_compat_func_0031_promise_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0031_promise_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0032_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0032_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0032_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0032_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0032_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0032_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0033_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0033_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0033_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0033_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0033_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0033_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_PROMISESTRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_PROMISESTRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promisestring>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0034_promisestring', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promisestring>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0034_promisestring convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0034_promisestring must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0034_promisestring must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promisestring>",
          "h2dtscpp_compat_func_0034_promisestring field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0034_promisestring execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0035_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0035_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0035_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0035_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string",
          "h2dtscpp_compat_func_0035_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0035_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0036_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0036_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0036_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0036_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0036_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0036_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type (Promise<string>,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0037_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0037_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0037_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0037_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>,",
          "h2dtscpp_compat_func_0037_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0037_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_PROMISE_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            Promise<string>; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0038_promise_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0038_promise_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0038_promise_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0038_promise_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0038_promise_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0038_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0039_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0039_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0039_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0039_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0039_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0039_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_PROMISE_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled (Promise<boolean>); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0040_promise_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0040_promise_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0040_promise_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0040_promise_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
          "h2dtscpp_compat_func_0040_promise_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0040_promise_boolean execution error: ${String(err)}`);
    }
  });
});
