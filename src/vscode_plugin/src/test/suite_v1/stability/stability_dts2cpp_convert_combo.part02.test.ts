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

suite('Stability_DTS2CPP_CONVERT_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_WORLD
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_WORLD
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type "world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0076_world', () => {
    try {
      const result = transCkey2Dtskey('"world"');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0076_world convert output non-empty");
      assert.strictEqual(result, "\"world\"", "dts2cpp_convert_combo_0076_world convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0076_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_WORLD
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_WORLD
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type "world"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0077_world', () => {
    try {
      const converted = transParseObj(doParseTs('sample169.ts', `function sample169(p0: "world"): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample169');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"world\"",
        "dts2cpp_convert_combo_0077_world param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0077_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_SAMPLERET169
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0078_SAMPLERET169
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type "world"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0078_sampleret169', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet169.ts', `
        function sampleRet169(): "world" { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet169');
      assert.strictEqual(converted.funcs[0].returns, "\"world\"",
        "dts2cpp_convert_combo_0078_sampleret169 return convert output");
      const generated = generateFunctions(converted, 'sampleRet169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet169') || generated.napiCppContent.includes('sampleRet169')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet169'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0078_sampleret169 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_SAMPLECLASS173
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0006_SAMPLECLASS173
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Uppercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0006_sampleclass173', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass173.ts', `
        class SampleClass173 { field: Uppercase<Greeting>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass173');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greeting>",
        "dts2cpp_convert_combo_0006_sampleclass173 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0006_sampleclass173 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0007_UPPERCASE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type
   *            Uppercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0007_uppercase_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline173.ts', `
        function pipeline173(p: Uppercase<Greeting>): Uppercase<Greeting> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline173');
      assert.strictEqual(converted.funcs[0].returns, "Uppercase<Greeting>",
        "dts2cpp_convert_combo_0007_uppercase_greeting pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greeting>",
        "dts2cpp_convert_combo_0007_uppercase_greeting pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline173.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline173') || generated.napiCppContent.includes('pipeline173')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline173'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0007_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0008_LOWERCASE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type
   *            Lowercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0008_lowercase_greeting', () => {
    try {
      const result = transCkey2Dtskey('Lowercase<Greeting>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0008_lowercase_greeting convert output non-empty");
      assert.strictEqual(result, "Lowercase<Greeting>", "dts2cpp_convert_combo_0008_lowercase_greeting convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0008_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0009_LOWERCASE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Lowercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0009_lowercase_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('sample174.ts', `
        function sample174(p0: Lowercase<Greeting>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample174');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greeting>",
        "dts2cpp_convert_combo_0009_lowercase_greeting param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0009_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_SAMPLERET174
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0010_SAMPLERET174
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Lowercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0010_sampleret174', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet174.ts', `
        function sampleRet174(): Lowercase<Greeting> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet174');
      assert.strictEqual(converted.funcs[0].returns, "Lowercase<Greeting>",
        "dts2cpp_convert_combo_0010_sampleret174 return convert output");
      const generated = generateFunctions(converted, 'sampleRet174.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet174') || generated.napiCppContent.includes('sampleRet174')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet174'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0010_sampleret174 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_SAMPLECLASS174
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0011_SAMPLECLASS174
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Lowercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0011_sampleclass174', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass174.ts', `
        class SampleClass174 { field: Lowercase<Greeting>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass174');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greeting>",
        "dts2cpp_convert_combo_0011_sampleclass174 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0011_sampleclass174 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0012_LOWERCASE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type
   *            Lowercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0012_lowercase_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline174.ts', `
        function pipeline174(p: Lowercase<Greeting>): Lowercase<Greeting> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline174');
      assert.strictEqual(converted.funcs[0].returns, "Lowercase<Greeting>",
        "dts2cpp_convert_combo_0012_lowercase_greeting pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greeting>",
        "dts2cpp_convert_combo_0012_lowercase_greeting pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline174.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline174') || generated.napiCppContent.includes('pipeline174')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline174'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0012_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0013_CAPITALIZE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type
   *            Capitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0013_capitalize_greeting', () => {
    try {
      const result = transCkey2Dtskey('Capitalize<Greeting>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0013_capitalize_greeting convert output non-empty");
      assert.strictEqual(result, "Capitalize<Greeting>",
        "dts2cpp_convert_combo_0013_capitalize_greeting convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0013_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0014_CAPITALIZE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Capitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0014_capitalize_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('sample175.ts', `
        function sample175(p0: Capitalize<Greeting>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample175');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greeting>",
        "dts2cpp_convert_combo_0014_capitalize_greeting param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0014_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_SAMPLERET175
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0015_SAMPLERET175
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Capitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0015_sampleret175', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet175.ts', `
        function sampleRet175(): Capitalize<Greeting> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet175');
      assert.strictEqual(converted.funcs[0].returns, "Capitalize<Greeting>",
        "dts2cpp_convert_combo_0015_sampleret175 return convert output");
      const generated = generateFunctions(converted, 'sampleRet175.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet175') || generated.napiCppContent.includes('sampleRet175')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet175'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0015_sampleret175 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_SAMPLECLASS175
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0016_SAMPLECLASS175
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Capitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0016_sampleclass175', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass175.ts', `
        class SampleClass175 { field: Capitalize<Greeting>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass175');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greeting>",
        "dts2cpp_convert_combo_0016_sampleclass175 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0016_sampleclass175 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0017_CAPITALIZE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type
   *            Capitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0017_capitalize_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline175.ts', `
        function pipeline175(p: Capitalize<Greeting>): Capitalize<Greeting> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline175');
      assert.strictEqual(converted.funcs[0].returns, "Capitalize<Greeting>",
        "dts2cpp_convert_combo_0017_capitalize_greeting pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greeting>",
        "dts2cpp_convert_combo_0017_capitalize_greeting pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline175.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline175') || generated.napiCppContent.includes('pipeline175')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline175'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0017_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0018_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0018_uncapitalize_greeting', () => {
    try {
      const result = transCkey2Dtskey('Uncapitalize<Greeting>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0018_uncapitalize_greeting convert output non-empty");
      assert.strictEqual(result, "Uncapitalize<Greeting>",
        "dts2cpp_convert_combo_0018_uncapitalize_greeting convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0018_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0019_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0019_uncapitalize_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('sample176.ts', `
        function sample176(p0: Uncapitalize<Greeting>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample176');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greeting>",
        "dts2cpp_convert_combo_0019_uncapitalize_greeting param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0019_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_SAMPLERET176
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0020_SAMPLERET176
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0020_sampleret176', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet176.ts', `
        function sampleRet176(): Uncapitalize<Greeting> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet176');
      assert.strictEqual(converted.funcs[0].returns, "Uncapitalize<Greeting>",
        "dts2cpp_convert_combo_0020_sampleret176 return convert output");
      const generated = generateFunctions(converted, 'sampleRet176.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet176') || generated.napiCppContent.includes('sampleRet176')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet176'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0020_sampleret176 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_SAMPLECLASS176
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0021_SAMPLECLASS176
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Uncapitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0021_sampleclass176', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass176.ts', `
        class SampleClass176 { field: Uncapitalize<Greeting>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass176');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uncapitalize<Greeting>",
        "dts2cpp_convert_combo_0021_sampleclass176 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0021_sampleclass176 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0022_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0022_uncapitalize_greeting', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline176.ts', `
        function pipeline176(p: Uncapitalize<Greeting>): Uncapitalize<Greeting> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline176');
      assert.strictEqual(converted.funcs[0].returns, "Uncapitalize<Greeting>",
        "dts2cpp_convert_combo_0022_uncapitalize_greeting pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greeting>",
        "dts2cpp_convert_combo_0022_uncapitalize_greeting pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline176.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline176') || generated.napiCppContent.includes('pipeline176')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline176'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0022_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_DATE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0023_DATE
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0023_date', () => {
    try {
      const result = transCkey2Dtskey('Date');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0023_date convert output non-empty");
      assert.strictEqual(result, "Date", "dts2cpp_convert_combo_0023_date convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0023_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_DATE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0024_DATE
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0024_date', () => {
    try {
      const converted = transParseObj(doParseTs('sample189.ts', `function sample189(p0: Date): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample189');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Date",
        "dts2cpp_convert_combo_0024_date param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0024_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_SAMPLERET189
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0025_SAMPLERET189
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0025_sampleret189', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet189.ts', `
        function sampleRet189(): Date { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet189');
      assert.strictEqual(converted.funcs[0].returns, "Date",
        "dts2cpp_convert_combo_0025_sampleret189 return convert output");
      const generated = generateFunctions(converted, 'sampleRet189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet189') || generated.napiCppContent.includes('sampleRet189')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet189'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0025_sampleret189 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_SAMPLECLASS189
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0026_SAMPLECLASS189
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Date; strictEqual convert
   *            output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0026_sampleclass189', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass189.ts', `
        class SampleClass189 { field: Date; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass189');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Date",
        "dts2cpp_convert_combo_0026_sampleclass189 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0026_sampleclass189 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_DATE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0027_DATE
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0027_date', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline189.ts', `function pipeline189(p: Date): Date { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline189');
      assert.strictEqual(converted.funcs[0].returns, "Date",
        "dts2cpp_convert_combo_0027_date pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Date",
        "dts2cpp_convert_combo_0027_date pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline189') || generated.napiCppContent.includes('pipeline189')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline189'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0027_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_REGEXP
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0028_REGEXP
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type RegExp;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0028_regexp', () => {
    try {
      const result = transCkey2Dtskey('RegExp');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0028_regexp convert output non-empty");
      assert.strictEqual(result, "RegExp", "dts2cpp_convert_combo_0028_regexp convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0028_regexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_REGEXP
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0029_REGEXP
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type RegExp; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0029_regexp', () => {
    try {
      const converted = transParseObj(doParseTs('sample190.ts', `function sample190(p0: RegExp): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample190');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp",
        "dts2cpp_convert_combo_0029_regexp param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0029_regexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_SAMPLERET190
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0030_SAMPLERET190
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type RegExp; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0030_sampleret190', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet190.ts', `
        function sampleRet190(): RegExp { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet190');
      assert.strictEqual(converted.funcs[0].returns, "RegExp",
        "dts2cpp_convert_combo_0030_sampleret190 return convert output");
      const generated = generateFunctions(converted, 'sampleRet190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet190') || generated.napiCppContent.includes('sampleRet190')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet190'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0030_sampleret190 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_SAMPLECLASS190
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0031_SAMPLECLASS190
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type RegExp; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0031_sampleclass190', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass190.ts', `
        class SampleClass190 { field: RegExp; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass190');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp",
        "dts2cpp_convert_combo_0031_sampleclass190 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0031_sampleclass190 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_REGEXP
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0032_REGEXP
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type RegExp;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0032_regexp', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline190.ts', `
        function pipeline190(p: RegExp): RegExp { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline190');
      assert.strictEqual(converted.funcs[0].returns, "RegExp",
        "dts2cpp_convert_combo_0032_regexp pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp",
        "dts2cpp_convert_combo_0032_regexp pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline190') || generated.napiCppContent.includes('pipeline190')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline190'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0032_regexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_ERROR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0033_ERROR
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Error;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0033_error', () => {
    try {
      const result = transCkey2Dtskey('Error');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0033_error convert output non-empty");
      assert.strictEqual(result, "Error", "dts2cpp_convert_combo_0033_error convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0033_error execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_ERROR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0034_ERROR
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Error; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0034_error', () => {
    try {
      const converted = transParseObj(doParseTs('sample191.ts', `function sample191(p0: Error): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample191');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Error",
        "dts2cpp_convert_combo_0034_error param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0034_error execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_SAMPLERET191
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0035_SAMPLERET191
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Error; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0035_sampleret191', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet191.ts', `
        function sampleRet191(): Error { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet191');
      assert.strictEqual(converted.funcs[0].returns, "Error",
        "dts2cpp_convert_combo_0035_sampleret191 return convert output");
      const generated = generateFunctions(converted, 'sampleRet191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet191') || generated.napiCppContent.includes('sampleRet191')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet191'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0035_sampleret191 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_SAMPLECLASS191
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0036_SAMPLECLASS191
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Error; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0036_sampleclass191', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass191.ts', `
        class SampleClass191 { field: Error; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass191');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Error",
        "dts2cpp_convert_combo_0036_sampleclass191 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0036_sampleclass191 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_ERROR
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0037_ERROR
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Error; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0037_error', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline191.ts', `
        function pipeline191(p: Error): Error { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline191');
      assert.strictEqual(converted.funcs[0].returns, "Error",
        "dts2cpp_convert_combo_0037_error pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Error",
        "dts2cpp_convert_combo_0037_error pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline191') || generated.napiCppContent.includes('pipeline191')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline191'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0037_error execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_UINT8ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0038_UINT8ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type Uint8Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0038_uint8array', () => {
    try {
      const result = transCkey2Dtskey('Uint8Array');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0038_uint8array convert output non-empty");
      assert.strictEqual(result, "Uint8Array", "dts2cpp_convert_combo_0038_uint8array convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0038_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_UINT8ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0039_UINT8ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type Uint8Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0039_uint8array', () => {
    try {
      const converted = transParseObj(doParseTs('sample192.ts', `
        function sample192(p0: Uint8Array): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample192');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array",
        "dts2cpp_convert_combo_0039_uint8array param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0039_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_SAMPLERET192
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0040_SAMPLERET192
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type Uint8Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0040_sampleret192', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet192.ts', `
        function sampleRet192(): Uint8Array { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet192');
      assert.strictEqual(converted.funcs[0].returns, "Uint8Array",
        "dts2cpp_convert_combo_0040_sampleret192 return convert output");
      const generated = generateFunctions(converted, 'sampleRet192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet192') || generated.napiCppContent.includes('sampleRet192')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet192'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0040_sampleret192 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_SAMPLECLASS192
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0041_SAMPLECLASS192
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type Uint8Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0041_sampleclass192', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass192.ts', `
        class SampleClass192 { field: Uint8Array; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass192');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array",
        "dts2cpp_convert_combo_0041_sampleclass192 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0041_sampleclass192 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_UINT8ARRAY
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0042_UINT8ARRAY
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type Uint8Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0042_uint8array', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline192.ts', `
        function pipeline192(p: Uint8Array): Uint8Array { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline192');
      assert.strictEqual(converted.funcs[0].returns, "Uint8Array",
        "dts2cpp_convert_combo_0042_uint8array pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array",
        "dts2cpp_convert_combo_0042_uint8array pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline192') || generated.napiCppContent.includes('pipeline192')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline192'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0042_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_ARRAYBUFFER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0043_ARRAYBUFFER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0043_arraybuffer', () => {
    try {
      const result = transCkey2Dtskey('ArrayBuffer');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0043_arraybuffer convert output non-empty");
      assert.strictEqual(result, "ArrayBuffer", "dts2cpp_convert_combo_0043_arraybuffer convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0043_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_ARRAYBUFFER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0044_ARRAYBUFFER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0044_arraybuffer', () => {
    try {
      const converted = transParseObj(doParseTs('sample193.ts', `
        function sample193(p0: ArrayBuffer): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample193');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer",
        "dts2cpp_convert_combo_0044_arraybuffer param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0044_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_SAMPLERET193
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0045_SAMPLERET193
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0045_sampleret193', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet193.ts', `
        function sampleRet193(): ArrayBuffer { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet193');
      assert.strictEqual(converted.funcs[0].returns, "ArrayBuffer",
        "dts2cpp_convert_combo_0045_sampleret193 return convert output");
      const generated = generateFunctions(converted, 'sampleRet193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet193') || generated.napiCppContent.includes('sampleRet193')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet193'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0045_sampleret193 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_SAMPLECLASS193
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0046_SAMPLECLASS193
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type ArrayBuffer; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0046_sampleclass193', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass193.ts', `
        class SampleClass193 { field: ArrayBuffer; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass193');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "ArrayBuffer",
        "dts2cpp_convert_combo_0046_sampleclass193 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0046_sampleclass193 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_ARRAYBUFFER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0047_ARRAYBUFFER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type ArrayBuffer;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0047_arraybuffer', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline193.ts', `
        function pipeline193(p: ArrayBuffer): ArrayBuffer { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline193');
      assert.strictEqual(converted.funcs[0].returns, "ArrayBuffer",
        "dts2cpp_convert_combo_0047_arraybuffer pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ArrayBuffer",
        "dts2cpp_convert_combo_0047_arraybuffer pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline193') || generated.napiCppContent.includes('pipeline193')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline193'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0047_arraybuffer execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0048_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0048_weakmap_object_string', () => {
    try {
      const result = transCkey2Dtskey('WeakMap<object, string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0048_weakmap_object_string convert output non-empty");
      assert.strictEqual(result, "WeakMap<object, string>",
        "dts2cpp_convert_combo_0048_weakmap_object_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0048_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0049_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0049_weakmap_object_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample194.ts', `
        function sample194(p0: WeakMap<object, string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample194');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, string>",
        "dts2cpp_convert_combo_0049_weakmap_object_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0049_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_SAMPLERET194
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0050_SAMPLERET194
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0050_sampleret194', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet194.ts', `
        function sampleRet194(): WeakMap<object, string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet194');
      assert.strictEqual(converted.funcs[0].returns, "WeakMap<object, string>",
        "dts2cpp_convert_combo_0050_sampleret194 return convert output");
      const generated = generateFunctions(converted, 'sampleRet194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet194') || generated.napiCppContent.includes('sampleRet194')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet194'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0050_sampleret194 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_SAMPLECLASS194
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0051_SAMPLECLASS194
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type WeakMap<object, string>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0051_sampleclass194', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass194.ts', `
        class SampleClass194 { field: WeakMap<object, string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass194');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "WeakMap<object, string>",
        "dts2cpp_convert_combo_0051_sampleclass194 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0051_sampleclass194 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_WEAKMAP_OBJECT_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0052_WEAKMAP_OBJECT_STRING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type WeakMap<object,
   *            string>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0052_weakmap_object_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline194.ts', `
        function pipeline194(p: WeakMap<object, string>): WeakMap<object, string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline194');
      assert.strictEqual(converted.funcs[0].returns, "WeakMap<object, string>",
        "dts2cpp_convert_combo_0052_weakmap_object_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "WeakMap<object, string>",
        "dts2cpp_convert_combo_0052_weakmap_object_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline194') || generated.napiCppContent.includes('pipeline194')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline194'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0052_weakmap_object_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0053_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type keyof
   *            Map<string, number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0053_keyof_map_string_number', () => {
    try {
      const result = transCkey2Dtskey('keyof Map<string, number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0053_keyof_map_string_number convert output non-empty");
      assert.strictEqual(result, "keyof Map<string, number>",
        "dts2cpp_convert_combo_0053_keyof_map_string_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0053_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0054_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0054_keyof_map_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample197.ts', `
        function sample197(p0: keyof Map<string, number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample197');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, number>",
        "dts2cpp_convert_combo_0054_keyof_map_string_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0054_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_SAMPLERET197
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0055_SAMPLERET197
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0055_sampleret197', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet197.ts', `
        function sampleRet197(): keyof Map<string, number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet197');
      assert.strictEqual(converted.funcs[0].returns, "keyof Map<string, number>",
        "dts2cpp_convert_combo_0055_sampleret197 return convert output");
      const generated = generateFunctions(converted, 'sampleRet197.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet197') || generated.napiCppContent.includes('sampleRet197')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet197'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0055_sampleret197 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_SAMPLECLASS197
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0056_SAMPLECLASS197
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0056_sampleclass197', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass197.ts', `
        class SampleClass197 { field: keyof Map<string, number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass197');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "keyof Map<string, number>",
        "dts2cpp_convert_combo_0056_sampleclass197 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0056_sampleclass197 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_KEYOF_MAP_STRING_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0057_KEYOF_MAP_STRING_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type keyof Map<string,
   *            number>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0057_keyof_map_string_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline197.ts', `
        function pipeline197(p: keyof Map<string, number>): keyof Map<string, number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline197');
      assert.strictEqual(converted.funcs[0].returns, "keyof Map<string, number>",
        "dts2cpp_convert_combo_0057_keyof_map_string_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "keyof Map<string, number>",
        "dts2cpp_convert_combo_0057_keyof_map_string_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline197.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline197') || generated.napiCppContent.includes('pipeline197')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline197'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0057_keyof_map_string_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_TYPEOF_DATE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0058_TYPEOF_DATE
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0058_typeof_date', () => {
    try {
      const result = transCkey2Dtskey('typeof Date');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0058_typeof_date convert output non-empty");
      assert.strictEqual(result, "typeof Date", "dts2cpp_convert_combo_0058_typeof_date convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0058_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_TYPEOF_DATE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0059_TYPEOF_DATE
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0059_typeof_date', () => {
    try {
      const converted = transParseObj(doParseTs('sample198.ts', `
        function sample198(p0: typeof Date): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample198');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date",
        "dts2cpp_convert_combo_0059_typeof_date param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0059_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_SAMPLERET198
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0060_SAMPLERET198
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0060_sampleret198', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet198.ts', `
        function sampleRet198(): typeof Date { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet198');
      assert.strictEqual(converted.funcs[0].returns, "typeof Date",
        "dts2cpp_convert_combo_0060_sampleret198 return convert output");
      const generated = generateFunctions(converted, 'sampleRet198.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet198') || generated.napiCppContent.includes('sampleRet198')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet198'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0060_sampleret198 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_SAMPLECLASS198
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0061_SAMPLECLASS198
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type typeof Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0061_sampleclass198', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass198.ts', `
        class SampleClass198 { field: typeof Date; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass198');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "typeof Date",
        "dts2cpp_convert_combo_0061_sampleclass198 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0061_sampleclass198 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_TYPEOF_DATE
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0062_TYPEOF_DATE
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type typeof Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0062_typeof_date', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline198.ts', `
        function pipeline198(p: typeof Date): typeof Date { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline198');
      assert.strictEqual(converted.funcs[0].returns, "typeof Date",
        "dts2cpp_convert_combo_0062_typeof_date pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "typeof Date",
        "dts2cpp_convert_combo_0062_typeof_date pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline198.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline198') || generated.napiCppContent.includes('pipeline198')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline198'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0062_typeof_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_A_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0063_A_STRING
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0063_a_string', () => {
    try {
      const result = transCkey2Dtskey('{ a: string }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0063_a_string convert output non-empty");
      assert.strictEqual(result, "{ a: string }", "dts2cpp_convert_combo_0063_a_string convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0063_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_A_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0064_A_STRING
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0064_a_string', () => {
    try {
      const converted = transParseObj(doParseTs('sample199.ts', `
        function sample199(p0: { a: string }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample199');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string }",
        "dts2cpp_convert_combo_0064_a_string param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0064_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_SAMPLERET199
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0065_SAMPLERET199
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0065_sampleret199', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet199.ts', `
        function sampleRet199(): { a: string } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet199');
      assert.strictEqual(converted.funcs[0].returns, "{ a: string }",
        "dts2cpp_convert_combo_0065_sampleret199 return convert output");
      const generated = generateFunctions(converted, 'sampleRet199.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet199') || generated.napiCppContent.includes('sampleRet199')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet199'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0065_sampleret199 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_SAMPLECLASS199
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0066_SAMPLECLASS199
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0066_sampleclass199', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass199.ts', `
        class SampleClass199 { field: { a: string }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass199');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ a: string }",
        "dts2cpp_convert_combo_0066_sampleclass199 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0066_sampleclass199 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_A_STRING
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0067_A_STRING
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { a: string };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0067_a_string', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline199.ts', `
        function pipeline199(p: { a: string }): { a: string } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline199');
      assert.strictEqual(converted.funcs[0].returns, "{ a: string }",
        "dts2cpp_convert_combo_0067_a_string pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ a: string }",
        "dts2cpp_convert_combo_0067_a_string pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline199.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline199') || generated.napiCppContent.includes('pipeline199')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline199'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0067_a_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0068_READONLY_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type { readonly b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0068_readonly_b_number', () => {
    try {
      const result = transCkey2Dtskey('{ readonly b: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0068_readonly_b_number convert output non-empty");
      assert.strictEqual(result, "{ readonly b: number }",
        "dts2cpp_convert_combo_0068_readonly_b_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0068_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0069_READONLY_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type { readonly b: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0069_readonly_b_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample200.ts', `
        function sample200(p0: { readonly b: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample200');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number }",
        "dts2cpp_convert_combo_0069_readonly_b_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0069_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_SAMPLERET200
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0070_SAMPLERET200
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type { readonly b: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0070_sampleret200', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet200.ts', `
        function sampleRet200(): { readonly b: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet200');
      assert.strictEqual(converted.funcs[0].returns, "{ readonly b: number }",
        "dts2cpp_convert_combo_0070_sampleret200 return convert output");
      const generated = generateFunctions(converted, 'sampleRet200.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet200') || generated.napiCppContent.includes('sampleRet200')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet200'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0070_sampleret200 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_SAMPLECLASS200
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0071_SAMPLECLASS200
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type { readonly b: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0071_sampleclass200', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass200.ts', `
        class SampleClass200 { field: { readonly b: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass200');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "{ readonly b: number }",
        "dts2cpp_convert_combo_0071_sampleclass200 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0071_sampleclass200 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_READONLY_B_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0072_READONLY_B_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type { readonly b:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0072_readonly_b_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline200.ts', `
        function pipeline200(p: { readonly b: number }): { readonly b: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline200');
      assert.strictEqual(converted.funcs[0].returns, "{ readonly b: number }",
        "dts2cpp_convert_combo_0072_readonly_b_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "{ readonly b: number }",
        "dts2cpp_convert_combo_0072_readonly_b_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline200.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline200') || generated.napiCppContent.includes('pipeline200')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline200'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0072_readonly_b_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_STRING_X_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0073_STRING_X_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: baseline type-string convert; type string & { x:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0073_string_x_number', () => {
    try {
      const result = transCkey2Dtskey('string & { x: number }');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_combo_0073_string_x_number convert output non-empty");
      assert.strictEqual(result, "string & { x: number }", "dts2cpp_convert_combo_0073_string_x_number convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0073_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_STRING_X_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0074_STRING_X_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: function-param convert; type string & { x: number
   *            }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0074_string_x_number', () => {
    try {
      const converted = transParseObj(doParseTs('sample201.ts', `
        function sample201(p0: string & { x: number }): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample201');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number }",
        "dts2cpp_convert_combo_0074_string_x_number param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0074_string_x_number execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_SAMPLERET201
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0075_SAMPLERET201
   * @tc.desc   Stability convert dts2cpp/combo: function-return convert; type string &; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0075_sampleret201', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet201.ts', `
        function sampleRet201(): string & { x: number } { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet201');
      assert.strictEqual(converted.funcs[0].returns, "string & { x: number }",
        "dts2cpp_convert_combo_0075_sampleret201 return convert output");
      const generated = generateFunctions(converted, 'sampleRet201.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet201') || generated.napiCppContent.includes('sampleRet201')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet201'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0075_sampleret201 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_SAMPLECLASS201
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0076_SAMPLECLASS201
   * @tc.desc   Stability convert dts2cpp/combo: class-field convert; type string & { x: number };
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0076_sampleclass201', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass201.ts', `
        class SampleClass201 { field: string & { x: number }; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass201');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string & { x: number }",
        "dts2cpp_convert_combo_0076_sampleclass201 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0076_sampleclass201 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_STRING_X_NUMBER
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_COMBO_0077_STRING_X_NUMBER
   * @tc.desc   Stability convert dts2cpp/combo: parse-convert-gen pipeline; type string & { x:
   *            number }; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_combo_0077_string_x_number', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline201.ts', `
        function pipeline201(p: string & { x: number }): string & { x: number } { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline201');
      assert.strictEqual(converted.funcs[0].returns, "string & { x: number }",
        "dts2cpp_convert_combo_0077_string_x_number pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string & { x: number }",
        "dts2cpp_convert_combo_0077_string_x_number pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline201.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline201') || generated.napiCppContent.includes('pipeline201')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline201'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0077_string_x_number execution error: ${err}`);
    }
  });
});
