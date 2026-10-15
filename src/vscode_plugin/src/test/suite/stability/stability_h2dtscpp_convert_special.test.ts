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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';

suite('Stability_H2DTSCPP_CONVERT_SPECIAL', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_SPECIAL.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0001
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0001
   * @tc.desc   Stability convert h2dtscpp/special: class-field convert; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass171', alias: '',
          variableList: [{ type: '`${Key}Changed`', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass171');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed`",
        "h2dtscpp_convert_special_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0002
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0002
   * @tc.desc   Stability convert h2dtscpp/special: global-function convert; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun171', returns: '`${Key}Changed`',
          parameters: [{ type: '`${Key}Changed`', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun171');
      assert.strictEqual(converted.funcs[0].returns, "`${Key}Changed`",
        "h2dtscpp_convert_special_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed`",
        "h2dtscpp_convert_special_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample171_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun171') || generated.napiCppContent.includes('globalRun171')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun171'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0003
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0003
   * @tc.desc   Stability convert h2dtscpp/special: class-method convert; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass171', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '`${Key}Changed`',
            parameters: [{ type: '`${Key}Changed`', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "`${Key}Changed`",
        "h2dtscpp_convert_special_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "`${Key}Changed`",
        "h2dtscpp_convert_special_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0004
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0004
   * @tc.desc   Stability convert h2dtscpp/special: parse-convert-gen pipeline; type
   *            `${Key}Changed`; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0004', () => {
    try {
      const parsed = doParseTs('h2cpp171.ts', `
        function h2cpp171(p: \`\${Key}Changed\`): \`\${Key}Changed\` { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp171');
      assert.strictEqual(converted.funcs[0].returns, "`${Key}Changed`",
        "h2dtscpp_convert_special_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed`",
        "h2dtscpp_convert_special_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp171') || generated.napiCppContent.includes('h2cpp171')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp171'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0005
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0005
   * @tc.desc   Stability convert h2dtscpp/special: type-alias and global-function convert; type
   *            `${Key}Changed`; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn171', returns: '`${Key}Changed`',
          parameters: [{ type: '`${Key}Changed`', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias171', alias: '`${Key}Changed`', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias171');
      assert.strictEqual(converted.types[0].alias, '`${Key}Changed`');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn171');
      assert.strictEqual(converted.funcs[0].returns, "`${Key}Changed`",
        "h2dtscpp_convert_special_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed`",
        "h2dtscpp_convert_special_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample171_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn171') || generated.napiCppContent.includes('typeFn171')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn171'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0006
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0006
   * @tc.desc   Stability convert h2dtscpp/special: class-field convert; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass226', alias: '',
          variableList: [{ type: '`tpl-${string}`', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass226');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}`",
        "h2dtscpp_convert_special_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0007
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0007
   * @tc.desc   Stability convert h2dtscpp/special: global-function convert; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun226', returns: '`tpl-${string}`',
          parameters: [{ type: '`tpl-${string}`', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun226');
      assert.strictEqual(converted.funcs[0].returns, "`tpl-${string}`",
        "h2dtscpp_convert_special_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}`",
        "h2dtscpp_convert_special_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample226_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun226') || generated.napiCppContent.includes('globalRun226')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun226'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0008
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0008
   * @tc.desc   Stability convert h2dtscpp/special: class-method convert; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass226', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '`tpl-${string}`',
            parameters: [{ type: '`tpl-${string}`', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "`tpl-${string}`",
        "h2dtscpp_convert_special_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "`tpl-${string}`",
        "h2dtscpp_convert_special_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0009
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0009
   * @tc.desc   Stability convert h2dtscpp/special: parse-convert-gen pipeline; type
   *            `tpl-${string}`; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0009', () => {
    try {
      const parsed = doParseTs('h2cpp226.ts', `
        function h2cpp226(p: \`tpl-\${string}\`): \`tpl-\${string}\` { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp226');
      assert.strictEqual(converted.funcs[0].returns, "`tpl-${string}`",
        "h2dtscpp_convert_special_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}`",
        "h2dtscpp_convert_special_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp226') || generated.napiCppContent.includes('h2cpp226')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp226'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0010
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_SPECIAL_0010
   * @tc.desc   Stability convert h2dtscpp/special: type-alias and global-function convert; type
   *            `tpl-${string}`; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_special_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn226', returns: '`tpl-${string}`',
          parameters: [{ type: '`tpl-${string}`', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias226', alias: '`tpl-${string}`', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias226');
      assert.strictEqual(converted.types[0].alias, '`tpl-${string}`');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn226');
      assert.strictEqual(converted.funcs[0].returns, "`tpl-${string}`",
        "h2dtscpp_convert_special_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}`",
        "h2dtscpp_convert_special_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample226_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn226') || generated.napiCppContent.includes('typeFn226')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn226'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_special_0010 execution error: ${err}`);
    }
  });
});
