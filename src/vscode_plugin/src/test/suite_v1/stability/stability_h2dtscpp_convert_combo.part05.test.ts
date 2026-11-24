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

suite('Stability_H2DTSCPP_CONVERT_COMBO_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_C
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_C
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type C; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_c', () => {
    try {
      const parsed = doParseTs('h2cpp277.ts', `function h2cpp277(p: C): C { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp277');
      assert.strictEqual(converted.funcs[0].returns, "C",
        "h2dtscpp_convert_combo_0020_c parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "C",
        "h2dtscpp_convert_combo_0020_c parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp277') || generated.napiCppContent.includes('h2cpp277')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp277'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_C
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_C
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type C;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_c', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn277', returns: 'C',
          parameters: [{ type: 'C', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias277', alias: 'C', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias277');
      assert.strictEqual(converted.types[0].alias, 'C');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn277');
      assert.strictEqual(converted.funcs[0].returns, "C",
        "h2dtscpp_convert_combo_0021_c type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "C",
        "h2dtscpp_convert_combo_0021_c type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample277_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn277') || generated.napiCppContent.includes('typeFn277')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn277'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_FOO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_FOO
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Foo; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_foo', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass283', alias: '',
          variableList: [{ type: 'Foo', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass283');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Foo",
        "h2dtscpp_convert_combo_0022_foo class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_foo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_FOO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_FOO
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Foo; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_foo', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun283', returns: 'Foo',
          parameters: [{ type: 'Foo', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun283');
      assert.strictEqual(converted.funcs[0].returns, "Foo",
        "h2dtscpp_convert_combo_0023_foo global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo",
        "h2dtscpp_convert_combo_0023_foo global param type convert convert output");
      const generated = generateFunctions(converted, 'sample283_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun283') || generated.napiCppContent.includes('globalRun283')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun283'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_foo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_FOO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_FOO
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Foo; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_foo', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass283', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Foo',
            parameters: [{ type: 'Foo', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Foo",
        "h2dtscpp_convert_combo_0024_foo class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Foo",
        "h2dtscpp_convert_combo_0024_foo class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_foo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_FOO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_FOO
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Foo; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_foo', () => {
    try {
      const parsed = doParseTs('h2cpp283.ts', `function h2cpp283(p: Foo): Foo { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp283');
      assert.strictEqual(converted.funcs[0].returns, "Foo",
        "h2dtscpp_convert_combo_0025_foo parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo",
        "h2dtscpp_convert_combo_0025_foo parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp283.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp283') || generated.napiCppContent.includes('h2cpp283')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp283'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_foo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_FOO
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_FOO
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Foo;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_foo', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn283', returns: 'Foo',
          parameters: [{ type: 'Foo', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias283', alias: 'Foo', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias283');
      assert.strictEqual(converted.types[0].alias, 'Foo');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn283');
      assert.strictEqual(converted.funcs[0].returns, "Foo",
        "h2dtscpp_convert_combo_0026_foo type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Foo",
        "h2dtscpp_convert_combo_0026_foo type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample283_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn283') || generated.napiCppContent.includes('typeFn283')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn283'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_foo execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_HANDLER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_HANDLER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Handler; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_handler', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass284', alias: '',
          variableList: [{ type: 'Handler', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass284');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Handler",
        "h2dtscpp_convert_combo_0027_handler class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_HANDLER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_HANDLER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Handler; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_handler', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun284', returns: 'Handler',
          parameters: [{ type: 'Handler', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun284');
      assert.strictEqual(converted.funcs[0].returns, "Handler",
        "h2dtscpp_convert_combo_0028_handler global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler",
        "h2dtscpp_convert_combo_0028_handler global param type convert convert output");
      const generated = generateFunctions(converted, 'sample284_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun284') || generated.napiCppContent.includes('globalRun284')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun284'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_HANDLER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_HANDLER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Handler; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0029_handler', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass284', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Handler',
            parameters: [{ type: 'Handler', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Handler",
        "h2dtscpp_convert_combo_0029_handler class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Handler",
        "h2dtscpp_convert_combo_0029_handler class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0029_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_HANDLER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_HANDLER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Handler;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0030_handler', () => {
    try {
      const parsed = doParseTs('h2cpp284.ts', `function h2cpp284(p: Handler): Handler { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp284');
      assert.strictEqual(converted.funcs[0].returns, "Handler",
        "h2dtscpp_convert_combo_0030_handler parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler",
        "h2dtscpp_convert_combo_0030_handler parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp284.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp284') || generated.napiCppContent.includes('h2cpp284')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp284'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0030_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_HANDLER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_HANDLER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Handler; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0031_handler', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn284', returns: 'Handler',
          parameters: [{ type: 'Handler', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias284', alias: 'Handler', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias284');
      assert.strictEqual(converted.types[0].alias, 'Handler');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn284');
      assert.strictEqual(converted.funcs[0].returns, "Handler",
        "h2dtscpp_convert_combo_0031_handler type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler",
        "h2dtscpp_convert_combo_0031_handler type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample284_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn284') || generated.napiCppContent.includes('typeFn284')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn284'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0031_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_DATA
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_DATA
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0032_data', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass285', alias: '',
          variableList: [{ type: 'Data', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass285');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Data",
        "h2dtscpp_convert_combo_0032_data class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0032_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_DATA
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_DATA
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0033_data', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun285', returns: 'Data',
          parameters: [{ type: 'Data', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun285');
      assert.strictEqual(converted.funcs[0].returns, "Data",
        "h2dtscpp_convert_combo_0033_data global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data",
        "h2dtscpp_convert_combo_0033_data global param type convert convert output");
      const generated = generateFunctions(converted, 'sample285_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun285') || generated.napiCppContent.includes('globalRun285')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun285'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0033_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_DATA
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_DATA
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0034_data', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass285', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Data',
            parameters: [{ type: 'Data', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Data",
        "h2dtscpp_convert_combo_0034_data class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Data",
        "h2dtscpp_convert_combo_0034_data class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0034_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_DATA
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_DATA
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0035_data', () => {
    try {
      const parsed = doParseTs('h2cpp285.ts', `function h2cpp285(p: Data): Data { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp285');
      assert.strictEqual(converted.funcs[0].returns, "Data",
        "h2dtscpp_convert_combo_0035_data parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data",
        "h2dtscpp_convert_combo_0035_data parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp285.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp285') || generated.napiCppContent.includes('h2cpp285')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp285'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0035_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_DATA
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_DATA
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Data;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0036_data', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn285', returns: 'Data',
          parameters: [{ type: 'Data', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias285', alias: 'Data', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias285');
      assert.strictEqual(converted.types[0].alias, 'Data');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn285');
      assert.strictEqual(converted.funcs[0].returns, "Data",
        "h2dtscpp_convert_combo_0036_data type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data",
        "h2dtscpp_convert_combo_0036_data type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample285_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn285') || generated.napiCppContent.includes('typeFn285')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn285'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0036_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_NUMBER_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_NUMBER_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type number[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0037_number_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass303', alias: '',
          variableList: [{ type: 'number[10][20][30]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass303');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "number[10][20][30]",
        "h2dtscpp_convert_combo_0037_number_10_20_30 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0037_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_NUMBER_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_NUMBER_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type number[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0038_number_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun303', returns: 'number[10][20][30]',
          parameters: [{ type: 'number[10][20][30]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun303');
      assert.strictEqual(converted.funcs[0].returns, "number[10][20][30]",
        "h2dtscpp_convert_combo_0038_number_10_20_30 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10][20][30]",
        "h2dtscpp_convert_combo_0038_number_10_20_30 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample303_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun303') || generated.napiCppContent.includes('globalRun303')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun303'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0038_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_NUMBER_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_NUMBER_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type number[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0039_number_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass303', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number[10][20][30]',
            parameters: [{ type: 'number[10][20][30]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "number[10][20][30]",
        "h2dtscpp_convert_combo_0039_number_10_20_30 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "number[10][20][30]",
        "h2dtscpp_convert_combo_0039_number_10_20_30 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0039_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_NUMBER_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_NUMBER_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type
   *            number[10][20][30]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0040_number_10_20_30', () => {
    try {
      const parsed = doParseTs('h2cpp303.ts', `
        function h2cpp303(p: number[10][20][30]): number[10][20][30] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp303');
      assert.strictEqual(converted.funcs[0].returns, "number[10][20][30]",
        "h2dtscpp_convert_combo_0040_number_10_20_30 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10][20][30]",
        "h2dtscpp_convert_combo_0040_number_10_20_30 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp303.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp303') || generated.napiCppContent.includes('h2cpp303')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp303'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0040_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_NUMBER_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_NUMBER_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            number[10][20][30]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0041_number_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn303', returns: 'number[10][20][30]',
          parameters: [{ type: 'number[10][20][30]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias303', alias: 'number[10][20][30]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias303');
      assert.strictEqual(converted.types[0].alias, 'number[10][20][30]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn303');
      assert.strictEqual(converted.funcs[0].returns, "number[10][20][30]",
        "h2dtscpp_convert_combo_0041_number_10_20_30 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10][20][30]",
        "h2dtscpp_convert_combo_0041_number_10_20_30 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample303_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn303') || generated.napiCppContent.includes('typeFn303')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn303'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0041_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_USER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_USER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0042_user', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass304', alias: '',
          variableList: [{ type: 'User', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass304');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "User",
        "h2dtscpp_convert_combo_0042_user class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0042_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_USER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_USER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0043_user', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun304', returns: 'User',
          parameters: [{ type: 'User', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun304');
      assert.strictEqual(converted.funcs[0].returns, "User",
        "h2dtscpp_convert_combo_0043_user global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "User",
        "h2dtscpp_convert_combo_0043_user global param type convert convert output");
      const generated = generateFunctions(converted, 'sample304_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun304') || generated.napiCppContent.includes('globalRun304')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun304'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0043_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_USER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_USER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0044_user', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass304', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'User',
            parameters: [{ type: 'User', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "User",
        "h2dtscpp_convert_combo_0044_user class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "User",
        "h2dtscpp_convert_combo_0044_user class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0044_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_USER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_USER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0045_user', () => {
    try {
      const parsed = doParseTs('h2cpp304.ts', `function h2cpp304(p: User): User { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp304');
      assert.strictEqual(converted.funcs[0].returns, "User",
        "h2dtscpp_convert_combo_0045_user parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "User",
        "h2dtscpp_convert_combo_0045_user parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp304.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp304') || generated.napiCppContent.includes('h2cpp304')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp304'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0045_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_USER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_USER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type User;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0046_user', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn304', returns: 'User',
          parameters: [{ type: 'User', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias304', alias: 'User', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias304');
      assert.strictEqual(converted.types[0].alias, 'User');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn304');
      assert.strictEqual(converted.funcs[0].returns, "User",
        "h2dtscpp_convert_combo_0046_user type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "User",
        "h2dtscpp_convert_combo_0046_user type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample304_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn304') || generated.napiCppContent.includes('typeFn304')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn304'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0046_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_MAP
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Map; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0047_map', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass305', alias: '',
          variableList: [{ type: 'Map', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass305');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map",
        "h2dtscpp_convert_combo_0047_map class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0047_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_MAP
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0048_map', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun305', returns: 'Map',
          parameters: [{ type: 'Map', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun305');
      assert.strictEqual(converted.funcs[0].returns, "Map",
        "h2dtscpp_convert_combo_0048_map global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map",
        "h2dtscpp_convert_combo_0048_map global param type convert convert output");
      const generated = generateFunctions(converted, 'sample305_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun305') || generated.napiCppContent.includes('globalRun305')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun305'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0048_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_MAP
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0049_map', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass305', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map',
            parameters: [{ type: 'Map', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Map",
        "h2dtscpp_convert_combo_0049_map class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Map",
        "h2dtscpp_convert_combo_0049_map class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0049_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_MAP
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0050_map', () => {
    try {
      const parsed = doParseTs('h2cpp305.ts', `function h2cpp305(p: Map): Map { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp305');
      assert.strictEqual(converted.funcs[0].returns, "Map",
        "h2dtscpp_convert_combo_0050_map parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map",
        "h2dtscpp_convert_combo_0050_map parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp305') || generated.napiCppContent.includes('h2cpp305')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp305'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0050_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_MAP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_MAP
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Map;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0051_map', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn305', returns: 'Map',
          parameters: [{ type: 'Map', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias305', alias: 'Map', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias305');
      assert.strictEqual(converted.types[0].alias, 'Map');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn305');
      assert.strictEqual(converted.funcs[0].returns, "Map",
        "h2dtscpp_convert_combo_0051_map type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map",
        "h2dtscpp_convert_combo_0051_map type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample305_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn305') || generated.napiCppContent.includes('typeFn305')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn305'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0051_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0052_array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass306', alias: '',
          variableList: [{ type: 'Array', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass306');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array",
        "h2dtscpp_convert_combo_0052_array class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0052_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0053_array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun306', returns: 'Array',
          parameters: [{ type: 'Array', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun306');
      assert.strictEqual(converted.funcs[0].returns, "Array",
        "h2dtscpp_convert_combo_0053_array global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array",
        "h2dtscpp_convert_combo_0053_array global param type convert convert output");
      const generated = generateFunctions(converted, 'sample306_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun306') || generated.napiCppContent.includes('globalRun306')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun306'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0053_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0054_ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0054_ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0054_array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass306', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Array',
            parameters: [{ type: 'Array', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Array",
        "h2dtscpp_convert_combo_0054_array class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Array",
        "h2dtscpp_convert_combo_0054_array class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0054_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_BAR
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_bar', () => {
    try {
      const parsed = doParseTs('h2cpp309.ts', `function h2cpp309(p: Bar): Bar { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp309');
      assert.strictEqual(converted.funcs[0].returns, "Bar",
        "h2dtscpp_convert_combo_0006_bar parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar",
        "h2dtscpp_convert_combo_0006_bar parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp309.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp309') || generated.napiCppContent.includes('h2cpp309')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp309'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_BAR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_BAR
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Bar;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_bar', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn309', returns: 'Bar',
          parameters: [{ type: 'Bar', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias309', alias: 'Bar', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias309');
      assert.strictEqual(converted.types[0].alias, 'Bar');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn309');
      assert.strictEqual(converted.funcs[0].returns, "Bar",
        "h2dtscpp_convert_combo_0007_bar type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar",
        "h2dtscpp_convert_combo_0007_bar type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample309_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn309') || generated.napiCppContent.includes('typeFn309')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn309'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { x: number; y: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_x_number_y_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass315', alias: '',
          variableList: [{ type: '{ x: number; y: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass315');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0008_x_number_y_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { x: number; y:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_x_number_y_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun315', returns: '{ x: number; y: number }',
          parameters: [{ type: '{ x: number; y: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun315');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0009_x_number_y_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0009_x_number_y_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample315_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun315') || generated.napiCppContent.includes('globalRun315')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun315'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { x: number; y: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_x_number_y_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass315', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ x: number; y: number }',
            parameters: [{ type: '{ x: number; y: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0010_x_number_y_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0010_x_number_y_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { x: number; y:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_x_number_y_number', () => {
    try {
      const parsed = doParseTs('h2cpp315.ts', `
        function h2cpp315(p: { x: number; y: number }): { x: number; y: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp315');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0011_x_number_y_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0011_x_number_y_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp315.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp315') || generated.napiCppContent.includes('h2cpp315')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp315'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { x:
   *            number; y: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_x_number_y_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn315', returns: '{ x: number; y: number }',
          parameters: [{ type: '{ x: number; y: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias315', alias: '{ x: number; y: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias315');
      assert.strictEqual(converted.types[0].alias, '{ x: number; y: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn315');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0012_x_number_y_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number }",
        "h2dtscpp_convert_combo_0012_x_number_y_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample315_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn315') || generated.napiCppContent.includes('typeFn315')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn315'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { x: number; y?: string
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_x_number_y_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass316', alias: '',
          variableList: [{ type: '{ x: number; y?: string }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass316');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0013_x_number_y_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { x: number; y?:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_x_number_y_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun316', returns: '{ x: number; y?: string }',
          parameters: [{ type: '{ x: number; y?: string }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun316');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0014_x_number_y_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0014_x_number_y_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample316_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun316') || generated.napiCppContent.includes('globalRun316')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun316'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { x: number; y?: string
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_x_number_y_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass316', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ x: number; y?: string }',
            parameters: [{ type: '{ x: number; y?: string }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0015_x_number_y_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0015_x_number_y_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { x: number; y?:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_x_number_y_string', () => {
    try {
      const parsed = doParseTs('h2cpp316.ts', `
        function h2cpp316(p: { x: number; y?: string }): { x: number; y?: string } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp316');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0016_x_number_y_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0016_x_number_y_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp316.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp316') || generated.napiCppContent.includes('h2cpp316')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp316'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { x:
   *            number; y?: string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_x_number_y_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn316', returns: '{ x: number; y?: string }',
          parameters: [{ type: '{ x: number; y?: string }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias316', alias: '{ x: number; y?: string }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias316');
      assert.strictEqual(converted.types[0].alias, '{ x: number; y?: string }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn316');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0017_x_number_y_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string }",
        "h2dtscpp_convert_combo_0017_x_number_y_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample316_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn316') || generated.napiCppContent.includes('typeFn316')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn316'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_INPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_INPUT
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_input', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass319', alias: '',
          variableList: [{ type: 'Input', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass319');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Input",
        "h2dtscpp_convert_combo_0018_input class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_INPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_INPUT
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_input', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun319', returns: 'Input',
          parameters: [{ type: 'Input', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun319');
      assert.strictEqual(converted.funcs[0].returns, "Input",
        "h2dtscpp_convert_combo_0019_input global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Input",
        "h2dtscpp_convert_combo_0019_input global param type convert convert output");
      const generated = generateFunctions(converted, 'sample319_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun319') || generated.napiCppContent.includes('globalRun319')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun319'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_INPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_INPUT
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_input', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass319', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Input',
            parameters: [{ type: 'Input', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Input",
        "h2dtscpp_convert_combo_0020_input class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Input",
        "h2dtscpp_convert_combo_0020_input class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_INPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_INPUT
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Input;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_input', () => {
    try {
      const parsed = doParseTs('h2cpp319.ts', `function h2cpp319(p: Input): Input { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp319');
      assert.strictEqual(converted.funcs[0].returns, "Input",
        "h2dtscpp_convert_combo_0021_input parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Input",
        "h2dtscpp_convert_combo_0021_input parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp319.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp319') || generated.napiCppContent.includes('h2cpp319')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp319'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_INPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_INPUT
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Input; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_input', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn319', returns: 'Input',
          parameters: [{ type: 'Input', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias319', alias: 'Input', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias319');
      assert.strictEqual(converted.types[0].alias, 'Input');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn319');
      assert.strictEqual(converted.funcs[0].returns, "Input",
        "h2dtscpp_convert_combo_0022_input type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Input",
        "h2dtscpp_convert_combo_0022_input type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample319_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn319') || generated.napiCppContent.includes('typeFn319')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn319'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_OUTPUT
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_OUTPUT
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Output; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_output', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass320', alias: '',
          variableList: [{ type: 'Output', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass320');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Output",
        "h2dtscpp_convert_combo_0023_output class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_output execution error: ${err}`);
    }
  });
});
