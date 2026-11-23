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

suite('Stability_DTS2CPP_CONVERT_COMBO_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_UINT16ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_UINT16ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Uint16Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0078_uint16array', () => {
    try {
      const result = transCkey2Dtskey('Uint16Array');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0078_uint16array convert output non-empty");
      assert.strictEqual(result, "Uint16Array", "dts2cpp_convert_combo_0078_uint16array convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0078_uint16array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_WEAKSET_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_WEAKSET_OBJECT
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type WeakSet<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0006_weakset_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample207.ts', `
        function sample207(p0: WeakSet<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample207');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<object>",
        "dts2cpp_convert_combo_0006_weakset_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0006_weakset_object execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_SAMPLERET207
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_SAMPLERET207
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type WeakSet<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0007_sampleret207', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet207.ts', `
        function sampleRet207(): WeakSet<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet207');
      assert.strictEqual(converted.funcs[0].returns, "WeakSet<object>",
        "dts2cpp_convert_combo_0007_sampleret207 return convert output");
      const generated = generateFunctions(converted, 'sampleRet207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet207') || generated.napiCppContent.includes('sampleRet207')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet207'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0007_sampleret207 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_SAMPLECLASS207
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_SAMPLECLASS207
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type WeakSet<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0008_sampleclass207', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass207.ts', `
        class SampleClass207 { field: WeakSet<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass207');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "WeakSet<object>",
        "dts2cpp_convert_combo_0008_sampleclass207 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0008_sampleclass207 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_WEAKSET_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_WEAKSET_OBJECT
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type WeakSet<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0009_weakset_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline207.ts', `
        function pipeline207(p: WeakSet<object>): WeakSet<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline207');
      assert.strictEqual(converted.funcs[0].returns, "WeakSet<object>",
        "dts2cpp_convert_combo_0009_weakset_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakSet<object>",
        "dts2cpp_convert_combo_0009_weakset_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline207') || generated.napiCppContent.includes('pipeline207')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline207'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0009_weakset_object execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_M_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_M_VOID
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0010_m_void', () => {
    try {
      const result = transCkey2Dtskey('{ m(): void }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0010_m_void convert output non-empty");
      assert.strictEqual(result, "{ m(): void }", "dts2cpp_convert_combo_0010_m_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0010_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_M_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_M_VOID
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0011_m_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample208.ts', `
        function sample208(p0: { m(): void }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample208');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void }",
        "dts2cpp_convert_combo_0011_m_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0011_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_SAMPLERET208
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_SAMPLERET208
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0012_sampleret208', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet208.ts', `
        function sampleRet208(): { m(): void } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet208');
      assert.strictEqual(converted.funcs[0].returns, "{ m(): void }",
        "dts2cpp_convert_combo_0012_sampleret208 return convert output");
      const generated = generateFunctions(converted, 'sampleRet208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet208') || generated.napiCppContent.includes('sampleRet208')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet208'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0012_sampleret208 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_SAMPLECLASS208
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_SAMPLECLASS208
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0013_sampleclass208', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass208.ts', `
        class SampleClass208 { field: { m(): void }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass208');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ m(): void }",
        "dts2cpp_convert_combo_0013_sampleclass208 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0013_sampleclass208 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_M_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_M_VOID
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { m(): void };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0014_m_void', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline208.ts', `
        function pipeline208(p: { m(): void }): { m(): void } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline208');
      assert.strictEqual(converted.funcs[0].returns, "{ m(): void }",
        "dts2cpp_convert_combo_0014_m_void pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ m(): void }",
        "dts2cpp_convert_combo_0014_m_void pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline208') || generated.napiCppContent.includes('pipeline208')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline208'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0014_m_void execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_A_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_A_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0015_a_number', () => {
    try {
      const result = transCkey2Dtskey('{ a: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0015_a_number convert output non-empty");
      assert.strictEqual(result, "{ a: number }", "dts2cpp_convert_combo_0015_a_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0015_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_A_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_A_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0016_a_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample214.ts', `
        function sample214(p0: { a: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample214');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number }",
        "dts2cpp_convert_combo_0016_a_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0016_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_SAMPLERET214
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_SAMPLERET214
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0017_sampleret214', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet214.ts', `
        function sampleRet214(): { a: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet214');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number }",
        "dts2cpp_convert_combo_0017_sampleret214 return convert output");
      const generated = generateFunctions(converted, 'sampleRet214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet214') || generated.napiCppContent.includes('sampleRet214')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet214'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0017_sampleret214 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_SAMPLECLASS214
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_SAMPLECLASS214
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0018_sampleclass214', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass214.ts', `
        class SampleClass214 { field: { a: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass214');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number }",
        "dts2cpp_convert_combo_0018_sampleclass214 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0018_sampleclass214 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_A_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_A_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { a: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0019_a_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline214.ts', `
        function pipeline214(p: { a: number }): { a: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline214');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number }",
        "dts2cpp_convert_combo_0019_a_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number }",
        "dts2cpp_convert_combo_0019_a_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline214') || generated.napiCppContent.includes('pipeline214')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline214'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0019_a_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { a: number; b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0020_a_number_b_number', () => {
    try {
      const result = transCkey2Dtskey('{ a: number; b: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0020_a_number_b_number convert output non-empty");
      assert.strictEqual(result, "{ a: number; b: number }",
        "dts2cpp_convert_combo_0020_a_number_b_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0020_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { a: number; b: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0021_a_number_b_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample215.ts', `
        function sample215(p0: { a: number; b: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample215');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number }",
        "dts2cpp_convert_combo_0021_a_number_b_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0021_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_SAMPLERET215
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_SAMPLERET215
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { a: number; b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0022_sampleret215', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet215.ts', `
        function sampleRet215(): { a: number; b: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet215');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number }",
        "dts2cpp_convert_combo_0022_sampleret215 return convert output");
      const generated = generateFunctions(converted, 'sampleRet215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet215') || generated.napiCppContent.includes('sampleRet215')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet215'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0022_sampleret215 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_SAMPLECLASS215
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_SAMPLECLASS215
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { a: number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0023_sampleclass215', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass215.ts', `
        class SampleClass215 { field: { a: number; b: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass215');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number }",
        "dts2cpp_convert_combo_0023_sampleclass215 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0023_sampleclass215 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_A_NUMBER_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_A_NUMBER_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { a: number; b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0024_a_number_b_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline215.ts', `
        function pipeline215(p: { a: number; b: number }): { a: number; b: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline215');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number }",
        "dts2cpp_convert_combo_0024_a_number_b_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number }",
        "dts2cpp_convert_combo_0024_a_number_b_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline215') || generated.napiCppContent.includes('pipeline215')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline215'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0024_a_number_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_A
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_A
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type A; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0025_a', () => {
    try {
      const result = transCkey2Dtskey('A');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0025_a convert output non-empty");
      assert.strictEqual(result, "A", "dts2cpp_convert_combo_0025_a convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0025_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_A
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_A
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type A; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0026_a', () => {
    try {
      const converted = transParseObj(doParseTs('sample220.ts', `function sample220(p0: A): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample220');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "A",
        "dts2cpp_convert_combo_0026_a param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0026_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_SAMPLERET220
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_SAMPLERET220
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type A; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0027_sampleret220', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet220.ts', `
        function sampleRet220(): A { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet220');
      assert.strictEqual(converted.funcs[0].returns, "A",
        "dts2cpp_convert_combo_0027_sampleret220 return convert output");
      const generated = generateFunctions(converted, 'sampleRet220.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet220') || generated.napiCppContent.includes('sampleRet220')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet220'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0027_sampleret220 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_SAMPLECLASS220
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_SAMPLECLASS220
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type A; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0028_sampleclass220', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass220.ts', `
        class SampleClass220 { field: A; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass220');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "A",
        "dts2cpp_convert_combo_0028_sampleclass220 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0028_sampleclass220 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_A
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_A
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type A; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0029_a', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline220.ts', `function pipeline220(p: A): A { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline220');
      assert.strictEqual(converted.funcs[0].returns, "A",
        "dts2cpp_convert_combo_0029_a pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "A",
        "dts2cpp_convert_combo_0029_a pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline220.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline220') || generated.napiCppContent.includes('pipeline220')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline220'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0029_a execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_B
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_B
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type B; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0030_b', () => {
    try {
      const result = transCkey2Dtskey('B');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0030_b convert output non-empty");
      assert.strictEqual(result, "B", "dts2cpp_convert_combo_0030_b convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0030_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_B
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_B
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type B; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0031_b', () => {
    try {
      const converted = transParseObj(doParseTs('sample221.ts', `function sample221(p0: B): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample221');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "B",
        "dts2cpp_convert_combo_0031_b param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0031_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_SAMPLERET221
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_SAMPLERET221
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type B; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0032_sampleret221', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet221.ts', `
        function sampleRet221(): B { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet221');
      assert.strictEqual(converted.funcs[0].returns, "B",
        "dts2cpp_convert_combo_0032_sampleret221 return convert output");
      const generated = generateFunctions(converted, 'sampleRet221.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet221') || generated.napiCppContent.includes('sampleRet221')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet221'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0032_sampleret221 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_SAMPLECLASS221
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_SAMPLECLASS221
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type B; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0033_sampleclass221', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass221.ts', `
        class SampleClass221 { field: B; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass221');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "B",
        "dts2cpp_convert_combo_0033_sampleclass221 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0033_sampleclass221 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_B
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_B
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type B; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0034_b', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline221.ts', `function pipeline221(p: B): B { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline221');
      assert.strictEqual(converted.funcs[0].returns, "B",
        "dts2cpp_convert_combo_0034_b pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "B",
        "dts2cpp_convert_combo_0034_b pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline221.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline221') || generated.napiCppContent.includes('pipeline221')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline221'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0034_b execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_STRING_BRAND_X
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_STRING_BRAND_X
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type string & {
   *            brand: "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0035_string_brand_x', () => {
    try {
      const result = transCkey2Dtskey('string & { brand: "x" }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0035_string_brand_x convert output non-empty");
      assert.strictEqual(result, "string & { brand: \"x\" }",
        "dts2cpp_convert_combo_0035_string_brand_x convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0035_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_STRING_BRAND_X
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_STRING_BRAND_X
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type string & { brand: "x"
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0036_string_brand_x', () => {
    try {
      const converted = transParseObj(doParseTs('sample222.ts', `
        function sample222(p0: string & { brand: "x" }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample222');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" }",
        "dts2cpp_convert_combo_0036_string_brand_x param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0036_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_SAMPLERET222
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_SAMPLERET222
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type string &; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0037_sampleret222', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet222.ts', `
        function sampleRet222(): string & { brand: "x" } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet222');
      assert.strictEqual(converted.funcs[0].returns, "string & { brand: \"x\" }",
        "dts2cpp_convert_combo_0037_sampleret222 return convert output");
      const generated = generateFunctions(converted, 'sampleRet222.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet222') || generated.napiCppContent.includes('sampleRet222')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet222'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0037_sampleret222 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_SAMPLECLASS222
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_SAMPLECLASS222
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type string & { brand: "x" };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0038_sampleclass222', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass222.ts', `
        class SampleClass222 { field: string & { brand: "x" }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass222');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string & { brand: \"x\" }",
        "dts2cpp_convert_combo_0038_sampleclass222 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0038_sampleclass222 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_STRING_BRAND_X
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_STRING_BRAND_X
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type string & { brand:
   *            "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0039_string_brand_x', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline222.ts', `
        function pipeline222(p: string & { brand: "x" }): string & { brand: "x" } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline222');
      assert.strictEqual(converted.funcs[0].returns, "string & { brand: \"x\" }",
        "dts2cpp_convert_combo_0039_string_brand_x pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { brand: \"x\" }",
        "dts2cpp_convert_combo_0039_string_brand_x pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline222.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline222') || generated.napiCppContent.includes('pipeline222')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline222'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0039_string_brand_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_LIT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_LIT
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type "lit";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0040_lit', () => {
    try {
      const result = transCkey2Dtskey('"lit"');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0040_lit convert output non-empty");
      assert.strictEqual(result, "\"lit\"", "dts2cpp_convert_combo_0040_lit convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0040_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_LIT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_LIT
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0041_lit', () => {
    try {
      const converted = transParseObj(doParseTs('sample223.ts', `function sample223(p0: "lit"): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample223');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\"",
        "dts2cpp_convert_combo_0041_lit param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0041_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_SAMPLERET223
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_SAMPLERET223
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0042_sampleret223', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet223.ts', `
        function sampleRet223(): "lit" { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet223');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\"",
        "dts2cpp_convert_combo_0042_sampleret223 return convert output");
      const generated = generateFunctions(converted, 'sampleRet223.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet223') || generated.napiCppContent.includes('sampleRet223')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet223'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0042_sampleret223 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_SAMPLECLASS223
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_SAMPLECLASS223
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0043_sampleclass223', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass223.ts', `
        class SampleClass223 { field: "lit"; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass223');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"lit\"",
        "dts2cpp_convert_combo_0043_sampleclass223 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0043_sampleclass223 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_LIT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_LIT
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type "lit"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0044_lit', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline223.ts', `
        function pipeline223(p: "lit"): "lit" { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline223');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\"",
        "dts2cpp_convert_combo_0044_lit pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\"",
        "dts2cpp_convert_combo_0044_lit pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline223.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline223') || generated.napiCppContent.includes('pipeline223')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline223'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0044_lit execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_42
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_42
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type 42; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0045_42', () => {
    try {
      const result = transCkey2Dtskey('42');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0045_42 convert output non-empty");
      assert.strictEqual(result, "42", "dts2cpp_convert_combo_0045_42 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0045_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_42
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_42
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type 42; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0046_42', () => {
    try {
      const converted = transParseObj(doParseTs('sample224.ts', `function sample224(p0: 42): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample224');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "42",
        "dts2cpp_convert_combo_0046_42 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0046_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_SAMPLERET224
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_SAMPLERET224
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type 42; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0047_sampleret224', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet224.ts', `
        function sampleRet224(): 42 { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet224');
      assert.strictEqual(converted.funcs[0].returns, "42",
        "dts2cpp_convert_combo_0047_sampleret224 return convert output");
      const generated = generateFunctions(converted, 'sampleRet224.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet224') || generated.napiCppContent.includes('sampleRet224')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet224'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0047_sampleret224 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_SAMPLECLASS224
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_SAMPLECLASS224
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type 42; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0048_sampleclass224', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass224.ts', `
        class SampleClass224 { field: 42; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass224');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "42",
        "dts2cpp_convert_combo_0048_sampleclass224 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0048_sampleclass224 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_42
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_42
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type 42; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0049_42', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline224.ts', `function pipeline224(p: 42): 42 { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline224');
      assert.strictEqual(converted.funcs[0].returns, "42",
        "dts2cpp_convert_combo_0049_42 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "42",
        "dts2cpp_convert_combo_0049_42 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline224.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline224') || generated.napiCppContent.includes('pipeline224')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline224'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0049_42 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_TRUE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_TRUE
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type true;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0050_true', () => {
    try {
      const result = transCkey2Dtskey('true');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0050_true convert output non-empty");
      assert.strictEqual(result, "true", "dts2cpp_convert_combo_0050_true convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0050_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_TRUE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_TRUE
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0051_true', () => {
    try {
      const converted = transParseObj(doParseTs('sample225.ts', `function sample225(p0: true): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample225');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "true",
        "dts2cpp_convert_combo_0051_true param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0051_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_SAMPLERET225
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_SAMPLERET225
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0052_sampleret225', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet225.ts', `
        function sampleRet225(): true { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet225');
      assert.strictEqual(converted.funcs[0].returns, "true",
        "dts2cpp_convert_combo_0052_sampleret225 return convert output");
      const generated = generateFunctions(converted, 'sampleRet225.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet225') || generated.napiCppContent.includes('sampleRet225')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet225'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0052_sampleret225 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_SAMPLECLASS225
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_SAMPLECLASS225
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type true; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0053_sampleclass225', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass225.ts', `
        class SampleClass225 { field: true; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass225');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "true",
        "dts2cpp_convert_combo_0053_sampleclass225 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0053_sampleclass225 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_TRUE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_TRUE
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type true; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0054_true', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline225.ts', `function pipeline225(p: true): true { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline225');
      assert.strictEqual(converted.funcs[0].returns, "true",
        "dts2cpp_convert_combo_0054_true pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "true",
        "dts2cpp_convert_combo_0054_true pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline225.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline225') || generated.napiCppContent.includes('pipeline225')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline225'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0054_true execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_VOIDFUNC
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_VOIDFUNC
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type voidFunc;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0055_voidfunc', () => {
    try {
      const result = transCkey2Dtskey('voidFunc');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0055_voidfunc convert output non-empty");
      assert.strictEqual(result, "voidFunc", "dts2cpp_convert_combo_0055_voidfunc convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0055_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_VOIDFUNC
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_VOIDFUNC
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type voidFunc; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0056_voidfunc', () => {
    try {
      const converted = transParseObj(doParseTs('sample234.ts', `function sample234(p0: voidFunc): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample234');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc",
        "dts2cpp_convert_combo_0056_voidfunc param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0056_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_SAMPLERET234
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_SAMPLERET234
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type voidFunc; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0057_sampleret234', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet234.ts', `
        function sampleRet234(): voidFunc { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet234');
      assert.strictEqual(converted.funcs[0].returns, "voidFunc",
        "dts2cpp_convert_combo_0057_sampleret234 return convert output");
      const generated = generateFunctions(converted, 'sampleRet234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet234') || generated.napiCppContent.includes('sampleRet234')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet234'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0057_sampleret234 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_SAMPLECLASS234
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_SAMPLECLASS234
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type voidFunc; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0058_sampleclass234', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass234.ts', `
        class SampleClass234 { field: voidFunc; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass234');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "voidFunc",
        "dts2cpp_convert_combo_0058_sampleclass234 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0058_sampleclass234 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_VOIDFUNC
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_VOIDFUNC
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type voidFunc;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0059_voidfunc', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline234.ts', `
        function pipeline234(p: voidFunc): voidFunc { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline234');
      assert.strictEqual(converted.funcs[0].returns, "voidFunc",
        "dts2cpp_convert_combo_0059_voidfunc pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "voidFunc",
        "dts2cpp_convert_combo_0059_voidfunc pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline234') || generated.napiCppContent.includes('pipeline234')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline234'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0059_voidfunc execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_STRING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type string & {};
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0060_string', () => {
    try {
      const result = transCkey2Dtskey('string & {}');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0060_string convert output non-empty");
      assert.strictEqual(result, "string & {}", "dts2cpp_convert_combo_0060_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0060_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_STRING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type string & {};
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0061_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample261.ts', `
        function sample261(p0: string & {}): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample261');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {}",
        "dts2cpp_convert_combo_0061_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0061_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_SAMPLERET261
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_SAMPLERET261
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type string &; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0062_sampleret261', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet261.ts', `
        function sampleRet261(): string & {} { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet261');
      assert.strictEqual(converted.funcs[0].returns, "string & {}",
        "dts2cpp_convert_combo_0062_sampleret261 return convert output");
      const generated = generateFunctions(converted, 'sampleRet261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet261') || generated.napiCppContent.includes('sampleRet261')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet261'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0062_sampleret261 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_SAMPLECLASS261
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_SAMPLECLASS261
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type string & {}; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0063_sampleclass261', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass261.ts', `
        class SampleClass261 { field: string & {}; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass261');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string & {}",
        "dts2cpp_convert_combo_0063_sampleclass261 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0063_sampleclass261 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_STRING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type string & {};
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0064_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline261.ts', `
        function pipeline261(p: string & {}): string & {} { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline261');
      assert.strictEqual(converted.funcs[0].returns, "string & {}",
        "dts2cpp_convert_combo_0064_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & {}",
        "dts2cpp_convert_combo_0064_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline261') || generated.napiCppContent.includes('pipeline261')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline261'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0064_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_ID_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_ID_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0065_id_number', () => {
    try {
      const result = transCkey2Dtskey('{ id: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0065_id_number convert output non-empty");
      assert.strictEqual(result, "{ id: number }", "dts2cpp_convert_combo_0065_id_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0065_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_ID_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_ID_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0066_id_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample263.ts', `
        function sample263(p0: { id: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample263');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number }",
        "dts2cpp_convert_combo_0066_id_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0066_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_SAMPLERET263
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_SAMPLERET263
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0067_sampleret263', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet263.ts', `
        function sampleRet263(): { id: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet263');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number }",
        "dts2cpp_convert_combo_0067_sampleret263 return convert output");
      const generated = generateFunctions(converted, 'sampleRet263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet263') || generated.napiCppContent.includes('sampleRet263')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet263'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0067_sampleret263 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_SAMPLECLASS263
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_SAMPLECLASS263
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0068_sampleclass263', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass263.ts', `
        class SampleClass263 { field: { id: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass263');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ id: number }",
        "dts2cpp_convert_combo_0068_sampleclass263 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0068_sampleclass263 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_ID_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_ID_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { id: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0069_id_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline263.ts', `
        function pipeline263(p: { id: number }): { id: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline263');
      assert.strictEqual(converted.funcs[0].returns, "{ id: number }",
        "dts2cpp_convert_combo_0069_id_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ id: number }",
        "dts2cpp_convert_combo_0069_id_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline263') || generated.napiCppContent.includes('pipeline263')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline263'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0069_id_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_T
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_T
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type T; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0070_t', () => {
    try {
      const result = transCkey2Dtskey('T');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0070_t convert output non-empty");
      assert.strictEqual(result, "T", "dts2cpp_convert_combo_0070_t convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0070_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_T
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_T
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type T; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0071_t', () => {
    try {
      const converted = transParseObj(doParseTs('sample276.ts', `function sample276(p0: T): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample276');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T",
        "dts2cpp_convert_combo_0071_t param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0071_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_SAMPLERET276
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_SAMPLERET276
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type T; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0072_sampleret276', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet276.ts', `
        function sampleRet276(): T { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet276');
      assert.strictEqual(converted.funcs[0].returns, "T",
        "dts2cpp_convert_combo_0072_sampleret276 return convert output");
      const generated = generateFunctions(converted, 'sampleRet276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet276') || generated.napiCppContent.includes('sampleRet276')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet276'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0072_sampleret276 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_SAMPLECLASS276
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_SAMPLECLASS276
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type T; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0073_sampleclass276', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass276.ts', `
        class SampleClass276 { field: T; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass276');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "T",
        "dts2cpp_convert_combo_0073_sampleclass276 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0073_sampleclass276 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_T
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_T
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type T; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0074_t', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline276.ts', `function pipeline276(p: T): T { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline276');
      assert.strictEqual(converted.funcs[0].returns, "T",
        "dts2cpp_convert_combo_0074_t pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T",
        "dts2cpp_convert_combo_0074_t pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline276') || generated.napiCppContent.includes('pipeline276')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline276'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0074_t execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_C
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_C
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type C; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0075_c', () => {
    try {
      const result = transCkey2Dtskey('C');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0075_c convert output non-empty");
      assert.strictEqual(result, "C", "dts2cpp_convert_combo_0075_c convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0075_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_C
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_C
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type C; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0076_c', () => {
    try {
      const converted = transParseObj(doParseTs('sample277.ts', `function sample277(p0: C): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample277');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "C",
        "dts2cpp_convert_combo_0076_c param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0076_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_SAMPLERET277
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_SAMPLERET277
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type C; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0077_sampleret277', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet277.ts', `
        function sampleRet277(): C { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet277');
      assert.strictEqual(converted.funcs[0].returns, "C",
        "dts2cpp_convert_combo_0077_sampleret277 return convert output");
      const generated = generateFunctions(converted, 'sampleRet277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet277') || generated.napiCppContent.includes('sampleRet277')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet277'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0077_sampleret277 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_SAMPLECLASS277
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_SAMPLECLASS277
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type C; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0078_sampleclass277', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass277.ts', `
        class SampleClass277 { field: C; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass277');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "C",
        "dts2cpp_convert_combo_0078_sampleclass277 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0078_sampleclass277 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0079_C
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0079_C
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type C; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0079_c', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline277.ts', `function pipeline277(p: C): C { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline277');
      assert.strictEqual(converted.funcs[0].returns, "C",
        "dts2cpp_convert_combo_0079_c pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "C",
        "dts2cpp_convert_combo_0079_c pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline277') || generated.napiCppContent.includes('pipeline277')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline277'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0079_c execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_HANDLER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_HANDLER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Handler;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0006_handler', () => {
    try {
      const result = transCkey2Dtskey('Handler');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0006_handler convert output non-empty");
      assert.strictEqual(result, "Handler", "dts2cpp_convert_combo_0006_handler convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0006_handler execution error: ${err}`);
    }
  });
});
