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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0001_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass158', alias: '',
          variableList: [{ type: '[number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0001_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0002_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun158', returns: '[number, number]',
          parameters: [{ type: '[number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun158');
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0002_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0002_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample158_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0003_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0003_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass158', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number]',
            parameters: [{ type: '[number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0003_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0003_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0004_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0004_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp158.ts', `function h2cpp158(p: [number, number]): [number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0004_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0004_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0005_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0005_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn158', returns: '[number, number]',
          parameters: [{ type: '[number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias158', alias: '[number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias158');
      assert.strictEqual(converted.types[0].alias, '[number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn158');
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0005_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0005_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample158_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0006_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0006_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass159', alias: '',
          variableList: [{ type: '[number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0006_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0007_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0007_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun159', returns: '[number, string]',
          parameters: [{ type: '[number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun159');
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0007_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0007_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample159_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0008_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0008_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass159', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string]',
            parameters: [{ type: '[number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0008_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0008_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0009_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0009_number_string', () => {
    try {
      const parsed = doParseTs('h2cpp159.ts', `function h2cpp159(p: [number, string]): [number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0009_number_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0009_number_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp159.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0010_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0010_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn159', returns: '[number, string]',
          parameters: [{ type: '[number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias159', alias: '[number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias159');
      assert.strictEqual(converted.types[0].alias, '[number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn159');
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0010_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0010_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample159_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0011_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0011_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass160', alias: '',
          variableList: [{ type: '[number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0011_number_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0012_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0012_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun160', returns: '[number, boolean]',
          parameters: [{ type: '[number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun160');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0012_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0012_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample160_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0013_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0013_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass160', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean]',
            parameters: [{ type: '[number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0013_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0013_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0014_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0014_number_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp160.ts', `
        function h2cpp160(p: [number, boolean]): [number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0014_number_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0014_number_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp160.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0015_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0015_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn160', returns: '[number, boolean]',
          parameters: [{ type: '[number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias160', alias: '[number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias160');
      assert.strictEqual(converted.types[0].alias, '[number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn160');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0015_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0015_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample160_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0016_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0016_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass161', alias: '',
          variableList: [{ type: '[string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0016_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0017_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0017_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun161', returns: '[string, number]',
          parameters: [{ type: '[string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun161');
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0017_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0017_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample161_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0018_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0018_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass161', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number]',
            parameters: [{ type: '[string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0018_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0018_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0019_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0019_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp161.ts', `function h2cpp161(p: [string, number]): [string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0019_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0019_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0020_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0020_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn161', returns: '[string, number]',
          parameters: [{ type: '[string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias161', alias: '[string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias161');
      assert.strictEqual(converted.types[0].alias, '[string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn161');
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0020_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0020_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample161_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0021_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0021_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass162', alias: '',
          variableList: [{ type: '[string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0021_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0022_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0022_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun162', returns: '[string, string]',
          parameters: [{ type: '[string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun162');
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0022_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0022_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample162_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0023_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0023_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass162', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string]',
            parameters: [{ type: '[string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0023_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0023_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0024_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0024_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp162.ts', `function h2cpp162(p: [string, string]): [string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0024_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0024_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0025_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0025_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn162', returns: '[string, string]',
          parameters: [{ type: '[string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias162', alias: '[string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias162');
      assert.strictEqual(converted.types[0].alias, '[string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn162');
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0025_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0025_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample162_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0026_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0026_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass163', alias: '',
          variableList: [{ type: '[string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0026_string_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0027_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0027_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun163', returns: '[string, boolean]',
          parameters: [{ type: '[string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun163');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0027_string_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0027_string_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample163_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0028_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0028_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass163', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean]',
            parameters: [{ type: '[string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0028_string_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0028_string_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0029_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0029_string_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp163.ts', `
        function h2cpp163(p: [string, boolean]): [string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0029_string_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0029_string_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0030_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0030_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn163', returns: '[string, boolean]',
          parameters: [{ type: '[string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias163', alias: '[string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias163');
      assert.strictEqual(converted.types[0].alias, '[string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn163');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0030_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0030_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample163_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0031_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass164', alias: '',
          variableList: [{ type: '[boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0031_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0032_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun164', returns: '[boolean, number]',
          parameters: [{ type: '[boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun164');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0032_boolean_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0032_boolean_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample164_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0033_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass164', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number]',
            parameters: [{ type: '[boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0033_boolean_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0033_boolean_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0034_boolean_number', () => {
    try {
      const parsed = doParseTs('h2cpp164.ts', `
        function h2cpp164(p: [boolean, number]): [boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0034_boolean_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0034_boolean_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0035_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn164', returns: '[boolean, number]',
          parameters: [{ type: '[boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias164', alias: '[boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias164');
      assert.strictEqual(converted.types[0].alias, '[boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn164');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0035_boolean_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0035_boolean_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample164_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0036_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0036_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass165', alias: '',
          variableList: [{ type: '[boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0036_boolean_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0037_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0037_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun165', returns: '[boolean, string]',
          parameters: [{ type: '[boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun165');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0037_boolean_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0037_boolean_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample165_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0038_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0038_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass165', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string]',
            parameters: [{ type: '[boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0038_boolean_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0038_boolean_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0039_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0039_boolean_string', () => {
    try {
      const parsed = doParseTs('h2cpp165.ts', `
        function h2cpp165(p: [boolean, string]): [boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0039_boolean_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0039_boolean_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_BOOLEAN_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0040_BOOLEAN_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0040_boolean_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn165', returns: '[boolean, string]',
          parameters: [{ type: '[boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias165', alias: '[boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias165');
      assert.strictEqual(converted.types[0].alias, '[boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn165');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0040_boolean_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0040_boolean_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample165_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0041_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [boolean, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0041_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass166', alias: '',
          variableList: [{ type: '[boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0041_boolean_boolean class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0042_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [boolean, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0042_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun166', returns: '[boolean, boolean]',
          parameters: [{ type: '[boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun166');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0042_boolean_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0042_boolean_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample166_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0043_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [boolean, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0043_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass166', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean]',
            parameters: [{ type: '[boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0043_boolean_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0043_boolean_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0044_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0044_boolean_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp166.ts', `
        function h2cpp166(p: [boolean, boolean]): [boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0044_boolean_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0044_boolean_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0045_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0045_boolean_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn166', returns: '[boolean, boolean]',
          parameters: [{ type: '[boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias166', alias: '[boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias166');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn166');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0045_boolean_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0045_boolean_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample166_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0046_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0046_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass167', alias: '',
          variableList: [{ type: '[number, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0046_number_number_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0047_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0047_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun167', returns: '[number, number, number]',
          parameters: [{ type: '[number, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun167');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0047_number_number_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0047_number_number_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample167_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0048_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0048_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass167', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, number]',
            parameters: [{ type: '[number, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0048_number_number_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0048_number_number_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0049_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0049_number_number_number', () => {
    try {
      const parsed = doParseTs('h2cpp167.ts', `
        function h2cpp167(p: [number, number, number]): [number, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0049_number_number_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0049_number_number_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0050_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0050_number_number_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn167', returns: '[number, number, number]',
          parameters: [{ type: '[number, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias167', alias: '[number, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias167');
      assert.strictEqual(converted.types[0].alias, '[number, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn167');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0050_number_number_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0050_number_number_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample167_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0051_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0051_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass168', alias: '',
          variableList: [{ type: '[number, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0051_number_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0052_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: global-function convert; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0052_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun168', returns: '[number, number, string]',
          parameters: [{ type: '[number, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun168');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string]",
        "h2dtscpp_convert_tuple_0052_number_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0052_number_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample168_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0053_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/tuple: class-method convert; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0053_number_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass168', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, string]',
            parameters: [{ type: '[number, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, string]",
        "h2dtscpp_convert_tuple_0053_number_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0053_number_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0001_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/tuple: type-alias and global-function convert; type
   *            [number, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0001_number_string_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn172', returns: '[number, string, boolean]',
          parameters: [{ type: '[number, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias172', alias: '[number, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias172');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn172');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0001_number_string_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0001_number_string_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample172_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_TUPLE_0002_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert h2dtscpp/tuple: class-field convert; type [number, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_tuple_0002_number_boolean_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass173', alias: '',
          variableList: [{ type: '[number, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number]",
        "h2dtscpp_convert_tuple_0002_number_boolean_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002_number_boolean_number execution error: ${String(err)}`);
    }
  });
});
