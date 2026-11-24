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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0003_number_string_number_string', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0003_number_string_number_string convert output non-empty");
      assert.strictEqual(result, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0003_number_string_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0004_number_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample204.ts', `
        function sample204(p0: [number, string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample204');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0004_number_string_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0005_number_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet204.ts', `
        function sampleRet204(): [number, string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0005_number_string_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet204.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0006_number_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass204.ts', `
        class SampleClass204 { field: [number, string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0006_number_string_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_NUMBER_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_NUMBER_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0007_number_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline204.ts', `
        function pipeline204(p: [number, string, number, string]): [number, string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0007_number_string_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0007_number_string_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline204.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007_number_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0008_number_string_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0008_number_string_number_boolean convert output non-empty");
      assert.strictEqual(result, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0008_number_string_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0009_number_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample205.ts', `
        function sample205(p0: [number, string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample205');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0009_number_string_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0010_number_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet205.ts', `
        function sampleRet205(): [number, string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0010_number_string_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet205.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0011_number_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass205.ts', `
        class SampleClass205 { field: [number, string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0011_number_string_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_NUMBER_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0012_number_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline205.ts', `
        function pipeline205(p: [number, string, number, boolean]): [number, string, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0012_number_string_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0012_number_string_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline205.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012_number_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0013_number_string_string_number', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0013_number_string_string_number convert output non-empty");
      assert.strictEqual(result, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0013_number_string_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0014_number_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample206.ts', `
        function sample206(p0: [number, string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample206');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0014_number_string_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0015_number_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet206.ts', `
        function sampleRet206(): [number, string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0015_number_string_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0016_number_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass206.ts', `
        class SampleClass206 { field: [number, string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0016_number_string_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_NUMBER_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_NUMBER_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0017_number_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline206.ts', `
        function pipeline206(p: [number, string, string, number]): [number, string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0017_number_string_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0017_number_string_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017_number_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0018_number_string_string_string', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0018_number_string_string_string convert output non-empty");
      assert.strictEqual(result, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0018_number_string_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0019_number_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample207.ts', `
        function sample207(p0: [number, string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample207');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0019_number_string_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0020_number_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet207.ts', `
        function sampleRet207(): [number, string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0020_number_string_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0021_number_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass207.ts', `
        class SampleClass207 { field: [number, string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0021_number_string_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_NUMBER_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_NUMBER_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0022_number_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline207.ts', `
        function pipeline207(p: [number, string, string, string]): [number, string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0022_number_string_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0022_number_string_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022_number_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0023_number_string_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0023_number_string_string_boolean convert output non-empty");
      assert.strictEqual(result, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0023_number_string_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0024_number_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample208.ts', `
        function sample208(p0: [number, string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample208');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0024_number_string_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0025_number_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet208.ts', `
        function sampleRet208(): [number, string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0025_number_string_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0026_number_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass208.ts', `
        class SampleClass208 { field: [number, string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0026_number_string_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_NUMBER_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_NUMBER_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0027_number_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline208.ts', `
        function pipeline208(p: [number, string, string, boolean]): [number, string, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0027_number_string_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0027_number_string_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027_number_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0028_number_string_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0028_number_string_boolean_number convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0028_number_string_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0029_number_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample209.ts', `
        function sample209(p0: [number, string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample209');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0029_number_string_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0030_number_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet209.ts', `
        function sampleRet209(): [number, string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0030_number_string_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet209.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0031_number_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass209.ts', `
        class SampleClass209 { field: [number, string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0031_number_string_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_NUMBER_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0032_number_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline209.ts', `
        function pipeline209(p: [number, string, boolean, number]): [number, string, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0032_number_string_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0032_number_string_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline209.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032_number_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0033_number_string_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0033_number_string_boolean_string convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0033_number_string_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0034_number_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample210.ts', `
        function sample210(p0: [number, string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample210');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0034_number_string_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0035_number_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet210.ts', `
        function sampleRet210(): [number, string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0035_number_string_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet210.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0036_number_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass210.ts', `
        class SampleClass210 { field: [number, string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0036_number_string_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_NUMBER_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_NUMBER_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0037_number_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline210.ts', `
        function pipeline210(p: [number, string, boolean, string]): [number, string, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0037_number_string_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0037_number_string_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline210.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037_number_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0038_number_string_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0038_number_string_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0038_number_string_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0039_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample211.ts', `
        function sample211(p0: [number, string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample211');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0039_number_string_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0040_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet211.ts', `
        function sampleRet211(): [number, string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0040_number_string_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0041_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass211.ts', `
        class SampleClass211 { field: [number, string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0041_number_string_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_NUMBER_STRING_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0042_number_string_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline211.ts', `
        function pipeline211(p: [number, string, boolean, boolean]): [number, string, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0042_number_string_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0042_number_string_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042_number_string_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0043_number_boolean_number_number', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0043_number_boolean_number_number convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0043_number_boolean_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0044_number_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample212.ts', `
        function sample212(p0: [number, boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample212');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0044_number_boolean_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0045_number_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet212.ts', `
        function sampleRet212(): [number, boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0045_number_boolean_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0046_number_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass212.ts', `
        class SampleClass212 { field: [number, boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0046_number_boolean_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_NUMBER_BOOLEAN_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0047_number_boolean_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline212.ts', `
        function pipeline212(p: [number, boolean, number, number]): [number, boolean, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0047_number_boolean_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0047_number_boolean_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047_number_boolean_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0048_number_boolean_number_string', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0048_number_boolean_number_string convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0048_number_boolean_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048_number_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0049_number_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample213.ts', `
        function sample213(p0: [number, boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample213');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0049_number_boolean_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049_number_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0050_number_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet213.ts', `
        function sampleRet213(): [number, boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0050_number_boolean_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050_number_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0051_number_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass213.ts', `
        class SampleClass213 { field: [number, boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0051_number_boolean_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051_number_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_NUMBER_BOOLEAN_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0052_number_boolean_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline213.ts', `
        function pipeline213(p: [number, boolean, number, string]): [number, boolean, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0052_number_boolean_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0052_number_boolean_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052_number_boolean_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0053_number_boolean_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0053_number_boolean_number_boolean convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0053_number_boolean_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053_number_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0054_number_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample214.ts', `
        function sample214(p0: [number, boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample214');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0054_number_boolean_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054_number_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0055_number_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet214.ts', `
        function sampleRet214(): [number, boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0055_number_boolean_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055_number_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0056_number_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass214.ts', `
        class SampleClass214 { field: [number, boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0056_number_boolean_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056_number_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_NUMBER_BOOLEAN_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0057_number_boolean_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline214.ts', `
        function pipeline214(p: [number, boolean, number, boolean]): [number, boolean, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0057_number_boolean_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0057_number_boolean_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057_number_boolean_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0058_number_boolean_string_number', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0058_number_boolean_string_number convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0058_number_boolean_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0059_number_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample215.ts', `
        function sample215(p0: [number, boolean, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample215');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0059_number_boolean_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0060_number_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet215.ts', `
        function sampleRet215(): [number, boolean, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0060_number_boolean_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0061_number_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass215.ts', `
        class SampleClass215 { field: [number, boolean, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0061_number_boolean_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_NUMBER_BOOLEAN_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0062_number_boolean_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline215.ts', `
        function pipeline215(p: [number, boolean, string, number]): [number, boolean, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0062_number_boolean_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0062_number_boolean_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062_number_boolean_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_NUMBER_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_NUMBER_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0063_number_boolean_string_string', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0063_number_boolean_string_string convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0063_number_boolean_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063_number_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_NUMBER_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_NUMBER_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0064_number_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample216.ts', `
        function sample216(p0: [number, boolean, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample216');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0064_number_boolean_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064_number_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_NUMBER_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_NUMBER_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0065_number_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet216.ts', `
        function sampleRet216(): [number, boolean, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0065_number_boolean_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065_number_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_NUMBER_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_NUMBER_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0066_number_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass216.ts', `
        class SampleClass216 { field: [number, boolean, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0066_number_boolean_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066_number_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_NUMBER_BOOLEAN_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_NUMBER_BOOLEAN_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0067_number_boolean_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline216.ts', `
        function pipeline216(p: [number, boolean, string, string]): [number, boolean, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0067_number_boolean_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0067_number_boolean_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067_number_boolean_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0068_number_boolean_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0068_number_boolean_string_boolean convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0068_number_boolean_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0069_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample217.ts', `
        function sample217(p0: [number, boolean, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample217');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0069_number_boolean_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0070_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet217.ts', `
        function sampleRet217(): [number, boolean, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0070_number_boolean_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet217.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0071_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass217.ts', `
        class SampleClass217 { field: [number, boolean, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0071_number_boolean_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_NUMBER_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0072_number_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline217.ts', `
        function pipeline217(p: [number, boolean, string, boolean]): [number, boolean, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0072_number_boolean_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0072_number_boolean_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline217.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072_number_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0073_number_boolean_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0073_number_boolean_boolean_number convert output non-empty");
      assert.strictEqual(result, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0073_number_boolean_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0074_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample218.ts', `
        function sample218(p0: [number, boolean, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample218');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0074_number_boolean_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0075_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet218.ts', `
        function sampleRet218(): [number, boolean, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0075_number_boolean_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet218.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0076_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass218.ts', `
        class SampleClass218 { field: [number, boolean, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0076_number_boolean_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_NUMBER_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0077_number_boolean_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline218.ts', `
        function pipeline218(p: [number, boolean, boolean, number]): [number, boolean, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0077_number_boolean_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0077_number_boolean_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline218.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077_number_boolean_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_NUMBER_BOOLEAN_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_NUMBER_BOOLEAN_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0078_number_boolean_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0078_number_boolean_boolean_string convert output non-empty");
      assert.strictEqual(result, "[number, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0078_number_boolean_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078_number_boolean_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_STRING_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_STRING_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0001_string_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet226.ts', `
        function sampleRet226(): [string, number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0001_string_number_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001_string_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_STRING_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_STRING_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0002_string_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass226.ts', `
        class SampleClass226 { field: [string, number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0002_string_number_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002_string_number_string_boolean execution error: ${String(err)}`);
    }
  });
});
