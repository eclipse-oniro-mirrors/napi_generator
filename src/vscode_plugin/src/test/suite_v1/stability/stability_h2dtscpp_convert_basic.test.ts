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

suite('Stability_H2DTSCPP_CONVERT_BASIC', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_BASIC_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0001
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0001
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass1', alias: '',
          variableList: [{ type: 'number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "h2dtscpp_convert_basic_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0002
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0002
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun1', returns: 'number',
          parameters: [{ type: 'number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun1');
      assert.strictEqual(converted.funcs[0].returns, "double",
        "h2dtscpp_convert_basic_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "h2dtscpp_convert_basic_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample1_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun1') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0003
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0003
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass1', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number',
            parameters: [{ type: 'number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "double",
        "h2dtscpp_convert_basic_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "double",
        "h2dtscpp_convert_basic_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0004
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0004
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0004', () => {
    try {
      const parsed = doParseTs('h2cpp1.ts', `function h2cpp1(p: number): number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "double",
        "h2dtscpp_convert_basic_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "h2dtscpp_convert_basic_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp1.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp1') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0005
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0005
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn1', returns: 'number',
          parameters: [{ type: 'number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias1', alias: 'number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias1');
      assert.strictEqual(converted.types[0].alias, 'number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn1');
      assert.strictEqual(converted.funcs[0].returns, "double",
        "h2dtscpp_convert_basic_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "h2dtscpp_convert_basic_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample1_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn1') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0006
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0006
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type string; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass2', alias: '',
          variableList: [{ type: 'string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "h2dtscpp_convert_basic_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0006 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0007
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0007
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type string; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun2', returns: 'string',
          parameters: [{ type: 'string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun2');
      assert.strictEqual(converted.funcs[0].returns, "std::string",
        "h2dtscpp_convert_basic_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "h2dtscpp_convert_basic_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample2_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun2') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0007 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0008
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0008
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type string; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass2', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string',
            parameters: [{ type: 'string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::string",
        "h2dtscpp_convert_basic_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::string",
        "h2dtscpp_convert_basic_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0008 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0009
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0009
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0009', () => {
    try {
      const parsed = doParseTs('h2cpp2.ts', `function h2cpp2(p: string): string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::string",
        "h2dtscpp_convert_basic_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "h2dtscpp_convert_basic_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp2.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp2') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0009 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0010
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0010
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn2', returns: 'string',
          parameters: [{ type: 'string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias2', alias: 'string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias2');
      assert.strictEqual(converted.types[0].alias, 'string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn2');
      assert.strictEqual(converted.funcs[0].returns, "std::string",
        "h2dtscpp_convert_basic_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "h2dtscpp_convert_basic_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample2_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn2') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0010 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0011
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0011
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type boolean; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass3', alias: '',
          variableList: [{ type: 'boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "h2dtscpp_convert_basic_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0011 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0012
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0012
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type boolean; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun3', returns: 'boolean',
          parameters: [{ type: 'boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun3');
      assert.strictEqual(converted.funcs[0].returns, "bool",
        "h2dtscpp_convert_basic_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "h2dtscpp_convert_basic_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample3_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun3') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0012 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0013
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0013
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type boolean; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass3', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'boolean',
            parameters: [{ type: 'boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "bool",
        "h2dtscpp_convert_basic_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "bool",
        "h2dtscpp_convert_basic_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0013 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0014
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0014
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0014', () => {
    try {
      const parsed = doParseTs('h2cpp3.ts', `function h2cpp3(p: boolean): boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "bool",
        "h2dtscpp_convert_basic_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "h2dtscpp_convert_basic_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp3.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp3') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0014 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0015
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0015
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn3', returns: 'boolean',
          parameters: [{ type: 'boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias3', alias: 'boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias3');
      assert.strictEqual(converted.types[0].alias, 'boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn3');
      assert.strictEqual(converted.funcs[0].returns, "bool",
        "h2dtscpp_convert_basic_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "h2dtscpp_convert_basic_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample3_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn3') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0015 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0016
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0016
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass4', alias: '',
          variableList: [{ type: 'void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "h2dtscpp_convert_basic_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0016 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0017
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0017
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun4', returns: 'void',
          parameters: [{ type: 'void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun4');
      assert.strictEqual(converted.funcs[0].returns, "void",
        "h2dtscpp_convert_basic_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "h2dtscpp_convert_basic_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample4_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun4') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0017 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0018
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0018
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass4', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'void',
            parameters: [{ type: 'void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "void",
        "h2dtscpp_convert_basic_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "void",
        "h2dtscpp_convert_basic_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0018 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0019
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0019
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0019', () => {
    try {
      const parsed = doParseTs('h2cpp4.ts', `function h2cpp4(p: void): void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "void",
        "h2dtscpp_convert_basic_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "h2dtscpp_convert_basic_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp4.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp4') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0019 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0020
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0020
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn4', returns: 'void',
          parameters: [{ type: 'void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias4', alias: 'void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias4');
      assert.strictEqual(converted.types[0].alias, 'void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn4');
      assert.strictEqual(converted.funcs[0].returns, "void",
        "h2dtscpp_convert_basic_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "h2dtscpp_convert_basic_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample4_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn4') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0020 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0021
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0021
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass287', alias: '',
          variableList: [{ type: 'null', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "null",
        "h2dtscpp_convert_basic_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0021 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0022
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0022
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun287', returns: 'null',
          parameters: [{ type: 'null', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun287');
      assert.strictEqual(converted.funcs[0].returns, "null",
        "h2dtscpp_convert_basic_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "null",
        "h2dtscpp_convert_basic_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample287_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun287') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0022 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0023
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0023
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass287', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'null',
            parameters: [{ type: 'null', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "null",
        "h2dtscpp_convert_basic_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "null",
        "h2dtscpp_convert_basic_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0023 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0024
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0024
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0024', () => {
    try {
      const parsed = doParseTs('h2cpp287.ts', `function h2cpp287(p: null): null { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "null",
        "h2dtscpp_convert_basic_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "null",
        "h2dtscpp_convert_basic_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp287.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp287') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0024 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0025
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0025
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn287', returns: 'null',
          parameters: [{ type: 'null', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias287', alias: 'null', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias287');
      assert.strictEqual(converted.types[0].alias, 'null');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn287');
      assert.strictEqual(converted.funcs[0].returns, "null",
        "h2dtscpp_convert_basic_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "null",
        "h2dtscpp_convert_basic_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample287_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn287') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0025 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0026
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0026
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type undefined; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass288', alias: '',
          variableList: [{ type: 'undefined', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "undefined",
        "h2dtscpp_convert_basic_0026 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0026 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0027
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0027
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun288', returns: 'undefined',
          parameters: [{ type: 'undefined', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun288');
      assert.strictEqual(converted.funcs[0].returns, "undefined",
        "h2dtscpp_convert_basic_0027 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "undefined",
        "h2dtscpp_convert_basic_0027 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample288_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun288') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0027 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0028
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0028
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type undefined; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass288', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'undefined',
            parameters: [{ type: 'undefined', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "undefined",
        "h2dtscpp_convert_basic_0028 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "undefined",
        "h2dtscpp_convert_basic_0028 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0028 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0029
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0029
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0029', () => {
    try {
      const parsed = doParseTs('h2cpp288.ts', `function h2cpp288(p: undefined): undefined { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "undefined",
        "h2dtscpp_convert_basic_0029 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "undefined",
        "h2dtscpp_convert_basic_0029 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp288.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp288') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0029 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0030
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0030
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            undefined; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn288', returns: 'undefined',
          parameters: [{ type: 'undefined', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias288', alias: 'undefined', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias288');
      assert.strictEqual(converted.types[0].alias, 'undefined');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn288');
      assert.strictEqual(converted.funcs[0].returns, "undefined",
        "h2dtscpp_convert_basic_0030 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "undefined",
        "h2dtscpp_convert_basic_0030 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample288_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn288') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0030 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0031
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0031
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type symbol; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass289', alias: '',
          variableList: [{ type: 'symbol', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "symbol",
        "h2dtscpp_convert_basic_0031 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0031 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0032
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0032
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type symbol; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun289', returns: 'symbol',
          parameters: [{ type: 'symbol', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun289');
      assert.strictEqual(converted.funcs[0].returns, "symbol",
        "h2dtscpp_convert_basic_0032 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "symbol",
        "h2dtscpp_convert_basic_0032 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample289_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun289') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0032 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0033
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0033
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type symbol; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass289', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'symbol',
            parameters: [{ type: 'symbol', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "symbol",
        "h2dtscpp_convert_basic_0033 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "symbol",
        "h2dtscpp_convert_basic_0033 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0033 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0034
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0034
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type symbol;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0034', () => {
    try {
      const parsed = doParseTs('h2cpp289.ts', `function h2cpp289(p: symbol): symbol { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "symbol",
        "h2dtscpp_convert_basic_0034 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "symbol",
        "h2dtscpp_convert_basic_0034 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp289.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp289') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0034 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0035
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0035
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            symbol; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn289', returns: 'symbol',
          parameters: [{ type: 'symbol', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias289', alias: 'symbol', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias289');
      assert.strictEqual(converted.types[0].alias, 'symbol');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn289');
      assert.strictEqual(converted.funcs[0].returns, "symbol",
        "h2dtscpp_convert_basic_0035 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "symbol",
        "h2dtscpp_convert_basic_0035 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample289_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn289') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0035 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0036
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0036
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type bigint; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass290', alias: '',
          variableList: [{ type: 'bigint', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "bigint",
        "h2dtscpp_convert_basic_0036 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0036 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0037
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0037
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type bigint; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun290', returns: 'bigint',
          parameters: [{ type: 'bigint', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun290');
      assert.strictEqual(converted.funcs[0].returns, "bigint",
        "h2dtscpp_convert_basic_0037 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bigint",
        "h2dtscpp_convert_basic_0037 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample290_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun290') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0037 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0038
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0038
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type bigint; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass290', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'bigint',
            parameters: [{ type: 'bigint', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "bigint",
        "h2dtscpp_convert_basic_0038 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "bigint",
        "h2dtscpp_convert_basic_0038 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0038 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0039
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0039
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type bigint;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0039', () => {
    try {
      const parsed = doParseTs('h2cpp290.ts', `function h2cpp290(p: bigint): bigint { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "bigint",
        "h2dtscpp_convert_basic_0039 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bigint",
        "h2dtscpp_convert_basic_0039 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp290.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp290') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0039 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0040
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0040
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            bigint; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn290', returns: 'bigint',
          parameters: [{ type: 'bigint', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias290', alias: 'bigint', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias290');
      assert.strictEqual(converted.types[0].alias, 'bigint');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn290');
      assert.strictEqual(converted.funcs[0].returns, "bigint",
        "h2dtscpp_convert_basic_0040 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bigint",
        "h2dtscpp_convert_basic_0040 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample290_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn290') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0040 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0041
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0041
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type unknown; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass291', alias: '',
          variableList: [{ type: 'unknown', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "unknown",
        "h2dtscpp_convert_basic_0041 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0041 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0042
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0042
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type unknown; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun291', returns: 'unknown',
          parameters: [{ type: 'unknown', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun291');
      assert.strictEqual(converted.funcs[0].returns, "unknown",
        "h2dtscpp_convert_basic_0042 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown",
        "h2dtscpp_convert_basic_0042 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample291_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun291') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0042 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0043
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0043
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type unknown; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass291', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'unknown',
            parameters: [{ type: 'unknown', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "unknown",
        "h2dtscpp_convert_basic_0043 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "unknown",
        "h2dtscpp_convert_basic_0043 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0043 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0044
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0044
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type unknown;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0044', () => {
    try {
      const parsed = doParseTs('h2cpp291.ts', `function h2cpp291(p: unknown): unknown { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "unknown",
        "h2dtscpp_convert_basic_0044 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown",
        "h2dtscpp_convert_basic_0044 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp291.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp291') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0044 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0045
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0045
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            unknown; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn291', returns: 'unknown',
          parameters: [{ type: 'unknown', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias291', alias: 'unknown', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias291');
      assert.strictEqual(converted.types[0].alias, 'unknown');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn291');
      assert.strictEqual(converted.funcs[0].returns, "unknown",
        "h2dtscpp_convert_basic_0045 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown",
        "h2dtscpp_convert_basic_0045 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample291_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn291') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0046
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0046
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type never; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass292', alias: '',
          variableList: [{ type: 'never', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "never",
        "h2dtscpp_convert_basic_0046 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0047
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0047
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type never; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun292', returns: 'never',
          parameters: [{ type: 'never', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun292');
      assert.strictEqual(converted.funcs[0].returns, "never",
        "h2dtscpp_convert_basic_0047 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "never",
        "h2dtscpp_convert_basic_0047 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample292_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun292') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0048
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0048
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type never; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass292', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'never',
            parameters: [{ type: 'never', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "never",
        "h2dtscpp_convert_basic_0048 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "never",
        "h2dtscpp_convert_basic_0048 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0049
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0049
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type never;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0049', () => {
    try {
      const parsed = doParseTs('h2cpp292.ts', `function h2cpp292(p: never): never { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "never",
        "h2dtscpp_convert_basic_0049 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "never",
        "h2dtscpp_convert_basic_0049 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp292.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp292') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0050
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0050
   * @tc.desc   Stability convert h2dtscpp/basic: type-alias and global-function convert; type
   *            never; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn292', returns: 'never',
          parameters: [{ type: 'never', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias292', alias: 'never', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias292');
      assert.strictEqual(converted.types[0].alias, 'never');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn292');
      assert.strictEqual(converted.funcs[0].returns, "never",
        "h2dtscpp_convert_basic_0050 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "never",
        "h2dtscpp_convert_basic_0050 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample292_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn292') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0051
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0051
   * @tc.desc   Stability convert h2dtscpp/basic: class-field convert; type any; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass293', alias: '',
          variableList: [{ type: 'any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "h2dtscpp_convert_basic_0051 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0052
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0052
   * @tc.desc   Stability convert h2dtscpp/basic: global-function convert; type any; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun293', returns: 'any',
          parameters: [{ type: 'any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun293');
      assert.strictEqual(converted.funcs[0].returns, "std::any",
        "h2dtscpp_convert_basic_0052 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "h2dtscpp_convert_basic_0052 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample293_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun293') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0053
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0053
   * @tc.desc   Stability convert h2dtscpp/basic: class-method convert; type any; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass293', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'any',
            parameters: [{ type: 'any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::any",
        "h2dtscpp_convert_basic_0053 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::any",
        "h2dtscpp_convert_basic_0053 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0054
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_BASIC_0054
   * @tc.desc   Stability convert h2dtscpp/basic: parse-convert-gen pipeline; type any; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_basic_0054', () => {
    try {
      const parsed = doParseTs('h2cpp293.ts', `function h2cpp293(p: any): any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::any",
        "h2dtscpp_convert_basic_0054 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "h2dtscpp_convert_basic_0054 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp293.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp293') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_basic_0054 execution error: ${String(err)}`);
    }
  });
});
