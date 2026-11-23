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

suite('Stability_DTS2CPP_CONVERT_SPECIAL', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_SPECIAL.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0001
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0001
   * @tc.desc   Stability convert dts2cpp/special: baseline type-string convert; type
   *            `${Key}Changed`; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0001', () => {
    try {
      const result = transCkey2Dtskey('`${Key}Changed`');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_special_0001 convert output non-empty");
      assert.strictEqual(result, "`${Key}Changed`", "dts2cpp_convert_special_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0002
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0002
   * @tc.desc   Stability convert dts2cpp/special: function-param convert; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample171.ts', `
        function sample171(p0: \`\${Key}Changed\`): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample171');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed`",
        "dts2cpp_convert_special_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0003
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0003
   * @tc.desc   Stability convert dts2cpp/special: function-return convert; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet171.ts', `
        function sampleRet171(): \`\${Key}Changed\` { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet171');
      assert.strictEqual(converted.funcs[0].returns, "`${Key}Changed`",
        "dts2cpp_convert_special_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet171') || generated.napiCppContent.includes('sampleRet171')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet171'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0004
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0004
   * @tc.desc   Stability convert dts2cpp/special: class-field convert; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass171.ts', `
        class SampleClass171 { field: \`\${Key}Changed\`; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass171');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed`",
        "dts2cpp_convert_special_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0005
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0005
   * @tc.desc   Stability convert dts2cpp/special: parse-convert-gen pipeline; type `${Key}Changed`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline171.ts', `
        function pipeline171(p: \`\${Key}Changed\`): \`\${Key}Changed\` { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline171');
      assert.strictEqual(converted.funcs[0].returns, "`${Key}Changed`",
        "dts2cpp_convert_special_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed`",
        "dts2cpp_convert_special_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline171') || generated.napiCppContent.includes('pipeline171')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline171'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0006
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0006
   * @tc.desc   Stability convert dts2cpp/special: baseline type-string convert; type
   *            `tpl-${string}`; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0006', () => {
    try {
      const result = transCkey2Dtskey('`tpl-${string}`');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_special_0006 convert output non-empty");
      assert.strictEqual(result, "`tpl-${string}`", "dts2cpp_convert_special_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0007
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0007
   * @tc.desc   Stability convert dts2cpp/special: function-param convert; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample226.ts', `
        function sample226(p0: \`tpl-\${string}\`): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample226');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}`",
        "dts2cpp_convert_special_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0008
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0008
   * @tc.desc   Stability convert dts2cpp/special: function-return convert; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet226.ts', `
        function sampleRet226(): \`tpl-\${string}\` { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'sampleRet226');
      assert.strictEqual(converted.funcs[0].returns, "`tpl-${string}`",
        "dts2cpp_convert_special_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('sampleRet226') || generated.napiCppContent.includes('sampleRet226')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('sampleRet226'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0009
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0009
   * @tc.desc   Stability convert dts2cpp/special: class-field convert; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass226.ts', `
        class SampleClass226 { field: \`tpl-\${string}\`; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.strictEqual(converted.classes[0].name, 'SampleClass226');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}`",
        "dts2cpp_convert_special_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0010
   * @tc.number SUB_NAPI_DTS2CPP_CONVERT_SPECIAL_0010
   * @tc.desc   Stability convert dts2cpp/special: parse-convert-gen pipeline; type `tpl-${string}`;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_convert_special_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline226.ts', `
        function pipeline226(p: \`tpl-\${string}\`): \`tpl-\${string}\` { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'pipeline226');
      assert.strictEqual(converted.funcs[0].returns, "`tpl-${string}`",
        "dts2cpp_convert_special_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}`",
        "dts2cpp_convert_special_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('pipeline226') || generated.napiCppContent.includes('pipeline226')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('pipeline226'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_special_0010 execution error: ${err}`);
    }
  });
});
