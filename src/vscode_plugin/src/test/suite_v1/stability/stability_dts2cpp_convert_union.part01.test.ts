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

suite('Stability_DTS2CPP_CONVERT_UNION_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_UNION_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0001
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0001
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type number | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0001', () => {
    try {
      const result = transCkey2Dtskey('number | string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0001 convert output non-empty");
      assert.strictEqual(result, "number | string", "dts2cpp_convert_union_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0002
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0002
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type number | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample275.ts', `
        function sample275(p0: number | string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample275');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "dts2cpp_convert_union_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0003
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0003
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type number | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet275.ts', `
        function sampleRet275(): number | string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "dts2cpp_convert_union_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet275.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0004
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0004
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type number | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass275.ts', `
        class SampleClass275 { field: number | string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | string",
        "dts2cpp_convert_union_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0005
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0005
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type number | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline275.ts', `
        function pipeline275(p: number | string): number | string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "dts2cpp_convert_union_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "dts2cpp_convert_union_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline275.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0006
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0006
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type number | string
   *            | void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0006', () => {
    try {
      const result = transCkey2Dtskey('number | string | void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0006 convert output non-empty");
      assert.strictEqual(result, "number | string | void", "dts2cpp_convert_union_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0006 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0007
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0007
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type number | string |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample276.ts', `
        function sample276(p0: number | string | void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample276');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "dts2cpp_convert_union_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0007 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0008
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0008
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type number | string |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet276.ts', `
        function sampleRet276(): number | string | void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "dts2cpp_convert_union_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0008 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0009
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0009
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type number | string | void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass276.ts', `
        class SampleClass276 { field: number | string | void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | string | void",
        "dts2cpp_convert_union_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0009 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0010
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0010
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type number | string |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline276.ts', `
        function pipeline276(p: number | string | void): number | string | void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "dts2cpp_convert_union_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "dts2cpp_convert_union_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0010 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0011
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0011
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type number |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0011', () => {
    try {
      const result = transCkey2Dtskey('number | boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0011 convert output non-empty");
      assert.strictEqual(result, "number | boolean", "dts2cpp_convert_union_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0011 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0012
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0012
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type number | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample277.ts', `
        function sample277(p0: number | boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample277');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "dts2cpp_convert_union_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0012 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0013
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0013
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type number | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet277.ts', `
        function sampleRet277(): number | boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "dts2cpp_convert_union_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0013 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0014
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0014
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type number | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass277.ts', `
        class SampleClass277 { field: number | boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | boolean",
        "dts2cpp_convert_union_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0014 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0015
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0015
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type number | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline277.ts', `
        function pipeline277(p: number | boolean): number | boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "dts2cpp_convert_union_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "dts2cpp_convert_union_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0015 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0016
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0016
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type number | boolean
   *            | void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0016', () => {
    try {
      const result = transCkey2Dtskey('number | boolean | void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0016 convert output non-empty");
      assert.strictEqual(result, "number | boolean | void", "dts2cpp_convert_union_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0016 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0017
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0017
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type number | boolean |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample278.ts', `
        function sample278(p0: number | boolean | void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample278');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "dts2cpp_convert_union_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0017 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0018
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0018
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type number | boolean |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet278.ts', `
        function sampleRet278(): number | boolean | void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "dts2cpp_convert_union_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet278.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0018 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0019
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0019
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type number | boolean | void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass278.ts', `
        class SampleClass278 { field: number | boolean | void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | boolean | void",
        "dts2cpp_convert_union_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0019 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0020
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0020
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type number | boolean |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline278.ts', `
        function pipeline278(p: number | boolean | void): number | boolean | void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "dts2cpp_convert_union_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "dts2cpp_convert_union_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline278.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0020 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0021
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0021
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string |
   *            boolean; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0021', () => {
    try {
      const result = transCkey2Dtskey('string | boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0021 convert output non-empty");
      assert.strictEqual(result, "string | boolean", "dts2cpp_convert_union_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0021 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0022
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0022
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample279.ts', `
        function sample279(p0: string | boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample279');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "dts2cpp_convert_union_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0022 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0023
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0023
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet279.ts', `
        function sampleRet279(): string | boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "dts2cpp_convert_union_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet279.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0023 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0024
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0024
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass279.ts', `
        class SampleClass279 { field: string | boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | boolean",
        "dts2cpp_convert_union_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0024 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0025
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0025
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | boolean;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline279.ts', `
        function pipeline279(p: string | boolean): string | boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "dts2cpp_convert_union_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "dts2cpp_convert_union_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline279.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0025 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0026
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0026
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string | boolean
   *            | void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0026', () => {
    try {
      const result = transCkey2Dtskey('string | boolean | void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0026 convert output non-empty");
      assert.strictEqual(result, "string | boolean | void", "dts2cpp_convert_union_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0026 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0027
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0027
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | boolean |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample280.ts', `
        function sample280(p0: string | boolean | void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample280');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "dts2cpp_convert_union_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0027 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0028
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0028
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | boolean |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet280.ts', `
        function sampleRet280(): string | boolean | void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "dts2cpp_convert_union_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet280.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0028 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0029
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0029
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | boolean | void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass280.ts', `
        class SampleClass280 { field: string | boolean | void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | boolean | void",
        "dts2cpp_convert_union_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0029 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0030
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0030
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | boolean |
   *            void; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline280.ts', `
        function pipeline280(p: string | boolean | void): string | boolean | void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "dts2cpp_convert_union_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "dts2cpp_convert_union_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline280.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0030 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0031_TCLASS_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0031_TCLASS_STRING
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type tclass | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0031_tclass_string', () => {
    try {
      const result = transCkey2Dtskey('tclass | string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0031_tclass_string convert output non-empty");
      assert.strictEqual(result, "tclass | string", "dts2cpp_convert_union_0031_tclass_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0031_tclass_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0032_TCLASS_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0032_TCLASS_STRING
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type tclass | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0032_tclass_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample149.ts', `
        function sample149(p0: tclass | string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample149');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass | string",
        "dts2cpp_convert_union_0032_tclass_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0032_tclass_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0033_SAMPLERET149
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0033_SAMPLERET149
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type tclass | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0033_sampleret149', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet149.ts', `
        function sampleRet149(): tclass | string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet149');
      assert.strictEqual(converted.funcs[0].returns, "tclass | string",
        "dts2cpp_convert_union_0033_sampleret149 return convert output");
      const generated = generateFunctions(converted, 'sampleRet149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet149') || generated.napiCppContent.includes('sampleRet149')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet149'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0033_sampleret149 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0034_SAMPLECLASS149
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0034_SAMPLECLASS149
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type tclass | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0034_sampleclass149', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass149.ts', `
        class SampleClass149 { field: tclass | string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass149');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "tclass | string",
        "dts2cpp_convert_union_0034_sampleclass149 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0034_sampleclass149 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0035_TCLASS_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0035_TCLASS_STRING
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type tclass | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0035_tclass_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline149.ts', `
        function pipeline149(p: tclass | string): tclass | string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline149');
      assert.strictEqual(converted.funcs[0].returns, "tclass | string",
        "dts2cpp_convert_union_0035_tclass_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass | string",
        "dts2cpp_convert_union_0035_tclass_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline149') || generated.napiCppContent.includes('pipeline149')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline149'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0035_tclass_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0036_PERSON_AGE_NAME
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0036_PERSON_AGE_NAME
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type Person["age" |
   *            "name"]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0036_person_age_name', () => {
    try {
      const result = transCkey2Dtskey('Person["age" | "name"]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0036_person_age_name convert output non-empty");
      assert.strictEqual(result, "Person[\"age\" | \"name\"]",
        "dts2cpp_convert_union_0036_person_age_name convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0036_person_age_name execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0037_PERSON_AGE_NAME
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0037_PERSON_AGE_NAME
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type Person["age" |
   *            "name"]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0037_person_age_name', () => {
    try {
      const converted = transParseObj(doParseTs('sample164.ts', `
        function sample164(p0: Person["age" | "name"]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample164');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[\"age\" | \"name\"]",
        "dts2cpp_convert_union_0037_person_age_name param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0037_person_age_name execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0038_SAMPLERET164
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0038_SAMPLERET164
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type Person["age" |
   *            "name"]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0038_sampleret164', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet164.ts', `
        function sampleRet164(): Person["age" | "name"] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet164');
      assert.strictEqual(converted.funcs[0].returns, "Person[\"age\" | \"name\"]",
        "dts2cpp_convert_union_0038_sampleret164 return convert output");
      const generated = generateFunctions(converted, 'sampleRet164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet164') || generated.napiCppContent.includes('sampleRet164')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet164'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0038_sampleret164 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0039_SAMPLECLASS164
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0039_SAMPLECLASS164
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type Person["age" | "name"];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0039_sampleclass164', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass164.ts', `
        class SampleClass164 { field: Person["age" | "name"]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass164');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Person[\"age\" | \"name\"]",
        "dts2cpp_convert_union_0039_sampleclass164 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0039_sampleclass164 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0040_PERSON_AGE_NAME
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0040_PERSON_AGE_NAME
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type Person["age" |
   *            "name"]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0040_person_age_name', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline164.ts', `
        function pipeline164(p: Person["age" | "name"]): Person["age" | "name"] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline164');
      assert.strictEqual(converted.funcs[0].returns, "Person[\"age\" | \"name\"]",
        "dts2cpp_convert_union_0040_person_age_name pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[\"age\" | \"name\"]",
        "dts2cpp_convert_union_0040_person_age_name pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline164') || generated.napiCppContent.includes('pipeline164')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline164'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0040_person_age_name execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0041_WELCOME_EMAIL_EMAIL_HEADING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0041_WELCOME_EMAIL_EMAIL_HEADING
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type "welcome_email"
   *            | "email_heading"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0041_welcome_email_email_heading', () => {
    try {
      const result = transCkey2Dtskey('"welcome_email" | "email_heading"');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0041_welcome_email_email_heading convert output non-empty");
      assert.strictEqual(result, "\"welcome_email\" | \"email_heading\"",
        "dts2cpp_convert_union_0041_welcome_email_email_heading convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0041_welcome_email_email_heading execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0042_WELCOME_EMAIL_EMAIL_HEADING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0042_WELCOME_EMAIL_EMAIL_HEADING
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type "welcome_email" |
   *            "email_heading"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0042_welcome_email_email_heading', () => {
    try {
      const converted = transParseObj(doParseTs('sample170.ts', `
        function sample170(p0: "welcome_email" | "email_heading"): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample170');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"welcome_email\" | \"email_heading\"",
        "dts2cpp_convert_union_0042_welcome_email_email_heading param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0042_welcome_email_email_heading execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0043_SAMPLERET170
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0043_SAMPLERET170
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type "welcome_email" |
   *            "email_heading"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0043_sampleret170', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet170.ts', `
        function sampleRet170(): "welcome_email" | "email_heading" { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet170');
      assert.strictEqual(converted.funcs[0].returns, "\"welcome_email\" | \"email_heading\"",
        "dts2cpp_convert_union_0043_sampleret170 return convert output");
      const generated = generateFunctions(converted, 'sampleRet170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet170') || generated.napiCppContent.includes('sampleRet170')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet170'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0043_sampleret170 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0044_SAMPLECLASS170
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0044_SAMPLECLASS170
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type "welcome_email" |
   *            "email_heading"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0044_sampleclass170', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass170.ts', `
        class SampleClass170 { field: "welcome_email" | "email_heading"; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass170');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"welcome_email\" | \"email_heading\"",
        "dts2cpp_convert_union_0044_sampleclass170 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0044_sampleclass170 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0045_WELCOME_EMAIL_EMAIL_HEADING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0045_WELCOME_EMAIL_EMAIL_HEADING
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type "welcome_email" |
   *            "email_heading"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0045_welcome_email_email_heading', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline170.ts', `
        function pipeline170(p: "welcome_email" | "email_heading"): "welcome_email" | "email_heading" { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline170');
      assert.strictEqual(converted.funcs[0].returns, "\"welcome_email\" | \"email_heading\"",
        "dts2cpp_convert_union_0045_welcome_email_email_heading pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"welcome_email\" | \"email_heading\"",
        "dts2cpp_convert_union_0045_welcome_email_email_heading pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline170') || generated.napiCppContent.includes('pipeline170')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline170'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0045_welcome_email_email_heading execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0046_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0046_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string | number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0046_string_number', () => {
    try {
      const result = transCkey2Dtskey('string | number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0046_string_number convert output non-empty");
      assert.strictEqual(result, "string | number", "dts2cpp_convert_union_0046_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0046_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0047_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0047_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0047_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample187.ts', `
        function sample187(p0: string | number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample187');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number",
        "dts2cpp_convert_union_0047_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0047_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0048_SAMPLERET187
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0048_SAMPLERET187
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0048_sampleret187', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet187.ts', `
        function sampleRet187(): string | number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet187');
      assert.strictEqual(converted.funcs[0].returns, "string | number",
        "dts2cpp_convert_union_0048_sampleret187 return convert output");
      const generated = generateFunctions(converted, 'sampleRet187.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet187') || generated.napiCppContent.includes('sampleRet187')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet187'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0048_sampleret187 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0049_SAMPLECLASS187
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0049_SAMPLECLASS187
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0049_sampleclass187', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass187.ts', `
        class SampleClass187 { field: string | number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass187');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | number",
        "dts2cpp_convert_union_0049_sampleclass187 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0049_sampleclass187 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0050_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0050_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | number;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0050_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline187.ts', `
        function pipeline187(p: string | number): string | number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline187');
      assert.strictEqual(converted.funcs[0].returns, "string | number",
        "dts2cpp_convert_union_0050_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | number",
        "dts2cpp_convert_union_0050_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline187.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline187') || generated.napiCppContent.includes('pipeline187')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline187'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0050_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0051_LIT_1
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0051_LIT_1
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type "lit" | 1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0051_lit_1', () => {
    try {
      const result = transCkey2Dtskey('"lit" | 1');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0051_lit_1 convert output non-empty");
      assert.strictEqual(result, "\"lit\" | 1", "dts2cpp_convert_union_0051_lit_1 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0051_lit_1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0052_LIT_1
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0052_LIT_1
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type "lit" | 1; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0052_lit_1', () => {
    try {
      const converted = transParseObj(doParseTs('sample202.ts', `function sample202(p0: "lit" | 1): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample202');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\" | 1",
        "dts2cpp_convert_union_0052_lit_1 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0052_lit_1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0053_SAMPLERET202
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0053_SAMPLERET202
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type "lit" | 1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0053_sampleret202', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet202.ts', `
        function sampleRet202(): "lit" | 1 { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet202');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\" | 1",
        "dts2cpp_convert_union_0053_sampleret202 return convert output");
      const generated = generateFunctions(converted, 'sampleRet202.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet202') || generated.napiCppContent.includes('sampleRet202')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet202'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0053_sampleret202 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0054_SAMPLECLASS202
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0054_SAMPLECLASS202
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type "lit" | 1; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0054_sampleclass202', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass202.ts', `
        class SampleClass202 { field: "lit" | 1; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass202');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"lit\" | 1",
        "dts2cpp_convert_union_0054_sampleclass202 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0054_sampleclass202 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0055_LIT_1
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0055_LIT_1
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type "lit" | 1;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0055_lit_1', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline202.ts', `
        function pipeline202(p: "lit" | 1): "lit" | 1 { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline202');
      assert.strictEqual(converted.funcs[0].returns, "\"lit\" | 1",
        "dts2cpp_convert_union_0055_lit_1 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"lit\" | 1",
        "dts2cpp_convert_union_0055_lit_1 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline202.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline202') || generated.napiCppContent.includes('pipeline202')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline202'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0055_lit_1 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0056_NULL_UNDEFINED
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0056_NULL_UNDEFINED
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type null |
   *            undefined; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0056_null_undefined', () => {
    try {
      const result = transCkey2Dtskey('null | undefined');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0056_null_undefined convert output non-empty");
      assert.strictEqual(result, "null | undefined", "dts2cpp_convert_union_0056_null_undefined convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0056_null_undefined execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0057_NULL_UNDEFINED
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0057_NULL_UNDEFINED
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type null | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0057_null_undefined', () => {
    try {
      const converted = transParseObj(doParseTs('sample211.ts', `
        function sample211(p0: null | undefined): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample211');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "null | undefined",
        "dts2cpp_convert_union_0057_null_undefined param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0057_null_undefined execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0058_SAMPLERET211
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0058_SAMPLERET211
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type null | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0058_sampleret211', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet211.ts', `
        function sampleRet211(): null | undefined { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet211');
      assert.strictEqual(converted.funcs[0].returns, "null | undefined",
        "dts2cpp_convert_union_0058_sampleret211 return convert output");
      const generated = generateFunctions(converted, 'sampleRet211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet211') || generated.napiCppContent.includes('sampleRet211')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet211'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0058_sampleret211 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0059_SAMPLECLASS211
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0059_SAMPLECLASS211
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type null | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0059_sampleclass211', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass211.ts', `
        class SampleClass211 { field: null | undefined; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass211');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "null | undefined",
        "dts2cpp_convert_union_0059_sampleclass211 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0059_sampleclass211 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0060_NULL_UNDEFINED
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0060_NULL_UNDEFINED
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type null | undefined;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0060_null_undefined', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline211.ts', `
        function pipeline211(p: null | undefined): null | undefined { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline211');
      assert.strictEqual(converted.funcs[0].returns, "null | undefined",
        "dts2cpp_convert_union_0060_null_undefined pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "null | undefined",
        "dts2cpp_convert_union_0060_null_undefined pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline211') || generated.napiCppContent.includes('pipeline211')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline211'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0060_null_undefined execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0061_SYMBOL_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0061_SYMBOL_STRING
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type symbol | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0061_symbol_string', () => {
    try {
      const result = transCkey2Dtskey('symbol | string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0061_symbol_string convert output non-empty");
      assert.strictEqual(result, "symbol | string", "dts2cpp_convert_union_0061_symbol_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0061_symbol_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0062_SYMBOL_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0062_SYMBOL_STRING
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type symbol | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0062_symbol_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample212.ts', `
        function sample212(p0: symbol | string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample212');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "symbol | string",
        "dts2cpp_convert_union_0062_symbol_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0062_symbol_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0063_SAMPLERET212
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0063_SAMPLERET212
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type symbol | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0063_sampleret212', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet212.ts', `
        function sampleRet212(): symbol | string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet212');
      assert.strictEqual(converted.funcs[0].returns, "symbol | string",
        "dts2cpp_convert_union_0063_sampleret212 return convert output");
      const generated = generateFunctions(converted, 'sampleRet212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet212') || generated.napiCppContent.includes('sampleRet212')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet212'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0063_sampleret212 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0064_SAMPLECLASS212
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0064_SAMPLECLASS212
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type symbol | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0064_sampleclass212', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass212.ts', `
        class SampleClass212 { field: symbol | string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass212');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "symbol | string",
        "dts2cpp_convert_union_0064_sampleclass212 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0064_sampleclass212 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0065_SYMBOL_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0065_SYMBOL_STRING
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type symbol | string;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0065_symbol_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline212.ts', `
        function pipeline212(p: symbol | string): symbol | string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline212');
      assert.strictEqual(converted.funcs[0].returns, "symbol | string",
        "dts2cpp_convert_union_0065_symbol_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "symbol | string",
        "dts2cpp_convert_union_0065_symbol_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline212') || generated.napiCppContent.includes('pipeline212')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline212'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0065_symbol_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0066_BOOLEAN_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0066_BOOLEAN_NULL
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type boolean | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0066_boolean_null', () => {
    try {
      const result = transCkey2Dtskey('boolean | null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0066_boolean_null convert output non-empty");
      assert.strictEqual(result, "boolean | null", "dts2cpp_convert_union_0066_boolean_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0066_boolean_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0067_BOOLEAN_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0067_BOOLEAN_NULL
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type boolean | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0067_boolean_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample213.ts', `
        function sample213(p0: boolean | null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample213');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "boolean | null",
        "dts2cpp_convert_union_0067_boolean_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0067_boolean_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0068_SAMPLERET213
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0068_SAMPLERET213
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type boolean | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0068_sampleret213', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet213.ts', `
        function sampleRet213(): boolean | null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet213');
      assert.strictEqual(converted.funcs[0].returns, "boolean | null",
        "dts2cpp_convert_union_0068_sampleret213 return convert output");
      const generated = generateFunctions(converted, 'sampleRet213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet213') || generated.napiCppContent.includes('sampleRet213')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet213'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0068_sampleret213 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0069_SAMPLECLASS213
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0069_SAMPLECLASS213
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type boolean | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0069_sampleclass213', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass213.ts', `
        class SampleClass213 { field: boolean | null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass213');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "boolean | null",
        "dts2cpp_convert_union_0069_sampleclass213 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0069_sampleclass213 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0070_BOOLEAN_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0070_BOOLEAN_NULL
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type boolean | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0070_boolean_null', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline213.ts', `
        function pipeline213(p: boolean | null): boolean | null { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline213');
      assert.strictEqual(converted.funcs[0].returns, "boolean | null",
        "dts2cpp_convert_union_0070_boolean_null pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "boolean | null",
        "dts2cpp_convert_union_0070_boolean_null pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline213') || generated.napiCppContent.includes('pipeline213')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline213'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0070_boolean_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0071_STRING_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0071_STRING_NULL
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type string | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0071_string_null', () => {
    try {
      const result = transCkey2Dtskey('string | null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0071_string_null convert output non-empty");
      assert.strictEqual(result, "string | null", "dts2cpp_convert_union_0071_string_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0071_string_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0072_STRING_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0072_STRING_NULL
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type string | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0072_string_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample216.ts', `
        function sample216(p0: string | null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample216');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null",
        "dts2cpp_convert_union_0072_string_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0072_string_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0073_SAMPLERET216
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0073_SAMPLERET216
   * @tc.desc   Stability convert dts2cpp/union: function-return convert; type string | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0073_sampleret216', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet216.ts', `
        function sampleRet216(): string | null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet216');
      assert.strictEqual(converted.funcs[0].returns, "string | null",
        "dts2cpp_convert_union_0073_sampleret216 return convert output");
      const generated = generateFunctions(converted, 'sampleRet216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet216') || generated.napiCppContent.includes('sampleRet216')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet216'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0073_sampleret216 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0074_SAMPLECLASS216
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0074_SAMPLECLASS216
   * @tc.desc   Stability convert dts2cpp/union: class-field convert; type string | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0074_sampleclass216', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass216.ts', `
        class SampleClass216 { field: string | null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass216');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | null",
        "dts2cpp_convert_union_0074_sampleclass216 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0074_sampleclass216 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0075_STRING_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0075_STRING_NULL
   * @tc.desc   Stability convert dts2cpp/union: parse-convert-gen pipeline; type string | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0075_string_null', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline216.ts', `
        function pipeline216(p: string | null): string | null { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline216');
      assert.strictEqual(converted.funcs[0].returns, "string | null",
        "dts2cpp_convert_union_0075_string_null pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | null",
        "dts2cpp_convert_union_0075_string_null pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline216') || generated.napiCppContent.includes('pipeline216')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline216'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0075_string_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0076_DATE_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0076_DATE_NULL
   * @tc.desc   Stability convert dts2cpp/union: baseline type-string convert; type Date | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0076_date_null', () => {
    try {
      const result = transCkey2Dtskey('Date | null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_union_0076_date_null convert output non-empty");
      assert.strictEqual(result, "Date | null", "dts2cpp_convert_union_0076_date_null convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0076_date_null execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_UNION_0077_DATE_NULL
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_UNION_0077_DATE_NULL
   * @tc.desc   Stability convert dts2cpp/union: function-param convert; type Date | null;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_union_0077_date_null', () => {
    try {
      const converted = transParseObj(doParseTs('sample227.ts', `
        function sample227(p0: Date | null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample227');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Date | null",
        "dts2cpp_convert_union_0077_date_null param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0077_date_null execution error: ${err}`);
    }
  });
});
