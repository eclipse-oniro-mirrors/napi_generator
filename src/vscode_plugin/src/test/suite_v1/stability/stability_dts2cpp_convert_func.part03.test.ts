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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_ANY_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_ANY_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0001_any_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet75.ts', `
        function sampleRet75(): (p0:any,p1:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0001_any_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet75.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001_any_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_ANY_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_ANY_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:object)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0002_any_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass75.ts', `
        class SampleClass75 { field: (p0:any,p1:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0002_any_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002_any_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_ANY_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_ANY_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:object)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0003_any_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline75.ts', `
        function pipeline75(p: (p0:any,p1:object)=>void): (p0:any,p1:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0003_any_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0003_any_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline75.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003_any_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_P0_ANY_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_P0_ANY_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0004_p0_any_p1_any_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0004_p0_any_p1_any_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0004_p0_any_p1_any_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004_p0_any_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_P0_ANY_P1_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_P0_ANY_P1_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0005_p0_any_p1_any_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample76.ts', `
        function sample76(p0: (p0:any,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample76');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0005_p0_any_p1_any_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005_p0_any_p1_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_ANY_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0006_any_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet76.ts', `
        function sampleRet76(): (p0:any,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0006_any_p1_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet76.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_ANY_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any,p1:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0007_any_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass76.ts', `
        class SampleClass76 { field: (p0:any,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0007_any_p1_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_ANY_P1_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_ANY_P1_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:any,p1:any)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0008_any_p1_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline76.ts', `
        function pipeline76(p: (p0:any,p1:any)=>object): (p0:any,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0008_any_p1_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0008_any_p1_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline76.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008_any_p1_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_P0_OBJECT_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_P0_OBJECT_P1_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0009_p0_object_p1_object_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0009_p0_object_p1_object_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0009_p0_object_p1_object_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009_p0_object_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_P0_OBJECT_P1_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_P0_OBJECT_P1_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0010_p0_object_p1_object_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample77.ts', `
        function sample77(p0: (p0:object,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample77');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0010_p0_object_p1_object_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010_p0_object_p1_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0011_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet77.ts', `
        function sampleRet77(): (p0:object,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0011_object_p1_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet77.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0012_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass77.ts', `
        class SampleClass77 { field: (p0:object,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0012_object_p1_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_OBJECT_P1_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_OBJECT_P1_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:object,p1:object)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0013_object_p1_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline77.ts', `
        function pipeline77(p: (p0:object,p1:object)=>any): (p0:object,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0013_object_p1_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0013_object_p1_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline77.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013_object_p1_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_PROMISE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_PROMISE_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0014_promise_any', () => {
    try {
      const result = transCkey2Dtskey('Promise<any>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0014_promise_any convert output non-empty");
      assert.strictEqual(result, "Promise<any>", "dts2cpp_convert_func_0014_promise_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_PROMISE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_PROMISE_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0015_promise_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample80.ts', `
        function sample80(p0: Promise<any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample80');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "dts2cpp_convert_func_0015_promise_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_PROMISE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_PROMISE_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0016_promise_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet80.ts', `
        function sampleRet80(): Promise<any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>",
        "dts2cpp_convert_func_0016_promise_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet80.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_PROMISE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_PROMISE_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Promise<any>; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0017_promise_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass80.ts', `
        class SampleClass80 { field: Promise<any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<any>",
        "dts2cpp_convert_func_0017_promise_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_PROMISE_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_PROMISE_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Promise<any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0018_promise_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline80.ts', `
        function pipeline80(p: Promise<any>): Promise<any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>",
        "dts2cpp_convert_func_0018_promise_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "dts2cpp_convert_func_0018_promise_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline80.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018_promise_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_PROMISE_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_PROMISE_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0019_promise_object', () => {
    try {
      const result = transCkey2Dtskey('Promise<object>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0019_promise_object convert output non-empty");
      assert.strictEqual(result, "Promise<object>", "dts2cpp_convert_func_0019_promise_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_PROMISE_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_PROMISE_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0020_promise_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample81.ts', `
        function sample81(p0: Promise<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample81');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "dts2cpp_convert_func_0020_promise_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_PROMISE_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_PROMISE_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0021_promise_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet81.ts', `
        function sampleRet81(): Promise<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "dts2cpp_convert_func_0021_promise_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet81.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_PROMISE_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_PROMISE_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0022_promise_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass81.ts', `
        class SampleClass81 { field: Promise<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<object>",
        "dts2cpp_convert_func_0022_promise_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_PROMISE_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_PROMISE_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type Promise<object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0023_promise_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline81.ts', `
        function pipeline81(p: Promise<object>): Promise<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "dts2cpp_convert_func_0023_promise_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "dts2cpp_convert_func_0023_promise_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline81.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023_promise_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            Callback<Array<any>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0024_callback_array_any', () => {
    try {
      const result = transCkey2Dtskey('Callback<Array<any>>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0024_callback_array_any convert output non-empty");
      assert.strictEqual(result, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0024_callback_array_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type Callback<Array<any>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0025_callback_array_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample82.ts', `
        function sample82(p0: Callback<Array<any>>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample82');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0025_callback_array_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_STD_FUNCTION_VOID_ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_STD_FUNCTION_VOID_ARRAY_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type Callback<Array<any>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0026_std_function_void_array_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet82.ts', `
        function sampleRet82(): Callback<Array<any>> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0026_std_function_void_array_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet82.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026_std_function_void_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_STD_FUNCTION_VOID_ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_STD_FUNCTION_VOID_ARRAY_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<Array<any>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0027_std_function_void_array_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass82.ts', `
        class SampleClass82 { field: Callback<Array<any>>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0027_std_function_void_array_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027_std_function_void_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_CALLBACK_ARRAY_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_CALLBACK_ARRAY_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            Callback<Array<any>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0028_callback_array_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline82.ts', `
        function pipeline82(p: Callback<Array<any>>): Callback<Array<any>> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0028_callback_array_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0028_callback_array_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline82.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028_callback_array_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0029_callback_array_object', () => {
    try {
      const result = transCkey2Dtskey('Callback<Array<object>>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0029_callback_array_object convert output non-empty");
      assert.strictEqual(result, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0029_callback_array_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0030_callback_array_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample83.ts', `
        function sample83(p0: Callback<Array<object>>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample83');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0030_callback_array_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_STD_FUNCTION_VOID_ARRAY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_STD_FUNCTION_VOID_ARRAY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0031_std_function_void_array_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet83.ts', `
        function sampleRet83(): Callback<Array<object>> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0031_std_function_void_array_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet83.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031_std_function_void_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_STD_FUNCTION_VOID_ARRAY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_STD_FUNCTION_VOID_ARRAY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type Callback<Array<object>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0032_std_function_void_array_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass83.ts', `
        class SampleClass83 { field: Callback<Array<object>>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0032_std_function_void_array_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032_std_function_void_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_CALLBACK_ARRAY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_CALLBACK_ARRAY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            Callback<Array<object>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0033_callback_array_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline83.ts', `
        function pipeline83(p: Callback<Array<object>>): Callback<Array<object>> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0033_callback_array_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0033_callback_array_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline83.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033_callback_array_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_P0_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_P0_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0034_p0_object_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0034_p0_object_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0034_p0_object_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034_p0_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_P0_OBJECT_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_P0_OBJECT_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0035_p0_object_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample84.ts', `
        function sample84(p0: (p0:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample84');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0035_p0_object_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035_p0_object_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0036_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet84.ts', `
        function sampleRet84(): (p0:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0036_object return convert output");
      const generated = generateFunctions(converted, 'sampleRet84.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0037_object', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass84.ts', `
        class SampleClass84 { field: (p0:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0037_object class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type (p0:object)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0038_object', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline84.ts', `
        function pipeline84(p: (p0:object)=>any): (p0:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0038_object pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0038_object pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline84.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_P0_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_P0_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0039_p0_number_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0039_p0_number_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0039_p0_number_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039_p0_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_P0_NUMBER_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_P0_NUMBER_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0040_p0_number_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample85.ts', `
        function sample85(p0: (p0:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample85');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0040_p0_number_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040_p0_number_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0041_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet85.ts', `
        function sampleRet85(): (p0:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0041_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet85.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0042_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass85.ts', `
        class SampleClass85 { field: (p0:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0042_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type (p0:number)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0043_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline85.ts', `
        function pipeline85(p: (p0:number)=>any): (p0:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0043_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0043_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline85.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_P0_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_P0_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0044_p0_string_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0044_p0_string_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0044_p0_string_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044_p0_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_P0_STRING_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_P0_STRING_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0045_p0_string_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample86.ts', `
        function sample86(p0: (p0:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample86');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0045_p0_string_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045_p0_string_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0046_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet86.ts', `
        function sampleRet86(): (p0:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0046_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet86.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0047_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass86.ts', `
        class SampleClass86 { field: (p0:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0047_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type (p0:string)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0048_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline86.ts', `
        function pipeline86(p: (p0:string)=>any): (p0:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0048_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0048_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline86.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_P0_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_P0_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean)=>any; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0049_p0_boolean_any', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0049_p0_boolean_any convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0049_p0_boolean_any convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049_p0_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_P0_BOOLEAN_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_P0_BOOLEAN_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:boolean)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0050_p0_boolean_any', () => {
    try {
      const converted = transParseObj(doParseTs('sample87.ts', `
        function sample87(p0: (p0:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample87');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0050_p0_boolean_any param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050_p0_boolean_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:boolean)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0051_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet87.ts', `
        function sampleRet87(): (p0:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0051_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet87.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet87') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:boolean)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0052_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass87.ts', `
        class SampleClass87 { field: (p0:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0052_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type (p0:boolean)=>any;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0053_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline87.ts', `
        function pipeline87(p: (p0:boolean)=>any): (p0:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0053_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0053_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline87.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline87') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_P0_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_P0_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type (p0:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0054_p0_any_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0054_p0_any_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0054_p0_any_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054_p0_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_P0_ANY_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_P0_ANY_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0055_p0_any_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample88.ts', `
        function sample88(p0: (p0:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample88');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0055_p0_any_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055_p0_any_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0056_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet88.ts', `
        function sampleRet88(): (p0:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0056_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet88.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet88') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0057_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass88.ts', `
        class SampleClass88 { field: (p0:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0057_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type (p0:any)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0058_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline88.ts', `
        function pipeline88(p: (p0:any)=>object): (p0:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0058_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0058_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline88.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline88') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_P0_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_P0_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0059_p0_number_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0059_p0_number_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0059_p0_number_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059_p0_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_P0_NUMBER_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_P0_NUMBER_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:number)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0060_p0_number_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample89.ts', `
        function sample89(p0: (p0:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample89');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0060_p0_number_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060_p0_number_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:number)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0061_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet89.ts', `
        function sampleRet89(): (p0:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0061_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet89.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet89') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:number)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0062_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass89.ts', `
        class SampleClass89 { field: (p0:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0062_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0063_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline89.ts', `
        function pipeline89(p: (p0:number)=>object): (p0:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0063_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0063_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline89.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline89') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_P0_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_P0_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0064_p0_string_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0064_p0_string_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0064_p0_string_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064_p0_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_P0_STRING_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_P0_STRING_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:string)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0065_p0_string_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample90.ts', `
        function sample90(p0: (p0:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample90');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0065_p0_string_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065_p0_string_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:string)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0066_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet90.ts', `
        function sampleRet90(): (p0:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0066_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet90.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet90') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:string)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0067_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass90.ts', `
        class SampleClass90 { field: (p0:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0067_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0068_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline90.ts', `
        function pipeline90(p: (p0:string)=>object): (p0:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0068_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0068_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline90.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline90') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_P0_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_P0_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0069_p0_boolean_object', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0069_p0_boolean_object convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0069_p0_boolean_object convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069_p0_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_P0_BOOLEAN_OBJECT
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_P0_BOOLEAN_OBJECT
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:boolean)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0070_p0_boolean_object', () => {
    try {
      const converted = transParseObj(doParseTs('sample91.ts', `
        function sample91(p0: (p0:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample91');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0070_p0_boolean_object param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070_p0_boolean_object execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:boolean)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0071_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet91.ts', `
        function sampleRet91(): (p0:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0071_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet91.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:boolean)=>object;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0072_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass91.ts', `
        class SampleClass91 { field: (p0:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0072_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean)=>object; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0073_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline91.ts', `
        function pipeline91(p: (p0:boolean)=>object): (p0:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0073_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0073_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline91.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_P0_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_P0_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0074_p0_any_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0074_p0_any_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0074_p0_any_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074_p0_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_P0_ANY_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_P0_ANY_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0075_p0_any_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample92.ts', `
        function sample92(p0: (p0:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample92');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0075_p0_any_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075_p0_any_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_ANY
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0076_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet92.ts', `
        function sampleRet92(): (p0:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0076_any return convert output");
      const generated = generateFunctions(converted, 'sampleRet92.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_ANY
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0077_any', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass92.ts', `
        class SampleClass92 { field: (p0:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0077_any class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077_any execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_ANY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_ANY
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type (p0:any)=>void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0078_any', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline92.ts', `
        function pipeline92(p: (p0:any)=>void): (p0:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0078_any pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0078_any pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline92.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078_any execution error: ${String(err)}`);
    }
  });
});
