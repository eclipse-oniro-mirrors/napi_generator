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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0001_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0001_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline42.ts', `
        function pipeline42(p: (p0:boolean,p1:number)=>number): (p0:boolean,p1:number)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0001_boolean_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0001_boolean_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline42.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline42') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0002_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0002_p0_boolean_p1_boolean_number', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0002_p0_boolean_p1_boolean_number convert output non-empty");
      assert.strictEqual(result, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0002_p0_boolean_p1_boolean_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002_p0_boolean_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0003_P0_BOOLEAN_P1_BOOLEAN_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0003_p0_boolean_p1_boolean_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample43.ts', `
        function sample43(p0: (p0:boolean,p1:boolean)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample43');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0003_p0_boolean_p1_boolean_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003_p0_boolean_p1_boolean_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0004_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0004_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet43.ts', `
        function sampleRet43(): (p0:boolean,p1:boolean)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0004_boolean_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet43.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0005_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0005_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass43.ts', `
        class SampleClass43 { field: (p0:boolean,p1:boolean)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0005_boolean_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0006_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0006_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline43.ts', `
        function pipeline43(p: (p0:boolean,p1:boolean)=>number): (p0:boolean,p1:boolean)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0006_boolean_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0006_boolean_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline43.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_P0_NUMBER_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0007_P0_NUMBER_P1_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0007_p0_number_p1_number_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0007_p0_number_p1_number_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0007_p0_number_p1_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007_p0_number_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_P0_NUMBER_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0008_P0_NUMBER_P1_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0008_p0_number_p1_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample44.ts', `
        function sample44(p0: (p0:number,p1:number)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample44');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0008_p0_number_p1_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008_p0_number_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0009_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0009_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet44.ts', `
        function sampleRet44(): (p0:number,p1:number)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0009_number_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet44.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0010_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0010_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass44.ts', `
        class SampleClass44 { field: (p0:number,p1:number)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0010_number_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0011_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0011_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline44.ts', `
        function pipeline44(p: (p0:number,p1:number)=>string): (p0:number,p1:number)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0011_number_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0011_number_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline44.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0012_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0012_p0_number_p1_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0012_p0_number_p1_boolean_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0012_p0_number_p1_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012_p0_number_p1_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0013_P0_NUMBER_P1_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0013_p0_number_p1_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample45.ts', `
        function sample45(p0: (p0:number,p1:boolean)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample45');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0013_p0_number_p1_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013_p0_number_p1_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0014_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0014_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet45.ts', `
        function sampleRet45(): (p0:number,p1:boolean)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0014_number_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet45.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet45') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0015_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0015_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass45.ts', `
        class SampleClass45 { field: (p0:number,p1:boolean)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0015_number_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0016_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0016_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline45.ts', `
        function pipeline45(p: (p0:number,p1:boolean)=>string): (p0:number,p1:boolean)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0016_number_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0016_number_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline45.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline45') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0017_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0017_p0_string_p1_string_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0017_p0_string_p1_string_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0017_p0_string_p1_string_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_P0_STRING_P1_STRING_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0018_P0_STRING_P1_STRING_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0018_p0_string_p1_string_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample46.ts', `
        function sample46(p0: (p0:string,p1:string)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample46');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0018_p0_string_p1_string_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018_p0_string_p1_string_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0019_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0019_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet46.ts', `
        function sampleRet46(): (p0:string,p1:string)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0019_string_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet46.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet46') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0020_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0020_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass46.ts', `
        class SampleClass46 { field: (p0:string,p1:string)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(std::string, std::string)>", "dts2cpp_convert_func_0020_string_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0021_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0021_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline46.ts', `
        function pipeline46(p: (p0:string,p1:string)=>string): (p0:string,p1:string)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0021_string_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0021_string_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline46.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline46') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0022_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0022_p0_boolean_p1_number_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0022_p0_boolean_p1_number_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0022_p0_boolean_p1_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022_p0_boolean_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0023_P0_BOOLEAN_P1_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0023_p0_boolean_p1_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample47.ts', `
        function sample47(p0: (p0:boolean,p1:number)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample47');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0023_p0_boolean_p1_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023_p0_boolean_p1_number_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0024_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0024_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet47.ts', `
        function sampleRet47(): (p0:boolean,p1:number)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0024_boolean_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet47.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet47') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0025_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0025_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass47.ts', `
        class SampleClass47 { field: (p0:boolean,p1:number)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0025_boolean_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0026_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0026_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline47.ts', `
        function pipeline47(p: (p0:boolean,p1:number)=>string): (p0:boolean,p1:number)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0026_boolean_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0026_boolean_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline47.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline47') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_P0_BOOLEAN_P1_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0027_P0_BOOLEAN_P1_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0027_p0_boolean_p1_boolean_string', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0027_p0_boolean_p1_boolean_string convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0027_p0_boolean_p1_boolean_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027_p0_boolean_p1_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_P0_BOOLEAN_P1_BOOLEAN_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0028_P0_BOOLEAN_P1_BOOLEAN_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0028_p0_boolean_p1_boolean_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample48.ts', `
        function sample48(p0: (p0:boolean,p1:boolean)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample48');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0028_p0_boolean_p1_boolean_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028_p0_boolean_p1_boolean_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0029_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0029_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet48.ts', `
        function sampleRet48(): (p0:boolean,p1:boolean)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0029_boolean_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet48.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet48') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0030_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0030_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass48.ts', `
        class SampleClass48 { field: (p0:boolean,p1:boolean)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0030_boolean_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0031_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0031_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline48.ts', `
        function pipeline48(p: (p0:boolean,p1:boolean)=>string): (p0:boolean,p1:boolean)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0031_boolean_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0031_boolean_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline48.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline48') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0032_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0032_p0_number_p1_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0032_p0_number_p1_number_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0032_p0_number_p1_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0033_P0_NUMBER_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0033_p0_number_p1_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample49.ts', `
        function sample49(p0: (p0:number,p1:number)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample49');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0033_p0_number_p1_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033_p0_number_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0034_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0034_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet49.ts', `
        function sampleRet49(): (p0:number,p1:number)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0034_number_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet49.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0035_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0035_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass49.ts', `
        class SampleClass49 { field: (p0:number,p1:number)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0035_number_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0036_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0036_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline49.ts', `
        function pipeline49(p: (p0:number,p1:number)=>boolean): (p0:number,p1:number)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0036_number_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0036_number_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline49.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0037_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0037_p0_number_p1_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0037_p0_number_p1_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0037_p0_number_p1_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0038_P0_NUMBER_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0038_p0_number_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample50.ts', `
        function sample50(p0: (p0:number,p1:boolean)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample50');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0038_p0_number_p1_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038_p0_number_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0039_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0039_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet50.ts', `
        function sampleRet50(): (p0:number,p1:boolean)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0039_number_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet50.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0040_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0040_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass50.ts', `
        class SampleClass50 { field: (p0:number,p1:boolean)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0040_number_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0041_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0041_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline50.ts', `
        function pipeline50(p: (p0:number,p1:boolean)=>boolean): (p0:number,p1:boolean)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0041_number_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0041_number_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline50.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0042_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0042_p0_string_p1_string_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0042_p0_string_p1_string_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0042_p0_string_p1_string_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_P0_STRING_P1_STRING_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0043_P0_STRING_P1_STRING_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0043_p0_string_p1_string_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample51.ts', `
        function sample51(p0: (p0:string,p1:string)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample51');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0043_p0_string_p1_string_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043_p0_string_p1_string_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0044_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0044_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet51.ts', `
        function sampleRet51(): (p0:string,p1:string)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0044_string_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet51.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0045_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0045_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass51.ts', `
        class SampleClass51 { field: (p0:string,p1:string)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0045_string_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0046_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0046_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline51.ts', `
        function pipeline51(p: (p0:string,p1:string)=>boolean): (p0:string,p1:string)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0046_string_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0046_string_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline51.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0047_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0047_p0_boolean_p1_number_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0047_p0_boolean_p1_number_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0047_p0_boolean_p1_number_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0048_P0_BOOLEAN_P1_NUMBER_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0048_p0_boolean_p1_number_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample52.ts', `
        function sample52(p0: (p0:boolean,p1:number)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample52');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0048_p0_boolean_p1_number_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048_p0_boolean_p1_number_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0049_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0049_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet52.ts', `
        function sampleRet52(): (p0:boolean,p1:number)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0049_boolean_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet52.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0050_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0050_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass52.ts', `
        class SampleClass52 { field: (p0:boolean,p1:number)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0050_boolean_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0051_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0051_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline52.ts', `
        function pipeline52(p: (p0:boolean,p1:number)=>boolean): (p0:boolean,p1:number)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0051_boolean_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0051_boolean_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline52.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0052_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0052_p0_boolean_p1_boolean_boolean', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0052_p0_boolean_p1_boolean_boolean convert output non-empty");
      assert.strictEqual(result, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0052_p0_boolean_p1_boolean_boolean convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052_p0_boolean_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0053_P0_BOOLEAN_P1_BOOLEAN_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0053_p0_boolean_p1_boolean_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sample53.ts', `
        function sample53(p0: (p0:boolean,p1:boolean)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample53');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0053_p0_boolean_p1_boolean_boolean param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053_p0_boolean_p1_boolean_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0054_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0054_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet53.ts', `
        function sampleRet53(): (p0:boolean,p1:boolean)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0054_boolean_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet53.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0055_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0055_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass53.ts', `
        class SampleClass53 { field: (p0:boolean,p1:boolean)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0055_boolean_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_BOOLEAN_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0056_BOOLEAN_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:boolean)=>boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0056_boolean_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline53.ts', `
        function pipeline53(p: (p0:boolean,p1:boolean)=>boolean): (p0:boolean,p1:boolean)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0056_boolean_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0056_boolean_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline53.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056_boolean_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_P0_NUMBER_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0057_P0_NUMBER_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0057_p0_number_p1_number_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0057_p0_number_p1_number_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0057_p0_number_p1_number_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057_p0_number_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_P0_NUMBER_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0058_P0_NUMBER_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0058_p0_number_p1_number_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample54.ts', `
        function sample54(p0: (p0:number,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample54');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0058_p0_number_p1_number_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058_p0_number_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0059_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0059_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet54.ts', `
        function sampleRet54(): (p0:number,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0059_number_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet54.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0060_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0060_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass54.ts', `
        class SampleClass54 { field: (p0:number,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0060_number_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0061_NUMBER_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0061_number_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline54.ts', `
        function pipeline54(p: (p0:number,p1:number)=>void): (p0:number,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0061_number_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0061_number_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline54.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061_number_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0062_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0062_p0_number_p1_boolean_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0062_p0_number_p1_boolean_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0062_p0_number_p1_boolean_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062_p0_number_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0063_P0_NUMBER_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0063_p0_number_p1_boolean_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample55.ts', `
        function sample55(p0: (p0:number,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample55');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0063_p0_number_p1_boolean_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063_p0_number_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0064_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0064_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet55.ts', `
        function sampleRet55(): (p0:number,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0064_number_p1_boolean return convert output");
      const generated = generateFunctions(converted, 'sampleRet55.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0065_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0065_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass55.ts', `
        class SampleClass55 { field: (p0:number,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0065_number_p1_boolean class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_NUMBER_P1_BOOLEAN
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0066_NUMBER_P1_BOOLEAN
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:number,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0066_number_p1_boolean', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline55.ts', `
        function pipeline55(p: (p0:number,p1:boolean)=>void): (p0:number,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0066_number_p1_boolean pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0066_number_p1_boolean pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline55.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066_number_p1_boolean execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_P0_STRING_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0067_P0_STRING_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0067_p0_string_p1_string_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0067_p0_string_p1_string_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0067_p0_string_p1_string_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067_p0_string_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_P0_STRING_P1_STRING_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0068_P0_STRING_P1_STRING_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0068_p0_string_p1_string_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample56.ts', `
        function sample56(p0: (p0:string,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample56');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0068_p0_string_p1_string_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068_p0_string_p1_string_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0069_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0069_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet56.ts', `
        function sampleRet56(): (p0:string,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0069_string_p1_string return convert output");
      const generated = generateFunctions(converted, 'sampleRet56.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0070_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0070_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass56.ts', `
        class SampleClass56 { field: (p0:string,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0070_string_p1_string class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_STRING_P1_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0071_STRING_P1_STRING
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:string,p1:string)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0071_string_p1_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline56.ts', `
        function pipeline56(p: (p0:string,p1:string)=>void): (p0:string,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0071_string_p1_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0071_string_p1_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline56.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071_string_p1_string execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0072_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0072_p0_boolean_p1_number_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0072_p0_boolean_p1_number_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0072_p0_boolean_p1_number_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072_p0_boolean_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0073_P0_BOOLEAN_P1_NUMBER_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0073_p0_boolean_p1_number_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample57.ts', `
        function sample57(p0: (p0:boolean,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample57');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0073_p0_boolean_p1_number_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073_p0_boolean_p1_number_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0074_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: function-return convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0074_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet57.ts', `
        function sampleRet57(): (p0:boolean,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0074_boolean_p1_number return convert output");
      const generated = generateFunctions(converted, 'sampleRet57.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0075_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: class-field convert; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0075_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass57.ts', `
        class SampleClass57 { field: (p0:boolean,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0075_boolean_p1_number class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_BOOLEAN_P1_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0076_BOOLEAN_P1_NUMBER
   * @tc.desc   Stability convert dts2cpp/func: parse-convert-gen pipeline; type
   *            (p0:boolean,p1:number)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0076_boolean_p1_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline57.ts', `
        function pipeline57(p: (p0:boolean,p1:number)=>void): (p0:boolean,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0076_boolean_p1_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0076_boolean_p1_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline57.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076_boolean_p1_number execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0077_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: baseline type-string convert; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0077_p0_boolean_p1_boolean_void', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0077_p0_boolean_p1_boolean_void convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0077_p0_boolean_p1_boolean_void convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077_p0_boolean_p1_boolean_void execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_FUNC_0078_P0_BOOLEAN_P1_BOOLEAN_VOID
   * @tc.desc   Stability convert dts2cpp/func: function-param convert; type
   *            (p0:boolean,p1:boolean)=>void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_func_0078_p0_boolean_p1_boolean_void', () => {
    try {
      const converted = transParseObj(doParseTs('sample58.ts', `
        function sample58(p0: (p0:boolean,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample58');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0078_p0_boolean_p1_boolean_void param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078_p0_boolean_p1_boolean_void execution error: ${String(err)}`);
    }
  });
});
