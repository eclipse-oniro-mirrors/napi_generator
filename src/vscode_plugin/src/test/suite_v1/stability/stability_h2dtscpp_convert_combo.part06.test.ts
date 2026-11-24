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

suite('Stability_H2DTSCPP_CONVERT_COMBO_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_OUTPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_OUTPUT
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Output; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_output', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun320', returns: 'Output',
          parameters: [{ type: 'Output', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun320');
      assert.strictEqual(converted.funcs[0].returns, "Output",
        "h2dtscpp_convert_combo_0024_output global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Output",
        "h2dtscpp_convert_combo_0024_output global param type convert convert output");
      const generated = generateFunctions(converted, 'sample320_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun320') || generated.napiCppContent.includes('globalRun320')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun320'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_OUTPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_OUTPUT
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Output; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_output', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass320', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Output',
            parameters: [{ type: 'Output', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Output",
        "h2dtscpp_convert_combo_0025_output class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Output",
        "h2dtscpp_convert_combo_0025_output class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_OUTPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_OUTPUT
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Output;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_output', () => {
    try {
      const parsed = doParseTs('h2cpp320.ts', `function h2cpp320(p: Output): Output { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp320');
      assert.strictEqual(converted.funcs[0].returns, "Output",
        "h2dtscpp_convert_combo_0026_output parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Output",
        "h2dtscpp_convert_combo_0026_output parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp320.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp320') || generated.napiCppContent.includes('h2cpp320')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp320'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_OUTPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_OUTPUT
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Output; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_output', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn320', returns: 'Output',
          parameters: [{ type: 'Output', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias320', alias: 'Output', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias320');
      assert.strictEqual(converted.types[0].alias, 'Output');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn320');
      assert.strictEqual(converted.funcs[0].returns, "Output",
        "h2dtscpp_convert_combo_0027_output type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Output",
        "h2dtscpp_convert_combo_0027_output type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample320_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn320') || generated.napiCppContent.includes('typeFn320')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn320'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { a: number; b: number;
   *            c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_a_number_b_number_c_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass321', alias: '',
          variableList: [{ type: '{ a: number; b: number; c: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass321');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0028_a_number_b_number_c_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { a: number; b:
   *            number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0029_a_number_b_number_c_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun321', returns: '{ a: number; b: number; c: number }',
          parameters: [{ type: '{ a: number; b: number; c: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun321');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0029_a_number_b_number_c_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0029_a_number_b_number_c_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample321_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun321') || generated.napiCppContent.includes('globalRun321')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun321'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0029_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { a: number; b: number;
   *            c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0030_a_number_b_number_c_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass321', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ a: number; b: number; c: number }',
            parameters: [{ type: '{ a: number; b: number; c: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0030_a_number_b_number_c_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0030_a_number_b_number_c_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0030_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { a: number; b:
   *            number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0031_a_number_b_number_c_number', () => {
    try {
      const parsed = doParseTs('h2cpp321.ts', `
        function h2cpp321(p: { a: number; b: number; c: number }): { a: number; b: number; c: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp321');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0031_a_number_b_number_c_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0031_a_number_b_number_c_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp321.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp321') || generated.napiCppContent.includes('h2cpp321')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp321'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0031_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { a:
   *            number; b: number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0032_a_number_b_number_c_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn321', returns: '{ a: number; b: number; c: number }',
          parameters: [{ type: '{ a: number; b: number; c: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias321', alias: '{ a: number; b: number; c: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias321');
      assert.strictEqual(converted.types[0].alias, '{ a: number; b: number; c: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn321');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0032_a_number_b_number_c_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number; c: number }",
        "h2dtscpp_convert_combo_0032_a_number_b_number_c_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample321_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn321') || generated.napiCppContent.includes('typeFn321')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn321'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0032_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_E
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_E
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type E; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0033_e', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass322', alias: '',
          variableList: [{ type: 'E', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass322');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "E",
        "h2dtscpp_convert_combo_0033_e class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0033_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_E
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_E
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type E; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0034_e', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun322', returns: 'E',
          parameters: [{ type: 'E', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun322');
      assert.strictEqual(converted.funcs[0].returns, "E",
        "h2dtscpp_convert_combo_0034_e global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "E",
        "h2dtscpp_convert_combo_0034_e global param type convert convert output");
      const generated = generateFunctions(converted, 'sample322_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun322') || generated.napiCppContent.includes('globalRun322')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun322'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0034_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_E
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_E
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type E; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0035_e', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass322', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'E',
            parameters: [{ type: 'E', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "E",
        "h2dtscpp_convert_combo_0035_e class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "E",
        "h2dtscpp_convert_combo_0035_e class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0035_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_E
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_E
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type E; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0036_e', () => {
    try {
      const parsed = doParseTs('h2cpp322.ts', `function h2cpp322(p: E): E { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp322');
      assert.strictEqual(converted.funcs[0].returns, "E",
        "h2dtscpp_convert_combo_0036_e parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "E",
        "h2dtscpp_convert_combo_0036_e parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp322.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp322') || generated.napiCppContent.includes('h2cpp322')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp322'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0036_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_E
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_E
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type E;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0037_e', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn322', returns: 'E',
          parameters: [{ type: 'E', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias322', alias: 'E', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias322');
      assert.strictEqual(converted.types[0].alias, 'E');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn322');
      assert.strictEqual(converted.funcs[0].returns, "E",
        "h2dtscpp_convert_combo_0037_e type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "E",
        "h2dtscpp_convert_combo_0037_e type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample322_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn322') || generated.napiCppContent.includes('typeFn322')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn322'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0037_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0038_typeof_globalthis', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass324', alias: '',
          variableList: [{ type: 'typeof globalThis', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass324');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis",
        "h2dtscpp_convert_combo_0038_typeof_globalthis class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0038_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0039_typeof_globalthis', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun324', returns: 'typeof globalThis',
          parameters: [{ type: 'typeof globalThis', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun324');
      assert.strictEqual(converted.funcs[0].returns, "typeof globalThis",
        "h2dtscpp_convert_combo_0039_typeof_globalthis global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis",
        "h2dtscpp_convert_combo_0039_typeof_globalthis global param type convert convert output");
      const generated = generateFunctions(converted, 'sample324_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun324') || generated.napiCppContent.includes('globalRun324')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun324'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0039_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0040_typeof_globalthis', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass324', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'typeof globalThis',
            parameters: [{ type: 'typeof globalThis', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "typeof globalThis",
        "h2dtscpp_convert_combo_0040_typeof_globalthis class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "typeof globalThis",
        "h2dtscpp_convert_combo_0040_typeof_globalthis class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0040_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type typeof
   *            globalThis; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0041_typeof_globalthis', () => {
    try {
      const parsed = doParseTs('h2cpp324.ts', `
        function h2cpp324(p: typeof globalThis): typeof globalThis { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp324');
      assert.strictEqual(converted.funcs[0].returns, "typeof globalThis",
        "h2dtscpp_convert_combo_0041_typeof_globalthis parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis",
        "h2dtscpp_convert_combo_0041_typeof_globalthis parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp324.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp324') || generated.napiCppContent.includes('h2cpp324')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp324'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0041_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            typeof globalThis; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0042_typeof_globalthis', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn324', returns: 'typeof globalThis',
          parameters: [{ type: 'typeof globalThis', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias324', alias: 'typeof globalThis', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias324');
      assert.strictEqual(converted.types[0].alias, 'typeof globalThis');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn324');
      assert.strictEqual(converted.funcs[0].returns, "typeof globalThis",
        "h2dtscpp_convert_combo_0042_typeof_globalthis type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis",
        "h2dtscpp_convert_combo_0042_typeof_globalthis type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample324_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn324') || generated.napiCppContent.includes('typeFn324')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn324'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0042_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_UNKNOWN_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_UNKNOWN_NULL
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0043_unknown_null', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass325', alias: '',
          variableList: [{ type: 'unknown & null', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass325');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null",
        "h2dtscpp_convert_combo_0043_unknown_null class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0043_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_UNKNOWN_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_UNKNOWN_NULL
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0044_unknown_null', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun325', returns: 'unknown & null',
          parameters: [{ type: 'unknown & null', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun325');
      assert.strictEqual(converted.funcs[0].returns, "unknown & null",
        "h2dtscpp_convert_combo_0044_unknown_null global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null",
        "h2dtscpp_convert_combo_0044_unknown_null global param type convert convert output");
      const generated = generateFunctions(converted, 'sample325_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun325') || generated.napiCppContent.includes('globalRun325')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun325'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0044_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_UNKNOWN_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_UNKNOWN_NULL
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0045_unknown_null', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass325', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'unknown & null',
            parameters: [{ type: 'unknown & null', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "unknown & null",
        "h2dtscpp_convert_combo_0045_unknown_null class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "unknown & null",
        "h2dtscpp_convert_combo_0045_unknown_null class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0045_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_UNKNOWN_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_UNKNOWN_NULL
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0046_unknown_null', () => {
    try {
      const parsed = doParseTs('h2cpp325.ts', `function h2cpp325(p: unknown & null): unknown & null { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp325');
      assert.strictEqual(converted.funcs[0].returns, "unknown & null",
        "h2dtscpp_convert_combo_0046_unknown_null parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null",
        "h2dtscpp_convert_combo_0046_unknown_null parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp325.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp325') || generated.napiCppContent.includes('h2cpp325')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp325'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0046_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_UNKNOWN_NULL
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_UNKNOWN_NULL
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            unknown & null; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0047_unknown_null', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn325', returns: 'unknown & null',
          parameters: [{ type: 'unknown & null', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias325', alias: 'unknown & null', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias325');
      assert.strictEqual(converted.types[0].alias, 'unknown & null');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn325');
      assert.strictEqual(converted.funcs[0].returns, "unknown & null",
        "h2dtscpp_convert_combo_0047_unknown_null type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null",
        "h2dtscpp_convert_combo_0047_unknown_null type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample325_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn325') || generated.napiCppContent.includes('typeFn325')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn325'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0047_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_STRING_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_STRING_TAG_X
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type string & { tag: "x" };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0048_string_tag_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass328', alias: '',
          variableList: [{ type: 'string & { tag: "x" }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass328');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0048_string_tag_x class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0048_string_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_STRING_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_STRING_TAG_X
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type string & { tag: "x"
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0049_string_tag_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun328', returns: 'string & { tag: "x" }',
          parameters: [{ type: 'string & { tag: "x" }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun328');
      assert.strictEqual(converted.funcs[0].returns, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0049_string_tag_x global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0049_string_tag_x global param type convert convert output");
      const generated = generateFunctions(converted, 'sample328_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun328') || generated.napiCppContent.includes('globalRun328')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun328'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0049_string_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_STRING_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_STRING_TAG_X
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type string & { tag: "x" };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0050_string_tag_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass328', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string & { tag: "x" }',
            parameters: [{ type: 'string & { tag: "x" }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0050_string_tag_x class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0050_string_tag_x class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0050_string_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_STRING_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_STRING_TAG_X
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type string & { tag:
   *            "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0051_string_tag_x', () => {
    try {
      const parsed = doParseTs('h2cpp328.ts', `
        function h2cpp328(p: string & { tag: "x" }): string & { tag: "x" } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp328');
      assert.strictEqual(converted.funcs[0].returns, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0051_string_tag_x parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0051_string_tag_x parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp328.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp328') || generated.napiCppContent.includes('h2cpp328')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp328'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0051_string_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_STRING_TAG_X
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_STRING_TAG_X
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            string & { tag: "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0052_string_tag_x', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn328', returns: 'string & { tag: "x" }',
          parameters: [{ type: 'string & { tag: "x" }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias328', alias: 'string & { tag: "x" }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias328');
      assert.strictEqual(converted.types[0].alias, 'string & { tag: "x" }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn328');
      assert.strictEqual(converted.funcs[0].returns, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0052_string_tag_x type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" }",
        "h2dtscpp_convert_combo_0052_string_tag_x type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample328_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn328') || generated.napiCppContent.includes('typeFn328')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn328'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0052_string_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_ID_NUMBER_NAME_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_ID_NUMBER_NAME_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { id: number; name:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0053_id_number_name_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass329', alias: '',
          variableList: [{ type: '{ id: number; name: string }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass329');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number; name: string }",
        "h2dtscpp_convert_combo_0053_id_number_name_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0053_id_number_name_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { a: number; b:
   *            string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_a_number_b_string_c_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun364', returns: '{ a: number; b: string; c: boolean }',
          parameters: [{ type: '{ a: number; b: string; c: boolean }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun364');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0006_a_number_b_string_c_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0006_a_number_b_string_c_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample364_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun364') || generated.napiCppContent.includes('globalRun364')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun364'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { a: number; b: string;
   *            c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_a_number_b_string_c_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass364', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ a: number; b: string; c: boolean }',
            parameters: [{ type: '{ a: number; b: string; c: boolean }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0007_a_number_b_string_c_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0007_a_number_b_string_c_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { a: number; b:
   *            string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_a_number_b_string_c_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp364.ts', `
        function h2cpp364(p: { a: number; b: string; c: boolean }):
        { a: number; b: string; c: boolean } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp364');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0008_a_number_b_string_c_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0008_a_number_b_string_c_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp364.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp364') || generated.napiCppContent.includes('h2cpp364')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp364'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { a:
   *            number; b: string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_a_number_b_string_c_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn364', returns: '{ a: number; b: string; c: boolean }',
          parameters: [{ type: '{ a: number; b: string; c: boolean }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias364', alias: '{ a: number; b: string; c: boolean }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias364');
      assert.strictEqual(converted.types[0].alias, '{ a: number; b: string; c: boolean }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn364');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0009_a_number_b_string_c_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean }",
        "h2dtscpp_convert_combo_0009_a_number_b_string_c_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample364_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn364') || generated.napiCppContent.includes('typeFn364')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn364'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_A_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_A_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { a: { b: number } };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_a_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass365', alias: '',
          variableList: [{ type: '{ a: { b: number } }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass365');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0010_a_b_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_A_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_A_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { a: { b: number }
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_a_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun365', returns: '{ a: { b: number } }',
          parameters: [{ type: '{ a: { b: number } }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun365');
      assert.strictEqual(converted.funcs[0].returns, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0011_a_b_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0011_a_b_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample365_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun365') || generated.napiCppContent.includes('globalRun365')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun365'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_A_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_A_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { a: { b: number } };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_a_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass365', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ a: { b: number } }',
            parameters: [{ type: '{ a: { b: number } }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0012_a_b_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0012_a_b_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_A_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_A_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { a: { b: number
   *            } }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_a_b_number', () => {
    try {
      const parsed = doParseTs('h2cpp365.ts', `
        function h2cpp365(p: { a: { b: number } }): { a: { b: number } } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp365');
      assert.strictEqual(converted.funcs[0].returns, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0013_a_b_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0013_a_b_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp365.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp365') || generated.napiCppContent.includes('h2cpp365')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp365'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_A_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_A_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { a:
   *            { b: number } }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_a_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn365', returns: '{ a: { b: number } }',
          parameters: [{ type: '{ a: { b: number } }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias365', alias: '{ a: { b: number } }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias365');
      assert.strictEqual(converted.types[0].alias, '{ a: { b: number } }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn365');
      assert.strictEqual(converted.funcs[0].returns, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0014_a_b_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } }",
        "h2dtscpp_convert_combo_0014_a_b_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample365_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn365') || generated.napiCppContent.includes('typeFn365')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn365'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_VARIANT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_VARIANT
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_variant', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass367', alias: '',
          variableList: [{ type: '中文类型', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass367');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型",
        "h2dtscpp_convert_combo_0015_variant class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_VARIANT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_VARIANT
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_variant', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun367', returns: '中文类型',
          parameters: [{ type: '中文类型', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun367');
      assert.strictEqual(converted.funcs[0].returns, "中文类型",
        "h2dtscpp_convert_combo_0016_variant global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型",
        "h2dtscpp_convert_combo_0016_variant global param type convert convert output");
      const generated = generateFunctions(converted, 'sample367_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun367') || generated.napiCppContent.includes('globalRun367')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun367'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_VARIANT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_VARIANT
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_variant', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass367', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '中文类型',
            parameters: [{ type: '中文类型', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "中文类型",
        "h2dtscpp_convert_combo_0017_variant class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "中文类型",
        "h2dtscpp_convert_combo_0017_variant class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_VARIANT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_VARIANT
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_variant', () => {
    try {
      const parsed = doParseTs('h2cpp367.ts', `function h2cpp367(p: 中文类型): 中文类型 { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp367');
      assert.strictEqual(converted.funcs[0].returns, "中文类型",
        "h2dtscpp_convert_combo_0018_variant parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型",
        "h2dtscpp_convert_combo_0018_variant parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp367.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp367') || generated.napiCppContent.includes('h2cpp367')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp367'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_VARIANT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_VARIANT
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type 中文类型;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_variant', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn367', returns: '中文类型',
          parameters: [{ type: '中文类型', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias367', alias: '中文类型', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias367');
      assert.strictEqual(converted.types[0].alias, '中文类型');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn367');
      assert.strictEqual(converted.funcs[0].returns, "中文类型",
        "h2dtscpp_convert_combo_0019_variant type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型",
        "h2dtscpp_convert_combo_0019_variant type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample367_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn367') || generated.napiCppContent.includes('typeFn367')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn367'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_ELEMENT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_ELEMENT
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Element; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_element', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass369', alias: '',
          variableList: [{ type: 'Element', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass369');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Element",
        "h2dtscpp_convert_combo_0020_element class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_ELEMENT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_ELEMENT
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Element; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_element', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun369', returns: 'Element',
          parameters: [{ type: 'Element', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun369');
      assert.strictEqual(converted.funcs[0].returns, "Element",
        "h2dtscpp_convert_combo_0021_element global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Element",
        "h2dtscpp_convert_combo_0021_element global param type convert convert output");
      const generated = generateFunctions(converted, 'sample369_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun369') || generated.napiCppContent.includes('globalRun369')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun369'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_ELEMENT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_ELEMENT
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Element; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_element', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass369', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Element',
            parameters: [{ type: 'Element', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Element",
        "h2dtscpp_convert_combo_0022_element class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Element",
        "h2dtscpp_convert_combo_0022_element class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_ELEMENT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_ELEMENT
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Element;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_element', () => {
    try {
      const parsed = doParseTs('h2cpp369.ts', `function h2cpp369(p: Element): Element { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp369');
      assert.strictEqual(converted.funcs[0].returns, "Element",
        "h2dtscpp_convert_combo_0023_element parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Element",
        "h2dtscpp_convert_combo_0023_element parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp369.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp369') || generated.napiCppContent.includes('h2cpp369')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp369'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_ELEMENT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_ELEMENT
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Element; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_element', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn369', returns: 'Element',
          parameters: [{ type: 'Element', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias369', alias: 'Element', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias369');
      assert.strictEqual(converted.types[0].alias, 'Element');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn369');
      assert.strictEqual(converted.funcs[0].returns, "Element",
        "h2dtscpp_convert_combo_0024_element type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Element",
        "h2dtscpp_convert_combo_0024_element type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample369_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn369') || generated.napiCppContent.includes('typeFn369')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn369'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_NS_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_NS_BAR
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type ns.Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_ns_bar', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass379', alias: '',
          variableList: [{ type: 'ns.Bar', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass379');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar",
        "h2dtscpp_convert_combo_0025_ns_bar class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_ns_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_NS_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_NS_BAR
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type ns.Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_ns_bar', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun379', returns: 'ns.Bar',
          parameters: [{ type: 'ns.Bar', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun379');
      assert.strictEqual(converted.funcs[0].returns, "ns.Bar",
        "h2dtscpp_convert_combo_0026_ns_bar global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar",
        "h2dtscpp_convert_combo_0026_ns_bar global param type convert convert output");
      const generated = generateFunctions(converted, 'sample379_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun379') || generated.napiCppContent.includes('globalRun379')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun379'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_ns_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_NS_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_NS_BAR
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type ns.Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_ns_bar', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass379', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'ns.Bar',
            parameters: [{ type: 'ns.Bar', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "ns.Bar",
        "h2dtscpp_convert_combo_0027_ns_bar class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "ns.Bar",
        "h2dtscpp_convert_combo_0027_ns_bar class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_ns_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_NS_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_NS_BAR
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type ns.Bar;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_ns_bar', () => {
    try {
      const parsed = doParseTs('h2cpp379.ts', `function h2cpp379(p: ns.Bar): ns.Bar { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp379');
      assert.strictEqual(converted.funcs[0].returns, "ns.Bar",
        "h2dtscpp_convert_combo_0028_ns_bar parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar",
        "h2dtscpp_convert_combo_0028_ns_bar parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp379.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp379') || generated.napiCppContent.includes('h2cpp379')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp379'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_ns_bar execution error: ${err}`);
    }
  });
});
