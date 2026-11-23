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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, string, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0011_string_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass234', alias: '',
          variableList: [{ type: '[string, string, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0011_string_string_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0012_string_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun234', returns: '[string, string, string, string]',
          parameters: [{ type: '[string, string, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun234');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0012_string_string_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0012_string_string_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample234_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0013_string_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass234', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, string, string]',
            parameters: [{ type: '[string, string, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0013_string_string_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0013_string_string_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0014_string_string_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp234.ts', `
        function h2cpp234(p: [string, string, string, string]): [string, string, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0014_string_string_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0014_string_string_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, string, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0015_string_string_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn234', returns: '[string, string, string, string]',
          parameters: [{ type: '[string, string, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias234', alias: '[string, string, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias234');
      assert.strictEqual(converted.types[0].alias, '[string, string, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn234');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0015_string_string_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "h2dtscpp_convert_tuple_0015_string_string_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample234_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0016_string_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass235', alias: '',
          variableList: [{ type: '[string, string, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0016_string_string_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0017_string_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun235', returns: '[string, string, string, boolean]',
          parameters: [{ type: '[string, string, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun235');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0017_string_string_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0017_string_string_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample235_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0018_string_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass235', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, string, boolean]',
            parameters: [{ type: '[string, string, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0018_string_string_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0018_string_string_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0019_string_string_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp235.ts', `
        function h2cpp235(p: [string, string, string, boolean]): [string, string, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0019_string_string_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0019_string_string_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp235.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, string, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0020_string_string_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn235', returns: '[string, string, string, boolean]',
          parameters: [{ type: '[string, string, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias235', alias: '[string, string, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias235');
      assert.strictEqual(converted.types[0].alias, '[string, string, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn235');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0020_string_string_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "h2dtscpp_convert_tuple_0020_string_string_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample235_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0021_string_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass236', alias: '',
          variableList: [{ type: '[string, string, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0021_string_string_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0022_string_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun236', returns: '[string, string, boolean, number]',
          parameters: [{ type: '[string, string, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun236');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0022_string_string_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0022_string_string_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample236_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0023_string_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass236', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, boolean, number]',
            parameters: [{ type: '[string, string, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0023_string_string_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0023_string_string_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0024_string_string_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp236.ts', `
        function h2cpp236(p: [string, string, boolean, number]): [string, string, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0024_string_string_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0024_string_string_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp236.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, string, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0025_string_string_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn236', returns: '[string, string, boolean, number]',
          parameters: [{ type: '[string, string, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias236', alias: '[string, string, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias236');
      assert.strictEqual(converted.types[0].alias, '[string, string, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn236');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0025_string_string_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "h2dtscpp_convert_tuple_0025_string_string_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample236_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0026_string_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass237', alias: '',
          variableList: [{ type: '[string, string, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0026_string_string_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0027_string_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun237', returns: '[string, string, boolean, string]',
          parameters: [{ type: '[string, string, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun237');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0027_string_string_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0027_string_string_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample237_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0028_string_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass237', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, boolean, string]',
            parameters: [{ type: '[string, string, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0028_string_string_boolean_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0028_string_string_boolean_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0029_string_string_boolean_string', () => {
    try {
      const parsed = doParseTs('h2cpp237.ts', `
        function h2cpp237(p: [string, string, boolean, string]): [string, string, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0029_string_string_boolean_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0029_string_string_boolean_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp237.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, string, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0030_string_string_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn237', returns: '[string, string, boolean, string]',
          parameters: [{ type: '[string, string, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias237', alias: '[string, string, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias237');
      assert.strictEqual(converted.types[0].alias, '[string, string, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn237');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0030_string_string_boolean_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "h2dtscpp_convert_tuple_0030_string_string_boolean_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample237_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0031_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass238', alias: '',
          variableList: [{ type: '[string, string, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0031_string_string_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0032_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun238', returns: '[string, string, boolean, boolean]',
          parameters: [{ type: '[string, string, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun238');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0032_string_string_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0032_string_string_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample238_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0033_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass238', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, boolean, boolean]',
            parameters: [{ type: '[string, string, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0033_string_string_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0033_string_string_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0034_string_string_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp238.ts', `
        function h2cpp238(p: [string, string, boolean, boolean]): [string, string, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0034_string_string_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0034_string_string_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp238.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, string, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0035_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn238', returns: '[string, string, boolean, boolean]',
          parameters: [{ type: '[string, string, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias238', alias: '[string, string, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias238');
      assert.strictEqual(converted.types[0].alias, '[string, string, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn238');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0035_string_string_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0035_string_string_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample238_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0036_string_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass239', alias: '',
          variableList: [{ type: '[string, boolean, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0036_string_boolean_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0037_string_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun239', returns: '[string, boolean, number, number]',
          parameters: [{ type: '[string, boolean, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun239');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0037_string_boolean_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0037_string_boolean_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample239_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0038_string_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass239', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean, number, number]',
            parameters: [{ type: '[string, boolean, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0038_string_boolean_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0038_string_boolean_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0039_string_boolean_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp239.ts', `
        function h2cpp239(p: [string, boolean, number, number]): [string, boolean, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0039_string_boolean_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0039_string_boolean_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp239.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, boolean, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0040_string_boolean_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn239', returns: '[string, boolean, number, number]',
          parameters: [{ type: '[string, boolean, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias239', alias: '[string, boolean, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias239');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn239');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0040_string_boolean_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "h2dtscpp_convert_tuple_0040_string_boolean_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample239_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0041_string_boolean_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass240', alias: '',
          variableList: [{ type: '[string, boolean, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0041_string_boolean_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0042_string_boolean_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun240', returns: '[string, boolean, number, string]',
          parameters: [{ type: '[string, boolean, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun240');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0042_string_boolean_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0042_string_boolean_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample240_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0043_string_boolean_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass240', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean, number, string]',
            parameters: [{ type: '[string, boolean, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0043_string_boolean_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0043_string_boolean_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0044_string_boolean_number_string', () => {
    try {
      const parsed = doParseTs('h2cpp240.ts', `
        function h2cpp240(p: [string, boolean, number, string]): [string, boolean, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0044_string_boolean_number_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0044_string_boolean_number_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp240.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, boolean, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0045_string_boolean_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn240', returns: '[string, boolean, number, string]',
          parameters: [{ type: '[string, boolean, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias240', alias: '[string, boolean, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias240');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn240');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0045_string_boolean_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "h2dtscpp_convert_tuple_0045_string_boolean_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample240_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0046_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass241', alias: '',
          variableList: [{ type: '[string, boolean, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0046_string_boolean_number_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0047_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun241', returns: '[string, boolean, number, boolean]',
          parameters: [{ type: '[string, boolean, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun241');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0047_string_boolean_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0047_string_boolean_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample241_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0048_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass241', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean, number, boolean]',
            parameters: [{ type: '[string, boolean, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0048_string_boolean_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0048_string_boolean_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0049_string_boolean_number_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp241.ts', `
        function h2cpp241(p: [string, boolean, number, boolean]): [string, boolean, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0049_string_boolean_number_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0049_string_boolean_number_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp241.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, boolean, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0050_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn241', returns: '[string, boolean, number, boolean]',
          parameters: [{ type: '[string, boolean, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias241', alias: '[string, boolean, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias241');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn241');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0050_string_boolean_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0050_string_boolean_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample241_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_STRING_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_STRING_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0051_string_boolean_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass242', alias: '',
          variableList: [{ type: '[string, boolean, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, string, number]",
        "h2dtscpp_convert_tuple_0051_string_boolean_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051_string_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_STRING_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_STRING_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0052_string_boolean_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun242', returns: '[string, boolean, string, number]',
          parameters: [{ type: '[string, boolean, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun242');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, number]",
        "h2dtscpp_convert_tuple_0052_string_boolean_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, number]",
        "h2dtscpp_convert_tuple_0052_string_boolean_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample242_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun242') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052_string_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_STRING_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_STRING_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0053_string_boolean_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass242', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean, string, number]',
            parameters: [{ type: '[string, boolean, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean, string, number]",
        "h2dtscpp_convert_tuple_0053_string_boolean_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean, string, number]",
        "h2dtscpp_convert_tuple_0053_string_boolean_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053_string_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_STRING_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, boolean, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0001_string_boolean_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn246', returns: '[string, boolean, boolean, string]',
          parameters: [{ type: '[string, boolean, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias246', alias: '[string, boolean, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias246');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn246');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0001_string_boolean_boolean_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0001_string_boolean_boolean_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample246_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn246') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001_string_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, boolean,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0002_string_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass247', alias: '',
          variableList: [{ type: '[string, boolean, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0002_string_boolean_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, boolean,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0003_string_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun247', returns: '[string, boolean, boolean, boolean]',
          parameters: [{ type: '[string, boolean, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun247');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003_string_boolean_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003_string_boolean_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample247_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, boolean,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0004_string_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass247', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean, boolean, boolean]',
            parameters: [{ type: '[string, boolean, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0004_string_boolean_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0004_string_boolean_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0005_string_boolean_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp247.ts', `
        function h2cpp247(p: [string, boolean, boolean, boolean]): [string, boolean, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0005_string_boolean_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0005_string_boolean_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp247.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_STRING_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, boolean, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0006_string_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn247', returns: '[string, boolean, boolean, boolean]',
          parameters: [{ type: '[string, boolean, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias247', alias: '[string, boolean, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias247');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn247');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0006_string_boolean_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0006_string_boolean_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample247_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006_string_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0007_boolean_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass248', alias: '',
          variableList: [{ type: '[boolean, number, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0007_boolean_number_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0008_boolean_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun248', returns: '[boolean, number, number, number]',
          parameters: [{ type: '[boolean, number, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun248');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0008_boolean_number_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0008_boolean_number_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample248_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0009_boolean_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass248', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, number, number]',
            parameters: [{ type: '[boolean, number, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0009_boolean_number_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0009_boolean_number_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0010_boolean_number_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp248.ts', `
        function h2cpp248(p: [boolean, number, number, number]): [boolean, number, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0010_boolean_number_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0010_boolean_number_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp248.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_BOOLEAN_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0011_boolean_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn248', returns: '[boolean, number, number, number]',
          parameters: [{ type: '[boolean, number, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias248', alias: '[boolean, number, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias248');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn248');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0011_boolean_number_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0011_boolean_number_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample248_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011_boolean_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0012_boolean_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass249', alias: '',
          variableList: [{ type: '[boolean, number, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0012_boolean_number_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012_boolean_number_number_string execution error: ${String(err)}`);
    }
  });
});
