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

suite('Stability_H2DTSCPP_COMPAT_FUNC_Part18', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0049_p0_any_p1_any_void', function() {
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
          "h2dtscpp_compat_func_0049_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0049_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0049_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0049_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0049_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0050_p0_any_p1_any_void', function() {
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
          "h2dtscpp_compat_func_0050_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0050_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0050_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0050_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0050_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_P0_ANY_P1_ANY_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_P0_ANY_P1_ANY_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0051_p0_any_p1_any_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C146', alias: '',
            variableList: [{ type: '(p0:any,p1:any)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0051_p0_any_p1_any_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0051_p0_any_p1_any_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0051_p0_any_p1_any_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, std::any)>",
          "h2dtscpp_compat_func_0051_p0_any_p1_any_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0051_p0_any_p1_any_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0052_p0_any_p1_any_void', function() {
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
          "h2dtscpp_compat_func_0052_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0052_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0052_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0052_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0052_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:any,p1:any)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0053_p0_any_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C146', alias: '',
            variableList: [{ type: '(p0:any,p1:any)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0053_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0053_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0053_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(std::any, std::any)>",
          "h2dtscpp_compat_func_0053_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0053_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0054_p0_any_p1_any_void', function() {
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
          "h2dtscpp_compat_func_0054_p0_any_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0054_p0_any_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0054_p0_any_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0054_p0_any_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0054_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0055_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C146', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0055_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0055_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0055_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0055_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0055_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_ANY_P1_NUMBR_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_ANY_P1_NUMBR_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:any,p1:numbr)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0056_p0_any_p1_numbr_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C147', alias: '',
            variableList: [{ type: '(p0:any,p1:numbr)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0056_p0_any_p1_numbr_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0056_p0_any_p1_numbr_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0056_p0_any_p1_numbr_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, numbr)>",
          "h2dtscpp_compat_func_0056_p0_any_p1_numbr_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0056_p0_any_p1_numbr_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_ANY_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_ANY_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0057_p0_any_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C147', alias: '',
            variableList: [{ type: '(p0:any,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0057_p0_any_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0057_p0_any_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0057_p0_any_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0057_p0_any_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0057_p0_any_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_ANY_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_ANY_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0058_p0_any_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C147', alias: '',
            variableList: [{ type: '(p0:any,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0058_p0_any_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0058_p0_any_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0058_p0_any_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0058_p0_any_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0058_p0_any_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_ANY_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_ANY_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:any,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0001_p0_any_p1_string_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C148', alias: '',
            variableList: [{ type: '(p0:any,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0001_p0_any_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0001_p0_any_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0001_p0_any_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0001_p0_any_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0001_p0_any_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0002_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C148', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0002_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0002_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0002_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0002_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0002_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0003_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0003_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0003_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0003_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0003_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0003_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0004_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0004_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0004_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0004_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0004_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0004_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_ANY_P1_BOOLEA_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_ANY_P1_BOOLEA_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolea)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0005_p0_any_p1_boolea_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolea)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0005_p0_any_p1_boolea_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0005_p0_any_p1_boolea_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0005_p0_any_p1_boolea_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, boolea)>",
          "h2dtscpp_compat_func_0005_p0_any_p1_boolea_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0005_p0_any_p1_boolea_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0006_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0006_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0006_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0006_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0006_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0006_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0007_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0007_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0007_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0007_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0007_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0007_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_P0_ANY_P1_BOOLEAN_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_P0_ANY_P1_BOOLEAN_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>voi); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0008_p0_any_p1_boolean_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0008_p0_any_p1_boolean_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0008_p0_any_p1_boolean_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0008_p0_any_p1_boolean_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, bool)>",
          "h2dtscpp_compat_func_0008_p0_any_p1_boolean_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0008_p0_any_p1_boolean_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0009_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0009_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0009_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0009_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0009_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0009_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0010_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0010_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0010_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0010_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(std::any, bool)>",
          "h2dtscpp_compat_func_0010_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0010_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:any,p1:boolean)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0011_p0_any_p1_boolean_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0011_p0_any_p1_boolean_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0011_p0_any_p1_boolean_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0011_p0_any_p1_boolean_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
          "h2dtscpp_compat_func_0011_p0_any_p1_boolean_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0011_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0012_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C149', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0012_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0012_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0012_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0012_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0012_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0013_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0013_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0013_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0013_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0013_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0013_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0014_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0014_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0014_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0014_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0014_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0014_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0015_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0015_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0015_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0015_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0015_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0015_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0016_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0016_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0016_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0016_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0016_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0016_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0017_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0017_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0017_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0017_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0017_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0017_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_OBJECT_P1_ANY_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_P0_OBJECT_P1_ANY_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0018_p0_object_p1_any_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0018_p0_object_p1_any_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0018_p0_object_p1_any_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0018_p0_object_p1_any_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, std::any)>",
          "h2dtscpp_compat_func_0018_p0_object_p1_any_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0018_p0_object_p1_any_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0019_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0019_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0019_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0019_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0019_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0019_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:object,p1:any)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0020_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0020_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0020_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0020_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(std::any, std::any)>",
          "h2dtscpp_compat_func_0020_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0020_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:any)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0021_p0_object_p1_any_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: '(p0:object,p1:any)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0021_p0_object_p1_any_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0021_p0_object_p1_any_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0021_p0_object_p1_any_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0021_p0_object_p1_any_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0021_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0022_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C150', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0022_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0022_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0022_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0022_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0022_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0023_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0023_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0023_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0023_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0023_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0023_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0024_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0024_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0024_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0024_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0024_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0024_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0025_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0025_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0025_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0025_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0025_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0025_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0026_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0026_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0026_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0026_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0026_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0026_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0027_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0027_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0027_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0027_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0027_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0027_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_P0_OBJECT_P1_OBJECT_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_P0_OBJECT_P1_OBJECT_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0028_p0_object_p1_object_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0028_p0_object_p1_object_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0028_p0_object_p1_object_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0028_p0_object_p1_object_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, std::any)>",
          "h2dtscpp_compat_func_0028_p0_object_p1_object_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0028_p0_object_p1_object_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0029_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0029_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0029_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0029_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0029_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0029_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:object,p1:object)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0030_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0030_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0030_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0030_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(std::any, std::any)>",
          "h2dtscpp_compat_func_0030_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0030_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:object)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0031_p0_object_p1_object_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: '(p0:object,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0031_p0_object_p1_object_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0031_p0_object_p1_object_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0031_p0_object_p1_object_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
          "h2dtscpp_compat_func_0031_p0_object_p1_object_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0031_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0032_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C151', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0032_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0032_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0032_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0032_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0032_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_OBJECT_P1_NUMBR_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_OBJECT_P1_NUMBR_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:object,p1:numbr)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0033_p0_object_p1_numbr_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:numbr)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0033_p0_object_p1_numbr_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0033_p0_object_p1_numbr_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0033_p0_object_p1_numbr_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, numbr)>",
          "h2dtscpp_compat_func_0033_p0_object_p1_numbr_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0033_p0_object_p1_numbr_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0034_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0034_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0034_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0034_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0034_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0034_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0035_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0035_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0035_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0035_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0035_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0035_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0036_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0036_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0036_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0036_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0036_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0036_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0037_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0037_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0037_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0037_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0037_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0037_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_P0_OBJECT_P1_NUMBER_VOI
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_P0_OBJECT_P1_NUMBER_VOI
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>voi; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0038_p0_object_p1_number_voi', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0038_p0_object_p1_number_voi convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0038_p0_object_p1_number_voi must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0038_p0_object_p1_number_voi must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(std::any, double)>",
          "h2dtscpp_compat_func_0038_p0_object_p1_number_voi field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0038_p0_object_p1_number_voi execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0039_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0039_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0039_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0039_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0039_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0039_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0039_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0040_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:object,p1:number)=>void,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0040_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0040_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0040_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0040_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(std::any, double)>",
          "h2dtscpp_compat_func_0040_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0040_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0041_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0041_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:number)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0041_p0_object_p1_number_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: '(p0:object,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0041_p0_object_p1_number_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0041_p0_object_p1_number_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0041_p0_object_p1_number_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
          "h2dtscpp_compat_func_0041_p0_object_p1_number_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0041_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0042_INVALIDTYPEXYZ_V2
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0042_INVALIDTYPEXYZ_V2
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0042_invalidtypexyz_v2', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C152', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0042_invalidtypexyz_v2 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0042_invalidtypexyz_v2 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0042_invalidtypexyz_v2 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0042_invalidtypexyz_v2 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0042_invalidtypexyz_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:object,p1:string)=>void; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0043_p0_object_p1_string_void', function() {
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
          "h2dtscpp_compat_func_0043_p0_object_p1_string_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0043_p0_object_p1_string_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0043_p0_object_p1_string_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
          "h2dtscpp_compat_func_0043_p0_object_p1_string_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0043_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_OBJECT_P1_STRNG_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_OBJECT_P1_STRNG_VOID
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:object,p1:strng)=>void); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0044_p0_object_p1_strng_void', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C153', alias: '',
            variableList: [{ type: '(p0:object,p1:strng)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0044_p0_object_p1_strng_void convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0044_p0_object_p1_strng_void must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0044_p0_object_p1_strng_void must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, strng)>",
          "h2dtscpp_compat_func_0044_p0_object_p1_strng_void field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0044_p0_object_p1_strng_void execution error: ${String(err)}`);
    }
  });
});
