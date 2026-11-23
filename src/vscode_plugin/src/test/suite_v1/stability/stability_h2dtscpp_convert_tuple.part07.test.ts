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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0013_boolean_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun249', returns: '[boolean, number, number, string]',
          parameters: [{ type: '[boolean, number, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun249');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0013_boolean_number_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0013_boolean_number_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample249_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0014_boolean_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass249', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, number, string]',
            parameters: [{ type: '[boolean, number, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0014_boolean_number_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0014_boolean_number_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0015_boolean_number_number_string', () => {
    try {
      const parsed = doParseTs('h2cpp249.ts', `
        function h2cpp249(p: [boolean, number, number, string]): [boolean, number, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0015_boolean_number_number_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0015_boolean_number_number_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp249.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0016_boolean_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn249', returns: '[boolean, number, number, string]',
          parameters: [{ type: '[boolean, number, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias249', alias: '[boolean, number, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias249');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn249');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0016_boolean_number_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0016_boolean_number_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample249_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0017_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass250', alias: '',
          variableList: [{ type: '[boolean, number, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0017_boolean_number_number_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0018_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun250', returns: '[boolean, number, number, boolean]',
          parameters: [{ type: '[boolean, number, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun250');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0018_boolean_number_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0018_boolean_number_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample250_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0019_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass250', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, number, boolean]',
            parameters: [{ type: '[boolean, number, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0019_boolean_number_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0019_boolean_number_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0020_boolean_number_number_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp250.ts', `
        function h2cpp250(p: [boolean, number, number, boolean]): [boolean, number, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0020_boolean_number_number_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0020_boolean_number_number_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp250.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0021_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn250', returns: '[boolean, number, number, boolean]',
          parameters: [{ type: '[boolean, number, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias250', alias: '[boolean, number, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias250');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn250');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0021_boolean_number_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0021_boolean_number_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample250_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0022_boolean_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass251', alias: '',
          variableList: [{ type: '[boolean, number, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0022_boolean_number_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0023_boolean_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun251', returns: '[boolean, number, string, number]',
          parameters: [{ type: '[boolean, number, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun251');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0023_boolean_number_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0023_boolean_number_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample251_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0024_boolean_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass251', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, string, number]',
            parameters: [{ type: '[boolean, number, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0024_boolean_number_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0024_boolean_number_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0025_boolean_number_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp251.ts', `
        function h2cpp251(p: [boolean, number, string, number]): [boolean, number, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0025_boolean_number_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0025_boolean_number_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp251.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0026_boolean_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn251', returns: '[boolean, number, string, number]',
          parameters: [{ type: '[boolean, number, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias251', alias: '[boolean, number, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias251');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn251');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0026_boolean_number_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0026_boolean_number_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample251_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0027_boolean_number_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass252', alias: '',
          variableList: [{ type: '[boolean, number, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0027_boolean_number_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0028_boolean_number_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun252', returns: '[boolean, number, string, string]',
          parameters: [{ type: '[boolean, number, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun252');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0028_boolean_number_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0028_boolean_number_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample252_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0029_boolean_number_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass252', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, string, string]',
            parameters: [{ type: '[boolean, number, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0029_boolean_number_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0029_boolean_number_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0030_boolean_number_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp252.ts', `
        function h2cpp252(p: [boolean, number, string, string]): [boolean, number, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0030_boolean_number_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0030_boolean_number_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp252.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0031_boolean_number_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn252', returns: '[boolean, number, string, string]',
          parameters: [{ type: '[boolean, number, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias252', alias: '[boolean, number, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias252');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn252');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0031_boolean_number_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0031_boolean_number_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample252_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0032_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass253', alias: '',
          variableList: [{ type: '[boolean, number, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0032_boolean_number_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0033_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun253', returns: '[boolean, number, string, boolean]',
          parameters: [{ type: '[boolean, number, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun253');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0033_boolean_number_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0033_boolean_number_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample253_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0034_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass253', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, string, boolean]',
            parameters: [{ type: '[boolean, number, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0034_boolean_number_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0034_boolean_number_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0035_boolean_number_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp253.ts', `
        function h2cpp253(p: [boolean, number, string, boolean]): [boolean, number, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0035_boolean_number_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0035_boolean_number_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp253.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0036_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn253', returns: '[boolean, number, string, boolean]',
          parameters: [{ type: '[boolean, number, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias253', alias: '[boolean, number, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias253');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn253');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0036_boolean_number_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0036_boolean_number_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample253_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0037_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass254', alias: '',
          variableList: [{ type: '[boolean, number, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0037_boolean_number_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0038_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun254', returns: '[boolean, number, boolean, number]',
          parameters: [{ type: '[boolean, number, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun254');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0038_boolean_number_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0038_boolean_number_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample254_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0039_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass254', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, boolean, number]',
            parameters: [{ type: '[boolean, number, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0039_boolean_number_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0039_boolean_number_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0040_boolean_number_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp254.ts', `
        function h2cpp254(p: [boolean, number, boolean, number]): [boolean, number, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0040_boolean_number_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0040_boolean_number_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp254.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0041_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn254', returns: '[boolean, number, boolean, number]',
          parameters: [{ type: '[boolean, number, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias254', alias: '[boolean, number, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias254');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn254');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0041_boolean_number_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0041_boolean_number_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample254_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0042_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass255', alias: '',
          variableList: [{ type: '[boolean, number, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0042_boolean_number_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0043_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun255', returns: '[boolean, number, boolean, string]',
          parameters: [{ type: '[boolean, number, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun255');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0043_boolean_number_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0043_boolean_number_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample255_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0044_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass255', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, boolean, string]',
            parameters: [{ type: '[boolean, number, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0044_boolean_number_boolean_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0044_boolean_number_boolean_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0045_boolean_number_boolean_string', () => {
    try {
      const parsed = doParseTs('h2cpp255.ts', `
        function h2cpp255(p: [boolean, number, boolean, string]): [boolean, number, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0045_boolean_number_boolean_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0045_boolean_number_boolean_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp255.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0046_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn255', returns: '[boolean, number, boolean, string]',
          parameters: [{ type: '[boolean, number, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias255', alias: '[boolean, number, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias255');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn255');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0046_boolean_number_boolean_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0046_boolean_number_boolean_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample255_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0047_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass256', alias: '',
          variableList: [{ type: '[boolean, number, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0047_boolean_number_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0048_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun256', returns: '[boolean, number, boolean, boolean]',
          parameters: [{ type: '[boolean, number, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun256');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048_boolean_number_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048_boolean_number_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample256_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0049_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass256', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, boolean, boolean]',
            parameters: [{ type: '[boolean, number, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0049_boolean_number_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0049_boolean_number_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0050_boolean_number_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp256.ts', `
        function h2cpp256(p: [boolean, number, boolean, boolean]): [boolean, number, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0050_boolean_number_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0050_boolean_number_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp256.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0051_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn256', returns: '[boolean, number, boolean, boolean]',
          parameters: [{ type: '[boolean, number, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias256', alias: '[boolean, number, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias256');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn256');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0051_boolean_number_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0051_boolean_number_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample256_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0052_boolean_string_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass257', alias: '',
          variableList: [{ type: '[boolean, string, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0052_boolean_string_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0053_boolean_string_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun257', returns: '[boolean, string, number, number]',
          parameters: [{ type: '[boolean, string, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun257');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0053_boolean_string_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0053_boolean_string_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample257_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0001_boolean_string_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp261.ts', `
        function h2cpp261(p: [boolean, string, string, string]): [boolean, string, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0001_boolean_string_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0001_boolean_string_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0002_boolean_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn261', returns: '[boolean, string, string, string]',
          parameters: [{ type: '[boolean, string, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias261', alias: '[boolean, string, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias261');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn261');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0002_boolean_string_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0002_boolean_string_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample261_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0003_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass262', alias: '',
          variableList: [{ type: '[boolean, string, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0003_boolean_string_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0004_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun262', returns: '[boolean, string, string, boolean]',
          parameters: [{ type: '[boolean, string, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun262');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0004_boolean_string_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0004_boolean_string_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample262_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0005_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass262', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, string, boolean]',
            parameters: [{ type: '[boolean, string, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0005_boolean_string_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0005_boolean_string_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0006_boolean_string_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp262.ts', `
        function h2cpp262(p: [boolean, string, string, boolean]): [boolean, string, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0006_boolean_string_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0006_boolean_string_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp262.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0007_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn262', returns: '[boolean, string, string, boolean]',
          parameters: [{ type: '[boolean, string, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias262', alias: '[boolean, string, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias262');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn262');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0007_boolean_string_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0007_boolean_string_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample262_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0008_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass263', alias: '',
          variableList: [{ type: '[boolean, string, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0008_boolean_string_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0009_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun263', returns: '[boolean, string, boolean, number]',
          parameters: [{ type: '[boolean, string, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun263');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0009_boolean_string_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0009_boolean_string_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample263_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0010_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass263', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, boolean, number]',
            parameters: [{ type: '[boolean, string, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0010_boolean_string_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0010_boolean_string_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0011_boolean_string_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp263.ts', `
        function h2cpp263(p: [boolean, string, boolean, number]): [boolean, string, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0011_boolean_string_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0011_boolean_string_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0012_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn263', returns: '[boolean, string, boolean, number]',
          parameters: [{ type: '[boolean, string, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias263', alias: '[boolean, string, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias263');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn263');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0012_boolean_string_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0012_boolean_string_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample263_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0013_boolean_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass264', alias: '',
          variableList: [{ type: '[boolean, string, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0013_boolean_string_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013_boolean_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0014_boolean_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun264', returns: '[boolean, string, boolean, string]',
          parameters: [{ type: '[boolean, string, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun264');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0014_boolean_string_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0014_boolean_string_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample264_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014_boolean_string_boolean_string execution error: ${String(err)}`);
    }
  });
});
