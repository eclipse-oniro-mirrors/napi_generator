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

suite('Stability_H2DTSCPP_CONVERT_COMBO_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_UINT8ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_UINT8ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Uint8Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_uint8array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass192', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Uint8Array',
            parameters: [{ type: 'Uint8Array', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Uint8Array",
        "h2dtscpp_convert_combo_0011_uint8array class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Uint8Array",
        "h2dtscpp_convert_combo_0011_uint8array class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_UINT8ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_UINT8ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Uint8Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_uint8array', () => {
    try {
      const parsed = doParseTs('h2cpp192.ts', `function h2cpp192(p: Uint8Array): Uint8Array { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp192');
      assert.strictEqual(converted.funcs[0].returns, "Uint8Array",
        "h2dtscpp_convert_combo_0012_uint8array parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array",
        "h2dtscpp_convert_combo_0012_uint8array parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp192') || generated.napiCppContent.includes('h2cpp192')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp192'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_UINT8ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_UINT8ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Uint8Array; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_uint8array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn192', returns: 'Uint8Array',
          parameters: [{ type: 'Uint8Array', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias192', alias: 'Uint8Array', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias192');
      assert.strictEqual(converted.types[0].alias, 'Uint8Array');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn192');
      assert.strictEqual(converted.funcs[0].returns, "Uint8Array",
        "h2dtscpp_convert_combo_0013_uint8array type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array",
        "h2dtscpp_convert_combo_0013_uint8array type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample192_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn192') || generated.napiCppContent.includes('typeFn192')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn192'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_ARRAYBUFFER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_ARRAYBUFFER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type ArrayBuffer; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_arraybuffer', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass193', alias: '',
          variableList: [{ type: 'ArrayBuffer', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass193');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer",
        "h2dtscpp_convert_combo_0014_arraybuffer class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_ARRAYBUFFER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_ARRAYBUFFER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_arraybuffer', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun193', returns: 'ArrayBuffer',
          parameters: [{ type: 'ArrayBuffer', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun193');
      assert.strictEqual(converted.funcs[0].returns, "ArrayBuffer",
        "h2dtscpp_convert_combo_0015_arraybuffer global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer",
        "h2dtscpp_convert_combo_0015_arraybuffer global param type convert convert output");
      const generated = generateFunctions(converted, 'sample193_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun193') || generated.napiCppContent.includes('globalRun193')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun193'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_ARRAYBUFFER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_ARRAYBUFFER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_arraybuffer', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass193', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'ArrayBuffer',
            parameters: [{ type: 'ArrayBuffer', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "ArrayBuffer",
        "h2dtscpp_convert_combo_0016_arraybuffer class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "ArrayBuffer",
        "h2dtscpp_convert_combo_0016_arraybuffer class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_ARRAYBUFFER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_ARRAYBUFFER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_arraybuffer', () => {
    try {
      const parsed = doParseTs('h2cpp193.ts', `function h2cpp193(p: ArrayBuffer): ArrayBuffer { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp193');
      assert.strictEqual(converted.funcs[0].returns, "ArrayBuffer",
        "h2dtscpp_convert_combo_0017_arraybuffer parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer",
        "h2dtscpp_convert_combo_0017_arraybuffer parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp193') || generated.napiCppContent.includes('h2cpp193')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp193'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_ARRAYBUFFER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_ARRAYBUFFER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            ArrayBuffer; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_arraybuffer', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn193', returns: 'ArrayBuffer',
          parameters: [{ type: 'ArrayBuffer', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias193', alias: 'ArrayBuffer', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias193');
      assert.strictEqual(converted.types[0].alias, 'ArrayBuffer');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn193');
      assert.strictEqual(converted.funcs[0].returns, "ArrayBuffer",
        "h2dtscpp_convert_combo_0018_arraybuffer type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer",
        "h2dtscpp_convert_combo_0018_arraybuffer type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample193_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn193') || generated.napiCppContent.includes('typeFn193')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn193'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type WeakMap<object, string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_weakmap_object_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass194', alias: '',
          variableList: [{ type: 'WeakMap<object, string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass194');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0019_weakmap_object_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_weakmap_object_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun194', returns: 'WeakMap<object, string>',
          parameters: [{ type: 'WeakMap<object, string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun194');
      assert.strictEqual(converted.funcs[0].returns, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0020_weakmap_object_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0020_weakmap_object_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample194_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun194') || generated.napiCppContent.includes('globalRun194')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun194'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_weakmap_object_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass194', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'WeakMap<object, string>',
            parameters: [{ type: 'WeakMap<object, string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0021_weakmap_object_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0021_weakmap_object_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_weakmap_object_string', () => {
    try {
      const parsed = doParseTs('h2cpp194.ts', `
        function h2cpp194(p: WeakMap<object, string>): WeakMap<object, string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp194');
      assert.strictEqual(converted.funcs[0].returns, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0022_weakmap_object_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0022_weakmap_object_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp194') || generated.napiCppContent.includes('h2cpp194')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp194'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            WeakMap<object, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_weakmap_object_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn194', returns: 'WeakMap<object, string>',
          parameters: [{ type: 'WeakMap<object, string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias194', alias: 'WeakMap<object, string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias194');
      assert.strictEqual(converted.types[0].alias, 'WeakMap<object, string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn194');
      assert.strictEqual(converted.funcs[0].returns, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0023_weakmap_object_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, string>",
        "h2dtscpp_convert_combo_0023_weakmap_object_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample194_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn194') || generated.napiCppContent.includes('typeFn194')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn194'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_keyof_map_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass197', alias: '',
          variableList: [{ type: 'keyof Map<string, number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass197');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0024_keyof_map_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_keyof_map_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun197', returns: 'keyof Map<string, number>',
          parameters: [{ type: 'keyof Map<string, number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun197');
      assert.strictEqual(converted.funcs[0].returns, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0025_keyof_map_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0025_keyof_map_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample197_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun197') || generated.napiCppContent.includes('globalRun197')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun197'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_keyof_map_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass197', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'keyof Map<string, number>',
            parameters: [{ type: 'keyof Map<string, number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0026_keyof_map_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0026_keyof_map_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_keyof_map_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp197.ts', `
        function h2cpp197(p: keyof Map<string, number>): keyof Map<string, number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp197');
      assert.strictEqual(converted.funcs[0].returns, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0027_keyof_map_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0027_keyof_map_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp197.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp197') || generated.napiCppContent.includes('h2cpp197')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp197'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type keyof
   *            Map<string, number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_keyof_map_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn197', returns: 'keyof Map<string, number>',
          parameters: [{ type: 'keyof Map<string, number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias197', alias: 'keyof Map<string, number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias197');
      assert.strictEqual(converted.types[0].alias, 'keyof Map<string, number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn197');
      assert.strictEqual(converted.funcs[0].returns, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0028_keyof_map_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, number>",
        "h2dtscpp_convert_combo_0028_keyof_map_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample197_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn197') || generated.napiCppContent.includes('typeFn197')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn197'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_TYPEOF_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_TYPEOF_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type typeof Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0029_typeof_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass198', alias: '',
          variableList: [{ type: 'typeof Date', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass198');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date",
        "h2dtscpp_convert_combo_0029_typeof_date class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0029_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_TYPEOF_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_TYPEOF_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0030_typeof_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun198', returns: 'typeof Date',
          parameters: [{ type: 'typeof Date', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun198');
      assert.strictEqual(converted.funcs[0].returns, "typeof Date",
        "h2dtscpp_convert_combo_0030_typeof_date global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date",
        "h2dtscpp_convert_combo_0030_typeof_date global param type convert convert output");
      const generated = generateFunctions(converted, 'sample198_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun198') || generated.napiCppContent.includes('globalRun198')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun198'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0030_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_TYPEOF_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_TYPEOF_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0031_typeof_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass198', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'typeof Date',
            parameters: [{ type: 'typeof Date', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "typeof Date",
        "h2dtscpp_convert_combo_0031_typeof_date class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "typeof Date",
        "h2dtscpp_convert_combo_0031_typeof_date class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0031_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_TYPEOF_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_TYPEOF_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0032_typeof_date', () => {
    try {
      const parsed = doParseTs('h2cpp198.ts', `function h2cpp198(p: typeof Date): typeof Date { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp198');
      assert.strictEqual(converted.funcs[0].returns, "typeof Date",
        "h2dtscpp_convert_combo_0032_typeof_date parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date",
        "h2dtscpp_convert_combo_0032_typeof_date parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp198.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp198') || generated.napiCppContent.includes('h2cpp198')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp198'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0032_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_TYPEOF_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_TYPEOF_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            typeof Date; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0033_typeof_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn198', returns: 'typeof Date',
          parameters: [{ type: 'typeof Date', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias198', alias: 'typeof Date', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias198');
      assert.strictEqual(converted.types[0].alias, 'typeof Date');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn198');
      assert.strictEqual(converted.funcs[0].returns, "typeof Date",
        "h2dtscpp_convert_combo_0033_typeof_date type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date",
        "h2dtscpp_convert_combo_0033_typeof_date type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample198_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn198') || generated.napiCppContent.includes('typeFn198')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn198'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0033_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_A_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_A_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0034_a_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass199', alias: '',
          variableList: [{ type: '{ a: string }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass199');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string }",
        "h2dtscpp_convert_combo_0034_a_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0034_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_A_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_A_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0035_a_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun199', returns: '{ a: string }',
          parameters: [{ type: '{ a: string }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun199');
      assert.strictEqual(converted.funcs[0].returns, "{ a: string }",
        "h2dtscpp_convert_combo_0035_a_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string }",
        "h2dtscpp_convert_combo_0035_a_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample199_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun199') || generated.napiCppContent.includes('globalRun199')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun199'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0035_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_A_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_A_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0036_a_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass199', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ a: string }',
            parameters: [{ type: '{ a: string }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ a: string }",
        "h2dtscpp_convert_combo_0036_a_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ a: string }",
        "h2dtscpp_convert_combo_0036_a_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0036_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_A_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_A_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0037_a_string', () => {
    try {
      const parsed = doParseTs('h2cpp199.ts', `function h2cpp199(p: { a: string }): { a: string } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp199');
      assert.strictEqual(converted.funcs[0].returns, "{ a: string }",
        "h2dtscpp_convert_combo_0037_a_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string }",
        "h2dtscpp_convert_combo_0037_a_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp199.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp199') || generated.napiCppContent.includes('h2cpp199')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp199'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0037_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_A_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_A_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { a:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0038_a_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn199', returns: '{ a: string }',
          parameters: [{ type: '{ a: string }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias199', alias: '{ a: string }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias199');
      assert.strictEqual(converted.types[0].alias, '{ a: string }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn199');
      assert.strictEqual(converted.funcs[0].returns, "{ a: string }",
        "h2dtscpp_convert_combo_0038_a_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string }",
        "h2dtscpp_convert_combo_0038_a_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample199_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn199') || generated.napiCppContent.includes('typeFn199')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn199'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0038_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_READONLY_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { readonly b: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0039_readonly_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass200', alias: '',
          variableList: [{ type: '{ readonly b: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass200');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0039_readonly_b_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0039_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_READONLY_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { readonly b: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0040_readonly_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun200', returns: '{ readonly b: number }',
          parameters: [{ type: '{ readonly b: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun200');
      assert.strictEqual(converted.funcs[0].returns, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0040_readonly_b_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0040_readonly_b_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample200_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun200') || generated.napiCppContent.includes('globalRun200')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun200'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0040_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_READONLY_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { readonly b: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0041_readonly_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass200', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ readonly b: number }',
            parameters: [{ type: '{ readonly b: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0041_readonly_b_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0041_readonly_b_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0041_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_READONLY_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { readonly b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0042_readonly_b_number', () => {
    try {
      const parsed = doParseTs('h2cpp200.ts', `
        function h2cpp200(p: { readonly b: number }): { readonly b: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp200');
      assert.strictEqual(converted.funcs[0].returns, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0042_readonly_b_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0042_readonly_b_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp200.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp200') || generated.napiCppContent.includes('h2cpp200')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp200'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0042_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_READONLY_B_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type {
   *            readonly b: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0043_readonly_b_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn200', returns: '{ readonly b: number }',
          parameters: [{ type: '{ readonly b: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias200', alias: '{ readonly b: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias200');
      assert.strictEqual(converted.types[0].alias, '{ readonly b: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn200');
      assert.strictEqual(converted.funcs[0].returns, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0043_readonly_b_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number }",
        "h2dtscpp_convert_combo_0043_readonly_b_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample200_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn200') || generated.napiCppContent.includes('typeFn200')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn200'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0043_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_STRING_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_STRING_X_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type string & { x: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0044_string_x_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass201', alias: '',
          variableList: [{ type: 'string & { x: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass201');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number }",
        "h2dtscpp_convert_combo_0044_string_x_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0044_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_STRING_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_STRING_X_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type string & { x: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0045_string_x_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun201', returns: 'string & { x: number }',
          parameters: [{ type: 'string & { x: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun201');
      assert.strictEqual(converted.funcs[0].returns, "string & { x: number }",
        "h2dtscpp_convert_combo_0045_string_x_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number }",
        "h2dtscpp_convert_combo_0045_string_x_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample201_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun201') || generated.napiCppContent.includes('globalRun201')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun201'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0045_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_STRING_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_STRING_X_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type string & { x: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0046_string_x_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass201', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string & { x: number }',
            parameters: [{ type: 'string & { x: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string & { x: number }",
        "h2dtscpp_convert_combo_0046_string_x_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string & { x: number }",
        "h2dtscpp_convert_combo_0046_string_x_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0046_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_STRING_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_STRING_X_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type string & { x:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0047_string_x_number', () => {
    try {
      const parsed = doParseTs('h2cpp201.ts', `
        function h2cpp201(p: string & { x: number }): string & { x: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp201');
      assert.strictEqual(converted.funcs[0].returns, "string & { x: number }",
        "h2dtscpp_convert_combo_0047_string_x_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number }",
        "h2dtscpp_convert_combo_0047_string_x_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp201.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp201') || generated.napiCppContent.includes('h2cpp201')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp201'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0047_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_STRING_X_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_STRING_X_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            string & { x: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0048_string_x_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn201', returns: 'string & { x: number }',
          parameters: [{ type: 'string & { x: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias201', alias: 'string & { x: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias201');
      assert.strictEqual(converted.types[0].alias, 'string & { x: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn201');
      assert.strictEqual(converted.funcs[0].returns, "string & { x: number }",
        "h2dtscpp_convert_combo_0048_string_x_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number }",
        "h2dtscpp_convert_combo_0048_string_x_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample201_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn201') || generated.napiCppContent.includes('typeFn201')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn201'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0048_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_UINT16ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_UINT16ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Uint16Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0049_uint16array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass206', alias: '',
          variableList: [{ type: 'Uint16Array', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass206');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uint16Array",
        "h2dtscpp_convert_combo_0049_uint16array class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0049_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_UINT16ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_UINT16ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Uint16Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0050_uint16array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun206', returns: 'Uint16Array',
          parameters: [{ type: 'Uint16Array', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun206');
      assert.strictEqual(converted.funcs[0].returns, "Uint16Array",
        "h2dtscpp_convert_combo_0050_uint16array global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array",
        "h2dtscpp_convert_combo_0050_uint16array global param type convert convert output");
      const generated = generateFunctions(converted, 'sample206_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun206') || generated.napiCppContent.includes('globalRun206')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun206'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0050_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_UINT16ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_UINT16ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Uint16Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0051_uint16array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass206', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Uint16Array',
            parameters: [{ type: 'Uint16Array', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Uint16Array",
        "h2dtscpp_convert_combo_0051_uint16array class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Uint16Array",
        "h2dtscpp_convert_combo_0051_uint16array class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0051_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_UINT16ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_UINT16ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Uint16Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0052_uint16array', () => {
    try {
      const parsed = doParseTs('h2cpp206.ts', `function h2cpp206(p: Uint16Array): Uint16Array { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp206');
      assert.strictEqual(converted.funcs[0].returns, "Uint16Array",
        "h2dtscpp_convert_combo_0052_uint16array parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array",
        "h2dtscpp_convert_combo_0052_uint16array parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp206') || generated.napiCppContent.includes('h2cpp206')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp206'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0052_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_UINT16ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_UINT16ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Uint16Array; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0053_uint16array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn206', returns: 'Uint16Array',
          parameters: [{ type: 'Uint16Array', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias206', alias: 'Uint16Array', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias206');
      assert.strictEqual(converted.types[0].alias, 'Uint16Array');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn206');
      assert.strictEqual(converted.funcs[0].returns, "Uint16Array",
        "h2dtscpp_convert_combo_0053_uint16array type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint16Array",
        "h2dtscpp_convert_combo_0053_uint16array type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample206_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn206') || generated.napiCppContent.includes('typeFn206')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn206'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0053_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_M_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_M_VOID
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_m_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass208', alias: '',
          variableList: [{ type: '{ m(): void }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass208');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void }",
        "h2dtscpp_convert_combo_0006_m_void class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_M_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_M_VOID
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_m_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun208', returns: '{ m(): void }',
          parameters: [{ type: '{ m(): void }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun208');
      assert.strictEqual(converted.funcs[0].returns, "{ m(): void }",
        "h2dtscpp_convert_combo_0007_m_void global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void }",
        "h2dtscpp_convert_combo_0007_m_void global param type convert convert output");
      const generated = generateFunctions(converted, 'sample208_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun208') || generated.napiCppContent.includes('globalRun208')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun208'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_M_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_M_VOID
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_m_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass208', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ m(): void }',
            parameters: [{ type: '{ m(): void }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ m(): void }",
        "h2dtscpp_convert_combo_0008_m_void class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ m(): void }",
        "h2dtscpp_convert_combo_0008_m_void class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_M_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_M_VOID
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_m_void', () => {
    try {
      const parsed = doParseTs('h2cpp208.ts', `function h2cpp208(p: { m(): void }): { m(): void } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp208');
      assert.strictEqual(converted.funcs[0].returns, "{ m(): void }",
        "h2dtscpp_convert_combo_0009_m_void parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void }",
        "h2dtscpp_convert_combo_0009_m_void parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp208') || generated.napiCppContent.includes('h2cpp208')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp208'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_M_VOID
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_M_VOID
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type {
   *            m(): void }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_m_void', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn208', returns: '{ m(): void }',
          parameters: [{ type: '{ m(): void }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias208', alias: '{ m(): void }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias208');
      assert.strictEqual(converted.types[0].alias, '{ m(): void }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn208');
      assert.strictEqual(converted.funcs[0].returns, "{ m(): void }",
        "h2dtscpp_convert_combo_0010_m_void type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void }",
        "h2dtscpp_convert_combo_0010_m_void type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample208_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn208') || generated.napiCppContent.includes('typeFn208')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn208'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_A_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_A_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_a_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass214', alias: '',
          variableList: [{ type: '{ a: number }', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass214');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number }",
        "h2dtscpp_convert_combo_0011_a_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_A_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_A_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_a_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun214', returns: '{ a: number }',
          parameters: [{ type: '{ a: number }', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun214');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number }",
        "h2dtscpp_convert_combo_0012_a_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number }",
        "h2dtscpp_convert_combo_0012_a_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample214_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun214') || generated.napiCppContent.includes('globalRun214')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun214'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_A_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_A_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_a_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass214', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '{ a: number }',
            parameters: [{ type: '{ a: number }', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "{ a: number }",
        "h2dtscpp_convert_combo_0013_a_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "{ a: number }",
        "h2dtscpp_convert_combo_0013_a_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_A_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_A_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_a_number', () => {
    try {
      const parsed = doParseTs('h2cpp214.ts', `function h2cpp214(p: { a: number }): { a: number } { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp214');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number }",
        "h2dtscpp_convert_combo_0014_a_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number }",
        "h2dtscpp_convert_combo_0014_a_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp214') || generated.napiCppContent.includes('h2cpp214')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp214'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_A_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_A_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type { a:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_a_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn214', returns: '{ a: number }',
          parameters: [{ type: '{ a: number }', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias214', alias: '{ a: number }', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias214');
      assert.strictEqual(converted.types[0].alias, '{ a: number }');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn214');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number }",
        "h2dtscpp_convert_combo_0015_a_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number }",
        "h2dtscpp_convert_combo_0015_a_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample214_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn214') || generated.napiCppContent.includes('typeFn214')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn214'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_a_number execution error: ${err}`);
    }
  });
});
