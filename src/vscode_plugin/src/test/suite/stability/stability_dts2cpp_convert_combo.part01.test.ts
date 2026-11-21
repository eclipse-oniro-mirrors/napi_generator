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

suite('Stability_DTS2CPP_CONVERT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0001
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0001
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type () => void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0001', () => {
    try {
      const result = transCkey2Dtskey('() => void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_combo_0001 convert output non-empty");
      assert.strictEqual(result, "std::function<void()>", "dts2cpp_convert_combo_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0001 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0002
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0002
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type () => void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample305.ts', `
        function sample305(p0: () => void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample305');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "dts2cpp_convert_combo_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0002 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0003
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0003
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type () => void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet305.ts', `
        function sampleRet305(): () => void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "dts2cpp_convert_combo_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0003 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0004
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0004
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type () => void; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass305.ts', `
        class SampleClass305 { field: () => void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void()>",
        "dts2cpp_convert_combo_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0004 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0005
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0005
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type () => void;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline305.ts', `
        function pipeline305(p: () => void): () => void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "dts2cpp_convert_combo_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "dts2cpp_convert_combo_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0005 execution error: ${String(err)}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_TCLASS
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_TCLASS
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type tclass;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0006_tclass', () => {
    try {
      const result = transCkey2Dtskey('tclass');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0006_tclass convert output non-empty");
      assert.strictEqual(result, "tclass", "dts2cpp_convert_combo_0006_tclass convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0006_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_TCLASS
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_TCLASS
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type tclass; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0007_tclass', () => {
    try {
      const converted = transParseObj(doParseTs('sample148.ts', `function sample148(p0: tclass): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample148');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass",
        "dts2cpp_convert_combo_0007_tclass param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0007_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_SAMPLERET148
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_SAMPLERET148
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type tclass; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0008_sampleret148', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet148.ts', `
        function sampleRet148(): tclass { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet148');
      assert.strictEqual(converted.funcs[0].returns, "tclass",
        "dts2cpp_convert_combo_0008_sampleret148 return convert output");
      const generated = generateFunctions(converted, 'sampleRet148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet148') || generated.napiCppContent.includes('sampleRet148')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet148'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0008_sampleret148 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_SAMPLECLASS148
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_SAMPLECLASS148
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type tclass; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0009_sampleclass148', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass148.ts', `
        class SampleClass148 { field: tclass; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass148');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "tclass",
        "dts2cpp_convert_combo_0009_sampleclass148 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0009_sampleclass148 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_TCLASS
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_TCLASS
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type tclass;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0010_tclass', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline148.ts', `
        function pipeline148(p: tclass): tclass { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline148');
      assert.strictEqual(converted.funcs[0].returns, "tclass",
        "dts2cpp_convert_combo_0010_tclass pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "tclass",
        "dts2cpp_convert_combo_0010_tclass pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline148') || generated.napiCppContent.includes('pipeline148')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline148'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0010_tclass execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_NUMBER_10
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_NUMBER_10
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type number[10];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0011_number_10', () => {
    try {
      const result = transCkey2Dtskey('number[10]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0011_number_10 convert output non-empty");
      assert.strictEqual(result, "number[10]", "dts2cpp_convert_combo_0011_number_10 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0011_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_NUMBER_10
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_NUMBER_10
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type number[10];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0012_number_10', () => {
    try {
      const converted = transParseObj(doParseTs('sample150.ts', `
        function sample150(p0: number[10]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample150');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10]",
        "dts2cpp_convert_combo_0012_number_10 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0012_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_SAMPLERET150
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_SAMPLERET150
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type number[10];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0013_sampleret150', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet150.ts', `
        function sampleRet150(): number[10] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet150');
      assert.strictEqual(converted.funcs[0].returns, "number[10]",
        "dts2cpp_convert_combo_0013_sampleret150 return convert output");
      const generated = generateFunctions(converted, 'sampleRet150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet150') || generated.napiCppContent.includes('sampleRet150')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet150'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0013_sampleret150 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_SAMPLECLASS150
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_SAMPLECLASS150
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type number[10]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0014_sampleclass150', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass150.ts', `
        class SampleClass150 { field: number[10]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass150');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number[10]",
        "dts2cpp_convert_combo_0014_sampleclass150 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0014_sampleclass150 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_NUMBER_10
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_NUMBER_10
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type number[10];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0015_number_10', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline150.ts', `
        function pipeline150(p: number[10]): number[10] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline150');
      assert.strictEqual(converted.funcs[0].returns, "number[10]",
        "dts2cpp_convert_combo_0015_number_10 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number[10]",
        "dts2cpp_convert_combo_0015_number_10 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline150') || generated.napiCppContent.includes('pipeline150')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline150'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0015_number_10 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_STRING_10_20
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_STRING_10_20
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0016_string_10_20', () => {
    try {
      const result = transCkey2Dtskey('string[10][20]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0016_string_10_20 convert output non-empty");
      assert.strictEqual(result, "string[10][20]", "dts2cpp_convert_combo_0016_string_10_20 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0016_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_STRING_10_20
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_STRING_10_20
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0017_string_10_20', () => {
    try {
      const converted = transParseObj(doParseTs('sample151.ts', `
        function sample151(p0: string[10][20]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample151');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string[10][20]",
        "dts2cpp_convert_combo_0017_string_10_20 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0017_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_SAMPLERET151
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_SAMPLERET151
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0018_sampleret151', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet151.ts', `
        function sampleRet151(): string[10][20] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet151');
      assert.strictEqual(converted.funcs[0].returns, "string[10][20]",
        "dts2cpp_convert_combo_0018_sampleret151 return convert output");
      const generated = generateFunctions(converted, 'sampleRet151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet151') || generated.napiCppContent.includes('sampleRet151')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet151'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0018_sampleret151 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_SAMPLECLASS151
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_SAMPLECLASS151
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0019_sampleclass151', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass151.ts', `
        class SampleClass151 { field: string[10][20]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass151');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string[10][20]",
        "dts2cpp_convert_combo_0019_sampleclass151 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0019_sampleclass151 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_STRING_10_20
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_STRING_10_20
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type string[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0020_string_10_20', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline151.ts', `
        function pipeline151(p: string[10][20]): string[10][20] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline151');
      assert.strictEqual(converted.funcs[0].returns, "string[10][20]",
        "dts2cpp_convert_combo_0020_string_10_20 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string[10][20]",
        "dts2cpp_convert_combo_0020_string_10_20 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline151') || generated.napiCppContent.includes('pipeline151')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline151'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0020_string_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_TYPE
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Type;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0021_type', () => {
    try {
      const result = transCkey2Dtskey('Type');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0021_type convert output non-empty");
      assert.strictEqual(result, "Type", "dts2cpp_convert_combo_0021_type convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0021_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_TYPE
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0022_type', () => {
    try {
      const converted = transParseObj(doParseTs('sample153.ts', `function sample153(p0: Type): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample153');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type",
        "dts2cpp_convert_combo_0022_type param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0022_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_SAMPLERET153
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_SAMPLERET153
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0023_sampleret153', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet153.ts', `
        function sampleRet153(): Type { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet153');
      assert.strictEqual(converted.funcs[0].returns, "Type",
        "dts2cpp_convert_combo_0023_sampleret153 return convert output");
      const generated = generateFunctions(converted, 'sampleRet153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet153') || generated.napiCppContent.includes('sampleRet153')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet153'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0023_sampleret153 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_SAMPLECLASS153
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_SAMPLECLASS153
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Type; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0024_sampleclass153', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass153.ts', `
        class SampleClass153 { field: Type; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass153');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type",
        "dts2cpp_convert_combo_0024_sampleclass153 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0024_sampleclass153 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_TYPE
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Type; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0025_type', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline153.ts', `function pipeline153(p: Type): Type { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline153');
      assert.strictEqual(converted.funcs[0].returns, "Type",
        "dts2cpp_convert_combo_0025_type pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type",
        "dts2cpp_convert_combo_0025_type pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline153') || generated.napiCppContent.includes('pipeline153')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline153'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0025_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_TYPE_10_20
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_TYPE_10_20
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0026_type_10_20', () => {
    try {
      const result = transCkey2Dtskey('Type[10][20]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0026_type_10_20 convert output non-empty");
      assert.strictEqual(result, "Type[10][20]", "dts2cpp_convert_combo_0026_type_10_20 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0026_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_TYPE_10_20
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_TYPE_10_20
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0027_type_10_20', () => {
    try {
      const converted = transParseObj(doParseTs('sample154.ts', `
        function sample154(p0: Type[10][20]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample154');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20]",
        "dts2cpp_convert_combo_0027_type_10_20 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0027_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_SAMPLERET154
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_SAMPLERET154
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0028_sampleret154', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet154.ts', `
        function sampleRet154(): Type[10][20] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet154');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20]",
        "dts2cpp_convert_combo_0028_sampleret154 return convert output");
      const generated = generateFunctions(converted, 'sampleRet154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet154') || generated.napiCppContent.includes('sampleRet154')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet154'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0028_sampleret154 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_SAMPLECLASS154
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_SAMPLECLASS154
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Type[10][20]; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0029_sampleclass154', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass154.ts', `
        class SampleClass154 { field: Type[10][20]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass154');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type[10][20]",
        "dts2cpp_convert_combo_0029_sampleclass154 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0029_sampleclass154 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_TYPE_10_20
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_TYPE_10_20
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Type[10][20];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0030_type_10_20', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline154.ts', `
        function pipeline154(p: Type[10][20]): Type[10][20] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline154');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20]",
        "dts2cpp_convert_combo_0030_type_10_20 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20]",
        "dts2cpp_convert_combo_0030_type_10_20 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline154') || generated.napiCppContent.includes('pipeline154')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline154'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0030_type_10_20 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_TYPE_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_TYPE_10_20_30
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type
   *            Type[10][20][30]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0031_type_10_20_30', () => {
    try {
      const result = transCkey2Dtskey('Type[10][20][30]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0031_type_10_20_30 convert output non-empty");
      assert.strictEqual(result, "Type[10][20][30]", "dts2cpp_convert_combo_0031_type_10_20_30 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0031_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_TYPE_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_TYPE_10_20_30
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0032_type_10_20_30', () => {
    try {
      const converted = transParseObj(doParseTs('sample155.ts', `
        function sample155(p0: Type[10][20][30]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample155');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20][30]",
        "dts2cpp_convert_combo_0032_type_10_20_30 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0032_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_SAMPLERET155
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_SAMPLERET155
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0033_sampleret155', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet155.ts', `
        function sampleRet155(): Type[10][20][30] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet155');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20][30]",
        "dts2cpp_convert_combo_0033_sampleret155 return convert output");
      const generated = generateFunctions(converted, 'sampleRet155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet155') || generated.napiCppContent.includes('sampleRet155')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet155'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0033_sampleret155 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_SAMPLECLASS155
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_SAMPLECLASS155
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0034_sampleclass155', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass155.ts', `
        class SampleClass155 { field: Type[10][20][30]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass155');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Type[10][20][30]",
        "dts2cpp_convert_combo_0034_sampleclass155 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0034_sampleclass155 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_TYPE_10_20_30
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_TYPE_10_20_30
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Type[10][20][30];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0035_type_10_20_30', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline155.ts', `
        function pipeline155(p: Type[10][20][30]): Type[10][20][30] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline155');
      assert.strictEqual(converted.funcs[0].returns, "Type[10][20][30]",
        "dts2cpp_convert_combo_0035_type_10_20_30 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Type[10][20][30]",
        "dts2cpp_convert_combo_0035_type_10_20_30 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline155') || generated.napiCppContent.includes('pipeline155')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline155'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0035_type_10_20_30 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_HELLO_WORLD
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_HELLO_WORLD
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0036_hello_world', () => {
    try {
      const result = transCkey2Dtskey('"hello world"');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0036_hello_world convert output non-empty");
      assert.strictEqual(result, "\"hello world\"", "dts2cpp_convert_combo_0036_hello_world convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0036_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_HELLO_WORLD
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_HELLO_WORLD
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0037_hello_world', () => {
    try {
      const converted = transParseObj(doParseTs('sample157.ts', `
        function sample157(p0: "hello world"): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample157');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world\"",
        "dts2cpp_convert_combo_0037_hello_world param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0037_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_SAMPLERET157
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_SAMPLERET157
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0038_sampleret157', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet157.ts', `
        function sampleRet157(): "hello world" { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet157');
      assert.strictEqual(converted.funcs[0].returns, "\"hello world\"",
        "dts2cpp_convert_combo_0038_sampleret157 return convert output");
      const generated = generateFunctions(converted, 'sampleRet157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet157') || generated.napiCppContent.includes('sampleRet157')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet157'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0038_sampleret157 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_SAMPLECLASS157
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_SAMPLECLASS157
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0039_sampleclass157', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass157.ts', `
        class SampleClass157 { field: "hello world"; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass157');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"hello world\"",
        "dts2cpp_convert_combo_0039_sampleclass157 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0039_sampleclass157 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_HELLO_WORLD
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_HELLO_WORLD
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type "hello world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0040_hello_world', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline157.ts', `
        function pipeline157(p: "hello world"): "hello world" { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline157');
      assert.strictEqual(converted.funcs[0].returns, "\"hello world\"",
        "dts2cpp_convert_combo_0040_hello_world pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"hello world\"",
        "dts2cpp_convert_combo_0040_hello_world pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline157') || generated.napiCppContent.includes('pipeline157')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline157'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0040_hello_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0041_ornull_oneormany_type', () => {
    try {
      const result = transCkey2Dtskey('OrNull<OneOrMany<Type>>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0041_ornull_oneormany_type convert output non-empty");
      assert.strictEqual(result, "OrNull<OneOrMany<Type>>",
        "dts2cpp_convert_combo_0041_ornull_oneormany_type convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0041_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0042_ornull_oneormany_type', () => {
    try {
      const converted = transParseObj(doParseTs('sample158.ts', `
        function sample158(p0: OrNull<OneOrMany<Type>>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample158');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<Type>>",
        "dts2cpp_convert_combo_0042_ornull_oneormany_type param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0042_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_SAMPLERET158
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_SAMPLERET158
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0043_sampleret158', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet158.ts', `
        function sampleRet158(): OrNull<OneOrMany<Type>> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet158');
      assert.strictEqual(converted.funcs[0].returns, "OrNull<OneOrMany<Type>>",
        "dts2cpp_convert_combo_0043_sampleret158 return convert output");
      const generated = generateFunctions(converted, 'sampleRet158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet158') || generated.napiCppContent.includes('sampleRet158')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet158'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0043_sampleret158 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_SAMPLECLASS158
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_SAMPLECLASS158
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type OrNull<OneOrMany<Type>>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0044_sampleclass158', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass158.ts', `
        class SampleClass158 { field: OrNull<OneOrMany<Type>>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass158');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "OrNull<OneOrMany<Type>>",
        "dts2cpp_convert_combo_0044_sampleclass158 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0044_sampleclass158 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_ORNULL_ONEORMANY_TYPE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_ORNULL_ONEORMANY_TYPE
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type
   *            OrNull<OneOrMany<Type>>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0045_ornull_oneormany_type', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline158.ts', `
        function pipeline158(p: OrNull<OneOrMany<Type>>): OrNull<OneOrMany<Type>> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline158');
      assert.strictEqual(converted.funcs[0].returns, "OrNull<OneOrMany<Type>>",
        "dts2cpp_convert_combo_0045_ornull_oneormany_type pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "OrNull<OneOrMany<Type>>",
        "dts2cpp_convert_combo_0045_ornull_oneormany_type pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline158') || generated.napiCppContent.includes('pipeline158')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline158'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0045_ornull_oneormany_type execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type readonly
   *            [string, number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0046_readonly_string_number', () => {
    try {
      const result = transCkey2Dtskey('readonly [string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0046_readonly_string_number convert output non-empty");
      assert.strictEqual(result, "readonly [string, number]",
        "dts2cpp_convert_combo_0046_readonly_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0046_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0047_readonly_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample161.ts', `
        function sample161(p0: readonly [string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample161');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number]",
        "dts2cpp_convert_combo_0047_readonly_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0047_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_SAMPLERET161
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_SAMPLERET161
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0048_sampleret161', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet161.ts', `
        function sampleRet161(): readonly [string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet161');
      assert.strictEqual(converted.funcs[0].returns, "readonly [string, number]",
        "dts2cpp_convert_combo_0048_sampleret161 return convert output");
      const generated = generateFunctions(converted, 'sampleRet161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet161') || generated.napiCppContent.includes('sampleRet161')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet161'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0048_sampleret161 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_SAMPLECLASS161
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_SAMPLECLASS161
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0049_sampleclass161', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass161.ts', `
        class SampleClass161 { field: readonly [string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass161');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "readonly [string, number]",
        "dts2cpp_convert_combo_0049_sampleclass161 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0049_sampleclass161 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_READONLY_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_READONLY_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type readonly [string,
   *            number]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0050_readonly_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline161.ts', `
        function pipeline161(p: readonly [string, number]): readonly [string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline161');
      assert.strictEqual(converted.funcs[0].returns, "readonly [string, number]",
        "dts2cpp_convert_combo_0050_readonly_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "readonly [string, number]",
        "dts2cpp_convert_combo_0050_readonly_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline161') || generated.napiCppContent.includes('pipeline161')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline161'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0050_readonly_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_KEYOF_ARRAYISH
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0051_keyof_arrayish', () => {
    try {
      const result = transCkey2Dtskey('keyof Arrayish');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0051_keyof_arrayish convert output non-empty");
      assert.strictEqual(result, "keyof Arrayish", "dts2cpp_convert_combo_0051_keyof_arrayish convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0051_keyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_KEYOF_ARRAYISH
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0052_keyof_arrayish', () => {
    try {
      const converted = transParseObj(doParseTs('sample162.ts', `
        function sample162(p0: keyof Arrayish): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample162');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish",
        "dts2cpp_convert_combo_0052_keyof_arrayish param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0052_keyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_SAMPLERET162
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_SAMPLERET162
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0053_sampleret162', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet162.ts', `
        function sampleRet162(): keyof Arrayish { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet162');
      assert.strictEqual(converted.funcs[0].returns, "keyof Arrayish",
        "dts2cpp_convert_combo_0053_sampleret162 return convert output");
      const generated = generateFunctions(converted, 'sampleRet162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet162') || generated.napiCppContent.includes('sampleRet162')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet162'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0053_sampleret162 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_SAMPLECLASS162
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_SAMPLECLASS162
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0054_sampleclass162', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass162.ts', `
        class SampleClass162 { field: keyof Arrayish; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass162');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Arrayish",
        "dts2cpp_convert_combo_0054_sampleclass162 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0054_sampleclass162 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_KEYOF_ARRAYISH
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_KEYOF_ARRAYISH
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type keyof Arrayish;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0055_keyof_arrayish', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline162.ts', `
        function pipeline162(p: keyof Arrayish): keyof Arrayish { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline162');
      assert.strictEqual(converted.funcs[0].returns, "keyof Arrayish",
        "dts2cpp_convert_combo_0055_keyof_arrayish pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Arrayish",
        "dts2cpp_convert_combo_0055_keyof_arrayish pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline162') || generated.napiCppContent.includes('pipeline162')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline162'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0055_keyof_arrayish execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_PERSON_AGE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_PERSON_AGE
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Person["age"];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0056_person_age', () => {
    try {
      const result = transCkey2Dtskey('Person["age"]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0056_person_age convert output non-empty");
      assert.strictEqual(result, "Person[\"age\"]", "dts2cpp_convert_combo_0056_person_age convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0056_person_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_PERSON_AGE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_PERSON_AGE
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Person["age"];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0057_person_age', () => {
    try {
      const converted = transParseObj(doParseTs('sample163.ts', `
        function sample163(p0: Person["age"]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample163');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[\"age\"]",
        "dts2cpp_convert_combo_0057_person_age param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0057_person_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_SAMPLERET163
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_SAMPLERET163
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Person["age"];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0058_sampleret163', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet163.ts', `
        function sampleRet163(): Person["age"] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet163');
      assert.strictEqual(converted.funcs[0].returns, "Person[\"age\"]",
        "dts2cpp_convert_combo_0058_sampleret163 return convert output");
      const generated = generateFunctions(converted, 'sampleRet163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet163') || generated.napiCppContent.includes('sampleRet163')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet163'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0058_sampleret163 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_SAMPLECLASS163
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_SAMPLECLASS163
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Person["age"];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0059_sampleclass163', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass163.ts', `
        class SampleClass163 { field: Person["age"]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass163');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Person[\"age\"]",
        "dts2cpp_convert_combo_0059_sampleclass163 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0059_sampleclass163 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_PERSON_AGE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_PERSON_AGE
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Person["age"];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0060_person_age', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline163.ts', `
        function pipeline163(p: Person["age"]): Person["age"] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline163');
      assert.strictEqual(converted.funcs[0].returns, "Person[\"age\"]",
        "dts2cpp_convert_combo_0060_person_age pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[\"age\"]",
        "dts2cpp_convert_combo_0060_person_age pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline163') || generated.napiCppContent.includes('pipeline163')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline163'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0060_person_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Person[keyof
   *            Person]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0061_person_keyof_person', () => {
    try {
      const result = transCkey2Dtskey('Person[keyof Person]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0061_person_keyof_person convert output non-empty");
      assert.strictEqual(result, "Person[keyof Person]",
        "dts2cpp_convert_combo_0061_person_keyof_person convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0061_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Person[keyof Person];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0062_person_keyof_person', () => {
    try {
      const converted = transParseObj(doParseTs('sample165.ts', `
        function sample165(p0: Person[keyof Person]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample165');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[keyof Person]",
        "dts2cpp_convert_combo_0062_person_keyof_person param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0062_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_SAMPLERET165
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_SAMPLERET165
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Person[keyof Person];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0063_sampleret165', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet165.ts', `
        function sampleRet165(): Person[keyof Person] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet165');
      assert.strictEqual(converted.funcs[0].returns, "Person[keyof Person]",
        "dts2cpp_convert_combo_0063_sampleret165 return convert output");
      const generated = generateFunctions(converted, 'sampleRet165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet165') || generated.napiCppContent.includes('sampleRet165')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet165'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0063_sampleret165 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_SAMPLECLASS165
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_SAMPLECLASS165
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Person[keyof Person];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0064_sampleclass165', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass165.ts', `
        class SampleClass165 { field: Person[keyof Person]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass165');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Person[keyof Person]",
        "dts2cpp_convert_combo_0064_sampleclass165 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0064_sampleclass165 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Person[keyof
   *            Person]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0065_person_keyof_person', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline165.ts', `
        function pipeline165(p: Person[keyof Person]): Person[keyof Person] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline165');
      assert.strictEqual(converted.funcs[0].returns, "Person[keyof Person]",
        "dts2cpp_convert_combo_0065_person_keyof_person pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[keyof Person]",
        "dts2cpp_convert_combo_0065_person_keyof_person pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline165') || generated.napiCppContent.includes('pipeline165')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline165'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0065_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Dog extends
   *            Animal ? number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0066_dog_extends_animal_number_string', () => {
    try {
      const result = transCkey2Dtskey('Dog extends Animal ? number : string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0066_dog_extends_animal_number_string convert output non-empty");
      assert.strictEqual(result, "Dog extends Animal ? number : string",
        "dts2cpp_convert_combo_0066_dog_extends_animal_number_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0066_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Dog extends Animal ?
   *            number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0067_dog_extends_animal_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample166.ts', `
        function sample166(p0: Dog extends Animal ? number : string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample166');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string",
        "dts2cpp_convert_combo_0067_dog_extends_animal_number_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0067_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_SAMPLERET166
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_SAMPLERET166
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Dog extends Animal ?
   *            number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0068_sampleret166', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet166.ts', `
        function sampleRet166(): Dog extends Animal ? number : string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet166');
      assert.strictEqual(converted.funcs[0].returns, "Dog extends Animal ? number : string",
        "dts2cpp_convert_combo_0068_sampleret166 return convert output");
      const generated = generateFunctions(converted, 'sampleRet166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet166') || generated.napiCppContent.includes('sampleRet166')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet166'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0068_sampleret166 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_SAMPLECLASS166
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_SAMPLECLASS166
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Dog extends Animal ?
   *            number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0069_sampleclass166', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass166.ts', `
        class SampleClass166 { field: Dog extends Animal ? number : string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass166');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Dog extends Animal ? number : string",
        "dts2cpp_convert_combo_0069_sampleclass166 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0069_sampleclass166 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Dog extends Animal
   *            ? number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0070_dog_extends_animal_number_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline166.ts', `
        function pipeline166(p: Dog extends Animal ? number : string):
        Dog extends Animal ? number : string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline166');
      assert.strictEqual(converted.funcs[0].returns, "Dog extends Animal ? number : string",
        "dts2cpp_convert_combo_0070_dog_extends_animal_number_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string",
        "dts2cpp_convert_combo_0070_dog_extends_animal_number_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline166') || generated.napiCppContent.includes('pipeline166')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline166'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0070_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type T extends number
   *            ? IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0071_t_extends_number_idlabel_36d2c4', () => {
    try {
      const result = transCkey2Dtskey('T extends number ? IdLabel : NameLabel');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0071_t_extends_number_idlabel_36d2c4 convert output non-empty");
      assert.strictEqual(result, "T extends number ? IdLabel : NameLabel",
        "dts2cpp_convert_combo_0071_t_extends_number_idlabel_36d2c4 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0071_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0072_t_extends_number_idlabel_36d2c4', () => {
    try {
      const converted = transParseObj(doParseTs('sample167.ts', `
        function sample167(p0: T extends number ? IdLabel : NameLabel): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample167');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel",
        "dts2cpp_convert_combo_0072_t_extends_number_idlabel_36d2c4 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0072_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_SAMPLERET167
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_SAMPLERET167
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0073_sampleret167', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet167.ts', `
        function sampleRet167(): T extends number ? IdLabel : NameLabel { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet167');
      assert.strictEqual(converted.funcs[0].returns, "T extends number ? IdLabel : NameLabel",
        "dts2cpp_convert_combo_0073_sampleret167 return convert output");
      const generated = generateFunctions(converted, 'sampleRet167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet167') || generated.napiCppContent.includes('sampleRet167')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet167'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0073_sampleret167 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_SAMPLECLASS167
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_SAMPLECLASS167
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0074_sampleclass167', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass167.ts', `
        class SampleClass167 { field: T extends number ? IdLabel : NameLabel; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass167');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel",
        "dts2cpp_convert_combo_0074_sampleclass167 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0074_sampleclass167 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0075_t_extends_number_idlabel_36d2c4', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline167.ts', `
        function pipeline167(p: T extends number ? IdLabel : NameLabel):
        T extends number ? IdLabel : NameLabel { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline167');
      assert.strictEqual(converted.funcs[0].returns, "T extends number ? IdLabel : NameLabel",
        "dts2cpp_convert_combo_0075_t_extends_number_idlabel_36d2c4 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel",
        "dts2cpp_convert_combo_0075_t_extends_number_idlabel_36d2c4 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline167') || generated.napiCppContent.includes('pipeline167')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline167'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0075_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });
});
