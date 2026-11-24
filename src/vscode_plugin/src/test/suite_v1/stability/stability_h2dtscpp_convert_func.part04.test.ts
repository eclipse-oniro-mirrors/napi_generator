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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_ANY_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_ANY_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_any_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp75.ts', `
        function h2cpp75(p: (p0:any,p1:object)=>void): (p0:any,p1:object)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0007_any_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0007_any_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp75.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_any_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_ANY_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_P0_ANY_P1_OBJECT_VOID
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:any,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_p0_any_p1_object_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn75', returns: '(p0:any,p1:object)=>void',
          parameters: [{ type: '(p0:any,p1:object)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias75', alias: '(p0:any,p1:object)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias75');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:object)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn75');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0008_p0_any_p1_object_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0008_p0_any_p1_object_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample75_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_p0_any_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_ANY_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0009_P0_ANY_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:any,p1:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0009_p0_any_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass76', alias: '',
          variableList: [{ type: '(p0:any,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0009_p0_any_p1_any_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009_p0_any_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_ANY_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0010_P0_ANY_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0010_p0_any_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun76', returns: '(p0:any,p1:any)=>object',
          parameters: [{ type: '(p0:any,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun76');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0010_p0_any_p1_any_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0010_p0_any_p1_any_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample76_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010_p0_any_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_ANY_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0011_P0_ANY_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:any,p1:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0011_p0_any_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass76', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:any)=>object',
            parameters: [{ type: '(p0:any,p1:any)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0011_p0_any_p1_any_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0011_p0_any_p1_any_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011_p0_any_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_ANY_P1_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0012_ANY_P1_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0012_any_p1_any', () => {
    try {
      const parsed = doParseTs('h2cpp76.ts', `
        function h2cpp76(p: (p0:any,p1:any)=>object): (p0:any,p1:any)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0012_any_p1_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0012_any_p1_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp76.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_ANY_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0013_P0_ANY_P1_ANY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0013_p0_any_p1_any_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn76', returns: '(p0:any,p1:any)=>object',
          parameters: [{ type: '(p0:any,p1:any)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias76', alias: '(p0:any,p1:any)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias76');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:any)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn76');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0013_p0_any_p1_any_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0013_p0_any_p1_any_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample76_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013_p0_any_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_OBJECT_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0014_P0_OBJECT_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0014_p0_object_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass77', alias: '',
          variableList: [{ type: '(p0:object,p1:object)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0014_p0_object_p1_object_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014_p0_object_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_OBJECT_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0015_P0_OBJECT_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0015_p0_object_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun77', returns: '(p0:object,p1:object)=>any',
          parameters: [{ type: '(p0:object,p1:object)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun77');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0015_p0_object_p1_object_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0015_p0_object_p1_object_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample77_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015_p0_object_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_OBJECT_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0016_P0_OBJECT_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0016_p0_object_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass77', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:object)=>any',
            parameters: [{ type: '(p0:object,p1:object)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0016_p0_object_p1_object_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0016_p0_object_p1_object_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016_p0_object_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0017_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0017_object_p1_object', () => {
    try {
      const parsed = doParseTs('h2cpp77.ts', `
        function h2cpp77(p: (p0:object,p1:object)=>any): (p0:object,p1:object)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0017_object_p1_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0017_object_p1_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp77.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_OBJECT_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0018_P0_OBJECT_P1_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0018_p0_object_p1_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn77', returns: '(p0:object,p1:object)=>any',
          parameters: [{ type: '(p0:object,p1:object)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias77', alias: '(p0:object,p1:object)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias77');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:object)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn77');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0018_p0_object_p1_object_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0018_p0_object_p1_object_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample77_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018_p0_object_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_PROMISE_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0019_PROMISE_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Promise<any>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0019_promise_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass80', alias: '',
          variableList: [{ type: 'Promise<any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<any>",
        "h2dtscpp_convert_func_0019_promise_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_PROMISE_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0020_PROMISE_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0020_promise_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun80', returns: 'Promise<any>',
          parameters: [{ type: 'Promise<any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun80');
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>",
        "h2dtscpp_convert_func_0020_promise_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "h2dtscpp_convert_func_0020_promise_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample80_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_PROMISE_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0021_PROMISE_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0021_promise_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass80', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<any>',
            parameters: [{ type: 'Promise<any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<any>",
        "h2dtscpp_convert_func_0021_promise_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<any>",
        "h2dtscpp_convert_func_0021_promise_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_PROMISE_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0022_PROMISE_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0022_promise_any', () => {
    try {
      const parsed = doParseTs('h2cpp80.ts', `function h2cpp80(p: Promise<any>): Promise<any> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>",
        "h2dtscpp_convert_func_0022_promise_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "h2dtscpp_convert_func_0022_promise_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp80.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_PROMISE_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0023_PROMISE_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Promise<any>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0023_promise_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn80', returns: 'Promise<any>',
          parameters: [{ type: 'Promise<any>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias80', alias: 'Promise<any>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias80');
      assert.strictEqual(converted.types[0].alias, 'Promise<any>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn80');
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>",
        "h2dtscpp_convert_func_0023_promise_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "h2dtscpp_convert_func_0023_promise_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample80_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_PROMISE_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0024_PROMISE_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0024_promise_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass81', alias: '',
          variableList: [{ type: 'Promise<object>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<object>",
        "h2dtscpp_convert_func_0024_promise_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_PROMISE_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0025_PROMISE_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0025_promise_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun81', returns: 'Promise<object>',
          parameters: [{ type: 'Promise<object>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun81');
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "h2dtscpp_convert_func_0025_promise_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "h2dtscpp_convert_func_0025_promise_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample81_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_PROMISE_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0026_PROMISE_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0026_promise_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass81', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<object>',
            parameters: [{ type: 'Promise<object>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<object>",
        "h2dtscpp_convert_func_0026_promise_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<object>",
        "h2dtscpp_convert_func_0026_promise_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_PROMISE_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0027_PROMISE_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0027_promise_object', () => {
    try {
      const parsed = doParseTs('h2cpp81.ts', `function h2cpp81(p: Promise<object>): Promise<object> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "h2dtscpp_convert_func_0027_promise_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "h2dtscpp_convert_func_0027_promise_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp81.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_PROMISE_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0028_PROMISE_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Promise<object>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0028_promise_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn81', returns: 'Promise<object>',
          parameters: [{ type: 'Promise<object>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias81', alias: 'Promise<object>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias81');
      assert.strictEqual(converted.types[0].alias, 'Promise<object>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn81');
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "h2dtscpp_convert_func_0028_promise_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "h2dtscpp_convert_func_0028_promise_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample81_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0029_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Callback<Array<any>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0029_callback_array_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass82', alias: '',
          variableList: [{ type: 'Callback<Array<any>>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0029_callback_array_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0030_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type Callback<Array<any>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0030_callback_array_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun82', returns: 'Callback<Array<any>>',
          parameters: [{ type: 'Callback<Array<any>>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun82');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0030_callback_array_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0030_callback_array_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample82_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0031_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Callback<Array<any>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0031_callback_array_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass82', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<Array<any>>',
            parameters: [{ type: 'Callback<Array<any>>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0031_callback_array_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0031_callback_array_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0032_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            Callback<Array<any>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0032_callback_array_any', () => {
    try {
      const parsed = doParseTs('h2cpp82.ts', `
        function h2cpp82(p: Callback<Array<any>>): Callback<Array<any>> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0032_callback_array_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0032_callback_array_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp82.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0033_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Callback<Array<any>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0033_callback_array_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn82', returns: 'Callback<Array<any>>',
          parameters: [{ type: 'Callback<Array<any>>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias82', alias: 'Callback<Array<any>>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias82');
      assert.strictEqual(converted.types[0].alias, 'Callback<Array<any>>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn82');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0033_callback_array_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "h2dtscpp_convert_func_0033_callback_array_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample82_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0034_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type Callback<Array<object>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0034_callback_array_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass83', alias: '',
          variableList: [{ type: 'Callback<Array<object>>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0034_callback_array_object class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0035_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0035_callback_array_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun83', returns: 'Callback<Array<object>>',
          parameters: [{ type: 'Callback<Array<object>>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun83');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0035_callback_array_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0035_callback_array_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample83_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0036_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type Callback<Array<object>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0036_callback_array_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass83', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<Array<object>>',
            parameters: [{ type: 'Callback<Array<object>>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0036_callback_array_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0036_callback_array_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0037_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0037_callback_array_object', () => {
    try {
      const parsed = doParseTs('h2cpp83.ts', `
        function h2cpp83(p: Callback<Array<object>>): Callback<Array<object>> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0037_callback_array_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0037_callback_array_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp83.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0038_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0038_callback_array_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn83', returns: 'Callback<Array<object>>',
          parameters: [{ type: 'Callback<Array<object>>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias83', alias: 'Callback<Array<object>>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias83');
      assert.strictEqual(converted.types[0].alias, 'Callback<Array<object>>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn83');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0038_callback_array_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "h2dtscpp_convert_func_0038_callback_array_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample83_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0039_P0_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0039_p0_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass84', alias: '',
          variableList: [{ type: '(p0:object)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0039_p0_object_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039_p0_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0040_P0_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0040_p0_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun84', returns: '(p0:object)=>any',
          parameters: [{ type: '(p0:object)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun84');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0040_p0_object_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0040_p0_object_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample84_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040_p0_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0041_P0_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0041_p0_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass84', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object)=>any',
            parameters: [{ type: '(p0:object)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0041_p0_object_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0041_p0_object_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041_p0_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0042_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0042_object', () => {
    try {
      const parsed = doParseTs('h2cpp84.ts', `function h2cpp84(p: (p0:object)=>any): (p0:object)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0042_object parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0042_object parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp84.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_OBJECT_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0043_P0_OBJECT_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0043_p0_object_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn84', returns: '(p0:object)=>any',
          parameters: [{ type: '(p0:object)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias84', alias: '(p0:object)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias84');
      assert.strictEqual(converted.types[0].alias, '(p0:object)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn84');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0043_p0_object_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0043_p0_object_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample84_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043_p0_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0044_P0_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0044_p0_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass85', alias: '',
          variableList: [{ type: '(p0:number)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0044_p0_number_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044_p0_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0045_P0_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0045_p0_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun85', returns: '(p0:number)=>any',
          parameters: [{ type: '(p0:number)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun85');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0045_p0_number_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0045_p0_number_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample85_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045_p0_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0046_P0_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0046_p0_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass85', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>any',
            parameters: [{ type: '(p0:number)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0046_p0_number_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0046_p0_number_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046_p0_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0047_NUMBER
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0047_number', () => {
    try {
      const parsed = doParseTs('h2cpp85.ts', `function h2cpp85(p: (p0:number)=>any): (p0:number)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0047_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0047_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp85.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_NUMBER_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0048_P0_NUMBER_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0048_p0_number_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn85', returns: '(p0:number)=>any',
          parameters: [{ type: '(p0:number)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias85', alias: '(p0:number)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias85');
      assert.strictEqual(converted.types[0].alias, '(p0:number)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn85');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0048_p0_number_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "h2dtscpp_convert_func_0048_p0_number_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample85_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048_p0_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0049_P0_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0049_p0_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass86', alias: '',
          variableList: [{ type: '(p0:string)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0049_p0_string_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049_p0_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_P0_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0050_P0_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0050_p0_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun86', returns: '(p0:string)=>any',
          parameters: [{ type: '(p0:string)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun86');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0050_p0_string_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0050_p0_string_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample86_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050_p0_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0051_P0_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0051_p0_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass86', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string)=>any',
            parameters: [{ type: '(p0:string)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0051_p0_string_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0051_p0_string_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051_p0_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0052_STRING
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0052_string', () => {
    try {
      const parsed = doParseTs('h2cpp86.ts', `function h2cpp86(p: (p0:string)=>any): (p0:string)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0052_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0052_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp86.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0053_P0_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0053_p0_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn86', returns: '(p0:string)=>any',
          parameters: [{ type: '(p0:string)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias86', alias: '(p0:string)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias86');
      assert.strictEqual(converted.types[0].alias, '(p0:string)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn86');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0053_p0_string_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "h2dtscpp_convert_func_0053_p0_string_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample86_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053_p0_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0001_P0_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:boolean)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0001_p0_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun91', returns: '(p0:boolean)=>object',
          parameters: [{ type: '(p0:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun91');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0001_p0_boolean_object global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0001_p0_boolean_object global param type convert convert output");
      const generated = generateFunctions(converted, 'sample91_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001_p0_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0002_P0_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:boolean)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0002_p0_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass91', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean)=>object',
            parameters: [{ type: '(p0:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0002_p0_boolean_object class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0002_p0_boolean_object class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002_p0_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0003_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0003_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp91.ts', `
        function h2cpp91(p: (p0:boolean)=>object): (p0:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0003_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0003_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp91.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0004_P0_BOOLEAN_OBJECT
   * @tc.desc   Stability convert h2dtscpp/func: type-alias and global-function convert; type
   *            (p0:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0004_p0_boolean_object', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn91', returns: '(p0:boolean)=>object',
          parameters: [{ type: '(p0:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias91', alias: '(p0:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias91');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn91');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0004_p0_boolean_object type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0004_p0_boolean_object type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample91_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004_p0_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0005_P0_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-field convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0005_p0_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass92', alias: '',
          variableList: [{ type: '(p0:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0005_p0_any_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005_p0_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0006_P0_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: global-function convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0006_p0_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun92', returns: '(p0:any)=>void',
          parameters: [{ type: '(p0:any)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun92');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0006_p0_any_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0006_p0_any_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample92_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006_p0_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_ANY_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0007_P0_ANY_VOID
   * @tc.desc   Stability convert h2dtscpp/func: class-method convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0007_p0_any_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass92', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any)=>void',
            parameters: [{ type: '(p0:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0007_p0_any_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0007_p0_any_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007_p0_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_FUNC_0008_ANY
   * @tc.desc   Stability convert h2dtscpp/func: parse-convert-gen pipeline; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_func_0008_any', () => {
    try {
      const parsed = doParseTs('h2cpp92.ts', `function h2cpp92(p: (p0:any)=>void): (p0:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0008_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0008_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp92.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008_any execution error: ${String(err)}`);
    }
  });
});
