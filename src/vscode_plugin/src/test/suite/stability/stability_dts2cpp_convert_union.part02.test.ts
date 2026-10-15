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

suite('Stability_DTS2CPP_CONVERT_UNION_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_UNION_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0078_SAMPLERET227
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0078_SAMPLERET227
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type Date | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0078_sampleret227', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet227.ts', `
        function sampleRet227(): Date | null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet227');
      assert.strictEqual(converted.funcs[0].returns, "Date | null",
        "dts2cpp_convert_union_0078_sampleret227 return convert output");
      const generated = generateFunctions(converted, 'sampleRet227.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet227') || generated.napiCppContent.includes('sampleRet227')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet227'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0078_sampleret227 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0031_SAMPLECLASS233
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0031_SAMPLECLASS233
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type "circle" | "square";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0031_sampleclass233', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass233.ts', `
        class SampleClass233 { field: "circle" | "square"; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass233');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"circle\" | \"square\"",
        "dts2cpp_convert_union_0031_sampleclass233 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0031_sampleclass233 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0032_CIRCLE_SQUARE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0032_CIRCLE_SQUARE
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type "circle" |
   *            "square"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0032_circle_square', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline233.ts', `
        function pipeline233(p: "circle" | "square"): "circle" | "square" { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline233');
      assert.strictEqual(converted.funcs[0].returns, "\"circle\" | \"square\"",
        "dts2cpp_convert_union_0032_circle_square pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"circle\" | \"square\"",
        "dts2cpp_convert_union_0032_circle_square pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline233.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline233') || generated.napiCppContent.includes('pipeline233')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline233'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0032_circle_square execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0033_T_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0033_T_NULL
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type T | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0033_t_null', () => {
    try {
      const result = transCkey2Dtskey('T | null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0033_t_null convert output non-empty");
      assert.strictEqual(result, "T | null", "dts2cpp_convert_union_0033_t_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0033_t_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0034_T_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0034_T_NULL
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type T | null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0034_t_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample281.ts', `function sample281(p0: T | null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample281');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T | null",
        "dts2cpp_convert_union_0034_t_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0034_t_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0035_SAMPLERET281
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0035_SAMPLERET281
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type T | null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0035_sampleret281', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet281.ts', `
        function sampleRet281(): T | null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet281');
      assert.strictEqual(converted.funcs[0].returns, "T | null",
        "dts2cpp_convert_union_0035_sampleret281 return convert output");
      const generated = generateFunctions(converted, 'sampleRet281.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet281') || generated.napiCppContent.includes('sampleRet281')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet281'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0035_sampleret281 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0036_SAMPLECLASS281
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0036_SAMPLECLASS281
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type T | null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0036_sampleclass281', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass281.ts', `
        class SampleClass281 { field: T | null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass281');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "T | null",
        "dts2cpp_convert_union_0036_sampleclass281 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0036_sampleclass281 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0037_T_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0037_T_NULL
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type T | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0037_t_null', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline281.ts', `
        function pipeline281(p: T | null): T | null { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline281');
      assert.strictEqual(converted.funcs[0].returns, "T | null",
        "dts2cpp_convert_union_0037_t_null pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T | null",
        "dts2cpp_convert_union_0037_t_null pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline281.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline281') || generated.napiCppContent.includes('pipeline281')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline281'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0037_t_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0038_DATA_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0038_DATA_NULL
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type Data | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0038_data_null', () => {
    try {
      const result = transCkey2Dtskey('Data | null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0038_data_null convert output non-empty");
      assert.strictEqual(result, "Data | null", "dts2cpp_convert_union_0038_data_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0038_data_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0039_DATA_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0039_DATA_NULL
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type Data | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0039_data_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample310.ts', `
        function sample310(p0: Data | null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample310');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data | null",
        "dts2cpp_convert_union_0039_data_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0039_data_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0040_SAMPLERET310
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0040_SAMPLERET310
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type Data | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0040_sampleret310', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet310.ts', `
        function sampleRet310(): Data | null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet310');
      assert.strictEqual(converted.funcs[0].returns, "Data | null",
        "dts2cpp_convert_union_0040_sampleret310 return convert output");
      const generated = generateFunctions(converted, 'sampleRet310.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet310') || generated.napiCppContent.includes('sampleRet310')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet310'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0040_sampleret310 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0041_SAMPLECLASS310
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0041_SAMPLECLASS310
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type Data | null; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0041_sampleclass310', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass310.ts', `
        class SampleClass310 { field: Data | null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass310');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Data | null",
        "dts2cpp_convert_union_0041_sampleclass310 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0041_sampleclass310 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0042_DATA_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0042_DATA_NULL
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type Data | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0042_data_null', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline310.ts', `
        function pipeline310(p: Data | null): Data | null { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline310');
      assert.strictEqual(converted.funcs[0].returns, "Data | null",
        "dts2cpp_convert_union_0042_data_null pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Data | null",
        "dts2cpp_convert_union_0042_data_null pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline310.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline310') || generated.napiCppContent.includes('pipeline310')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline310'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0042_data_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0043_FACTORY_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0043_FACTORY_NULL
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type Factory | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0043_factory_null', () => {
    try {
      const result = transCkey2Dtskey('Factory | null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0043_factory_null convert output non-empty");
      assert.strictEqual(result, "Factory | null", "dts2cpp_convert_union_0043_factory_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0043_factory_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0044_FACTORY_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0044_FACTORY_NULL
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type Factory | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0044_factory_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample312.ts', `
        function sample312(p0: Factory | null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample312');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Factory | null",
        "dts2cpp_convert_union_0044_factory_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0044_factory_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0045_SAMPLERET312
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0045_SAMPLERET312
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type Factory | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0045_sampleret312', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet312.ts', `
        function sampleRet312(): Factory | null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet312');
      assert.strictEqual(converted.funcs[0].returns, "Factory | null",
        "dts2cpp_convert_union_0045_sampleret312 return convert output");
      const generated = generateFunctions(converted, 'sampleRet312.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet312') || generated.napiCppContent.includes('sampleRet312')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet312'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0045_sampleret312 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0046_SAMPLECLASS312
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0046_SAMPLECLASS312
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type Factory | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0046_sampleclass312', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass312.ts', `
        class SampleClass312 { field: Factory | null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass312');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Factory | null",
        "dts2cpp_convert_union_0046_sampleclass312 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0046_sampleclass312 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0047_FACTORY_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0047_FACTORY_NULL
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type Factory | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0047_factory_null', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline312.ts', `
        function pipeline312(p: Factory | null): Factory | null { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline312');
      assert.strictEqual(converted.funcs[0].returns, "Factory | null",
        "dts2cpp_convert_union_0047_factory_null pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Factory | null",
        "dts2cpp_convert_union_0047_factory_null pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline312.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline312') || generated.napiCppContent.includes('pipeline312')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline312'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0047_factory_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0048_TYPE_UNDEFINED
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0048_TYPE_UNDEFINED
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type Type |
   *            undefined; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0048_type_undefined', () => {
    try {
      const result = transCkey2Dtskey('Type | undefined');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0048_type_undefined convert output non-empty");
      assert.strictEqual(result, "Type | undefined", "dts2cpp_convert_union_0048_type_undefined convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0048_type_undefined execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0049_TYPE_UNDEFINED
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0049_TYPE_UNDEFINED
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type Type | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0049_type_undefined', () => {
    try {
      const converted = transParseObj(doParseTs('sample318.ts', `
        function sample318(p0: Type | undefined): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample318');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type | undefined",
        "dts2cpp_convert_union_0049_type_undefined param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0049_type_undefined execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0050_SAMPLERET318
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0050_SAMPLERET318
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type Type | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0050_sampleret318', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet318.ts', `
        function sampleRet318(): Type | undefined { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet318');
      assert.strictEqual(converted.funcs[0].returns, "Type | undefined",
        "dts2cpp_convert_union_0050_sampleret318 return convert output");
      const generated = generateFunctions(converted, 'sampleRet318.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet318') || generated.napiCppContent.includes('sampleRet318')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet318'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0050_sampleret318 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0051_SAMPLECLASS318
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0051_SAMPLECLASS318
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type Type | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0051_sampleclass318', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass318.ts', `
        class SampleClass318 { field: Type | undefined; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass318');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type | undefined",
        "dts2cpp_convert_union_0051_sampleclass318 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0051_sampleclass318 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0052_TYPE_UNDEFINED
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0052_TYPE_UNDEFINED
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type Type | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0052_type_undefined', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline318.ts', `
        function pipeline318(p: Type | undefined): Type | undefined { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline318');
      assert.strictEqual(converted.funcs[0].returns, "Type | undefined",
        "dts2cpp_convert_union_0052_type_undefined pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type | undefined",
        "dts2cpp_convert_union_0052_type_undefined pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline318.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline318') || generated.napiCppContent.includes('pipeline318')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline318'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0052_type_undefined execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0053_LEFT_RIGHT_CENTER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0053_LEFT_RIGHT_CENTER
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type "left" | "right"
   *            | "center"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0053_left_right_center', () => {
    try {
      const result = transCkey2Dtskey('"left" | "right" | "center"');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0053_left_right_center convert output non-empty");
      assert.strictEqual(result, "\"left\" | \"right\" | \"center\"",
        "dts2cpp_convert_union_0053_left_right_center convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0053_left_right_center execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0054_LEFT_RIGHT_CENTER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0054_LEFT_RIGHT_CENTER
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type "left" | "right" |
   *            "center"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0054_left_right_center', () => {
    try {
      const converted = transParseObj(doParseTs('sample323.ts', `
        function sample323(p0: "left" | "right" | "center"): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample323');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"left\" | \"right\" | \"center\"",
        "dts2cpp_convert_union_0054_left_right_center param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0054_left_right_center execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0055_SAMPLERET323
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0055_SAMPLERET323
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type "left" | "right" |
   *            "center"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0055_sampleret323', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet323.ts', `
        function sampleRet323(): "left" | "right" | "center" { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet323');
      assert.strictEqual(converted.funcs[0].returns, "\"left\" | \"right\" | \"center\"",
        "dts2cpp_convert_union_0055_sampleret323 return convert output");
      const generated = generateFunctions(converted, 'sampleRet323.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet323') || generated.napiCppContent.includes('sampleRet323')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet323'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0055_sampleret323 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0056_SAMPLECLASS323
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0056_SAMPLECLASS323
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type "left" | "right" |
   *            "center"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0056_sampleclass323', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass323.ts', `
        class SampleClass323 { field: "left" | "right" | "center"; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass323');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"left\" | \"right\" | \"center\"",
        "dts2cpp_convert_union_0056_sampleclass323 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0056_sampleclass323 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0057_LEFT_RIGHT_CENTER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0057_LEFT_RIGHT_CENTER
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type "left" | "right" |
   *            "center"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0057_left_right_center', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline323.ts', `
        function pipeline323(p: "left" | "right" | "center"): "left" | "right" | "center" { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline323');
      assert.strictEqual(converted.funcs[0].returns, "\"left\" | \"right\" | \"center\"",
        "dts2cpp_convert_union_0057_left_right_center pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"left\" | \"right\" | \"center\"",
        "dts2cpp_convert_union_0057_left_right_center pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline323.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline323') || generated.napiCppContent.includes('pipeline323')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline323'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0057_left_right_center execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0058_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0058_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string | number
   *            | boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0058_string_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('string | number | boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0058_string_number_boolean convert output non-empty");
      assert.strictEqual(result, "string | number | boolean",
        "dts2cpp_convert_union_0058_string_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0058_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0059_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0059_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0059_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample327.ts', `
        function sample327(p0: string | number | boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample327');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number | boolean",
        "dts2cpp_convert_union_0059_string_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0059_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0060_SAMPLERET327
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0060_SAMPLERET327
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0060_sampleret327', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet327.ts', `
        function sampleRet327(): string | number | boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet327');
      assert.strictEqual(converted.funcs[0].returns, "string | number | boolean",
        "dts2cpp_convert_union_0060_sampleret327 return convert output");
      const generated = generateFunctions(converted, 'sampleRet327.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet327') || generated.napiCppContent.includes('sampleRet327')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet327'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0060_sampleret327 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0061_SAMPLECLASS327
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0061_SAMPLECLASS327
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0061_sampleclass327', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass327.ts', `
        class SampleClass327 { field: string | number | boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass327');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | number | boolean",
        "dts2cpp_convert_union_0061_sampleclass327 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0061_sampleclass327 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0062_STRING_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0062_STRING_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0062_string_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline327.ts', `
        function pipeline327(p: string | number | boolean): string | number | boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline327');
      assert.strictEqual(converted.funcs[0].returns, "string | number | boolean",
        "dts2cpp_convert_union_0062_string_number_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number | boolean",
        "dts2cpp_convert_union_0062_string_number_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline327.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline327') || generated.napiCppContent.includes('pipeline327')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline327'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0062_string_number_boolean execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0063_OK_ERR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0063_OK_ERR
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0063_ok_err', () => {
    try {
      const result = transCkey2Dtskey('"ok" | "err"');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0063_ok_err convert output non-empty");
      assert.strictEqual(result, "\"ok\" | \"err\"", "dts2cpp_convert_union_0063_ok_err convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0063_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0064_OK_ERR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0064_OK_ERR
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0064_ok_err', () => {
    try {
      const converted = transParseObj(doParseTs('sample332.ts', `
        function sample332(p0: "ok" | "err"): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample332');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"ok\" | \"err\"",
        "dts2cpp_convert_union_0064_ok_err param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0064_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0065_SAMPLERET332
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0065_SAMPLERET332
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0065_sampleret332', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet332.ts', `
        function sampleRet332(): "ok" | "err" { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet332');
      assert.strictEqual(converted.funcs[0].returns, "\"ok\" | \"err\"",
        "dts2cpp_convert_union_0065_sampleret332 return convert output");
      const generated = generateFunctions(converted, 'sampleRet332.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet332') || generated.napiCppContent.includes('sampleRet332')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet332'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0065_sampleret332 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0066_SAMPLECLASS332
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0066_SAMPLECLASS332
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type "ok" | "err"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0066_sampleclass332', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass332.ts', `
        class SampleClass332 { field: "ok" | "err"; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass332');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"ok\" | \"err\"",
        "dts2cpp_convert_union_0066_sampleclass332 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0066_sampleclass332 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0067_OK_ERR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0067_OK_ERR
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type "ok" | "err";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0067_ok_err', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline332.ts', `
        function pipeline332(p: "ok" | "err"): "ok" | "err" { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline332');
      assert.strictEqual(converted.funcs[0].returns, "\"ok\" | \"err\"",
        "dts2cpp_convert_union_0067_ok_err pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"ok\" | \"err\"",
        "dts2cpp_convert_union_0067_ok_err pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline332.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline332') || generated.napiCppContent.includes('pipeline332')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline332'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0067_ok_err execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0068_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0068_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0068_string_string', () => {
    try {
      const result = transCkey2Dtskey('string | string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0068_string_string convert output non-empty");
      assert.strictEqual(result, "string | string", "dts2cpp_convert_union_0068_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0068_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0069_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0069_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0069_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample335.ts', `
        function sample335(p0: string | string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample335');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string",
        "dts2cpp_convert_union_0069_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0069_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0070_SAMPLERET335
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0070_SAMPLERET335
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0070_sampleret335', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet335.ts', `
        function sampleRet335(): string | string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet335');
      assert.strictEqual(converted.funcs[0].returns, "string | string",
        "dts2cpp_convert_union_0070_sampleret335 return convert output");
      const generated = generateFunctions(converted, 'sampleRet335.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet335') || generated.napiCppContent.includes('sampleRet335')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet335'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0070_sampleret335 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0071_SAMPLECLASS335
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0071_SAMPLECLASS335
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0071_sampleclass335', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass335.ts', `
        class SampleClass335 { field: string | string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass335');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | string",
        "dts2cpp_convert_union_0071_sampleclass335 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0071_sampleclass335 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0072_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0072_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0072_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline335.ts', `
        function pipeline335(p: string | string): string | string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline335');
      assert.strictEqual(converted.funcs[0].returns, "string | string",
        "dts2cpp_convert_union_0072_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | string",
        "dts2cpp_convert_union_0072_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline335.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline335') || generated.napiCppContent.includes('pipeline335')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline335'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0072_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0073_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0073_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0073_string_any', () => {
    try {
      const result = transCkey2Dtskey('string | any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0073_string_any convert output non-empty");
      assert.strictEqual(result, "string | any", "dts2cpp_convert_union_0073_string_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0073_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0074_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0074_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0074_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample336.ts', `
        function sample336(p0: string | any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample336');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | any",
        "dts2cpp_convert_union_0074_string_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0074_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0075_SAMPLERET336
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0075_SAMPLERET336
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0075_sampleret336', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet336.ts', `
        function sampleRet336(): string | any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet336');
      assert.strictEqual(converted.funcs[0].returns, "string | any",
        "dts2cpp_convert_union_0075_sampleret336 return convert output");
      const generated = generateFunctions(converted, 'sampleRet336.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet336') || generated.napiCppContent.includes('sampleRet336')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet336'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0075_sampleret336 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0076_SAMPLECLASS336
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0076_SAMPLECLASS336
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | any; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0076_sampleclass336', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass336.ts', `
        class SampleClass336 { field: string | any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass336');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | any",
        "dts2cpp_convert_union_0076_sampleclass336 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0076_sampleclass336 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0077_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0077_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0077_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline336.ts', `
        function pipeline336(p: string | any): string | any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline336');
      assert.strictEqual(converted.funcs[0].returns, "string | any",
        "dts2cpp_convert_union_0077_string_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | any",
        "dts2cpp_convert_union_0077_string_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline336.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline336') || generated.napiCppContent.includes('pipeline336')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline336'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0077_string_any execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0078_STRING_UNKNOWN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0078_STRING_UNKNOWN
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string |
   *            unknown; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0078_string_unknown', () => {
    try {
      const result = transCkey2Dtskey('string | unknown');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0078_string_unknown convert output non-empty");
      assert.strictEqual(result, "string | unknown", "dts2cpp_convert_union_0078_string_unknown convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0078_string_unknown execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0031_STRING_SET_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0031_STRING_SET_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | Set<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0031_string_set_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample355.ts', `
        function sample355(p0: string | Set<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample355');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Set<number>",
        "dts2cpp_convert_union_0031_string_set_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0031_string_set_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0032_SAMPLERET355
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0032_SAMPLERET355
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | Set<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0032_sampleret355', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet355.ts', `
        function sampleRet355(): string | Set<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet355');
      assert.strictEqual(converted.funcs[0].returns, "string | Set<number>",
        "dts2cpp_convert_union_0032_sampleret355 return convert output");
      const generated = generateFunctions(converted, 'sampleRet355.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet355') || generated.napiCppContent.includes('sampleRet355')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet355'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0032_sampleret355 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0033_SAMPLECLASS355
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0033_SAMPLECLASS355
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | Set<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0033_sampleclass355', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass355.ts', `
        class SampleClass355 { field: string | Set<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass355');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | Set<number>",
        "dts2cpp_convert_union_0033_sampleclass355 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0033_sampleclass355 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0034_STRING_SET_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0034_STRING_SET_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string |
   *            Set<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0034_string_set_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline355.ts', `
        function pipeline355(p: string | Set<number>): string | Set<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline355');
      assert.strictEqual(converted.funcs[0].returns, "string | Set<number>",
        "dts2cpp_convert_union_0034_string_set_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Set<number>",
        "dts2cpp_convert_union_0034_string_set_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline355.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline355') || generated.napiCppContent.includes('pipeline355')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline355'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0034_string_set_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0035_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0035_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string |
   *            Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0035_string_record_string_string', () => {
    try {
      const result = transCkey2Dtskey('string | Record<string, string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0035_string_record_string_string convert output non-empty");
      assert.strictEqual(result, "string | Record<string, string>",
        "dts2cpp_convert_union_0035_string_record_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0035_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0036_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0036_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string |
   *            Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0036_string_record_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample357.ts', `
        function sample357(p0: string | Record<string, string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample357');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Record<string, string>",
        "dts2cpp_convert_union_0036_string_record_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0036_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0037_SAMPLERET357
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0037_SAMPLERET357
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string |
   *            Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0037_sampleret357', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet357.ts', `
        function sampleRet357(): string | Record<string, string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet357');
      assert.strictEqual(converted.funcs[0].returns, "string | Record<string, string>",
        "dts2cpp_convert_union_0037_sampleret357 return convert output");
      const generated = generateFunctions(converted, 'sampleRet357.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet357') || generated.napiCppContent.includes('sampleRet357')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet357'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0037_sampleret357 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0038_SAMPLECLASS357
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0038_SAMPLECLASS357
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | Record<string,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0038_sampleclass357', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass357.ts', `
        class SampleClass357 { field: string | Record<string, string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass357');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | Record<string, string>",
        "dts2cpp_convert_union_0038_sampleclass357 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0038_sampleclass357 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0039_STRING_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0039_STRING_RECORD_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string |
   *            Record<string, string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0039_string_record_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline357.ts', `
        function pipeline357(p: string | Record<string, string>): string | Record<string, string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline357');
      assert.strictEqual(converted.funcs[0].returns, "string | Record<string, string>",
        "dts2cpp_convert_union_0039_string_record_string_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Record<string, string>",
        "dts2cpp_convert_union_0039_string_record_string_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline357.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline357') || generated.napiCppContent.includes('pipeline357')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline357'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0039_string_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0040_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0040_STRING_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0040_string_promise_string', () => {
    try {
      const result = transCkey2Dtskey('string | Promise<string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0040_string_promise_string convert output non-empty");
      assert.strictEqual(result, "string | Promise<string>",
        "dts2cpp_convert_union_0040_string_promise_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0040_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0041_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0041_STRING_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0041_string_promise_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample359.ts', `
        function sample359(p0: string | Promise<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample359');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Promise<string>",
        "dts2cpp_convert_union_0041_string_promise_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0041_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0042_SAMPLERET359
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0042_SAMPLERET359
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0042_sampleret359', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet359.ts', `
        function sampleRet359(): string | Promise<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet359');
      assert.strictEqual(converted.funcs[0].returns, "string | Promise<string>",
        "dts2cpp_convert_union_0042_sampleret359 return convert output");
      const generated = generateFunctions(converted, 'sampleRet359.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet359') || generated.napiCppContent.includes('sampleRet359')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet359'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0042_sampleret359 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0043_SAMPLECLASS359
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0043_SAMPLECLASS359
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0043_sampleclass359', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass359.ts', `
        class SampleClass359 { field: string | Promise<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass359');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | Promise<string>",
        "dts2cpp_convert_union_0043_sampleclass359 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0043_sampleclass359 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0044_STRING_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0044_STRING_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string |
   *            Promise<string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0044_string_promise_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline359.ts', `
        function pipeline359(p: string | Promise<string>): string | Promise<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline359');
      assert.strictEqual(converted.funcs[0].returns, "string | Promise<string>",
        "dts2cpp_convert_union_0044_string_promise_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Promise<string>",
        "dts2cpp_convert_union_0044_string_promise_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline359.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline359') || generated.napiCppContent.includes('pipeline359')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline359'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0044_string_promise_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0045_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0045_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string |
   *            [string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0045_string_string_number', () => {
    try {
      const result = transCkey2Dtskey('string | [string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0045_string_string_number convert output non-empty");
      assert.strictEqual(result, "string | [string, number]",
        "dts2cpp_convert_union_0045_string_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0045_string_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0046_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0046_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0046_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample361.ts', `
        function sample361(p0: string | [string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample361');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | [string, number]",
        "dts2cpp_convert_union_0046_string_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0046_string_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0047_SAMPLERET361
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0047_SAMPLERET361
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0047_sampleret361', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet361.ts', `
        function sampleRet361(): string | [string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet361');
      assert.strictEqual(converted.funcs[0].returns, "string | [string, number]",
        "dts2cpp_convert_union_0047_sampleret361 return convert output");
      const generated = generateFunctions(converted, 'sampleRet361.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet361') || generated.napiCppContent.includes('sampleRet361')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet361'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0047_sampleret361 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0048_SAMPLECLASS361
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0048_SAMPLECLASS361
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0048_sampleclass361', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass361.ts', `
        class SampleClass361 { field: string | [string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass361');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | [string, number]",
        "dts2cpp_convert_union_0048_sampleclass361 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0048_sampleclass361 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0049_STRING_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0049_STRING_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0049_string_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline361.ts', `
        function pipeline361(p: string | [string, number]): string | [string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline361');
      assert.strictEqual(converted.funcs[0].returns, "string | [string, number]",
        "dts2cpp_convert_union_0049_string_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | [string, number]",
        "dts2cpp_convert_union_0049_string_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline361.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline361') || generated.napiCppContent.includes('pipeline361')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline361'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0049_string_string_number execution error: ${err}`);
    }
  });
});
