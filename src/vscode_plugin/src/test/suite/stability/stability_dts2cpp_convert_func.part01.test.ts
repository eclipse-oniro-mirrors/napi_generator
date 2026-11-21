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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_CALLBACK_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_CALLBACK_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Callback<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0001_callback_number', () => {
    try {
      const result = transCkey2Dtskey('Callback<number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0001_callback_number convert output non-empty");
      assert.strictEqual(result, "std::function<void(double)>",
        "dts2cpp_convert_func_0001_callback_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001_callback_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_CALLBACK_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_CALLBACK_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0002_callback_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample20.ts', `
        function sample20(p0: Callback<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample20');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "dts2cpp_convert_func_0002_callback_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002_callback_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_STD_FUNCTION_VOID_DOUBLE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_STD_FUNCTION_VOID_DOUBLE
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0003_std_function_void_double', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet20.ts', `
        function sampleRet20(): Callback<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "dts2cpp_convert_func_0003_std_function_void_double return convert output");
      const generated = generateFunctions(converted, 'sampleRet20.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003_std_function_void_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_STD_FUNCTION_VOID_DOUBLE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_STD_FUNCTION_VOID_DOUBLE
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0004_std_function_void_double', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass20.ts', `
        class SampleClass20 { field: Callback<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
        "dts2cpp_convert_func_0004_std_function_void_double class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004_std_function_void_double execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_CALLBACK_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_CALLBACK_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Callback<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0005_callback_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline20.ts', `
        function pipeline20(p: Callback<number>): Callback<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "dts2cpp_convert_func_0005_callback_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "dts2cpp_convert_func_0005_callback_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline20.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005_callback_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_CALLBACK_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_CALLBACK_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Callback<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0006_callback_string', () => {
    try {
      const result = transCkey2Dtskey('Callback<string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0006_callback_string convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::string)>",
        "dts2cpp_convert_func_0006_callback_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006_callback_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_CALLBACK_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_CALLBACK_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0007_callback_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample21.ts', `
        function sample21(p0: Callback<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample21');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "dts2cpp_convert_func_0007_callback_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007_callback_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_STD_FUNCTION_VOID_STD_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_STD_FUNCTION_VOID_STD_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0008_std_function_void_std_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet21.ts', `
        function sampleRet21(): Callback<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "dts2cpp_convert_func_0008_std_function_void_std_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet21.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008_std_function_void_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_STD_FUNCTION_VOID_STD_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_STD_FUNCTION_VOID_STD_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0009_std_function_void_std_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass21.ts', `
        class SampleClass21 { field: Callback<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string)>",
        "dts2cpp_convert_func_0009_std_function_void_std_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009_std_function_void_std_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_CALLBACK_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_CALLBACK_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Callback<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0010_callback_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline21.ts', `
        function pipeline21(p: Callback<string>): Callback<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "dts2cpp_convert_func_0010_callback_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "dts2cpp_convert_func_0010_callback_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline21.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010_callback_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_CALLBACK_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_CALLBACK_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            Callback<boolean>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0011_callback_boolean', () => {
    try {
      const result = transCkey2Dtskey('Callback<boolean>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0011_callback_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool)>",
        "dts2cpp_convert_func_0011_callback_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011_callback_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_CALLBACK_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_CALLBACK_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0012_callback_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample22.ts', `
        function sample22(p0: Callback<boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample22');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "dts2cpp_convert_func_0012_callback_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012_callback_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_STD_FUNCTION_VOID_BOOL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_STD_FUNCTION_VOID_BOOL
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0013_std_function_void_bool', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet22.ts', `
        function sampleRet22(): Callback<boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "dts2cpp_convert_func_0013_std_function_void_bool return convert output");
      const generated = generateFunctions(converted, 'sampleRet22.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013_std_function_void_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_STD_FUNCTION_VOID_BOOL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_STD_FUNCTION_VOID_BOOL
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0014_std_function_void_bool', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass22.ts', `
        class SampleClass22 { field: Callback<boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool)>",
        "dts2cpp_convert_func_0014_std_function_void_bool class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014_std_function_void_bool execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_CALLBACK_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_CALLBACK_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Callback<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0015_callback_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline22.ts', `
        function pipeline22(p: Callback<boolean>): Callback<boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "dts2cpp_convert_func_0015_callback_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "dts2cpp_convert_func_0015_callback_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline22.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015_callback_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_CALLBACK_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_CALLBACK_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Callback<void>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0016_callback_void', () => {
    try {
      const result = transCkey2Dtskey('Callback<void>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0016_callback_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(void)>", "dts2cpp_convert_func_0016_callback_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016_callback_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_CALLBACK_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_CALLBACK_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<void>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0017_callback_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample23.ts', `
        function sample23(p0: Callback<void>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample23');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(void)>",
        "dts2cpp_convert_func_0017_callback_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017_callback_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_STD_FUNCTION_VOID_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_STD_FUNCTION_VOID_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<void>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0018_std_function_void_void', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet23.ts', `
        function sampleRet23(): Callback<void> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(void)>",
        "dts2cpp_convert_func_0018_std_function_void_void return convert output");
      const generated = generateFunctions(converted, 'sampleRet23.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018_std_function_void_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_STD_FUNCTION_VOID_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_STD_FUNCTION_VOID_VOID
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<void>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0019_std_function_void_void', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass23.ts', `
        class SampleClass23 { field: Callback<void>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(void)>",
        "dts2cpp_convert_func_0019_std_function_void_void class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019_std_function_void_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_CALLBACK_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_CALLBACK_VOID
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Callback<void>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0020_callback_void', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline23.ts', `
        function pipeline23(p: Callback<void>): Callback<void> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(void)>",
        "dts2cpp_convert_func_0020_callback_void pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(void)>",
        "dts2cpp_convert_func_0020_callback_void pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline23.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020_callback_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_CALLBACK_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_CALLBACK_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            Callback<number[]>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0021_callback_number', () => {
    try {
      const result = transCkey2Dtskey('Callback<number[]>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0021_callback_number convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0021_callback_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021_callback_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_CALLBACK_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_CALLBACK_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<number[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0022_callback_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample24.ts', `
        function sample24(p0: Callback<number[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample24');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0022_callback_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022_callback_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_STD_FUNCTION_VOID_STD_VEC_ECDF8D
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_STD_FUNCTION_VOID_STD_VEC_ECDF8D
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<number[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0023_std_function_void_std_vec_ecdf8d', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet24.ts', `
        function sampleRet24(): Callback<number[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0023_std_function_void_std_vec_ecdf8d return convert output");
      const generated = generateFunctions(converted, 'sampleRet24.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023_std_function_void_std_vec_ecdf8d execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_STD_FUNCTION_VOID_STD_VEC_ECDF8D
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_STD_FUNCTION_VOID_STD_VEC_ECDF8D
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<number[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0024_std_function_void_std_vec_ecdf8d', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass24.ts', `
        class SampleClass24 { field: Callback<number[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0024_std_function_void_std_vec_ecdf8d class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024_std_function_void_std_vec_ecdf8d execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_CALLBACK_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_CALLBACK_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Callback<number[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0025_callback_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline24.ts', `
        function pipeline24(p: Callback<number[]>): Callback<number[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0025_callback_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0025_callback_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline24.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025_callback_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_CALLBACK_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_CALLBACK_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            Callback<string[]>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0026_callback_string', () => {
    try {
      const result = transCkey2Dtskey('Callback<string[]>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0026_callback_string convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0026_callback_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026_callback_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_CALLBACK_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_CALLBACK_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<string[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0027_callback_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample25.ts', `
        function sample25(p0: Callback<string[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample25');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0027_callback_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027_callback_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_STD_FUNCTION_VOID_STD_VEC_BABEF9
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_STD_FUNCTION_VOID_STD_VEC_BABEF9
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<string[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0028_std_function_void_std_vec_babef9', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet25.ts', `
        function sampleRet25(): Callback<string[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0028_std_function_void_std_vec_babef9 return convert output");
      const generated = generateFunctions(converted, 'sampleRet25.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028_std_function_void_std_vec_babef9 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_STD_FUNCTION_VOID_STD_VEC_BABEF9
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_STD_FUNCTION_VOID_STD_VEC_BABEF9
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<string[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0029_std_function_void_std_vec_babef9', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass25.ts', `
        class SampleClass25 { field: Callback<string[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0029_std_function_void_std_vec_babef9 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029_std_function_void_std_vec_babef9 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_CALLBACK_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_CALLBACK_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Callback<string[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0030_callback_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline25.ts', `
        function pipeline25(p: Callback<string[]>): Callback<string[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0030_callback_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0030_callback_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline25.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030_callback_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_CALLBACK_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_CALLBACK_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            Callback<boolean[]>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0031_callback_boolean', () => {
    try {
      const result = transCkey2Dtskey('Callback<boolean[]>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0031_callback_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0031_callback_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031_callback_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_CALLBACK_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_CALLBACK_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<boolean[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0032_callback_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample26.ts', `
        function sample26(p0: Callback<boolean[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample26');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0032_callback_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032_callback_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_STD_FUNCTION_VOID_STD_VEC_8E4C9D
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_STD_FUNCTION_VOID_STD_VEC_8E4C9D
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<boolean[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0033_std_function_void_std_vec_8e4c9d', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet26.ts', `
        function sampleRet26(): Callback<boolean[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0033_std_function_void_std_vec_8e4c9d return convert output");
      const generated = generateFunctions(converted, 'sampleRet26.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033_std_function_void_std_vec_8e4c9d execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_STD_FUNCTION_VOID_STD_VEC_8E4C9D
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_STD_FUNCTION_VOID_STD_VEC_8E4C9D
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<boolean[]>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0034_std_function_void_std_vec_8e4c9d', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass26.ts', `
        class SampleClass26 { field: Callback<boolean[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0034_std_function_void_std_vec_8e4c9d class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034_std_function_void_std_vec_8e4c9d execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_CALLBACK_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_CALLBACK_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            Callback<boolean[]>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0035_callback_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline26.ts', `
        function pipeline26(p: Callback<boolean[]>): Callback<boolean[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0035_callback_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0035_callback_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline26.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035_callback_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_P0_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_P0_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0036_p0_number_number', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0036_p0_number_number convert output non-empty");
      assert.strictEqual(result, "std::function<double(double)>",
        "dts2cpp_convert_func_0036_p0_number_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036_p0_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_P0_NUMBER_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_P0_NUMBER_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:number)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0037_p0_number_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample27.ts', `
        function sample27(p0: (p0:number)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample27');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "dts2cpp_convert_func_0037_p0_number_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037_p0_number_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:number)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0038_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet27.ts', `
        function sampleRet27(): (p0:number)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "dts2cpp_convert_func_0038_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet27.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0039_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass27.ts', `
        class SampleClass27 { field: (p0:number)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
        "dts2cpp_convert_func_0039_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0040_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline27.ts', `
        function pipeline27(p: (p0:number)=>number): (p0:number)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "dts2cpp_convert_func_0040_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "dts2cpp_convert_func_0040_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline27.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_P0_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_P0_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0041_p0_string_number', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0041_p0_string_number convert output non-empty");
      assert.strictEqual(result, "std::function<double(std::string)>",
        "dts2cpp_convert_func_0041_p0_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041_p0_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_P0_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_P0_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:string)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0042_p0_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample28.ts', `
        function sample28(p0: (p0:string)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample28');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "dts2cpp_convert_func_0042_p0_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042_p0_string_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:string)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0043_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet28.ts', `
        function sampleRet28(): (p0:string)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string)>",
        "dts2cpp_convert_func_0043_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet28.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:string)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0044_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass28.ts', `
        class SampleClass28 { field: (p0:string)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string)>",
        "dts2cpp_convert_func_0044_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0045_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline28.ts', `
        function pipeline28(p: (p0:string)=>number): (p0:string)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string)>",
        "dts2cpp_convert_func_0045_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "dts2cpp_convert_func_0045_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline28.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_P0_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_P0_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0046_p0_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0046_p0_boolean_number convert output non-empty");
      assert.strictEqual(result, "std::function<double(bool)>",
        "dts2cpp_convert_func_0046_p0_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046_p0_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_P0_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_P0_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:boolean)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0047_p0_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample29.ts', `
        function sample29(p0: (p0:boolean)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample29');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "dts2cpp_convert_func_0047_p0_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047_p0_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:boolean)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0048_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet29.ts', `
        function sampleRet29(): (p0:boolean)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool)>",
        "dts2cpp_convert_func_0048_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet29.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:boolean)=>number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0049_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass29.ts', `
        class SampleClass29 { field: (p0:boolean)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool)>",
        "dts2cpp_convert_func_0049_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0050_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline29.ts', `
        function pipeline29(p: (p0:boolean)=>number): (p0:boolean)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool)>",
        "dts2cpp_convert_func_0050_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "dts2cpp_convert_func_0050_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline29.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_P0_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_P0_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0051_p0_number_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0051_p0_number_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(double)>",
        "dts2cpp_convert_func_0051_p0_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051_p0_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_P0_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_P0_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:number)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0052_p0_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample30.ts', `
        function sample30(p0: (p0:number)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample30');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "dts2cpp_convert_func_0052_p0_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052_p0_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:number)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0053_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet30.ts', `
        function sampleRet30(): (p0:number)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double)>",
        "dts2cpp_convert_func_0053_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet30.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0054_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass30.ts', `
        class SampleClass30 { field: (p0:number)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double)>",
        "dts2cpp_convert_func_0054_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0055_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline30.ts', `
        function pipeline30(p: (p0:number)=>string): (p0:number)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double)>",
        "dts2cpp_convert_func_0055_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "dts2cpp_convert_func_0055_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline30.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_P0_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_P0_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0056_p0_string_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0056_p0_string_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0056_p0_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056_p0_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_P0_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_P0_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:string)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0057_p0_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample31.ts', `
        function sample31(p0: (p0:string)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample31');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0057_p0_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057_p0_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:string)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0058_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet31.ts', `
        function sampleRet31(): (p0:string)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0058_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet31.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:string)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0059_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass31.ts', `
        class SampleClass31 { field: (p0:string)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0059_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0060_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline31.ts', `
        function pipeline31(p: (p0:string)=>string): (p0:string)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0060_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0060_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline31.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_P0_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_P0_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0061_p0_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0061_p0_boolean_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0061_p0_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061_p0_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_P0_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_P0_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:boolean)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0062_p0_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample32.ts', `
        function sample32(p0: (p0:boolean)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample32');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0062_p0_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062_p0_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:boolean)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0063_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet32.ts', `
        function sampleRet32(): (p0:boolean)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0063_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet32.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:boolean)=>string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0064_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass32.ts', `
        class SampleClass32 { field: (p0:boolean)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0064_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0065_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline32.ts', `
        function pipeline32(p: (p0:boolean)=>string): (p0:boolean)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0065_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0065_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline32.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_P0_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_P0_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0066_p0_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0066_p0_number_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(double)>",
        "dts2cpp_convert_func_0066_p0_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066_p0_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_P0_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_P0_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:number)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0067_p0_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample33.ts', `
        function sample33(p0: (p0:number)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample33');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "dts2cpp_convert_func_0067_p0_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067_p0_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:number)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0068_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet33.ts', `
        function sampleRet33(): (p0:number)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double)>",
        "dts2cpp_convert_func_0068_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet33.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0069_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass33.ts', `
        class SampleClass33 { field: (p0:number)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double)>",
        "dts2cpp_convert_func_0069_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0070_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline33.ts', `
        function pipeline33(p: (p0:number)=>boolean): (p0:number)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double)>",
        "dts2cpp_convert_func_0070_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "dts2cpp_convert_func_0070_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline33.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_P0_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_P0_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0071_p0_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0071_p0_string_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0071_p0_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071_p0_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_P0_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_P0_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:string)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0072_p0_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample34.ts', `
        function sample34(p0: (p0:string)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample34');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0072_p0_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072_p0_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:string)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0073_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet34.ts', `
        function sampleRet34(): (p0:string)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0073_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet34.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet34') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:string)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0074_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass34.ts', `
        class SampleClass34 { field: (p0:string)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0074_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0075_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline34.ts', `
        function pipeline34(p: (p0:string)=>boolean): (p0:string)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0075_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0075_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline34.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline34') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_P0_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_P0_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0076_p0_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0076_p0_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(bool)>",
        "dts2cpp_convert_func_0076_p0_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076_p0_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_P0_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_P0_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:boolean)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0077_p0_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample35.ts', `
        function sample35(p0: (p0:boolean)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample35');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
        "dts2cpp_convert_func_0077_p0_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077_p0_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:boolean)=>boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0078_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet35.ts', `
        function sampleRet35(): (p0:boolean)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool)>",
        "dts2cpp_convert_func_0078_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet35.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet35') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078_boolean execution error: ${String(err)}`);
    }
  });
});
