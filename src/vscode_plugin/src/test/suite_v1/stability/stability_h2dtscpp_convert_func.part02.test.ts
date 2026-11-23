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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_p0_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun35', returns: '(p0:boolean)=>boolean',
          parameters: [{ type: '(p0:boolean)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun35');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0003_p0_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0003_p0_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample35_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun35') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_p0_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:boolean)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass35', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean)=>boolean',
            parameters: [{ type: '(p0:boolean)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0004_p0_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0004_p0_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp35.ts', `
        function h2cpp35(p: (p0:boolean)=>boolean): (p0:boolean)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0005_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0005_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp35.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp35') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_p0_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn35', returns: '(p0:boolean)=>boolean',
          parameters: [{ type: '(p0:boolean)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias35', alias: '(p0:boolean)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias35');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn35');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0006_p0_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
        "h2dtscpp_convert_func_0006_p0_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample35_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn35') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_p0_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:number)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_p0_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass36', alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0007_p0_number_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_p0_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:number)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_p0_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun36', returns: '(p0:number)=>void',
          parameters: [{ type: '(p0:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun36');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0008_p0_number_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0008_p0_number_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample36_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun36') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_p0_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:number)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0009_p0_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass36', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>void',
            parameters: [{ type: '(p0:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0009_p0_number_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0009_p0_number_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009_p0_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type (p0:number)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0010_number', () => {
    try {
      const parsed = doParseTs('h2cpp36.ts', `function h2cpp36(p: (p0:number)=>void): (p0:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0010_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0010_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp36.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp36') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_p0_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn36', returns: '(p0:number)=>void',
          parameters: [{ type: '(p0:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias36', alias: '(p0:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias36');
      assert.strictEqual(converted.types[0].alias, '(p0:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn36');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0011_p0_number_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0011_p0_number_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample36_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn36') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_p0_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:string)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_p0_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass37', alias: '',
          variableList: [{ type: '(p0:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0012_p0_string_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_p0_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:string)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun37', returns: '(p0:string)=>void',
          parameters: [{ type: '(p0:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun37');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0013_p0_string_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0013_p0_string_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample37_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun37') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:string)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_p0_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass37', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string)=>void',
            parameters: [{ type: '(p0:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0014_p0_string_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0014_p0_string_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_p0_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type (p0:string)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_string', () => {
    try {
      const parsed = doParseTs('h2cpp37.ts', `function h2cpp37(p: (p0:string)=>void): (p0:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0015_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0015_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp37.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp37') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_p0_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn37', returns: '(p0:string)=>void',
          parameters: [{ type: '(p0:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias37', alias: '(p0:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias37');
      assert.strictEqual(converted.types[0].alias, '(p0:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn37');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0016_p0_string_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0016_p0_string_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample37_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn37') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_p0_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:boolean)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_p0_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass38', alias: '',
          variableList: [{ type: '(p0:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0017_p0_boolean_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_p0_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:boolean)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun38', returns: '(p0:boolean)=>void',
          parameters: [{ type: '(p0:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun38');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0018_p0_boolean_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0018_p0_boolean_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample38_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun38') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:boolean)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_p0_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass38', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean)=>void',
            parameters: [{ type: '(p0:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0019_p0_boolean_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0019_p0_boolean_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_p0_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp38.ts', `
        function h2cpp38(p: (p0:boolean)=>void): (p0:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0020_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0020_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp38.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp38') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_p0_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn38', returns: '(p0:boolean)=>void',
          parameters: [{ type: '(p0:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias38', alias: '(p0:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias38');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn38');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0021_p0_boolean_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0021_p0_boolean_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample38_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn38') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_p0_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_p0_number_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass39', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0022_p0_number_p1_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_p0_number_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_p0_number_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun39', returns: '(p0:number,p1:number)=>number',
          parameters: [{ type: '(p0:number,p1:number)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun39');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0023_p0_number_p1_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0023_p0_number_p1_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample39_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun39') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_p0_number_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_p0_number_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass39', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:number)=>number',
            parameters: [{ type: '(p0:number,p1:number)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0024_p0_number_p1_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0024_p0_number_p1_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_p0_number_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_number_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp39.ts', `
        function h2cpp39(p: (p0:number,p1:number)=>number): (p0:number,p1:number)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0025_number_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0025_number_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp39.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp39') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_NUMBER_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_p0_number_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn39', returns: '(p0:number,p1:number)=>number',
          parameters: [{ type: '(p0:number,p1:number)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias39', alias: '(p0:number,p1:number)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias39');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn39');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0026_p0_number_p1_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, double)>",
        "h2dtscpp_convert_func_0026_p0_number_p1_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample39_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn39') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_p0_number_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_p0_number_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass40', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0027_p0_number_p1_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_p0_number_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_p0_number_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun40', returns: '(p0:number,p1:boolean)=>number',
          parameters: [{ type: '(p0:number,p1:boolean)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun40');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample40_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun40') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_p0_number_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_p0_number_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass40', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:boolean)=>number',
            parameters: [{ type: '(p0:number,p1:boolean)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0029_p0_number_p1_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0029_p0_number_p1_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_p0_number_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_number_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp40.ts', `
        function h2cpp40(p: (p0:number,p1:boolean)=>number): (p0:number,p1:boolean)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0030_number_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0030_number_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp40.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp40') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_NUMBER_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_p0_number_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn40', returns: '(p0:number,p1:boolean)=>number',
          parameters: [{ type: '(p0:number,p1:boolean)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias40', alias: '(p0:number,p1:boolean)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias40');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn40');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0031_p0_number_p1_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, bool)>",
        "h2dtscpp_convert_func_0031_p0_number_p1_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample40_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn40') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_p0_number_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_STRING_P1_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_STRING_P1_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_p0_string_p1_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass41', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0032_p0_string_p1_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_p0_string_p1_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_STRING_P1_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_STRING_P1_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_p0_string_p1_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun41', returns: '(p0:string,p1:string)=>number',
          parameters: [{ type: '(p0:string,p1:string)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun41');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0033_p0_string_p1_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0033_p0_string_p1_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample41_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun41') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_p0_string_p1_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_STRING_P1_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_STRING_P1_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_p0_string_p1_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass41', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>number',
            parameters: [{ type: '(p0:string,p1:string)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0034_p0_string_p1_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0034_p0_string_p1_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_p0_string_p1_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_STRING_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_STRING_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_string_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp41.ts', `
        function h2cpp41(p: (p0:string,p1:string)=>number): (p0:string,p1:string)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0035_string_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0035_string_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp41.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp41') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_STRING_P1_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_STRING_P1_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_p0_string_p1_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn41', returns: '(p0:string,p1:string)=>number',
          parameters: [{ type: '(p0:string,p1:string)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias41', alias: '(p0:string,p1:string)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias41');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn41');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0036_p0_string_p1_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string, std::string)>",
        "h2dtscpp_convert_func_0036_p0_string_p1_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample41_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn41') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_p0_string_p1_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_p0_boolean_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass42', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0037_p0_boolean_p1_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_p0_boolean_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_p0_boolean_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun42', returns: '(p0:boolean,p1:number)=>number',
          parameters: [{ type: '(p0:boolean,p1:number)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun42');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0038_p0_boolean_p1_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0038_p0_boolean_p1_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample42_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun42') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_p0_boolean_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_p0_boolean_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass42', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>number',
            parameters: [{ type: '(p0:boolean,p1:number)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0039_p0_boolean_p1_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0039_p0_boolean_p1_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_p0_boolean_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_boolean_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp42.ts', `
        function h2cpp42(p: (p0:boolean,p1:number)=>number): (p0:boolean,p1:number)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0040_boolean_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0040_boolean_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp42.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp42') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_BOOLEAN_P1_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_p0_boolean_p1_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn42', returns: '(p0:boolean,p1:number)=>number',
          parameters: [{ type: '(p0:boolean,p1:number)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias42', alias: '(p0:boolean,p1:number)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias42');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn42');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0041_p0_boolean_p1_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "h2dtscpp_convert_func_0041_p0_boolean_p1_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample42_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn42') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_p0_boolean_p1_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_p0_boolean_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass43', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0042_p0_boolean_p1_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_p0_boolean_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun43', returns: '(p0:boolean,p1:boolean)=>number',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun43');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample43_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass43', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>number',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_boolean_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp43.ts', `
        function h2cpp43(p: (p0:boolean,p1:boolean)=>number): (p0:boolean,p1:boolean)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0045_boolean_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0045_boolean_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp43.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_p0_boolean_p1_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn43', returns: '(p0:boolean,p1:boolean)=>number',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias43', alias: '(p0:boolean,p1:boolean)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias43');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn43');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0046_p0_boolean_p1_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "h2dtscpp_convert_func_0046_p0_boolean_p1_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample43_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_p0_boolean_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_NUMBER_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_NUMBER_P1_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_p0_number_p1_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass44', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0047_p0_number_p1_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_p0_number_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_NUMBER_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_NUMBER_P1_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_p0_number_p1_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun44', returns: '(p0:number,p1:number)=>string',
          parameters: [{ type: '(p0:number,p1:number)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun44');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0048_p0_number_p1_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0048_p0_number_p1_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample44_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_p0_number_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_NUMBER_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_NUMBER_P1_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_p0_number_p1_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass44', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:number)=>string',
            parameters: [{ type: '(p0:number,p1:number)=>string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0049_p0_number_p1_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0049_p0_number_p1_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_p0_number_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_number_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp44.ts', `
        function h2cpp44(p: (p0:number,p1:number)=>string): (p0:number,p1:number)=>string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0050_number_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0050_number_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp44.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_NUMBER_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_NUMBER_P1_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_p0_number_p1_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn44', returns: '(p0:number,p1:number)=>string',
          parameters: [{ type: '(p0:number,p1:number)=>string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias44', alias: '(p0:number,p1:number)=>string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias44');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn44');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0051_p0_number_p1_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "h2dtscpp_convert_func_0051_p0_number_p1_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample44_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_p0_number_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_p0_number_p1_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass45', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, bool)>",
        "h2dtscpp_convert_func_0052_p0_number_p1_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_p0_number_p1_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_p0_number_p1_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun45', returns: '(p0:number,p1:boolean)=>string',
          parameters: [{ type: '(p0:number,p1:boolean)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun45');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, bool)>",
        "h2dtscpp_convert_func_0053_p0_number_p1_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "h2dtscpp_convert_func_0053_p0_number_p1_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample45_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun45') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_p0_number_p1_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0001_number_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp49.ts', `
        function h2cpp49(p: (p0:number,p1:number)=>boolean): (p0:number,p1:number)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0001_number_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0001_number_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp49.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0002_p0_number_p1_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn49', returns: '(p0:number,p1:number)=>boolean',
          parameters: [{ type: '(p0:number,p1:number)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias49', alias: '(p0:number,p1:number)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias49');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn49');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0002_p0_number_p1_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0002_p0_number_p1_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample49_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_p0_number_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass50', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0003_p0_number_p1_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_number_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun50', returns: '(p0:number,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun50');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0004_p0_number_p1_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0004_p0_number_p1_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample50_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });
});
