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
import { runCompatSafe } from './stability_helpers';

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_STRING_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_STRING_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0003_string_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline226.ts', `
        function pipeline226(p: [string, number, string, boolean]): [string, number, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0003_string_number_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0003_string_number_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003_string_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0004_string_number_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0004_string_number_boolean_number convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0004_string_number_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004_string_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0005_string_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample227.ts', `
        function sample227(p0: [string, number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample227');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0005_string_number_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005_string_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0006_string_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet227.ts', `
        function sampleRet227(): [string, number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0006_string_number_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet227.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006_string_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, number, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0007_string_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass227.ts', `
        class SampleClass227 { field: [string, number, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0007_string_number_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007_string_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_STRING_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0008_string_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline227.ts', `
        function pipeline227(p: [string, number, boolean, number]): [string, number, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0008_string_number_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0008_string_number_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline227.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008_string_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_STRING_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_STRING_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0009_string_number_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0009_string_number_boolean_string convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0009_string_number_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009_string_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_STRING_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_STRING_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0010_string_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample228.ts', `
        function sample228(p0: [string, number, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample228');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0010_string_number_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010_string_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_STRING_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_STRING_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0011_string_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet228.ts', `
        function sampleRet228(): [string, number, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0011_string_number_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet228.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011_string_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_STRING_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_STRING_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, number, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0012_string_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass228.ts', `
        class SampleClass228 { field: [string, number, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0012_string_number_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012_string_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_STRING_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_STRING_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0013_string_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline228.ts', `
        function pipeline228(p: [string, number, boolean, string]): [string, number, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0013_string_number_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0013_string_number_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline228.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013_string_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0014_string_number_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0014_string_number_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0014_string_number_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014_string_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0015_string_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample229.ts', `
        function sample229(p0: [string, number, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample229');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0015_string_number_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015_string_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0016_string_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet229.ts', `
        function sampleRet229(): [string, number, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0016_string_number_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet229.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016_string_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, number, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0017_string_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass229.ts', `
        class SampleClass229 { field: [string, number, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0017_string_number_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017_string_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_STRING_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0018_string_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline229.ts', `
        function pipeline229(p: [string, number, boolean, boolean]): [string, number, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0018_string_number_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0018_string_number_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline229.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018_string_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_STRING_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_STRING_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0019_string_string_number_number', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0019_string_string_number_number convert output non-empty");
      assert.strictEqual(result, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0019_string_string_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019_string_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_STRING_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_STRING_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0020_string_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample230.ts', `
        function sample230(p0: [string, string, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample230');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0020_string_string_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020_string_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_STRING_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_STRING_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0021_string_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet230.ts', `
        function sampleRet230(): [string, string, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0021_string_string_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet230.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021_string_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_STRING_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_STRING_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0022_string_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass230.ts', `
        class SampleClass230 { field: [string, string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0022_string_string_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022_string_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_STRING_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_STRING_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0023_string_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline230.ts', `
        function pipeline230(p: [string, string, number, number]): [string, string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0023_string_string_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0023_string_string_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline230.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023_string_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_STRING_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_STRING_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0024_string_string_number_string', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0024_string_string_number_string convert output non-empty");
      assert.strictEqual(result, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0024_string_string_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024_string_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_STRING_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_STRING_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0025_string_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample231.ts', `
        function sample231(p0: [string, string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample231');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0025_string_string_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025_string_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_STRING_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_STRING_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0026_string_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet231.ts', `
        function sampleRet231(): [string, string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0026_string_string_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet231.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026_string_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_STRING_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_STRING_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0027_string_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass231.ts', `
        class SampleClass231 { field: [string, string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0027_string_string_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027_string_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_STRING_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_STRING_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0028_string_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline231.ts', `
        function pipeline231(p: [string, string, number, string]): [string, string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0028_string_string_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0028_string_string_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline231.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028_string_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0029_string_string_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0029_string_string_number_boolean convert output non-empty");
      assert.strictEqual(result, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0029_string_string_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0030_string_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample232.ts', `
        function sample232(p0: [string, string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample232');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0030_string_string_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0031_string_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet232.ts', `
        function sampleRet232(): [string, string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0031_string_string_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet232.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet232') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0032_string_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass232.ts', `
        class SampleClass232 { field: [string, string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0032_string_string_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_STRING_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_STRING_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0033_string_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline232.ts', `
        function pipeline232(p: [string, string, number, boolean]): [string, string, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0033_string_string_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0033_string_string_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline232.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline232') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033_string_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0034_string_string_string_number', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0034_string_string_string_number convert output non-empty");
      assert.strictEqual(result, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0034_string_string_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0035_string_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample233.ts', `
        function sample233(p0: [string, string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample233');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0035_string_string_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0036_string_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet233.ts', `
        function sampleRet233(): [string, string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0036_string_string_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet233.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet233') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0037_string_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass233.ts', `
        class SampleClass233 { field: [string, string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0037_string_string_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_STRING_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_STRING_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0038_string_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline233.ts', `
        function pipeline233(p: [string, string, string, number]): [string, string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0038_string_string_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0038_string_string_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline233.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline233') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038_string_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0039_string_string_string_string', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0039_string_string_string_string convert output non-empty");
      assert.strictEqual(result, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0039_string_string_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0040_string_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample234.ts', `
        function sample234(p0: [string, string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample234');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0040_string_string_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0041_string_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet234.ts', `
        function sampleRet234(): [string, string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0041_string_string_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0042_string_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass234.ts', `
        class SampleClass234 { field: [string, string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0042_string_string_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_STRING_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_STRING_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0043_string_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline234.ts', `
        function pipeline234(p: [string, string, string, string]): [string, string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0043_string_string_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0043_string_string_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043_string_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0044_string_string_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0044_string_string_string_boolean convert output non-empty");
      assert.strictEqual(result, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0044_string_string_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0045_string_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample235.ts', `
        function sample235(p0: [string, string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample235');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0045_string_string_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0046_string_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet235.ts', `
        function sampleRet235(): [string, string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0046_string_string_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet235.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0047_string_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass235.ts', `
        class SampleClass235 { field: [string, string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0047_string_string_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_STRING_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_STRING_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0048_string_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline235.ts', `
        function pipeline235(p: [string, string, string, boolean]): [string, string, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0048_string_string_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0048_string_string_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline235.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048_string_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0049_string_string_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0049_string_string_boolean_number convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0049_string_string_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0050_string_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample236.ts', `
        function sample236(p0: [string, string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample236');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0050_string_string_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0051_string_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet236.ts', `
        function sampleRet236(): [string, string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0051_string_string_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet236.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0052_string_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass236.ts', `
        class SampleClass236 { field: [string, string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0052_string_string_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_STRING_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_STRING_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0053_string_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline236.ts', `
        function pipeline236(p: [string, string, boolean, number]): [string, string, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0053_string_string_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0053_string_string_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline236.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053_string_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0054_string_string_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0054_string_string_boolean_string convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0054_string_string_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0055_string_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample237.ts', `
        function sample237(p0: [string, string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample237');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0055_string_string_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0056_string_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet237.ts', `
        function sampleRet237(): [string, string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0056_string_string_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet237.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0057_string_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass237.ts', `
        class SampleClass237 { field: [string, string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0057_string_string_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_STRING_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_STRING_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0058_string_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline237.ts', `
        function pipeline237(p: [string, string, boolean, string]): [string, string, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0058_string_string_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0058_string_string_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline237.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058_string_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0059_string_string_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0059_string_string_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0059_string_string_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0060_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample238.ts', `
        function sample238(p0: [string, string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample238');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0060_string_string_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0061_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet238.ts', `
        function sampleRet238(): [string, string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0061_string_string_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet238.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0062_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass238.ts', `
        class SampleClass238 { field: [string, string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0062_string_string_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_STRING_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0063_string_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline238.ts', `
        function pipeline238(p: [string, string, boolean, boolean]): [string, string, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0063_string_string_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0063_string_string_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline238.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063_string_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0064_string_boolean_number_number', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0064_string_boolean_number_number convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0064_string_boolean_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0065_string_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample239.ts', `
        function sample239(p0: [string, boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample239');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0065_string_boolean_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0066_string_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet239.ts', `
        function sampleRet239(): [string, boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0066_string_boolean_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet239.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0067_string_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass239.ts', `
        class SampleClass239 { field: [string, boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0067_string_boolean_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_STRING_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0068_string_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline239.ts', `
        function pipeline239(p: [string, boolean, number, number]): [string, boolean, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0068_string_boolean_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0068_string_boolean_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline239.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068_string_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0069_string_boolean_number_string', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0069_string_boolean_number_string convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0069_string_boolean_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0070_string_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample240.ts', `
        function sample240(p0: [string, boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample240');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0070_string_boolean_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0071_string_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet240.ts', `
        function sampleRet240(): [string, boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0071_string_boolean_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet240.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0072_string_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass240.ts', `
        class SampleClass240 { field: [string, boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0072_string_boolean_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_STRING_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_STRING_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0073_string_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline240.ts', `
        function pipeline240(p: [string, boolean, number, string]): [string, boolean, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0073_string_boolean_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0073_string_boolean_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline240.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073_string_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0074_string_boolean_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0074_string_boolean_number_boolean convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0074_string_boolean_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0075_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample241.ts', `
        function sample241(p0: [string, boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample241');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0075_string_boolean_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0076_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet241.ts', `
        function sampleRet241(): [string, boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0076_string_boolean_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet241.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0077_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass241.ts', `
        class SampleClass241 { field: [string, boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0077_string_boolean_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_STRING_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0078_string_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline241.ts', `
        function pipeline241(p: [string, boolean, number, boolean]): [string, boolean, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0078_string_boolean_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0078_string_boolean_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline241.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078_string_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0001_boolean_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample249.ts', `
        function sample249(p0: [boolean, number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample249');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0001_boolean_number_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0002_boolean_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet249.ts', `
        function sampleRet249(): [boolean, number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0002_boolean_number_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet249.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002_boolean_number_number_string execution error: ${String(err)}`);
    }
  });
});
