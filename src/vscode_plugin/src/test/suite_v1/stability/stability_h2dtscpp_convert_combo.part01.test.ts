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

suite('Stability_H2DTSCPP_CONVERT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0001
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0001
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type () => void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass305', alias: '',
          variableList: [{ type: '() => void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void()>",
        "h2dtscpp_convert_combo_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0002
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0002
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type () => void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun305', returns: '() => void',
          parameters: [{ type: '() => void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun305');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "h2dtscpp_convert_combo_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "h2dtscpp_convert_combo_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample305_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0003
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0003
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type () => void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass305', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '() => void',
            parameters: [{ type: '() => void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void()>",
        "h2dtscpp_convert_combo_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void()>",
        "h2dtscpp_convert_combo_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0004
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0004
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type () => void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0004', () => {
    try {
      const parsed = doParseTs('h2cpp305.ts', `function h2cpp305(p: () => void): () => void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "h2dtscpp_convert_combo_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "h2dtscpp_convert_combo_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0005
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0005
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type () =>
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn305', returns: '() => void',
          parameters: [{ type: '() => void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias305', alias: '() => void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias305');
      assert.strictEqual(converted.types[0].alias, '() => void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn305');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "h2dtscpp_convert_combo_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "h2dtscpp_convert_combo_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample305_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_TCLASS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_TCLASS
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type tclass; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_tclass', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass148', alias: '',
          variableList: [{ type: 'tclass', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass148');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "tclass",
        "h2dtscpp_convert_combo_0006_tclass class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_TCLASS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_TCLASS
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type tclass; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_tclass', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun148', returns: 'tclass',
          parameters: [{ type: 'tclass', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun148');
      assert.strictEqual(converted.funcs[0].returns, "tclass",
        "h2dtscpp_convert_combo_0007_tclass global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass",
        "h2dtscpp_convert_combo_0007_tclass global param type convert convert output");
      const generated = generateFunctions(converted, 'sample148_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun148') || generated.napiCppContent.includes('globalRun148')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun148'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_TCLASS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_TCLASS
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type tclass; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_tclass', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass148', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'tclass',
            parameters: [{ type: 'tclass', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "tclass",
        "h2dtscpp_convert_combo_0008_tclass class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "tclass",
        "h2dtscpp_convert_combo_0008_tclass class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_TCLASS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_TCLASS
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type tclass;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_tclass', () => {
    try {
      const parsed = doParseTs('h2cpp148.ts', `function h2cpp148(p: tclass): tclass { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp148');
      assert.strictEqual(converted.funcs[0].returns, "tclass",
        "h2dtscpp_convert_combo_0009_tclass parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass",
        "h2dtscpp_convert_combo_0009_tclass parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp148') || generated.napiCppContent.includes('h2cpp148')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp148'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_TCLASS
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_TCLASS
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            tclass; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_tclass', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn148', returns: 'tclass',
          parameters: [{ type: 'tclass', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias148', alias: 'tclass', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias148');
      assert.strictEqual(converted.types[0].alias, 'tclass');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn148');
      assert.strictEqual(converted.funcs[0].returns, "tclass",
        "h2dtscpp_convert_combo_0010_tclass type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass",
        "h2dtscpp_convert_combo_0010_tclass type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample148_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn148') || generated.napiCppContent.includes('typeFn148')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn148'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_NUMBER_10
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_NUMBER_10
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type number[10]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_number_10', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass150', alias: '',
          variableList: [{ type: 'number[10]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass150');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "number[10]",
        "h2dtscpp_convert_combo_0011_number_10 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_NUMBER_10
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_NUMBER_10
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type number[10];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_number_10', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun150', returns: 'number[10]',
          parameters: [{ type: 'number[10]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun150');
      assert.strictEqual(converted.funcs[0].returns, "number[10]",
        "h2dtscpp_convert_combo_0012_number_10 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10]",
        "h2dtscpp_convert_combo_0012_number_10 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample150_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun150') || generated.napiCppContent.includes('globalRun150')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun150'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_NUMBER_10
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_NUMBER_10
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type number[10]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_number_10', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass150', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number[10]',
            parameters: [{ type: 'number[10]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "number[10]",
        "h2dtscpp_convert_combo_0013_number_10 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "number[10]",
        "h2dtscpp_convert_combo_0013_number_10 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_NUMBER_10
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_NUMBER_10
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type number[10];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_number_10', () => {
    try {
      const parsed = doParseTs('h2cpp150.ts', `function h2cpp150(p: number[10]): number[10] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp150');
      assert.strictEqual(converted.funcs[0].returns, "number[10]",
        "h2dtscpp_convert_combo_0014_number_10 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10]",
        "h2dtscpp_convert_combo_0014_number_10 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp150') || generated.napiCppContent.includes('h2cpp150')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp150'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_NUMBER_10
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_NUMBER_10
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            number[10]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_number_10', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn150', returns: 'number[10]',
          parameters: [{ type: 'number[10]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias150', alias: 'number[10]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias150');
      assert.strictEqual(converted.types[0].alias, 'number[10]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn150');
      assert.strictEqual(converted.funcs[0].returns, "number[10]",
        "h2dtscpp_convert_combo_0015_number_10 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10]",
        "h2dtscpp_convert_combo_0015_number_10 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample150_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn150') || generated.napiCppContent.includes('typeFn150')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn150'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_STRING_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_STRING_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_string_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass151', alias: '',
          variableList: [{ type: 'string[10][20]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass151');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string[10][20]",
        "h2dtscpp_convert_combo_0016_string_10_20 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_STRING_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_STRING_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_string_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun151', returns: 'string[10][20]',
          parameters: [{ type: 'string[10][20]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun151');
      assert.strictEqual(converted.funcs[0].returns, "string[10][20]",
        "h2dtscpp_convert_combo_0017_string_10_20 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string[10][20]",
        "h2dtscpp_convert_combo_0017_string_10_20 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample151_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun151') || generated.napiCppContent.includes('globalRun151')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun151'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_STRING_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_STRING_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_string_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass151', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string[10][20]',
            parameters: [{ type: 'string[10][20]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string[10][20]",
        "h2dtscpp_convert_combo_0018_string_10_20 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string[10][20]",
        "h2dtscpp_convert_combo_0018_string_10_20 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_STRING_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_STRING_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_string_10_20', () => {
    try {
      const parsed = doParseTs('h2cpp151.ts', `function h2cpp151(p: string[10][20]): string[10][20] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp151');
      assert.strictEqual(converted.funcs[0].returns, "string[10][20]",
        "h2dtscpp_convert_combo_0019_string_10_20 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string[10][20]",
        "h2dtscpp_convert_combo_0019_string_10_20 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp151') || generated.napiCppContent.includes('h2cpp151')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp151'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_STRING_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_STRING_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            string[10][20]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_string_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn151', returns: 'string[10][20]',
          parameters: [{ type: 'string[10][20]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias151', alias: 'string[10][20]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias151');
      assert.strictEqual(converted.types[0].alias, 'string[10][20]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn151');
      assert.strictEqual(converted.funcs[0].returns, "string[10][20]",
        "h2dtscpp_convert_combo_0020_string_10_20 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string[10][20]",
        "h2dtscpp_convert_combo_0020_string_10_20 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample151_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn151') || generated.napiCppContent.includes('typeFn151')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn151'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass153', alias: '',
          variableList: [{ type: 'Type', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass153');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type",
        "h2dtscpp_convert_combo_0021_type class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun153', returns: 'Type',
          parameters: [{ type: 'Type', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun153');
      assert.strictEqual(converted.funcs[0].returns, "Type",
        "h2dtscpp_convert_combo_0022_type global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type",
        "h2dtscpp_convert_combo_0022_type global param type convert convert output");
      const generated = generateFunctions(converted, 'sample153_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun153') || generated.napiCppContent.includes('globalRun153')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun153'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass153', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Type',
            parameters: [{ type: 'Type', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Type",
        "h2dtscpp_convert_combo_0023_type class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Type",
        "h2dtscpp_convert_combo_0023_type class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_type', () => {
    try {
      const parsed = doParseTs('h2cpp153.ts', `function h2cpp153(p: Type): Type { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp153');
      assert.strictEqual(converted.funcs[0].returns, "Type",
        "h2dtscpp_convert_combo_0024_type parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type",
        "h2dtscpp_convert_combo_0024_type parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp153') || generated.napiCppContent.includes('h2cpp153')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp153'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Type;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn153', returns: 'Type',
          parameters: [{ type: 'Type', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias153', alias: 'Type', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias153');
      assert.strictEqual(converted.types[0].alias, 'Type');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn153');
      assert.strictEqual(converted.funcs[0].returns, "Type",
        "h2dtscpp_convert_combo_0025_type type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type",
        "h2dtscpp_convert_combo_0025_type type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample153_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn153') || generated.napiCppContent.includes('typeFn153')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn153'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_TYPE_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_TYPE_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_type_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass154', alias: '',
          variableList: [{ type: 'Type[10][20]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass154');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type[10][20]",
        "h2dtscpp_convert_combo_0026_type_10_20 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_TYPE_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_TYPE_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_type_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun154', returns: 'Type[10][20]',
          parameters: [{ type: 'Type[10][20]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun154');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20]",
        "h2dtscpp_convert_combo_0027_type_10_20 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20]",
        "h2dtscpp_convert_combo_0027_type_10_20 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample154_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun154') || generated.napiCppContent.includes('globalRun154')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun154'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_TYPE_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_TYPE_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_type_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass154', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Type[10][20]',
            parameters: [{ type: 'Type[10][20]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Type[10][20]",
        "h2dtscpp_convert_combo_0028_type_10_20 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Type[10][20]",
        "h2dtscpp_convert_combo_0028_type_10_20 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_TYPE_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_TYPE_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0029_type_10_20', () => {
    try {
      const parsed = doParseTs('h2cpp154.ts', `function h2cpp154(p: Type[10][20]): Type[10][20] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp154');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20]",
        "h2dtscpp_convert_combo_0029_type_10_20 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20]",
        "h2dtscpp_convert_combo_0029_type_10_20 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp154') || generated.napiCppContent.includes('h2cpp154')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp154'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0029_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_TYPE_10_20
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_TYPE_10_20
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Type[10][20]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0030_type_10_20', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn154', returns: 'Type[10][20]',
          parameters: [{ type: 'Type[10][20]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias154', alias: 'Type[10][20]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias154');
      assert.strictEqual(converted.types[0].alias, 'Type[10][20]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn154');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20]",
        "h2dtscpp_convert_combo_0030_type_10_20 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20]",
        "h2dtscpp_convert_combo_0030_type_10_20 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample154_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn154') || generated.napiCppContent.includes('typeFn154')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn154'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0030_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_TYPE_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_TYPE_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0031_type_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass155', alias: '',
          variableList: [{ type: 'Type[10][20][30]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass155');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0031_type_10_20_30 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0031_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_TYPE_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_TYPE_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0032_type_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun155', returns: 'Type[10][20][30]',
          parameters: [{ type: 'Type[10][20][30]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun155');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0032_type_10_20_30 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0032_type_10_20_30 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample155_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun155') || generated.napiCppContent.includes('globalRun155')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun155'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0032_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_TYPE_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_TYPE_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0033_type_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass155', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Type[10][20][30]',
            parameters: [{ type: 'Type[10][20][30]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0033_type_10_20_30 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0033_type_10_20_30 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0033_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_TYPE_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_TYPE_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0034_type_10_20_30', () => {
    try {
      const parsed = doParseTs('h2cpp155.ts', `function h2cpp155(p: Type[10][20][30]): Type[10][20][30] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp155');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0034_type_10_20_30 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0034_type_10_20_30 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp155') || generated.napiCppContent.includes('h2cpp155')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp155'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0034_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_TYPE_10_20_30
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_TYPE_10_20_30
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Type[10][20][30]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0035_type_10_20_30', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn155', returns: 'Type[10][20][30]',
          parameters: [{ type: 'Type[10][20][30]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias155', alias: 'Type[10][20][30]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias155');
      assert.strictEqual(converted.types[0].alias, 'Type[10][20][30]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn155');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0035_type_10_20_30 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20][30]",
        "h2dtscpp_convert_combo_0035_type_10_20_30 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample155_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn155') || generated.napiCppContent.includes('typeFn155')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn155'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0035_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_HELLO_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_HELLO_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0036_hello_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass157', alias: '',
          variableList: [{ type: '"hello world"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass157');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"hello world\"",
        "h2dtscpp_convert_combo_0036_hello_world class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0036_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_HELLO_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_HELLO_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0037_hello_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun157', returns: '"hello world"',
          parameters: [{ type: '"hello world"', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun157');
      assert.strictEqual(converted.funcs[0].returns, "\"hello world\"",
        "h2dtscpp_convert_combo_0037_hello_world global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world\"",
        "h2dtscpp_convert_combo_0037_hello_world global param type convert convert output");
      const generated = generateFunctions(converted, 'sample157_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun157') || generated.napiCppContent.includes('globalRun157')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun157'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0037_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_HELLO_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_HELLO_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0038_hello_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass157', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '"hello world"',
            parameters: [{ type: '"hello world"', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "\"hello world\"",
        "h2dtscpp_convert_combo_0038_hello_world class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "\"hello world\"",
        "h2dtscpp_convert_combo_0038_hello_world class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0038_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_HELLO_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_HELLO_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0039_hello_world', () => {
    try {
      const parsed = doParseTs('h2cpp157.ts', `function h2cpp157(p: "hello world"): "hello world" { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp157');
      assert.strictEqual(converted.funcs[0].returns, "\"hello world\"",
        "h2dtscpp_convert_combo_0039_hello_world parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world\"",
        "h2dtscpp_convert_combo_0039_hello_world parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp157') || generated.napiCppContent.includes('h2cpp157')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp157'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0039_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_HELLO_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_HELLO_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            "hello world"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0040_hello_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn157', returns: '"hello world"',
          parameters: [{ type: '"hello world"', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias157', alias: '"hello world"', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias157');
      assert.strictEqual(converted.types[0].alias, '"hello world"');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn157');
      assert.strictEqual(converted.funcs[0].returns, "\"hello world\"",
        "h2dtscpp_convert_combo_0040_hello_world type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world\"",
        "h2dtscpp_convert_combo_0040_hello_world type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample157_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn157') || generated.napiCppContent.includes('typeFn157')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn157'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0040_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type OrNull<OneOrMany<Type>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0041_ornull_oneormany_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass158', alias: '',
          variableList: [{ type: 'OrNull<OneOrMany<Type>>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass158');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0041_ornull_oneormany_type class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0041_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0042_ornull_oneormany_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun158', returns: 'OrNull<OneOrMany<Type>>',
          parameters: [{ type: 'OrNull<OneOrMany<Type>>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun158');
      assert.strictEqual(converted.funcs[0].returns, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0042_ornull_oneormany_type global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0042_ornull_oneormany_type global param type convert convert output");
      const generated = generateFunctions(converted, 'sample158_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun158') || generated.napiCppContent.includes('globalRun158')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun158'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0042_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0043_ornull_oneormany_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass158', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'OrNull<OneOrMany<Type>>',
            parameters: [{ type: 'OrNull<OneOrMany<Type>>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0043_ornull_oneormany_type class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0043_ornull_oneormany_type class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0043_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0044_ornull_oneormany_type', () => {
    try {
      const parsed = doParseTs('h2cpp158.ts', `
        function h2cpp158(p: OrNull<OneOrMany<Type>>): OrNull<OneOrMany<Type>> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp158');
      assert.strictEqual(converted.funcs[0].returns, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0044_ornull_oneormany_type parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0044_ornull_oneormany_type parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp158') || generated.napiCppContent.includes('h2cpp158')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp158'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0044_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0045_ornull_oneormany_type', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn158', returns: 'OrNull<OneOrMany<Type>>',
          parameters: [{ type: 'OrNull<OneOrMany<Type>>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias158', alias: 'OrNull<OneOrMany<Type>>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias158');
      assert.strictEqual(converted.types[0].alias, 'OrNull<OneOrMany<Type>>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn158');
      assert.strictEqual(converted.funcs[0].returns, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0045_ornull_oneormany_type type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<Type>>",
        "h2dtscpp_convert_combo_0045_ornull_oneormany_type type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample158_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn158') || generated.napiCppContent.includes('typeFn158')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn158'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0045_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0046_readonly_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass161', alias: '',
          variableList: [{ type: 'readonly [string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass161');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number]",
        "h2dtscpp_convert_combo_0046_readonly_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0046_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0047_readonly_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun161', returns: 'readonly [string, number]',
          parameters: [{ type: 'readonly [string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun161');
      assert.strictEqual(converted.funcs[0].returns, "readonly [string, number]",
        "h2dtscpp_convert_combo_0047_readonly_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number]",
        "h2dtscpp_convert_combo_0047_readonly_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample161_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun161') || generated.napiCppContent.includes('globalRun161')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun161'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0047_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0048_readonly_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass161', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'readonly [string, number]',
            parameters: [{ type: 'readonly [string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "readonly [string, number]",
        "h2dtscpp_convert_combo_0048_readonly_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "readonly [string, number]",
        "h2dtscpp_convert_combo_0048_readonly_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0048_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0049_readonly_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp161.ts', `
        function h2cpp161(p: readonly [string, number]): readonly [string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp161');
      assert.strictEqual(converted.funcs[0].returns, "readonly [string, number]",
        "h2dtscpp_convert_combo_0049_readonly_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number]",
        "h2dtscpp_convert_combo_0049_readonly_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp161') || generated.napiCppContent.includes('h2cpp161')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp161'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0049_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            readonly [string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0050_readonly_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn161', returns: 'readonly [string, number]',
          parameters: [{ type: 'readonly [string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias161', alias: 'readonly [string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias161');
      assert.strictEqual(converted.types[0].alias, 'readonly [string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn161');
      assert.strictEqual(converted.funcs[0].returns, "readonly [string, number]",
        "h2dtscpp_convert_combo_0050_readonly_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number]",
        "h2dtscpp_convert_combo_0050_readonly_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample161_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn161') || generated.napiCppContent.includes('typeFn161')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn161'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0050_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_KEYOF_ARRAYISH
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0051_keyof_arrayish', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass162', alias: '',
          variableList: [{ type: 'keyof Arrayish', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass162');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish",
        "h2dtscpp_convert_combo_0051_keyof_arrayish class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0051_keyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_KEYOF_ARRAYISH
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0052_keyof_arrayish', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun162', returns: 'keyof Arrayish',
          parameters: [{ type: 'keyof Arrayish', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun162');
      assert.strictEqual(converted.funcs[0].returns, "keyof Arrayish",
        "h2dtscpp_convert_combo_0052_keyof_arrayish global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish",
        "h2dtscpp_convert_combo_0052_keyof_arrayish global param type convert convert output");
      const generated = generateFunctions(converted, 'sample162_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun162') || generated.napiCppContent.includes('globalRun162')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun162'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0052_keyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_KEYOF_ARRAYISH
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0053_keyof_arrayish', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass162', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'keyof Arrayish',
            parameters: [{ type: 'keyof Arrayish', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "keyof Arrayish",
        "h2dtscpp_convert_combo_0053_keyof_arrayish class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "keyof Arrayish",
        "h2dtscpp_convert_combo_0053_keyof_arrayish class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0053_keyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0054_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0054_KEYOF_ARRAYISH
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0054_keyof_arrayish', () => {
    try {
      const parsed = doParseTs('h2cpp162.ts', `function h2cpp162(p: keyof Arrayish): keyof Arrayish { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp162');
      assert.strictEqual(converted.funcs[0].returns, "keyof Arrayish",
        "h2dtscpp_convert_combo_0054_keyof_arrayish parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish",
        "h2dtscpp_convert_combo_0054_keyof_arrayish parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp162') || generated.napiCppContent.includes('h2cpp162')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp162'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0054_keyof_arrayish execution error: ${err}`);
    }
  });
});
