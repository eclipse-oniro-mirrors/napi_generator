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

suite('Stability_H2DTSCPP_COMPAT_FUNC_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_STRNG_P1_STRNG_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0043_P0_STRNG_P1_STRNG_STRNG
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:strng,p1:strng)=>strng); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0043_p0_strng_p1_strng_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:strng,p1:strng)=>strng', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0043_p0_strng_p1_strng_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0043_p0_strng_p1_strng_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0043_p0_strng_p1_strng_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<strng(strng, strng)>",
          "h2dtscpp_compat_func_0043_p0_strng_p1_strng_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0043_p0_strng_p1_strng_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0044_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0044_p0_string_p1_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0044_p0_string_p1_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0044_p0_string_p1_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0044_p0_string_p1_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::string(std::string, std::string)>", "h2dtscpp_compat_func_0044_p0_string_p1_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0044_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0045_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0045_p0_string_p1_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0045_p0_string_p1_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0045_p0_string_p1_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0045_p0_string_p1_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::string(std::string, std::string)>", "h2dtscpp_compat_func_0045_p0_string_p1_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0045_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0046_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0046_p0_string_p1_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0046_p0_string_p1_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0046_p0_string_p1_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0046_p0_string_p1_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::string(std::string, std::string)>", "h2dtscpp_compat_func_0046_p0_string_p1_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0046_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_P0_STRING_P1_STRING_STRIN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0047_P0_STRING_P1_STRING_STRIN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>strin; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0047_p0_string_p1_string_strin', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>strin', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0047_p0_string_p1_string_strin convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0047_p0_string_p1_string_strin must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0047_p0_string_p1_string_strin must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<strin(std::string, std::string)>",
          "h2dtscpp_compat_func_0047_p0_string_p1_string_strin field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0047_p0_string_p1_string_strin execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0048_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0048_p0_string_p1_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0048_p0_string_p1_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0048_p0_string_p1_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0048_p0_string_p1_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::string(std::string, std::string)>", "h2dtscpp_compat_func_0048_p0_string_p1_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0048_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0049_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); trailing comma
   *            on type ((p0:string,p1:string)=>string,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0049_p0_string_p1_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>string,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0049_p0_string_p1_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0049_p0_string_p1_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0049_p0_string_p1_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<string,(std::string, std::string)>",
          "h2dtscpp_compat_func_0049_p0_string_p1_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0049_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0050_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            (p0:string,p1:string)=>string; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0050_p0_string_p1_string_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0050_p0_string_p1_string_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0050_p0_string_p1_string_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0050_p0_string_p1_string_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<std::string(std::string, std::string)>", "h2dtscpp_compat_func_0050_p0_string_p1_string_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0050_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0051_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0051_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C46', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0051_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0051_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0051_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0051_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0051_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_P0_BOOLEAN_P1_NUMBR_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0052_P0_BOOLEAN_P1_NUMBR_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:boolean,p1:numbr)=>string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0052_p0_boolean_p1_numbr_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolean,p1:numbr)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0052_p0_boolean_p1_numbr_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0052_p0_boolean_p1_numbr_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0052_p0_boolean_p1_numbr_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, numbr)>",
          "h2dtscpp_compat_func_0052_p0_boolean_p1_numbr_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0052_p0_boolean_p1_numbr_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_BOOLEAN_P1_NUMBER_STRNG
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0053_P0_BOOLEAN_P1_NUMBER_STRNG
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:boolean,p1:number)=>strng); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0053_p0_boolean_p1_number_strng', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>strng', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0053_p0_boolean_p1_number_strng convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0053_p0_boolean_p1_number_strng must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0053_p0_boolean_p1_number_strng must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<strng(bool, double)>",
          "h2dtscpp_compat_func_0053_p0_boolean_p1_number_strng field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0053_p0_boolean_p1_number_strng execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_BOOLEA_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0054_P0_BOOLEA_P1_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:number)=>string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0054_p0_boolea_p1_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolea,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0054_p0_boolea_p1_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0054_p0_boolea_p1_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0054_p0_boolea_p1_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(boolea, double)>",
          "h2dtscpp_compat_func_0054_p0_boolea_p1_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0054_p0_boolea_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0055_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0055_p0_boolean_p1_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0055_p0_boolean_p1_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0055_p0_boolean_p1_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0055_p0_boolean_p1_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
          "h2dtscpp_compat_func_0055_p0_boolean_p1_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0055_p0_boolean_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0056_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0056_p0_boolean_p1_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0056_p0_boolean_p1_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0056_p0_boolean_p1_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0056_p0_boolean_p1_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
          "h2dtscpp_compat_func_0056_p0_boolean_p1_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0056_p0_boolean_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_BOOLEAN_P1_NUMBER_STRIN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0057_P0_BOOLEAN_P1_NUMBER_STRIN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>strin); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0057_p0_boolean_p1_number_strin', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>strin', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0057_p0_boolean_p1_number_strin convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0057_p0_boolean_p1_number_strin must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0057_p0_boolean_p1_number_strin must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<strin(bool, double)>",
          "h2dtscpp_compat_func_0057_p0_boolean_p1_number_strin field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0057_p0_boolean_p1_number_strin execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0058_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>string); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0058_p0_boolean_p1_number_string', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C47', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0058_p0_boolean_p1_number_string convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0058_p0_boolean_p1_number_string must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0058_p0_boolean_p1_number_string must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
          "h2dtscpp_compat_func_0058_p0_boolean_p1_number_string field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0058_p0_boolean_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_NUMBER_P1_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0001_P0_NUMBER_P1_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0001_p0_number_p1_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0001_p0_number_p1_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0001_p0_number_p1_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0001_p0_number_p1_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(double, double)>",
          "h2dtscpp_compat_func_0001_p0_number_p1_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0001_p0_number_p1_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0002_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0002_p0_number_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0002_p0_number_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0002_p0_number_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0002_p0_number_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
          "h2dtscpp_compat_func_0002_p0_number_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0002_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0003_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0003_p0_number_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0003_p0_number_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0003_p0_number_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0003_p0_number_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
          "h2dtscpp_compat_func_0003_p0_number_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0003_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_NUMBER_P1_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0004_P0_NUMBER_P1_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0004_p0_number_p1_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0004_p0_number_p1_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0004_p0_number_p1_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0004_p0_number_p1_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(double, double)>",
          "h2dtscpp_compat_func_0004_p0_number_p1_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0004_p0_number_p1_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0005_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0005_p0_number_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0005_p0_number_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0005_p0_number_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0005_p0_number_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
          "h2dtscpp_compat_func_0005_p0_number_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0005_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0006_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolean,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0006_p0_number_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolean,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0006_p0_number_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0006_p0_number_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0006_p0_number_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolean,(double, double)>",
          "h2dtscpp_compat_func_0006_p0_number_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0006_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0007_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0007_p0_number_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: '(p0:number,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0007_p0_number_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0007_p0_number_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0007_p0_number_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
          "h2dtscpp_compat_func_0007_p0_number_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0007_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0008_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0008_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C49', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0008_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0008_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0008_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0008_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0008_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_P0_NUMBR_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0009_P0_NUMBR_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:numbr,p1:boolean)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0009_p0_numbr_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:numbr,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0009_p0_numbr_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0009_p0_numbr_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0009_p0_numbr_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(numbr, bool)>",
          "h2dtscpp_compat_func_0009_p0_numbr_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0009_p0_numbr_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0010_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0010_p0_number_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0010_p0_number_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0010_p0_number_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0010_p0_number_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
          "h2dtscpp_compat_func_0010_p0_number_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0010_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_NUMBER_P1_BOOLEA_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0011_P0_NUMBER_P1_BOOLEA_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolea)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0011_p0_number_p1_boolea_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolea)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0011_p0_number_p1_boolea_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0011_p0_number_p1_boolea_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0011_p0_number_p1_boolea_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(double, boolea)>",
          "h2dtscpp_compat_func_0011_p0_number_p1_boolea_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0011_p0_number_p1_boolea_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0012_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0012_p0_number_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0012_p0_number_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0012_p0_number_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0012_p0_number_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
          "h2dtscpp_compat_func_0012_p0_number_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0012_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0013_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0013_p0_number_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0013_p0_number_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0013_p0_number_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0013_p0_number_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
          "h2dtscpp_compat_func_0013_p0_number_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0013_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_NUMBER_P1_BOOLEAN_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0014_P0_NUMBER_P1_BOOLEAN_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0014_p0_number_p1_boolean_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0014_p0_number_p1_boolean_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0014_p0_number_p1_boolean_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0014_p0_number_p1_boolean_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(double, bool)>",
          "h2dtscpp_compat_func_0014_p0_number_p1_boolean_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0014_p0_number_p1_boolean_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0015_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0015_p0_number_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0015_p0_number_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0015_p0_number_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0015_p0_number_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
          "h2dtscpp_compat_func_0015_p0_number_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0015_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0016_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolean,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0016_p0_number_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolean,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0016_p0_number_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0016_p0_number_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0016_p0_number_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolean,(double, bool)>",
          "h2dtscpp_compat_func_0016_p0_number_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0016_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0017_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:number,p1:boolean)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0017_p0_number_p1_boolean_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0017_p0_number_p1_boolean_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0017_p0_number_p1_boolean_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0017_p0_number_p1_boolean_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
          "h2dtscpp_compat_func_0017_p0_number_p1_boolean_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0017_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0018_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0018_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C50', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0018_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0018_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0018_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0018_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0018_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0019_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0019_p0_string_p1_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0019_p0_string_p1_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0019_p0_string_p1_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0019_p0_string_p1_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
          "h2dtscpp_compat_func_0019_p0_string_p1_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0019_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_STRNG_P1_STRNG_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0020_P0_STRNG_P1_STRNG_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); string keyword
   *            misspelled ((p0:strng,p1:strng)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0020_p0_strng_p1_strng_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:strng,p1:strng)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0020_p0_strng_p1_strng_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0020_p0_strng_p1_strng_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0020_p0_strng_p1_strng_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(strng, strng)>",
          "h2dtscpp_compat_func_0020_p0_strng_p1_strng_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0020_p0_strng_p1_strng_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_STRING_P1_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0021_P0_STRING_P1_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0021_p0_string_p1_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0021_p0_string_p1_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0021_p0_string_p1_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0021_p0_string_p1_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(std::string, std::string)>",
          "h2dtscpp_compat_func_0021_p0_string_p1_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0021_p0_string_p1_string_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0022_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0022_p0_string_p1_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0022_p0_string_p1_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0022_p0_string_p1_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0022_p0_string_p1_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
          "h2dtscpp_compat_func_0022_p0_string_p1_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0022_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0023_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0023_p0_string_p1_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0023_p0_string_p1_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0023_p0_string_p1_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0023_p0_string_p1_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
          "h2dtscpp_compat_func_0023_p0_string_p1_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0023_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_STRING_P1_STRING_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0024_P0_STRING_P1_STRING_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0024_p0_string_p1_string_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0024_p0_string_p1_string_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0024_p0_string_p1_string_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0024_p0_string_p1_string_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(std::string, std::string)>",
          "h2dtscpp_compat_func_0024_p0_string_p1_string_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0024_p0_string_p1_string_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0025_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0025_p0_string_p1_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0025_p0_string_p1_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0025_p0_string_p1_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0025_p0_string_p1_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
          "h2dtscpp_compat_func_0025_p0_string_p1_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0025_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0026_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolean,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0026_p0_string_p1_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolean,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0026_p0_string_p1_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0026_p0_string_p1_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0026_p0_string_p1_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type,
          "std::function<boolean,(std::string, std::string)>", "h2dtscpp_compat_func_0026_p0_string_p1_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0026_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0027_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:string,p1:string)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0027_p0_string_p1_string_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0027_p0_string_p1_string_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0027_p0_string_p1_string_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0027_p0_string_p1_string_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
          "h2dtscpp_compat_func_0027_p0_string_p1_string_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0027_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0028_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0028_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C51', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0028_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0028_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0028_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0028_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0028_invalidtypexyz execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_BOOLEAN_P1_NUMBR_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0029_P0_BOOLEAN_P1_NUMBR_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); number keyword
   *            misspelled ((p0:boolean,p1:numbr)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0029_p0_boolean_p1_numbr_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:numbr)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0029_p0_boolean_p1_numbr_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0029_p0_boolean_p1_numbr_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0029_p0_boolean_p1_numbr_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, numbr)>",
          "h2dtscpp_compat_func_0029_p0_boolean_p1_numbr_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0029_p0_boolean_p1_numbr_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0030_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0030_p0_boolean_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0030_p0_boolean_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0030_p0_boolean_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0030_p0_boolean_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
          "h2dtscpp_compat_func_0030_p0_boolean_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0030_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_BOOLEA_P1_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0031_P0_BOOLEA_P1_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolea,p1:number)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0031_p0_boolea_p1_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolea,p1:number)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0031_p0_boolea_p1_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0031_p0_boolea_p1_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0031_p0_boolea_p1_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(boolea, double)>",
          "h2dtscpp_compat_func_0031_p0_boolea_p1_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0031_p0_boolea_p1_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0032_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0032_p0_boolean_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0032_p0_boolean_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0032_p0_boolean_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0032_p0_boolean_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
          "h2dtscpp_compat_func_0032_p0_boolean_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0032_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0033_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0033_p0_boolean_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0033_p0_boolean_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0033_p0_boolean_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0033_p0_boolean_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
          "h2dtscpp_compat_func_0033_p0_boolean_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0033_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_BOOLEAN_P1_NUMBER_BOOLEA
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0034_P0_BOOLEAN_P1_NUMBER_BOOLEA
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolea); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0034_p0_boolean_p1_number_boolea', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolea', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0034_p0_boolean_p1_number_boolea convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0034_p0_boolean_p1_number_boolea must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0034_p0_boolean_p1_number_boolea must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolea(bool, double)>",
          "h2dtscpp_compat_func_0034_p0_boolean_p1_number_boolea field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0034_p0_boolean_p1_number_boolea execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0035_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0035_p0_boolean_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0035_p0_boolean_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0035_p0_boolean_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0035_p0_boolean_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
          "h2dtscpp_compat_func_0035_p0_boolean_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0035_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0036_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolean,); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0036_p0_boolean_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolean,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0036_p0_boolean_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0036_p0_boolean_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0036_p0_boolean_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<boolean,(bool, double)>",
          "h2dtscpp_compat_func_0036_p0_boolean_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0036_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0037_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); boolean
   *            keyword misspelled ((p0:boolean,p1:number)=>boolean); strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0037_p0_boolean_p1_number_boolean', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0037_p0_boolean_p1_number_boolean convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0037_p0_boolean_p1_number_boolean must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0037_p0_boolean_p1_number_boolean must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
          "h2dtscpp_compat_func_0037_p0_boolean_p1_number_boolean field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0037_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_INVALIDTYPEXYZ
   * @tc.number SUB_NAPI_H2DTSCPP_COMPAT_FUNC_0038_INVALIDTYPEXYZ
   * @tc.desc   Stability compat h2dtscpp/func: runCompatSafe(transParseObj literal); malformed type
   *            InvalidTypeXYZ; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_compat_func_0038_invalidtypexyz', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C52', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0038_invalidtypexyz convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1,
          "h2dtscpp_compat_func_0038_invalidtypexyz must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0038_invalidtypexyz must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ",
          "h2dtscpp_compat_func_0038_invalidtypexyz field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0038_invalidtypexyz execution error: ${String(err)}`);
    }
  });
});
