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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0001_number_number', () => {
    try {
      const result = transCkey2Dtskey('[number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0001_number_number convert output non-empty");
      assert.strictEqual(result, "[number, number]", "dts2cpp_convert_tuple_0001_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0002_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0002_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample158.ts', `
        function sample158(p0: [number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample158');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "dts2cpp_convert_tuple_0002_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0003_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0003_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet158.ts', `
        function sampleRet158(): [number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "dts2cpp_convert_tuple_0003_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0004_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0004_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass158.ts', `
        class SampleClass158 { field: [number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number]",
        "dts2cpp_convert_tuple_0004_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0005_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0005_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline158.ts', `
        function pipeline158(p: [number, number]): [number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "dts2cpp_convert_tuple_0005_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "dts2cpp_convert_tuple_0005_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0006_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0006_number_string', () => {
    try {
      const result = transCkey2Dtskey('[number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0006_number_string convert output non-empty");
      assert.strictEqual(result, "[number, string]", "dts2cpp_convert_tuple_0006_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0007_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0007_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample159.ts', `
        function sample159(p0: [number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample159');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "dts2cpp_convert_tuple_0007_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0008_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0008_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet159.ts', `
        function sampleRet159(): [number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "dts2cpp_convert_tuple_0008_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet159.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0009_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0009_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass159.ts', `
        class SampleClass159 { field: [number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string]",
        "dts2cpp_convert_tuple_0009_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0010_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0010_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline159.ts', `
        function pipeline159(p: [number, string]): [number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "dts2cpp_convert_tuple_0010_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "dts2cpp_convert_tuple_0010_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline159.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0011_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0011_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0011_number_boolean convert output non-empty");
      assert.strictEqual(result, "[number, boolean]", "dts2cpp_convert_tuple_0011_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0012_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0012_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample160.ts', `
        function sample160(p0: [number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample160');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "dts2cpp_convert_tuple_0012_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0013_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0013_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet160.ts', `
        function sampleRet160(): [number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "dts2cpp_convert_tuple_0013_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet160.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0014_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0014_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass160.ts', `
        class SampleClass160 { field: [number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean]",
        "dts2cpp_convert_tuple_0014_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0015_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0015_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline160.ts', `
        function pipeline160(p: [number, boolean]): [number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "dts2cpp_convert_tuple_0015_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "dts2cpp_convert_tuple_0015_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline160.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0016_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0016_string_number', () => {
    try {
      const result = transCkey2Dtskey('[string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0016_string_number convert output non-empty");
      assert.strictEqual(result, "[string, number]", "dts2cpp_convert_tuple_0016_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0017_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0017_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample161.ts', `
        function sample161(p0: [string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample161');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "dts2cpp_convert_tuple_0017_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0018_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0018_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet161.ts', `
        function sampleRet161(): [string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "dts2cpp_convert_tuple_0018_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0019_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0019_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass161.ts', `
        class SampleClass161 { field: [string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number]",
        "dts2cpp_convert_tuple_0019_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0020_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0020_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline161.ts', `
        function pipeline161(p: [string, number]): [string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "dts2cpp_convert_tuple_0020_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "dts2cpp_convert_tuple_0020_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0021_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0021_string_string', () => {
    try {
      const result = transCkey2Dtskey('[string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0021_string_string convert output non-empty");
      assert.strictEqual(result, "[string, string]", "dts2cpp_convert_tuple_0021_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0022_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0022_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample162.ts', `
        function sample162(p0: [string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample162');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "dts2cpp_convert_tuple_0022_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0023_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0023_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet162.ts', `
        function sampleRet162(): [string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "dts2cpp_convert_tuple_0023_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0024_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0024_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass162.ts', `
        class SampleClass162 { field: [string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string]",
        "dts2cpp_convert_tuple_0024_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0025_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0025_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline162.ts', `
        function pipeline162(p: [string, string]): [string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "dts2cpp_convert_tuple_0025_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "dts2cpp_convert_tuple_0025_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0026_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0026_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0026_string_boolean convert output non-empty");
      assert.strictEqual(result, "[string, boolean]", "dts2cpp_convert_tuple_0026_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0027_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0027_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample163.ts', `
        function sample163(p0: [string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample163');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "dts2cpp_convert_tuple_0027_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0028_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0028_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet163.ts', `
        function sampleRet163(): [string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "dts2cpp_convert_tuple_0028_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0029_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0029_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass163.ts', `
        class SampleClass163 { field: [string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean]",
        "dts2cpp_convert_tuple_0029_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0030_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0030_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline163.ts', `
        function pipeline163(p: [string, boolean]): [string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "dts2cpp_convert_tuple_0030_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "dts2cpp_convert_tuple_0030_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0031_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0031_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0031_boolean_number convert output non-empty");
      assert.strictEqual(result, "[boolean, number]", "dts2cpp_convert_tuple_0031_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0032_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0032_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample164.ts', `
        function sample164(p0: [boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample164');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "dts2cpp_convert_tuple_0032_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0033_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0033_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet164.ts', `
        function sampleRet164(): [boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "dts2cpp_convert_tuple_0033_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0034_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0034_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass164.ts', `
        class SampleClass164 { field: [boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number]",
        "dts2cpp_convert_tuple_0034_boolean_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0035_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0035_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline164.ts', `
        function pipeline164(p: [boolean, number]): [boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "dts2cpp_convert_tuple_0035_boolean_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "dts2cpp_convert_tuple_0035_boolean_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0036_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0036_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0036_boolean_string convert output non-empty");
      assert.strictEqual(result, "[boolean, string]", "dts2cpp_convert_tuple_0036_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0037_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0037_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample165.ts', `
        function sample165(p0: [boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample165');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "dts2cpp_convert_tuple_0037_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0038_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0038_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet165.ts', `
        function sampleRet165(): [boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "dts2cpp_convert_tuple_0038_boolean_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0039_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0039_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass165.ts', `
        class SampleClass165 { field: [boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string]",
        "dts2cpp_convert_tuple_0039_boolean_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0040_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0040_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline165.ts', `
        function pipeline165(p: [boolean, string]): [boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "dts2cpp_convert_tuple_0040_boolean_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "dts2cpp_convert_tuple_0040_boolean_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0041_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0041_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0041_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean]", "dts2cpp_convert_tuple_0041_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0042_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [boolean, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0042_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample166.ts', `
        function sample166(p0: [boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample166');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "dts2cpp_convert_tuple_0042_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0043_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [boolean, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0043_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet166.ts', `
        function sampleRet166(): [boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "dts2cpp_convert_tuple_0043_boolean_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0044_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [boolean, boolean];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0044_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass166.ts', `
        class SampleClass166 { field: [boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
        "dts2cpp_convert_tuple_0044_boolean_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0045_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [boolean,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0045_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline166.ts', `
        function pipeline166(p: [boolean, boolean]): [boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "dts2cpp_convert_tuple_0045_boolean_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "dts2cpp_convert_tuple_0045_boolean_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0046_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0046_number_number_number', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0046_number_number_number convert output non-empty");
      assert.strictEqual(result, "[number, number, number]",
        "dts2cpp_convert_tuple_0046_number_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0047_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0047_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample167.ts', `
        function sample167(p0: [number, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample167');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "dts2cpp_convert_tuple_0047_number_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0048_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0048_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet167.ts', `
        function sampleRet167(): [number, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "dts2cpp_convert_tuple_0048_number_number_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0049_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, number, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0049_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass167.ts', `
        class SampleClass167 { field: [number, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
        "dts2cpp_convert_tuple_0049_number_number_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_NUMBER_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0050_NUMBER_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0050_number_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline167.ts', `
        function pipeline167(p: [number, number, number]): [number, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "dts2cpp_convert_tuple_0050_number_number_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "dts2cpp_convert_tuple_0050_number_number_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050_number_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0051_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0051_number_number_string', () => {
    try {
      const result = transCkey2Dtskey('[number, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0051_number_number_string convert output non-empty");
      assert.strictEqual(result, "[number, number, string]",
        "dts2cpp_convert_tuple_0051_number_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0052_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0052_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample168.ts', `
        function sample168(p0: [number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample168');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string]",
        "dts2cpp_convert_tuple_0052_number_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0053_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0053_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet168.ts', `
        function sampleRet168(): [number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string]",
        "dts2cpp_convert_tuple_0053_number_number_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet168.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0054_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, number, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0054_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass168.ts', `
        class SampleClass168 { field: [number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
        "dts2cpp_convert_tuple_0054_number_number_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_NUMBER_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0055_NUMBER_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0055_number_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline168.ts', `
        function pipeline168(p: [number, number, string]): [number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string]",
        "dts2cpp_convert_tuple_0055_number_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string]",
        "dts2cpp_convert_tuple_0055_number_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline168.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055_number_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0056_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0056_number_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0056_number_number_boolean convert output non-empty");
      assert.strictEqual(result, "[number, number, boolean]",
        "dts2cpp_convert_tuple_0056_number_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0057_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0057_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample169.ts', `
        function sample169(p0: [number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample169');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean]",
        "dts2cpp_convert_tuple_0057_number_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0058_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0058_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet169.ts', `
        function sampleRet169(): [number, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean]",
        "dts2cpp_convert_tuple_0058_number_number_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0059_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0059_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass169.ts', `
        class SampleClass169 { field: [number, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean]",
        "dts2cpp_convert_tuple_0059_number_number_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_NUMBER_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0060_NUMBER_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, number,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0060_number_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline169.ts', `
        function pipeline169(p: [number, number, boolean]): [number, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean]",
        "dts2cpp_convert_tuple_0060_number_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean]",
        "dts2cpp_convert_tuple_0060_number_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060_number_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0061_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0061_number_string_number', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0061_number_string_number convert output non-empty");
      assert.strictEqual(result, "[number, string, number]",
        "dts2cpp_convert_tuple_0061_number_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0062_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0062_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample170.ts', `
        function sample170(p0: [number, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample170');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number]",
        "dts2cpp_convert_tuple_0062_number_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0063_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0063_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet170.ts', `
        function sampleRet170(): [number, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number]",
        "dts2cpp_convert_tuple_0063_number_string_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0064_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, number];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0064_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass170.ts', `
        class SampleClass170 { field: [number, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number]",
        "dts2cpp_convert_tuple_0064_number_string_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_NUMBER_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0065_NUMBER_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0065_number_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline170.ts', `
        function pipeline170(p: [number, string, number]): [number, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number]",
        "dts2cpp_convert_tuple_0065_number_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number]",
        "dts2cpp_convert_tuple_0065_number_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065_number_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0066_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0066_number_string_string', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0066_number_string_string convert output non-empty");
      assert.strictEqual(result, "[number, string, string]",
        "dts2cpp_convert_tuple_0066_number_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0067_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0067_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample171.ts', `
        function sample171(p0: [number, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample171');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string]",
        "dts2cpp_convert_tuple_0067_number_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0068_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0068_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet171.ts', `
        function sampleRet171(): [number, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string]",
        "dts2cpp_convert_tuple_0068_number_string_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0069_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string, string];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0069_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass171.ts', `
        class SampleClass171 { field: [number, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string]",
        "dts2cpp_convert_tuple_0069_number_string_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_NUMBER_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0070_NUMBER_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0070_number_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline171.ts', `
        function pipeline171(p: [number, string, string]): [number, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string]",
        "dts2cpp_convert_tuple_0070_number_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string]",
        "dts2cpp_convert_tuple_0070_number_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070_number_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0071_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0071_number_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0071_number_string_boolean convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean]",
        "dts2cpp_convert_tuple_0071_number_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0072_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0072_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample172.ts', `
        function sample172(p0: [number, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample172');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean]",
        "dts2cpp_convert_tuple_0072_number_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0073_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0073_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet172.ts', `
        function sampleRet172(): [number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean]",
        "dts2cpp_convert_tuple_0073_number_string_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet172.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0074_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: class-field convert; type [number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0074_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass172.ts', `
        class SampleClass172 { field: [number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean]",
        "dts2cpp_convert_tuple_0074_number_string_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_NUMBER_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0075_NUMBER_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [number, string,
   *            boolean]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0075_number_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline172.ts', `
        function pipeline172(p: [number, string, boolean]): [number, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean]",
        "dts2cpp_convert_tuple_0075_number_string_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean]",
        "dts2cpp_convert_tuple_0075_number_string_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline172.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075_number_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0076_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: baseline type-string convert; type [number,
   *            boolean, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0076_number_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0076_number_boolean_number convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number]",
        "dts2cpp_convert_tuple_0076_number_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0077_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-param convert; type [number, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0077_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample173.ts', `
        function sample173(p0: [number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample173');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number]",
        "dts2cpp_convert_tuple_0077_number_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_NUMBER_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0078_NUMBER_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/tuple: function-return convert; type [number, boolean,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0078_number_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet173.ts', `
        function sampleRet173(): [number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number]",
        "dts2cpp_convert_tuple_0078_number_boolean_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet173.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet173') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078_number_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_STRING_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_TUPLE_0001_STRING_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/tuple: parse-convert-gen pipeline; type [string, string,
   *            string]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_tuple_0001_string_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline180.ts', `
        function pipeline180(p: [string, string, string]): [string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string]",
        "dts2cpp_convert_tuple_0001_string_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string]",
        "dts2cpp_convert_tuple_0001_string_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline180.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline180') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001_string_string_string execution error: ${String(err)}`);
    }
  });
});
