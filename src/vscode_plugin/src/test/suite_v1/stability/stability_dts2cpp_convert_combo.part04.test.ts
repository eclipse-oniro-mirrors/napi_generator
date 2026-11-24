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

suite('Stability_DTS2CPP_CONVERT_COMBO_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_HANDLER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_HANDLER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Handler; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0007_handler', () => {
    try {
      const converted = transParseObj(doParseTs('sample284.ts', `function sample284(p0: Handler): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample284');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler",
        "dts2cpp_convert_combo_0007_handler param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0007_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_SAMPLERET284
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_SAMPLERET284
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Handler; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0008_sampleret284', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet284.ts', `
        function sampleRet284(): Handler { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet284');
      assert.strictEqual(converted.funcs[0].returns, "Handler",
        "dts2cpp_convert_combo_0008_sampleret284 return convert output");
      const generated = generateFunctions(converted, 'sampleRet284.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet284') || generated.napiCppContent.includes('sampleRet284')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet284'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0008_sampleret284 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_SAMPLECLASS284
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_SAMPLECLASS284
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Handler; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0009_sampleclass284', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass284.ts', `
        class SampleClass284 { field: Handler; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass284');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Handler",
        "dts2cpp_convert_combo_0009_sampleclass284 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0009_sampleclass284 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_HANDLER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_HANDLER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Handler;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0010_handler', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline284.ts', `
        function pipeline284(p: Handler): Handler { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline284');
      assert.strictEqual(converted.funcs[0].returns, "Handler",
        "dts2cpp_convert_combo_0010_handler pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Handler",
        "dts2cpp_convert_combo_0010_handler pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline284.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline284') || generated.napiCppContent.includes('pipeline284')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline284'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0010_handler execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_DATA
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_DATA
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Data;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0011_data', () => {
    try {
      const result = transCkey2Dtskey('Data');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0011_data convert output non-empty");
      assert.strictEqual(result, "Data", "dts2cpp_convert_combo_0011_data convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0011_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_DATA
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_DATA
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0012_data', () => {
    try {
      const converted = transParseObj(doParseTs('sample285.ts', `function sample285(p0: Data): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample285');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data",
        "dts2cpp_convert_combo_0012_data param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0012_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_SAMPLERET285
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_SAMPLERET285
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0013_sampleret285', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet285.ts', `
        function sampleRet285(): Data { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet285');
      assert.strictEqual(converted.funcs[0].returns, "Data",
        "dts2cpp_convert_combo_0013_sampleret285 return convert output");
      const generated = generateFunctions(converted, 'sampleRet285.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet285') || generated.napiCppContent.includes('sampleRet285')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet285'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0013_sampleret285 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_SAMPLECLASS285
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_SAMPLECLASS285
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Data; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0014_sampleclass285', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass285.ts', `
        class SampleClass285 { field: Data; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass285');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Data",
        "dts2cpp_convert_combo_0014_sampleclass285 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0014_sampleclass285 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_DATA
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_DATA
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Data; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0015_data', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline285.ts', `function pipeline285(p: Data): Data { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline285');
      assert.strictEqual(converted.funcs[0].returns, "Data",
        "dts2cpp_convert_combo_0015_data pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data",
        "dts2cpp_convert_combo_0015_data pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline285.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline285') || generated.napiCppContent.includes('pipeline285')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline285'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0015_data execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_NUMBER_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_NUMBER_10_20_30
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type
   *            number[10][20][30]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0016_number_10_20_30', () => {
    try {
      const result = transCkey2Dtskey('number[10][20][30]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0016_number_10_20_30 convert output non-empty");
      assert.strictEqual(result, "number[10][20][30]", "dts2cpp_convert_combo_0016_number_10_20_30 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0016_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_NUMBER_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_NUMBER_10_20_30
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type number[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0017_number_10_20_30', () => {
    try {
      const converted = transParseObj(doParseTs('sample303.ts', `
        function sample303(p0: number[10][20][30]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample303');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10][20][30]",
        "dts2cpp_convert_combo_0017_number_10_20_30 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0017_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_SAMPLERET303
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_SAMPLERET303
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type number[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0018_sampleret303', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet303.ts', `
        function sampleRet303(): number[10][20][30] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet303');
      assert.strictEqual(converted.funcs[0].returns, "number[10][20][30]",
        "dts2cpp_convert_combo_0018_sampleret303 return convert output");
      const generated = generateFunctions(converted, 'sampleRet303.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet303') || generated.napiCppContent.includes('sampleRet303')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet303'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0018_sampleret303 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_SAMPLECLASS303
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_SAMPLECLASS303
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type number[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0019_sampleclass303', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass303.ts', `
        class SampleClass303 { field: number[10][20][30]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass303');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number[10][20][30]",
        "dts2cpp_convert_combo_0019_sampleclass303 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0019_sampleclass303 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_NUMBER_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_NUMBER_10_20_30
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type
   *            number[10][20][30]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0020_number_10_20_30', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline303.ts', `
        function pipeline303(p: number[10][20][30]): number[10][20][30] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline303');
      assert.strictEqual(converted.funcs[0].returns, "number[10][20][30]",
        "dts2cpp_convert_combo_0020_number_10_20_30 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10][20][30]",
        "dts2cpp_convert_combo_0020_number_10_20_30 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline303.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline303') || generated.napiCppContent.includes('pipeline303')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline303'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0020_number_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_USER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_USER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type User;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0021_user', () => {
    try {
      const result = transCkey2Dtskey('User');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0021_user convert output non-empty");
      assert.strictEqual(result, "User", "dts2cpp_convert_combo_0021_user convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0021_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_USER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_USER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0022_user', () => {
    try {
      const converted = transParseObj(doParseTs('sample304.ts', `function sample304(p0: User): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample304');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "User",
        "dts2cpp_convert_combo_0022_user param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0022_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_SAMPLERET304
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_SAMPLERET304
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0023_sampleret304', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet304.ts', `
        function sampleRet304(): User { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet304');
      assert.strictEqual(converted.funcs[0].returns, "User",
        "dts2cpp_convert_combo_0023_sampleret304 return convert output");
      const generated = generateFunctions(converted, 'sampleRet304.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet304') || generated.napiCppContent.includes('sampleRet304')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet304'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0023_sampleret304 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_SAMPLECLASS304
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_SAMPLECLASS304
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type User; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0024_sampleclass304', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass304.ts', `
        class SampleClass304 { field: User; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass304');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "User",
        "dts2cpp_convert_combo_0024_sampleclass304 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0024_sampleclass304 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_USER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_USER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type User; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0025_user', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline304.ts', `function pipeline304(p: User): User { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline304');
      assert.strictEqual(converted.funcs[0].returns, "User",
        "dts2cpp_convert_combo_0025_user pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "User",
        "dts2cpp_convert_combo_0025_user pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline304.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline304') || generated.napiCppContent.includes('pipeline304')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline304'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0025_user execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_MAP
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_MAP
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0026_map', () => {
    try {
      const result = transCkey2Dtskey('Map');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0026_map convert output non-empty");
      assert.strictEqual(result, "Map", "dts2cpp_convert_combo_0026_map convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0026_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_MAP
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_MAP
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0027_map', () => {
    try {
      const converted = transParseObj(doParseTs('sample305.ts', `function sample305(p0: Map): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample305');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map",
        "dts2cpp_convert_combo_0027_map param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0027_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_SAMPLERET305
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_SAMPLERET305
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0028_sampleret305', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet305.ts', `
        function sampleRet305(): Map { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet305');
      assert.strictEqual(converted.funcs[0].returns, "Map",
        "dts2cpp_convert_combo_0028_sampleret305 return convert output");
      const generated = generateFunctions(converted, 'sampleRet305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet305') || generated.napiCppContent.includes('sampleRet305')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet305'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0028_sampleret305 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_SAMPLECLASS305
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_SAMPLECLASS305
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Map; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0029_sampleclass305', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass305.ts', `
        class SampleClass305 { field: Map; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass305');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map",
        "dts2cpp_convert_combo_0029_sampleclass305 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0029_sampleclass305 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_MAP
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_MAP
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Map; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0030_map', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline305.ts', `function pipeline305(p: Map): Map { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline305');
      assert.strictEqual(converted.funcs[0].returns, "Map",
        "dts2cpp_convert_combo_0030_map pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map",
        "dts2cpp_convert_combo_0030_map pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline305') || generated.napiCppContent.includes('pipeline305')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline305'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0030_map execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0031_array', () => {
    try {
      const result = transCkey2Dtskey('Array');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0031_array convert output non-empty");
      assert.strictEqual(result, "Array", "dts2cpp_convert_combo_0031_array convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0031_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0032_array', () => {
    try {
      const converted = transParseObj(doParseTs('sample306.ts', `function sample306(p0: Array): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample306');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array",
        "dts2cpp_convert_combo_0032_array param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0032_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_SAMPLERET306
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_SAMPLERET306
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0033_sampleret306', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet306.ts', `
        function sampleRet306(): Array { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet306');
      assert.strictEqual(converted.funcs[0].returns, "Array",
        "dts2cpp_convert_combo_0033_sampleret306 return convert output");
      const generated = generateFunctions(converted, 'sampleRet306.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet306') || generated.napiCppContent.includes('sampleRet306')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet306'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0033_sampleret306 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_SAMPLECLASS306
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_SAMPLECLASS306
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0034_sampleclass306', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass306.ts', `
        class SampleClass306 { field: Array; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass306');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array",
        "dts2cpp_convert_combo_0034_sampleclass306 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0034_sampleclass306 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0035_array', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline306.ts', `
        function pipeline306(p: Array): Array { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline306');
      assert.strictEqual(converted.funcs[0].returns, "Array",
        "dts2cpp_convert_combo_0035_array pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array",
        "dts2cpp_convert_combo_0035_array pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline306.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline306') || generated.napiCppContent.includes('pipeline306')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline306'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0035_array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_BAR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_BAR
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0036_bar', () => {
    try {
      const result = transCkey2Dtskey('Bar');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0036_bar convert output non-empty");
      assert.strictEqual(result, "Bar", "dts2cpp_convert_combo_0036_bar convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0036_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_BAR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_BAR
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0037_bar', () => {
    try {
      const converted = transParseObj(doParseTs('sample309.ts', `function sample309(p0: Bar): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample309');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar",
        "dts2cpp_convert_combo_0037_bar param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0037_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_SAMPLERET309
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_SAMPLERET309
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0038_sampleret309', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet309.ts', `
        function sampleRet309(): Bar { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet309');
      assert.strictEqual(converted.funcs[0].returns, "Bar",
        "dts2cpp_convert_combo_0038_sampleret309 return convert output");
      const generated = generateFunctions(converted, 'sampleRet309.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet309') || generated.napiCppContent.includes('sampleRet309')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet309'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0038_sampleret309 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_SAMPLECLASS309
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_SAMPLECLASS309
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Bar; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0039_sampleclass309', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass309.ts', `
        class SampleClass309 { field: Bar; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass309');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Bar",
        "dts2cpp_convert_combo_0039_sampleclass309 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0039_sampleclass309 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_BAR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_BAR
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Bar; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0040_bar', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline309.ts', `function pipeline309(p: Bar): Bar { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline309');
      assert.strictEqual(converted.funcs[0].returns, "Bar",
        "dts2cpp_convert_combo_0040_bar pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Bar",
        "dts2cpp_convert_combo_0040_bar pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline309.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline309') || generated.napiCppContent.includes('pipeline309')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline309'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0040_bar execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { x: number; y:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0041_x_number_y_number', () => {
    try {
      const result = transCkey2Dtskey('{ x: number; y: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0041_x_number_y_number convert output non-empty");
      assert.strictEqual(result, "{ x: number; y: number }",
        "dts2cpp_convert_combo_0041_x_number_y_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0041_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { x: number; y: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0042_x_number_y_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample315.ts', `
        function sample315(p0: { x: number; y: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample315');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number }",
        "dts2cpp_convert_combo_0042_x_number_y_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0042_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_SAMPLERET315
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_SAMPLERET315
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { x: number; y:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0043_sampleret315', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet315.ts', `
        function sampleRet315(): { x: number; y: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet315');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y: number }",
        "dts2cpp_convert_combo_0043_sampleret315 return convert output");
      const generated = generateFunctions(converted, 'sampleRet315.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet315') || generated.napiCppContent.includes('sampleRet315')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet315'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0043_sampleret315 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_SAMPLECLASS315
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_SAMPLECLASS315
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { x: number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0044_sampleclass315', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass315.ts', `
        class SampleClass315 { field: { x: number; y: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass315');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y: number }",
        "dts2cpp_convert_combo_0044_sampleclass315 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0044_sampleclass315 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_X_NUMBER_Y_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_X_NUMBER_Y_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { x: number; y:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0045_x_number_y_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline315.ts', `
        function pipeline315(p: { x: number; y: number }): { x: number; y: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline315');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y: number }",
        "dts2cpp_convert_combo_0045_x_number_y_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y: number }",
        "dts2cpp_convert_combo_0045_x_number_y_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline315.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline315') || generated.napiCppContent.includes('pipeline315')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline315'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0045_x_number_y_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { x: number; y?:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0046_x_number_y_string', () => {
    try {
      const result = transCkey2Dtskey('{ x: number; y?: string }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0046_x_number_y_string convert output non-empty");
      assert.strictEqual(result, "{ x: number; y?: string }",
        "dts2cpp_convert_combo_0046_x_number_y_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0046_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { x: number; y?:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0047_x_number_y_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample316.ts', `
        function sample316(p0: { x: number; y?: string }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample316');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string }",
        "dts2cpp_convert_combo_0047_x_number_y_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0047_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_SAMPLERET316
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_SAMPLERET316
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { x: number; y?:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0048_sampleret316', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet316.ts', `
        function sampleRet316(): { x: number; y?: string } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet316');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y?: string }",
        "dts2cpp_convert_combo_0048_sampleret316 return convert output");
      const generated = generateFunctions(converted, 'sampleRet316.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet316') || generated.napiCppContent.includes('sampleRet316')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet316'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0048_sampleret316 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_SAMPLECLASS316
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_SAMPLECLASS316
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { x: number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0049_sampleclass316', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass316.ts', `
        class SampleClass316 { field: { x: number; y?: string }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass316');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ x: number; y?: string }",
        "dts2cpp_convert_combo_0049_sampleclass316 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0049_sampleclass316 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_X_NUMBER_Y_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_X_NUMBER_Y_STRING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { x: number; y?:
   *            string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0050_x_number_y_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline316.ts', `
        function pipeline316(p: { x: number; y?: string }): { x: number; y?: string } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline316');
      assert.strictEqual(converted.funcs[0].returns, "{ x: number; y?: string }",
        "dts2cpp_convert_combo_0050_x_number_y_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ x: number; y?: string }",
        "dts2cpp_convert_combo_0050_x_number_y_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline316.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline316') || generated.napiCppContent.includes('pipeline316')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline316'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0050_x_number_y_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_INPUT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_INPUT
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Input;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0051_input', () => {
    try {
      const result = transCkey2Dtskey('Input');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0051_input convert output non-empty");
      assert.strictEqual(result, "Input", "dts2cpp_convert_combo_0051_input convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0051_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_INPUT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_INPUT
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0052_input', () => {
    try {
      const converted = transParseObj(doParseTs('sample319.ts', `function sample319(p0: Input): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample319');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Input",
        "dts2cpp_convert_combo_0052_input param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0052_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_SAMPLERET319
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_SAMPLERET319
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0053_sampleret319', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet319.ts', `
        function sampleRet319(): Input { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet319');
      assert.strictEqual(converted.funcs[0].returns, "Input",
        "dts2cpp_convert_combo_0053_sampleret319 return convert output");
      const generated = generateFunctions(converted, 'sampleRet319.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet319') || generated.napiCppContent.includes('sampleRet319')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet319'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0053_sampleret319 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_SAMPLECLASS319
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_SAMPLECLASS319
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0054_sampleclass319', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass319.ts', `
        class SampleClass319 { field: Input; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass319');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Input",
        "dts2cpp_convert_combo_0054_sampleclass319 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0054_sampleclass319 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_INPUT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_INPUT
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Input; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0055_input', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline319.ts', `
        function pipeline319(p: Input): Input { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline319');
      assert.strictEqual(converted.funcs[0].returns, "Input",
        "dts2cpp_convert_combo_0055_input pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Input",
        "dts2cpp_convert_combo_0055_input pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline319.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline319') || generated.napiCppContent.includes('pipeline319')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline319'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0055_input execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_OUTPUT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_OUTPUT
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Output;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0056_output', () => {
    try {
      const result = transCkey2Dtskey('Output');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0056_output convert output non-empty");
      assert.strictEqual(result, "Output", "dts2cpp_convert_combo_0056_output convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0056_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_OUTPUT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_OUTPUT
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Output; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0057_output', () => {
    try {
      const converted = transParseObj(doParseTs('sample320.ts', `function sample320(p0: Output): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample320');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Output",
        "dts2cpp_convert_combo_0057_output param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0057_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_SAMPLERET320
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_SAMPLERET320
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Output; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0058_sampleret320', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet320.ts', `
        function sampleRet320(): Output { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet320');
      assert.strictEqual(converted.funcs[0].returns, "Output",
        "dts2cpp_convert_combo_0058_sampleret320 return convert output");
      const generated = generateFunctions(converted, 'sampleRet320.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet320') || generated.napiCppContent.includes('sampleRet320')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet320'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0058_sampleret320 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_SAMPLECLASS320
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_SAMPLECLASS320
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Output; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0059_sampleclass320', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass320.ts', `
        class SampleClass320 { field: Output; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass320');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Output",
        "dts2cpp_convert_combo_0059_sampleclass320 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0059_sampleclass320 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_OUTPUT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_OUTPUT
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Output;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0060_output', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline320.ts', `
        function pipeline320(p: Output): Output { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline320');
      assert.strictEqual(converted.funcs[0].returns, "Output",
        "dts2cpp_convert_combo_0060_output pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Output",
        "dts2cpp_convert_combo_0060_output pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline320.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline320') || generated.napiCppContent.includes('pipeline320')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline320'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0060_output execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { a: number; b:
   *            number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0061_a_number_b_number_c_number', () => {
    try {
      const result = transCkey2Dtskey('{ a: number; b: number; c: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0061_a_number_b_number_c_number convert output non-empty");
      assert.strictEqual(result, "{ a: number; b: number; c: number }",
        "dts2cpp_convert_combo_0061_a_number_b_number_c_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0061_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { a: number; b:
   *            number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0062_a_number_b_number_c_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample321.ts', `
        function sample321(p0: { a: number; b: number; c: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample321');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number; c: number }",
        "dts2cpp_convert_combo_0062_a_number_b_number_c_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0062_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_SAMPLERET321
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_SAMPLERET321
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { a: number; b:
   *            number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0063_sampleret321', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet321.ts', `
        function sampleRet321(): { a: number; b: number; c: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet321');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number; c: number }",
        "dts2cpp_convert_combo_0063_sampleret321 return convert output");
      const generated = generateFunctions(converted, 'sampleRet321.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet321') || generated.napiCppContent.includes('sampleRet321')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet321'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0063_sampleret321 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_SAMPLECLASS321
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_SAMPLECLASS321
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { a: number; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0064_sampleclass321', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass321.ts', `
        class SampleClass321 { field: { a: number; b: number; c: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass321');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: number; b: number; c: number }",
        "dts2cpp_convert_combo_0064_sampleclass321 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0064_sampleclass321 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_A_NUMBER_B_NUMBER_C_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { a: number; b:
   *            number; c: number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0065_a_number_b_number_c_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline321.ts', `
        function pipeline321(p: { a: number; b: number; c: number }):
        { a: number; b: number; c: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline321');
      assert.strictEqual(converted.funcs[0].returns, "{ a: number; b: number; c: number }",
        "dts2cpp_convert_combo_0065_a_number_b_number_c_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: number; b: number; c: number }",
        "dts2cpp_convert_combo_0065_a_number_b_number_c_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline321.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline321') || generated.napiCppContent.includes('pipeline321')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline321'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0065_a_number_b_number_c_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_E
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_E
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type E; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0066_e', () => {
    try {
      const result = transCkey2Dtskey('E');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0066_e convert output non-empty");
      assert.strictEqual(result, "E", "dts2cpp_convert_combo_0066_e convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0066_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_E
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_E
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type E; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0067_e', () => {
    try {
      const converted = transParseObj(doParseTs('sample322.ts', `function sample322(p0: E): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample322');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "E",
        "dts2cpp_convert_combo_0067_e param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0067_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_SAMPLERET322
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_SAMPLERET322
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type E; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0068_sampleret322', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet322.ts', `
        function sampleRet322(): E { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet322');
      assert.strictEqual(converted.funcs[0].returns, "E",
        "dts2cpp_convert_combo_0068_sampleret322 return convert output");
      const generated = generateFunctions(converted, 'sampleRet322.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet322') || generated.napiCppContent.includes('sampleRet322')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet322'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0068_sampleret322 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_SAMPLECLASS322
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_SAMPLECLASS322
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type E; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0069_sampleclass322', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass322.ts', `
        class SampleClass322 { field: E; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass322');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "E",
        "dts2cpp_convert_combo_0069_sampleclass322 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0069_sampleclass322 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_E
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_E
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type E; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0070_e', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline322.ts', `function pipeline322(p: E): E { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline322');
      assert.strictEqual(converted.funcs[0].returns, "E",
        "dts2cpp_convert_combo_0070_e pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "E",
        "dts2cpp_convert_combo_0070_e pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline322.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline322') || generated.napiCppContent.includes('pipeline322')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline322'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0070_e execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type typeof
   *            globalThis; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0071_typeof_globalthis', () => {
    try {
      const result = transCkey2Dtskey('typeof globalThis');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0071_typeof_globalthis convert output non-empty");
      assert.strictEqual(result, "typeof globalThis", "dts2cpp_convert_combo_0071_typeof_globalthis convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0071_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0072_typeof_globalthis', () => {
    try {
      const converted = transParseObj(doParseTs('sample324.ts', `
        function sample324(p0: typeof globalThis): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample324');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis",
        "dts2cpp_convert_combo_0072_typeof_globalthis param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0072_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_SAMPLERET324
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_SAMPLERET324
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0073_sampleret324', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet324.ts', `
        function sampleRet324(): typeof globalThis { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet324');
      assert.strictEqual(converted.funcs[0].returns, "typeof globalThis",
        "dts2cpp_convert_combo_0073_sampleret324 return convert output");
      const generated = generateFunctions(converted, 'sampleRet324.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet324') || generated.napiCppContent.includes('sampleRet324')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet324'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0073_sampleret324 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_SAMPLECLASS324
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_SAMPLECLASS324
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0074_sampleclass324', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass324.ts', `
        class SampleClass324 { field: typeof globalThis; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass324');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "typeof globalThis",
        "dts2cpp_convert_combo_0074_sampleclass324 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0074_sampleclass324 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_TYPEOF_GLOBALTHIS
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_TYPEOF_GLOBALTHIS
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type typeof globalThis;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0075_typeof_globalthis', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline324.ts', `
        function pipeline324(p: typeof globalThis): typeof globalThis { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline324');
      assert.strictEqual(converted.funcs[0].returns, "typeof globalThis",
        "dts2cpp_convert_combo_0075_typeof_globalthis pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof globalThis",
        "dts2cpp_convert_combo_0075_typeof_globalthis pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline324.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline324') || generated.napiCppContent.includes('pipeline324')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline324'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0075_typeof_globalthis execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_UNKNOWN_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_UNKNOWN_NULL
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0076_unknown_null', () => {
    try {
      const result = transCkey2Dtskey('unknown & null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0076_unknown_null convert output non-empty");
      assert.strictEqual(result, "unknown & null", "dts2cpp_convert_combo_0076_unknown_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0076_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_UNKNOWN_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_UNKNOWN_NULL
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0077_unknown_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample325.ts', `
        function sample325(p0: unknown & null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample325');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown & null",
        "dts2cpp_convert_combo_0077_unknown_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0077_unknown_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_SAMPLERET325
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_SAMPLERET325
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0078_sampleret325', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet325.ts', `
        function sampleRet325(): unknown & null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet325');
      assert.strictEqual(converted.funcs[0].returns, "unknown & null",
        "dts2cpp_convert_combo_0078_sampleret325 return convert output");
      const generated = generateFunctions(converted, 'sampleRet325.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet325') || generated.napiCppContent.includes('sampleRet325')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet325'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0078_sampleret325 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0079_SAMPLECLASS325
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0079_SAMPLECLASS325
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type unknown & null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0079_sampleclass325', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass325.ts', `
        class SampleClass325 { field: unknown & null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass325');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "unknown & null",
        "dts2cpp_convert_combo_0079_sampleclass325 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0079_sampleclass325 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_STRING_TAG_X
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_STRING_TAG_X
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type string & { tag:
   *            "x" }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0006_string_tag_x', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline328.ts', `
        function pipeline328(p: string & { tag: "x" }): string & { tag: "x" } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline328');
      assert.strictEqual(converted.funcs[0].returns, "string & { tag: \"x\" }",
        "dts2cpp_convert_combo_0006_string_tag_x pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { tag: \"x\" }",
        "dts2cpp_convert_combo_0006_string_tag_x pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline328.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline328') || generated.napiCppContent.includes('pipeline328')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline328'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0006_string_tag_x execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_ID_NUMBER_NAME_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_ID_NUMBER_NAME_STRING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { id: number;
   *            name: string }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0007_id_number_name_string', () => {
    try {
      const result = transCkey2Dtskey('{ id: number; name: string }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0007_id_number_name_string convert output non-empty");
      assert.strictEqual(result, "{ id: number; name: string }",
        "dts2cpp_convert_combo_0007_id_number_name_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0007_id_number_name_string execution error: ${err}`);
    }
  });
});
