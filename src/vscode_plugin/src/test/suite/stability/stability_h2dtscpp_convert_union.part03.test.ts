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

suite('Stability_H2DTSCPP_CONVERT_UNION_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_UNION_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0039_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0039_STRING_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0039_string_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass359', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | Promise<string>',
            parameters: [{ type: 'string | Promise<string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | Promise<string>",
        "h2dtscpp_convert_union_0039_string_promise_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | Promise<string>",
        "h2dtscpp_convert_union_0039_string_promise_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0039_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0040_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0040_STRING_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0040_string_promise_string', () => {
    try {
      const parsed = doParseTs('h2cpp359.ts', `
        function h2cpp359(p: string | Promise<string>): string | Promise<string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp359');
      assert.strictEqual(converted.funcs[0].returns, "string | Promise<string>",
        "h2dtscpp_convert_union_0040_string_promise_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Promise<string>",
        "h2dtscpp_convert_union_0040_string_promise_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp359.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp359') || generated.napiCppContent.includes('h2cpp359')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp359'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0040_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0041_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0041_STRING_PROMISE_STRING
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0041_string_promise_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn359', returns: 'string | Promise<string>',
          parameters: [{ type: 'string | Promise<string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias359', alias: 'string | Promise<string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias359');
      assert.strictEqual(converted.types[0].alias, 'string | Promise<string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn359');
      assert.strictEqual(converted.funcs[0].returns, "string | Promise<string>",
        "h2dtscpp_convert_union_0041_string_promise_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Promise<string>",
        "h2dtscpp_convert_union_0041_string_promise_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample359_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn359') || generated.napiCppContent.includes('typeFn359')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn359'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0041_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0042_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0042_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/union: class-field convert; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0042_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass361', alias: '',
          variableList: [{ type: 'string | [string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass361');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | [string, number]",
        "h2dtscpp_convert_union_0042_string_string_number class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0042_string_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0043_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0043_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/union: global-function convert; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0043_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun361', returns: 'string | [string, number]',
          parameters: [{ type: 'string | [string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun361');
      assert.strictEqual(converted.funcs[0].returns, "string | [string, number]",
        "h2dtscpp_convert_union_0043_string_string_number global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | [string, number]",
        "h2dtscpp_convert_union_0043_string_string_number global param type convert convert output");
      const generated = generateFunctions(converted, 'sample361_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun361') || generated.napiCppContent.includes('globalRun361')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun361'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0043_string_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0044_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0044_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/union: class-method convert; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0044_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass361', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | [string, number]',
            parameters: [{ type: 'string | [string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | [string, number]",
        "h2dtscpp_convert_union_0044_string_string_number class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | [string, number]",
        "h2dtscpp_convert_union_0044_string_string_number class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0044_string_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0045_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0045_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/union: parse-convert-gen pipeline; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0045_string_string_number', () => {
    try {
      const parsed = doParseTs('h2cpp361.ts', `
        function h2cpp361(p: string | [string, number]): string | [string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp361');
      assert.strictEqual(converted.funcs[0].returns, "string | [string, number]",
        "h2dtscpp_convert_union_0045_string_string_number parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | [string, number]",
        "h2dtscpp_convert_union_0045_string_string_number parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp361.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp361') || generated.napiCppContent.includes('h2cpp361')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp361'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0045_string_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_UNION_0046_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_UNION_0046_STRING_STRING_NUMBER
   * @tc.desc   Stability convert h2dtscpp/union: type-alias and global-function convert; type
   *            string | [string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_union_0046_string_string_number', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn361', returns: 'string | [string, number]',
          parameters: [{ type: 'string | [string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias361', alias: 'string | [string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias361');
      assert.strictEqual(converted.types[0].alias, 'string | [string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn361');
      assert.strictEqual(converted.funcs[0].returns, "string | [string, number]",
        "h2dtscpp_convert_union_0046_string_string_number type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | [string, number]",
        "h2dtscpp_convert_union_0046_string_string_number type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample361_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn361') || generated.napiCppContent.includes('typeFn361')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn361'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0046_string_string_number execution error: ${err}`);
    }
  });
});
