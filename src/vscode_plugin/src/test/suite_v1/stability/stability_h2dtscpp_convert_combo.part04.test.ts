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

suite('Stability_H2DTSCPP_CONVERT_COMBO_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { a: number; b: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_a_number_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass215', alias: '',
          variableList: [{ type: '{ a: number; b: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass215');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0016_a_number_b_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { a: number; b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_a_number_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun215', returns: '{ a: number; b: number }',
          parameters: [{ type: '{ a: number; b: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun215');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0017_a_number_b_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0017_a_number_b_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample215_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun215') || generated.napiCppContent.includes('globalRun215')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun215'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { a: number; b: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_a_number_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass215', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ a: number; b: number }',
            parameters: [{ type: '{ a: number; b: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0018_a_number_b_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0018_a_number_b_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { a: number; b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_a_number_b_number', () => {
    try {
      const parsed = doParseTs('h2cpp215.ts', `
        function h2cpp215(p: { a: number; b: number }): { a: number; b: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp215');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0019_a_number_b_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0019_a_number_b_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp215') || generated.napiCppContent.includes('h2cpp215')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp215'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { a:
   *            number; b: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_a_number_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn215', returns: '{ a: number; b: number }',
          parameters: [{ type: '{ a: number; b: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias215', alias: '{ a: number; b: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias215');
      assert.strictEqual(converted.types[0].alias, '{ a: number; b: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn215');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0020_a_number_b_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number }",
        "h2dtscpp_convert_combo_0020_a_number_b_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample215_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn215') || generated.napiCppContent.includes('typeFn215')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn215'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_A
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_A
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type A; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_a', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass220', alias: '',
          variableList: [{ type: 'A', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass220');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "A",
        "h2dtscpp_convert_combo_0021_a class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_A
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_A
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type A; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_a', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun220', returns: 'A',
          parameters: [{ type: 'A', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun220');
      assert.strictEqual(converted.funcs[0].returns, "A",
        "h2dtscpp_convert_combo_0022_a global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "A",
        "h2dtscpp_convert_combo_0022_a global param type convert convert output");
      const generated = generateFunctions(converted, 'sample220_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun220') || generated.napiCppContent.includes('globalRun220')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun220'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_A
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_A
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type A; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_a', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass220', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'A',
            parameters: [{ type: 'A', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "A",
        "h2dtscpp_convert_combo_0023_a class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "A",
        "h2dtscpp_convert_combo_0023_a class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_A
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_A
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type A; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_a', () => {
    try {
      const parsed = doParseTs('h2cpp220.ts', `function h2cpp220(p: A): A { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp220');
      assert.strictEqual(converted.funcs[0].returns, "A",
        "h2dtscpp_convert_combo_0024_a parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "A",
        "h2dtscpp_convert_combo_0024_a parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp220.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp220') || generated.napiCppContent.includes('h2cpp220')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp220'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_A
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_A
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type A;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_a', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn220', returns: 'A',
          parameters: [{ type: 'A', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias220', alias: 'A', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias220');
      assert.strictEqual(converted.types[0].alias, 'A');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn220');
      assert.strictEqual(converted.funcs[0].returns, "A",
        "h2dtscpp_convert_combo_0025_a type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "A",
        "h2dtscpp_convert_combo_0025_a type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample220_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn220') || generated.napiCppContent.includes('typeFn220')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn220'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_B
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_B
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type B; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_b', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass221', alias: '',
          variableList: [{ type: 'B', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass221');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "B",
        "h2dtscpp_convert_combo_0026_b class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_B
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_B
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type B; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_b', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun221', returns: 'B',
          parameters: [{ type: 'B', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun221');
      assert.strictEqual(converted.funcs[0].returns, "B",
        "h2dtscpp_convert_combo_0027_b global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "B",
        "h2dtscpp_convert_combo_0027_b global param type convert convert output");
      const generated = generateFunctions(converted, 'sample221_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun221') || generated.napiCppContent.includes('globalRun221')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun221'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_B
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_B
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type B; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_b', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass221', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'B',
            parameters: [{ type: 'B', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "B",
        "h2dtscpp_convert_combo_0028_b class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "B",
        "h2dtscpp_convert_combo_0028_b class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_B
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_B
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type B; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0029_b', () => {
    try {
      const parsed = doParseTs('h2cpp221.ts', `function h2cpp221(p: B): B { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp221');
      assert.strictEqual(converted.funcs[0].returns, "B",
        "h2dtscpp_convert_combo_0029_b parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "B",
        "h2dtscpp_convert_combo_0029_b parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp221.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp221') || generated.napiCppContent.includes('h2cpp221')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp221'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0029_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_B
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_B
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type B;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0030_b', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn221', returns: 'B',
          parameters: [{ type: 'B', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias221', alias: 'B', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias221');
      assert.strictEqual(converted.types[0].alias, 'B');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn221');
      assert.strictEqual(converted.funcs[0].returns, "B",
        "h2dtscpp_convert_combo_0030_b type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "B",
        "h2dtscpp_convert_combo_0030_b type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample221_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn221') || generated.napiCppContent.includes('typeFn221')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn221'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0030_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_STRING_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_STRING_BRAND_X
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type string & { brand: "x" };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0031_string_brand_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass222', alias: '',
          variableList: [{ type: 'string & { brand: "x" }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass222');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0031_string_brand_x class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0031_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_STRING_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_STRING_BRAND_X
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type string & { brand:
   *            "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0032_string_brand_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun222', returns: 'string & { brand: "x" }',
          parameters: [{ type: 'string & { brand: "x" }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun222');
      assert.strictEqual(converted.funcs[0].returns, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0032_string_brand_x global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0032_string_brand_x global param type convert convert output");
      const generated = generateFunctions(converted, 'sample222_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun222') || generated.napiCppContent.includes('globalRun222')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun222'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0032_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_STRING_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_STRING_BRAND_X
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type string & { brand: "x"
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0033_string_brand_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass222', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string & { brand: "x" }',
            parameters: [{ type: 'string & { brand: "x" }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0033_string_brand_x class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0033_string_brand_x class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0033_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_STRING_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_STRING_BRAND_X
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type string & { brand:
   *            "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0034_string_brand_x', () => {
    try {
      const parsed = doParseTs('h2cpp222.ts', `
        function h2cpp222(p: string & { brand: "x" }): string & { brand: "x" } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp222');
      assert.strictEqual(converted.funcs[0].returns, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0034_string_brand_x parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0034_string_brand_x parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp222.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp222') || generated.napiCppContent.includes('h2cpp222')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp222'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0034_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_STRING_BRAND_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_STRING_BRAND_X
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            string & { brand: "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0035_string_brand_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn222', returns: 'string & { brand: "x" }',
          parameters: [{ type: 'string & { brand: "x" }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias222', alias: 'string & { brand: "x" }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias222');
      assert.strictEqual(converted.types[0].alias, 'string & { brand: "x" }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn222');
      assert.strictEqual(converted.funcs[0].returns, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0035_string_brand_x type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" }",
        "h2dtscpp_convert_combo_0035_string_brand_x type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample222_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn222') || generated.napiCppContent.includes('typeFn222')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn222'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0035_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_LIT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_LIT
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0036_lit', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass223', alias: '',
          variableList: [{ type: '"lit"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass223');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"lit\"",
        "h2dtscpp_convert_combo_0036_lit class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0036_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_LIT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_LIT
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0037_lit', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun223', returns: '"lit"',
          parameters: [{ type: '"lit"', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun223');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\"",
        "h2dtscpp_convert_combo_0037_lit global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\"",
        "h2dtscpp_convert_combo_0037_lit global param type convert convert output");
      const generated = generateFunctions(converted, 'sample223_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun223') || generated.napiCppContent.includes('globalRun223')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun223'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0037_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_LIT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_LIT
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0038_lit', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass223', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '"lit"',
            parameters: [{ type: '"lit"', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "\"lit\"",
        "h2dtscpp_convert_combo_0038_lit class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "\"lit\"",
        "h2dtscpp_convert_combo_0038_lit class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0038_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_LIT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_LIT
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type "lit";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0039_lit', () => {
    try {
      const parsed = doParseTs('h2cpp223.ts', `function h2cpp223(p: "lit"): "lit" { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp223');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\"",
        "h2dtscpp_convert_combo_0039_lit parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\"",
        "h2dtscpp_convert_combo_0039_lit parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp223.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp223') || generated.napiCppContent.includes('h2cpp223')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp223'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0039_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_LIT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_LIT
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            "lit"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0040_lit', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn223', returns: '"lit"',
          parameters: [{ type: '"lit"', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias223', alias: '"lit"', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias223');
      assert.strictEqual(converted.types[0].alias, '"lit"');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn223');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\"",
        "h2dtscpp_convert_combo_0040_lit type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\"",
        "h2dtscpp_convert_combo_0040_lit type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample223_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn223') || generated.napiCppContent.includes('typeFn223')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn223'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0040_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_42
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_42
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type 42; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0041_42', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass224', alias: '',
          variableList: [{ type: '42', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass224');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "42",
        "h2dtscpp_convert_combo_0041_42 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0041_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_42
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_42
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type 42; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0042_42', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun224', returns: '42',
          parameters: [{ type: '42', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun224');
      assert.strictEqual(converted.funcs[0].returns, "42",
        "h2dtscpp_convert_combo_0042_42 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "42",
        "h2dtscpp_convert_combo_0042_42 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample224_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun224') || generated.napiCppContent.includes('globalRun224')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun224'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0042_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_42
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_42
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type 42; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0043_42', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass224', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '42',
            parameters: [{ type: '42', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "42",
        "h2dtscpp_convert_combo_0043_42 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "42",
        "h2dtscpp_convert_combo_0043_42 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0043_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_42
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_42
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type 42; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0044_42', () => {
    try {
      const parsed = doParseTs('h2cpp224.ts', `function h2cpp224(p: 42): 42 { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp224');
      assert.strictEqual(converted.funcs[0].returns, "42",
        "h2dtscpp_convert_combo_0044_42 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "42",
        "h2dtscpp_convert_combo_0044_42 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp224.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp224') || generated.napiCppContent.includes('h2cpp224')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp224'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0044_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_42
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_42
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type 42;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0045_42', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn224', returns: '42',
          parameters: [{ type: '42', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias224', alias: '42', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias224');
      assert.strictEqual(converted.types[0].alias, '42');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn224');
      assert.strictEqual(converted.funcs[0].returns, "42",
        "h2dtscpp_convert_combo_0045_42 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "42",
        "h2dtscpp_convert_combo_0045_42 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample224_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn224') || generated.napiCppContent.includes('typeFn224')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn224'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0045_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_TRUE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_TRUE
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0046_true', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass225', alias: '',
          variableList: [{ type: 'true', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass225');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "true",
        "h2dtscpp_convert_combo_0046_true class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0046_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_TRUE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_TRUE
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0047_true', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun225', returns: 'true',
          parameters: [{ type: 'true', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun225');
      assert.strictEqual(converted.funcs[0].returns, "true",
        "h2dtscpp_convert_combo_0047_true global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "true",
        "h2dtscpp_convert_combo_0047_true global param type convert convert output");
      const generated = generateFunctions(converted, 'sample225_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun225') || generated.napiCppContent.includes('globalRun225')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun225'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0047_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_TRUE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_TRUE
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0048_true', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass225', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'true',
            parameters: [{ type: 'true', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "true",
        "h2dtscpp_convert_combo_0048_true class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "true",
        "h2dtscpp_convert_combo_0048_true class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0048_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_TRUE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_TRUE
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0049_true', () => {
    try {
      const parsed = doParseTs('h2cpp225.ts', `function h2cpp225(p: true): true { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp225');
      assert.strictEqual(converted.funcs[0].returns, "true",
        "h2dtscpp_convert_combo_0049_true parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "true",
        "h2dtscpp_convert_combo_0049_true parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp225.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp225') || generated.napiCppContent.includes('h2cpp225')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp225'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0049_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_TRUE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_TRUE
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type true;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0050_true', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn225', returns: 'true',
          parameters: [{ type: 'true', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias225', alias: 'true', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias225');
      assert.strictEqual(converted.types[0].alias, 'true');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn225');
      assert.strictEqual(converted.funcs[0].returns, "true",
        "h2dtscpp_convert_combo_0050_true type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "true",
        "h2dtscpp_convert_combo_0050_true type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample225_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn225') || generated.napiCppContent.includes('typeFn225')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn225'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0050_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_VOIDFUNC
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_VOIDFUNC
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type voidFunc; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0051_voidfunc', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass234', alias: '',
          variableList: [{ type: 'voidFunc', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass234');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc",
        "h2dtscpp_convert_combo_0051_voidfunc class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0051_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_VOIDFUNC
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_VOIDFUNC
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type voidFunc;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0052_voidfunc', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun234', returns: 'voidFunc',
          parameters: [{ type: 'voidFunc', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun234');
      assert.strictEqual(converted.funcs[0].returns, "voidFunc",
        "h2dtscpp_convert_combo_0052_voidfunc global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc",
        "h2dtscpp_convert_combo_0052_voidfunc global param type convert convert output");
      const generated = generateFunctions(converted, 'sample234_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun234') || generated.napiCppContent.includes('globalRun234')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun234'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0052_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_VOIDFUNC
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_VOIDFUNC
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type voidFunc; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0053_voidfunc', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass234', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'voidFunc',
            parameters: [{ type: 'voidFunc', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "voidFunc",
        "h2dtscpp_convert_combo_0053_voidfunc class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "voidFunc",
        "h2dtscpp_convert_combo_0053_voidfunc class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0053_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0054_VOIDFUNC
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0054_VOIDFUNC
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type voidFunc;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0054_voidfunc', () => {
    try {
      const parsed = doParseTs('h2cpp234.ts', `function h2cpp234(p: voidFunc): voidFunc { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp234');
      assert.strictEqual(converted.funcs[0].returns, "voidFunc",
        "h2dtscpp_convert_combo_0054_voidfunc parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc",
        "h2dtscpp_convert_combo_0054_voidfunc parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp234') || generated.napiCppContent.includes('h2cpp234')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp234'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0054_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            string & {}; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn261', returns: 'string & {}',
          parameters: [{ type: 'string & {}', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias261', alias: 'string & {}', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias261');
      assert.strictEqual(converted.types[0].alias, 'string & {}');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn261');
      assert.strictEqual(converted.funcs[0].returns, "string & {}",
        "h2dtscpp_convert_combo_0006_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {}",
        "h2dtscpp_convert_combo_0006_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample261_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn261') || generated.napiCppContent.includes('typeFn261')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn261'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_ID_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_ID_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_id_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass263', alias: '',
          variableList: [{ type: '{ id: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass263');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number }",
        "h2dtscpp_convert_combo_0007_id_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_ID_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_ID_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_id_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun263', returns: '{ id: number }',
          parameters: [{ type: '{ id: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun263');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number }",
        "h2dtscpp_convert_combo_0008_id_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number }",
        "h2dtscpp_convert_combo_0008_id_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample263_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun263') || generated.napiCppContent.includes('globalRun263')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun263'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_ID_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_ID_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_id_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass263', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ id: number }',
            parameters: [{ type: '{ id: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ id: number }",
        "h2dtscpp_convert_combo_0009_id_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ id: number }",
        "h2dtscpp_convert_combo_0009_id_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_ID_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_ID_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_id_number', () => {
    try {
      const parsed = doParseTs('h2cpp263.ts', `function h2cpp263(p: { id: number }): { id: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp263');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number }",
        "h2dtscpp_convert_combo_0010_id_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number }",
        "h2dtscpp_convert_combo_0010_id_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp263') || generated.napiCppContent.includes('h2cpp263')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp263'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_ID_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_ID_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { id:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_id_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn263', returns: '{ id: number }',
          parameters: [{ type: '{ id: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias263', alias: '{ id: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias263');
      assert.strictEqual(converted.types[0].alias, '{ id: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn263');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number }",
        "h2dtscpp_convert_combo_0011_id_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number }",
        "h2dtscpp_convert_combo_0011_id_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample263_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn263') || generated.napiCppContent.includes('typeFn263')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn263'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_T
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_T
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type T; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_t', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass276', alias: '',
          variableList: [{ type: 'T', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass276');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "T",
        "h2dtscpp_convert_combo_0012_t class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_T
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_T
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type T; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_t', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun276', returns: 'T',
          parameters: [{ type: 'T', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun276');
      assert.strictEqual(converted.funcs[0].returns, "T",
        "h2dtscpp_convert_combo_0013_t global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T",
        "h2dtscpp_convert_combo_0013_t global param type convert convert output");
      const generated = generateFunctions(converted, 'sample276_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun276') || generated.napiCppContent.includes('globalRun276')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun276'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_T
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_T
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type T; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_t', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass276', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'T',
            parameters: [{ type: 'T', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "T",
        "h2dtscpp_convert_combo_0014_t class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "T",
        "h2dtscpp_convert_combo_0014_t class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_T
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_T
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type T; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_t', () => {
    try {
      const parsed = doParseTs('h2cpp276.ts', `function h2cpp276(p: T): T { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp276');
      assert.strictEqual(converted.funcs[0].returns, "T",
        "h2dtscpp_convert_combo_0015_t parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T",
        "h2dtscpp_convert_combo_0015_t parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp276') || generated.napiCppContent.includes('h2cpp276')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp276'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_T
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_T
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type T;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_t', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn276', returns: 'T',
          parameters: [{ type: 'T', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias276', alias: 'T', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias276');
      assert.strictEqual(converted.types[0].alias, 'T');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn276');
      assert.strictEqual(converted.funcs[0].returns, "T",
        "h2dtscpp_convert_combo_0016_t type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T",
        "h2dtscpp_convert_combo_0016_t type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample276_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn276') || generated.napiCppContent.includes('typeFn276')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn276'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_C
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_C
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type C; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_c', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass277', alias: '',
          variableList: [{ type: 'C', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass277');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "C",
        "h2dtscpp_convert_combo_0017_c class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_C
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_C
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type C; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_c', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun277', returns: 'C',
          parameters: [{ type: 'C', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun277');
      assert.strictEqual(converted.funcs[0].returns, "C",
        "h2dtscpp_convert_combo_0018_c global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "C",
        "h2dtscpp_convert_combo_0018_c global param type convert convert output");
      const generated = generateFunctions(converted, 'sample277_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun277') || generated.napiCppContent.includes('globalRun277')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun277'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_C
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_C
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type C; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_c', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass277', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'C',
            parameters: [{ type: 'C', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "C",
        "h2dtscpp_convert_combo_0019_c class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "C",
        "h2dtscpp_convert_combo_0019_c class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_c execution error: ${err}`);
    }
  });
});
