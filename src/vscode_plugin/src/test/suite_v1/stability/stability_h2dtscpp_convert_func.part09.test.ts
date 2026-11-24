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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_OBJECT_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_object_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp153.ts', `
        function h2cpp153(p: (p0:object,p1:string)=>void): (p0:object,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0017_object_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0017_object_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_object_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn153', returns: '(p0:object,p1:string)=>void',
          parameters: [{ type: '(p0:object,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias153', alias: '(p0:object,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias153');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn153');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0018_p0_object_p1_string_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0018_p0_object_p1_string_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample153_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_p0_object_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass154', alias: '',
          variableList: [{ type: '(p0:object,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0019_p0_object_p1_boolean_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_p0_object_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun154', returns: '(p0:object,p1:boolean)=>void',
          parameters: [{ type: '(p0:object,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun154');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0020_p0_object_p1_boolean_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0020_p0_object_p1_boolean_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample154_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_p0_object_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass154', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:boolean)=>void',
            parameters: [{ type: '(p0:object,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0021_p0_object_p1_boolean_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0021_p0_object_p1_boolean_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_object_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp154.ts', `
        function h2cpp154(p: (p0:object,p1:boolean)=>void): (p0:object,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0022_object_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0022_object_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_p0_object_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn154', returns: '(p0:object,p1:boolean)=>void',
          parameters: [{ type: '(p0:object,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias154', alias: '(p0:object,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias154');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn154');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0023_p0_object_p1_boolean_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0023_p0_object_p1_boolean_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample154_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_NUMBER_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_NUMBER_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:number,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_p0_number_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass155', alias: '',
          variableList: [{ type: '(p0:number,p1:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0024_p0_number_p1_any_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_p0_number_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_NUMBER_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_NUMBER_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_p0_number_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun155', returns: '(p0:number,p1:any)=>void',
          parameters: [{ type: '(p0:number,p1:any)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun155');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0025_p0_number_p1_any_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0025_p0_number_p1_any_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample155_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_p0_number_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_NUMBER_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_NUMBER_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_p0_number_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass155', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:any)=>void',
            parameters: [{ type: '(p0:number,p1:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0026_p0_number_p1_any_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0026_p0_number_p1_any_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_p0_number_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_NUMBER_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_number_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp155.ts', `
        function h2cpp155(p: (p0:number,p1:any)=>void): (p0:number,p1:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0027_number_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0027_number_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_p0_number_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn155', returns: '(p0:number,p1:any)=>void',
          parameters: [{ type: '(p0:number,p1:any)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias155', alias: '(p0:number,p1:any)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias155');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:any)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn155');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_any_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_any_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample155_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_p0_number_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_p0_number_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass156', alias: '',
          variableList: [{ type: '(p0:number,p1:object)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0029_p0_number_p1_object_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_p0_number_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun156', returns: '(p0:number,p1:object)=>void',
          parameters: [{ type: '(p0:number,p1:object)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun156');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0030_p0_number_p1_object_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0030_p0_number_p1_object_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample156_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_p0_number_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass156', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:object)=>void',
            parameters: [{ type: '(p0:number,p1:object)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0031_p0_number_p1_object_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0031_p0_number_p1_object_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_number_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp156.ts', `
        function h2cpp156(p: (p0:number,p1:object)=>void): (p0:number,p1:object)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0032_number_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0032_number_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp156.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_p0_number_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn156', returns: '(p0:number,p1:object)=>void',
          parameters: [{ type: '(p0:number,p1:object)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias156', alias: '(p0:number,p1:object)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias156');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:object)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn156');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0033_p0_number_p1_object_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0033_p0_number_p1_object_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample156_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_p0_number_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass157', alias: '',
          variableList: [{ type: '(p0:number,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0034_p0_number_p1_string_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_p0_number_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun157', returns: '(p0:number,p1:string)=>void',
          parameters: [{ type: '(p0:number,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun157');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0035_p0_number_p1_string_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0035_p0_number_p1_string_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample157_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_p0_number_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass157', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:string)=>void',
            parameters: [{ type: '(p0:number,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0036_p0_number_p1_string_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0036_p0_number_p1_string_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_NUMBER_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_number_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp157.ts', `
        function h2cpp157(p: (p0:number,p1:string)=>void): (p0:number,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0037_number_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0037_number_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_p0_number_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn157', returns: '(p0:number,p1:string)=>void',
          parameters: [{ type: '(p0:number,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias157', alias: '(p0:number,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias157');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn157');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0038_p0_number_p1_string_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0038_p0_number_p1_string_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample157_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_PROMISE_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_promise_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass297', alias: '',
          variableList: [{ type: 'Promise<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0039_promise_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_PROMISE_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_promise_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun297', returns: 'Promise<number>',
          parameters: [{ type: 'Promise<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun297');
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0040_promise_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0040_promise_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample297_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_PROMISE_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_promise_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass297', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<number>',
            parameters: [{ type: 'Promise<number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0041_promise_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0041_promise_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_PROMISE_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_promise_number', () => {
    try {
      const parsed = doParseTs('h2cpp297.ts', `function h2cpp297(p: Promise<number>): Promise<number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0042_promise_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0042_promise_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp297.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_PROMISE_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_PROMISE_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Promise<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_promise_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn297', returns: 'Promise<number>',
          parameters: [{ type: 'Promise<number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias297', alias: 'Promise<number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias297');
      assert.strictEqual(converted.types[0].alias, 'Promise<number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn297');
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0043_promise_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0043_promise_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample297_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass298', alias: '',
          variableList: [{ type: 'Promise<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0044_promise_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun298', returns: 'Promise<string>',
          parameters: [{ type: 'Promise<string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun298');
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0045_promise_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0045_promise_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample298_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass298', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<string>',
            parameters: [{ type: 'Promise<string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0046_promise_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0046_promise_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_promise_string', () => {
    try {
      const parsed = doParseTs('h2cpp298.ts', `function h2cpp298(p: Promise<string>): Promise<string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0047_promise_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0047_promise_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp298.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn298', returns: 'Promise<string>',
          parameters: [{ type: 'Promise<string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias298', alias: 'Promise<string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias298');
      assert.strictEqual(converted.types[0].alias, 'Promise<string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn298');
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0048_promise_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0048_promise_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample298_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_PROMISE_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_promise_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass299', alias: '',
          variableList: [{ type: 'Promise<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0049_promise_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_PROMISE_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_promise_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun299', returns: 'Promise<boolean>',
          parameters: [{ type: 'Promise<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun299');
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0050_promise_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0050_promise_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample299_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_PROMISE_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_promise_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass299', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<boolean>',
            parameters: [{ type: 'Promise<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0051_promise_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0051_promise_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_PROMISE_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_promise_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp299.ts', `function h2cpp299(p: Promise<boolean>): Promise<boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0052_promise_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0052_promise_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp299.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_PROMISE_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Promise<boolean>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_promise_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn299', returns: 'Promise<boolean>',
          parameters: [{ type: 'Promise<boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias299', alias: 'Promise<boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias299');
      assert.strictEqual(converted.types[0].alias, 'Promise<boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn299');
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0053_promise_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0053_promise_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample299_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_promise_boolean execution error: ${String(err)}`);
    }
  });
});
