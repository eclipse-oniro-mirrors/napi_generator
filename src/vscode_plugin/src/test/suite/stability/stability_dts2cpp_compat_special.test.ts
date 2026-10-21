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

suite('Stability_DTS2CPP_COMPAT_SPECIAL', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_SPECIAL.');

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0001
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0001
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_n`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0001', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_n\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0001 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0001 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0001 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0001 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_n`",
          "dts2cpp_compat_special_0001 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0001 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0002
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0002
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_s`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0002', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_s\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0002 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0002 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0002 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0002 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_s`",
          "dts2cpp_compat_special_0002 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0002 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0003
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0003
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_b`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0003', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_b\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0003 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0003 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0003 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0003 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_b`",
          "dts2cpp_compat_special_0003 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0003 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0004
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0004
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_br`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0004', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_br\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0004 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0004 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0004 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0004 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_br`",
          "dts2cpp_compat_special_0004 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0004 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0005
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0005
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_g171`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0005', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_g171\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0005 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0005 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0005 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0005 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_g171`",
          "dts2cpp_compat_special_0005 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0005 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0006
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0006
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_any`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0006', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_any\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0006 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0006 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0006 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0006 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_any`",
          "dts2cpp_compat_special_0006 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0006 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0007
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0007
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type `${Key}Changed_v`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0007', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `class Compat171 { field: \`\${Key}Changed_v\`; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0007 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0007 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_special_0007 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_special_0007 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`${Key}Changed_v`",
          "dts2cpp_compat_special_0007 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0007 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0008
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0008
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member `${Key}Changed_x`; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0008', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `type Compat171 = { x: \`\${Key}Changed_x\`; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0008 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0008 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_special_0008 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: `${Key}Changed_x`; }", "dts2cpp_compat_special_0008_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0008 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0009
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0009
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `${Key}Changed_Z`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0009', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat171.ts', `function compat171(a: \`\${Key}Changed_Z\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0009 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0009 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0009 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0009 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`${Key}Changed_Z`",
          "dts2cpp_compat_special_0009 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0009 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0010
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0010
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_n`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0010', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_n\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0010 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0010 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0010 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0010 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_n`",
          "dts2cpp_compat_special_0010 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0010 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0011
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0011
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_s`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0011', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_s\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0011 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0011 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0011 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0011 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_s`",
          "dts2cpp_compat_special_0011 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0011 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0012
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0012
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_b`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0012', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_b\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0012 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0012 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0012 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0012 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_b`",
          "dts2cpp_compat_special_0012 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0012 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0013
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0013
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_br`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0013', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_br\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0013 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0013 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0013 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0013 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_br`",
          "dts2cpp_compat_special_0013 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0013 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0014
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0014
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_g226`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0014', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_g226\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0014 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0014 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0014 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0014 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_g226`",
          "dts2cpp_compat_special_0014 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0014 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0015
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0015
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_any`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0015', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_any\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0015 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0015 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0015 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0015 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_any`",
          "dts2cpp_compat_special_0015 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0015 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0016
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0016
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            class field type `tpl-${string}_v`; strictEqual class field type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0016', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `class Compat226 { field: \`tpl-\${string}_v\`; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0016 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0016 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_special_0016 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_special_0016 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "`tpl-${string}_v`",
          "dts2cpp_compat_special_0016 field type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0016 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0017
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0017
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type alias member `tpl-${string}_x`; strictEqual type alias preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0017', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `type Compat226 = { x: \`tpl-\${string}_x\`; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0017 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0017 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_special_0017 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: `tpl-${string}_x`; }", "dts2cpp_compat_special_0017_alias");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0017 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0018
   * @tc.number SUB_NAPI_DTS2CPP_COMPAT_SPECIAL_0018
   * @tc.desc   Stability compat dts2cpp/special: runCompatSafe(doParseTs+transParseObj); malformed
   *            type `tpl-${string}_Z`; strictEqual function param type preserved.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('dts2cpp_compat_special_0018', function() {
    this.timeout(15000);
    try {
      runCompatSafe(() => {
        const parsed = doParseTs('compat226.ts', `function compat226(a: \`tpl-\${string}_Z\`): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_special_0018 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_special_0018 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_special_0018 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_special_0018 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "`tpl-${string}_Z`",
          "dts2cpp_compat_special_0018 param type");
      });
    } catch (err) {
      assert.fail(`dts2cpp_compat_special_0018 execution error: ${err}`);
    }
  });
});
