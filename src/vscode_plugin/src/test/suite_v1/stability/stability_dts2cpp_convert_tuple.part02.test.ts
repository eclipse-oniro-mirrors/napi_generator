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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0002_string_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0002_string_string_boolean convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean]",
        "dts2cpp_convert_tuple_0002_string_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0003_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample181.ts', `
        function sample181(p0: [string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample181');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean]",
        "dts2cpp_convert_tuple_0003_string_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0004_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet181.ts', `
        function sampleRet181(): [string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean]",
        "dts2cpp_convert_tuple_0004_string_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet181.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet181') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0005_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass181.ts', `
        class SampleClass181 { field: [string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean]",
        "dts2cpp_convert_tuple_0005_string_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0006_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline181.ts', `
        function pipeline181(p: [string, string, boolean]): [string, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean]",
        "dts2cpp_convert_tuple_0006_string_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean]",
        "dts2cpp_convert_tuple_0006_string_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline181.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline181') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0007_string_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0007_string_boolean_number convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number]",
        "dts2cpp_convert_tuple_0007_string_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0008_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample182.ts', `
        function sample182(p0: [string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample182');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number]",
        "dts2cpp_convert_tuple_0008_string_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0009_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet182.ts', `
        function sampleRet182(): [string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number]",
        "dts2cpp_convert_tuple_0009_string_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet182.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet182') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0010_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass182.ts', `
        class SampleClass182 { field: [string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number]",
        "dts2cpp_convert_tuple_0010_string_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0011_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline182.ts', `
        function pipeline182(p: [string, boolean, number]): [string, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number]",
        "dts2cpp_convert_tuple_0011_string_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number]",
        "dts2cpp_convert_tuple_0011_string_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline182.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline182') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0012_string_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0012_string_boolean_string convert output non-empty");
      assert.strictEqual(result, "[string, boolean, string]",
        "dts2cpp_convert_tuple_0012_string_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0013_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample183.ts', `
        function sample183(p0: [string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample183');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string]",
        "dts2cpp_convert_tuple_0013_string_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0014_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet183.ts', `
        function sampleRet183(): [string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string]",
        "dts2cpp_convert_tuple_0014_string_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet183.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet183') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0015_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass183.ts', `
        class SampleClass183 { field: [string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, string]",
        "dts2cpp_convert_tuple_0015_string_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0016_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline183.ts', `
        function pipeline183(p: [string, boolean, string]): [string, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string]",
        "dts2cpp_convert_tuple_0016_string_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string]",
        "dts2cpp_convert_tuple_0016_string_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline183.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline183') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0017_string_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0017_string_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0017_string_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0018_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample184.ts', `
        function sample184(p0: [string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample184');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0018_string_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0019_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet184.ts', `
        function sampleRet184(): [string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0019_string_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet184.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet184') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0020_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass184.ts', `
        class SampleClass184 { field: [string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0020_string_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0021_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline184.ts', `
        function pipeline184(p: [string, boolean, boolean]): [string, boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0021_string_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0021_string_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline184.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline184') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0022_boolean_number_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0022_boolean_number_number convert output non-empty");
      assert.strictEqual(result, "[boolean, number, number]",
        "dts2cpp_convert_tuple_0022_boolean_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0023_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample185.ts', `
        function sample185(p0: [boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample185');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number]",
        "dts2cpp_convert_tuple_0023_boolean_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0024_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet185.ts', `
        function sampleRet185(): [boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number]",
        "dts2cpp_convert_tuple_0024_boolean_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet185.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet185') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0025_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass185.ts', `
        class SampleClass185 { field: [boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number]",
        "dts2cpp_convert_tuple_0025_boolean_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0026_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline185.ts', `
        function pipeline185(p: [boolean, number, number]): [boolean, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number]",
        "dts2cpp_convert_tuple_0026_boolean_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number]",
        "dts2cpp_convert_tuple_0026_boolean_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline185.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline185') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0027_boolean_number_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0027_boolean_number_string convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string]",
        "dts2cpp_convert_tuple_0027_boolean_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0028_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample186.ts', `
        function sample186(p0: [boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample186');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string]",
        "dts2cpp_convert_tuple_0028_boolean_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0029_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet186.ts', `
        function sampleRet186(): [boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string]",
        "dts2cpp_convert_tuple_0029_boolean_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet186.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet186') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0030_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass186.ts', `
        class SampleClass186 { field: [boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string]",
        "dts2cpp_convert_tuple_0030_boolean_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0031_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline186.ts', `
        function pipeline186(p: [boolean, number, string]): [boolean, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string]",
        "dts2cpp_convert_tuple_0031_boolean_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string]",
        "dts2cpp_convert_tuple_0031_boolean_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline186.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline186') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0032_boolean_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0032_boolean_number_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0032_boolean_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0033_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample187.ts', `
        function sample187(p0: [boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample187');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0033_boolean_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0034_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet187.ts', `
        function sampleRet187(): [boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0034_boolean_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet187.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet187') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0035_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass187.ts', `
        class SampleClass187 { field: [boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0035_boolean_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0036_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline187.ts', `
        function pipeline187(p: [boolean, number, boolean]): [boolean, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0036_boolean_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0036_boolean_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline187.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline187') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0037_boolean_string_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0037_boolean_string_number convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number]",
        "dts2cpp_convert_tuple_0037_boolean_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0038_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample188.ts', `
        function sample188(p0: [boolean, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample188');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number]",
        "dts2cpp_convert_tuple_0038_boolean_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0039_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet188.ts', `
        function sampleRet188(): [boolean, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number]",
        "dts2cpp_convert_tuple_0039_boolean_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet188.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet188') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0040_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass188.ts', `
        class SampleClass188 { field: [boolean, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number]",
        "dts2cpp_convert_tuple_0040_boolean_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0041_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline188.ts', `
        function pipeline188(p: [boolean, string, number]): [boolean, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number]",
        "dts2cpp_convert_tuple_0041_boolean_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number]",
        "dts2cpp_convert_tuple_0041_boolean_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline188.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline188') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0042_boolean_string_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0042_boolean_string_string convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string]",
        "dts2cpp_convert_tuple_0042_boolean_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0043_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample189.ts', `
        function sample189(p0: [boolean, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample189');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string]",
        "dts2cpp_convert_tuple_0043_boolean_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0044_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet189.ts', `
        function sampleRet189(): [boolean, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string]",
        "dts2cpp_convert_tuple_0044_boolean_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0045_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass189.ts', `
        class SampleClass189 { field: [boolean, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string]",
        "dts2cpp_convert_tuple_0045_boolean_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0046_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline189.ts', `
        function pipeline189(p: [boolean, string, string]): [boolean, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string]",
        "dts2cpp_convert_tuple_0046_boolean_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string]",
        "dts2cpp_convert_tuple_0046_boolean_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0047_boolean_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0047_boolean_string_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0047_boolean_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0048_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample190.ts', `
        function sample190(p0: [boolean, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample190');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0048_boolean_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0049_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet190.ts', `
        function sampleRet190(): [boolean, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0049_boolean_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0050_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass190.ts', `
        class SampleClass190 { field: [boolean, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0050_boolean_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0051_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline190.ts', `
        function pipeline190(p: [boolean, string, boolean]): [boolean, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0051_boolean_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0051_boolean_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0052_boolean_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0052_boolean_boolean_number convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0052_boolean_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0053_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample191.ts', `
        function sample191(p0: [boolean, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample191');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0053_boolean_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0054_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet191.ts', `
        function sampleRet191(): [boolean, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0054_boolean_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0055_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass191.ts', `
        class SampleClass191 { field: [boolean, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0055_boolean_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0056_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline191.ts', `
        function pipeline191(p: [boolean, boolean, number]): [boolean, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0056_boolean_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0056_boolean_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0057_boolean_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0057_boolean_boolean_string convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0057_boolean_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0058_boolean_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample192.ts', `
        function sample192(p0: [boolean, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample192');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0058_boolean_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0059_boolean_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet192.ts', `
        function sampleRet192(): [boolean, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0059_boolean_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0060_boolean_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass192.ts', `
        class SampleClass192 { field: [boolean, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0060_boolean_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0061_boolean_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline192.ts', `
        function pipeline192(p: [boolean, boolean, string]): [boolean, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0061_boolean_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0061_boolean_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0062_boolean_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0062_boolean_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0062_boolean_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0063_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample193.ts', `
        function sample193(p0: [boolean, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample193');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0063_boolean_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0064_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet193.ts', `
        function sampleRet193(): [boolean, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0064_boolean_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0065_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass193.ts', `
        class SampleClass193 { field: [boolean, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0065_boolean_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_BOOLEAN_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0066_boolean_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline193.ts', `
        function pipeline193(p: [boolean, boolean, boolean]): [boolean, boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0066_boolean_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0066_boolean_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066_boolean_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0067_number_number_number_number', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0067_number_number_number_number convert output non-empty");
      assert.strictEqual(result, "[number, number, number, number]",
        "dts2cpp_convert_tuple_0067_number_number_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0068_number_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample194.ts', `
        function sample194(p0: [number, number, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample194');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number]",
        "dts2cpp_convert_tuple_0068_number_number_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0069_number_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet194.ts', `
        function sampleRet194(): [number, number, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, number]",
        "dts2cpp_convert_tuple_0069_number_number_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0070_number_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass194.ts', `
        class SampleClass194 { field: [number, number, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, number]",
        "dts2cpp_convert_tuple_0070_number_number_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_NUMBER_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0071_number_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline194.ts', `
        function pipeline194(p: [number, number, number, number]): [number, number, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, number]",
        "dts2cpp_convert_tuple_0071_number_number_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number]",
        "dts2cpp_convert_tuple_0071_number_number_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071_number_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0072_number_number_number_string', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0072_number_number_number_string convert output non-empty");
      assert.strictEqual(result, "[number, number, number, string]",
        "dts2cpp_convert_tuple_0072_number_number_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0073_number_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample195.ts', `
        function sample195(p0: [number, number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample195');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string]",
        "dts2cpp_convert_tuple_0073_number_number_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0074_number_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet195.ts', `
        function sampleRet195(): [number, number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, string]",
        "dts2cpp_convert_tuple_0074_number_number_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet195.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0075_number_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass195.ts', `
        class SampleClass195 { field: [number, number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, string]",
        "dts2cpp_convert_tuple_0075_number_number_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_NUMBER_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_NUMBER_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0076_number_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline195.ts', `
        function pipeline195(p: [number, number, number, string]): [number, number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number, string]",
        "dts2cpp_convert_tuple_0076_number_number_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string]",
        "dts2cpp_convert_tuple_0076_number_number_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline195.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076_number_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0077_number_number_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0077_number_number_number_boolean convert output non-empty");
      assert.strictEqual(result, "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0077_number_number_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_NUMBER_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0078_number_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample196.ts', `
        function sample196(p0: [number, number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample196');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0078_number_number_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078_number_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0001_number_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass203.ts', `
        class SampleClass203 { field: [number, string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, number]",
        "dts2cpp_convert_tuple_0001_number_string_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001_number_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_NUMBER_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_NUMBER_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0002_number_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline203.ts', `
        function pipeline203(p: [number, string, number, number]): [number, string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "dts2cpp_convert_tuple_0002_number_string_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "dts2cpp_convert_tuple_0002_number_string_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline203.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002_number_string_number_number execution error: ${String(err)}`);
    }
  });
});
