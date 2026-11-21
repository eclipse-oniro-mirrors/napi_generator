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

suite('Stability_DTS2CPP_CONVERT_COMBO_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_ID_NUMBER_NAME_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_ID_NUMBER_NAME_STRING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { id: number; name:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0008_id_number_name_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample329.ts', `
        function sample329(p0: { id: number; name: string }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample329');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string }",
        "dts2cpp_convert_combo_0008_id_number_name_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0008_id_number_name_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_SAMPLERET329
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_SAMPLERET329
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { id: number; name:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0009_sampleret329', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet329.ts', `
        function sampleRet329(): { id: number; name: string } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet329');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number; name: string }",
        "dts2cpp_convert_combo_0009_sampleret329 return convert output");
      const generated = generateFunctions(converted, 'sampleRet329.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet329') || generated.napiCppContent.includes('sampleRet329')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet329'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0009_sampleret329 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_SAMPLECLASS329
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_SAMPLECLASS329
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { id: number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0010_sampleclass329', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass329.ts', `
        class SampleClass329 { field: { id: number; name: string }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass329');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number; name: string }",
        "dts2cpp_convert_combo_0010_sampleclass329 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0010_sampleclass329 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_ID_NUMBER_NAME_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_ID_NUMBER_NAME_STRING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { id: number;
   *            name: string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0011_id_number_name_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline329.ts', `
        function pipeline329(p: { id: number; name: string }): { id: number; name: string } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline329');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number; name: string }",
        "dts2cpp_convert_combo_0011_id_number_name_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number; name: string }",
        "dts2cpp_convert_combo_0011_id_number_name_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline329.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline329') || generated.napiCppContent.includes('pipeline329')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline329'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0011_id_number_name_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { a: number; b:
   *            string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0012_a_number_b_string_c_boolean', () => {
    try {
      const result = transCkey2Dtskey('{ a: number; b: string; c: boolean }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0012_a_number_b_string_c_boolean convert output non-empty");
      assert.strictEqual(result, "{ a: number; b: string; c: boolean }",
        "dts2cpp_convert_combo_0012_a_number_b_string_c_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0012_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { a: number; b:
   *            string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0013_a_number_b_string_c_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample364.ts', `
        function sample364(p0: { a: number; b: string; c: boolean }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample364');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean }",
        "dts2cpp_convert_combo_0013_a_number_b_string_c_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0013_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_SAMPLERET364
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_SAMPLERET364
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { a: number; b:
   *            string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0014_sampleret364', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet364.ts', `
        function sampleRet364(): { a: number; b: string; c: boolean } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet364');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: string; c: boolean }",
        "dts2cpp_convert_combo_0014_sampleret364 return convert output");
      const generated = generateFunctions(converted, 'sampleRet364.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet364') || generated.napiCppContent.includes('sampleRet364')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet364'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0014_sampleret364 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_SAMPLECLASS364
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_SAMPLECLASS364
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { a: number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0015_sampleclass364', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass364.ts', `
        class SampleClass364 { field: { a: number; b: string; c: boolean }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass364');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: string; c: boolean }",
        "dts2cpp_convert_combo_0015_sampleclass364 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0015_sampleclass364 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_A_NUMBER_B_STRING_C_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { a: number; b:
   *            string; c: boolean }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0016_a_number_b_string_c_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline364.ts', `
        function pipeline364(p: { a: number; b: string; c: boolean }):
        { a: number; b: string; c: boolean } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline364');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: string; c: boolean }",
        "dts2cpp_convert_combo_0016_a_number_b_string_c_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: string; c: boolean }",
        "dts2cpp_convert_combo_0016_a_number_b_string_c_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline364.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline364') || generated.napiCppContent.includes('pipeline364')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline364'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0016_a_number_b_string_c_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_A_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_A_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { a: { b: number
   *            } }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0017_a_b_number', () => {
    try {
      const result = transCkey2Dtskey('{ a: { b: number } }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0017_a_b_number convert output non-empty");
      assert.strictEqual(result, "{ a: { b: number } }", "dts2cpp_convert_combo_0017_a_b_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0017_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_A_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_A_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { a: { b: number } };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0018_a_b_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample365.ts', `
        function sample365(p0: { a: { b: number } }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample365');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } }",
        "dts2cpp_convert_combo_0018_a_b_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0018_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_SAMPLERET365
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_SAMPLERET365
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { a: { b: number } };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0019_sampleret365', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet365.ts', `
        function sampleRet365(): { a: { b: number } } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet365');
      assert.strictEqual(converted.funcs[0].returns, "{ a: { b: number } }",
        "dts2cpp_convert_combo_0019_sampleret365 return convert output");
      const generated = generateFunctions(converted, 'sampleRet365.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet365') || generated.napiCppContent.includes('sampleRet365')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet365'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0019_sampleret365 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_SAMPLECLASS365
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_SAMPLECLASS365
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { a: { b: number } };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0020_sampleclass365', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass365.ts', `
        class SampleClass365 { field: { a: { b: number } }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass365');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: { b: number } }",
        "dts2cpp_convert_combo_0020_sampleclass365 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0020_sampleclass365 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_A_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_A_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { a: { b: number }
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0021_a_b_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline365.ts', `
        function pipeline365(p: { a: { b: number } }): { a: { b: number } } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline365');
      assert.strictEqual(converted.funcs[0].returns, "{ a: { b: number } }",
        "dts2cpp_convert_combo_0021_a_b_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: { b: number } }",
        "dts2cpp_convert_combo_0021_a_b_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline365.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline365') || generated.napiCppContent.includes('pipeline365')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline365'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0021_a_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_VARIANT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_VARIANT
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type 中文类型;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0022_variant', () => {
    try {
      const result = transCkey2Dtskey('中文类型');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0022_variant convert output non-empty");
      assert.strictEqual(result, "中文类型", "dts2cpp_convert_combo_0022_variant convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0022_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_VARIANT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_VARIANT
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0023_variant', () => {
    try {
      const converted = transParseObj(doParseTs('sample367.ts', `function sample367(p0: 中文类型): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample367');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型",
        "dts2cpp_convert_combo_0023_variant param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0023_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_SAMPLERET367
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_SAMPLERET367
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0024_sampleret367', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet367.ts', `
        function sampleRet367(): 中文类型 { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet367');
      assert.strictEqual(converted.funcs[0].returns, "中文类型",
        "dts2cpp_convert_combo_0024_sampleret367 return convert output");
      const generated = generateFunctions(converted, 'sampleRet367.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet367') || generated.napiCppContent.includes('sampleRet367')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet367'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0024_sampleret367 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_SAMPLECLASS367
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_SAMPLECLASS367
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type 中文类型; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0025_sampleclass367', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass367.ts', `
        class SampleClass367 { field: 中文类型; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass367');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "中文类型",
        "dts2cpp_convert_combo_0025_sampleclass367 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0025_sampleclass367 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_VARIANT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_VARIANT
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type 中文类型; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0026_variant', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline367.ts', `function pipeline367(p: 中文类型): 中文类型 { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline367');
      assert.strictEqual(converted.funcs[0].returns, "中文类型",
        "dts2cpp_convert_combo_0026_variant pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "中文类型",
        "dts2cpp_convert_combo_0026_variant pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline367.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline367') || generated.napiCppContent.includes('pipeline367')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline367'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0026_variant execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_ELEMENT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_ELEMENT
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Element;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0027_element', () => {
    try {
      const result = transCkey2Dtskey('Element');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0027_element convert output non-empty");
      assert.strictEqual(result, "Element", "dts2cpp_convert_combo_0027_element convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0027_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_ELEMENT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_ELEMENT
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Element; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0028_element', () => {
    try {
      const converted = transParseObj(doParseTs('sample369.ts', `function sample369(p0: Element): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample369');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Element",
        "dts2cpp_convert_combo_0028_element param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0028_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_SAMPLERET369
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_SAMPLERET369
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Element; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0029_sampleret369', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet369.ts', `
        function sampleRet369(): Element { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet369');
      assert.strictEqual(converted.funcs[0].returns, "Element",
        "dts2cpp_convert_combo_0029_sampleret369 return convert output");
      const generated = generateFunctions(converted, 'sampleRet369.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet369') || generated.napiCppContent.includes('sampleRet369')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet369'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0029_sampleret369 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_SAMPLECLASS369
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_SAMPLECLASS369
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Element; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0030_sampleclass369', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass369.ts', `
        class SampleClass369 { field: Element; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass369');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Element",
        "dts2cpp_convert_combo_0030_sampleclass369 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0030_sampleclass369 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_ELEMENT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_ELEMENT
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Element;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0031_element', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline369.ts', `
        function pipeline369(p: Element): Element { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline369');
      assert.strictEqual(converted.funcs[0].returns, "Element",
        "dts2cpp_convert_combo_0031_element pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Element",
        "dts2cpp_convert_combo_0031_element pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline369.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline369') || generated.napiCppContent.includes('pipeline369')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline369'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0031_element execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_NS_BAR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_NS_BAR
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type ns.Bar;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0032_ns_bar', () => {
    try {
      const result = transCkey2Dtskey('ns.Bar');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0032_ns_bar convert output non-empty");
      assert.strictEqual(result, "ns.Bar", "dts2cpp_convert_combo_0032_ns_bar convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0032_ns_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_NS_BAR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_NS_BAR
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type ns.Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0033_ns_bar', () => {
    try {
      const converted = transParseObj(doParseTs('sample379.ts', `function sample379(p0: ns.Bar): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample379');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar",
        "dts2cpp_convert_combo_0033_ns_bar param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0033_ns_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_SAMPLERET379
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_SAMPLERET379
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type ns.Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0034_sampleret379', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet379.ts', `
        function sampleRet379(): ns.Bar { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet379');
      assert.strictEqual(converted.funcs[0].returns, "ns.Bar",
        "dts2cpp_convert_combo_0034_sampleret379 return convert output");
      const generated = generateFunctions(converted, 'sampleRet379.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet379') || generated.napiCppContent.includes('sampleRet379')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet379'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0034_sampleret379 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_SAMPLECLASS379
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_SAMPLECLASS379
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type ns.Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0035_sampleclass379', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass379.ts', `
        class SampleClass379 { field: ns.Bar; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass379');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "ns.Bar",
        "dts2cpp_convert_combo_0035_sampleclass379 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0035_sampleclass379 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_NS_BAR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_NS_BAR
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type ns.Bar;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0036_ns_bar', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline379.ts', `
        function pipeline379(p: ns.Bar): ns.Bar { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline379');
      assert.strictEqual(converted.funcs[0].returns, "ns.Bar",
        "dts2cpp_convert_combo_0036_ns_bar pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ns.Bar",
        "dts2cpp_convert_combo_0036_ns_bar pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline379.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline379') || generated.napiCppContent.includes('pipeline379')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline379'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0036_ns_bar execution error: ${err}`);
    }
  });
});
