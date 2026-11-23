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

suite('Stability_H2DTSCPP_CONVERT_UNION_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_UNION_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0032_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0032_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type { x:
   *            number } | { y: string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0032_x_number_y_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn228', returns: '{ x: number } | { y: string }',
          parameters: [{ type: '{ x: number } | { y: string }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias228', alias: '{ x: number } | { y: string }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias228');
      assert.strictEqual(converted.types[0].alias, '{ x: number } | { y: string }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn228');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number } | { y: string }",
        "h2dtscpp_convert_union_0032_x_number_y_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number } | { y: string }",
        "h2dtscpp_convert_union_0032_x_number_y_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample228_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn228') || generated.napiCppContent.includes('typeFn228')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn228'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0032_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0033_YES_NO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0033_YES_NO
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type "yes" | "no";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0033_yes_no', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass229', alias: '',
          variableList: [{ type: '"yes" | "no"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass229');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0033_yes_no class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0033_yes_no execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0034_YES_NO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0034_YES_NO
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type "yes" | "no";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0034_yes_no', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun229', returns: '"yes" | "no"',
          parameters: [{ type: '"yes" | "no"', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun229');
      assert.strictEqual(converted.funcs[0].returns, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0034_yes_no global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0034_yes_no global param type convert convert output");
      const generated = generateFunctions(converted, 'sample229_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun229') || generated.napiCppContent.includes('globalRun229')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun229'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0034_yes_no execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0035_YES_NO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0035_YES_NO
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type "yes" | "no";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0035_yes_no', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass229', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '"yes" | "no"',
            parameters: [{ type: '"yes" | "no"', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0035_yes_no class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0035_yes_no class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0035_yes_no execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0036_YES_NO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0036_YES_NO
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type "yes" | "no";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0036_yes_no', () => {
    try {
      const parsed = doParseTs('h2cpp229.ts', `function h2cpp229(p: "yes" | "no"): "yes" | "no" { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp229');
      assert.strictEqual(converted.funcs[0].returns, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0036_yes_no parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0036_yes_no parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp229.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp229') || generated.napiCppContent.includes('h2cpp229')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp229'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0036_yes_no execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0037_YES_NO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0037_YES_NO
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type "yes"
   *            | "no"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0037_yes_no', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn229', returns: '"yes" | "no"',
          parameters: [{ type: '"yes" | "no"', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias229', alias: '"yes" | "no"', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias229');
      assert.strictEqual(converted.types[0].alias, '"yes" | "no"');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn229');
      assert.strictEqual(converted.funcs[0].returns, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0037_yes_no type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"yes\" | \"no\"",
        "h2dtscpp_convert_union_0037_yes_no type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample229_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn229') || generated.napiCppContent.includes('typeFn229')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn229'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0037_yes_no execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0038_ON_OFF
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0038_ON_OFF
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type "on" | "off";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0038_on_off', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass230', alias: '',
          variableList: [{ type: '"on" | "off"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass230');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0038_on_off class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0038_on_off execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0039_ON_OFF
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0039_ON_OFF
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type "on" | "off";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0039_on_off', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun230', returns: '"on" | "off"',
          parameters: [{ type: '"on" | "off"', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun230');
      assert.strictEqual(converted.funcs[0].returns, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0039_on_off global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0039_on_off global param type convert convert output");
      const generated = generateFunctions(converted, 'sample230_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun230') || generated.napiCppContent.includes('globalRun230')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun230'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0039_on_off execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0040_ON_OFF
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0040_ON_OFF
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type "on" | "off";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0040_on_off', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass230', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '"on" | "off"',
            parameters: [{ type: '"on" | "off"', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0040_on_off class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0040_on_off class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0040_on_off execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0041_ON_OFF
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0041_ON_OFF
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type "on" | "off";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0041_on_off', () => {
    try {
      const parsed = doParseTs('h2cpp230.ts', `function h2cpp230(p: "on" | "off"): "on" | "off" { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp230');
      assert.strictEqual(converted.funcs[0].returns, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0041_on_off parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0041_on_off parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp230.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp230') || generated.napiCppContent.includes('h2cpp230')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp230'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0041_on_off execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0042_ON_OFF
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0042_ON_OFF
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type "on"
   *            | "off"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0042_on_off', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn230', returns: '"on" | "off"',
          parameters: [{ type: '"on" | "off"', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias230', alias: '"on" | "off"', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias230');
      assert.strictEqual(converted.types[0].alias, '"on" | "off"');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn230');
      assert.strictEqual(converted.funcs[0].returns, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0042_on_off type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"on\" | \"off\"",
        "h2dtscpp_convert_union_0042_on_off type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample230_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn230') || generated.napiCppContent.includes('typeFn230')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn230'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0042_on_off execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0043_3_4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0043_3_4
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type 3 | 4; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0043_3_4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass231', alias: '',
          variableList: [{ type: '3 | 4', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass231');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "3 | 4",
        "h2dtscpp_convert_union_0043_3_4 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0043_3_4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0044_3_4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0044_3_4
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type 3 | 4; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0044_3_4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun231', returns: '3 | 4',
          parameters: [{ type: '3 | 4', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun231');
      assert.strictEqual(converted.funcs[0].returns, "3 | 4",
        "h2dtscpp_convert_union_0044_3_4 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "3 | 4",
        "h2dtscpp_convert_union_0044_3_4 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample231_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun231') || generated.napiCppContent.includes('globalRun231')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun231'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0044_3_4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0045_3_4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0045_3_4
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type 3 | 4; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0045_3_4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass231', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '3 | 4',
            parameters: [{ type: '3 | 4', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "3 | 4",
        "h2dtscpp_convert_union_0045_3_4 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "3 | 4",
        "h2dtscpp_convert_union_0045_3_4 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0045_3_4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0046_3_4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0046_3_4
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type 3 | 4;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0046_3_4', () => {
    try {
      const parsed = doParseTs('h2cpp231.ts', `function h2cpp231(p: 3 | 4): 3 | 4 { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp231');
      assert.strictEqual(converted.funcs[0].returns, "3 | 4",
        "h2dtscpp_convert_union_0046_3_4 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "3 | 4",
        "h2dtscpp_convert_union_0046_3_4 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp231.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp231') || generated.napiCppContent.includes('h2cpp231')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp231'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0046_3_4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0047_3_4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0047_3_4
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type 3 |
   *            4; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0047_3_4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn231', returns: '3 | 4',
          parameters: [{ type: '3 | 4', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias231', alias: '3 | 4', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias231');
      assert.strictEqual(converted.types[0].alias, '3 | 4');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn231');
      assert.strictEqual(converted.funcs[0].returns, "3 | 4",
        "h2dtscpp_convert_union_0047_3_4 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "3 | 4",
        "h2dtscpp_convert_union_0047_3_4 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample231_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn231') || generated.napiCppContent.includes('typeFn231')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn231'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0047_3_4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0048_1_2
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0048_1_2
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type 1 | 2; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0048_1_2', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass232', alias: '',
          variableList: [{ type: '1 | 2', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass232');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "1 | 2",
        "h2dtscpp_convert_union_0048_1_2 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0048_1_2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0049_1_2
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0049_1_2
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type 1 | 2; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0049_1_2', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun232', returns: '1 | 2',
          parameters: [{ type: '1 | 2', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun232');
      assert.strictEqual(converted.funcs[0].returns, "1 | 2",
        "h2dtscpp_convert_union_0049_1_2 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "1 | 2",
        "h2dtscpp_convert_union_0049_1_2 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample232_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun232') || generated.napiCppContent.includes('globalRun232')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun232'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0049_1_2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0050_1_2
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0050_1_2
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type 1 | 2; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0050_1_2', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass232', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '1 | 2',
            parameters: [{ type: '1 | 2', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "1 | 2",
        "h2dtscpp_convert_union_0050_1_2 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "1 | 2",
        "h2dtscpp_convert_union_0050_1_2 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0050_1_2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0051_1_2
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0051_1_2
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type 1 | 2;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0051_1_2', () => {
    try {
      const parsed = doParseTs('h2cpp232.ts', `function h2cpp232(p: 1 | 2): 1 | 2 { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp232');
      assert.strictEqual(converted.funcs[0].returns, "1 | 2",
        "h2dtscpp_convert_union_0051_1_2 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "1 | 2",
        "h2dtscpp_convert_union_0051_1_2 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp232.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp232') || generated.napiCppContent.includes('h2cpp232')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp232'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0051_1_2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0052_1_2
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0052_1_2
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type 1 |
   *            2; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0052_1_2', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn232', returns: '1 | 2',
          parameters: [{ type: '1 | 2', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias232', alias: '1 | 2', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias232');
      assert.strictEqual(converted.types[0].alias, '1 | 2');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn232');
      assert.strictEqual(converted.funcs[0].returns, "1 | 2",
        "h2dtscpp_convert_union_0052_1_2 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "1 | 2",
        "h2dtscpp_convert_union_0052_1_2 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample232_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn232') || generated.napiCppContent.includes('typeFn232')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn232'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0052_1_2 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0053_CIRCLE_SQUARE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0053_CIRCLE_SQUARE
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type "circle" | "square";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0053_circle_square', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass233', alias: '',
          variableList: [{ type: '"circle" | "square"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass233');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"circle\" | \"square\"",
        "h2dtscpp_convert_union_0053_circle_square class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0053_circle_square execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0031_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0031_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0031_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun327', returns: 'string | number | boolean',
          parameters: [{ type: 'string | number | boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun327');
      assert.strictEqual(converted.funcs[0].returns, "string | number | boolean",
        "h2dtscpp_convert_union_0031_string_number_boolean global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number | boolean",
        "h2dtscpp_convert_union_0031_string_number_boolean global param type convert convert output");
      const generated = generateFunctions(converted, 'sample327_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun327') || generated.napiCppContent.includes('globalRun327')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun327'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0031_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0032_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0032_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0032_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass327', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | number | boolean',
            parameters: [{ type: 'string | number | boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | number | boolean",
        "h2dtscpp_convert_union_0032_string_number_boolean class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | number | boolean",
        "h2dtscpp_convert_union_0032_string_number_boolean class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0032_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0033_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0033_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0033_string_number_boolean', () => {
    try {
      const parsed = doParseTs('h2cpp327.ts', `
        function h2cpp327(p: string | number | boolean): string | number | boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp327');
      assert.strictEqual(converted.funcs[0].returns, "string | number | boolean",
        "h2dtscpp_convert_union_0033_string_number_boolean parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number | boolean",
        "h2dtscpp_convert_union_0033_string_number_boolean parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp327.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp327') || generated.napiCppContent.includes('h2cpp327')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp327'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0033_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0034_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0034_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | number | boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0034_string_number_boolean', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn327', returns: 'string | number | boolean',
          parameters: [{ type: 'string | number | boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias327', alias: 'string | number | boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias327');
      assert.strictEqual(converted.types[0].alias, 'string | number | boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn327');
      assert.strictEqual(converted.funcs[0].returns, "string | number | boolean",
        "h2dtscpp_convert_union_0034_string_number_boolean type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number | boolean",
        "h2dtscpp_convert_union_0034_string_number_boolean type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample327_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn327') || generated.napiCppContent.includes('typeFn327')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn327'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0034_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0035_OK_ERR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0035_OK_ERR
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0035_ok_err', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass332', alias: '',
          variableList: [{ type: '"ok" | "err"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass332');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0035_ok_err class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0035_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0036_OK_ERR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0036_OK_ERR
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0036_ok_err', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun332', returns: '"ok" | "err"',
          parameters: [{ type: '"ok" | "err"', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun332');
      assert.strictEqual(converted.funcs[0].returns, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0036_ok_err global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0036_ok_err global param type convert convert output");
      const generated = generateFunctions(converted, 'sample332_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun332') || generated.napiCppContent.includes('globalRun332')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun332'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0036_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0037_OK_ERR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0037_OK_ERR
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0037_ok_err', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass332', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '"ok" | "err"',
            parameters: [{ type: '"ok" | "err"', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0037_ok_err class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0037_ok_err class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0037_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0038_OK_ERR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0038_OK_ERR
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0038_ok_err', () => {
    try {
      const parsed = doParseTs('h2cpp332.ts', `function h2cpp332(p: "ok" | "err"): "ok" | "err" { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp332');
      assert.strictEqual(converted.funcs[0].returns, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0038_ok_err parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0038_ok_err parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp332.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp332') || generated.napiCppContent.includes('h2cpp332')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp332'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0038_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0039_OK_ERR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0039_OK_ERR
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type "ok"
   *            | "err"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0039_ok_err', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn332', returns: '"ok" | "err"',
          parameters: [{ type: '"ok" | "err"', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias332', alias: '"ok" | "err"', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias332');
      assert.strictEqual(converted.types[0].alias, '"ok" | "err"');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn332');
      assert.strictEqual(converted.funcs[0].returns, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0039_ok_err type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"ok\" | \"err\"",
        "h2dtscpp_convert_union_0039_ok_err type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample332_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn332') || generated.napiCppContent.includes('typeFn332')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn332'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0039_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0040_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0040_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0040_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass335', alias: '',
          variableList: [{ type: 'string | string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass335');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | string",
        "h2dtscpp_convert_union_0040_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0040_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0041_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0041_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0041_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun335', returns: 'string | string',
          parameters: [{ type: 'string | string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun335');
      assert.strictEqual(converted.funcs[0].returns, "string | string",
        "h2dtscpp_convert_union_0041_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string",
        "h2dtscpp_convert_union_0041_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample335_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun335') || generated.napiCppContent.includes('globalRun335')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun335'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0041_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0042_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0042_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0042_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass335', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | string',
            parameters: [{ type: 'string | string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | string",
        "h2dtscpp_convert_union_0042_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | string",
        "h2dtscpp_convert_union_0042_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0042_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0043_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0043_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0043_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp335.ts', `function h2cpp335(p: string | string): string | string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp335');
      assert.strictEqual(converted.funcs[0].returns, "string | string",
        "h2dtscpp_convert_union_0043_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string",
        "h2dtscpp_convert_union_0043_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp335.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp335') || generated.napiCppContent.includes('h2cpp335')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp335'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0043_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0044_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0044_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0044_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn335', returns: 'string | string',
          parameters: [{ type: 'string | string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias335', alias: 'string | string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias335');
      assert.strictEqual(converted.types[0].alias, 'string | string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn335');
      assert.strictEqual(converted.funcs[0].returns, "string | string",
        "h2dtscpp_convert_union_0044_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string",
        "h2dtscpp_convert_union_0044_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample335_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn335') || generated.napiCppContent.includes('typeFn335')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn335'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0044_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0045_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0045_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0045_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass336', alias: '',
          variableList: [{ type: 'string | any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass336');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | any",
        "h2dtscpp_convert_union_0045_string_any class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0045_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0046_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0046_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0046_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun336', returns: 'string | any',
          parameters: [{ type: 'string | any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun336');
      assert.strictEqual(converted.funcs[0].returns, "string | any",
        "h2dtscpp_convert_union_0046_string_any global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | any",
        "h2dtscpp_convert_union_0046_string_any global param type convert convert output");
      const generated = generateFunctions(converted, 'sample336_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun336') || generated.napiCppContent.includes('globalRun336')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun336'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0046_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0047_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0047_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0047_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass336', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | any',
            parameters: [{ type: 'string | any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | any",
        "h2dtscpp_convert_union_0047_string_any class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | any",
        "h2dtscpp_convert_union_0047_string_any class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0047_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0048_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0048_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0048_string_any', () => {
    try {
      const parsed = doParseTs('h2cpp336.ts', `function h2cpp336(p: string | any): string | any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp336');
      assert.strictEqual(converted.funcs[0].returns, "string | any",
        "h2dtscpp_convert_union_0048_string_any parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | any",
        "h2dtscpp_convert_union_0048_string_any parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp336.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp336') || generated.napiCppContent.includes('h2cpp336')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp336'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0048_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0049_STRING_ANY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0049_STRING_ANY
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0049_string_any', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn336', returns: 'string | any',
          parameters: [{ type: 'string | any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias336', alias: 'string | any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias336');
      assert.strictEqual(converted.types[0].alias, 'string | any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn336');
      assert.strictEqual(converted.funcs[0].returns, "string | any",
        "h2dtscpp_convert_union_0049_string_any type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | any",
        "h2dtscpp_convert_union_0049_string_any type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample336_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn336') || generated.napiCppContent.includes('typeFn336')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn336'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0049_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0050_STRING_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0050_STRING_UNKNOWN
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type string | unknown;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0050_string_unknown', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass337', alias: '',
          variableList: [{ type: 'string | unknown', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass337');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | unknown",
        "h2dtscpp_convert_union_0050_string_unknown class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0050_string_unknown execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0051_STRING_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0051_STRING_UNKNOWN
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string | unknown;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0051_string_unknown', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun337', returns: 'string | unknown',
          parameters: [{ type: 'string | unknown', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun337');
      assert.strictEqual(converted.funcs[0].returns, "string | unknown",
        "h2dtscpp_convert_union_0051_string_unknown global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | unknown",
        "h2dtscpp_convert_union_0051_string_unknown global param type convert convert output");
      const generated = generateFunctions(converted, 'sample337_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun337') || generated.napiCppContent.includes('globalRun337')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun337'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0051_string_unknown execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0052_STRING_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0052_STRING_UNKNOWN
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string | unknown;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0052_string_unknown', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass337', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | unknown',
            parameters: [{ type: 'string | unknown', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | unknown",
        "h2dtscpp_convert_union_0052_string_unknown class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | unknown",
        "h2dtscpp_convert_union_0052_string_unknown class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0052_string_unknown execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0053_STRING_UNKNOWN
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0053_STRING_UNKNOWN
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string | unknown;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0053_string_unknown', () => {
    try {
      const parsed = doParseTs('h2cpp337.ts', `function h2cpp337(p: string | unknown): string | unknown { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp337');
      assert.strictEqual(converted.funcs[0].returns, "string | unknown",
        "h2dtscpp_convert_union_0053_string_unknown parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | unknown",
        "h2dtscpp_convert_union_0053_string_unknown parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp337.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp337') || generated.napiCppContent.includes('h2cpp337')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp337'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0053_string_unknown execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0031_STRING_SET_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0031_STRING_SET_NUMBER
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | Set<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0031_string_set_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn355', returns: 'string | Set<number>',
          parameters: [{ type: 'string | Set<number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias355', alias: 'string | Set<number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias355');
      assert.strictEqual(converted.types[0].alias, 'string | Set<number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn355');
      assert.strictEqual(converted.funcs[0].returns, "string | Set<number>",
        "h2dtscpp_convert_union_0031_string_set_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Set<number>",
        "h2dtscpp_convert_union_0031_string_set_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample355_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn355') || generated.napiCppContent.includes('typeFn355')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn355'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0031_string_set_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0032_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0032_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type string | Record<string,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0032_string_record_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass357', alias: '',
          variableList: [{ type: 'string | Record<string, string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass357');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | Record<string, string>",
        "h2dtscpp_convert_union_0032_string_record_string_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0032_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0033_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0033_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string |
   *            Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0033_string_record_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun357', returns: 'string | Record<string, string>',
          parameters: [{ type: 'string | Record<string, string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun357');
      assert.strictEqual(converted.funcs[0].returns, "string | Record<string, string>",
        "h2dtscpp_convert_union_0033_string_record_string_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Record<string, string>",
        "h2dtscpp_convert_union_0033_string_record_string_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample357_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun357') || generated.napiCppContent.includes('globalRun357')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun357'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0033_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0034_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0034_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string | Record<string,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0034_string_record_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass357', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | Record<string, string>',
            parameters: [{ type: 'string | Record<string, string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | Record<string, string>",
        "h2dtscpp_convert_union_0034_string_record_string_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | Record<string, string>",
        "h2dtscpp_convert_union_0034_string_record_string_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0034_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0035_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0035_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string |
   *            Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0035_string_record_string_string', () => {
    try {
      const parsed = doParseTs('h2cpp357.ts', `
        function h2cpp357(p: string | Record<string, string>): string | Record<string, string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp357');
      assert.strictEqual(converted.funcs[0].returns, "string | Record<string, string>",
        "h2dtscpp_convert_union_0035_string_record_string_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Record<string, string>",
        "h2dtscpp_convert_union_0035_string_record_string_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp357.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp357') || generated.napiCppContent.includes('h2cpp357')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp357'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0035_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0036_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0036_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0036_string_record_string_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn357', returns: 'string | Record<string, string>',
          parameters: [{ type: 'string | Record<string, string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias357', alias: 'string | Record<string, string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias357');
      assert.strictEqual(converted.types[0].alias, 'string | Record<string, string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn357');
      assert.strictEqual(converted.funcs[0].returns, "string | Record<string, string>",
        "h2dtscpp_convert_union_0036_string_record_string_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Record<string, string>",
        "h2dtscpp_convert_union_0036_string_record_string_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample357_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn357') || generated.napiCppContent.includes('typeFn357')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn357'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0036_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0037_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0037_STRING_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0037_string_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass359', alias: '',
          variableList: [{ type: 'string | Promise<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass359');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | Promise<string>",
        "h2dtscpp_convert_union_0037_string_promise_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0037_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0038_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0038_STRING_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0038_string_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun359', returns: 'string | Promise<string>',
          parameters: [{ type: 'string | Promise<string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun359');
      assert.strictEqual(converted.funcs[0].returns, "string | Promise<string>",
        "h2dtscpp_convert_union_0038_string_promise_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Promise<string>",
        "h2dtscpp_convert_union_0038_string_promise_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample359_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun359') || generated.napiCppContent.includes('globalRun359')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun359'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0038_string_promise_string execution error: ${err}`);
    }
  });
});
