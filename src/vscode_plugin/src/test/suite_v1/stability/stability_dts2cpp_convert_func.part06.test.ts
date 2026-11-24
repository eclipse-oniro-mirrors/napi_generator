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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0001_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet145.ts', `
        function sampleRet145(): (p0:boolean,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0001_boolean_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet145.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0002_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass145.ts', `
        class SampleClass145 { field: (p0:boolean,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0002_boolean_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0003_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline145.ts', `
        function pipeline145(p: (p0:boolean,p1:boolean)=>object): (p0:boolean,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0003_boolean_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0003_boolean_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline145.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0004_p0_any_p1_any_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0004_p0_any_p1_any_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0004_p0_any_p1_any_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_P0_ANY_P1_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_P0_ANY_P1_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:any,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0005_p0_any_p1_any_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample146.ts', `
        function sample146(p0: (p0:any,p1:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample146');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0005_p0_any_p1_any_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005_p0_any_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_ANY_P1_ANY_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_ANY_P1_ANY_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:any,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0006_any_p1_any_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet146.ts', `
        function sampleRet146(): (p0:any,p1:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0006_any_p1_any_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet146.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006_any_p1_any_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_ANY_P1_ANY_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_ANY_P1_ANY_V2
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0007_any_p1_any_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass146.ts', `
        class SampleClass146 { field: (p0:any,p1:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0007_any_p1_any_v2 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007_any_p1_any_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_ANY_P1_ANY_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_ANY_P1_ANY_V2
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0008_any_p1_any_v2', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline146.ts', `
        function pipeline146(p: (p0:any,p1:any)=>void): (p0:any,p1:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0008_any_p1_any_v2 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0008_any_p1_any_v2 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline146.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008_any_p1_any_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_P0_ANY_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_P0_ANY_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0009_p0_any_p1_number_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0009_p0_any_p1_number_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0009_p0_any_p1_number_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009_p0_any_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_P0_ANY_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_P0_ANY_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0010_p0_any_p1_number_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample147.ts', `
        function sample147(p0: (p0:any,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample147');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0010_p0_any_p1_number_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010_p0_any_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0011_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet147.ts', `
        function sampleRet147(): (p0:any,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0011_any_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet147.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:number)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0012_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass147.ts', `
        class SampleClass147 { field: (p0:any,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0012_any_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_ANY_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_ANY_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0013_any_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline147.ts', `
        function pipeline147(p: (p0:any,p1:number)=>void): (p0:any,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0013_any_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0013_any_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline147.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013_any_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_P0_ANY_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_P0_ANY_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0014_p0_any_p1_string_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0014_p0_any_p1_string_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0014_p0_any_p1_string_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014_p0_any_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_P0_ANY_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_P0_ANY_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0015_p0_any_p1_string_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample148.ts', `
        function sample148(p0: (p0:any,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample148');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0015_p0_any_p1_string_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015_p0_any_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0016_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet148.ts', `
        function sampleRet148(): (p0:any,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0016_any_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:string)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0017_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass148.ts', `
        class SampleClass148 { field: (p0:any,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0017_any_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_ANY_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_ANY_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0018_any_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline148.ts', `
        function pipeline148(p: (p0:any,p1:string)=>void): (p0:any,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0018_any_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0018_any_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018_any_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0019_p0_any_p1_boolean_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0019_p0_any_p1_boolean_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0019_p0_any_p1_boolean_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_P0_ANY_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_P0_ANY_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0020_p0_any_p1_boolean_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample149.ts', `
        function sample149(p0: (p0:any,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample149');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0020_p0_any_p1_boolean_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020_p0_any_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0021_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet149.ts', `
        function sampleRet149(): (p0:any,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0021_any_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:boolean)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0022_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass149.ts', `
        class SampleClass149 { field: (p0:any,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0022_any_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_ANY_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_ANY_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0023_any_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline149.ts', `
        function pipeline149(p: (p0:any,p1:boolean)=>void): (p0:any,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0023_any_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0023_any_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023_any_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0024_p0_object_p1_any_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0024_p0_object_p1_any_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0024_p0_object_p1_any_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_P0_OBJECT_P1_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_P0_OBJECT_P1_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0025_p0_object_p1_any_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample150.ts', `
        function sample150(p0: (p0:object,p1:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample150');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0025_p0_object_p1_any_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025_p0_object_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0026_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet150.ts', `
        function sampleRet150(): (p0:object,p1:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0026_object_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:object,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0027_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass150.ts', `
        class SampleClass150 { field: (p0:object,p1:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0027_object_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_OBJECT_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_OBJECT_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0028_object_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline150.ts', `
        function pipeline150(p: (p0:object,p1:any)=>void): (p0:object,p1:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0028_object_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0028_object_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028_object_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0029_p0_object_p1_object_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:object)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0029_p0_object_p1_object_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0029_p0_object_p1_object_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_P0_OBJECT_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_P0_OBJECT_P1_OBJECT_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0030_p0_object_p1_object_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample151.ts', `
        function sample151(p0: (p0:object,p1:object)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample151');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0030_p0_object_p1_object_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030_p0_object_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0031_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet151.ts', `
        function sampleRet151(): (p0:object,p1:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0031_object_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0032_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass151.ts', `
        class SampleClass151 { field: (p0:object,p1:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0032_object_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0033_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline151.ts', `
        function pipeline151(p: (p0:object,p1:object)=>void): (p0:object,p1:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0033_object_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0033_object_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0034_p0_object_p1_number_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0034_p0_object_p1_number_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0034_p0_object_p1_number_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_P0_OBJECT_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_P0_OBJECT_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0035_p0_object_p1_number_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample152.ts', `
        function sample152(p0: (p0:object,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample152');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0035_p0_object_p1_number_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035_p0_object_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0036_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet152.ts', `
        function sampleRet152(): (p0:object,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0036_object_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet152.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0037_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass152.ts', `
        class SampleClass152 { field: (p0:object,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0037_object_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_OBJECT_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_OBJECT_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0038_object_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline152.ts', `
        function pipeline152(p: (p0:object,p1:number)=>void): (p0:object,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0038_object_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0038_object_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline152.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038_object_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0039_p0_object_p1_string_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0039_p0_object_p1_string_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0039_p0_object_p1_string_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_P0_OBJECT_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_P0_OBJECT_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0040_p0_object_p1_string_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample153.ts', `
        function sample153(p0: (p0:object,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample153');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0040_p0_object_p1_string_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040_p0_object_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0041_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet153.ts', `
        function sampleRet153(): (p0:object,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0041_object_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0042_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass153.ts', `
        class SampleClass153 { field: (p0:object,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0042_object_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_OBJECT_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_OBJECT_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0043_object_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline153.ts', `
        function pipeline153(p: (p0:object,p1:string)=>void): (p0:object,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0043_object_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0043_object_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043_object_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0044_p0_object_p1_boolean_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0044_p0_object_p1_boolean_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0044_p0_object_p1_boolean_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_P0_OBJECT_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0045_p0_object_p1_boolean_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample154.ts', `
        function sample154(p0: (p0:object,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample154');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0045_p0_object_p1_boolean_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045_p0_object_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0046_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet154.ts', `
        function sampleRet154(): (p0:object,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0046_object_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0047_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass154.ts', `
        class SampleClass154 { field: (p0:object,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0047_object_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_OBJECT_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_OBJECT_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0048_object_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline154.ts', `
        function pipeline154(p: (p0:object,p1:boolean)=>void): (p0:object,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0048_object_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0048_object_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048_object_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_P0_NUMBER_P1_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_P0_NUMBER_P1_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0049_p0_number_p1_any_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0049_p0_number_p1_any_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0049_p0_number_p1_any_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049_p0_number_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_P0_NUMBER_P1_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_P0_NUMBER_P1_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0050_p0_number_p1_any_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample155.ts', `
        function sample155(p0: (p0:number,p1:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample155');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0050_p0_number_p1_any_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050_p0_number_p1_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0051_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet155.ts', `
        function sampleRet155(): (p0:number,p1:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0051_number_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number,p1:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0052_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass155.ts', `
        class SampleClass155 { field: (p0:number,p1:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0052_number_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_NUMBER_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_NUMBER_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:any)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0053_number_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline155.ts', `
        function pipeline155(p: (p0:number,p1:any)=>void): (p0:number,p1:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0053_number_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0053_number_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053_number_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0054_p0_number_p1_object_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:object)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0054_p0_number_p1_object_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0054_p0_number_p1_object_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_P0_NUMBER_P1_OBJECT_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_P0_NUMBER_P1_OBJECT_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0055_p0_number_p1_object_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample156.ts', `
        function sample156(p0: (p0:number,p1:object)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample156');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0055_p0_number_p1_object_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055_p0_number_p1_object_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0056_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet156.ts', `
        function sampleRet156(): (p0:number,p1:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0056_number_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet156.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0057_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass156.ts', `
        class SampleClass156 { field: (p0:number,p1:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0057_number_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_NUMBER_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_NUMBER_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0058_number_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline156.ts', `
        function pipeline156(p: (p0:number,p1:object)=>void): (p0:number,p1:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0058_number_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0058_number_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline156.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058_number_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0059_p0_number_p1_string_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0059_p0_number_p1_string_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0059_p0_number_p1_string_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_P0_NUMBER_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_P0_NUMBER_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0060_p0_number_p1_string_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample157.ts', `
        function sample157(p0: (p0:number,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample157');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0060_p0_number_p1_string_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060_p0_number_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER_P1_STRING_V2
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER_P1_STRING_V2
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0061_number_p1_string_v2', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet157.ts', `
        function sampleRet157(): (p0:number,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0061_number_p1_string_v2 return convert output");
      const generated = generateFunctions(converted, 'sampleRet157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061_number_p1_string_v2 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0062_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass157.ts', `
        class SampleClass157 { field: (p0:number,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0062_number_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_NUMBER_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_NUMBER_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0063_number_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline157.ts', `
        function pipeline157(p: (p0:number,p1:string)=>void): (p0:number,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0063_number_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0063_number_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063_number_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_PROMISE_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_PROMISE_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0064_promise_number', () => {
    try {
      const result = transCkey2Dtskey('Promise<number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0064_promise_number convert output non-empty");
      assert.strictEqual(result, "Promise<number>", "dts2cpp_convert_func_0064_promise_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_PROMISE_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_PROMISE_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0065_promise_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample297.ts', `
        function sample297(p0: Promise<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample297');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "dts2cpp_convert_func_0065_promise_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_PROMISE_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_PROMISE_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0066_promise_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet297.ts', `
        function sampleRet297(): Promise<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "dts2cpp_convert_func_0066_promise_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet297.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_PROMISE_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_PROMISE_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0067_promise_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass297.ts', `
        class SampleClass297 { field: Promise<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
        "dts2cpp_convert_func_0067_promise_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_PROMISE_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_PROMISE_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Promise<number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0068_promise_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline297.ts', `
        function pipeline297(p: Promise<number>): Promise<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "dts2cpp_convert_func_0068_promise_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "dts2cpp_convert_func_0068_promise_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline297.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068_promise_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0069_promise_string', () => {
    try {
      const result = transCkey2Dtskey('Promise<string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0069_promise_string convert output non-empty");
      assert.strictEqual(result, "Promise<string>", "dts2cpp_convert_func_0069_promise_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0070_promise_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample298.ts', `
        function sample298(p0: Promise<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample298');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "dts2cpp_convert_func_0070_promise_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0071_promise_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet298.ts', `
        function sampleRet298(): Promise<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "dts2cpp_convert_func_0071_promise_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet298.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0072_promise_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass298.ts', `
        class SampleClass298 { field: Promise<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
        "dts2cpp_convert_func_0072_promise_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_PROMISE_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_PROMISE_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Promise<string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0073_promise_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline298.ts', `
        function pipeline298(p: Promise<string>): Promise<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "dts2cpp_convert_func_0073_promise_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "dts2cpp_convert_func_0073_promise_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline298.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073_promise_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_PROMISE_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0074_promise_boolean', () => {
    try {
      const result = transCkey2Dtskey('Promise<boolean>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0074_promise_boolean convert output non-empty");
      assert.strictEqual(result, "Promise<boolean>", "dts2cpp_convert_func_0074_promise_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_PROMISE_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0075_promise_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample299.ts', `
        function sample299(p0: Promise<boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample299');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "dts2cpp_convert_func_0075_promise_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_PROMISE_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0076_promise_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet299.ts', `
        function sampleRet299(): Promise<boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "dts2cpp_convert_func_0076_promise_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet299.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_PROMISE_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0077_promise_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass299.ts', `
        class SampleClass299 { field: Promise<boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
        "dts2cpp_convert_func_0077_promise_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077_promise_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_PROMISE_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_PROMISE_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Promise<boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0078_promise_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline299.ts', `
        function pipeline299(p: Promise<boolean>): Promise<boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "dts2cpp_convert_func_0078_promise_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "dts2cpp_convert_func_0078_promise_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline299.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078_promise_boolean execution error: ${String(err)}`);
    }
  });
});
