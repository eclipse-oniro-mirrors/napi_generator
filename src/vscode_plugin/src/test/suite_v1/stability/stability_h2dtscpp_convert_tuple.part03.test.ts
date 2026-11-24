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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0005_boolean_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass188', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, number]',
            parameters: [{ type: '[boolean, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, number]",
        "h2dtscpp_convert_tuple_0005_boolean_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, number]",
        "h2dtscpp_convert_tuple_0005_boolean_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0006_boolean_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp188.ts', `
        function h2cpp188(p: [boolean, string, number]): [boolean, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number]",
        "h2dtscpp_convert_tuple_0006_boolean_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number]",
        "h2dtscpp_convert_tuple_0006_boolean_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp188.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp188') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0007_boolean_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn188', returns: '[boolean, string, number]',
          parameters: [{ type: '[boolean, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias188', alias: '[boolean, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias188');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn188');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number]",
        "h2dtscpp_convert_tuple_0007_boolean_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number]",
        "h2dtscpp_convert_tuple_0007_boolean_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample188_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn188') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0008_boolean_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass189', alias: '',
          variableList: [{ type: '[boolean, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0008_boolean_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0009_boolean_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun189', returns: '[boolean, string, string]',
          parameters: [{ type: '[boolean, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun189');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0009_boolean_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0009_boolean_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample189_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0010_boolean_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass189', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, string]',
            parameters: [{ type: '[boolean, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0010_boolean_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0010_boolean_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0011_boolean_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp189.ts', `
        function h2cpp189(p: [boolean, string, string]): [boolean, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0011_boolean_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0011_boolean_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0012_boolean_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn189', returns: '[boolean, string, string]',
          parameters: [{ type: '[boolean, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias189', alias: '[boolean, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias189');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn189');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0012_boolean_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string]",
        "h2dtscpp_convert_tuple_0012_boolean_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample189_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0013_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass190', alias: '',
          variableList: [{ type: '[boolean, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0013_boolean_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0014_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun190', returns: '[boolean, string, boolean]',
          parameters: [{ type: '[boolean, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun190');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0014_boolean_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0014_boolean_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample190_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0015_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass190', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, boolean]',
            parameters: [{ type: '[boolean, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0015_boolean_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0015_boolean_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0016_boolean_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp190.ts', `
        function h2cpp190(p: [boolean, string, boolean]): [boolean, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0016_boolean_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0016_boolean_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0017_boolean_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn190', returns: '[boolean, string, boolean]',
          parameters: [{ type: '[boolean, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias190', alias: '[boolean, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias190');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn190');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0017_boolean_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0017_boolean_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample190_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0018_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass191', alias: '',
          variableList: [{ type: '[boolean, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0018_boolean_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0019_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun191', returns: '[boolean, boolean, number]',
          parameters: [{ type: '[boolean, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun191');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0019_boolean_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0019_boolean_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample191_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0020_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass191', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, number]',
            parameters: [{ type: '[boolean, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0020_boolean_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0020_boolean_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0021_boolean_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp191.ts', `
        function h2cpp191(p: [boolean, boolean, number]): [boolean, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0021_boolean_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0021_boolean_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0022_boolean_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn191', returns: '[boolean, boolean, number]',
          parameters: [{ type: '[boolean, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias191', alias: '[boolean, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias191');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn191');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0022_boolean_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0022_boolean_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample191_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0023_boolean_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass192', alias: '',
          variableList: [{ type: '[boolean, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0023_boolean_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0024_boolean_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun192', returns: '[boolean, boolean, string]',
          parameters: [{ type: '[boolean, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun192');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0024_boolean_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0024_boolean_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample192_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0025_boolean_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass192', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, string]',
            parameters: [{ type: '[boolean, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0025_boolean_boolean_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0025_boolean_boolean_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0026_boolean_boolean_string', () => {
    try {
      const parsed = doParseTs('h2cpp192.ts', `
        function h2cpp192(p: [boolean, boolean, string]): [boolean, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0026_boolean_boolean_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0026_boolean_boolean_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0027_boolean_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn192', returns: '[boolean, boolean, string]',
          parameters: [{ type: '[boolean, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias192', alias: '[boolean, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias192');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn192');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0027_boolean_boolean_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0027_boolean_boolean_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample192_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0028_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass193', alias: '',
          variableList: [{ type: '[boolean, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0028_boolean_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0029_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun193', returns: '[boolean, boolean, boolean]',
          parameters: [{ type: '[boolean, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun193');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0029_boolean_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0029_boolean_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample193_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0030_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass193', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, boolean]',
            parameters: [{ type: '[boolean, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0030_boolean_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0030_boolean_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0031_boolean_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp193.ts', `
        function h2cpp193(p: [boolean, boolean, boolean]): [boolean, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0031_boolean_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0031_boolean_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0032_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn193', returns: '[boolean, boolean, boolean]',
          parameters: [{ type: '[boolean, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias193', alias: '[boolean, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias193');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn193');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0032_boolean_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0032_boolean_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample193_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0033_number_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass194', alias: '',
          variableList: [{ type: '[number, number, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0033_number_number_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0034_number_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun194', returns: '[number, number, number, number]',
          parameters: [{ type: '[number, number, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun194');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0034_number_number_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0034_number_number_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample194_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0035_number_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass194', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, number, number]',
            parameters: [{ type: '[number, number, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0035_number_number_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0035_number_number_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0036_number_number_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp194.ts', `
        function h2cpp194(p: [number, number, number, number]): [number, number, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0036_number_number_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0036_number_number_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0037_number_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn194', returns: '[number, number, number, number]',
          parameters: [{ type: '[number, number, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias194', alias: '[number, number, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias194');
      assert.strictEqual(converted.types[0].alias, '[number, number, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn194');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0037_number_number_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number]",
        "h2dtscpp_convert_tuple_0037_number_number_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample194_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0038_number_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass195', alias: '',
          variableList: [{ type: '[number, number, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0038_number_number_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0039_number_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun195', returns: '[number, number, number, string]',
          parameters: [{ type: '[number, number, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun195');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0039_number_number_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0039_number_number_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample195_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0040_number_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass195', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, number, string]',
            parameters: [{ type: '[number, number, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0040_number_number_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0040_number_number_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0041_number_number_number_string', () => {
    try {
      const parsed = doParseTs('h2cpp195.ts', `
        function h2cpp195(p: [number, number, number, string]): [number, number, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0041_number_number_number_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0041_number_number_number_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp195.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0042_number_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn195', returns: '[number, number, number, string]',
          parameters: [{ type: '[number, number, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias195', alias: '[number, number, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias195');
      assert.strictEqual(converted.types[0].alias, '[number, number, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn195');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0042_number_number_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string]",
        "h2dtscpp_convert_tuple_0042_number_number_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample195_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0043_number_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass196', alias: '',
          variableList: [{ type: '[number, number, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0043_number_number_number_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0044_number_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun196', returns: '[number, number, number, boolean]',
          parameters: [{ type: '[number, number, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun196');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0044_number_number_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0044_number_number_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample196_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun196') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0045_number_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass196', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, number, boolean]',
            parameters: [{ type: '[number, number, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0045_number_number_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0045_number_number_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0046_number_number_number_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp196.ts', `
        function h2cpp196(p: [number, number, number, boolean]): [number, number, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0046_number_number_number_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0046_number_number_number_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp196.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp196') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0047_number_number_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn196', returns: '[number, number, number, boolean]',
          parameters: [{ type: '[number, number, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias196', alias: '[number, number, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias196');
      assert.strictEqual(converted.types[0].alias, '[number, number, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn196');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0047_number_number_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, boolean]",
        "h2dtscpp_convert_tuple_0047_number_number_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample196_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn196') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_NUMBER_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_NUMBER_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0048_number_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass197', alias: '',
          variableList: [{ type: '[number, number, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0048_number_number_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048_number_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_NUMBER_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_NUMBER_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0049_number_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun197', returns: '[number, number, string, number]',
          parameters: [{ type: '[number, number, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun197');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0049_number_number_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0049_number_number_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample197_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun197') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049_number_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_NUMBER_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_NUMBER_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0050_number_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass197', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, string, number]',
            parameters: [{ type: '[number, number, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0050_number_number_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0050_number_number_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050_number_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_NUMBER_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_NUMBER_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0051_number_number_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp197.ts', `
        function h2cpp197(p: [number, number, string, number]): [number, number, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0051_number_number_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0051_number_number_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp197.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp197') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051_number_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_NUMBER_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_NUMBER_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0052_number_number_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn197', returns: '[number, number, string, number]',
          parameters: [{ type: '[number, number, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias197', alias: '[number, number, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias197');
      assert.strictEqual(converted.types[0].alias, '[number, number, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn197');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0052_number_number_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, number]",
        "h2dtscpp_convert_tuple_0052_number_number_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample197_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn197') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052_number_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_NUMBER_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_NUMBER_NUMBER_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0053_number_number_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass198', alias: '',
          variableList: [{ type: '[number, number, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string, string]",
        "h2dtscpp_convert_tuple_0053_number_number_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053_number_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0001_number_number_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass202', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, boolean, boolean]',
            parameters: [{ type: '[number, number, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0001_number_number_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0001_number_number_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0002_number_number_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp202.ts', `
        function h2cpp202(p: [number, number, boolean, boolean]): [number, number, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0002_number_number_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0002_number_number_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp202.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp202') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_NUMBER_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0003_number_number_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn202', returns: '[number, number, boolean, boolean]',
          parameters: [{ type: '[number, number, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias202', alias: '[number, number, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias202');
      assert.strictEqual(converted.types[0].alias, '[number, number, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn202');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003_number_number_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003_number_number_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample202_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn202') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003_number_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0004_number_string_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass203', alias: '',
          variableList: [{ type: '[number, string, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0004_number_string_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0005_number_string_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun203', returns: '[number, string, number, number]',
          parameters: [{ type: '[number, string, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun203');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0005_number_string_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0005_number_string_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample203_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0006_number_string_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass203', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number, number]',
            parameters: [{ type: '[number, string, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0006_number_string_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0006_number_string_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006_number_string_number_number execution error: ${String(err)}`);
    }
  });
});
