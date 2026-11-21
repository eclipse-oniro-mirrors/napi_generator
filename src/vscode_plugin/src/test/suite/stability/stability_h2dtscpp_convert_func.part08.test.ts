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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_STRING_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_STRING_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_p0_string_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass138', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>object',
            parameters: [{ type: '(p0:string,p1:number)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0015_p0_string_p1_number_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0015_p0_string_p1_number_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_p0_string_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_STRING_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_string_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp138.ts', `
        function h2cpp138(p: (p0:string,p1:number)=>object): (p0:string,p1:number)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0016_string_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0016_string_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp138.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_STRING_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_STRING_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_p0_string_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn138', returns: '(p0:string,p1:number)=>object',
          parameters: [{ type: '(p0:string,p1:number)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias138', alias: '(p0:string,p1:number)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias138');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:number)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn138');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0017_p0_string_p1_number_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0017_p0_string_p1_number_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample138_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_p0_string_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_string_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass139', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0018_p0_string_p1_string_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_p0_string_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun139', returns: '(p0:string,p1:string)=>object',
          parameters: [{ type: '(p0:string,p1:string)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun139');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0019_p0_string_p1_string_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0019_p0_string_p1_string_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample139_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_p0_string_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass139', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>object',
            parameters: [{ type: '(p0:string,p1:string)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns,
        "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0020_p0_string_p1_string_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0020_p0_string_p1_string_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_STRING_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_STRING_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_string_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp139.ts', `
        function h2cpp139(p: (p0:string,p1:string)=>object): (p0:string,p1:string)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0021_string_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0021_string_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp139.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_STRING_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_STRING_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_p0_string_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn139', returns: '(p0:string,p1:string)=>object',
          parameters: [{ type: '(p0:string,p1:string)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias139', alias: '(p0:string,p1:string)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias139');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn139');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0022_p0_string_p1_string_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0022_p0_string_p1_string_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample139_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_p0_string_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_p0_string_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass140', alias: '',
          variableList: [{ type: '(p0:string,p1:boolean)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0023_p0_string_p1_boolean_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_p0_string_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_p0_string_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun140', returns: '(p0:string,p1:boolean)=>object',
          parameters: [{ type: '(p0:string,p1:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun140');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0024_p0_string_p1_boolean_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0024_p0_string_p1_boolean_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample140_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_p0_string_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_p0_string_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass140', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:boolean)=>object',
            parameters: [{ type: '(p0:string,p1:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0025_p0_string_p1_boolean_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0025_p0_string_p1_boolean_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_p0_string_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_STRING_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_STRING_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_string_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp140.ts', `
        function h2cpp140(p: (p0:string,p1:boolean)=>object): (p0:string,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0026_string_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0026_string_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp140.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_string_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_STRING_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_p0_string_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn140', returns: '(p0:string,p1:boolean)=>object',
          parameters: [{ type: '(p0:string,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias140', alias: '(p0:string,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias140');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn140');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0027_p0_string_p1_boolean_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0027_p0_string_p1_boolean_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample140_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_p0_string_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_p0_boolean_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass141', alias: '',
          variableList: [{ type: '(p0:boolean,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0028_p0_boolean_p1_any_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_p0_boolean_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun141', returns: '(p0:boolean,p1:any)=>object',
          parameters: [{ type: '(p0:boolean,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun141');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0029_p0_boolean_p1_any_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0029_p0_boolean_p1_any_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample141_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_p0_boolean_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass141', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:any)=>object',
            parameters: [{ type: '(p0:boolean,p1:any)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0030_p0_boolean_p1_any_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0030_p0_boolean_p1_any_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_BOOLEAN_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_BOOLEAN_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_boolean_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp141.ts', `
        function h2cpp141(p: (p0:boolean,p1:any)=>object): (p0:boolean,p1:any)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0031_boolean_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0031_boolean_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp141.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_boolean_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_BOOLEAN_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_p0_boolean_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn141', returns: '(p0:boolean,p1:any)=>object',
          parameters: [{ type: '(p0:boolean,p1:any)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias141', alias: '(p0:boolean,p1:any)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias141');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:any)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn141');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0032_p0_boolean_p1_any_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0032_p0_boolean_p1_any_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample141_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_p0_boolean_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_p0_boolean_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass142', alias: '',
          variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0033_p0_boolean_p1_object_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_p0_boolean_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun142', returns: '(p0:boolean,p1:object)=>object',
          parameters: [{ type: '(p0:boolean,p1:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun142');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0034_p0_boolean_p1_object_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0034_p0_boolean_p1_object_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample142_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_p0_boolean_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass142', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:object)=>object',
            parameters: [{ type: '(p0:boolean,p1:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0035_p0_boolean_p1_object_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0035_p0_boolean_p1_object_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_BOOLEAN_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_BOOLEAN_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_boolean_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp142.ts', `
        function h2cpp142(p: (p0:boolean,p1:object)=>object): (p0:boolean,p1:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0036_boolean_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0036_boolean_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp142.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_boolean_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_BOOLEAN_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_p0_boolean_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn142', returns: '(p0:boolean,p1:object)=>object',
          parameters: [{ type: '(p0:boolean,p1:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias142', alias: '(p0:boolean,p1:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias142');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn142');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0037_p0_boolean_p1_object_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0037_p0_boolean_p1_object_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample142_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_p0_boolean_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_p0_boolean_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass143', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0038_p0_boolean_p1_number_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_p0_boolean_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun143', returns: '(p0:boolean,p1:number)=>object',
          parameters: [{ type: '(p0:boolean,p1:number)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun143');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0039_p0_boolean_p1_number_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0039_p0_boolean_p1_number_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample143_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_p0_boolean_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass143', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>object',
            parameters: [{ type: '(p0:boolean,p1:number)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0040_p0_boolean_p1_number_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0040_p0_boolean_p1_number_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_BOOLEAN_P1_NUMBER_V2
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_BOOLEAN_P1_NUMBER_V2
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_boolean_p1_number_v2', () => {
    try {
      const parsed = doParseTs('h2cpp143.ts', `
        function h2cpp143(p: (p0:boolean,p1:number)=>object): (p0:boolean,p1:number)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0041_boolean_p1_number_v2 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0041_boolean_p1_number_v2 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp143.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_boolean_p1_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_BOOLEAN_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_p0_boolean_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn143', returns: '(p0:boolean,p1:number)=>object',
          parameters: [{ type: '(p0:boolean,p1:number)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias143', alias: '(p0:boolean,p1:number)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias143');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn143');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0042_p0_boolean_p1_number_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0042_p0_boolean_p1_number_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample143_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_p0_boolean_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_p0_boolean_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass144', alias: '',
          variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0043_p0_boolean_p1_string_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_p0_boolean_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun144', returns: '(p0:boolean,p1:string)=>object',
          parameters: [{ type: '(p0:boolean,p1:string)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun144');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0044_p0_boolean_p1_string_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0044_p0_boolean_p1_string_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample144_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_p0_boolean_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass144', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:string)=>object',
            parameters: [{ type: '(p0:boolean,p1:string)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0045_p0_boolean_p1_string_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0045_p0_boolean_p1_string_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_BOOLEAN_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_BOOLEAN_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_boolean_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp144.ts', `
        function h2cpp144(p: (p0:boolean,p1:string)=>object): (p0:boolean,p1:string)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0046_boolean_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0046_boolean_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp144.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_boolean_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_BOOLEAN_P1_STRING_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_p0_boolean_p1_string_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn144', returns: '(p0:boolean,p1:string)=>object',
          parameters: [{ type: '(p0:boolean,p1:string)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias144', alias: '(p0:boolean,p1:string)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias144');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:string)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn144');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0047_p0_boolean_p1_string_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0047_p0_boolean_p1_string_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample144_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_p0_boolean_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_p0_boolean_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass145', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0048_p0_boolean_p1_boolean_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_p0_boolean_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun145', returns: '(p0:boolean,p1:boolean)=>object',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun145');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0049_p0_boolean_p1_boolean_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0049_p0_boolean_p1_boolean_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample145_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_p0_boolean_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass145', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>object',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0050_p0_boolean_p1_boolean_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0050_p0_boolean_p1_boolean_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_boolean_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp145.ts', `
        function h2cpp145(p: (p0:boolean,p1:boolean)=>object): (p0:boolean,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0051_boolean_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0051_boolean_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp145.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_BOOLEAN_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_p0_boolean_p1_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn145', returns: '(p0:boolean,p1:boolean)=>object',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias145', alias: '(p0:boolean,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias145');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn145');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0052_p0_boolean_p1_boolean_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0052_p0_boolean_p1_boolean_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample145_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_p0_boolean_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:any,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_p0_any_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass146', alias: '',
          variableList: [{ type: '(p0:any,p1:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0053_p0_any_p1_any_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0001_p0_object_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass150', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:any)=>void',
            parameters: [{ type: '(p0:object,p1:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0001_p0_object_p1_any_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0001_p0_object_p1_any_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_OBJECT_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0002_object_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp150.ts', `
        function h2cpp150(p: (p0:object,p1:any)=>void): (p0:object,p1:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0002_object_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0002_object_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_p0_object_p1_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn150', returns: '(p0:object,p1:any)=>void',
          parameters: [{ type: '(p0:object,p1:any)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias150', alias: '(p0:object,p1:any)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias150');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:any)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn150');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0003_p0_object_p1_any_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0003_p0_object_p1_any_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample150_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_object_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass151', alias: '',
          variableList: [{ type: '(p0:object,p1:object)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0004_p0_object_p1_object_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_p0_object_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun151', returns: '(p0:object,p1:object)=>void',
          parameters: [{ type: '(p0:object,p1:object)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun151');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0005_p0_object_p1_object_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0005_p0_object_p1_object_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample151_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_p0_object_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass151', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:object)=>void',
            parameters: [{ type: '(p0:object,p1:object)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0006_p0_object_p1_object_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0006_p0_object_p1_object_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_object_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp151.ts', `
        function h2cpp151(p: (p0:object,p1:object)=>void): (p0:object,p1:object)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0007_object_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0007_object_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_p0_object_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn151', returns: '(p0:object,p1:object)=>void',
          parameters: [{ type: '(p0:object,p1:object)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias151', alias: '(p0:object,p1:object)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias151');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:object)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn151');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0008_p0_object_p1_object_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0008_p0_object_p1_object_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample151_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0009_p0_object_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass152', alias: '',
          variableList: [{ type: '(p0:object,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0009_p0_object_p1_number_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0010_p0_object_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun152', returns: '(p0:object,p1:number)=>void',
          parameters: [{ type: '(p0:object,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun152');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0010_p0_object_p1_number_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0010_p0_object_p1_number_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample152_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_p0_object_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass152', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:number)=>void',
            parameters: [{ type: '(p0:object,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0011_p0_object_p1_number_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0011_p0_object_p1_number_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_object_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp152.ts', `
        function h2cpp152(p: (p0:object,p1:number)=>void): (p0:object,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0012_object_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0012_object_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp152.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_object_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn152', returns: '(p0:object,p1:number)=>void',
          parameters: [{ type: '(p0:object,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias152', alias: '(p0:object,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias152');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn152');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0013_p0_object_p1_number_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0013_p0_object_p1_number_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample152_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_p0_object_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass153', alias: '',
          variableList: [{ type: '(p0:object,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0014_p0_object_p1_string_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_p0_object_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun153', returns: '(p0:object,p1:string)=>void',
          parameters: [{ type: '(p0:object,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun153');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0015_p0_object_p1_string_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0015_p0_object_p1_string_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample153_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_p0_object_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass153', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:string)=>void',
            parameters: [{ type: '(p0:object,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0016_p0_object_p1_string_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0016_p0_object_p1_string_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });
});
