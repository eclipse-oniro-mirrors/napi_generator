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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_NUMBER_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_NUMBER_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_p0_number_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass108', alias: '',
          variableList: [{ type: '(p0:number,p1:object)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0011_p0_number_p1_object_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_p0_number_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_NUMBER_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_NUMBER_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_p0_number_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun108', returns: '(p0:number,p1:object)=>any',
          parameters: [{ type: '(p0:number,p1:object)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun108');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0012_p0_number_p1_object_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0012_p0_number_p1_object_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample108_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_p0_number_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_NUMBER_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_NUMBER_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_number_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass108', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:object)=>any',
            parameters: [{ type: '(p0:number,p1:object)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0013_p0_number_p1_object_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0013_p0_number_p1_object_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_number_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_number_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp108.ts', `
        function h2cpp108(p: (p0:number,p1:object)=>any): (p0:number,p1:object)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0014_number_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0014_number_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp108.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_NUMBER_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_NUMBER_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_p0_number_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn108', returns: '(p0:number,p1:object)=>any',
          parameters: [{ type: '(p0:number,p1:object)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias108', alias: '(p0:number,p1:object)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias108');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:object)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn108');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0015_p0_number_p1_object_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "h2dtscpp_convert_func_0015_p0_number_p1_object_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample108_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_p0_number_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_NUMBER_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_NUMBER_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_p0_number_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass109', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0016_p0_number_p1_number_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_p0_number_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_NUMBER_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_P0_NUMBER_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_p0_number_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun109', returns: '(p0:number,p1:number)=>any',
          parameters: [{ type: '(p0:number,p1:number)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun109');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0017_p0_number_p1_number_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0017_p0_number_p1_number_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample109_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_p0_number_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_NUMBER_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_NUMBER_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_number_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass109', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:number)=>any',
            parameters: [{ type: '(p0:number,p1:number)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0018_p0_number_p1_number_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0018_p0_number_p1_number_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_number_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_number_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp109.ts', `
        function h2cpp109(p: (p0:number,p1:number)=>any): (p0:number,p1:number)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0019_number_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0019_number_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp109.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_NUMBER_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_P0_NUMBER_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_p0_number_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn109', returns: '(p0:number,p1:number)=>any',
          parameters: [{ type: '(p0:number,p1:number)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias109', alias: '(p0:number,p1:number)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias109');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn109');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0020_p0_number_p1_number_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "h2dtscpp_convert_func_0020_p0_number_p1_number_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample109_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_p0_number_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_NUMBER_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_P0_NUMBER_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_p0_number_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass110', alias: '',
          variableList: [{ type: '(p0:number,p1:string)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0021_p0_number_p1_string_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_p0_number_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_NUMBER_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_P0_NUMBER_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_p0_number_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun110', returns: '(p0:number,p1:string)=>any',
          parameters: [{ type: '(p0:number,p1:string)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun110');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0022_p0_number_p1_string_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0022_p0_number_p1_string_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample110_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_p0_number_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_NUMBER_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_P0_NUMBER_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_p0_number_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass110', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:string)=>any',
            parameters: [{ type: '(p0:number,p1:string)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0023_p0_number_p1_string_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0023_p0_number_p1_string_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_p0_number_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_NUMBER_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_number_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp110.ts', `
        function h2cpp110(p: (p0:number,p1:string)=>any): (p0:number,p1:string)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0024_number_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0024_number_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp110.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_NUMBER_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_P0_NUMBER_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_p0_number_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn110', returns: '(p0:number,p1:string)=>any',
          parameters: [{ type: '(p0:number,p1:string)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias110', alias: '(p0:number,p1:string)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias110');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:string)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn110');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0025_p0_number_p1_string_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "h2dtscpp_convert_func_0025_p0_number_p1_string_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample110_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_p0_number_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_p0_number_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass111', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0026_p0_number_p1_boolean_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_p0_number_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_p0_number_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun111', returns: '(p0:number,p1:boolean)=>any',
          parameters: [{ type: '(p0:number,p1:boolean)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun111');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0027_p0_number_p1_boolean_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0027_p0_number_p1_boolean_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample111_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_p0_number_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_p0_number_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass111', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:boolean)=>any',
            parameters: [{ type: '(p0:number,p1:boolean)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_boolean_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0028_p0_number_p1_boolean_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_p0_number_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_number_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp111.ts', `
        function h2cpp111(p: (p0:number,p1:boolean)=>any): (p0:number,p1:boolean)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0029_number_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0029_number_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp111.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_p0_number_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn111', returns: '(p0:number,p1:boolean)=>any',
          parameters: [{ type: '(p0:number,p1:boolean)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias111', alias: '(p0:number,p1:boolean)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias111');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn111');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0030_p0_number_p1_boolean_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0030_p0_number_p1_boolean_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample111_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_p0_number_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_STRING_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_P0_STRING_P1_ANY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:string,p1:any)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_p0_string_p1_any_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass112', alias: '',
          variableList: [{ type: '(p0:string,p1:any)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0031_p0_string_p1_any_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_p0_string_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_STRING_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_P0_STRING_P1_ANY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_p0_string_p1_any_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun112', returns: '(p0:string,p1:any)=>any',
          parameters: [{ type: '(p0:string,p1:any)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun112');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0032_p0_string_p1_any_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0032_p0_string_p1_any_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample112_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_p0_string_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_STRING_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_P0_STRING_P1_ANY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:string,p1:any)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_p0_string_p1_any_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass112', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:any)=>any',
            parameters: [{ type: '(p0:string,p1:any)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0033_p0_string_p1_any_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0033_p0_string_p1_any_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_p0_string_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_STRING_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_STRING_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_string_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp112.ts', `
        function h2cpp112(p: (p0:string,p1:any)=>any): (p0:string,p1:any)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0034_string_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0034_string_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp112.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_STRING_P1_ANY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_P0_STRING_P1_ANY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_p0_string_p1_any_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn112', returns: '(p0:string,p1:any)=>any',
          parameters: [{ type: '(p0:string,p1:any)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias112', alias: '(p0:string,p1:any)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias112');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:any)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn112');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0035_p0_string_p1_any_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0035_p0_string_p1_any_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample112_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_p0_string_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_p0_string_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass113', alias: '',
          variableList: [{ type: '(p0:string,p1:object)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0036_p0_string_p1_object_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_p0_string_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun113', returns: '(p0:string,p1:object)=>any',
          parameters: [{ type: '(p0:string,p1:object)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun113');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0037_p0_string_p1_object_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0037_p0_string_p1_object_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample113_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_p0_string_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass113', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:object)=>any',
            parameters: [{ type: '(p0:string,p1:object)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0038_p0_string_p1_object_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0038_p0_string_p1_object_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_STRING_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_string_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp113.ts', `
        function h2cpp113(p: (p0:string,p1:object)=>any): (p0:string,p1:object)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0039_string_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0039_string_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp113.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_p0_string_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn113', returns: '(p0:string,p1:object)=>any',
          parameters: [{ type: '(p0:string,p1:object)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias113', alias: '(p0:string,p1:object)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias113');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:object)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn113');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0040_p0_string_p1_object_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0040_p0_string_p1_object_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample113_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_p0_string_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass114', alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0041_p0_string_p1_number_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_p0_string_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun114', returns: '(p0:string,p1:number)=>any',
          parameters: [{ type: '(p0:string,p1:number)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun114');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0042_p0_string_p1_number_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0042_p0_string_p1_number_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample114_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_p0_string_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass114', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>any',
            parameters: [{ type: '(p0:string,p1:number)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0043_p0_string_p1_number_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0043_p0_string_p1_number_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_STRING_P1_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_string_p1_number', () => {
    try {
      const parsed = doParseTs('h2cpp114.ts', `
        function h2cpp114(p: (p0:string,p1:number)=>any): (p0:string,p1:number)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0044_string_p1_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0044_string_p1_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp114.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_p0_string_p1_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn114', returns: '(p0:string,p1:number)=>any',
          parameters: [{ type: '(p0:string,p1:number)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias114', alias: '(p0:string,p1:number)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias114');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:number)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn114');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0045_p0_string_p1_number_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0045_p0_string_p1_number_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample114_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_p0_string_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass115', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0046_p0_string_p1_string_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_p0_string_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun115', returns: '(p0:string,p1:string)=>any',
          parameters: [{ type: '(p0:string,p1:string)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun115');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0047_p0_string_p1_string_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0047_p0_string_p1_string_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample115_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun115') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_p0_string_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass115', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>any',
            parameters: [{ type: '(p0:string,p1:string)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns,
        "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0048_p0_string_p1_string_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0048_p0_string_p1_string_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_STRING_P1_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_STRING_P1_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_string_p1_string', () => {
    try {
      const parsed = doParseTs('h2cpp115.ts', `
        function h2cpp115(p: (p0:string,p1:string)=>any): (p0:string,p1:string)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0049_string_p1_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0049_string_p1_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp115.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp115') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_p0_string_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn115', returns: '(p0:string,p1:string)=>any',
          parameters: [{ type: '(p0:string,p1:string)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias115', alias: '(p0:string,p1:string)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias115');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn115');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0050_p0_string_p1_string_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0050_p0_string_p1_string_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample115_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn115') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:string,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_p0_string_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass116', alias: '',
          variableList: [{ type: '(p0:string,p1:boolean)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0051_p0_string_p1_boolean_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:string,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_p0_string_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun116', returns: '(p0:string,p1:boolean)=>any',
          parameters: [{ type: '(p0:string,p1:boolean)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun116');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0052_p0_string_p1_boolean_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0052_p0_string_p1_boolean_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample116_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun116') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_STRING_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_STRING_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:string,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_p0_string_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass116', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:boolean)=>any',
            parameters: [{ type: '(p0:string,p1:boolean)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0053_p0_string_p1_boolean_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0053_p0_string_p1_boolean_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_p0_string_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_BOOLEAN_P1_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_BOOLEAN_P1_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0001_p0_boolean_p1_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn120', returns: '(p0:boolean,p1:string)=>any',
          parameters: [{ type: '(p0:boolean,p1:string)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias120', alias: '(p0:boolean,p1:string)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias120');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:string)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn120');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0001_p0_boolean_p1_string_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0001_p0_boolean_p1_string_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample120_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn120') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001_p0_boolean_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0002_p0_boolean_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass121', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0002_p0_boolean_p1_boolean_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002_p0_boolean_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:boolean,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_p0_boolean_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun121', returns: '(p0:boolean,p1:boolean)=>any',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun121');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0003_p0_boolean_p1_boolean_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0003_p0_boolean_p1_boolean_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample121_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun121') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_p0_boolean_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:boolean,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_boolean_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass121', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>any',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0004_p0_boolean_p1_boolean_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0004_p0_boolean_p1_boolean_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_boolean_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_boolean_p1_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp121.ts', `
        function h2cpp121(p: (p0:boolean,p1:boolean)=>any): (p0:boolean,p1:boolean)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0005_boolean_p1_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0005_boolean_p1_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp121.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp121') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_BOOLEAN_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_p0_boolean_p1_boolean_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn121', returns: '(p0:boolean,p1:boolean)=>any',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias121', alias: '(p0:boolean,p1:boolean)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias121');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn121');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0006_p0_boolean_p1_boolean_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0006_p0_boolean_p1_boolean_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample121_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn121') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_p0_boolean_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_ANY_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_ANY_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:any,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_p0_any_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass122', alias: '',
          variableList: [{ type: '(p0:any,p1:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0007_p0_any_p1_object_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_p0_any_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_ANY_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_ANY_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:any,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_p0_any_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun122', returns: '(p0:any,p1:object)=>object',
          parameters: [{ type: '(p0:any,p1:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun122');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0008_p0_any_p1_object_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0008_p0_any_p1_object_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample122_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun122') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_p0_any_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_ANY_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_ANY_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:any,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0009_p0_any_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass122', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:object)=>object',
            parameters: [{ type: '(p0:any,p1:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0009_p0_any_p1_object_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0009_p0_any_p1_object_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009_p0_any_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_ANY_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_ANY_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0010_any_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp122.ts', `
        function h2cpp122(p: (p0:any,p1:object)=>object): (p0:any,p1:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0010_any_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0010_any_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp122.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp122') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010_any_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_ANY_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_ANY_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:any,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_p0_any_p1_object_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn122', returns: '(p0:any,p1:object)=>object',
          parameters: [{ type: '(p0:any,p1:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias122', alias: '(p0:any,p1:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias122');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn122');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0011_p0_any_p1_object_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0011_p0_any_p1_object_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample122_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn122') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_p0_any_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_ANY_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_P0_ANY_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_p0_any_p1_number_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass123', alias: '',
          variableList: [{ type: '(p0:any,p1:number)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0012_p0_any_p1_number_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_p0_any_p1_number_object execution error: ${String(err)}`);
    }
  });
});
