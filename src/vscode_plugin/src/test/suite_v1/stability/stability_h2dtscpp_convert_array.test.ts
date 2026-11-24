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

suite('Stability_H2DTSCPP_CONVERT_ARRAY', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0001
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0001
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type Array<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass5', alias: '',
          variableList: [{ type: 'Array<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0002
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0002
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type Array<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun5', returns: 'Array<number>',
          parameters: [{ type: 'Array<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun5');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample5_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun5') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0003
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0003
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type Array<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass5', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<number>',
            parameters: [{ type: 'Array<number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0004
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0004
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type Array<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0004', () => {
    try {
      const parsed = doParseTs('h2cpp5.ts', `function h2cpp5(p: Array<number>): Array<number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp5.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp5') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0005
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0005
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            Array<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn5', returns: 'Array<number>',
          parameters: [{ type: 'Array<number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias5', alias: 'Array<number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias5');
      assert.strictEqual(converted.types[0].alias, 'Array<number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn5');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample5_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn5') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0006
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0006
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type number[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass6', alias: '',
          variableList: [{ type: 'number[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0006 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0007
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0007
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type number[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun6', returns: 'number[]',
          parameters: [{ type: 'number[]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun6');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample6_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun6') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0007 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0008
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0008
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type number[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass6', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number[]',
            parameters: [{ type: 'number[]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0008 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0009
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0009
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type number[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0009', () => {
    try {
      const parsed = doParseTs('h2cpp6.ts', `function h2cpp6(p: number[]): number[] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp6.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp6') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0009 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0010
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0010
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            number[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn6', returns: 'number[]',
          parameters: [{ type: 'number[]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias6', alias: 'number[]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias6');
      assert.strictEqual(converted.types[0].alias, 'number[]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn6');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "h2dtscpp_convert_array_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "h2dtscpp_convert_array_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample6_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn6') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0010 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0011
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0011
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type Array<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass7', alias: '',
          variableList: [{ type: 'Array<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0011 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0012
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0012
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type Array<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun7', returns: 'Array<string>',
          parameters: [{ type: 'Array<string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun7');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample7_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun7') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0012 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0013
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0013
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type Array<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass7', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<string>',
            parameters: [{ type: 'Array<string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0013 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0014
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0014
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type Array<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0014', () => {
    try {
      const parsed = doParseTs('h2cpp7.ts', `function h2cpp7(p: Array<string>): Array<string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp7.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp7') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0014 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0015
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0015
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            Array<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn7', returns: 'Array<string>',
          parameters: [{ type: 'Array<string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias7', alias: 'Array<string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias7');
      assert.strictEqual(converted.types[0].alias, 'Array<string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn7');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample7_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn7') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0015 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0016
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0016
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type string[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass8', alias: '',
          variableList: [{ type: 'string[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0016 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0017
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0017
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type string[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun8', returns: 'string[]',
          parameters: [{ type: 'string[]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun8');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample8_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun8') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0017 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0018
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0018
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type string[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass8', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string[]',
            parameters: [{ type: 'string[]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0018 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0019
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0019
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type string[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0019', () => {
    try {
      const parsed = doParseTs('h2cpp8.ts', `function h2cpp8(p: string[]): string[] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp8.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp8') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0019 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0020
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0020
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            string[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn8', returns: 'string[]',
          parameters: [{ type: 'string[]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias8', alias: 'string[]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias8');
      assert.strictEqual(converted.types[0].alias, 'string[]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn8');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "h2dtscpp_convert_array_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "h2dtscpp_convert_array_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample8_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn8') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0020 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0021
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0021
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type Array<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass9', alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0021 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0022
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0022
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type Array<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun9', returns: 'Array<boolean>',
          parameters: [{ type: 'Array<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun9');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample9_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun9') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0022 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0023
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0023
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type Array<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass9', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<boolean>',
            parameters: [{ type: 'Array<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0023 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0024
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0024
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type Array<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0024', () => {
    try {
      const parsed = doParseTs('h2cpp9.ts', `function h2cpp9(p: Array<boolean>): Array<boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp9.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp9') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0024 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0025
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0025
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            Array<boolean>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn9', returns: 'Array<boolean>',
          parameters: [{ type: 'Array<boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias9', alias: 'Array<boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias9');
      assert.strictEqual(converted.types[0].alias, 'Array<boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn9');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample9_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn9') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0025 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0026
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0026
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type boolean[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass10', alias: '',
          variableList: [{ type: 'boolean[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0026 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0026 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0027
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0027
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type boolean[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun10', returns: 'boolean[]',
          parameters: [{ type: 'boolean[]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun10');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0027 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0027 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample10_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun10') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0027 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0028
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0028
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type boolean[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass10', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean[]',
            parameters: [{ type: 'boolean[]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0028 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0028 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0028 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0029
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0029
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type boolean[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0029', () => {
    try {
      const parsed = doParseTs('h2cpp10.ts', `function h2cpp10(p: boolean[]): boolean[] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0029 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0029 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp10.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp10') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0029 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0030
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0030
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            boolean[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn10', returns: 'boolean[]',
          parameters: [{ type: 'boolean[]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias10', alias: 'boolean[]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias10');
      assert.strictEqual(converted.types[0].alias, 'boolean[]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn10');
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "h2dtscpp_convert_array_0030 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "h2dtscpp_convert_array_0030 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample10_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn10') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0030 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0031
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0031
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type any[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass59', alias: '',
          variableList: [{ type: 'any[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "any[]",
        "h2dtscpp_convert_array_0031 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0031 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0032
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0032
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type any[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun59', returns: 'any[]',
          parameters: [{ type: 'any[]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun59');
      assert.strictEqual(converted.funcs[0].returns, "any[]",
        "h2dtscpp_convert_array_0032 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
        "h2dtscpp_convert_array_0032 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample59_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun59') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0032 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0033
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0033
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type any[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass59', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'any[]',
            parameters: [{ type: 'any[]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "any[]",
        "h2dtscpp_convert_array_0033 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "any[]",
        "h2dtscpp_convert_array_0033 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0033 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0034
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0034
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type any[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0034', () => {
    try {
      const parsed = doParseTs('h2cpp59.ts', `function h2cpp59(p: any[]): any[] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "any[]",
        "h2dtscpp_convert_array_0034 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
        "h2dtscpp_convert_array_0034 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp59.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp59') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0034 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0035
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0035
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            any[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn59', returns: 'any[]',
          parameters: [{ type: 'any[]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias59', alias: 'any[]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias59');
      assert.strictEqual(converted.types[0].alias, 'any[]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn59');
      assert.strictEqual(converted.funcs[0].returns, "any[]",
        "h2dtscpp_convert_array_0035 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
        "h2dtscpp_convert_array_0035 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample59_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn59') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0035 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0036
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0036
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type object[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass60', alias: '',
          variableList: [{ type: 'object[]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
        "h2dtscpp_convert_array_0036 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0036 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0037
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0037
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type object[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun60', returns: 'object[]',
          parameters: [{ type: 'object[]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun60');
      assert.strictEqual(converted.funcs[0].returns, "object[]",
        "h2dtscpp_convert_array_0037 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
        "h2dtscpp_convert_array_0037 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample60_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun60') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0037 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0038
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0038
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type object[]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass60', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'object[]',
            parameters: [{ type: 'object[]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "object[]",
        "h2dtscpp_convert_array_0038 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "object[]",
        "h2dtscpp_convert_array_0038 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0038 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0039
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0039
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type object[];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0039', () => {
    try {
      const parsed = doParseTs('h2cpp60.ts', `function h2cpp60(p: object[]): object[] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "object[]",
        "h2dtscpp_convert_array_0039 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
        "h2dtscpp_convert_array_0039 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp60.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp60') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0039 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0040
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0040
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            object[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn60', returns: 'object[]',
          parameters: [{ type: 'object[]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias60', alias: 'object[]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias60');
      assert.strictEqual(converted.types[0].alias, 'object[]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn60');
      assert.strictEqual(converted.funcs[0].returns, "object[]",
        "h2dtscpp_convert_array_0040 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
        "h2dtscpp_convert_array_0040 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample60_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn60') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0040 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0041
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0041
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type Array<any>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass61', alias: '',
          variableList: [{ type: 'Array<any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
        "h2dtscpp_convert_array_0041 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0041 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0042
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0042
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type Array<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun61', returns: 'Array<any>',
          parameters: [{ type: 'Array<any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun61');
      assert.strictEqual(converted.funcs[0].returns, "Array<any>",
        "h2dtscpp_convert_array_0042 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>",
        "h2dtscpp_convert_array_0042 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample61_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun61') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0042 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0043
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0043
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type Array<any>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass61', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<any>',
            parameters: [{ type: 'Array<any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Array<any>",
        "h2dtscpp_convert_array_0043 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Array<any>",
        "h2dtscpp_convert_array_0043 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0043 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0044
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0044
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type Array<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0044', () => {
    try {
      const parsed = doParseTs('h2cpp61.ts', `function h2cpp61(p: Array<any>): Array<any> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Array<any>",
        "h2dtscpp_convert_array_0044 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>",
        "h2dtscpp_convert_array_0044 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp61.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp61') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0044 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0045
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0045
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            Array<any>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn61', returns: 'Array<any>',
          parameters: [{ type: 'Array<any>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias61', alias: 'Array<any>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias61');
      assert.strictEqual(converted.types[0].alias, 'Array<any>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn61');
      assert.strictEqual(converted.funcs[0].returns, "Array<any>",
        "h2dtscpp_convert_array_0045 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>",
        "h2dtscpp_convert_array_0045 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample61_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn61') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0046
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0046
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type Array<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass62', alias: '',
          variableList: [{ type: 'Array<object>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
        "h2dtscpp_convert_array_0046 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0047
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0047
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type Array<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun62', returns: 'Array<object>',
          parameters: [{ type: 'Array<object>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun62');
      assert.strictEqual(converted.funcs[0].returns, "Array<object>",
        "h2dtscpp_convert_array_0047 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<object>",
        "h2dtscpp_convert_array_0047 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample62_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun62') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0048
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0048
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type Array<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass62', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Array<object>',
            parameters: [{ type: 'Array<object>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Array<object>",
        "h2dtscpp_convert_array_0048 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Array<object>",
        "h2dtscpp_convert_array_0048 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0049
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0049
   * @tc.desc   Stability convert h2dtscpp/array: parse-convert-gen pipeline; type Array<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0049', () => {
    try {
      const parsed = doParseTs('h2cpp62.ts', `function h2cpp62(p: Array<object>): Array<object> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Array<object>",
        "h2dtscpp_convert_array_0049 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<object>",
        "h2dtscpp_convert_array_0049 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp62.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp62') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0050
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0050
   * @tc.desc   Stability convert h2dtscpp/array: type-alias and global-function convert; type
   *            Array<object>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn62', returns: 'Array<object>',
          parameters: [{ type: 'Array<object>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias62', alias: 'Array<object>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias62');
      assert.strictEqual(converted.types[0].alias, 'Array<object>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn62');
      assert.strictEqual(converted.funcs[0].returns, "Array<object>",
        "h2dtscpp_convert_array_0050 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<object>",
        "h2dtscpp_convert_array_0050 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample62_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn62') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0051
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0051
   * @tc.desc   Stability convert h2dtscpp/array: class-field convert; type ReadonlyArray<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass78', alias: '',
          variableList: [{ type: 'ReadonlyArray<any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
        "h2dtscpp_convert_array_0051 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0052
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0052
   * @tc.desc   Stability convert h2dtscpp/array: global-function convert; type ReadonlyArray<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun78', returns: 'ReadonlyArray<any>',
          parameters: [{ type: 'ReadonlyArray<any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun78');
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<any>",
        "h2dtscpp_convert_array_0052 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<any>",
        "h2dtscpp_convert_array_0052 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample78_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun78') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0053
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_ARRAY_0053
   * @tc.desc   Stability convert h2dtscpp/array: class-method convert; type ReadonlyArray<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_array_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass78', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'ReadonlyArray<any>',
            parameters: [{ type: 'ReadonlyArray<any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "ReadonlyArray<any>",
        "h2dtscpp_convert_array_0053 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "ReadonlyArray<any>",
        "h2dtscpp_convert_array_0053 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_array_0053 execution error: ${String(err)}`);
    }
  });
});
