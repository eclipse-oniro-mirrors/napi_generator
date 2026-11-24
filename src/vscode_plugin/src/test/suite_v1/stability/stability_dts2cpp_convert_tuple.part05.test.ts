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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0003_boolean_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass249.ts', `
        class SampleClass249 { field: [boolean, number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0003_boolean_number_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_BOOLEAN_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0004_boolean_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline249.ts', `
        function pipeline249(p: [boolean, number, number, string]): [boolean, number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0004_boolean_number_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0004_boolean_number_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline249.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004_boolean_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0005_boolean_number_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0005_boolean_number_number_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0005_boolean_number_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0006_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample250.ts', `
        function sample250(p0: [boolean, number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample250');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0006_boolean_number_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0007_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet250.ts', `
        function sampleRet250(): [boolean, number, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0007_boolean_number_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet250.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0008_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass250.ts', `
        class SampleClass250 { field: [boolean, number, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0008_boolean_number_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_BOOLEAN_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0009_boolean_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline250.ts', `
        function pipeline250(p: [boolean, number, number, boolean]): [boolean, number, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0009_boolean_number_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0009_boolean_number_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline250.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009_boolean_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0010_boolean_number_string_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0010_boolean_number_string_number convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0010_boolean_number_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0011_boolean_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample251.ts', `
        function sample251(p0: [boolean, number, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample251');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0011_boolean_number_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0012_boolean_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet251.ts', `
        function sampleRet251(): [boolean, number, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0012_boolean_number_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet251.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0013_boolean_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass251.ts', `
        class SampleClass251 { field: [boolean, number, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0013_boolean_number_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_BOOLEAN_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0014_boolean_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline251.ts', `
        function pipeline251(p: [boolean, number, string, number]): [boolean, number, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0014_boolean_number_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0014_boolean_number_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline251.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014_boolean_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0015_boolean_number_string_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0015_boolean_number_string_string convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0015_boolean_number_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0016_boolean_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample252.ts', `
        function sample252(p0: [boolean, number, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample252');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0016_boolean_number_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0017_boolean_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet252.ts', `
        function sampleRet252(): [boolean, number, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0017_boolean_number_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet252.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0018_boolean_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass252.ts', `
        class SampleClass252 { field: [boolean, number, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0018_boolean_number_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_BOOLEAN_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_BOOLEAN_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0019_boolean_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline252.ts', `
        function pipeline252(p: [boolean, number, string, string]): [boolean, number, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0019_boolean_number_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0019_boolean_number_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline252.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019_boolean_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0020_boolean_number_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0020_boolean_number_string_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0020_boolean_number_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0021_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample253.ts', `
        function sample253(p0: [boolean, number, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample253');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0021_boolean_number_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0022_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet253.ts', `
        function sampleRet253(): [boolean, number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0022_boolean_number_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet253.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0023_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass253.ts', `
        class SampleClass253 { field: [boolean, number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0023_boolean_number_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_BOOLEAN_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0024_boolean_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline253.ts', `
        function pipeline253(p: [boolean, number, string, boolean]): [boolean, number, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0024_boolean_number_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0024_boolean_number_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline253.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024_boolean_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0025_boolean_number_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0025_boolean_number_boolean_number convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0025_boolean_number_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0026_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample254.ts', `
        function sample254(p0: [boolean, number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample254');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0026_boolean_number_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0027_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet254.ts', `
        function sampleRet254(): [boolean, number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0027_boolean_number_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet254.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0028_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass254.ts', `
        class SampleClass254 { field: [boolean, number, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0028_boolean_number_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_BOOLEAN_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0029_boolean_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline254.ts', `
        function pipeline254(p: [boolean, number, boolean, number]): [boolean, number, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0029_boolean_number_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0029_boolean_number_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline254.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029_boolean_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0030_boolean_number_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0030_boolean_number_boolean_string convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0030_boolean_number_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0031_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample255.ts', `
        function sample255(p0: [boolean, number, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample255');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0031_boolean_number_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0032_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet255.ts', `
        function sampleRet255(): [boolean, number, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0032_boolean_number_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet255.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0033_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass255.ts', `
        class SampleClass255 { field: [boolean, number, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0033_boolean_number_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0034_boolean_number_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline255.ts', `
        function pipeline255(p: [boolean, number, boolean, string]): [boolean, number, boolean, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0034_boolean_number_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0034_boolean_number_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline255.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034_boolean_number_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number, boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0035_boolean_number_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0035_boolean_number_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0035_boolean_number_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0036_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample256.ts', `
        function sample256(p0: [boolean, number, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample256');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0036_boolean_number_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0037_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet256.ts', `
        function sampleRet256(): [boolean, number, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0037_boolean_number_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet256.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0038_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass256.ts', `
        class SampleClass256 { field: [boolean, number, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0038_boolean_number_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_BOOLEAN_NUMBER_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number,
   *            boolean, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0039_boolean_number_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline256.ts', `
        function pipeline256(p: [boolean, number, boolean, boolean]): [boolean, number, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0039_boolean_number_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0039_boolean_number_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline256.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039_boolean_number_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0040_boolean_string_number_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0040_boolean_string_number_number convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0040_boolean_string_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0041_boolean_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample257.ts', `
        function sample257(p0: [boolean, string, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample257');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0041_boolean_string_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0042_boolean_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet257.ts', `
        function sampleRet257(): [boolean, string, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0042_boolean_string_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet257.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0043_boolean_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass257.ts', `
        class SampleClass257 { field: [boolean, string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0043_boolean_string_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_BOOLEAN_STRING_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            number, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0044_boolean_string_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline257.ts', `
        function pipeline257(p: [boolean, string, number, number]): [boolean, string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0044_boolean_string_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0044_boolean_string_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline257.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044_boolean_string_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_BOOLEAN_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_BOOLEAN_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0045_boolean_string_number_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0045_boolean_string_number_string convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0045_boolean_string_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045_boolean_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_BOOLEAN_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_BOOLEAN_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0046_boolean_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample258.ts', `
        function sample258(p0: [boolean, string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample258');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0046_boolean_string_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046_boolean_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_BOOLEAN_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_BOOLEAN_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0047_boolean_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet258.ts', `
        function sampleRet258(): [boolean, string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0047_boolean_string_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet258.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047_boolean_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_BOOLEAN_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_BOOLEAN_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0048_boolean_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass258.ts', `
        class SampleClass258 { field: [boolean, string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0048_boolean_string_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048_boolean_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_BOOLEAN_STRING_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_BOOLEAN_STRING_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            number, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0049_boolean_string_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline258.ts', `
        function pipeline258(p: [boolean, string, number, string]): [boolean, string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0049_boolean_string_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0049_boolean_string_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline258.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049_boolean_string_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0050_boolean_string_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0050_boolean_string_number_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0050_boolean_string_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050_boolean_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0051_boolean_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample259.ts', `
        function sample259(p0: [boolean, string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample259');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0051_boolean_string_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051_boolean_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0052_boolean_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet259.ts', `
        function sampleRet259(): [boolean, string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0052_boolean_string_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet259.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052_boolean_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0053_boolean_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass259.ts', `
        class SampleClass259 { field: [boolean, string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0053_boolean_string_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053_boolean_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_BOOLEAN_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            number, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0054_boolean_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline259.ts', `
        function pipeline259(p: [boolean, string, number, boolean]): [boolean, string, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0054_boolean_string_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0054_boolean_string_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline259.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054_boolean_string_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_BOOLEAN_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_BOOLEAN_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0055_boolean_string_string_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0055_boolean_string_string_number convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0055_boolean_string_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055_boolean_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_BOOLEAN_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_BOOLEAN_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0056_boolean_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample260.ts', `
        function sample260(p0: [boolean, string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample260');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0056_boolean_string_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056_boolean_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_BOOLEAN_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_BOOLEAN_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0057_boolean_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet260.ts', `
        function sampleRet260(): [boolean, string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0057_boolean_string_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet260.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057_boolean_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_BOOLEAN_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_BOOLEAN_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0058_boolean_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass260.ts', `
        class SampleClass260 { field: [boolean, string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0058_boolean_string_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058_boolean_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_BOOLEAN_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_BOOLEAN_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0059_boolean_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline260.ts', `
        function pipeline260(p: [boolean, string, string, number]): [boolean, string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0059_boolean_string_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0059_boolean_string_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline260.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059_boolean_string_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0060_boolean_string_string_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0060_boolean_string_string_string convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0060_boolean_string_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0061_boolean_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample261.ts', `
        function sample261(p0: [boolean, string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample261');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0061_boolean_string_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0062_boolean_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet261.ts', `
        function sampleRet261(): [boolean, string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0062_boolean_string_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0063_boolean_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass261.ts', `
        class SampleClass261 { field: [boolean, string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0063_boolean_string_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_BOOLEAN_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_BOOLEAN_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0064_boolean_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline261.ts', `
        function pipeline261(p: [boolean, string, string, string]): [boolean, string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0064_boolean_string_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0064_boolean_string_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064_boolean_string_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0065_boolean_string_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0065_boolean_string_string_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0065_boolean_string_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0066_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample262.ts', `
        function sample262(p0: [boolean, string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample262');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0066_boolean_string_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0067_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet262.ts', `
        function sampleRet262(): [boolean, string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0067_boolean_string_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet262.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0068_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass262.ts', `
        class SampleClass262 { field: [boolean, string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0068_boolean_string_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_BOOLEAN_STRING_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0069_boolean_string_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline262.ts', `
        function pipeline262(p: [boolean, string, string, boolean]): [boolean, string, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0069_boolean_string_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0069_boolean_string_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline262.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069_boolean_string_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0070_boolean_string_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0070_boolean_string_boolean_number convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0070_boolean_string_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0071_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample263.ts', `
        function sample263(p0: [boolean, string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample263');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0071_boolean_string_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0072_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet263.ts', `
        function sampleRet263(): [boolean, string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0072_boolean_string_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0073_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass263.ts', `
        class SampleClass263 { field: [boolean, string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0073_boolean_string_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_BOOLEAN_STRING_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0074_boolean_string_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline263.ts', `
        function pipeline263(p: [boolean, string, boolean, number]): [boolean, string, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0074_boolean_string_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0074_boolean_string_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074_boolean_string_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string, boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0075_boolean_string_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0075_boolean_string_boolean_string convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0075_boolean_string_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075_boolean_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0076_boolean_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample264.ts', `
        function sample264(p0: [boolean, string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample264');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0076_boolean_string_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076_boolean_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0077_boolean_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet264.ts', `
        function sampleRet264(): [boolean, string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0077_boolean_string_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet264.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077_boolean_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_BOOLEAN_STRING_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string,
   *            boolean, string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0078_boolean_string_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass264.ts', `
        class SampleClass264 { field: [boolean, string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0078_boolean_string_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078_boolean_string_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_BOOLEAN_BOOLEAN_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, boolean,
   *            string, boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0001_boolean_boolean_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline271.ts', `
        function pipeline271(p: [boolean, boolean, string, boolean]): [boolean, boolean, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0001_boolean_boolean_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0001_boolean_boolean_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline271.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline271') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001_boolean_boolean_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_BOOLEAN_BOOLEAN_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            boolean, boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0002_boolean_boolean_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0002_boolean_boolean_boolean_number convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0002_boolean_boolean_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002_boolean_boolean_boolean_number execution error: ${String(err)}`);
    }
  });
});
