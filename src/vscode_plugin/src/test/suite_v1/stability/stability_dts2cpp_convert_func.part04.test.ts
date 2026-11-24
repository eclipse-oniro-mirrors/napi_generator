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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_P0_ANY_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_P0_ANY_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0001_p0_any_p1_number_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample100.ts', `
        function sample100(p0: (p0:any,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample100');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0001_p0_any_p1_number_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001_p0_any_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0002_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet100.ts', `
        function sampleRet100(): (p0:any,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0002_any_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet100.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0003_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass100.ts', `
        class SampleClass100 { field: (p0:any,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0003_any_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0004_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline100.ts', `
        function pipeline100(p: (p0:any,p1:number)=>any): (p0:any,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0004_any_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0004_any_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline100.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_P0_ANY_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_P0_ANY_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0005_p0_any_p1_string_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0005_p0_any_p1_string_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0005_p0_any_p1_string_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005_p0_any_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_P0_ANY_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_P0_ANY_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0006_p0_any_p1_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample101.ts', `
        function sample101(p0: (p0:any,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample101');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0006_p0_any_p1_string_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006_p0_any_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0007_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet101.ts', `
        function sampleRet101(): (p0:any,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0007_any_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet101.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0008_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass101.ts', `
        class SampleClass101 { field: (p0:any,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0008_any_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0009_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline101.ts', `
        function pipeline101(p: (p0:any,p1:string)=>any): (p0:any,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0009_any_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0009_any_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline101.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_P0_ANY_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_P0_ANY_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0010_p0_any_p1_boolean_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0010_p0_any_p1_boolean_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0010_p0_any_p1_boolean_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010_p0_any_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_P0_ANY_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_P0_ANY_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0011_p0_any_p1_boolean_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample102.ts', `
        function sample102(p0: (p0:any,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample102');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0011_p0_any_p1_boolean_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011_p0_any_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0012_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet102.ts', `
        function sampleRet102(): (p0:any,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0012_any_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet102.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:boolean)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0013_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass102.ts', `
        class SampleClass102 { field: (p0:any,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0013_any_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0014_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline102.ts', `
        function pipeline102(p: (p0:any,p1:boolean)=>any): (p0:any,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0014_any_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0014_any_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline102.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_P0_OBJECT_P1_ANY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_P0_OBJECT_P1_ANY_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0015_p0_object_p1_any_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0015_p0_object_p1_any_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0015_p0_object_p1_any_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015_p0_object_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_P0_OBJECT_P1_ANY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_P0_OBJECT_P1_ANY_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0016_p0_object_p1_any_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample103.ts', `
        function sample103(p0: (p0:object,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample103');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0016_p0_object_p1_any_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016_p0_object_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0017_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet103.ts', `
        function sampleRet103(): (p0:object,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0017_object_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet103.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:object,p1:any)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0018_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass103.ts', `
        class SampleClass103 { field: (p0:object,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0018_object_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0019_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline103.ts', `
        function pipeline103(p: (p0:object,p1:any)=>any): (p0:object,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0019_object_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0019_object_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline103.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_P0_OBJECT_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_P0_OBJECT_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0020_p0_object_p1_number_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0020_p0_object_p1_number_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0020_p0_object_p1_number_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020_p0_object_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_P0_OBJECT_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_P0_OBJECT_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0021_p0_object_p1_number_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample104.ts', `
        function sample104(p0: (p0:object,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample104');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0021_p0_object_p1_number_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021_p0_object_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0022_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet104.ts', `
        function sampleRet104(): (p0:object,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0022_object_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet104.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0023_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass104.ts', `
        class SampleClass104 { field: (p0:object,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0023_object_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0024_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline104.ts', `
        function pipeline104(p: (p0:object,p1:number)=>any): (p0:object,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0024_object_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0024_object_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline104.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_P0_OBJECT_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_P0_OBJECT_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0025_p0_object_p1_string_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0025_p0_object_p1_string_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0025_p0_object_p1_string_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025_p0_object_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_P0_OBJECT_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_P0_OBJECT_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0026_p0_object_p1_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample105.ts', `
        function sample105(p0: (p0:object,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample105');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0026_p0_object_p1_string_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026_p0_object_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0027_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet105.ts', `
        function sampleRet105(): (p0:object,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0027_object_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet105.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0028_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass105.ts', `
        class SampleClass105 { field: (p0:object,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0028_object_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0029_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline105.ts', `
        function pipeline105(p: (p0:object,p1:string)=>any): (p0:object,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0029_object_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0029_object_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline105.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_P0_OBJECT_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_P0_OBJECT_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0030_p0_object_p1_boolean_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0030_p0_object_p1_boolean_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0030_p0_object_p1_boolean_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030_p0_object_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_P0_OBJECT_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_P0_OBJECT_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0031_p0_object_p1_boolean_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample106.ts', `
        function sample106(p0: (p0:object,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample106');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0031_p0_object_p1_boolean_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031_p0_object_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0032_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet106.ts', `
        function sampleRet106(): (p0:object,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0032_object_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet106.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet106') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0033_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass106.ts', `
        class SampleClass106 { field: (p0:object,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0033_object_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0034_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline106.ts', `
        function pipeline106(p: (p0:object,p1:boolean)=>any): (p0:object,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0034_object_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0034_object_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline106.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline106') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_P0_NUMBER_P1_ANY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_P0_NUMBER_P1_ANY_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0035_p0_number_p1_any_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0035_p0_number_p1_any_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0035_p0_number_p1_any_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035_p0_number_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_P0_NUMBER_P1_ANY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_P0_NUMBER_P1_ANY_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0036_p0_number_p1_any_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample107.ts', `
        function sample107(p0: (p0:number,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample107');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0036_p0_number_p1_any_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036_p0_number_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0037_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet107.ts', `
        function sampleRet107(): (p0:number,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0037_number_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet107.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet107') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number,p1:any)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0038_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass107.ts', `
        class SampleClass107 { field: (p0:number,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0038_number_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0039_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline107.ts', `
        function pipeline107(p: (p0:number,p1:any)=>any): (p0:number,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0039_number_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0039_number_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline107.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline107') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_P0_NUMBER_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_P0_NUMBER_P1_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0040_p0_number_p1_object_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0040_p0_number_p1_object_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0040_p0_number_p1_object_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040_p0_number_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_P0_NUMBER_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_P0_NUMBER_P1_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0041_p0_number_p1_object_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample108.ts', `
        function sample108(p0: (p0:number,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample108');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0041_p0_number_p1_object_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041_p0_number_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0042_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet108.ts', `
        function sampleRet108(): (p0:number,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0042_number_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet108.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0043_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass108.ts', `
        class SampleClass108 { field: (p0:number,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0043_number_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0044_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline108.ts', `
        function pipeline108(p: (p0:number,p1:object)=>any): (p0:number,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0044_number_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0044_number_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline108.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_P0_NUMBER_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_P0_NUMBER_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0045_p0_number_p1_number_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0045_p0_number_p1_number_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0045_p0_number_p1_number_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045_p0_number_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_P0_NUMBER_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_P0_NUMBER_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0046_p0_number_p1_number_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample109.ts', `
        function sample109(p0: (p0:number,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample109');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0046_p0_number_p1_number_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046_p0_number_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0047_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet109.ts', `
        function sampleRet109(): (p0:number,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0047_number_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet109.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0048_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass109.ts', `
        class SampleClass109 { field: (p0:number,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0048_number_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0049_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline109.ts', `
        function pipeline109(p: (p0:number,p1:number)=>any): (p0:number,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0049_number_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0049_number_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline109.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_P0_NUMBER_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_P0_NUMBER_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0050_p0_number_p1_string_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0050_p0_number_p1_string_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0050_p0_number_p1_string_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050_p0_number_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_P0_NUMBER_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_P0_NUMBER_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0051_p0_number_p1_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample110.ts', `
        function sample110(p0: (p0:number,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample110');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0051_p0_number_p1_string_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051_p0_number_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0052_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet110.ts', `
        function sampleRet110(): (p0:number,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0052_number_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet110.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0053_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass110.ts', `
        class SampleClass110 { field: (p0:number,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0053_number_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0054_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline110.ts', `
        function pipeline110(p: (p0:number,p1:string)=>any): (p0:number,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0054_number_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0054_number_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline110.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0055_p0_number_p1_boolean_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0055_p0_number_p1_boolean_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0055_p0_number_p1_boolean_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055_p0_number_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_P0_NUMBER_P1_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0056_p0_number_p1_boolean_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample111.ts', `
        function sample111(p0: (p0:number,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample111');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0056_p0_number_p1_boolean_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056_p0_number_p1_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0057_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet111.ts', `
        function sampleRet111(): (p0:number,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0057_number_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet111.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0058_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass111.ts', `
        class SampleClass111 { field: (p0:number,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0058_number_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0059_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline111.ts', `
        function pipeline111(p: (p0:number,p1:boolean)=>any): (p0:number,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0059_number_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0059_number_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline111.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_P0_STRING_P1_ANY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_P0_STRING_P1_ANY_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0060_p0_string_p1_any_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0060_p0_string_p1_any_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0060_p0_string_p1_any_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060_p0_string_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_P0_STRING_P1_ANY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_P0_STRING_P1_ANY_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0061_p0_string_p1_any_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample112.ts', `
        function sample112(p0: (p0:string,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample112');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0061_p0_string_p1_any_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061_p0_string_p1_any_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_STRING_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0062_string_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet112.ts', `
        function sampleRet112(): (p0:string,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0062_string_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet112.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_STRING_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:string,p1:any)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0063_string_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass112.ts', `
        class SampleClass112 { field: (p0:string,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0063_string_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_STRING_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:any)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0064_string_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline112.ts', `
        function pipeline112(p: (p0:string,p1:any)=>any): (p0:string,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0064_string_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0064_string_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline112.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0065_p0_string_p1_object_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0065_p0_string_p1_object_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0065_p0_string_p1_object_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_P0_STRING_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_P0_STRING_P1_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0066_p0_string_p1_object_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample113.ts', `
        function sample113(p0: (p0:string,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample113');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0066_p0_string_p1_object_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066_p0_string_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_STRING_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0067_string_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet113.ts', `
        function sampleRet113(): (p0:string,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0067_string_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet113.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_STRING_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0068_string_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass113.ts', `
        class SampleClass113 { field: (p0:string,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0068_string_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_STRING_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0069_string_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline113.ts', `
        function pipeline113(p: (p0:string,p1:object)=>any): (p0:string,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0069_string_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0069_string_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline113.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0070_p0_string_p1_number_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0070_p0_string_p1_number_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0070_p0_string_p1_number_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_P0_STRING_P1_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_P0_STRING_P1_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0071_p0_string_p1_number_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample114.ts', `
        function sample114(p0: (p0:string,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample114');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0071_p0_string_p1_number_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071_p0_string_p1_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_STRING_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0072_string_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet114.ts', `
        function sampleRet114(): (p0:string,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0072_string_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet114.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_STRING_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0073_string_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass114.ts', `
        class SampleClass114 { field: (p0:string,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0073_string_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_STRING_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_STRING_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:number)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0074_string_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline114.ts', `
        function pipeline114(p: (p0:string,p1:number)=>any): (p0:string,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0074_string_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0074_string_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline114.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074_string_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0075_p0_string_p1_string_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0075_p0_string_p1_string_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0075_p0_string_p1_string_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_P0_STRING_P1_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_P0_STRING_P1_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0076_p0_string_p1_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample115.ts', `
        function sample115(p0: (p0:string,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample115');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0076_p0_string_p1_string_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076_p0_string_p1_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0077_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet115.ts', `
        function sampleRet115(): (p0:string,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0077_string_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet115.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet115') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:string)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0078_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass115.ts', `
        class SampleClass115 { field: (p0:string,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0078_string_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078_string_p1_string execution error: ${String(err)}`);
    }
  });
});
