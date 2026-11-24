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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0007_number_string_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp203.ts', `
        function h2cpp203(p: [number, string, number, number]): [number, string, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0007_number_string_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0007_number_string_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp203.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0008_number_string_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn203', returns: '[number, string, number, number]',
          parameters: [{ type: '[number, string, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias203', alias: '[number, string, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias203');
      assert.strictEqual(converted.types[0].alias, '[number, string, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn203');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0008_number_string_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0008_number_string_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample203_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0009_number_string_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass204', alias: '',
          variableList: [{ type: '[number, string, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0009_number_string_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0010_number_string_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun204', returns: '[number, string, number, string]',
          parameters: [{ type: '[number, string, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun204');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0010_number_string_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0010_number_string_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample204_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0011_number_string_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass204', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number, string]',
            parameters: [{ type: '[number, string, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0011_number_string_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0011_number_string_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0012_number_string_number_string', () => {
    try {
      const parsed = doParseTs('h2cpp204.ts', `
        function h2cpp204(p: [number, string, number, string]): [number, string, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0012_number_string_number_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0012_number_string_number_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp204.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0013_number_string_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn204', returns: '[number, string, number, string]',
          parameters: [{ type: '[number, string, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias204', alias: '[number, string, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias204');
      assert.strictEqual(converted.types[0].alias, '[number, string, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn204');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0013_number_string_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0013_number_string_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample204_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0014_number_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass205', alias: '',
          variableList: [{ type: '[number, string, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0014_number_string_number_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0015_number_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun205', returns: '[number, string, number, boolean]',
          parameters: [{ type: '[number, string, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun205');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0015_number_string_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0015_number_string_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample205_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0016_number_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass205', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number, boolean]',
            parameters: [{ type: '[number, string, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0016_number_string_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0016_number_string_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0017_number_string_number_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp205.ts', `
        function h2cpp205(p: [number, string, number, boolean]): [number, string, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0017_number_string_number_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0017_number_string_number_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp205.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0018_number_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn205', returns: '[number, string, number, boolean]',
          parameters: [{ type: '[number, string, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias205', alias: '[number, string, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias205');
      assert.strictEqual(converted.types[0].alias, '[number, string, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn205');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0018_number_string_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0018_number_string_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample205_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0019_number_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass206', alias: '',
          variableList: [{ type: '[number, string, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0019_number_string_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0020_number_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun206', returns: '[number, string, string, number]',
          parameters: [{ type: '[number, string, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun206');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0020_number_string_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0020_number_string_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample206_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0021_number_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass206', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string, number]',
            parameters: [{ type: '[number, string, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0021_number_string_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0021_number_string_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0022_number_string_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp206.ts', `
        function h2cpp206(p: [number, string, string, number]): [number, string, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0022_number_string_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0022_number_string_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0023_number_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn206', returns: '[number, string, string, number]',
          parameters: [{ type: '[number, string, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias206', alias: '[number, string, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias206');
      assert.strictEqual(converted.types[0].alias, '[number, string, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn206');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0023_number_string_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0023_number_string_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample206_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0024_number_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass207', alias: '',
          variableList: [{ type: '[number, string, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0024_number_string_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0025_number_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun207', returns: '[number, string, string, string]',
          parameters: [{ type: '[number, string, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun207');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0025_number_string_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0025_number_string_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample207_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0026_number_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass207', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string, string]',
            parameters: [{ type: '[number, string, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0026_number_string_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0026_number_string_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0027_number_string_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp207.ts', `
        function h2cpp207(p: [number, string, string, string]): [number, string, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0027_number_string_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0027_number_string_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0028_number_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn207', returns: '[number, string, string, string]',
          parameters: [{ type: '[number, string, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias207', alias: '[number, string, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias207');
      assert.strictEqual(converted.types[0].alias, '[number, string, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn207');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0028_number_string_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0028_number_string_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample207_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0029_number_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass208', alias: '',
          variableList: [{ type: '[number, string, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0029_number_string_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0030_number_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun208', returns: '[number, string, string, boolean]',
          parameters: [{ type: '[number, string, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun208');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0030_number_string_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0030_number_string_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample208_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0031_number_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass208', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string, boolean]',
            parameters: [{ type: '[number, string, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0031_number_string_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0031_number_string_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0032_number_string_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp208.ts', `
        function h2cpp208(p: [number, string, string, boolean]): [number, string, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0032_number_string_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0032_number_string_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0033_number_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn208', returns: '[number, string, string, boolean]',
          parameters: [{ type: '[number, string, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias208', alias: '[number, string, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias208');
      assert.strictEqual(converted.types[0].alias, '[number, string, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn208');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0033_number_string_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0033_number_string_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample208_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0034_number_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass209', alias: '',
          variableList: [{ type: '[number, string, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0034_number_string_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0035_number_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun209', returns: '[number, string, boolean, number]',
          parameters: [{ type: '[number, string, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun209');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0035_number_string_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0035_number_string_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample209_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0036_number_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass209', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean, number]',
            parameters: [{ type: '[number, string, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0036_number_string_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0036_number_string_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0037_number_string_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp209.ts', `
        function h2cpp209(p: [number, string, boolean, number]): [number, string, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0037_number_string_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0037_number_string_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp209.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0038_number_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn209', returns: '[number, string, boolean, number]',
          parameters: [{ type: '[number, string, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias209', alias: '[number, string, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias209');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn209');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0038_number_string_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0038_number_string_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample209_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0039_number_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass210', alias: '',
          variableList: [{ type: '[number, string, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0039_number_string_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0040_number_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun210', returns: '[number, string, boolean, string]',
          parameters: [{ type: '[number, string, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun210');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0040_number_string_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0040_number_string_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample210_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0041_number_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass210', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean, string]',
            parameters: [{ type: '[number, string, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0041_number_string_boolean_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0041_number_string_boolean_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0042_number_string_boolean_string', () => {
    try {
      const parsed = doParseTs('h2cpp210.ts', `
        function h2cpp210(p: [number, string, boolean, string]): [number, string, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0042_number_string_boolean_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0042_number_string_boolean_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp210.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0043_number_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn210', returns: '[number, string, boolean, string]',
          parameters: [{ type: '[number, string, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias210', alias: '[number, string, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias210');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn210');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0043_number_string_boolean_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0043_number_string_boolean_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample210_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0044_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass211', alias: '',
          variableList: [{ type: '[number, string, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0044_number_string_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0045_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun211', returns: '[number, string, boolean, boolean]',
          parameters: [{ type: '[number, string, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun211');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0045_number_string_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0045_number_string_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample211_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0046_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass211', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean, boolean]',
            parameters: [{ type: '[number, string, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0046_number_string_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0046_number_string_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0047_number_string_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp211.ts', `
        function h2cpp211(p: [number, string, boolean, boolean]): [number, string, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0047_number_string_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0047_number_string_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0048_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn211', returns: '[number, string, boolean, boolean]',
          parameters: [{ type: '[number, string, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias211', alias: '[number, string, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias211');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn211');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048_number_string_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048_number_string_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample211_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0049_number_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass212', alias: '',
          variableList: [{ type: '[number, boolean, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0049_number_boolean_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0050_number_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun212', returns: '[number, boolean, number, number]',
          parameters: [{ type: '[number, boolean, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun212');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0050_number_boolean_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0050_number_boolean_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample212_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0051_number_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass212', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, number, number]',
            parameters: [{ type: '[number, boolean, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0051_number_boolean_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0051_number_boolean_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0052_number_boolean_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp212.ts', `
        function h2cpp212(p: [number, boolean, number, number]): [number, boolean, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0052_number_boolean_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0052_number_boolean_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, boolean, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0053_number_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn212', returns: '[number, boolean, number, number]',
          parameters: [{ type: '[number, boolean, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias212', alias: '[number, boolean, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias212');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn212');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0053_number_boolean_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0053_number_boolean_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample212_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0001_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun217', returns: '[number, boolean, string, boolean]',
          parameters: [{ type: '[number, boolean, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun217');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0001_number_boolean_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0001_number_boolean_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample217_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0002_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass217', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, string, boolean]',
            parameters: [{ type: '[number, boolean, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0002_number_boolean_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0002_number_boolean_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0003_number_boolean_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp217.ts', `
        function h2cpp217(p: [number, boolean, string, boolean]): [number, boolean, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0003_number_boolean_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0003_number_boolean_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp217.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, boolean, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0004_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn217', returns: '[number, boolean, string, boolean]',
          parameters: [{ type: '[number, boolean, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias217', alias: '[number, boolean, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias217');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn217');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0004_number_boolean_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0004_number_boolean_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample217_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0005_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass218', alias: '',
          variableList: [{ type: '[number, boolean, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0005_number_boolean_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0006_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun218', returns: '[number, boolean, boolean, number]',
          parameters: [{ type: '[number, boolean, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun218');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0006_number_boolean_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0006_number_boolean_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample218_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0007_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass218', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, boolean, number]',
            parameters: [{ type: '[number, boolean, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0007_number_boolean_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0007_number_boolean_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0008_number_boolean_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp218.ts', `
        function h2cpp218(p: [number, boolean, boolean, number]): [number, boolean, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0008_number_boolean_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0008_number_boolean_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp218.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });
});
