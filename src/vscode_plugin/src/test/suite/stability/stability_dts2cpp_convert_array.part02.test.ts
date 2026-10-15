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

suite('Stability_DTS2CPP_CONVERT_ARRAY_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_ARRAY_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0073_STRING_ARRAY_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0073_STRING_ARRAY_NUMBER
   * @tc.desc   Stability convert dts2cpp/array: baseline type-string convert; type string |
   *            Array<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0073_string_array_number', () => {
    try {
      const result = transCkey2Dtskey('string | Array<number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_array_0073_string_array_number convert output non-empty");
      assert.strictEqual(result, "string | Array<number>",
        "dts2cpp_convert_array_0073_string_array_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0073_string_array_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0074_STRING_ARRAY_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0074_STRING_ARRAY_NUMBER
   * @tc.desc   Stability convert dts2cpp/array: function-param convert; type string |
   *            Array<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0074_string_array_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample351.ts', `
        function sample351(p0: string | Array<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample351');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Array<number>",
        "dts2cpp_convert_array_0074_string_array_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0074_string_array_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0075_SAMPLERET351
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0075_SAMPLERET351
   * @tc.desc   Stability convert dts2cpp/array: function-return convert; type string |
   *            Array<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0075_sampleret351', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet351.ts', `
        function sampleRet351(): string | Array<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet351');
      assert.strictEqual(converted.funcs[0].returns, "string | Array<number>",
        "dts2cpp_convert_array_0075_sampleret351 return convert output");
      const generated = generateFunctions(converted, 'sampleRet351.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet351') || generated.napiCppContent.includes('sampleRet351')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet351'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0075_sampleret351 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0076_SAMPLECLASS351
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0076_SAMPLECLASS351
   * @tc.desc   Stability convert dts2cpp/array: class-field convert; type string | Array<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0076_sampleclass351', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass351.ts', `
        class SampleClass351 { field: string | Array<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass351');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | Array<number>",
        "dts2cpp_convert_array_0076_sampleclass351 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0076_sampleclass351 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0077_STRING_ARRAY_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0077_STRING_ARRAY_NUMBER
   * @tc.desc   Stability convert dts2cpp/array: parse-convert-gen pipeline; type string |
   *            Array<number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0077_string_array_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline351.ts', `
        function pipeline351(p: string | Array<number>): string | Array<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline351');
      assert.strictEqual(converted.funcs[0].returns, "string | Array<number>",
        "dts2cpp_convert_array_0077_string_array_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | Array<number>",
        "dts2cpp_convert_array_0077_string_array_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline351.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline351') || generated.napiCppContent.includes('pipeline351')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline351'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0077_string_array_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0078_RECORD_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0078_RECORD_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/array: baseline type-string convert; type Record<string,
   *            string>[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0078_record_string_string', () => {
    try {
      const result = transCkey2Dtskey('Record<string, string>[]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_array_0078_record_string_string convert output non-empty");
      assert.strictEqual(result, "Record<string, string>[]",
        "dts2cpp_convert_array_0078_record_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0078_record_string_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0079
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_ARRAY_0079
   * @tc.desc   Stability convert dts2cpp/array: function-param convert; type Record<string,
   *            string>[]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_array_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sample356.ts', `
        function sample356(p0: Record<string, string>[]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample356');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, string>[]",
        "dts2cpp_convert_array_0079 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0079 execution error: ${err}`);
    }
  });
});
