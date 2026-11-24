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

suite('Stability_DTS2CPP_CONVERT_MAP', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_MAP_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0001
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0001
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<string,number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0001', () => {
    try {
      const result = transCkey2Dtskey('Map<string,number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0001 convert output non-empty");
      assert.strictEqual(result, "std::map<std::string, double>", "dts2cpp_convert_map_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0002
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0002
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<string,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample11.ts', `
        function sample11(p0: Map<string,number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample11');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "dts2cpp_convert_map_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0003
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0003
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<string,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet11.ts', `
        function sampleRet11(): Map<string,number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "dts2cpp_convert_map_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet11.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet11') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0004
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0004
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<string,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass11.ts', `
        class SampleClass11 { field: Map<string,number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
        "dts2cpp_convert_map_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0005
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0005
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<string,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline11.ts', `
        function pipeline11(p: Map<string,number>): Map<string,number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "dts2cpp_convert_map_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "dts2cpp_convert_map_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline11.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline11') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0006
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0006
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<string,string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0006', () => {
    try {
      const result = transCkey2Dtskey('Map<string,string>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0006 convert output non-empty");
      assert.strictEqual(result, "std::map<std::string, std::string>", "dts2cpp_convert_map_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0006 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0007
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0007
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<string,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample12.ts', `
        function sample12(p0: Map<string,string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample12');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "dts2cpp_convert_map_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0007 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0008
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0008
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<string,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet12.ts', `
        function sampleRet12(): Map<string,string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "dts2cpp_convert_map_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet12.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet12') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0008 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0009
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0009
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<string,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass12.ts', `
        class SampleClass12 { field: Map<string,string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
        "dts2cpp_convert_map_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0009 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0010
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0010
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<string,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline12.ts', `
        function pipeline12(p: Map<string,string>): Map<string,string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "dts2cpp_convert_map_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "dts2cpp_convert_map_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline12.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline12') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0010 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0011
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0011
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<string,boolean>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0011', () => {
    try {
      const result = transCkey2Dtskey('Map<string,boolean>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0011 convert output non-empty");
      assert.strictEqual(result, "std::map<std::string, bool>", "dts2cpp_convert_map_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0011 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0012
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0012
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<string,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample13.ts', `
        function sample13(p0: Map<string,boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample13');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "dts2cpp_convert_map_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0012 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0013
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0013
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<string,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet13.ts', `
        function sampleRet13(): Map<string,boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "dts2cpp_convert_map_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet13.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet13') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0013 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0014
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0014
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<string,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass13.ts', `
        class SampleClass13 { field: Map<string,boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
        "dts2cpp_convert_map_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0014 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0015
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0015
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<string,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline13.ts', `
        function pipeline13(p: Map<string,boolean>): Map<string,boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "dts2cpp_convert_map_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "dts2cpp_convert_map_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline13.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline13') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0015 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0016
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0016
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<number,number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0016', () => {
    try {
      const result = transCkey2Dtskey('Map<number,number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0016 convert output non-empty");
      assert.strictEqual(result, "std::map<double, double>", "dts2cpp_convert_map_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0016 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0017
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0017
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<number,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample14.ts', `
        function sample14(p0: Map<number,number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample14');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "dts2cpp_convert_map_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0017 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0018
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0018
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<number,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet14.ts', `
        function sampleRet14(): Map<number,number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "dts2cpp_convert_map_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet14.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet14') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0018 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0019
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0019
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<number,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass14.ts', `
        class SampleClass14 { field: Map<number,number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
        "dts2cpp_convert_map_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0019 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0020
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0020
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<number,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline14.ts', `
        function pipeline14(p: Map<number,number>): Map<number,number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "dts2cpp_convert_map_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "dts2cpp_convert_map_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline14.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline14') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0020 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0021
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0021
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<number,string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0021', () => {
    try {
      const result = transCkey2Dtskey('Map<number,string>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0021 convert output non-empty");
      assert.strictEqual(result, "std::map<double, std::string>", "dts2cpp_convert_map_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0021 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0022
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0022
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<number,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample15.ts', `
        function sample15(p0: Map<number,string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample15');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "dts2cpp_convert_map_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0022 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0023
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0023
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<number,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet15.ts', `
        function sampleRet15(): Map<number,string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "dts2cpp_convert_map_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet15.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet15') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0023 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0024
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0024
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<number,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass15.ts', `
        class SampleClass15 { field: Map<number,string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
        "dts2cpp_convert_map_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0024 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0025
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0025
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<number,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline15.ts', `
        function pipeline15(p: Map<number,string>): Map<number,string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "dts2cpp_convert_map_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "dts2cpp_convert_map_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline15.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline15') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0025 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0026
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0026
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<number,boolean>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0026', () => {
    try {
      const result = transCkey2Dtskey('Map<number,boolean>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0026 convert output non-empty");
      assert.strictEqual(result, "std::map<double, bool>", "dts2cpp_convert_map_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0026 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0027
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0027
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<number,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample16.ts', `
        function sample16(p0: Map<number,boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample16');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "dts2cpp_convert_map_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0027 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0028
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0028
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<number,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet16.ts', `
        function sampleRet16(): Map<number,boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "dts2cpp_convert_map_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet16.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet16') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0028 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0029
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0029
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<number,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass16.ts', `
        class SampleClass16 { field: Map<number,boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
        "dts2cpp_convert_map_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0029 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0030
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0030
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<number,boolean>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline16.ts', `
        function pipeline16(p: Map<number,boolean>): Map<number,boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "dts2cpp_convert_map_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "dts2cpp_convert_map_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline16.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline16') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0030 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0031
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0031
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type Map<string,any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0031', () => {
    try {
      const result = transCkey2Dtskey('Map<string,any>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0031 convert output non-empty");
      assert.strictEqual(result, "Map<string,any>", "dts2cpp_convert_map_0031 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0031 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0032
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0032
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<string,any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sample63.ts', `
        function sample63(p0: Map<string,any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample63');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,any>",
        "dts2cpp_convert_map_0032 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0032 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0033
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0033
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<string,any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet63.ts', `
        function sampleRet63(): Map<string,any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<string,any>",
        "dts2cpp_convert_map_0033 return convert output");
      const generated = generateFunctions(converted, 'sampleRet63.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet63') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0033 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0034
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0034
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<string,any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass63.ts', `
        class SampleClass63 { field: Map<string,any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,any>",
        "dts2cpp_convert_map_0034 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0034 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0035
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0035
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<string,any>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0035', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline63.ts', `
        function pipeline63(p: Map<string,any>): Map<string,any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<string,any>",
        "dts2cpp_convert_map_0035 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,any>",
        "dts2cpp_convert_map_0035 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline63.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline63') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0035 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0036
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0036
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<string,object>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0036', () => {
    try {
      const result = transCkey2Dtskey('Map<string,object>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0036 convert output non-empty");
      assert.strictEqual(result, "Map<string,object>", "dts2cpp_convert_map_0036 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0036 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0037
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0037
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<string,object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sample64.ts', `
        function sample64(p0: Map<string,object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample64');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,object>",
        "dts2cpp_convert_map_0037 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0037 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0038
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0038
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<string,object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet64.ts', `
        function sampleRet64(): Map<string,object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<string,object>",
        "dts2cpp_convert_map_0038 return convert output");
      const generated = generateFunctions(converted, 'sampleRet64.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet64') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0038 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0039
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0039
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<string,object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass64.ts', `
        class SampleClass64 { field: Map<string,object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,object>",
        "dts2cpp_convert_map_0039 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0039 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0040
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0040
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<string,object>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0040', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline64.ts', `
        function pipeline64(p: Map<string,object>): Map<string,object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<string,object>",
        "dts2cpp_convert_map_0040 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,object>",
        "dts2cpp_convert_map_0040 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline64.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline64') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0040 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0041
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0041
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type
   *            Map<object,string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0041', () => {
    try {
      const result = transCkey2Dtskey('Map<object,string>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0041 convert output non-empty");
      assert.strictEqual(result, "Map<object,string>", "dts2cpp_convert_map_0041 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0041 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0042
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0042
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<object,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sample65.ts', `
        function sample65(p0: Map<object,string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample65');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<object,string>",
        "dts2cpp_convert_map_0042 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0042 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0043
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0043
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<object,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet65.ts', `
        function sampleRet65(): Map<object,string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<object,string>",
        "dts2cpp_convert_map_0043 return convert output");
      const generated = generateFunctions(converted, 'sampleRet65.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet65') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0043 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0044
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0044
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<object,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass65.ts', `
        class SampleClass65 { field: Map<object,string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>",
        "dts2cpp_convert_map_0044 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0044 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0045
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0045
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<object,string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0045', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline65.ts', `
        function pipeline65(p: Map<object,string>): Map<object,string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<object,string>",
        "dts2cpp_convert_map_0045 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<object,string>",
        "dts2cpp_convert_map_0045 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline65.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline65') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0045 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0046
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0046
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type Map<any,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0046', () => {
    try {
      const result = transCkey2Dtskey('Map<any,number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0046 convert output non-empty");
      assert.strictEqual(result, "Map<any,number>", "dts2cpp_convert_map_0046 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0046 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0047
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0047
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<any,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sample66.ts', `
        function sample66(p0: Map<any,number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample66');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<any,number>",
        "dts2cpp_convert_map_0047 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0047 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0048
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0048
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<any,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet66.ts', `
        function sampleRet66(): Map<any,number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<any,number>",
        "dts2cpp_convert_map_0048 return convert output");
      const generated = generateFunctions(converted, 'sampleRet66.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet66') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0048 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0049
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0049
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<any,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass66.ts', `
        class SampleClass66 { field: Map<any,number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>",
        "dts2cpp_convert_map_0049 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0049 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0050
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0050
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<any,number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0050', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline66.ts', `
        function pipeline66(p: Map<any,number>): Map<any,number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<any,number>",
        "dts2cpp_convert_map_0050 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<any,number>",
        "dts2cpp_convert_map_0050 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline66.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline66') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0050 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0051
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0051
   * @tc.desc   Stability convert dts2cpp/map: baseline type-string convert; type Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0051', () => {
    try {
      const result = transCkey2Dtskey('Map<string, number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_map_0051 convert output non-empty");
      assert.strictEqual(result, "std::map<std::string, double>", "dts2cpp_convert_map_0051 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0051 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0052
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0052
   * @tc.desc   Stability convert dts2cpp/map: function-param convert; type Map<string, number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sample281.ts', `
        function sample281(p0: Map<string, number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample281');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "dts2cpp_convert_map_0052 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0052 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0053
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0053
   * @tc.desc   Stability convert dts2cpp/map: function-return convert; type Map<string, number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet281.ts', `
        function sampleRet281(): Map<string, number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "dts2cpp_convert_map_0053 return convert output");
      const generated = generateFunctions(converted, 'sampleRet281.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet281') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0053 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0054
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0054
   * @tc.desc   Stability convert dts2cpp/map: class-field convert; type Map<string, number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass281.ts', `
        class SampleClass281 { field: Map<string, number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
        "dts2cpp_convert_map_0054 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0054 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_MAP_0055
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_MAP_0055
   * @tc.desc   Stability convert dts2cpp/map: parse-convert-gen pipeline; type Map<string, number>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_map_0055', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline281.ts', `
        function pipeline281(p: Map<string, number>): Map<string, number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "dts2cpp_convert_map_0055 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "dts2cpp_convert_map_0055 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline281.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline281') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_map_0055 execution error: ${String(err)}`);
    }
  });
});
