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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_ANY_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_ANY_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_any_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun123', returns: '(p0:any,p1:number)=>object',
          parameters: [{ type: '(p0:any,p1:number)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun123');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0013_p0_any_p1_number_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0013_p0_any_p1_number_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample123_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_any_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_ANY_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_ANY_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_p0_any_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass123', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:number)=>object',
            parameters: [{ type: '(p0:any,p1:number)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0014_p0_any_p1_number_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0014_p0_any_p1_number_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_p0_any_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_ANY_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_any_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp123.ts', `
        function h2cpp123(p: (p0:any,p1:number)=>object): (p0:any,p1:number)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0015_any_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0015_any_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp123.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_ANY_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_ANY_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_p0_any_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn123', returns: '(p0:any,p1:number)=>object',
          parameters: [{ type: '(p0:any,p1:number)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias123', alias: '(p0:any,p1:number)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias123');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:number)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn123');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0016_p0_any_p1_number_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0016_p0_any_p1_number_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample123_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_p0_any_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_ANY_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_ANY_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_p0_any_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass124', alias: '',
          variableList: [{ type: '(p0:any,p1:string)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0017_p0_any_p1_string_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_p0_any_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_ANY_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_ANY_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_any_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun124', returns: '(p0:any,p1:string)=>object',
          parameters: [{ type: '(p0:any,p1:string)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun124');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0018_p0_any_p1_string_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0018_p0_any_p1_string_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample124_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_any_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_ANY_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_ANY_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_p0_any_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass124', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:string)=>object',
            parameters: [{ type: '(p0:any,p1:string)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0019_p0_any_p1_string_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0019_p0_any_p1_string_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_p0_any_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_ANY_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_ANY_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_any_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp124.ts', `
        function h2cpp124(p: (p0:any,p1:string)=>object): (p0:any,p1:string)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0020_any_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0020_any_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp124.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_ANY_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_ANY_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_p0_any_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn124', returns: '(p0:any,p1:string)=>object',
          parameters: [{ type: '(p0:any,p1:string)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias124', alias: '(p0:any,p1:string)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias124');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:string)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn124');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0021_p0_any_p1_string_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0021_p0_any_p1_string_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample124_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_p0_any_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_p0_any_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass125', alias: '',
          variableList: [{ type: '(p0:any,p1:boolean)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0022_p0_any_p1_boolean_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_p0_any_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_p0_any_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun125', returns: '(p0:any,p1:boolean)=>object',
          parameters: [{ type: '(p0:any,p1:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun125');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0023_p0_any_p1_boolean_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0023_p0_any_p1_boolean_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample125_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_p0_any_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_p0_any_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass125', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:boolean)=>object',
            parameters: [{ type: '(p0:any,p1:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0024_p0_any_p1_boolean_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0024_p0_any_p1_boolean_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_p0_any_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_any_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp125.ts', `
        function h2cpp125(p: (p0:any,p1:boolean)=>object): (p0:any,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0025_any_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0025_any_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp125.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_p0_any_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn125', returns: '(p0:any,p1:boolean)=>object',
          parameters: [{ type: '(p0:any,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias125', alias: '(p0:any,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias125');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn125');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0026_p0_any_p1_boolean_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0026_p0_any_p1_boolean_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample125_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_p0_any_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_OBJECT_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_OBJECT_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_p0_object_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass126', alias: '',
          variableList: [{ type: '(p0:object,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0027_p0_object_p1_any_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_p0_object_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_OBJECT_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_OBJECT_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_p0_object_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun126', returns: '(p0:object,p1:any)=>object',
          parameters: [{ type: '(p0:object,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun126');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0028_p0_object_p1_any_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0028_p0_object_p1_any_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample126_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_p0_object_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_OBJECT_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_OBJECT_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_p0_object_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass126', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:any)=>object',
            parameters: [{ type: '(p0:object,p1:any)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0029_p0_object_p1_any_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0029_p0_object_p1_any_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_p0_object_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_OBJECT_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_object_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp126.ts', `
        function h2cpp126(p: (p0:object,p1:any)=>object): (p0:object,p1:any)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0030_object_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0030_object_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp126.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_OBJECT_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_OBJECT_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_p0_object_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn126', returns: '(p0:object,p1:any)=>object',
          parameters: [{ type: '(p0:object,p1:any)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias126', alias: '(p0:object,p1:any)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias126');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:any)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn126');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0031_p0_object_p1_any_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0031_p0_object_p1_any_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample126_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_p0_object_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_p0_object_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass127', alias: '',
          variableList: [{ type: '(p0:object,p1:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0032_p0_object_p1_object_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_p0_object_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_p0_object_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun127', returns: '(p0:object,p1:object)=>object',
          parameters: [{ type: '(p0:object,p1:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun127');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0033_p0_object_p1_object_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0033_p0_object_p1_object_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample127_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_p0_object_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_p0_object_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass127', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:object)=>object',
            parameters: [{ type: '(p0:object,p1:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0034_p0_object_p1_object_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0034_p0_object_p1_object_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_p0_object_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_object_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp127.ts', `
        function h2cpp127(p: (p0:object,p1:object)=>object): (p0:object,p1:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0035_object_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0035_object_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp127.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_p0_object_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn127', returns: '(p0:object,p1:object)=>object',
          parameters: [{ type: '(p0:object,p1:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias127', alias: '(p0:object,p1:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias127');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn127');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0036_p0_object_p1_object_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0036_p0_object_p1_object_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample127_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_p0_object_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_p0_object_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass128', alias: '',
          variableList: [{ type: '(p0:object,p1:number)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0037_p0_object_p1_number_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_p0_object_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_p0_object_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun128', returns: '(p0:object,p1:number)=>object',
          parameters: [{ type: '(p0:object,p1:number)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun128');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0038_p0_object_p1_number_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0038_p0_object_p1_number_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample128_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_p0_object_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_p0_object_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass128', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:number)=>object',
            parameters: [{ type: '(p0:object,p1:number)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0039_p0_object_p1_number_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0039_p0_object_p1_number_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_p0_object_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_object_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp128.ts', `
        function h2cpp128(p: (p0:object,p1:number)=>object): (p0:object,p1:number)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0040_object_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0040_object_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp128.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_p0_object_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn128', returns: '(p0:object,p1:number)=>object',
          parameters: [{ type: '(p0:object,p1:number)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias128', alias: '(p0:object,p1:number)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias128');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:number)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn128');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0041_p0_object_p1_number_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0041_p0_object_p1_number_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample128_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_p0_object_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_OBJECT_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_OBJECT_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_p0_object_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass129', alias: '',
          variableList: [{ type: '(p0:object,p1:string)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0042_p0_object_p1_string_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_p0_object_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_OBJECT_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_OBJECT_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_p0_object_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun129', returns: '(p0:object,p1:string)=>object',
          parameters: [{ type: '(p0:object,p1:string)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun129');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0043_p0_object_p1_string_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0043_p0_object_p1_string_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample129_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_p0_object_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_OBJECT_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_OBJECT_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_p0_object_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass129', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:string)=>object',
            parameters: [{ type: '(p0:object,p1:string)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0044_p0_object_p1_string_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0044_p0_object_p1_string_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_p0_object_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_OBJECT_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_object_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp129.ts', `
        function h2cpp129(p: (p0:object,p1:string)=>object): (p0:object,p1:string)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0045_object_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0045_object_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp129.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_OBJECT_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_OBJECT_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_p0_object_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn129', returns: '(p0:object,p1:string)=>object',
          parameters: [{ type: '(p0:object,p1:string)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias129', alias: '(p0:object,p1:string)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias129');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:string)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn129');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0046_p0_object_p1_string_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0046_p0_object_p1_string_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample129_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_p0_object_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_p0_object_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass130', alias: '',
          variableList: [{ type: '(p0:object,p1:boolean)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0047_p0_object_p1_boolean_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_p0_object_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_p0_object_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun130', returns: '(p0:object,p1:boolean)=>object',
          parameters: [{ type: '(p0:object,p1:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun130');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0048_p0_object_p1_boolean_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0048_p0_object_p1_boolean_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample130_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_p0_object_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_p0_object_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass130', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:boolean)=>object',
            parameters: [{ type: '(p0:object,p1:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0049_p0_object_p1_boolean_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0049_p0_object_p1_boolean_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_p0_object_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_object_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp130.ts', `
        function h2cpp130(p: (p0:object,p1:boolean)=>object): (p0:object,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0050_object_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0050_object_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp130.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_p0_object_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn130', returns: '(p0:object,p1:boolean)=>object',
          parameters: [{ type: '(p0:object,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias130', alias: '(p0:object,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias130');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn130');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0051_p0_object_p1_boolean_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0051_p0_object_p1_boolean_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample130_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_p0_object_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_NUMBER_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_NUMBER_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_p0_number_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass131', alias: '',
          variableList: [{ type: '(p0:number,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0052_p0_number_p1_any_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_p0_number_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_NUMBER_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_NUMBER_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_p0_number_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun131', returns: '(p0:number,p1:any)=>object',
          parameters: [{ type: '(p0:number,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun131');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0053_p0_number_p1_any_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0053_p0_number_p1_any_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample131_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun131') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_p0_number_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0001_number_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp135.ts', `
        function h2cpp135(p: (p0:number,p1:boolean)=>object): (p0:number,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0001_number_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0001_number_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp135.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_NUMBER_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_NUMBER_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0002_p0_number_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn135', returns: '(p0:number,p1:boolean)=>object',
          parameters: [{ type: '(p0:number,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias135', alias: '(p0:number,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias135');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn135');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0002_p0_number_p1_boolean_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0002_p0_number_p1_boolean_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample135_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002_p0_number_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_STRING_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_STRING_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_p0_string_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass136', alias: '',
          variableList: [{ type: '(p0:string,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0003_p0_string_p1_any_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_p0_string_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_STRING_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_STRING_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_string_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun136', returns: '(p0:string,p1:any)=>object',
          parameters: [{ type: '(p0:string,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun136');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0004_p0_string_p1_any_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0004_p0_string_p1_any_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample136_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_string_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_STRING_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_STRING_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_p0_string_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass136', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:any)=>object',
            parameters: [{ type: '(p0:string,p1:any)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0005_p0_string_p1_any_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0005_p0_string_p1_any_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_p0_string_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_STRING_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_STRING_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_string_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp136.ts', `
        function h2cpp136(p: (p0:string,p1:any)=>object): (p0:string,p1:any)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0006_string_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0006_string_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp136.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_STRING_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_STRING_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_p0_string_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn136', returns: '(p0:string,p1:any)=>object',
          parameters: [{ type: '(p0:string,p1:any)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias136', alias: '(p0:string,p1:any)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias136');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:any)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn136');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0007_p0_string_p1_any_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0007_p0_string_p1_any_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample136_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_p0_string_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_STRING_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_STRING_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_p0_string_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass137', alias: '',
          variableList: [{ type: '(p0:string,p1:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0008_p0_string_p1_object_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_p0_string_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_STRING_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_STRING_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0009_p0_string_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun137', returns: '(p0:string,p1:object)=>object',
          parameters: [{ type: '(p0:string,p1:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun137');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0009_p0_string_p1_object_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0009_p0_string_p1_object_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample137_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009_p0_string_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_STRING_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_STRING_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0010_p0_string_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass137', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:object)=>object',
            parameters: [{ type: '(p0:string,p1:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0010_p0_string_p1_object_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0010_p0_string_p1_object_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010_p0_string_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_STRING_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_string_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp137.ts', `
        function h2cpp137(p: (p0:string,p1:object)=>object): (p0:string,p1:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0011_string_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0011_string_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp137.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_STRING_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_STRING_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_p0_string_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn137', returns: '(p0:string,p1:object)=>object',
          parameters: [{ type: '(p0:string,p1:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias137', alias: '(p0:string,p1:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias137');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn137');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0012_p0_string_p1_object_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0012_p0_string_p1_object_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample137_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_p0_string_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_STRING_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_STRING_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_string_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass138', alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0013_p0_string_p1_number_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_string_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_STRING_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_STRING_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_p0_string_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun138', returns: '(p0:string,p1:number)=>object',
          parameters: [{ type: '(p0:string,p1:number)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun138');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0014_p0_string_p1_number_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0014_p0_string_p1_number_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample138_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_p0_string_p1_number_object execution error: ${String(err)}`);
    }
  });
});
