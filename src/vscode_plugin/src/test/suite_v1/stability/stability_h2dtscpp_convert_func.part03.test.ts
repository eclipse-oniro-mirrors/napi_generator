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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_p0_number_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass50', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:boolean)=>boolean',
            parameters: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0005_p0_number_p1_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0005_p0_number_p1_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_number_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp50.ts', `
        function h2cpp50(p: (p0:number,p1:boolean)=>boolean): (p0:number,p1:boolean)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0006_number_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0006_number_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp50.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_p0_number_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn50', returns: '(p0:number,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias50', alias: '(p0:number,p1:boolean)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias50');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn50');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0007_p0_number_p1_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0007_p0_number_p1_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample50_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_p0_string_p1_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass51', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0008_p0_string_p1_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0009_p0_string_p1_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun51', returns: '(p0:string,p1:string)=>boolean',
          parameters: [{ type: '(p0:string,p1:string)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun51');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0009_p0_string_p1_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0009_p0_string_p1_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample51_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0010_p0_string_p1_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass51', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>boolean',
            parameters: [{ type: '(p0:string,p1:string)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0010_p0_string_p1_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0010_p0_string_p1_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_STRING_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_STRING_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_string_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp51.ts', `
        function h2cpp51(p: (p0:string,p1:string)=>boolean): (p0:string,p1:string)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0011_string_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0011_string_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp51.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_p0_string_p1_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn51', returns: '(p0:string,p1:string)=>boolean',
          parameters: [{ type: '(p0:string,p1:string)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias51', alias: '(p0:string,p1:string)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias51');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn51');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0012_p0_string_p1_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0012_p0_string_p1_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample51_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_boolean_p1_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass52', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0013_p0_boolean_p1_number_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_p0_boolean_p1_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun52', returns: '(p0:boolean,p1:number)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun52');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0014_p0_boolean_p1_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0014_p0_boolean_p1_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample52_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_p0_boolean_p1_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass52', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>boolean',
            parameters: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0015_p0_boolean_p1_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0015_p0_boolean_p1_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_boolean_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp52.ts', `
        function h2cpp52(p: (p0:boolean,p1:number)=>boolean): (p0:boolean,p1:number)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0016_boolean_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0016_boolean_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp52.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_p0_boolean_p1_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn52', returns: '(p0:boolean,p1:number)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias52', alias: '(p0:boolean,p1:number)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias52');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn52');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0017_p0_boolean_p1_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0017_p0_boolean_p1_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample52_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_boolean_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass53', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0018_p0_boolean_p1_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_boolean_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_p0_boolean_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun53', returns: '(p0:boolean,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun53');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0019_p0_boolean_p1_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0019_p0_boolean_p1_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample53_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_p0_boolean_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_p0_boolean_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass53', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>boolean',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0020_p0_boolean_p1_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0020_p0_boolean_p1_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_p0_boolean_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_boolean_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp53.ts', `
        function h2cpp53(p: (p0:boolean,p1:boolean)=>boolean): (p0:boolean,p1:boolean)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0021_boolean_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0021_boolean_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp53.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_p0_boolean_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn53', returns: '(p0:boolean,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias53', alias: '(p0:boolean,p1:boolean)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias53');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn53');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0022_p0_boolean_p1_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0022_p0_boolean_p1_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample53_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_p0_boolean_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_NUMBER_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_NUMBER_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_p0_number_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass54', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0023_p0_number_p1_number_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_p0_number_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_NUMBER_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_P0_NUMBER_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_p0_number_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun54', returns: '(p0:number,p1:number)=>void',
          parameters: [{ type: '(p0:number,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun54');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0024_p0_number_p1_number_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0024_p0_number_p1_number_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample54_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_p0_number_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_NUMBER_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_NUMBER_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_p0_number_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass54', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:number)=>void',
            parameters: [{ type: '(p0:number,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0025_p0_number_p1_number_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0025_p0_number_p1_number_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_p0_number_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_number_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp54.ts', `
        function h2cpp54(p: (p0:number,p1:number)=>void): (p0:number,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0026_number_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0026_number_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp54.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_NUMBER_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_NUMBER_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_p0_number_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn54', returns: '(p0:number,p1:number)=>void',
          parameters: [{ type: '(p0:number,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias54', alias: '(p0:number,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias54');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn54');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0027_p0_number_p1_number_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0027_p0_number_p1_number_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample54_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_p0_number_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_p0_number_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass55', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_boolean_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_p0_number_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_p0_number_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun55', returns: '(p0:number,p1:boolean)=>void',
          parameters: [{ type: '(p0:number,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun55');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0029_p0_number_p1_boolean_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0029_p0_number_p1_boolean_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample55_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_p0_number_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_p0_number_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass55', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:boolean)=>void',
            parameters: [{ type: '(p0:number,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0030_p0_number_p1_boolean_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0030_p0_number_p1_boolean_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_p0_number_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_number_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp55.ts', `
        function h2cpp55(p: (p0:number,p1:boolean)=>void): (p0:number,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0031_number_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0031_number_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp55.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_p0_number_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn55', returns: '(p0:number,p1:boolean)=>void',
          parameters: [{ type: '(p0:number,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias55', alias: '(p0:number,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias55');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn55');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0032_p0_number_p1_boolean_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0032_p0_number_p1_boolean_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample55_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_p0_number_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_STRING_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_STRING_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_p0_string_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass56', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0033_p0_string_p1_string_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_p0_string_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_STRING_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_P0_STRING_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_p0_string_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun56', returns: '(p0:string,p1:string)=>void',
          parameters: [{ type: '(p0:string,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun56');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0034_p0_string_p1_string_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0034_p0_string_p1_string_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample56_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_p0_string_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_STRING_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_STRING_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_p0_string_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass56', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>void',
            parameters: [{ type: '(p0:string,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0035_p0_string_p1_string_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0035_p0_string_p1_string_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_p0_string_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_STRING_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_STRING_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_string_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp56.ts', `
        function h2cpp56(p: (p0:string,p1:string)=>void): (p0:string,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0036_string_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0036_string_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp56.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_STRING_P1_STRING_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_STRING_P1_STRING_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_p0_string_p1_string_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn56', returns: '(p0:string,p1:string)=>void',
          parameters: [{ type: '(p0:string,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias56', alias: '(p0:string,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias56');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn56');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0037_p0_string_p1_string_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0037_p0_string_p1_string_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample56_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_p0_string_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_p0_boolean_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass57', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0038_p0_boolean_p1_number_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_p0_boolean_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_p0_boolean_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun57', returns: '(p0:boolean,p1:number)=>void',
          parameters: [{ type: '(p0:boolean,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun57');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0039_p0_boolean_p1_number_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0039_p0_boolean_p1_number_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample57_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_p0_boolean_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_p0_boolean_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass57', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>void',
            parameters: [{ type: '(p0:boolean,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0040_p0_boolean_p1_number_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0040_p0_boolean_p1_number_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_p0_boolean_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_boolean_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp57.ts', `
        function h2cpp57(p: (p0:boolean,p1:number)=>void): (p0:boolean,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0041_boolean_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0041_boolean_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp57.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_p0_boolean_p1_number_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn57', returns: '(p0:boolean,p1:number)=>void',
          parameters: [{ type: '(p0:boolean,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias57', alias: '(p0:boolean,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias57');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn57');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0042_p0_boolean_p1_number_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0042_p0_boolean_p1_number_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample57_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_p0_boolean_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass58', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_p0_boolean_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun58', returns: '(p0:boolean,p1:boolean)=>void',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun58');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample58_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_p0_boolean_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_p0_boolean_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass58', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>void',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0045_p0_boolean_p1_boolean_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0045_p0_boolean_p1_boolean_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_p0_boolean_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_boolean_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp58.ts', `
        function h2cpp58(p: (p0:boolean,p1:boolean)=>void): (p0:boolean,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0046_boolean_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0046_boolean_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp58.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_p0_boolean_p1_boolean_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn58', returns: '(p0:boolean,p1:boolean)=>void',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias58', alias: '(p0:boolean,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias58');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn58');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0047_p0_boolean_p1_boolean_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0047_p0_boolean_p1_boolean_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample58_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_p0_boolean_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_CALLBACK_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_CALLBACK_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Callback<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_callback_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass69', alias: '',
          variableList: [{ type: 'Callback<any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0048_callback_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_callback_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_CALLBACK_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_CALLBACK_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Callback<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_callback_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun69', returns: 'Callback<any>',
          parameters: [{ type: 'Callback<any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun69');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0049_callback_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0049_callback_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample69_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_callback_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_CALLBACK_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_CALLBACK_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Callback<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_callback_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass69', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<any>',
            parameters: [{ type: 'Callback<any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0050_callback_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0050_callback_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_callback_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_CALLBACK_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_CALLBACK_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type Callback<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_callback_any', () => {
    try {
      const parsed = doParseTs('h2cpp69.ts', `function h2cpp69(p: Callback<any>): Callback<any> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0051_callback_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0051_callback_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp69.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_callback_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_CALLBACK_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_CALLBACK_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Callback<any>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_callback_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn69', returns: 'Callback<any>',
          parameters: [{ type: 'Callback<any>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias69', alias: 'Callback<any>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias69');
      assert.strictEqual(converted.types[0].alias, 'Callback<any>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn69');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0052_callback_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0052_callback_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample69_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_callback_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_CALLBACK_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_CALLBACK_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Callback<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_callback_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass70', alias: '',
          variableList: [{ type: 'Callback<object>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0053_callback_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_callback_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:object)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0001_p0_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass74', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object)=>object',
            parameters: [{ type: '(p0:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0001_p0_object_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0001_p0_object_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001_p0_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0002_object', () => {
    try {
      const parsed = doParseTs('h2cpp74.ts', `
        function h2cpp74(p: (p0:object)=>object): (p0:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0002_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0002_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp74.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp74') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_p0_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn74', returns: '(p0:object)=>object',
          parameters: [{ type: '(p0:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias74', alias: '(p0:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias74');
      assert.strictEqual(converted.types[0].alias, '(p0:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn74');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0003_p0_object_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0003_p0_object_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample74_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn74') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_p0_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_ANY_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_ANY_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:any,p1:object)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_any_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass75', alias: '',
          variableList: [{ type: '(p0:any,p1:object)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0004_p0_any_p1_object_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_any_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_ANY_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_ANY_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:any,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_p0_any_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun75', returns: '(p0:any,p1:object)=>void',
          parameters: [{ type: '(p0:any,p1:object)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun75');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0005_p0_any_p1_object_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0005_p0_any_p1_object_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample75_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_p0_any_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_ANY_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_ANY_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:any,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_p0_any_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass75', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:object)=>void',
            parameters: [{ type: '(p0:any,p1:object)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0006_p0_any_p1_object_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0006_p0_any_p1_object_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_p0_any_p1_object_void execution error: ${String(err)}`);
    }
  });
});
