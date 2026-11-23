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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_ANY_P1_OBJECT_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_ANY_P1_OBJECT_V2
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0001_any_p1_object_v2', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline122.ts', `
        function pipeline122(p: (p0:any,p1:object)=>object): (p0:any,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0001_any_p1_object_v2 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0001_any_p1_object_v2 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline122.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline122') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001_any_p1_object_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_P0_ANY_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_P0_ANY_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0002_p0_any_p1_number_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0002_p0_any_p1_number_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0002_p0_any_p1_number_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002_p0_any_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_P0_ANY_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_P0_ANY_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0003_p0_any_p1_number_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample123.ts', `
        function sample123(p0: (p0:any,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample123');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0003_p0_any_p1_number_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003_p0_any_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_ANY_P1_NUMBER_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_ANY_P1_NUMBER_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0004_any_p1_number_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet123.ts', `
        function sampleRet123(): (p0:any,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0004_any_p1_number_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet123.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004_any_p1_number_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0005_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass123.ts', `
        class SampleClass123 { field: (p0:any,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0005_any_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0006_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline123.ts', `
        function pipeline123(p: (p0:any,p1:number)=>object): (p0:any,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0006_any_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0006_any_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline123.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_P0_ANY_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_P0_ANY_P1_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0007_p0_any_p1_string_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0007_p0_any_p1_string_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0007_p0_any_p1_string_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007_p0_any_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_P0_ANY_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_P0_ANY_P1_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0008_p0_any_p1_string_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample124.ts', `
        function sample124(p0: (p0:any,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample124');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0008_p0_any_p1_string_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008_p0_any_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_ANY_P1_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_ANY_P1_STRING_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0009_any_p1_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet124.ts', `
        function sampleRet124(): (p0:any,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0009_any_p1_string_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet124.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009_any_p1_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0010_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass124.ts', `
        class SampleClass124 { field: (p0:any,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0010_any_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0011_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline124.ts', `
        function pipeline124(p: (p0:any,p1:string)=>object): (p0:any,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0011_any_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0011_any_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline124.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0012_p0_any_p1_boolean_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0012_p0_any_p1_boolean_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0012_p0_any_p1_boolean_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012_p0_any_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_P0_ANY_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0013_p0_any_p1_boolean_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample125.ts', `
        function sample125(p0: (p0:any,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample125');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0013_p0_any_p1_boolean_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013_p0_any_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_ANY_P1_BOOLEAN_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_ANY_P1_BOOLEAN_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0014_any_p1_boolean_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet125.ts', `
        function sampleRet125(): (p0:any,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0014_any_p1_boolean_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet125.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014_any_p1_boolean_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0015_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass125.ts', `
        class SampleClass125 { field: (p0:any,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0015_any_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0016_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline125.ts', `
        function pipeline125(p: (p0:any,p1:boolean)=>object): (p0:any,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0016_any_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0016_any_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline125.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_P0_OBJECT_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_P0_OBJECT_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0017_p0_object_p1_any_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0017_p0_object_p1_any_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0017_p0_object_p1_any_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017_p0_object_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_P0_OBJECT_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_P0_OBJECT_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0018_p0_object_p1_any_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample126.ts', `
        function sample126(p0: (p0:object,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample126');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0018_p0_object_p1_any_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018_p0_object_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_OBJECT_P1_ANY_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_OBJECT_P1_ANY_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0019_object_p1_any_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet126.ts', `
        function sampleRet126(): (p0:object,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0019_object_p1_any_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet126.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019_object_p1_any_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0020_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass126.ts', `
        class SampleClass126 { field: (p0:object,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0020_object_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0021_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline126.ts', `
        function pipeline126(p: (p0:object,p1:any)=>object): (p0:object,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0021_object_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0021_object_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline126.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0022_p0_object_p1_object_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0022_p0_object_p1_object_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0022_p0_object_p1_object_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022_p0_object_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_P0_OBJECT_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0023_p0_object_p1_object_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample127.ts', `
        function sample127(p0: (p0:object,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample127');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0023_p0_object_p1_object_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023_p0_object_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0024_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet127.ts', `
        function sampleRet127(): (p0:object,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0024_object_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet127.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0025_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass127.ts', `
        class SampleClass127 { field: (p0:object,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0025_object_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0026_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline127.ts', `
        function pipeline127(p: (p0:object,p1:object)=>object): (p0:object,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0026_object_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0026_object_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline127.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0027_p0_object_p1_number_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0027_p0_object_p1_number_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0027_p0_object_p1_number_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027_p0_object_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_P0_OBJECT_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0028_p0_object_p1_number_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample128.ts', `
        function sample128(p0: (p0:object,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample128');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0028_p0_object_p1_number_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028_p0_object_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0029_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet128.ts', `
        function sampleRet128(): (p0:object,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0029_object_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet128.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0030_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass128.ts', `
        class SampleClass128 { field: (p0:object,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0030_object_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0031_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline128.ts', `
        function pipeline128(p: (p0:object,p1:number)=>object): (p0:object,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0031_object_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0031_object_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline128.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_P0_OBJECT_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_P0_OBJECT_P1_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0032_p0_object_p1_string_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0032_p0_object_p1_string_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0032_p0_object_p1_string_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032_p0_object_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_P0_OBJECT_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_P0_OBJECT_P1_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0033_p0_object_p1_string_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample129.ts', `
        function sample129(p0: (p0:object,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample129');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0033_p0_object_p1_string_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033_p0_object_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0034_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet129.ts', `
        function sampleRet129(): (p0:object,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0034_object_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet129.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0035_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass129.ts', `
        class SampleClass129 { field: (p0:object,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0035_object_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0036_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline129.ts', `
        function pipeline129(p: (p0:object,p1:string)=>object): (p0:object,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0036_object_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0036_object_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline129.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0037_p0_object_p1_boolean_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0037_p0_object_p1_boolean_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0037_p0_object_p1_boolean_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037_p0_object_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_P0_OBJECT_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0038_p0_object_p1_boolean_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample130.ts', `
        function sample130(p0: (p0:object,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample130');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0038_p0_object_p1_boolean_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038_p0_object_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0039_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet130.ts', `
        function sampleRet130(): (p0:object,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0039_object_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet130.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0040_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass130.ts', `
        class SampleClass130 { field: (p0:object,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0040_object_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0041_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline130.ts', `
        function pipeline130(p: (p0:object,p1:boolean)=>object): (p0:object,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0041_object_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0041_object_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline130.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_P0_NUMBER_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_P0_NUMBER_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0042_p0_number_p1_any_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0042_p0_number_p1_any_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0042_p0_number_p1_any_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042_p0_number_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_P0_NUMBER_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_P0_NUMBER_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0043_p0_number_p1_any_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample131.ts', `
        function sample131(p0: (p0:number,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample131');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0043_p0_number_p1_any_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043_p0_number_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0044_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet131.ts', `
        function sampleRet131(): (p0:number,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0044_number_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet131.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet131') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0045_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass131.ts', `
        class SampleClass131 { field: (p0:number,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0045_number_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0046_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline131.ts', `
        function pipeline131(p: (p0:number,p1:any)=>object): (p0:number,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0046_number_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0046_number_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline131.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline131') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_P0_NUMBER_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_P0_NUMBER_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0047_p0_number_p1_object_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0047_p0_number_p1_object_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0047_p0_number_p1_object_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047_p0_number_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_P0_NUMBER_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_P0_NUMBER_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0048_p0_number_p1_object_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample132.ts', `
        function sample132(p0: (p0:number,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample132');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0048_p0_number_p1_object_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048_p0_number_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0049_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet132.ts', `
        function sampleRet132(): (p0:number,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0049_number_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet132.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet132') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0050_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass132.ts', `
        class SampleClass132 { field: (p0:number,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0050_number_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0051_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline132.ts', `
        function pipeline132(p: (p0:number,p1:object)=>object): (p0:number,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0051_number_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0051_number_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline132.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline132') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_P0_NUMBER_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_P0_NUMBER_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0052_p0_number_p1_number_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0052_p0_number_p1_number_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0052_p0_number_p1_number_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052_p0_number_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_P0_NUMBER_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_P0_NUMBER_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0053_p0_number_p1_number_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample133.ts', `
        function sample133(p0: (p0:number,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample133');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0053_p0_number_p1_number_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053_p0_number_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0054_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet133.ts', `
        function sampleRet133(): (p0:number,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0054_number_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet133.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet133') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0055_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass133.ts', `
        class SampleClass133 { field: (p0:number,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0055_number_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0056_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline133.ts', `
        function pipeline133(p: (p0:number,p1:number)=>object): (p0:number,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0056_number_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0056_number_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline133.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline133') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_P0_NUMBER_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_P0_NUMBER_P1_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0057_p0_number_p1_string_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0057_p0_number_p1_string_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0057_p0_number_p1_string_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057_p0_number_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_P0_NUMBER_P1_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_P0_NUMBER_P1_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0058_p0_number_p1_string_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample134.ts', `
        function sample134(p0: (p0:number,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample134');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0058_p0_number_p1_string_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058_p0_number_p1_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0059_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet134.ts', `
        function sampleRet134(): (p0:number,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0059_number_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet134.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet134') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0060_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass134.ts', `
        class SampleClass134 { field: (p0:number,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0060_number_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0061_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline134.ts', `
        function pipeline134(p: (p0:number,p1:string)=>object): (p0:number,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0061_number_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0061_number_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline134.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline134') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_P0_NUMBER_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_P0_NUMBER_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0062_p0_number_p1_boolean_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0062_p0_number_p1_boolean_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0062_p0_number_p1_boolean_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062_p0_number_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_P0_NUMBER_P1_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_P0_NUMBER_P1_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0063_p0_number_p1_boolean_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample135.ts', `
        function sample135(p0: (p0:number,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample135');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0063_p0_number_p1_boolean_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063_p0_number_p1_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_NUMBER_P1_BOOLEAN_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_NUMBER_P1_BOOLEAN_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0064_number_p1_boolean_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet135.ts', `
        function sampleRet135(): (p0:number,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0064_number_p1_boolean_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet135.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064_number_p1_boolean_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_NUMBER_P1_BOOLEAN_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_NUMBER_P1_BOOLEAN_V2
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0065_number_p1_boolean_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass135.ts', `
        class SampleClass135 { field: (p0:number,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0065_number_p1_boolean_v2 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065_number_p1_boolean_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_NUMBER_P1_BOOLEAN_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_NUMBER_P1_BOOLEAN_V2
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0066_number_p1_boolean_v2', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline135.ts', `
        function pipeline135(p: (p0:number,p1:boolean)=>object): (p0:number,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0066_number_p1_boolean_v2 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0066_number_p1_boolean_v2 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline135.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066_number_p1_boolean_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_P0_STRING_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_P0_STRING_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0067_p0_string_p1_any_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0067_p0_string_p1_any_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0067_p0_string_p1_any_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067_p0_string_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_P0_STRING_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_P0_STRING_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0068_p0_string_p1_any_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample136.ts', `
        function sample136(p0: (p0:string,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample136');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0068_p0_string_p1_any_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068_p0_string_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_STRING_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0069_string_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet136.ts', `
        function sampleRet136(): (p0:string,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0069_string_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet136.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_STRING_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0070_string_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass136.ts', `
        class SampleClass136 { field: (p0:string,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0070_string_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_STRING_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_STRING_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0071_string_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline136.ts', `
        function pipeline136(p: (p0:string,p1:any)=>object): (p0:string,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0071_string_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0071_string_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline136.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071_string_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_P0_STRING_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_P0_STRING_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0072_p0_string_p1_object_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0072_p0_string_p1_object_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0072_p0_string_p1_object_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072_p0_string_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_P0_STRING_P1_OBJECT_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_P0_STRING_P1_OBJECT_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0073_p0_string_p1_object_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample137.ts', `
        function sample137(p0: (p0:string,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample137');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0073_p0_string_p1_object_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073_p0_string_p1_object_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_STRING_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0074_string_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet137.ts', `
        function sampleRet137(): (p0:string,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0074_string_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet137.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_STRING_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0075_string_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass137.ts', `
        class SampleClass137 { field: (p0:string,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0075_string_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_STRING_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_STRING_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:object)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0076_string_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline137.ts', `
        function pipeline137(p: (p0:string,p1:object)=>object): (p0:string,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0076_string_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0076_string_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline137.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076_string_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_P0_STRING_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_P0_STRING_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0077_p0_string_p1_number_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0077_p0_string_p1_number_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0077_p0_string_p1_number_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077_p0_string_p1_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_P0_STRING_P1_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_P0_STRING_P1_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0078_p0_string_p1_number_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample138.ts', `
        function sample138(p0: (p0:string,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample138');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0078_p0_string_p1_number_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078_p0_string_p1_number_object execution error: ${String(err)}`);
    }
  });
});
